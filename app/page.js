import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <p className="inline-block rounded-full bg-amber-soft px-3 py-1 text-sm font-semibold text-amber-text">
          Chapter 1 · The starting point
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Meet Yehia. He has a goal, and now he has a path.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          Yehia just graduated in Computer Science from the Lebanese University,
          First Branch. Every day he opens job boards, tutorials, and company
          websites, and every evening he ends up with dozens of tabs and the
          same question: what should I do next?
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/plan"
            className="rounded-xl bg-cedar px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-cedar-dark"
          >
            See my plan
          </Link>
          <Link
            href="/opportunities"
            className="rounded-xl border border-line bg-card px-5 py-3 text-center font-semibold transition-colors hover:border-cedar hover:text-cedar-dark"
          >
            Explore opportunities
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-card p-6 sm:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cedar">
            The goal
          </h2>
          <p className="mt-3 text-2xl font-bold leading-snug">
            Land a first developer role within two months.
          </p>
          <p className="mt-3 leading-7 text-muted">
            This site can&apos;t promise him a job. What it can do is keep the
            goal in front of him and turn it into small, clear steps he can
            actually take this week.
          </p>
        </div>
        <div className="rounded-2xl bg-ink p-6 text-white">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-soft">
            How it works
          </h2>
          <ol className="mt-3 space-y-2 leading-7">
            <li>1. Follow the plan</li>
            <li>2. Compare opportunities</li>
            <li>3. Track applications</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
