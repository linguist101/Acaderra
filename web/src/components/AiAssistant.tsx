"use client";

import { useState } from "react";
import {
  SparklesIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAsk() {
    if (!input.trim() || loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Something went wrong talking to the AI.");
      } else {
        setAnswer(data.reply);
      }
    } catch (err) {
      console.error(err);
      setError("Network or server error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* AI PANEL */}
      {open && (
        <div className="fixed right-6 bottom-24 z-50 w-80 rounded-2xl border border-teal-500/60 bg-slate-950/95 shadow-2xl backdrop-blur-xl p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs font-semibold text-teal-300 uppercase tracking-wide">
              Acaderra AI
            </div>
            <button
              onClick={() => setOpen(false)}
              className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-slate-800/80 text-slate-300"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-400 mb-1">
            Ask about lectures, timetables, events, or study help.
          </p>

          <div className="flex-1 min-h-[80px] max-h-40 overflow-y-auto rounded-lg border border-slate-800 bg-slate-900/60 px-2 py-2 text-xs text-slate-100">
            {error && <p className="text-rose-400">{error}</p>}
            {!error && !answer && (
              <p className="text-slate-500">
                I&apos;m ready when you are. Type a question below.
              </p>
            )}
            {!error && answer && <p className="whitespace-pre-wrap">{answer}</p>}
          </div>

          <div className="mt-2 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAsk();
                }
              }}
              placeholder="Ask Acaderra AI…"
              className="flex-1 rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 text-xs 
              text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-500/60"
            />
            <button
              onClick={handleAsk}
              disabled={loading}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-slate-950 
              hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <PaperAirplaneIcon className="h-4 w-4 -rotate-12" />
            </button>
          </div>

          {loading && (
            <p className="mt-1 text-[10px] text-slate-400">
              Thinking for you…
            </p>
          )}
        </div>
      )}

      {/* FLOATING AI BUTTON (ALWAYS SAME POSITION ON SCREEN) */}
      <button
        className="fixed right-6 bottom-16 z-40 h-14 w-14 rounded-full bg-teal-600 text-white shadow-lg shadow-teal-900/60 
        flex items-center justify-center hover:bg-teal-500 transition"
        onClick={() => setOpen((prev) => !prev)}
      >
        <SparklesIcon className="h-6 w-6" />
      </button>
    </>
  );
}
