import { useState } from "react";
import { PRINCIPALS, answerRateQuestion, filterSources, type EgressDecision } from "@/domain/access";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { Badge, Row, Segmented, type BadgeTone } from "@/components/AppUi";
import { DECISION_DE } from "@/widgets/static/format";

/** Segmented labels stay short at every width; the full principal label is the accessible name. */
const SHORT: Record<string, string> = { "p-partner": "Partnerin", "p-consultant": "Consultant", "a-consultant": "Agent des Consultants" };
const OPTIONS = PRINCIPALS.filter((p) => p.id !== "p-sales").map((p) => ({ id: p.id, label: SHORT[p.id] ?? p.label }));
const TONE: Record<EgressDecision, BadgeTone> = {
  ALLOW: "ok",
  ALLOW_SANITIZED: "warn",
  REQUIRE_REVIEW: "warn",
  LOCAL_ONLY: "info",
  BLOCK: "blocked",
};

/** Same question, three principals: the one gesture is who asks. Sources are filtered at retrieval. */
export function AccessSwitch({ autoplay = false }: { autoplay?: boolean }) {
  const [pid, setPid] = useState("p-consultant");
  const { stop } = useAutoplay<string>(autoplay, ["p-partner", "a-consultant", "p-consultant"], setPid, 1600);
  const p = PRINCIPALS.find((x) => x.id === pid)!;
  const a = answerRateQuestion(p);
  const verdicts = filterSources(p);

  const select = (id: string) => {
    stop();
    setPid(id);
    track({ name: "widget_interact", variant: "access", action: `principal:${id}` });
  };

  return (
    <div>
      <Segmented label="Wer fragt" value={pid} options={OPTIONS} onChange={select} />
      <div key={pid} className="fade-swap mt-3">
        <div className="app-surface app-divider rounded-[10px] border p-4">
          <p className="app-text-3 text-[12px]">Welche Tagessätze stehen im Angebot Hansa Wave 2?</p>
          <div className="mt-1.5 flex flex-wrap items-start justify-between gap-2">
            <p className="text-[14px] leading-snug">{a.text}</p>
            <Badge tone={TONE[a.decision]} title={a.decision}>
              {DECISION_DE[a.decision]}
            </Badge>
          </div>
        </div>
        <div className="app-rows mt-2">
          {verdicts.map((v) => (
            <Row
              key={v.source.id}
              title={v.source.name}
              meta={v.allowed ? v.source.connector : `${v.source.connector} · ${v.reason}`}
              right={v.allowed ? <Badge tone="ok">geladen</Badge> : <Badge tone="blocked">gefiltert</Badge>}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
