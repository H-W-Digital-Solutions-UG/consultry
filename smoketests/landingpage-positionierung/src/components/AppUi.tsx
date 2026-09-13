import type { ReactNode } from "react";

/** Primitives of the product mock, in the grammar of the implemented Consultry App DS (dark scheme). */

export type BadgeTone = "ok" | "warn" | "blocked" | "info" | "neutral";

export function Badge({ tone, children, title }: { tone: BadgeTone; children: ReactNode; title?: string }) {
  return (
    <span className={`app-badge app-badge-${tone}`} title={title}>
      {children}
    </span>
  );
}

export function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: Array<{ id: T; label: string; short?: string }>;
  onChange: (id: T) => void;
}) {
  return (
    <div className="app-seg" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.id} type="button" aria-pressed={value === o.id} aria-label={o.label} onClick={() => onChange(o.id)}>
          {o.short ? (
            <>
              <span className="sm:hidden">{o.short}</span>
              <span className="hidden sm:inline">{o.label}</span>
            </>
          ) : (
            o.label
          )}
        </button>
      ))}
    </div>
  );
}

/** One list row: title + optional meta line on the left, a badge (or any node) on the right. */
export function Row({ title, meta, right, mono }: { title: ReactNode; meta?: ReactNode; right?: ReactNode; mono?: string }) {
  return (
    <div className="app-row">
      <div className="min-w-0">
        <div className="flex min-w-0 items-baseline gap-2">
          {mono && <span className="app-mono shrink-0">{mono}</span>}
          <p className="app-row-title min-w-0">{title}</p>
        </div>
        {meta && <p className="app-row-meta mt-0.5">{meta}</p>}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

/** Stepper: dots on a rail, one pressed, earlier ones done. Each step is the one gesture. */
export function Stepper<T extends string>({
  label,
  steps,
  value,
  onChange,
}: {
  label: string;
  steps: Array<{ id: T; label: string; sub?: string }>;
  value: T;
  onChange: (id: T) => void;
}) {
  const idx = steps.findIndex((s) => s.id === value);
  return (
    <div className="app-stepper" role="group" aria-label={label}>
      {steps.map((s, i) => (
        <button key={s.id} type="button" className="app-step" aria-pressed={s.id === value} data-done={i < idx ? "true" : "false"} onClick={() => onChange(s.id)}>
          <span className="app-step-label">{s.label}</span>
          {s.sub && <span className="app-step-sub">{s.sub}</span>}
        </button>
      ))}
    </div>
  );
}

/** Label/value rows for the review rail. */
export function KeyValue({ items }: { items: Array<{ k: string; v: ReactNode; ok?: boolean }> }) {
  return (
    <dl className="app-rows">
      {items.map((it) => (
        <div key={it.k} className={`app-kv ${it.ok ? "app-kv-ok" : ""}`}>
          <dt>{it.k}</dt>
          <dd>{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}
