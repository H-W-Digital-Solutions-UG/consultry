export interface Boundary {
  claim: string; // what we do say
  limit: string; // what we do not promise
}

/** Two labelled columns per aspect, equal weight: the limits are the trust argument. */
export function Boundaries({ items }: { items: Boundary[] }) {
  return (
    <div className="divide-y divide-hair border-y border-hair">
      <div className="hidden py-3 md:grid md:grid-cols-2 md:gap-12">
        <span className="t-caption">Was gilt</span>
        <span className="t-caption">Was nicht</span>
      </div>
      {items.map((b) => (
        <div key={b.claim} className="grid gap-1 py-6 md:grid-cols-2 md:gap-12">
          <p className="t-body">{b.claim}</p>
          <p className="t-body">
            <span className="text-ink-mute md:hidden" aria-hidden="true">
              —{" "}
            </span>
            {b.limit}
          </p>
        </div>
      ))}
    </div>
  );
}
