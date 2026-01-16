
import Sidebar from "../components/SideBar";
import Card from "../components/Card";
import ActionCard from "../components/ActionCard";
import StatCard from "./StatCard";
import ActivityItem from "../components/ActivityItem";
import Select from "../components/Select";
import {
  MdOutlineLibraryBooks,
  MdOutlineQuiz,
  MdOutlineSportsEsports,
  MdOutlineSchool,
  MdInsertChartOutlined,
  MdNotificationsNone,
  MdUploadFile,
  MdEmojiEvents,
  MdDownload,
} from "react-icons/md";

const quickActions = [
  { title: "Create class", subtitle: "Set up new roster", icon: MdOutlineLibraryBooks },
  { title: "Create assignment", subtitle: "New task or quiz", icon: MdOutlineQuiz },
  { title: "Schedule arena", subtitle: "Live challenges", icon: MdOutlineSportsEsports },
];

const stats = [
  { title: "Active Students", value: "200", note: "+3 enrolled this week", icon: MdOutlineSchool },
  { title: "Classes managed", value: "2", note: "Next class in 55m", icon: MdOutlineLibraryBooks },
  {
    title: "Assessment analytics",
    value: "78%",
    note: "Average score",
    icon: MdInsertChartOutlined,
    progress: 78,
  },
];

const activity = [
  { tone: "soft", text: 'John Doe submitted “unit 3 essay”', meta: "09-12-25, 9:30am", icon: MdNotificationsNone },
  { tone: "tint", text: 'You uploaded a new resource, “Grammar guide PDF”', meta: "10-12-25, 9:30am", icon: MdUploadFile },
  { tone: "soft", text: "Class 5B finished ‘French: Greetings Basics’ with an avg score of 88%.", meta: "09-12-25, 9:30am", icon: MdNotificationsNone },
  { tone: "soft", text: "Class 5B finished ‘French: Greetings Basics’ with an avg score of 88%.", meta: "09-12-25, 9:30am", icon: MdNotificationsNone },
];

const topics = [
  { topic: "Basic greetings", students: 13, mastery: 75 },
  { topic: "Travel", students: 11, mastery: 68 },
  { topic: "Shopping basics", students: 17, mastery: 25 },
  { topic: "School interactions", students: 10, mastery: 78 },
  { topic: "Micheal Adi", students: 12, mastery: 70 },
  { topic: "Micheal Adi", students: 14, mastery: 95 },
];


const MainSection = () => {
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
                <a href="#" className="text-sm font-medium underline decoration- underline-offset-4">
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
              <div className="mx-auto inline-flex items-center gap-2 rounded-full text-accent-gold  border px-4 py-2 text-[18px] font-semibold">
                <MdEmojiEvents className="h-5 w-5" />
                Star of the week
              </div>

              <div className="mt-5 flex flex-col items-center">
                <div className="h-16 w-16 overflow-hidden rounded-full border-accent-gold border-4 ">
                  <img
                    alt="Student"
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-[18px] font-bold text-black-900">Ella Bassey</p>
                  <p className="text-base text-muted">Advanced french</p>
                </div>

                <div className="mt-4 w-56.75 rounded-xl  px-4 py-3 text-base/relaxed text-black-600">
                  “Achieved a 7-day speaking streak with 90% fluency rating!”
                </div>

                <button className="mt-4 w-full rounded-xl shadow-gray-300 bg-primary-500 text-white px-4 py-4 text-base font-bold hover:bg-primary-700 shadow-md hover:shadow-lg outline-none transition-all">
                  Send congratulations
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* Table */}
        <Card className="mt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h3 className="text-lg text-black-800 font-medium ">Class overview by topic</h3>

            <div className="flex flex-wrap items-center gap-3">
              <Select label="Current Semester" />
              <Select label="Switch classes" />
              <button className="inline-flex h-10 w-10 text-black-600 items-center justify-center rounded-xl bg-soft-blue border border-primary-200 ">
                <MdDownload className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-base">
              <thead className="border-y bg-pale-blue border-black-200">
                <tr className="text-black-600">
                  <th className="px-6 py-3 font-normal">Topics</th>
                  <th className="px-6 py-3 font-normal">Active students</th>
                  <th className="px-6 py-3 font-normal">Topic mastery</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {topics.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="px-4 py-4 text-[24px] text-bold text-black-600">{row.topic}</td>
                    <td className="px-4 py-4 text-base text-black-600">{row.students}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-full max-w-[320px] rounded-full bg-slate-200">
                          <div
                            className="h-2 rounded-full bg-secondary-color"
                            style={{ width: `${row.mastery}%` }}
                          />
                        </div>
                        <span className="w-10 text-right font-medium  text-slate-700">
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
  )
}

export default MainSection;