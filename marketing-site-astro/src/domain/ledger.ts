/**
 * Staged knowledge-ledger demo: a shared, versioned working basis, agent
 * contributions, retained disagreement and reuse by a later authorized task.
 *
 * Rule from the Blind-Spot reference thread: bundle substantially duplicate AI
 * contributions, retain distinct sources and material disagreement. Correlated
 * AI voices do not become independent evidence.
 */
export type LensId = "delivery" | "data" | "client" | "risk" | "commercial";

export const LENS_LABELS: Record<LensId, string> = {
  delivery: "Delivery",
  data: "Daten / Experte",
  client: "Kunde / Abnahme",
  risk: "Betrieb / Risiko",
  commercial: "Kommerziell",
};

export interface Contribution {
  lens: LensId;
  claimKey: string; // same key = same substantive claim
  position: "stützt" | "widerspricht";
  sourceId: string; // distinct IDs do not establish independent evidence
  sourceLabel: string;
  basis: "inference" | "evidence";
  text: string;
}

export interface Bundle {
  claimKey: string;
  position: Contribution["position"];
  voices: number; // how many agents said it
  sourceCount: number; // distinct source IDs, without an independence judgment
  lenses: LensId[];
  text: string;
}

export interface Consolidation {
  bundles: Bundle[];
  retainedDisagreements: Array<{ claimKey: string; against: Bundle; dissent: Bundle }>;
}

/**
 * Groups contributions by (claim, position). Voice and source counts are
 * reported separately. This grouping neither evaluates source independence
 * nor establishes consensus, validity or business approval.
 */
export function consolidate(contribs: Contribution[]): Consolidation {
  const byKey = new Map<string, Bundle & { sources: Set<string> }>();
  for (const c of contribs) {
    const k = `${c.claimKey}|${c.position}`;
    const b = byKey.get(k) ?? {
      claimKey: c.claimKey,
      position: c.position,
      voices: 0,
      sourceCount: 0,
      lenses: [],
      text: c.text,
      sources: new Set<string>(),
    };
    b.voices += 1;
    b.sources.add(c.sourceId);
    if (!b.lenses.includes(c.lens)) b.lenses.push(c.lens);
    byKey.set(k, b);
  }
  const bundles: Bundle[] = [...byKey.values()].map(({ sources, ...b }) => ({
    ...b,
    sourceCount: sources.size,
  }));
  const retainedDisagreements: Consolidation["retainedDisagreements"] = [];
  for (const b of bundles) {
    if (b.position !== "stützt") continue;
    const dissent = bundles.find((x) => x.claimKey === b.claimKey && x.position === "widerspricht");
    if (dissent) retainedDisagreements.push({ claimKey: b.claimKey, against: b, dissent });
  }
  return { bundles, retainedDisagreements };
}

export interface LedgerClaim {
  id: string;
  text: string;
  source: { document: string; locator: string } | null; // null = marked as open question
}

export interface LedgerStep {
  id: string;
  label: string;
  detail: string;
  meta?: string;
}

/** All states below are illustrative example data, not a live approval workflow. */
export const SAMPLE_RUN = { subject: "Angebotsentwurf Hansa Wave 2" };

export const SAMPLE_STEPS: LedgerStep[] = [
  { id: "pack", label: "Gemeinsame Basis: Stand 07", detail: "Agenten und Menschen starten mit denselben belegten Aussagen, offenen Fragen und geltenden Rechten.", meta: "Hansa Wave 2 · Wissensledger 07" },
  { id: "draft", label: "Drei Beiträge, eine Quelle", detail: "Drei Agenten folgern aus demselben Methodenstandard: Drei Probeläufe reichen für Wave 2. Das bleibt eine Annahme.", meta: "Delivery · Daten · Kunde / Abnahme" },
  { id: "challenge", label: "Ein Gegenbeleg bleibt sichtbar", detail: "In Hansa Wave 1 war ein vierter Probelauf nötig. Die Erfahrung widerspricht der Annahme für Wave 2.", meta: "Betrieb / Risiko · Lessons Learned Hansa Wave 1" },
  { id: "consolidate", label: "Vereinbarter Arbeitsstand 08", detail: "Gleiche Beiträge werden gebündelt. Annahme, Gegenbeleg und offene Frage bleiben getrennt im gemeinsamen Stand.", meta: "Arbeitsstand vereinbart · fachliche Freigabe bleibt offen" },
  { id: "decide", label: "Kontext geändert. Früherer Lauf bleibt 07.", detail: "Der frühere Entwurf behält seine ursprüngliche Grundlage. Wegen Stand 08 wird er zur erneuten Prüfung markiert.", meta: "Lauf auf Stand 07 · Prüfung erforderlich" },
  { id: "result", label: "Die nächste Aufgabe nutzt Stand 08", detail: "Eine berechtigte Folgeaufgabe übernimmt den neuen Stand mit Quellen und offener Frage. Firmenweite Wiederverwendung braucht eine eigene Prüfung.", meta: "Stand 08 · Wiederverwendungskandidat" },
];

export const SAMPLE_CONTRIBUTIONS: Contribution[] = [
  { lens: "delivery", claimKey: "cutover-3-runs", position: "stützt", sourceId: "methodenhandbuch-v3", sourceLabel: "Methodenhandbuch v3 · Kap. 4.2", basis: "inference", text: "Annahme: Drei Probeläufe reichen für Hansa Wave 2." },
  { lens: "data", claimKey: "cutover-3-runs", position: "stützt", sourceId: "methodenhandbuch-v3", sourceLabel: "Methodenhandbuch v3 · Kap. 4.2", basis: "inference", text: "Annahme: Drei Probeläufe reichen für Hansa Wave 2." },
  { lens: "client", claimKey: "cutover-3-runs", position: "stützt", sourceId: "methodenhandbuch-v3", sourceLabel: "Methodenhandbuch v3 · Kap. 4.2", basis: "inference", text: "Annahme: Drei Probeläufe reichen für Hansa Wave 2." },
  { lens: "risk", claimKey: "cutover-3-runs", position: "widerspricht", sourceId: "hansa-lessons-2026", sourceLabel: "Lessons Learned Hansa Wave 1 · Datenmigration", basis: "evidence", text: "Gegenbeleg: Bei vergleichbarer Datenlage in Hansa Wave 1 war ein vierter Probelauf nötig." },
  { lens: "client", claimKey: "go-recommendation", position: "widerspricht", sourceId: "reconciliation-v3", sourceLabel: "Reconciliation Report v3 · S. 4, Tabelle 2", basis: "evidence", text: "Gegenbeleg: Report v3 stützt die uneingeschränkte Go-Empfehlung nicht mehr." },
];

export const SAMPLE_CLAIMS: LedgerClaim[] = [
  { id: "c1", text: "Der Cutover erfolgt phasenweise je Werk mit mindestens drei Probeläufen.", source: { document: "Methodenhandbuch v3", locator: "Kap. 4.2" } },
  { id: "c2", text: "Bei vergleichbarer Datenlage war ein vierter Probelauf nötig.", source: { document: "Lessons Learned Hansa Wave 1", locator: "Abschnitt Datenmigration" } },
  { id: "c3", text: "Die Go-Empfehlung gilt nur mit abgeschlossener Reconciliation.", source: { document: "Reconciliation Report v3", locator: "S. 4, Tabelle 2" } },
  { id: "c4", text: "Rahmenvertrag erlaubt Erweiterung um Wave 2 ohne neue Ausschreibung.", source: { document: "Rahmenvertrag 2025", locator: "§ 7 Abs. 2" } },
  { id: "c5", text: "Wie viele Werke sind in Wave 2 tatsächlich im Scope?", source: null },
];
