import { fmtValue } from "@/widgets/static/format";

export interface Stat {
  value: string;
  label: string;
  source: string;
}

/** Two sourced statistics, stacked, terracotta mono numerals. Every number names its study. */
export function Evidence({ stats }: { stats: Stat[] }) {
  return (
    <dl className="divide-y divide-hair border-y border-hair">
      {stats.slice(0, 2).map((s) => (
        <div key={s.label} className="py-6">
          <dt className="t-stat text-brand">{fmtValue(s.value)}</dt>
          <dd className="t-body mt-2 max-w-[36ch]">{s.label}</dd>
          <dd className="t-body-sm mt-1 text-ink-mute">{s.source}</dd>
        </div>
      ))}
    </dl>
  );
}
