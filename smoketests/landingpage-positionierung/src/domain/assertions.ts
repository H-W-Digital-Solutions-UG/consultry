/**
 * Bitemporal knowledge assertions for the Firmengedächtnis demo.
 *
 * Mirrors the ratified `ContextAssertion` idea: every fact carries valid time
 * (when it was true), record time (when the firm learned it), a source binding
 * and an evidence state. A stale document must not silently override current
 * reality; a superseded fact stays visible with its successor.
 */
export type EvidenceState = "approved" | "superseded" | "open";

export interface SourceBinding {
  document: string;
  locator: string; // page, section or cell
}

export interface Assertion {
  id: string;
  topic: string;
  claim: string;
  validFrom: string; // ISO date
  validTo: string | null; // null = still valid
  recordedAt: string; // ISO date
  source: SourceBinding;
  state: EvidenceState;
  supersededBy?: string;
}

/**
 * Returns assertions on `topic` as the firm would have answered on `asOf`.
 * Valid-time filtering only (record time is displayed, not filtered) — enough
 * to show why "Stand: März" and "Stand: heute" differ.
 */
export function resolveAsOf(assertions: Assertion[], topic: string, asOf: string): Assertion[] {
  return assertions.filter(
    (a) => a.topic === topic && a.validFrom <= asOf && (a.validTo === null || asOf < a.validTo),
  );
}

/** The assertion that superseded `a`, if any. */
export function successorOf(assertions: Assertion[], a: Assertion): Assertion | undefined {
  return a.supersededBy ? assertions.find((x) => x.id === a.supersededBy) : undefined;
}

export const SAMPLE_ASSERTIONS: Assertion[] = [
  {
    id: "cutover-v2",
    topic: "cutover",
    claim: "Cutover-Ansatz für S/4HANA-Migrationen: Big-Bang mit zwei Probeläufen.",
    validFrom: "2025-02-01",
    validTo: "2026-04-15",
    recordedAt: "2025-02-10",
    source: { document: "Methodenhandbuch v2", locator: "Kap. 4.2" },
    state: "superseded",
    supersededBy: "cutover-v3",
  },
  {
    id: "cutover-v3",
    topic: "cutover",
    claim: "Cutover-Ansatz für S/4HANA-Migrationen: phasenweise je Werk, mindestens drei Probeläufe.",
    validFrom: "2026-04-15",
    validTo: null,
    recordedAt: "2026-04-18",
    source: { document: "Methodenhandbuch v3", locator: "Kap. 4.2, Freigabe Practice Lead" },
    state: "approved",
  },
  {
    id: "ref-hansa",
    topic: "referenz",
    claim: "Referenz Projekt Hansa (Wave 1) ist für Angebote an Banken freigegeben.",
    validFrom: "2026-01-20",
    validTo: null,
    recordedAt: "2026-01-20",
    source: { document: "Referenzfreigabe Hansa", locator: "Mail Kundenfreigabe, 20.01.2026" },
    state: "approved",
  },
  {
    id: "ref-nord",
    topic: "referenz",
    claim: "Referenz Projekt Industrie Nord darf extern genannt werden.",
    validFrom: "2025-11-01",
    validTo: null,
    recordedAt: "2025-11-01",
    source: { document: "Projektakte Industrie Nord", locator: "keine Kundenfreigabe hinterlegt" },
    state: "open",
  },
];
