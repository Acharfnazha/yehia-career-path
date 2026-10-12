import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavLink from "@/components/nav-link";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yehia's Career Path",
  description:
    "A small website that turns a graduate's scattered ideas into a journey he can follow.",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/plan", label: "Plan" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <header className="border-b border-line bg-card">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-cedar text-sm text-white">
                Y
              </span>
              <span>Yehia&apos;s Career Path</span>
            </Link>
            <nav aria-label="Main navigation">
              <ul className="flex flex-wrap gap-1 text-sm font-medium">
                {links.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      href={link.href}
                      exact={link.href === "/"}
                      className="block rounded-lg px-2.5 py-2 transition-colors sm:px-3"
                      inactiveClassName="text-muted hover:bg-cedar-soft hover:text-cedar-dark"
                      activeClassName="bg-cedar-soft font-semibold text-cedar-dark"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
          {children}
        </main>

        <footer className="border-t border-line">
          <p className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted sm:px-6">
            One step at a time. Built for the TechTalks Next.js 16 routing
            assignment.
          </p>
        </footer>
      </body>
    </html>
  );
}
