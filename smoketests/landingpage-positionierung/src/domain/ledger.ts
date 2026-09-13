/**
 * Run ledger: the trail one agent run leaves behind — context pack, draft,
 * multi-lens challenge, consolidation without false consensus, human decision.
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
  sourceId: string; // evidence the contribution rests on
  text: string;
}

export interface Bundle {
  claimKey: string;
  position: Contribution["position"];
  voices: number; // how many agents said it
  independentEvidence: number; // how many distinct sources actually back it
  lenses: LensId[];
  text: string;
}

export interface Consolidation {
  bundles: Bundle[];
  retainedDisagreements: Array<{ claimKey: string; against: Bundle; dissent: Bundle }>;
}

/**
 * Groups contributions by (claim, position). Voice count and independent
 * evidence are reported separately so three agents citing one document read
 * as one piece of evidence, not three.
 */
export function consolidate(contribs: Contribution[]): Consolidation {
  const byKey = new Map<string, Bundle & { sources: Set<string> }>();
  for (const c of contribs) {
    const k = `${c.claimKey}|${c.position}`;
    const b = byKey.get(k) ?? {
      claimKey: c.claimKey,
      position: c.position,
      voices: 0,
      independentEvidence: 0,
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
    independentEvidence: sources.size,
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

/** The one run the sample trail belongs to (its output schema is the Angebotsentwurf, the claims concern Wave 2). */
export const SAMPLE_RUN = { subject: "Angebotsentwurf Hansa Wave 2" };

export const SAMPLE_STEPS: LedgerStep[] = [
  { id: "pack", label: "Kontextpaket kompiliert", detail: "4 Quellen, 2 Memory-Objekte, Rechte des Auftraggebers, Ausgabeschema Angebotsentwurf", meta: "Korpus-Paket #hj-789" },
  { id: "draft", label: "Entwurf erzeugt", detail: "Frontier-Modell über den freigegebenen Weg (EU-Datenzone im Vertrag des Kunden)", meta: "Modell-Policy complex-grounded-work@1" },
  { id: "challenge", label: "Challenge durch vier Perspektiven", detail: "Delivery, Daten/Experte, Kunde/Abnahme, Betrieb/Risiko prüfen den Entwurf gegen die Quellen", meta: "Validator mit getrennter Policy" },
  { id: "consolidate", label: "Konsolidiert ohne falschen Konsens", detail: "Doppelte Beiträge gebündelt, ein Widerspruch behalten", meta: "3 Stimmen, 1 Beleg: zählt als ein Beleg" },
  { id: "decide", label: "Menschliche Entscheidung", detail: "Challenge: substantiated. Materialität: material. Entscheidung von Lena K. (Principal). Ab hier ist es der gemeinsame Stand für Agenten und Menschen", meta: "Provenance-tragend, keine Ground Truth" },
  { id: "result", label: "Ergebnis mit Belegen", detail: "4 belegte Aussagen, 1 offene Frage, Herkunft und Lauf-ID am Artefakt", meta: "Result Bundle rb-0912" },
];

export const SAMPLE_CONTRIBUTIONS: Contribution[] = [
  { lens: "delivery", claimKey: "cutover-3-runs", position: "stützt", sourceId: "methodenhandbuch-v3", text: "Drei Probeläufe je Werk sind Methodenstandard." },
  { lens: "data", claimKey: "cutover-3-runs", position: "stützt", sourceId: "methodenhandbuch-v3", text: "Drei Probeläufe je Werk sind Methodenstandard." },
  { lens: "client", claimKey: "cutover-3-runs", position: "stützt", sourceId: "methodenhandbuch-v3", text: "Drei Probeläufe je Werk sind Methodenstandard." },
  { lens: "risk", claimKey: "cutover-3-runs", position: "widerspricht", sourceId: "hansa-lessons-2026", text: "Bei Hansa reichten zwei Probeläufe nicht; Datenmigration brauchte einen vierten." },
  { lens: "client", claimKey: "go-recommendation", position: "widerspricht", sourceId: "reconciliation-v3", text: "Report v3 stützt die uneingeschränkte Go-Empfehlung nicht mehr." },
];

export const SAMPLE_CLAIMS: LedgerClaim[] = [
  { id: "c1", text: "Der Cutover erfolgt phasenweise je Werk mit mindestens drei Probeläufen.", source: { document: "Methodenhandbuch v3", locator: "Kap. 4.2" } },
  { id: "c2", text: "Bei vergleichbarer Datenlage war ein vierter Probelauf nötig.", source: { document: "Lessons Learned Hansa Wave 1", locator: "Abschnitt Datenmigration" } },
  { id: "c3", text: "Die Go-Empfehlung gilt nur mit abgeschlossener Reconciliation.", source: { document: "Reconciliation Report v3", locator: "S. 4, Tabelle 2" } },
  { id: "c4", text: "Rahmenvertrag erlaubt Erweiterung um Wave 2 ohne neue Ausschreibung.", source: { document: "Rahmenvertrag 2025", locator: "§ 7 Abs. 2" } },
  { id: "c5", text: "Wie viele Werke sind in Wave 2 tatsächlich im Scope?", source: null },
];
