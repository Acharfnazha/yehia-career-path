import Link from "next/link";

export const metadata = {
  title: "The Plan · Yehia's Career Path",
};

const milestones = [
  {
    step: "1",
    name: "Prepare",
    description:
      "Get the basics ready so every application starts from a strong place.",
    actions: [
      "Rewrite the CV to one clear page and highlight two real projects.",
      "Clean up the GitHub profile and pin the best repositories.",
      "Choose one target role, such as junior front-end developer.",
    ],
  },
  {
    step: "2",
    name: "Practice",
    description:
      "Close the gap between what the role asks for and what he can show today.",
    actions: [
      "Build one small project with the skills the target role mentions.",
      "Solve two practice problems a day to stay sharp.",
      "Rehearse answers to common interview questions out loud.",
    ],
  },
  {
    step: "3",
    name: "Apply",
    description:
      "Send focused applications and keep the conversation going afterwards.",
    actions: [
      "Pick opportunities that match the target role and read each one carefully.",
      "Send a short, tailored message with every application.",
      "Follow up politely one week after applying.",
    ],
  },
];

export default function PlanPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-cedar">
          Chapter 2 · The plan
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Three milestones, one next step at a time
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          Yehia doesn&apos;t need to do everything today. He only needs to know
          which milestone he is on and what the next action is.
        </p>
      </header>

      <ol className="space-y-5">
        {milestones.map((milestone) => (
          <li
            key={milestone.name}
            className="flex gap-4 rounded-2xl border border-line bg-card p-5 sm:gap-6 sm:p-7"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cedar text-lg font-bold text-white">
              {milestone.step}
            </span>
            <div className="space-y-3">
              <h2 className="text-xl font-bold">{milestone.name}</h2>
              <p className="leading-7 text-muted">{milestone.description}</p>
              <ul className="space-y-2">
                {milestone.actions.map((action) => (
                  <li key={action} className="flex gap-3 leading-7">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-amber"
                    />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl border border-line bg-card px-5 py-3 text-center font-semibold transition-colors hover:border-cedar hover:text-cedar-dark"
        >
          ← Back home
        </Link>
        <Link
          href="/opportunities"
          className="rounded-xl bg-cedar px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-cedar-dark"
        >
          Explore opportunities
        </Link>
      </div>
    </div>
  );
}
