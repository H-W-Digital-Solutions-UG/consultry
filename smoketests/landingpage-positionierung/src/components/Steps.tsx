export interface Step {
  title: string;
  text: string;
  /** Concept illustration id → /hero/step-<id>-{160,320}.{avif,webp} (generated brand object, lazy). */
  icon?: string;
}

/** Small generated concept object, same series as the hero objects. */
function StepIcon({ icon }: { icon: string }) {
  const base = `/hero/step-${icon}`;
  return (
    <picture aria-hidden="true" className="story-step-art">
      <source type="image/avif" srcSet={`${base}-160.avif 160w, ${base}-320.avif 320w`} sizes="(min-width: 768px) 112px, 72px" />
      <img src={`${base}-160.webp`} srcSet={`${base}-160.webp 160w, ${base}-320.webp 320w`} sizes="(min-width: 768px) 112px, 72px" alt="" width={160} height={160} loading="lazy" decoding="async" />
    </picture>
  );
}

/**
 * Compact concept columns become short editorial rows on mobile.
 * `sequence` adds an ordinal when the steps really are an order.
 */
export function Steps({ steps, sequence }: { steps: Step[]; sequence: boolean }) {
  const Tag = sequence ? "ol" : "ul";
  return (
    <Tag className="story-steps">
      {steps.map((s, i) => (
        <li key={s.title} className="story-step">
          <span className="story-index" aria-hidden={!sequence}>{String(i + 1).padStart(2, "0")}</span>
          <div className="story-step-copy">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
          {s.icon && <StepIcon icon={s.icon} />}
        </li>
      ))}
    </Tag>
  );
}
