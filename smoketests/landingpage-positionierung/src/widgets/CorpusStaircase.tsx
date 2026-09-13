import { useState } from "react";
import { TIERS, capabilityStatus, type Tier } from "@/domain/corpus";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { Badge, KeyValue, Stepper } from "@/components/AppUi";

type Level = Tier["level"];
const STEPS: Array<{ id: `${Level}`; label: string; sub: string }> = [
  { id: "0", label: "Kickoff", sub: "1 Dokument" },
  { id: "1", label: "Woche 1", sub: "Verträge, Angebote" },
  { id: "2", label: "Woche 2–3", sub: "Referenzen, Profile" },
  { id: "3", label: "laufend", sub: "DMS read-only" },
];

/** Seed staircase: the one gesture is the tier. Rows show what is loaded, what that unlocks, and the visible gap. */
export function CorpusStaircase({ autoplay = false }: { autoplay?: boolean }) {
  const [level, setLevel] = useState<Level>(0);
  const { stop } = useAutoplay<Level>(autoplay, [1, 2, 3], setLevel, 1500);
  const tier = TIERS.find((t) => t.level === level)!;
  const caps = capabilityStatus(level);

  const select = (id: `${Level}`) => {
    stop();
    const l = Number(id) as Level;
    setLevel(l);
    track({ name: "widget_interact", variant: "corpus", action: `tier:${l}` });
  };

  return (
    <div>
      <Stepper label="Korpus-Stufe" steps={STEPS} value={`${level}`} onChange={select} />
      <div key={level} className="fade-swap mt-5">
        <KeyValue
          items={[
            { k: "Geladen", v: tier.uploads.join(", ") },
            {
              k: "Möglich",
              v: (
                <span className="flex flex-wrap gap-1.5">
                  {caps.map((c) => (
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
    </div>
  );
}
