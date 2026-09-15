import { useState } from "react";
import { SAMPLE_ASSERTIONS, resolveAsOf, successorOf, type EvidenceState } from "@/domain/assertions";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { Badge, Row, Segmented, type BadgeTone } from "@/components/AppUi";
import { DemoPanels, WidgetWalkthrough } from "@/components/WidgetWalkthrough";
import { answerOf, fmtDate } from "./static/format";

type AsOf = "2026-03-01" | "2026-09-12";
const DATES: Array<{ id: AsOf; label: string; short: string }> = [
  { id: "2026-03-01", label: "Stand 1. März 2026", short: "1. März" },
  { id: "2026-09-12", label: "Stand heute", short: "heute" },
];
const WALKTHROUGH = [
  { value: "2026-03-01", label: "Frühere Aussagen bleiben mit Quelle nachvollziehbar", duration: 5000 },
  { value: "2026-09-12", label: "Heute zählt die gültige Fassung", duration: 5500 },
] as const;
const TOPICS = ["cutover", "referenz"];
const STATE: Record<EvidenceState, { label: string; tone: BadgeTone }> = {
  approved: { label: "freigegeben", tone: "ok" },
  superseded: { label: "abgelöst", tone: "warn" },
  open: { label: "Freigabe offen", tone: "blocked" },
};

/** Same facts, two points in time: the one gesture is the date. Rows render the domain assertions verbatim. */
export function AssertionExplorer({ autoplay = false }: { autoplay?: boolean }) {
  const [asOf, setAsOf] = useState<AsOf>("2026-03-01");
  const demo = useAutoplay<AsOf>(autoplay, WALKTHROUGH, setAsOf);
  const { stop } = demo;

  const select = (id: AsOf) => {
    stop();
    setAsOf(id);
    track({ name: "widget_interact", variant: "brain", action: `asOf:${id}` });
  };

  return (
    <WidgetWalkthrough demo={demo}>
      <Segmented label="Zeitpunkt" value={asOf} options={DATES} onChange={select} />
      <DemoPanels className="mt-3">
        {DATES.map((date) => {
          const active = date.id === asOf;
          const rows = TOPICS.flatMap((t) => resolveAsOf(SAMPLE_ASSERTIONS, t, date.id));
          return (
            <div key={date.id} data-active={active} aria-hidden={!active} inert={!active} className={active ? "app-rows fade-swap" : "app-rows"}>
              {rows.map((a) => {
                const next = successorOf(SAMPLE_ASSERTIONS, a);
                return (
                  <Row
                    key={a.id}
                    mono={fmtDate(a.validFrom)}
                    title={answerOf(a.claim)}
                    meta={`${a.source.document} · ${a.source.locator}${next ? ` · heute gilt ${next.source.document}` : ""}`}
                    right={<Badge tone={STATE[a.state].tone}>{STATE[a.state].label}</Badge>}
                  />
                );
              })}
            </div>
          );
        })}
      </DemoPanels>
    </WidgetWalkthrough>
  );
}
