"use client";

import { useState } from "react";
import {
  Bars3Icon,
  HomeIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  BookOpenIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  BellIcon,
  NewspaperIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function DemoPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const menuItems = [
    { label: "Home", icon: HomeIcon },
    { label: "Chats", icon: ChatBubbleLeftRightIcon },
    { label: "Calendar", icon: CalendarDaysIcon },
    { label: "Clubs", icon: UserGroupIcon },
    { label: "AI Notebook", icon: BookOpenIcon },
    { label: "Courses", icon: AcademicCapIcon },
    { label: "Settings", icon: Cog6ToothIcon },
    { label: "Profile", icon: UserCircleIcon },
  ];

  const events = [
    {
      title: "CS101 Lecture · Algorithms",
      date: "Today · 14:00–15:00",
      tag: "Lecture",
    },
    {
      title: "AI Society · Welcome Social",
      date: "Tomorrow · 18:00–20:00",
      tag: "Society",
    },
    {
      title: "Alumni Q&A · Careers in Tech",
      date: "Friday · 16:00–17:00",
      tag: "Careers",
    },
  ];

  return (
    <div className="h-screen w-full bg-[#0B0F19] text-slate-100 flex">
      {/* SIDEBAR */}
      <aside
        className={`relative z-20 h-screen border-r border-slate-800 bg-slate-900/30 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0.0,0.2,1)]
          ${sidebarCollapsed ? "w-16" : "w-52"}`}
      >
        {/* SIDEBAR HEADER — ONLY TOGGLE LIVES HERE */}
        <div className="flex h-14 items-center px-4 border-b border-slate-800">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 
            hover:border-teal-400 hover:text-teal-300 transition"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        </div>

        {/* SIDEBAR MENU */}
        <nav className="mt-4 flex flex-col h-[calc(100%-56px)] px-2">
          {/* TOP MENU ITEMS */}
          <div className="flex flex-col gap-2">
            {menuItems.slice(0, 6).map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-800/60 transition-colors overflow-hidden"
              >
                <item.icon className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span
                  className={`whitespace-nowrap text-sm transition-[opacity,transform] duration-300 ${
                    sidebarCollapsed
                      ? "opacity-0 -translate-x-2"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* SPACER — pushes bottom items down */}
          <div className="flex-1" />

          {/* BOTTOM MENU ITEMS: Settings + Profile */}
          <div className="flex flex-col gap-2 mb-4">
            {menuItems.slice(6).map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-800/60 transition-colors overflow-hidden"
              >
                <item.icon className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span
                  className={`whitespace-nowrap text-sm transition-[opacity,transform] duration-300 ${
                    sidebarCollapsed
                      ? "opacity-0 -translate-x-2"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-h-0">
        {/* TOP NAVBAR */}
        <header className="flex h-14 items-center border-b border-slate-800 bg-slate-900/40 backdrop-blur-xl px-4 md:px-6">
          {/* LEFT SPACER */}
          <div className="flex flex-1" />

          {/* CENTER — SEARCH BAR */}
          <div className="flex flex-1 justify-center px-2">
            <div className="relative w-full max-w-xl">
              <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses, events, clubs, alumni..."
                className="h-9 w-full rounded-full border border-slate-700/80 bg-slate-900/80 pl-9 pr-3 
                text-xs text-slate-100 placeholder:text-slate-500 
                focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-500/60"
              />
            </div>
          </div>

          {/* RIGHT SIDE — UNIVERSITY / ROLE / NOTIFICATIONS */}
          <div className="flex flex-1 justify-end items-center gap-3 text-[11px]">
            <span className="hidden md:inline rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-200">
              Demo university
            </span>

            <span className="hidden md:inline rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-200">
              Role: Current student (Year 1)
            </span>

            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 
              hover:border-teal-400 hover:text-teal-300 transition"
            >
              <BellIcon className="h-4 w-4" />
              <span className="absolute right-1 top-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 
              text-[9px] font-semibold text-white">
                1
              </span>
            </button>
          </div>
        </header>

        {/* PAGE CONTENT (scrollable) */}
        <div className="flex-1 overflow-y-auto p-8">
          <p className="text-xs tracking-wide text-teal-300 mb-1">EVENTS OVERVIEW</p>

          <h1 className="text-3xl font-semibold">
            Latest Events in{" "}
            <span className="text-teal-300">Birkbeck University</span>
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400 text-sm">
            A quick snapshot of this week’s lectures, society events and alumni-led
            sessions, pulled into one simple view for students.
          </p>

          {/* EVENTS SECTION */}
          <section className="mt-10 w-full max-w-3xl rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl shadow-xl pt-5 overflow-hidden">
            {/* GRADIENT HEADER BAR */}
            <div
              className="-mt-5 flex justify-between items-center px-6 py-4 
              bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 
              rounded-t-xl text-white shadow-md"
            >
              <div className="text-white/90">
                <h2 className="text-lg font-semibold">Your upcoming week</h2>
                <p className="text-xs text-white/80 mt-1">
                  Timetable changes and key events in one view.
                </p>
              </div>

              <button
                className="rounded-full bg-white/20 hover:bg-white/30 
                px-4 py-1.5 text-xs text-white backdrop-blur-sm transition"
              >
                Sync timetable
              </button>
            </div>

            {/* EVENTS LIST */}
            <div className="border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
              {events.map((ev, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 hover:border-teal-400/70 transition"
                >
                  <h3 className="font-medium">{ev.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{ev.date}</p>
                  <span className="mt-2 inline-block rounded-full border border-teal-500/60 bg-teal-600/20 px-3 py-1 text-[10px] text-teal-300">
                    {ev.tag}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* FLOATING BUTTONS */}
        <div className="fixed right-6 bottom-32 flex flex-col gap-4">
          <button className="h-14 w-14 rounded-full bg-teal-600 text-white shadow-lg shadow-teal-900/60 flex items-center justify-center hover:bg-teal-500 transition">
            <NewspaperIcon className="h-6 w-6" />
          </button>

          <button className="h-14 w-14 rounded-full bg-teal-600 text-white shadow-lg shadow-teal-900/60 flex items-center justify-center hover:bg-teal-500 transition">
            <SparklesIcon className="h-6 w-6" />
          </button>
        </div>
      </main>
    </div>
  );
}
