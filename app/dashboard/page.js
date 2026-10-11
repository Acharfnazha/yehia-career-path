import Link from "next/link";
import { applications } from "@/data/applications";

export const metadata = {
  title: "Dashboard · Yehia's Career Path",
};

export default function DashboardPage() {
  const total = applications.length;
  const movingForward = applications.filter(
    (application) => application.status !== "Applied",
  ).length;

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          How is the journey going?
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          A quick look at where Yehia stands right now.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-cedar p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-cedar-soft">
            Applications sent
          </p>
          <p className="mt-2 text-5xl font-extrabold">{total}</p>
        </div>
        <div className="rounded-2xl border border-line bg-card p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Moving forward
          </p>
          <p className="mt-2 text-5xl font-extrabold">{movingForward}</p>
          <p className="mt-1 text-sm text-muted">
            past the &quot;Applied&quot; stage
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-amber/30 bg-amber-soft p-6">
        <p className="text-lg font-semibold leading-8">
          {total} applications out in the world. That&apos;s {total} more
          chances than last month. Keep following the plan, one step at a
          time.
        </p>
        <Link
          href="/dashboard/applications"
          className="mt-4 inline-block font-semibold text-cedar-dark hover:underline"
        >
          Review my applications →
        </Link>
      </div>
    </div>
  );
}
