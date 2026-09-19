/** Persistent work surfaces for the illustrative, locally played demos. */
export const deliveryCanvases = {
  brain: {
    kind: "graph",
    title: "Wissensgraph · Hansa",
    prompt: "Verbinde unsere Quellen zu Hansa und zeig mir, welcher Stand gilt.",
    scope: "Hansa · Wissensbasis",
    versions: ["Quellen", "Zusammenhänge", "Gültiger Stand", "Nächste Aufgabe"],
    focusBlocks: [1, 1, 1, 0],
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
