"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// The only Client Component in the project: it needs usePathname() to know
// which page is open, so the current link can be highlighted and announced
// to screen readers with aria-current="page".
export default function NavLink({
  href,
  exact = false,
  className = "",
  inactiveClassName = "",
  activeClassName = "",
  children,
}) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${className} ${isActive ? activeClassName : inactiveClassName}`}
    >
      {children}
    </Link>
  );
}
