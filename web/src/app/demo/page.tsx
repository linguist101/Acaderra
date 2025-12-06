// src/app/demo/page.tsx
import Link from "next/link";

const mockMessages = [
  {
    id: 1,
    sender: "Dr. Patel",
    role: "Lecturer",
    content:
      "Reminder: Week 4 lecture recording is now available under ‘Resources’. Please watch before Friday.",
    time: "09:12",
  },
  {
    id: 2,
    sender: "Maya",
    role: "Year 1",
    content:
      "Does anyone want to form a study group for the algorithms assignment?",
    time: "09:18",
  },
  {
    id: 3,
    sender: "Sam (Alumni)",
    role: "Alumni · Software Engineer",
    content:
      "Happy to run a Q&A next week about placements and internships. Drop questions here.",
    time: "09:23",
  },
];

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

const mockLectures = [
  { id: 1, title: "Week 3 · Introduction to Algorithms", duration: "42 min" },
  { id: 2, title: "Week 2 · Data Types & Variables", duration: "35 min" },
  { id: 3, title: "Week 1 · Welcome & Setup", duration: "28 min" },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-8 pt-4 md:px-8">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-xl font-bold">
                A
              </div>
              <div className="hidden text-left text-xs sm:block">
                <p className="font-semibold text-slate-100">Acaderra</p>
                <p className="text-[11px] text-slate-400">
                  Demo University · Student view
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden rounded-full border border-slate-700 px-2 py-1 text-slate-300 md:inline">
              Role: Current student (Year 1)
            </span>
            <button className="rounded-full bg-slate-800 px-3 py-1 text-[11px] text-slate-200 hover:bg-slate-700">
              Switch to staff demo
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold">
              Y
            </div>
          </div>
        </header>

        <div className="mt-4 grid flex-1 gap-4 md:grid-cols-[220px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Navigation
            </p>
            <nav className="space-y-1">
              <button className="flex w-full items-center justify-between rounded-lg bg-slate-800 px-2.5 py-2 text-left text-slate-100">
                <span>Overview</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                  Live demo
                </span>
              </button>
              <button className="w-full rounded-lg px-2.5 py-2 text-left text-slate-300 hover:bg-slate-800">
                Classrooms
              </button>
              <button className="w-full rounded-lg px-2.5 py-2 text-left text-slate-300 hover:bg-slate-800">
                Clubs &amp; societies
              </button>
              <button className="w-full rounded-lg px-2.5 py-2 text-left text-slate-300 hover:bg-slate-800">
                Alumni &amp; careers
              </button>
            </nav>

            <div className="mt-4 space-y-1 text-xs text-slate-400">
              <p className="font-semibold uppercase tracking-wide">
                Quick facts
              </p>
              <p>• Messages are AI moderated in real time.</p>
              <p>• One-tap translation for international students.</p>
              <p>• Lectures and timetables live in the same space.</p>
            </div>
          </aside>

          {/* Main content */}
          <section className="space-y-4">
            {/* Classroom header */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                  Virtual classroom
                </p>
                <h1 className="text-lg font-semibold text-slate-50">
                  CS101 · Introduction to Computer Science
                </h1>
                <p className="text-xs text-slate-400">
                  Year 1 · Semester 1 · 126 students · 3 alumni mentors
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
                  Online &amp; on-campus ready
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                  AI translation enabled
                </span>
              </div>
            </div>

            {/* Two-column layout */}
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
              {/* Left side: chat + lectures */}
              <div className="space-y-4">
                {/* Chat */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-slate-100">
                        Class chat (AI moderated)
                      </p>
                      <p className="text-slate-500">
                        Safe, persistent space for each cohort.
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                      Toxic messages auto-flagged
                    </span>
                  </div>

                  <div className="space-y-2 rounded-xl bg-slate-950/60 p-3 text-xs">
                    {mockMessages.map((m) => (
                      <div
                        key={m.id}
                        className="space-y-0.5 rounded-lg bg-slate-800/60 p-2"
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-slate-100">
                            {m.sender}
                          </span>
                          <span className="text-slate-500">{m.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          {m.content}
                        </p>
                        <p className="text-[10px] text-slate-500">{m.role}</p>
                      </div>
                    ))}

                    <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500">
                      <p>
                        Demo: messages are static here, but in production this
                        is live chat with WebSockets.
                      </p>
                      <button className="rounded-md bg-slate-800 px-2 py-1 text-[10px] text-slate-200 hover:bg-slate-700">
                        Translate example
                      </button>
                    </div>
                  </div>
                </div>

                {/* Lecture recordings */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-slate-100">
                        Lecture recordings &amp; resources
                      </p>
                      <p className="text-slate-500">
                        Central library for missed classes and revision.
                      </p>
                    </div>
                    <button className="rounded-md bg-slate-800 px-3 py-1 text-[11px] text-slate-200 hover:bg-slate-700">
                      Upload (staff)
                    </button>
                  </div>

                  <div className="space-y-2 rounded-xl bg-slate-950/60 p-3 text-xs">
                    {mockLectures.map((lec) => (
                      <div
                        key={lec.id}
                        className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2"
                      >
                        <div>
                          <p className="text-slate-100">{lec.title}</p>
                          <p className="text-[11px] text-slate-500">
                            Slides · Transcript · Captions
                          </p>
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {lec.duration}
                        </span>
                      </div>
                    ))}
                    <p className="mt-1 text-[10px] text-slate-500">
                      Demo: in the real system, these would stream from secure
                      storage with access controls per cohort.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side: events / alumni */}
              <div className="space-y-4">
                {/* Events */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-slate-100">
                        Your upcoming week
                      </p>
                      <p className="text-slate-500">
                        Timetable changes and events in one place.
                      </p>
                    </div>
                    <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-300">
                      Sync with uni timetable
                    </span>
                  </div>

                  <div className="space-y-2 rounded-xl bg-slate-950/60 p-3 text-xs">
                    {mockEvents.map((ev) => (
                      <div
                        key={ev.id}
                        className="space-y-0.5 rounded-lg border border-slate-800 bg-slate-900/80 p-2"
                      >
                        <p className="text-slate-100">{ev.title}</p>
                        <p className="text-[11px] text-slate-400">
                          {ev.time}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Type: {ev.type}
                        </p>
                      </div>
                    ))}
                    <p className="mt-1 text-[10px] text-slate-500">
                      Demo: events are static here, but would be driven by an
                      events API or university calendar integration.
                    </p>
                  </div>
                </div>

                {/* Alumni block */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Alumni &amp; careers
                  </p>
                  <p className="mt-2 text-slate-200">
                    Alumni stay in the same space after graduation. They can
                    join course channels, run Q&amp;A sessions and advertise
                    roles — all with LinkedIn integration.
                  </p>
                  <ul className="mt-2 space-y-1 text-slate-400">
                    <li>• Mentoring pairs between Year 3 and recent grads</li>
                    <li>• Employer-led events hosted inside Acaderra</li>
                    <li>• Opt-in alumni communities per course and society</li>
                  </ul>
                  <p className="mt-3 text-[10px] text-slate-500">
                    This demo focuses on student view. Staff and alumni views
                    would surface analytics, moderation tools and recruitment
                    features.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
