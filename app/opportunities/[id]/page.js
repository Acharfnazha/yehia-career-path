import Link from "next/link";
import { opportunities } from "@/data/opportunities";

// Prerender the three known opportunities at build time. Any other ID
// (such as /opportunities/999) is still handled at request time below.
export function generateStaticParams() {
  return opportunities.map((opportunity) => ({ id: opportunity.id }));
}

export default async function OpportunityPage({ params }) {
  const { id } = await params;
  const opportunity = opportunities.find((item) => item.id === id);

  if (!opportunity) {
    return (
      <div className="mx-auto max-w-xl space-y-5 rounded-2xl border border-line bg-card p-8 text-center">
        <p className="text-4xl" aria-hidden="true">
          🧭
        </p>
        <h1 className="text-2xl font-bold">Opportunity not found</h1>
        <p className="leading-7 text-muted">
          There is no opportunity with the ID &quot;{id}&quot;. It may have
          been removed, or the link may be mistyped.
        </p>
        <Link
          href="/opportunities"
          className="inline-block rounded-xl bg-cedar px-5 py-3 font-semibold text-white transition-colors hover:bg-cedar-dark"
        >
          ← Back to opportunities
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <Link
        href="/opportunities"
        className="inline-block text-sm font-semibold text-cedar-dark hover:underline"
      >
        ← Back to opportunities
      </Link>

      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-cedar">
          Chapter 4 · A closer look
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {opportunity.title}
        </h1>
        <div className="flex flex-wrap gap-2 text-sm font-medium">
          <span className="rounded-full bg-cedar-soft px-3 py-1 text-cedar-dark">
            {opportunity.company}
          </span>
          <span className="rounded-full bg-amber-soft px-3 py-1 text-amber">
            📍 {opportunity.location}
          </span>
        </div>
      </header>

      <section className="max-w-2xl rounded-2xl border border-line bg-card p-6 sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          About the role
        </h2>
        <p className="mt-3 text-lg leading-8">{opportunity.description}</p>
      </section>
    </article>
  );
}
