import type { Kpi } from "@/content/types";
import { fmtValue } from "@/widgets/static/format";

/**
 * Three KPI-like tiles under the concepts. Values are structural rules of the
 * product or explicitly labelled targets, never measured results we do not have.
 */
export function Kpis({ items }: { items: Kpi[] }) {
  return (
    <ul className="mt-10 grid gap-4 md:grid-cols-3" aria-label="Zielmetriken">
      {items.map((k) => (
        <li key={k.label} className="rounded-[12px] border border-hair bg-surface-card p-5">
          <div className="flex items-baseline justify-between gap-3">
            <p className="t-stat text-brand-dark">{fmtValue(k.value)}</p>
            <span className="t-caption rounded-full border border-hair px-2 py-0.5">{k.kind}</span>
          </div>
          <p className="t-body-sm mt-2 text-ink-soft">{k.label}</p>
        </li>
      ))}
    </ul>
  );
}
