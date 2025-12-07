// src/app/demo/page.tsx

const mockEvents = [
  {
    id: 1,
    title: "CS101 Lecture · Algorithms",
    time: "Today · 14:00–15:00",
    type: "Lecture",
  },
  {
    id: 2,
    title: "AI Society · Welcome social",
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
  return (
    <main className="min-h-screen bg-black text-slate-900">
      {/* Center the main white app frame on black background */}
      <div className="flex min-h-screen items-center justify-center px-4 py-6">
        <div className="relative flex w-full max-w-6xl flex-col rounded-3xl bg-white shadow-2xl">

          {/* Top strip label */}
          <div className="border-b border-slate-200 py-2 text-center text-sm font-semibold text-slate-700">
            Home page
          </div>

          {/* Header bar inside frame */}
          <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-3">

            {/* Left Hamburger */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100"
              aria-label="Open sidebar"
            >
              <span className="flex flex-col gap-[3px]">
                <span className="block h-[2px] w-4 rounded-full bg-slate-700" />
                <span className="block h-[2px] w-4 rounded-full bg-slate-700" />
                <span className="block h-[2px] w-4 rounded-full bg-slate-700" />
              </span>
            </button>

            <div className="flex-1" />

            {/* Right: university + role + bell */}
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full border border-slate-300 px-3 py-1 text-slate-700">
                Demo university
              </span>

              <span className="rounded-full border border-slate-300 px-3 py-1 text-slate-700">
                Role: Current Year (Year 1)
              </span>

              {/* Notification Bell */}
              <button
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100"
                aria-label="Notifications"
              >
                <span className="relative block h-4 w-4 rounded-full border border-slate-600" />
                <span className="absolute bottom-[7px] h-[2px] w-4 rounded-full bg-slate-600" />

                <span className="absolute right-1 top-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[9px] font-semibold text-white">
                  1
                </span>
              </button>
            </div>
          </header>

          {/* Main two-column layout */}
          <div className="grid min-h-[520px] grid-cols-[70px,minmax(0,1fr)]">

            {/* LEFT SIDEBAR */}
            <aside className="flex flex-col items-center gap-4 border-r border-slate-200 bg-slate-100 px-2 py-4 text-[11px] text-slate-700">
              <SidebarIcon label="Home" symbol="🏠" />
              <SidebarIcon label="Chats" symbol="💬" notification />
              <SidebarIcon label="Calendar" symbol="📅" />
              <SidebarIcon label="Clubs" symbol="👥" />
              <SidebarIcon label="AI Notebook" symbol="📓" />
              <SidebarIcon label="Courses" symbol="🎓" />
              <SidebarIcon label="Settings" symbol="⚙️" />
              <SidebarIcon label="Profile" symbol="👤" />
            </aside>

            {/* RIGHT CONTENT AREA */}
            <section className="relative px-6 py-8">

              {/* Section Title */}
              <div className="text-center">
                <h1 className="text-lg font-semibold text-slate-900">
                  Latest Events in {`{university}`}
                </h1>
                <div className="mx-auto mt-1 h-[2px] w-40 rounded-full bg-slate-900" />
              </div>

              {/* Events Card */}
              <div className="mt-8 flex justify-center">
                <div className="w-full max-w-md rounded-2xl bg-slate-950 text-slate-50 shadow-lg">

                  {/* Card Header */}
                  <div className="flex items-start justify-between rounded-t-2xl bg-slate-900 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold">Your upcoming week</p>
                      <p className="mt-0.5 text-[11px] text-slate-300">
                        Timetable changes and events in one place.
                      </p>
                    </div>

                    <button className="rounded-md bg-sky-700 px-3 py-1 text-[11px] font-medium text-slate-50 hover:bg-sky-600">
                      Sync with uni timetable
                    </button>
                  </div>

                  {/* Events List */}
                  <div className="space-y-2 px-4 py-3 text-sm">
                    {mockEvents.map((ev) => (
                      <div key={ev.id} className="rounded-xl bg-slate-900 px-3 py-3">
                        <p className="text-slate-50">{ev.title}</p>
                        <p className="mt-1 text-xs text-slate-300">{ev.time}</p>
                        <p className="mt-1 inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300">
                          Type: {ev.type}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Floating Right Buttons */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex flex-col items-end justify-center gap-3">
                <button className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-400">
                  <span className="text-lg">📰</span>
                </button>

                <button className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-400">
                  <span className="text-lg">🤖</span>
                </button>
              </div>

            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

/* SIDEBAR ICON COMPONENT */
function SidebarIcon({
  label,
  symbol,
  notification,
}: {
  label: string;
  symbol: string;
  notification?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center gap-1">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-lg">
        {symbol}
      </div>

      {notification && (
        <span className="absolute -right-1 top-0 inline-flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] font-semibold text-white">
          1
        </span>
      )}

      <span className="text-[9px] text-slate-600 text-center leading-tight">
        {label}
      </span>
    </div>
  );
}
