import { useState } from "react";
import { SAMPLE_CLAIMS, SAMPLE_CONTRIBUTIONS, SAMPLE_STEPS, consolidate } from "@/domain/ledger";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { Badge, Row, Stepper } from "@/components/AppUi";

/** Pure over static sample data, computed once per module. */
const CONSOLIDATION = consolidate(SAMPLE_CONTRIBUTIONS);

/** Short stepper labels; the full domain label is shown in the panel title. */
const SHORT: Record<string, string> = {
  pack: "Kontext",
  draft: "Entwurf",
  challenge: "Challenge",
  consolidate: "Konsolidiert",
  decide: "Entschieden",
  result: "Ergebnis",
};
const IDS = SAMPLE_STEPS.map((s) => s.id);

/** One run as a trail: the one gesture is the step. `meta` is never rendered. */
export function RunLedger({ autoplay = false }: { autoplay?: boolean }) {
  const [openId, setOpenId] = useState<string>("result");
  const { stop } = useAutoplay<string>(autoplay, [...IDS], setOpenId, 1200);
  const step = SAMPLE_STEPS.find((s) => s.id === openId)!;

  const select = (id: string) => {
    stop();
    setOpenId(id);
    track({ name: "widget_interact", variant: "ledger", action: `step:${id}` });
  };

  return (
    <div>
      <Stepper label="Eintrag" steps={SAMPLE_STEPS.map((s) => ({ id: s.id, label: SHORT[s.id] ?? s.label }))} value={openId} onChange={select} />
      <div key={openId} className="fade-swap mt-5">
        <p className="text-[15px] font-semibold">{step.label}</p>
        <p className="app-text-3 mt-0.5 text-[13px]">{step.detail}</p>

        {step.id === "consolidate" && (
          <div className="app-rows mt-3">
            {CONSOLIDATION.bundles.map((b) => (
              <Row
                key={`${b.claimKey}|${b.position}`}
                title={b.text}
                meta={`${b.voices} ${b.voices === 1 ? "Stimme" : "Stimmen"} · ${b.independentEvidence} ${b.independentEvidence === 1 ? "Beleg" : "Belege"}`}
                right={<Badge tone={b.position === "stützt" ? "ok" : "warn"}>{b.position}</Badge>}
              />
            ))}
          </div>
        )}

        {step.id === "result" && (
          <div className="app-rows mt-3">
            {SAMPLE_CLAIMS.map((c) => (
              <Row
                key={c.id}
                title={c.text}
                meta={c.source ? `${c.source.document} · ${c.source.locator}` : "Keine Quelle im Korpus, als Frage an den Kunden markiert"}
                right={c.source ? <Badge tone="ok">belegt</Badge> : <Badge tone="warn">offene Frage</Badge>}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
