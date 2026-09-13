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
    <picture aria-hidden="true" className="-mt-2 -ml-2 block size-24">
      <source type="image/avif" srcSet={`${base}-160.avif 160w, ${base}-320.avif 320w`} sizes="96px" />
      <img src={`${base}-160.webp`} srcSet={`${base}-160.webp 160w, ${base}-320.webp 320w`} sizes="96px" alt="" width={160} height={160} loading="lazy" decoding="async" className="size-24" />
    </picture>
  );
}

/**
 * How-it-works as three concept columns: one object, a short title, one sentence.
 * `sequence` adds an ordinal when the steps really are an order.
 */
export function Steps({ steps, sequence }: { steps: Step[]; sequence: boolean }) {
  const Tag = sequence ? "ol" : "ul";
  return (
    <Tag className="grid gap-8 md:grid-cols-3 md:gap-10">
      {steps.map((s, i) => (
        <li key={s.title} className="border-t border-hair pt-5">
          {s.icon && <StepIcon icon={s.icon} />}
          <h3 className="t-heading mt-2 flex items-baseline gap-2.5">
            {sequence && <span className="t-mono text-brand-dark">{String(i + 1).padStart(2, "0")}</span>}
            <span>{s.title}</span>
          </h3>
          <p className="t-body mt-2 max-w-[34ch] text-ink-soft">{s.text}</p>
        </li>
      ))}
    </Tag>
  );
}
