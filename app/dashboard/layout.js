import NavLink from "@/components/nav-link";

const dashboardLinks = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/applications", label: "Applications" },
];

// Shared by /dashboard and /dashboard/applications. Only the content passed in
// as children changes when Yehia moves between the two pages.
export default function DashboardLayout({ children }) {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-cedar">
          Dashboard
        </p>
        <nav aria-label="Dashboard navigation">
          <ul className="inline-flex flex-wrap gap-1 rounded-xl border border-line bg-card p-1 text-sm font-semibold">
            {dashboardLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  exact
                  className="block rounded-lg px-4 py-2 transition-colors"
                  inactiveClassName="text-muted hover:bg-cedar-soft hover:text-cedar-dark"
                  activeClassName="bg-cedar text-white"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}
