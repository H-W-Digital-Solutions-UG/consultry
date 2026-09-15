/**
 * Seed-staircase model from the Onboarding & Korpus-Ritual: every tier delivers
 * standalone value, the corpus may start incomplete but must show its gaps.
 */
export type CapabilityId = "signals" | "reuse" | "tender" | "teamshape";

export interface Capability {
  id: CapabilityId;
  label: string;
  unlockHint: string;
}

export interface Tier {
  level: 0 | 1 | 2 | 3;
  when: string;
  uploads: string[];
  unlocks: CapabilityId[];
  /** Gaps the system makes visible at this tier instead of pretending completeness. */
  visibleGaps: string[];
}

export const CAPABILITIES: Capability[] = [
  { id: "signals", label: "Bestandskunden-Signale", unlockHint: "1 aktiver Vertrag" },
  { id: "reuse", label: "Wiederverwendung und Angebotsentwurf", unlockHint: "3–5 frühere Angebote" },
  { id: "tender", label: "Ausschreibungs-Eignung", unlockHint: "Capability-Statements und Referenzen" },
  { id: "teamshape", label: "Team-Shape und Kapazität", unlockHint: "Skill- und Profildaten" },
];

export const TIERS: Tier[] = [
  {
    level: 0,
    when: "Kickoff, live, ein Dokument",
    uploads: ["1 aktiver Kundenvertrag"],
    unlocks: ["signals"],
    visibleGaps: ["Verlängerungsfenster erkannt, Quellklausel gezeigt", "Keine Referenzen geladen: Angebotsentwurf noch nicht möglich"],
  },
  {
    level: 1,
    when: "Woche 1",
    uploads: ["alle aktiven Verträge", "3–5 jüngste Angebote (gewonnen und verloren)"],
    unlocks: ["signals", "reuse"],
    visibleGaps: ["2 Angebote ohne Ergebnis-Vermerk: Win-Themes nur teilweise ableitbar"],
  },
  {
    level: 2,
    when: "Woche 2 bis 3",
    uploads: ["Capability-Statements", "Referenzen", "Skill- und Profildaten (CV-Stapel oder 10-Minuten-Intake)"],
    unlocks: ["signals", "reuse", "tender", "teamshape"],
    visibleGaps: ["3 Referenzen ohne Kundenfreigabe: intern nutzbar, extern gesperrt"],
  },
  {
    level: 3,
    when: "laufend",
    uploads: ["DMS/SharePoint read-only", "alte Angebote, Methoden, Runbooks, Blueprints"],
    unlocks: ["signals", "reuse", "tender", "teamshape"],
    visibleGaps: ["Methodenhandbuch v2 abgelöst durch v3: alte Bausteine markiert, nicht gelöscht"],
  },
];

/** Capability status after reaching `level`. */
export function capabilityStatus(level: Tier["level"]): Array<Capability & { active: boolean }> {
  const tier = TIERS.find((t) => t.level === level)!;
  return CAPABILITIES.map((c) => ({ ...c, active: tier.unlocks.includes(c.id) }));
}
