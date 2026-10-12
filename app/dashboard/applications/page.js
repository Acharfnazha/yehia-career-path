import { applications } from "@/data/applications";

export const metadata = {
  title: "Applications · Yehia's Career Path",
};

const statusStyles = {
  Applied: "bg-amber-soft text-amber-text",
  "Under review": "bg-cedar-soft text-cedar-dark",
  "Interview scheduled": "bg-ink text-white",
};

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Where has Yehia already applied?
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          {applications.length} applications so far, with the latest status of
          each one.
        </p>
      </div>

      <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
        {applications.map((application) => (
          <li
            key={application.id}
            className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="font-bold">{application.title}</h2>
              <p className="text-sm text-muted">
                {application.company} · Applied on {application.appliedOn}
              </p>
            </div>
            <span
              className={`self-start rounded-full px-3 py-1 text-sm font-semibold sm:self-auto ${statusStyles[application.status]}`}
            >
              {application.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
