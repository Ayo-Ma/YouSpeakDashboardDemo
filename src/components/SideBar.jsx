import { MdInsertChartOutlined } from "react-icons/md";

const links = [
    { label: "Class management", href: "#", icon: MdInsertChartOutlined },
    { label: "Curriculum", href: "#", icon: MdInsertChartOutlined },
    { label: "Assessment management", href: "#", icon: MdInsertChartOutlined},
    { label: "Arena management", href: "#", icon: MdInsertChartOutlined },
    { label: "Leaderboards", href: "#", icon: MdInsertChartOutlined },
  ];



const  Sidebar = () => {
    const activeLabel = "Class management"; 
  
    return (
      <aside className="w-[280px] shrink-0 sticky top-6 h-[calc(100vh-48px)] rounded-2xl border border-slate-200 bg-white px-3 py-4 flex flex-col">
      
        <div className="px-2 pt-2">
          <p className="text-sm font-semibold">Menu</p>
        </div>
  
        <nav aria-label="Sidebar" className="mt-4 flex-1">
          <ul className="space-y-1">
            {links.map((link) => {
              const isActive = link.label === activeLabel;
              const Icon = link.icon;
  
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={[
                      "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm",
                      isActive
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "inline-flex h-9 w-9 items-center justify-center rounded-xl border",
                        isActive ? "bg-white" : "bg-white group-hover:bg-white",
                      ].join(" ")}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
  
        <div className="mt-4 px-2">
          <a
            href="#"
            className="block w-full rounded-xl border px-3 py-2.5 text-center text-sm font-semibold hover:bg-slate-50"
          >
            Log Out
          </a>
        </div>
      </aside>
    );
  }

  export default Sidebar;