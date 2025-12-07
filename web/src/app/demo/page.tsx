"use client";

import { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  UsersIcon,
  CpuChipIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

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

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export default function DemoHomePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background accent */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(8,47,73,0.85),_rgba(15,23,42,1))]" />

      <div className="relative flex min-h-screen flex-col">
        {/* HEADER */}
        <header className="flex h-14 items-center justify-between border-b border-slate-800/70 bg-slate-950/80 px-4 md:px-6">
          {/* Left: hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-slate-200 hover:border-teal-400 hover:text-teal-300"
            aria-label="Toggle sidebar"
            onClick={() => setSidebarCollapsed((prev) => !prev)}
          >
            <Bars3Icon className="h-4 w-4" />
          </button>

          <div className="flex-1" />

          {/* Right: environment + role + bell */}
          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-200 md:inline">
              Demo university
            </span>

            <span className="hidden rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-200 md:inline">
              Role: Current student (Year 1)
            </span>

            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-slate-200 hover:border-teal-400 hover:text-teal-300"
              aria-label="Notifications"
            >
              <BellIcon className="h-4 w-4" />
              <span className="absolute right-1 top-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 text-[9px] font-semibold text-white">
                1
              </span>
            </button>
          </div>
        </header>

        {/* BODY: sidebar + main content */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* SIDEBAR */}
          <aside
            className={[
              "flex flex-col border-r border-slate-800/70 bg-slate-950/90 py-4 text-[11px] text-slate-300 transition-[width] duration-300 ease-out",
              sidebarCollapsed ? "items-center w-[70px]" : "w-[230px] px-3",
            ].join(" ")}
          >
            <SidebarItem
              label="Home"
              icon={HomeIcon}
              collapsed={sidebarCollapsed}
              active
            />
            <SidebarItem
              label="Chats"
              icon={ChatBubbleLeftRightIcon}
              collapsed={sidebarCollapsed}
              notification
            />
            <SidebarItem
              label="Calendar"
              icon={CalendarDaysIcon}
              collapsed={sidebarCollapsed}
            />
            <SidebarItem
              label="Clubs"
              icon={UsersIcon}
              collapsed={sidebarCollapsed}
            />
            <SidebarItem
              label="AI Notebook"
              icon={CpuChipIcon}
              collapsed={sidebarCollapsed}
            />
            <SidebarItem
              label="Courses"
              icon={AcademicCapIcon}
              collapsed={sidebarCollapsed}
            />
            <SidebarItem
              label="Settings"
              icon={Cog6ToothIcon}
              collapsed={sidebarCollapsed}
            />
            <SidebarItem
              label="Profile"
              icon={UserCircleIcon}
              collapsed={sidebarCollapsed}
            />
          </aside>

          {/* CONTENT */}
          <section className="relative flex-1 overflow-y-auto px-5 py-6 md:px-8 md:py-8">
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

            {/* Right floating buttons (in theme, optional) */}
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
    </main>
  );
}

/**
 * Sidebar item with Heroicons, supporting collapsed/expanded states.
 */
function SidebarItem({
  label,
  icon: Icon,
  collapsed,
  notification,
  active,
}: {
  label: string;
  icon: IconType;
  collapsed: boolean;
  notification?: boolean;
  active?: boolean;
}) {
  const baseIconClasses =
    "h-4 w-4 flex-shrink-0 " +
    (active ? "text-teal-300" : "text-slate-300 group-hover:text-teal-200");

  if (collapsed) {
    // Collapsed: centered stack
    return (
      <div className="relative mb-1 flex flex-col items-center gap-1">
        <div
          className={[
            "flex h-9 w-9 items-center justify-center rounded-xl border bg-slate-900/80",
            active
              ? "border-teal-500/70 text-teal-300"
              : "border-slate-700/80 text-slate-300",
          ].join(" ")}
        >
          <Icon className="h-4 w-4" />
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

  // Expanded: row with icon and label
  return (
    <button
      className={[
        "group relative mb-1 flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left transition-colors",
        active ? "bg-slate-900/80" : "hover:bg-slate-900/60",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-8 w-8 items-center justify-center rounded-xl border bg-slate-900/80",
          active
            ? "border-teal-500/70 text-teal-300"
            : "border-slate-700/80 text-slate-300",
        ].join(" ")}
      >
        <Icon className={baseIconClasses} />
      </div>
      <span
        className={
          "text-[11px] " +
          (active ? "text-teal-200" : "text-slate-200 group-hover:text-teal-200")
        }
      >
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
