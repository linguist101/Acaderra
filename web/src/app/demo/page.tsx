"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  MagnifyingGlassIcon,
  PhoneIcon,
  VideoCameraIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import AiAssistant from "@/components/AiAssistant";

export default function ChatsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const router = useRouter();

  const menuItems = [
    { label: "Home", icon: HomeIcon, route: "/demo" },
    { label: "Chats", icon: ChatBubbleLeftRightIcon, route: "/demo/chats" },
    { label: "Calendar", icon: CalendarDaysIcon, route: "" },
    { label: "Clubs", icon: UserGroupIcon, route: "" },
    { label: "AI Notebook", icon: BookOpenIcon, route: "" },
    { label: "Courses", icon: AcademicCapIcon, route: "" },
    { label: "Settings", icon: Cog6ToothIcon, route: "" },
    { label: "Profile", icon: UserCircleIcon, route: "" },
  ];

  const directChats = [
    { name: "Student 1", lastMessage: "Last student message…" },
    { name: "Student 2", lastMessage: "Last student message…" },
    { name: "Student 3", lastMessage: "Last student message…" },
  ];

  const groupChats = [
    { name: "AI Society", lastMessage: "Latest group update…" },
    { name: "CS101 Study Group", lastMessage: "New resources posted…" },
  ];

  return (
    <div className="h-screen w-full bg-[#0B0F19] text-slate-100 flex">
      {/* SIDEBAR */}
      <aside
        className={`relative z-20 h-screen border-r border-slate-800 bg-slate-900/30 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0.0,0.2,1)]
          ${sidebarCollapsed ? "w-16" : "w-52"}`}
      >
        {/* SIDEBAR HEADER */}
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
            {menuItems.slice(0, 6).map((item, i) => {
              const isActive = item.route === "/demo/chats"; // Chats active on this page
              return (
                <button
                  key={i}
                  onClick={() => item.route && router.push(item.route)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm overflow-hidden transition-colors ${
                    isActive ? "bg-slate-800/70" : "hover:bg-slate-800/60"
                  }`}
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
              );
            })}
          </div>

          {/* SPACER */}
          <div className="flex-1" />

          {/* BOTTOM MENU ITEMS */}
          <div className="flex flex-col gap-2 mb-4">
            {menuItems.slice(6).map((item, i) => (
              <button
                key={i}
                onClick={() => item.route && router.push(item.route)}
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

      {/* MAIN AREA */}
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

          {/* RIGHT SIDE */}
          <div className="flex flex-1 justify-end items-center gap-3 text-[11px]">
            <span className="hidden md:inline rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-200">
              Demo university
            </span>
            <span className="hidden md:inline rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-slate-200">
              Role: Current student (Year 1)
            </span>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 
              hover:border-teal-400 hover:text-teal-300 transition">
              <BellIcon className="h-4 w-4" />
              <span className="absolute right-1 top-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 
              text-[9px] font-semibold text-white">
                1
              </span>
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex gap-6 h-full min-h-[480px]">
            {/* LEFT PANEL — CHAT LISTS */}
            <div className="w-80 flex flex-col">
              {/* Direct Chats header */}
              <div className="rounded-t-xl bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow">
                Chats
              </div>
              <div className="flex-1 rounded-b-xl border border-slate-800 bg-slate-900/50 px-3 py-3 space-y-2">
                {directChats.map((chat, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-900/70 px-3 py-2 flex gap-3 items-center cursor-pointer hover:border-teal-400/60 border border-transparent transition"
                  >
                    <div className="h-9 w-9 rounded-full bg-slate-700 overflow-hidden flex items-center justify-center text-xs font-semibold">
                      <span>{chat.name.charAt(0)}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-50">
                        {chat.name}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {chat.lastMessage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Group Chats header */}
              <div className="mt-4 rounded-t-xl bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow">
                Group Chats
              </div>
              <div className="rounded-b-xl border border-slate-800 bg-slate-900/50 px-3 py-3 space-y-2">
                {groupChats.map((chat, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-900/70 px-3 py-2 flex gap-3 items-center cursor-pointer hover:border-teal-400/60 border border-transparent transition"
                  >
                    <div className="h-9 w-9 rounded-full bg-slate-700 overflow-hidden flex items-center justify-center text-xs font-semibold">
                      <span>{chat.name.charAt(0)}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-50">
                        {chat.name}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {chat.lastMessage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL — ACTIVE CHAT */}
            <div className="flex-1 flex flex-col rounded-xl border border-teal-500/60 bg-slate-900/60 shadow-xl overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-teal-500/40 bg-slate-950/60">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-pink-500 flex items-center justify-center text-xs font-semibold">
                    Y
                  </div>
                  <span className="text-sm font-semibold text-slate-50">
                    {"{Student Name}"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-teal-300">
                  <PhoneIcon className="h-5 w-5 cursor-pointer hover:text-teal-200" />
                  <VideoCameraIcon className="h-5 w-5 cursor-pointer hover:text-teal-200" />
                  <InformationCircleIcon className="h-5 w-5 cursor-pointer hover:text-teal-200" />
                </div>
              </div>

              {/* Messages area */}
              <div className="flex-1 relative">
                <div className="absolute inset-3 rounded-xl border border-teal-500/40 bg-slate-950/40" />
                {/* Placeholder for messages */}
              </div>

              {/* Message input */}
              <div className="border-t border-teal-500/40 bg-slate-950/80 px-5 py-3 flex items-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-slate-950 hover:bg-teal-400 transition">
                  <PlusIcon className="h-6 w-6" />
                </button>
                <div className="flex-1 rounded-xl border border-teal-500/60 bg-slate-950/60 px-4 py-2 text-sm text-slate-100">
                  Type your message…
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING BUTTONS */}
        <div className="fixed right-6 bottom-32 flex flex-col gap-4">
          <button className="h-14 w-14 rounded-full bg-teal-600 text-white shadow-lg shadow-teal-900/60 flex items-center justify-center hover:bg-teal-500 transition">
            <NewspaperIcon className="h-6 w-6" />
          </button>
        </div>

        <AiAssistant />
      </main>
    </div>
  );
}
