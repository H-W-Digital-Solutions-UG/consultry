import { useEffect, useEffectEvent, useState } from "react";
import { SAMPLE_FINDINGS, type Lens } from "@/domain/alignment";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { Badge, Row, Segmented } from "@/components/AppUi";
import { DemoPanels, WidgetWalkthrough } from "@/components/WidgetWalkthrough";
import { onSurfaceSelect } from "@/lib/surfaceBus";

const LENS_OPTIONS: Array<{ id: Lens; label: string; short: string }> = [
  { id: "knowledge", label: "Wissen", short: "Wissen" },
  { id: "brand", label: "Marke und CD", short: "Marke" },
  { id: "governance", label: "Governance", short: "Governance" },
];
const WALKTHROUGH = [
  { value: "knowledge", label: "Aktuelle Quellen statt veralteter Aussagen", duration: 5000 },
  { value: "brand", label: "Sprache und Vorlage passen zur Marke", duration: 5000 },
  { value: "governance", label: "Fehlende Freigaben bleiben sichtbar", duration: 5000 },
] as const;

/**
 * Three independent perspectives on one revision; the one gesture is the lens.
 * No aggregate score, by design. `dispose`/`openByLens` stay in the domain for tests, unused in UI v2.
 */
export function AlignmentLenses({ autoplay = false }: { autoplay?: boolean }) {
  const [lens, setLens] = useState<Lens>("knowledge");
  const demo = useAutoplay<Lens>(autoplay, WALKTHROUGH, setLens);
  const { stop } = demo;
  const selectFromHero = useEffectEvent((id: string) => {
    if (id !== "knowledge" && id !== "brand" && id !== "governance") return;
    stop();
    setLens(id);
  });
  useEffect(() => onSurfaceSelect((id) => selectFromHero(id)), []);

  const pick = (l: Lens) => {
    stop();
    setLens(l);
    track({ name: "widget_interact", variant: "brand", action: `lens:${l}` });
  };

  return (
    <WidgetWalkthrough demo={demo}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Segmented label="Prüfperspektive" value={lens} options={LENS_OPTIONS} onChange={pick} />
        <span className="app-mono">Entscheidungsvorlage v7 → Nachfolgeversion</span>
      </div>
      <DemoPanels className="mt-3">
        {LENS_OPTIONS.map((option) => {
          const active = option.id === lens;
          return (
            <div key={option.id} data-active={active} aria-hidden={!active} inert={!active} className={active ? "app-rows fade-swap" : "app-rows"}>
              {SAMPLE_FINDINGS.filter((f) => f.lens === option.id).map((f) => (
                <Row key={f.id} title={f.title} meta={`Basis: ${f.basis}`} right={<Badge tone="warn">offen</Badge>} />
              ))}
            </div>
          );
        })}
      </DemoPanels>
    </WidgetWalkthrough>
  );
}
