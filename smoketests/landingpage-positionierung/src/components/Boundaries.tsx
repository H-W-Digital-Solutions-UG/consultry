export interface Boundary {
  claim: string; // what we do say
  limit: string; // what we do not promise
}

/** Two labelled columns per aspect, equal weight: the limits are the trust argument. */
export function Boundaries({ items }: { items: Boundary[] }) {
  return (
    <div className="story-boundaries">
      <div className="story-boundaries-labels" aria-hidden="true">
        <span />
        <span>Was gilt</span>
        <span>Was nicht</span>
      </div>
      {items.map((b, index) => (
        <div key={b.claim} className="story-boundary story-reveal">
          <span className="story-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <p className="story-boundary-claim"><span className="story-mobile-label">Was gilt</span>{b.claim}</p>
          <p className="story-boundary-limit"><span className="story-mobile-label">Was nicht</span>{b.limit}</p>
        </div>
      ))}
    </div>
  );
}
