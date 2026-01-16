import { MdInsertChartOutlined, MdLogout } from "react-icons/md";

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
                        ? "bg-indigo-100 text-indigo-500 border border-indigo-500"
                        : "text-black-600 hover:bg-indigo-100 border border-transparent transition  hover:border-indigo-500 hover:text-indigo-500",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "inline-flex h-9 w-9 items-center justify-center rounded-xl ",
                        isActive ? "bg-none" : "bg-none group-hover:bg-none",
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
            className=" w-full inline-flex justify-center items-center gap-3  rounded-xl  px-3 py-2.5 text-center text-base font-semibold text-red-400 hover:bg-red-500 transition-all hover:text-white"
          >
            <MdLogout className="text-2xl"/>
            Log Out
          </a>
        </div>
      </aside>
    );
  }

  export default Sidebar;