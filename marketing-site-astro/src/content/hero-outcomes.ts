export type HeroOutcomeVariant =
  "brain" | "corpus" | "brand" | "ledger" | "access";

export interface HeroOutcome {
  title: string;
  context: string;
}

/** Short captions from the illustrative examples in ProductDemo and domain/. */
export const heroOutcomes: Record<
  HeroOutcomeVariant,
  readonly [HeroOutcome, HeroOutcome, HeroOutcome, HeroOutcome]
> = {
  brain: [
    {
      title: "Vorarbeit auf den aktuellen Stand bringen.",
      context: "Alter Angebotsabschnitt · gegen Methodenhandbuch v3 prüfen",
    },
    {
      title: "Die neue Fassung zählt.",
      context: "Methodenhandbuch v3 ersetzt den Cutover-Ansatz aus v2",
    },
    {
      title: "Die Referenz braucht Freigabe.",
      context: "Referenz Industrie Nord · Kundenfreigabe nicht belegt · nicht still übernommen",
    },
    {
      title: "Mit einem aktuellen Entwurf weiterarbeiten.",
      context: "Alter Angebotsabschnitt · aktualisiert statt neu geschrieben · Prüfung offen",
    },
  ],
  corpus: [
    {
      title: "Ein Vertrag. Erste Möglichkeiten.",
      context: "Der Einstieg beginnt mit einem Kundenvertrag",
    },
    {
      title: "Auftrag geklärt. Quelle dabei.",
      context: "Rahmenvertrag Hansa · § 2 als Ausgangspunkt",
    },
    {
      title: "Erfahrung wird zum Entwurf.",
      context: "Readiness-Workshop aus einem früheren Angebot",
    },
    {
      title: "Mit offenen Fragen in den Termin.",
      context: "Drei offene Fragen für den Termin · keine Zusage",
    },
  ],
  brand: [
    {
      title: "Eine Unterlage. Drei Blickwinkel.",
      context: "Wissen, Marke und Freigabe · getrennt geprüft",
    },
    {
      title: "Go-Empfehlung erneut prüfen.",
      context: "Reconciliation Report v3 · Gegenbeleg liegt vor",
    },
    {
      title: "Veraltete Begriffe erkennen.",
      context: "Brand-Regel v3 ersetzt »Digital Twin Factory«",
    },
    {
      title: "Kundenfreigabe noch offen.",
      context: "Referenz Industrie Nord · extern noch gesperrt",
    },
  ],
  ledger: [
    {
      title: "Viele Beiträge. Ein Arbeitsstand.",
      context: "Hansa Wave 2 · gemeinsame Cutover-Planung",
    },
    {
      title: "Gemeinsame Basis. Begrenzter Zugriff.",
      context: "Stand 07 · jeweils der erlaubte Wissensausschnitt",
    },
    {
      title: "Der Gegenbeleg bleibt sichtbar.",
      context: "Methodenhandbuch v3 + Lessons Learned Hansa Wave 1",
    },
    {
      title: "Auf Stand 08 weiterarbeiten.",
      context: "Arbeitskonsens · geschäftliche Freigabe noch offen",
    },
  ],
  access: [
    {
      title: "Vorbereitung im erlaubten Rahmen.",
      context: "Hansa · Teamaufwand und Kostenrahmen für die Partnerin",
    },
    {
      title: "Ein Vorschlag für den Personaleinsatz.",
      context: "Hansa-Erfahrung und Methodenstandard lesbar · exakte Tagessätze gesperrt",
    },
    {
      title: "Bandbreite statt exakter Sätze.",
      context: "Erlaubtes Kostenband 1.100–1.500 € · Rollenpreise bleiben geschützt",
    },
    {
      title: "Die nächste Prüfung ist vorbereitet.",
      context: "Übergabeentwurf für die Partnerin · nicht versendet · keine zusätzlichen Rechte",
    },
  ],
};
