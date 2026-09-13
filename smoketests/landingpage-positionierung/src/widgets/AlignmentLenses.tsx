import { useState } from "react";
import { SAMPLE_FINDINGS, type Lens } from "@/domain/alignment";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { Badge, Row, Segmented } from "@/components/AppUi";

const LENS_OPTIONS: Array<{ id: Lens; label: string; short: string }> = [
  { id: "knowledge", label: "Wissen", short: "Wissen" },
  { id: "brand", label: "Marke und CD", short: "Marke" },
  { id: "governance", label: "Governance", short: "Governance" },
];

/**
 * Three independent perspectives on one revision; the one gesture is the lens.
 * No aggregate score, by design. `dispose`/`openByLens` stay in the domain for tests, unused in UI v2.
 */
export function AlignmentLenses({ autoplay = false }: { autoplay?: boolean }) {
  const [lens, setLens] = useState<Lens>("knowledge");
  const { stop } = useAutoplay<Lens>(autoplay, ["brand", "governance", "knowledge"], setLens, 1500);
  const findings = SAMPLE_FINDINGS.filter((f) => f.lens === lens);

  const pick = (l: Lens) => {
    stop();
    setLens(l);
    track({ name: "widget_interact", variant: "brand", action: `lens:${l}` });
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Segmented label="Prüfperspektive" value={lens} options={LENS_OPTIONS} onChange={pick} />
        <span className="app-mono">Entscheidungsvorlage v7 → Nachfolgeversion</span>
      </div>
      <div key={lens} className="app-rows fade-swap mt-3">
        {findings.map((f) => (
          <Row key={f.id} title={f.title} meta={`Basis: ${f.basis}`} right={<Badge tone="warn">offen</Badge>} />
        ))}
      </div>
    </div>
  );
}
