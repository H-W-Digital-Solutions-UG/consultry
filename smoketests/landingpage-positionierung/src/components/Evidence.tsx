import { fmtValue } from "@/widgets/static/format";

export interface Stat {
  value: string;
  label: string;
  source: string;
}

/** The study figures remain explicitly sourced; the large numbers establish the reading order. */
export function Evidence({ stats }: { stats: Stat[] }) {
  return (
    <div className="story-evidence">
      <p className="story-kicker">Was Studien über den Arbeitsalltag zeigen</p>
      <dl>
        {stats.slice(0, 2).map((s) => (
          <div key={s.label} className="story-evidence-item story-reveal">
            <dt className="story-evidence-number">{fmtValue(s.value)}</dt>
            <dd className="story-evidence-description">{s.label}</dd>
            <dd className="story-evidence-source">{s.source}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
