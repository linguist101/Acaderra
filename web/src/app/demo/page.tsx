"use client";

import { useState } from "react";

const mockEvents = [
  {
    id: 1,
    title: "CS101 Lecture · Algorithms",
    time: "Today · 14:00–15:00",
    type: "Lecture",
  },
  {
    id: 2,
    title: "AI Society · Welcome Social",
    time: "Tomorrow · 18:00–20:00",
    type: "Society",
  },
  {
    id: 3,
    title: "Alumni Q&A · Careers in Tech",
    time: "Friday · 16:00–17:00",
    type: "Careers",
  },
];

export default function DemoHomePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background accent */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(8,47,73,0.85),_rgba(15,23,42,1))]" />

      <div className="flex min-h-screen items-center justify-center px-4 py-8">
        {/* Main app frame */}
        <div className="flex w-full max-w-6xl flex-col rounded-3xl border border-teal-500/20 bg-slate-950/80 shadow-2xl shadow-teal-500/25 backdrop-blur-md">
          {/* Header */}
          <header className="flex items-center justify-between gap-4 border-b border-slate-800/70 px-6 py-4">
            {/* Left: hamburger */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-slate-200 hover:border-teal-400 hover:text-teal-300"
              aria-label="Toggle sidebar"
              onClick={() => setSidebarCollapsed((prev) => !prev)}
            >
              <span className="flex flex-col gap-[3px]">
                <span className="block h-[2px] w-4 rounded-full bg-current" />
                <span className="block h-[2px] w-4 rounded-full bg-current" />
                <span className="block h-[2px] w-4 rounded-full bg-current" />
              </span>
            </button>

            <div className="flex-1" />

            {/* Right: environment + role + bell */}
            <div className="flex items-center gap-3 text-[11px]">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-200">
                Demo university
              </span>

              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-200">
                Role: Current student (Year 1)
              </span>

              <button
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-slate-200 hover:border-teal-400 hover:text-teal-300"
                aria-label="Notifications"
              >
                {/* Simple bell shape */}
                <span className="relative block h-4 w-4 rounded-full border border-current" />
                <span className="absolute bottom-[7px] h-[2px] w-4 rounded-full bg-current" />
                {/* Notification badge */}
                <span className="absolute right-1 top-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 text-[9px] font-semibold text-white">
                  1
                </span>
              </button>
            </div>
          </header>

          {/* Main layout: sidebar + content */}
          <div
            className="grid min-h-[520px]"
            style={{
              gridTemplateColumns: sidebarCollapsed
                ? "70px minmax(0,1fr)"
                : "220px minmax(0,1fr)",
            }}
          >
            {/* Sidebar */}
            <aside className="flex flex-col items-center gap-3 border-r border-slate-800/70 bg-slate-950/85 px-2 py-4 text-[11px] text-slate-300 transition-all duration-200">
              <SidebarItem label="Home" collapsed={sidebarCollapsed} />
              <SidebarItem label="Chats" collapsed={sidebarCollapsed} notification />
              <SidebarItem label="Calendar" collapsed={sidebarCollapsed} />
              <SidebarItem label="Clubs" collapsed={sidebarCollapsed} />
              <SidebarItem label="AI Notebook" collapsed={sidebarCollapsed} />
              <SidebarItem label="Courses" collapsed={sidebarCollapsed} />
              <SidebarItem label="Settings" collapsed={sidebarCollapsed} />
              <SidebarItem label="Profile" collapsed={sidebarCollapsed} />
            </aside>

            {/* Content */}
            <section className="relative px-6 py-8">
              {/* Heading block */}
              <div className="max-w-xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-teal-300">
                  Events overview
                </p>
                <div className="mt-1 flex flex-wrap items-baseline gap-2">
                  <h1 className="text-xl font-semibold text-slate-50 md:text-2xl">
                    Latest Events in{" "}
                    <span className="inline-block bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                      Birkbeck University
                    </span>
                  </h1>
                </div>
                <div className="mt-3 h-px w-40 bg-gradient-to-r from-teal-400/80 via-cyan-400/70 to-transparent" />
                <p className="mt-3 text-xs text-slate-400">
                  A quick snapshot of this week&apos;s lectures, society events and
                  alumni-led sessions, pulled into one simple view for students.
                </p>
              </div>

              {/* Centered upcoming week card */}
              <div className="mt-8 flex justify-center">
                <div className="w-full max-w-md overflow-hidden rounded-2xl border border-teal-500/40 bg-slate-950/95 shadow-lg shadow-teal-500/25">
                  {/* Card header with synced theme */}
                  <div className="flex items-start justify-between bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 px-4 py-3 text-slate-950">
                    <div>
                      <p className="text-sm font-semibold">Your upcoming week</p>
                      <p className="mt-0.5 text-[11px] text-slate-900/80">
                        Timetable changes and key events in one view.
                      </p>
                    </div>
                    <button className="rounded-full bg-slate-950/85 px-3 py-1 text-[11px] font-medium text-teal-200 shadow-sm shadow-slate-900/60 hover:bg-slate-900">
                      Sync timetable
                    </button>
                  </div>

                  {/* Events list */}
                  <div className="space-y-2 px-4 py-3 text-sm">
                    {mockEvents.map((ev) => (
                      <div
                        key={ev.id}
                        className="rounded-xl border border-slate-800/80 bg-slate-900/85 px-3 py-3"
                      >
                        <p className="text-slate-50">{ev.title}</p>
                        <p className="mt-1 text-xs text-slate-400">{ev.time}</p>
                        <p className="mt-2 inline-flex items-center rounded-full bg-slate-950/90 px-2 py-0.5 text-[11px] text-teal-300">
                          <span className="mr-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                          {ev.type}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right floating buttons (kept minimal, in theme) */}
              <div className="pointer-events-none absolute inset-y-0 right-4 hidden flex-col items-end justify-center gap-3 md:flex">
                <button className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-400 text-[11px] font-semibold">
                  News
                </button>
                <button className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-400 text-[11px] font-semibold">
                  AI
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

/**
 * Sidebar item that supports collapsed/expanded states.
 * - collapsed: 70px wide, icon+small label under
 * - expanded: wider, icon + text in a row
 */
function SidebarItem({
  label,
  collapsed,
  notification,
}: {
  label: string;
  collapsed: boolean;
  notification?: boolean;
}) {
  if (collapsed) {
    // Collapsed: stacked
    return (
      <div className="relative flex flex-col items-center gap-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 text-[11px] text-slate-200">
          {label[0]}
        </div>
        {notification && (
          <span className="absolute -right-1 top-0 inline-flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 text-[8px] font-semibold text-white">
            1
          </span>
        )}
        <span className="text-[9px] text-slate-400 text-center leading-tight">
          {label}
        </span>
      </div>
    );
  }

  // Expanded: icon + text row
  return (
    <button className="group relative flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left text-slate-200 hover:bg-slate-900/70">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 text-[11px] text-slate-200">
        {label[0]}
      </div>
      <span className="text-[11px] text-slate-200 group-hover:text-teal-200">
        {label}
      </span>
      {notification && (
        <span className="absolute right-2 inline-flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 text-[8px] font-semibold text-white">
          1
        </span>
      )}
    </button>
  );
}
