/** A local, deterministic example. No AI, network request or offer delivery. */
import { translateData, translator, type Locale } from '../i18n/locale.ts';
import { englishOffer, offerContext } from '../i18n/offer.ts';
export type OfferScope = "analysis" | "implementation" | "custom";

export type OfferInput = {
  scope: OfferScope;
  note?: string;
};

export type OfferDraft = {
  title: string;
  subtitle: string;
  scopeLabel: string;
  duration: string;
  fee: string;
  included: string[];
  excluded: string[];
  assumption: string;
  note: string;
  status: string;
};

const analysisItems = [
  "2 Workshops mit dem Operations-Team",
  "Ist-Prozess und Reibungspunkte dokumentieren",
  "Priorisierten Maßnahmenplan für den nächsten Schritt erstellen",
];

const commonExclusions = [
  "Vollständiger ERP-Ersatz",
  "Laufender Betrieb und dauerhafter Support",
];

const context = offerContext;

/** Preserve literal input; only the documented 600-code-point bound is applied. */
function boundedNote(note: string | undefined): string {
  if (note !== undefined && typeof note !== "string") {
    throw new TypeError("Die Ergänzung muss Text sein.");
  }
  return Array.from(note ?? "").slice(0, 600).join("");
}

export function createOfferDraft(input: OfferInput, locale: Locale = 'de'): OfferDraft {
  // Translate only our fixture text, never the user's literal custom note.
  const localized = (draft: OfferDraft): OfferDraft => ({
    ...translateData({ ...draft, note: '' }, locale, englishOffer),
    note: draft.note,
  });
  if (!input || !["analysis", "implementation", "custom"].includes(input.scope)) {
    throw new RangeError("Unbekannter Angebotsumfang.");
  }

  const note = boundedNote(input.note);
  if (input.scope === "custom" && !note.trim()) {
    throw new RangeError("Bitte eine individuelle Ergänzung eingeben.");
  }

  const base = {
    title: "Aufträge einfacher abwickeln.",
    subtitle: "Nordlicht Digital für Lindenwerk GmbH · Fiktives Beispiel · Entwurf, nicht versendet",
    note,
  };

  if (input.scope === "analysis") {
    return localized({
      ...base,
      scopeLabel: "Analyse & Maßnahmenplan",
      duration: "5 Arbeitstage",
      fee: "3.200 € netto",
      included: [...analysisItems],
      excluded: ["Technische Umsetzung und Workflow-Pilot", ...commonExclusions],
      assumption: `${context} Annahme: Das Team stellt Gesprächszeit und Beispielaufträge bereit. Der Beispielpreis gilt nur für diesen Analyseumfang.`,
      status: "Entwurf · nicht versendet",
    });
  }

  if (input.scope === "implementation") {
    return localized({
      ...base,
      scopeLabel: "Analyse + kleiner Workflow-Pilot",
      duration: "3 Wochen",
      fee: "7.800 € netto",
      included: [
        ...analysisItems,
        "Einen kleinen Workflow-Piloten gemeinsam auswählen und umsetzen",
        "Pilot mit Beispielaufträgen testen und an das Team übergeben",
      ],
      excluded: ["Weitere Workflows und unternehmensweiter Rollout", ...commonExclusions],
      assumption: `${context} Annahme: Ein kleiner Pilot ist mit vorhandenen Zugängen und Testdaten umsetzbar; die technische Machbarkeit ist vor Beauftragung zu prüfen. Der Beispielpreis umfasst genau einen Piloten.`,
      status: "Entwurf · nicht versendet",
    });
  }

  return localized({
    ...base,
    scopeLabel: "Analyse + individuelle Ergänzung",
    duration: "Noch zu klären",
    fee: "Noch zu klären",
    included: [
      ...analysisItems,
      "Individuelle Ergänzung als Notiz aufgenommen; noch keine zugesagte Leistung",
    ],
    excluded: [...commonExclusions],
    assumption: `${context} Die Ergänzung wird unverändert als Text übernommen und nicht inhaltlich ausgewertet. Umfang, Machbarkeit, Dauer und Preis müssen gemeinsam geklärt werden.`,
    status: "Umfang offen",
  });
}

/** Escape inline fields so the Markdown exporter also treats them as text. */
function markdownText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/([\\`*_{}[\]()#+\-.!|])/g, "\\$1")
    .replace(/\r\n|\r|\n/g, " ");
}

/** A longer fence prevents user-provided backticks from ending the text block. */
function literalNote(note: string): string {
  const longestRun = Math.max(0, ...(note.match(/`+/g) ?? []).map((run) => run.length));
  const fence = "`".repeat(Math.max(3, longestRun + 1));
  return `${fence}text\n${note}\n${fence}`;
}

export function offerToMarkdown(draft: OfferDraft, locale: Locale = 'de'): string {
  const t = translator(locale, englishOffer);
  const sections = [
    `# ${markdownText(draft.title)}`,
    markdownText(draft.subtitle),
    `Status: ${markdownText(draft.status)}`,
    `## ${t('Leistungsumfang')}\n\n${markdownText(draft.scopeLabel)}\n\n${draft.included.map((item) => `- ${markdownText(item)}`).join("\n")}`,
    `## ${t('Zeit & Honorar')}\n\n${t('Dauer')}: ${markdownText(draft.duration)}\n\n${t('Honorar')}: ${markdownText(draft.fee)}`,
    `## ${t('Nicht enthalten')}\n\n${draft.excluded.map((item) => `- ${markdownText(item)}`).join("\n")}`,
    `## ${t('Grundlage & Annahmen')}\n\n${markdownText(draft.assumption)}`,
  ];

  if (draft.note) {
    sections.push(`## ${t('Individuelle Ergänzung · unveränderte Notiz')}\n\n${literalNote(draft.note)}`);
  }

  sections.push(t("Fiktive Beispieldaten und Beispielpreise. Lokal simulierter Entwurf; nicht geprüft, nicht freigegeben und nicht versendet."));
  return `${sections.join("\n\n")}\n`;
}
