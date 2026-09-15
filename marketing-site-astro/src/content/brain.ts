import type { PageContent } from "./types";
import { STATS } from "./shared";

export const brain: PageContent = {
  variant: "brain",
  meta: {
    title: "Consultry: das Firmengedächtnis, das mitarbeitet",
    description: "Vorarbeit, Quellen und Entscheidungen bleiben verbunden. Erkennt, welcher Stand gilt und worauf ihr bei der nächsten Aufgabe aufbauen könnt.",
  },
  hero: {
    title: "Das Wissen der ganzen Firma arbeitet mit.",
    lede: "Auf dem aktuellen Stand weiterarbeiten.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
  },
  problem: {
    title: "Die nächste Aufgabe beginnt. Die Vorarbeit bleibt liegen.",
    lede: "Ergebnisse und Entscheidungen liegen verstreut. Jemand muss wieder erklären, welcher Stand gilt.",
    stats: [STATS.gartner47, STATS.atlassian50],
  },
  how: {
    title: "Der aktuelle Stand fließt in den Angebotstext.",
    lede: "Im Beispiel wird ein alter Angebotsabschnitt gegen Methodenhandbuch v3 geprüft. Eine ungeklärte Referenz bleibt sichtbar.",
    sequence: false,
    steps: [
      { icon: "brain-1", title: "Vorarbeit mit Zusammenhang", text: "Ergebnisse bleiben mit ihrer Frage, ihren Quellen und Annahmen verbunden." },
      { icon: "brain-2", title: "Den aktuellen Stand erkennen", text: "Neue Fassungen und überholte Grundlagen bleiben unterscheidbar." },
      { icon: "brain-3", title: "Ableitungen einordnen", text: "Quelle, Annahme und geprüfter Arbeitsstand werden nicht gleichgesetzt." },
    ],
  },
  boundaries: {
    title: "Was das Firmengedächtnis ist, und was nicht.",
    items: [
      { claim: "Quellen, Annahmen und offene Fragen bleiben unterscheidbar.", limit: "Kein Wahrheitsanspruch. Eine Freigabe gilt für Zweck, Zeit und Quelle." },
      { claim: "Methoden, Entscheidungen und Arbeitsergebnisse bleiben in ihrem Zusammenhang nutzbar.", limit: "Vorarbeit passt nicht automatisch zu jeder Aufgabe. Zweck und Rechte gelten weiter." },
      { claim: "Änderungen an Grundlagen sollen in der betroffenen Arbeit erkennbar werden.", limit: "Ob neu gerechnet wird, hängt von Aufgabe und Befugnissen ab." },
    ],
  },
  band: {
    title: "Nicht wieder bei null anfangen.",
    text: "Wir erproben, wie Vorarbeit die nächste Aufgabe trägt. Trag dich für die nächste Runde ein.",
  },
};
