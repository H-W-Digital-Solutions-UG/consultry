export type HeroOutcomeVariant =
  "brain" | "brand" | "ledger" | "access";

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
      context: "Im Beispiel: ein Vertrag und die passende Vorarbeit als Ausgangspunkt",
    },
    {
      title: "Die Referenz braucht Freigabe.",
      context: "Methodenhandbuch v3 ersetzt v2 · der alte Verweis im Angebot braucht eine Prüfung",
    },
    {
      title: "Mit einem aktuellen Entwurf weiterarbeiten.",
      context: "Referenz Industrie Nord ohne Kundenfreigabe · offene Fragen statt stiller Annahmen",
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
      context: "Delivery, Daten, Risiko · jeder Agent in seinem erlaubten Ausschnitt",
    },
    {
      title: "Der Gegenbeleg bleibt sichtbar.",
      context: "Zwei Beiträge, eine Quelle · ein Gegenbeleg aus Wave 1",
    },
    {
      title: "Auf Stand 08 weiterarbeiten.",
      context: "Stand 08 protokolliert · Go-Freigabe bleibt bei Menschen",
    },
  ],
  access: [
    {
      title: "Vorbereitung im erlaubten Rahmen.",
      context: "Hansa · Teamaufwand und Kostenrahmen für die Partnerin",
    },
    {
      title: "Ein Vorschlag für den Personaleinsatz.",
      context: "Im Beispiel: menschlicher Auftrag und begrenzte Befugnisse für den Agenten",
    },
    {
      title: "Bandbreite statt exakter Sätze.",
      context: "Tagessätze nur für Partnerinnen · im Quellsystem gesperrt, im Agenten gesperrt",
    },
    {
      title: "Die nächste Prüfung ist vorbereitet.",
      context: "Löschen und Versand außerhalb des Auftrags · abgelehnt und protokolliert",
    },
  ],
};
