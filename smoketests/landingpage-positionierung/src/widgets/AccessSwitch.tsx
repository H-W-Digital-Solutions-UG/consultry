import { useState } from "react";
import { PRINCIPALS, answerRateQuestion, filterSources, type EgressDecision } from "@/domain/access";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { Badge, Row, Segmented, type BadgeTone } from "@/components/AppUi";
import { DemoPanels, WidgetWalkthrough } from "@/components/WidgetWalkthrough";
import { DECISION_DE } from "@/widgets/static/format";

/** Segmented labels stay short at every width; the full principal label is the accessible name. */
const SHORT: Record<string, string> = { "p-partner": "Partnerin", "p-consultant": "Consultant", "a-consultant": "Agent des Consultants" };
const OPTIONS = PRINCIPALS.filter((p) => p.id !== "p-sales").map((p) => ({ id: p.id, label: SHORT[p.id] ?? p.label }));
const WALKTHROUGH = [
  { value: "p-partner", label: "Die Rolle bestimmt den Zugriff", duration: 5000 },
  { value: "p-consultant", label: "Vertrauliche Werte werden rollenabhängig begrenzt", duration: 5500 },
  { value: "a-consultant", label: "Für den Agenten gelten dieselben Rechte", duration: 5500 },
] as const;
const TONE: Record<EgressDecision, BadgeTone> = {
  ALLOW: "ok",
  ALLOW_SANITIZED: "warn",
  REQUIRE_REVIEW: "warn",
  LOCAL_ONLY: "info",
  BLOCK: "blocked",
};

/** Same question, three principals: the one gesture is who asks. Sources are filtered at retrieval. */
export function AccessSwitch({ autoplay = false }: { autoplay?: boolean }) {
  const [pid, setPid] = useState("p-partner");
  const demo = useAutoplay<string>(autoplay, WALKTHROUGH, setPid);
  const { stop } = demo;

  const select = (id: string) => {
    stop();
    setPid(id);
    track({ name: "widget_interact", variant: "access", action: `principal:${id}` });
  };

  return (
    <WidgetWalkthrough demo={demo}>
      <Segmented label="Wer fragt" value={pid} options={OPTIONS} onChange={select} />
      <DemoPanels className="mt-3">
        {OPTIONS.map((option) => {
          const active = option.id === pid;
          const principal = PRINCIPALS.find((p) => p.id === option.id)!;
          const answer = answerRateQuestion(principal);
          const verdicts = filterSources(principal);
          return (
            <div key={option.id} data-active={active} aria-hidden={!active} inert={!active} className={active ? "fade-swap" : ""}>
              <div className="app-surface app-divider rounded-[10px] border p-4">
                <p className="app-text-3 text-[12px]">Welche Tagessätze stehen im Angebot Hansa Wave 2?</p>
                <div className="mt-1.5 flex flex-wrap items-start justify-between gap-2">
                  <p className="text-[14px] leading-snug">{answer.text}</p>
                  <Badge tone={TONE[answer.decision]} title={answer.decision}>
                    {DECISION_DE[answer.decision]}
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
          );
        })}
      </DemoPanels>
    </WidgetWalkthrough>
  );
}
