import { useEffect, useEffectEvent, useState } from "react";
import { TIERS, capabilityStatus, type Tier } from "@/domain/corpus";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { Badge, KeyValue, Stepper } from "@/components/AppUi";
import { DemoPanels, WidgetWalkthrough } from "@/components/WidgetWalkthrough";
import { onSurfaceSelect } from "@/lib/surfaceBus";

type Level = Tier["level"];
const STEPS: Array<{ id: `${Level}`; label: string; sub: string }> = [
  { id: "0", label: "Kickoff", sub: "1 Dokument" },
  { id: "1", label: "Woche 1", sub: "Verträge, Angebote" },
  { id: "2", label: "Woche 2–3", sub: "Referenzen, Profile" },
  { id: "3", label: "laufend", sub: "DMS read-only" },
];
const WALKTHROUGH = [
  { value: 0, label: "Ein Vertrag macht erste Chancen sichtbar", duration: 4500 },
  { value: 1, label: "Frühere Angebote werden wiederverwendbar", duration: 4500 },
  { value: 2, label: "Referenzen und Profile erweitern die Möglichkeiten", duration: 5000 },
  { value: 3, label: "Quellen bleiben verbunden und führend", duration: 4500 },
] as const;

/** Seed staircase: the one gesture is the tier. Rows show what is loaded, what that unlocks, and the visible gap. */
export function CorpusStaircase({ autoplay = false }: { autoplay?: boolean }) {
  const [level, setLevel] = useState<Level>(0);
  const demo = useAutoplay<Level>(autoplay, WALKTHROUGH, setLevel);
  const { stop } = demo;
  const selectFromHero = useEffectEvent((id: string) => {
    if (!/^[0-3]$/.test(id)) return;
    stop();
    setLevel(Number(id) as Level);
  });
  useEffect(() => onSurfaceSelect((id) => selectFromHero(id)), []);

  const select = (id: `${Level}`) => {
    stop();
    const l = Number(id) as Level;
    setLevel(l);
    track({ name: "widget_interact", variant: "corpus", action: `tier:${l}` });
  };

  return (
    <WidgetWalkthrough demo={demo}>
      <Stepper label="Korpus-Stufe" steps={STEPS} value={`${level}`} onChange={select} />
      <DemoPanels className="mt-5">
        {TIERS.map((tier) => {
          const active = tier.level === level;
          return (
            <div key={tier.level} data-active={active} aria-hidden={!active} inert={!active} className={active ? "fade-swap" : ""}>
              <KeyValue
                items={[
                  { k: "Geladen", v: tier.uploads.join(", ") },
                  {
                    k: "Möglich",
                    v: (
                      <span className="flex flex-wrap gap-1.5">
                        {capabilityStatus(tier.level).map((c) => (
                          <Badge key={c.id} tone={c.active ? "ok" : "neutral"} title={c.active ? undefined : `ab ${c.unlockHint}`}>
                            {c.label}
                          </Badge>
                        ))}
                      </span>
                    ),
                  },
                  { k: "Sichtbar", v: tier.visibleGaps.join(" · ") },
                ]}
              />
            </div>
          );
        })}
      </DemoPanels>
    </WidgetWalkthrough>
  );
}
