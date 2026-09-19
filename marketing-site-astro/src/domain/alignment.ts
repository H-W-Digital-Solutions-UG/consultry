/**
 * Corporate Artifact Alignment: three independently visible perspectives,
 * deliberately without an aggregate score, traffic light or threshold.
 * A human disposes each finding; "offen" keeps it visible.
 */
export type Lens = "knowledge" | "brand" | "governance";
export type Disposition = "übernommen" | "angepasst" | "offen";

export interface Finding {
  id: string;
  lens: Lens;
  title: string;
  detail: string;
  basis: string; // which applicable basis produced it
}

export const LENSES: Record<Lens, { label: string; question: string; boundary: string }> = {
  knowledge: {
    label: "Wissen",
    question: "Ist die Nachfolgeversion aktuell und belegt, konsistent mit Projekt-Evidenz und freigegebener Methode?",
    boundary: "Retrieval-Treffer oder Modell-Plausibilität reichen nicht. Eine KI-Antwort ändert den Korpus nicht.",
  },
  brand: {
    label: "Marke und Corporate Design",
    question: "Folgt sie der freigegebenen kundenseitigen Sprache, Struktur, Vorlage und den visuellen Regeln eurer Beratung?",
    boundary: "Visuelle Konformität belegt weder fachliche Richtigkeit noch eine Freigabe.",
  },
  governance: {
    label: "Governance und Freigabe",
    question: "Passen Inhalt und Verwendung zu Vertraulichkeit, IP, Nutzungsrechten, Quellenpflicht und externer Freigabe?",
    boundary: "Eine Erlaubnis belegt weder Richtigkeit noch CD-Konformität.",
  },
};

export const SAMPLE_FINDINGS: Finding[] = [
  {
    id: "f-go",
    lens: "knowledge",
    title: "Go-Aussage stützt sich auf Reconciliation Report v2",
    detail: "Report v3 (11.09.) widerspricht der uneingeschränkten Go-Empfehlung in Abschnitt 3.",
    basis: "Projekt-Evidenz: Reconciliation Report v3",
  },
  {
    id: "f-method",
    lens: "knowledge",
    title: "Cutover-Beschreibung folgt Methodenhandbuch v2",
    detail: "v3 gilt seit 15.04.2026 (phasenweise je Werk). Baustein ist als abgelöst markiert.",
    basis: "Firmenwissen: Methodenhandbuch v3",
  },
  {
    id: "f-term",
    lens: "brand",
    title: "„Digital Twin Factory“ ist kein freigegebener Begriff mehr",
    detail: "Sprachregel v3 ersetzt den Begriff durch „Werksdigitalisierung“ in Kundendokumenten.",
    basis: "Brand-Regel v3 ersetzt v2",
  },
  {
    id: "f-template",
    lens: "brand",
    title: "Entscheidungsvorlage nutzt Folienmaster 2024",
    detail: "Freigegebener Master für Steering-Unterlagen ist Version 2026-Q2.",
    basis: "CD-Vorlage: Steering-Master 2026-Q2",
  },
  {
    id: "f-ref",
    lens: "governance",
    title: "Referenz Industrie Nord ohne Kundenfreigabe",
    detail: "Intern zitierbar, für die Kundenunterlage gesperrt, bis die Freigabe vorliegt.",
    basis: "Freigabe: keine Kundenfreigabe hinterlegt",
  },
  {
    id: "f-cite",
    lens: "governance",
    title: "Zwei Aussagen ohne Quellenbindung",
    detail: "Zahlen in Tabelle 2 haben keinen Beleg. Als offene Fragen markiert, nicht ergänzt.",
    basis: "Quellenpflicht für kundenseitige Artefakte",
  },
];

export type Dispositions = Record<string, Disposition>;

/** Records a human disposition for one finding; others are untouched. */
export function dispose(state: Dispositions, findingId: string, d: Disposition): Dispositions {
  return { ...state, [findingId]: d };
}

/**
 * Per-lens counts of open (undisposed or explicitly "offen") findings.
 * Intentionally not summed into one number: the three perspectives stay distinct.
 */
export function openByLens(findings: Finding[], state: Dispositions): Record<Lens, number> {
  const out: Record<Lens, number> = { knowledge: 0, brand: 0, governance: 0 };
  for (const f of findings) {
    const d = state[f.id];
    if (!d || d === "offen") out[f.lens] += 1;
  }
  return out;
}
