import Link from "next/link";
import { opportunities } from "@/data/opportunities";

export const metadata = {
  title: "Opportunities · Yehia's Career Path",
};

export default function OpportunitiesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-cedar">
          Chapter 3 · The opportunities
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Where could Yehia apply?
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          A short list is easier to compare than fifty open tabs. Open any role
          to read what it involves.
        </p>
      </header>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opportunity) => (
          <li
            key={opportunity.id}
            className="flex flex-col justify-between gap-6 rounded-2xl border border-line bg-card p-6"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-snug">
                {opportunity.title}
              </h2>
              <p className="font-medium text-cedar-dark">
                {opportunity.company}
              </p>
              <p className="text-sm text-muted">📍 {opportunity.location}</p>
            </div>
            <Link
              href={`/opportunities/${opportunity.id}`}
              className="rounded-xl bg-ink px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-cedar-dark"
            >
              View opportunity
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
