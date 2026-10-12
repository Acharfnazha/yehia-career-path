// Shown instantly while the page reads the ID from params and finds the
// matching opportunity.
export default function Loading() {
  return (
    <div className="space-y-6" aria-busy="true" aria-live="polite">
      <p className="sr-only">Loading opportunity…</p>
      <div className="h-4 w-40 animate-pulse motion-reduce:animate-none rounded bg-line" />
      <div className="h-10 w-3/4 max-w-lg animate-pulse motion-reduce:animate-none rounded-lg bg-line" />
      <div className="h-32 max-w-2xl animate-pulse motion-reduce:animate-none rounded-2xl bg-line" />
    </div>
  );
}
