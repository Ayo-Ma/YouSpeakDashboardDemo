import React from "react";
import Sidebar from "../components/SideBar";


const quickActions = [
  { title: "Create class", subtitle: "Set up new roster", icon: IconBookOpen },
  { title: "Create assignment", subtitle: "New task or quiz", icon: IconClipboard },
  { title: "Schedule arena", subtitle: "Live challenges", icon: IconCalendar },
];

const stats = [
  { title: "Active Students", value: "200", note: "+3 enrolled this week", icon: IconCap },
  { title: "Classes managed", value: "2", note: "Next class in 55m", icon: IconBook },
  { title: "Assessment analytics", value: "78%", note: "Average score", icon: IconBars, progress: 78 },
];

const activity = [
  { tone: "soft", text: 'John Doe submitted “unit 3 essay”', meta: "09-12-25, 9:30am", icon: IconBell },
  { tone: "tint", text: 'You uploaded a new resource, “Grammar guide PDF”', meta: "10-12-25, 9:30am", icon: IconUpload },
  { tone: "soft", text: "Class 5B finished ‘French: Greetings Basics’ with an avg score of 88%.", meta: "09-12-25, 9:30am", icon: IconBell },
  { tone: "soft", text: "Class 5B finished ‘French: Greetings Basics’ with an avg score of 88%.", meta: "09-12-25, 9:30am", icon: IconBell },
];

const topics = [
  { topic: "Basic greetings", students: 13, mastery: 75 },
  { topic: "Travel", students: 11, mastery: 68 },
  { topic: "Shopping basics", students: 17, mastery: 25 },
  { topic: "School interactions", students: 10, mastery: 78 },
  { topic: "Micheal Adi", students: 12, mastery: 70 },
  { topic: "Micheal Adi", students: 14, mastery: 95 },
];

export default function MainSection() {
  return (
    <main className="mt-6 flex gap-8">
      <Sidebar />

      <section className="min-w-0 flex-1 pb-10">
        {/* Quick actions row */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {quickActions.map((a, idx) => (
            <ActionCard key={a.title} {...a} featured={idx === 0} />
          ))}
        </div>

        {/* Stats + right column */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {stats.map((s) => (
                <StatCard key={s.title} {...s} />
              ))}
            </div>

            <Card>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Activity Summary</h3>
                <a href="#" className="text-sm font-medium underline underline-offset-4">
                  see more
                </a>
              </div>

              <ul className="mt-4 space-y-3">
                {activity.map((item, i) => (
                  <ActivityItem key={i} {...item} />
                ))}
              </ul>
            </Card>
          </div>

          {/* Right area */}
          <div className="space-y-6">
            <Card className="text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold">
                <IconTrophy className="h-4 w-4" />
                Star of the week
              </div>

              <div className="mt-5 flex flex-col items-center">
                <div className="h-16 w-16 overflow-hidden rounded-full border">
                  <img
                    alt="Student"
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-base font-semibold">Ella Bassey</p>
                  <p className="text-sm text-slate-600">Advanced french</p>
                </div>

                <div className="mt-4 w-full rounded-xl border px-4 py-3 text-sm text-slate-700">
                  “Achieved a 7-day speaking streak with 90% fluency rating!”
                </div>

                <button className="mt-4 w-full rounded-xl border px-4 py-3 text-sm font-semibold hover:bg-slate-50">
                  Send congratulations
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* Table */}
        <Card className="mt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h3 className="text-sm font-semibold">Class overview by topic</h3>

            <div className="flex flex-wrap items-center gap-3">
              <Select label="Current Semester" />
              <Select label="Switch classes" />
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-slate-50">
                <IconDownload className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="border-y bg-slate-50/60">
                <tr className="text-slate-600">
                  <th className="px-4 py-3 font-medium">Topics</th>
                  <th className="px-4 py-3 font-medium">Active students</th>
                  <th className="px-4 py-3 font-medium">Topic mastery</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {topics.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="px-4 py-4">{row.topic}</td>
                    <td className="px-4 py-4">{row.students}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-full max-w-[320px] rounded-full bg-slate-200">
                          <div
                            className="h-2 rounded-full bg-slate-900"
                            style={{ width: `${row.mastery}%` }}
                          />
                        </div>
                        <span className="w-10 text-right font-medium text-slate-700">
                          {row.mastery}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </main>
  );
}




/* -------------------------------- Components ------------------------------- */

function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 ${className}`}>
      {children}
    </div>
  );
}

function ActionCard({ title, subtitle, icon: Icon, featured = false }) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-200 bg-white p-5 flex items-center gap-4",
        featured ? "shadow-sm" : "",
      ].join(" ")}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border">
        <Icon className="h-5 w-5" />
      </span>

      <div className="min-w-0">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}

function StatCard({ title, value, note, icon: Icon, progress }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="mt-2 text-3xl font-semibold">{value}</p>
          <p className="mt-2 text-sm text-slate-600">{note}</p>
        </div>

        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      {typeof progress === "number" && (
        <div className="mt-4">
          <div className="h-2 rounded-full bg-slate-200">
            <div className="h-2 rounded-full bg-slate-900" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </Card>
  );
}

function ActivityItem({ text, meta, icon: Icon, tone = "soft" }) {
  const bg =
    tone === "tint" ? "bg-slate-50 border-slate-200" : "bg-white border-slate-200";

  return (
    <li className={`flex items-start gap-3 rounded-2xl border ${bg} p-3`}>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-white">
        <Icon className="h-4 w-4" />
      </span>

      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-900">{text}</p>
        <p className="mt-1 text-xs text-slate-500">{meta}</p>
      </div>
    </li>
  );
}

function Select({ label }) {
  return (
    <button className="inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-sm font-medium hover:bg-slate-50">
      {label}
      <IconChevronDown className="h-4 w-4" />
    </button>
  );
}

/* ---------------------------------- Icons --------------------------------- */

function IconBase({ className = "", children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

function IconChevronDown({ className }) {
  return (
    <IconBase className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconDownload({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function IconBookmark({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 3h10v18l-5-3-5 3V3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconDoc({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 3h7l3 3v15H7V3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconChart({ className }) {
  return (
    <IconBase className={className}>
      <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 15v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 15V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 15v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function IconArena({ className }) {
  return (
    <IconBase className={className}>
      <path d="M5 7h14v12H5V7z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 7V5h6v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 11h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function IconTrophy({ className }) {
  return (
    <IconBase className={className}>
      <path d="M8 4h8v3a4 4 0 01-8 0V4z" stroke="currentColor" strokeWidth="2" />
      <path d="M6 7H4a3 3 0 003 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 7h2a3 3 0 01-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 11v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 19h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 15h4v4h-4v-4z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}

function IconBookOpen({ className }) {
  return (
    <IconBase className={className}>
      <path d="M3 5h7a3 3 0 013 3v13H6a3 3 0 01-3-3V5z" stroke="currentColor" strokeWidth="2" />
      <path d="M21 5h-7a3 3 0 00-3 3v13h7a3 3 0 003-3V5z" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}

function IconClipboard({ className }) {
  return (
    <IconBase className={className}>
      <path d="M9 4h6l1 2h3v16H5V6h3l1-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 4v2h6V4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </IconBase>
  );
}

function IconCalendar({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 3v3M17 3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 7h16v14H4V7z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 11h16" stroke="currentColor" strokeWidth="2" />
    </IconBase>
  );
}

function IconCap({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l10 6-10 6L2 9l10-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function IconBook({ className }) {
  return (
    <IconBase className={className}>
      <path d="M6 4h10a2 2 0 012 2v14H8a2 2 0 00-2 2V4z" stroke="currentColor" strokeWidth="2" />
      <path d="M6 20h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function IconBars({ className }) {
  return (
    <IconBase className={className}>
      <path d="M6 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function IconBell({ className }) {
  return (
    <IconBase className={className}>
      <path
        d="M12 22a2 2 0 002-2H10a2 2 0 002 2z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M18 16H6l1-2v-4a5 5 0 0110 0v4l1 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

function IconUpload({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 16V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 10l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}
