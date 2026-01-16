const links = [
  { label: "Class Management", href: "#" },
  { label: "Curriculum", href: "#" },
  { label: "Assessment management", href: "#" },
  { label: "Arena management", href: "#" },
  { label: "Leaderboards", href: "#" },
];

const MainSection = () => {
  return (
    <main className="mt-6 flex gap-8 ">
      <aside className="w-76 shrink-0  sticky top-0 h-[845px] flex  flex-col justify-between rounded-2xl border border-slate-200 bg-white p-3">
        <nav aria-label="Sidebar" className="mt-[86px]  ">
          <ul className="space-y-1 text-black-600">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5   hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href=""
          className="logout w-full rounded-xl mb-[32px] text-center px-3 py-2.5 text-black-600"
        >
          Logout
        </a>
      </aside>
      <section className="main-section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sunt
        reiciendis quaerat iure dolore, dolorum eaque sequi, autem obcaecati
        
      </section>
    </main>
  );
};

export default MainSection;
