import { useState } from "react";
import { SAMPLE_ASSERTIONS, resolveAsOf, successorOf, type EvidenceState } from "@/domain/assertions";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { Badge, Row, Segmented, type BadgeTone } from "@/components/AppUi";
import { answerOf, fmtDate } from "./static/format";

type AsOf = "2026-03-01" | "2026-09-12";
const DATES: Array<{ id: AsOf; label: string; short: string }> = [
  { id: "2026-03-01", label: "Stand 1. März 2026", short: "1. März" },
  { id: "2026-09-12", label: "Stand heute", short: "heute" },
];
const TOPICS = ["cutover", "referenz"];
const STATE: Record<EvidenceState, { label: string; tone: BadgeTone }> = {
  approved: { label: "freigegeben", tone: "ok" },
  superseded: { label: "abgelöst", tone: "warn" },
  open: { label: "Freigabe offen", tone: "blocked" },
};

/** Same facts, two points in time: the one gesture is the date. Rows render the domain assertions verbatim. */
export function AssertionExplorer({ autoplay = false }: { autoplay?: boolean }) {
  const [asOf, setAsOf] = useState<AsOf>("2026-09-12");
  const { stop } = useAutoplay<AsOf>(autoplay, ["2026-03-01", "2026-09-12"], setAsOf, 1800);
  const rows = TOPICS.flatMap((t) => resolveAsOf(SAMPLE_ASSERTIONS, t, asOf));

  const select = (id: AsOf) => {
    stop();
    setAsOf(id);
    track({ name: "widget_interact", variant: "brain", action: `asOf:${id}` });
  };

  return (
    <div>
      <Segmented label="Zeitpunkt" value={asOf} options={DATES} onChange={select} />
      <div key={asOf} className="app-rows fade-swap mt-3">
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
    </div>
  );
}
