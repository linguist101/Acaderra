"use client";

import { useEffect, useRef, useState } from "react";
import {
  SparklesIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom whenever messages change or panel opens
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function handleAsk() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    // Add user message to chat immediately
    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try:
      // Only send last N messages as history to keep context tight
      const historyToSend = updatedMessages.slice(-12);

      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: historyToSend,
        }),
      });

      const data = await res.json();

      if (!res.ok || data?.error) {
        console.error("Arcai error:", data);
        setError(
          data?.error ||
            "Something went wrong talking to Arcai. Please try again."
        );
        return;
      }

      const replyText: string =
        data.reply || "I couldn't generate a response.";

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: replyText,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setError("Network or server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ARCai PANEL */}
      {open && (
        <div className="fixed right-6 bottom-24 z-50 w-80 rounded-2xl border border-teal-500/60 bg-slate-950/95 shadow-2xl backdrop-blur-xl p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between mb-1">
            <div className="text-xs font-semibold text-teal-300 uppercase tracking-wide">
              Arcai
            </div>
            <button
              onClick={() => setOpen(false)}
              className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-slate-800/80 text-slate-300"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-400 mb-1">
            Ask about login, missing courses, assignments, grades, timetable, or
            technical issues in Acaderra.
          </p>

          {/* CHAT MESSAGES AREA */}
          <div
            ref={scrollRef}
            className="flex-1 min-h-[120px] max-h-64 overflow-y-auto rounded-lg border border-slate-800 bg-slate-900/60 px-2 py-2 text-xs"
          >
            {/* Empty state */}
            {messages.length === 0 && !error && !loading && (
              <p className="text-slate-500">
                I&apos;m Arcai. Tell me what you&apos;re stuck on — login,
                courses, assignments, timetable, or something not loading.
              </p>
            )}

            {/* Messages */}
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-[11px] leading-snug whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-teal-600 text-slate-950"
                      : "bg-slate-800 text-slate-100"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {/* Error message */}
            {error && (
              <p className="text-rose-400 text-[11px] mt-1">{error}</p>
            )}

            {/* Loading indicator */}
            {loading && (
              <p className="text-slate-400 text-[11px] mt-1">
                Arcai is thinking…
              </p>
            )}
          </div>

          {/* INPUT AREA */}
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
              placeholder="Ask Arcai…"
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
        </div>
      )}

      {/* FLOATING ARCai BUTTON (ALWAYS SAME POSITION ON SCREEN) */}
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
