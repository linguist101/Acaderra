// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-8 md:px-8">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-xl font-bold">
              A
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide text-slate-100">
                Acaderra
              </p>
              <p className="text-[11px] text-slate-400">
                University community platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] md:text-xs">
            <span className="hidden text-slate-400 md:inline">
              Built for universities, not workplaces
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
              Demo build · MVP
            </span>
          </div>
        </header>

        {/* Hero section */}
        <section className="mt-16 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              One home for{" "}
              <span className="text-indigo-400">
                future, current &amp; past students
              </span>
              .
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Acaderra brings together virtual classrooms, clubs, alumni
              networking and AI-powered accessibility in a single,
              university-branded platform. Designed to support student
              experience, retention and international onboarding.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                View interactive demo
              </Link>
              <a
                href="#features"
                className="text-sm font-medium text-slate-300 underline-offset-4 hover:text-slate-100 hover:underline"
              >
                Explore features
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-slate-400">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                AI moderation &amp; translation
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Lecture recordings &amp; notes
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Alumni networking &amp; careers
              </span>
            </div>
          </div>

          {/* Hero preview card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl shadow-black/60 backdrop-blur">
            <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
              <span>Student view · Virtual classroom</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                AI-assisted
              </span>
            </div>

            <div className="space-y-3 rounded-xl bg-slate-950/60 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-50">
                    CS101 · Intro to Computer Science
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Year 1 · Semester 1
                  </p>
                </div>
                <span className="rounded-md bg-indigo-500/20 px-2 py-1 text-[10px] text-indigo-200">
                  Live in 10 mins
                </span>
              </div>

              <div className="grid gap-3 text-xs md:grid-cols-2">
                {/* Lecture recordings */}
                <div className="space-y-2 rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Lecture recordings
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span>Week 3 · Algorithms</span>
                      <span className="text-slate-500">42 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Week 2 · Data types</span>
                      <span className="text-slate-500">35 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Week 1 · Intro &amp; setup</span>
                      <span className="text-slate-500">28 min</span>
                    </div>
                  </div>
                </div>

                {/* Class chat */}
                <div className="space-y-2 rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Class chat (AI moderated)
                  </p>
                  <div className="space-y-1.5">
                    <p className="rounded-md bg-slate-800/80 p-2 text-[11px] text-slate-200">
                      <span className="font-semibold text-emerald-300">
                        You:
                      </span>{" "}
                      Can someone share today&apos;s notes? I missed the
                      lecture.
                    </p>
                    <p className="rounded-md bg-slate-800/60 p-2 text-[11px] text-slate-200">
                      <span className="font-semibold text-indigo-300">
                        Alex (Alumni):
                      </span>{" "}
                      I&apos;ve uploaded my summary — also happy to talk about
                      careers in software engineering.
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Toxic content is auto-detected and sent to moderators.
                      Messages can be translated with one tap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section id="features" className="mt-16">
          <h2 className="text-lg font-semibold text-slate-50">
            Built around the university lifecycle
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Future students, current students, alumni and staff — connected in
            one safe, branded environment.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                Virtual classrooms
              </p>
              <p className="mt-2 text-slate-200">
                Chat-first classrooms with lecture recordings, notes and
                announcements in one place — ideal for hybrid and remote
                learning.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Community &amp; clubs
              </p>
              <p className="mt-2 text-slate-200">
                Student-run spaces for societies, wellbeing and international
                support. AI helps keep conversations safe and inclusive.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                Alumni &amp; careers
              </p>
              <p className="mt-2 text-slate-200">
                Graduates stay connected, mentor current students and share
                opportunities — with optional LinkedIn integration.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-slate-800 pt-4 text-xs text-slate-500">
          <p>Acaderra · Demo build for university partners</p>
        </footer>
      </div>
    </main>
  );
}
