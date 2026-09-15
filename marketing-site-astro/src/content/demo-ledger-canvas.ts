/** Compact canvas framing for the illustrative ledger and access workspaces. */
export const ledgerCanvases = {
  ledger: {
    kind: "plan",
    title: "Cutover-Plan · Hansa Wave 2",
    prompt: "Überarbeite unseren Cutover-Plan auf Stand 07. Berücksichtige die Erfahrungen aus Wave 1 und halte offene Entscheidungen fest.",
    scope: "Hansa Wave 2 · interne Projektplanung",
    versions: [
      "Stand 07",
      "Stand 07 · in Prüfung",
      "Stand 08 · Arbeitskonsens",
      "Stand 08 · Übergabe",
    ],
    focusBlocks: [0, 1, 0, 0],
  },
  access: {
    kind: "estimate",
    title: "Staffing-Übergabe · Hansa",
    prompt: "Bereite Teamaufwand und Kostenrahmen für die Partnerin vor. Nutze die für diesen Auftrag verfügbaren Informationen.",
    scope: "Hansa · Consultant · interne Vorbereitung",
    versions: [
      "Arbeitsauftrag",
      "Aufwand · Vorschlag",
      "Kostenband · Planungsannahme",
      "Übergabe · nicht versendet",
    ],
    focusBlocks: [0, 0, 0, 1],
  },
} as const;
