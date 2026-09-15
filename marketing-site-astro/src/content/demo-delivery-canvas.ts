/** Persistent work surfaces for the illustrative, locally played demos. */
export const deliveryCanvases = {
  brain: {
    kind: "document",
    title: "Angebotsabschnitt · Vorgehen beim Cutover",
    prompt: "Aktualisiere diesen Angebotsabschnitt mit unserer aktuellen Methode. Zeige mir die Änderungen.",
    scope: "Angebotsentwurf · S/4HANA-Cutover",
    versions: ["Altstand", "Methode aktualisiert", "Referenz in Prüfung", "Entwurf zur Übernahme"],
    focusBlocks: [1, 0, 0, 0],
  },
  corpus: {
    kind: "briefing",
    title: "Hansa · Gesprächsbriefing Wave 2",
    prompt: "Bereite mein Kundengespräch zu Hansa Wave 2 vor. Nutze den Vertrag und passende Vorarbeit.",
    scope: "Hansa · Nächster Kundentermin",
    versions: ["Ausgangsnotiz", "Mit Erfahrungsbaustein", "Mit offenen Fragen", "Briefing zur Mitnahme"],
    focusBlocks: [0, 1, 2, 2],
  },
  brand: {
    kind: "slide",
    title: "Hansa · Steering-Folie 3",
    prompt: "Überarbeite diese Steering-Folie mit aktueller Grundlage und unserer Kundensprache.",
    scope: "Hansa · Steering-Unterlage v7",
    versions: ["v7 · Ausgangsfassung", "v7 · Inhalt überarbeitet", "v7 · Sprache und Aufbau", "v7 · Folienentwurf"],
    focusBlocks: [1, 0, 1, 1],
  },
} as const;
