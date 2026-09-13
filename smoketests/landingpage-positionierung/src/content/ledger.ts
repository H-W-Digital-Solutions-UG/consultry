import type { PageContent } from "./types";
import { STATS } from "./shared";

export const ledger: PageContent = {
  variant: "ledger",
  meta: {
    title: "Consultry: Agenten, die ihre Arbeit belegen und einen gemeinsamen Stand teilen",
    description: "Jeder Lauf zeigt Quellen, Weg und Widersprüche. Am Ende steht ein vereinbarter Stand, den Agenten und Menschen teilen.",
  },
  hero: {
    title: "Agenten, die ihre Arbeit belegen.",
    lede: "Jeder Lauf zeigt Quellen, Weg und Widersprüche. Am Ende steht ein Stand, auf den sich Agenten und Menschen einigen.",
    cta: "Auf die Warteliste",
    secondary: "So funktioniert es",
  },
  problem: {
    title: "Ein Ergebnis ohne Spur ist eine Meinung.",
    lede: "Mit dem richtigen Kontext liefern Berater und KI messbar bessere Arbeit. Ohne Spur weiß am Ende niemand, worauf sie beruht, und ohne gemeinsamen Stand arbeitet jeder Agent an seiner eigenen Version.",
    stats: [STATS.bcg40, STATS.spi27],
  },
  how: {
    title: "So entsteht ein Stand, den alle teilen.",
    sequence: true,
    steps: [
      { icon: "ledger-1", title: "Kontext statt Prompt", text: "Der Agent bekommt genau das, was er braucht: Quellen, Rechte, Format." },
      { icon: "ledger-2", title: "Bester Weg je Datenklasse", text: "Modellwahl ist Konfiguration. Fällt ein Anbieter aus, wechselt das Modell." },
      { icon: "ledger-3", title: "Gemeinsamer Stand", text: "Perspektiven prüfen, Widersprüche bleiben sichtbar, ein Mensch entscheidet. Das Ergebnis gilt für Agenten und Menschen." },
    ],
    kpis: [
      { value: "100 %", label: "der Aussagen belegt oder als offene Frage markiert", kind: "Regel" },
      { value: "1", label: "vereinbarter Stand je Ergebnis, den Agenten und Menschen teilen", kind: "Regel" },
      { value: "1", label: "Beleg zählt einmal, auch wenn drei Agenten ihn zitieren", kind: "Regel" },
    ],
  },
  boundaries: {
    title: "Was der gemeinsame Stand leistet, und was nicht.",
    items: [
      { claim: "Agenten und Menschen arbeiten auf einem vereinbarten Stand; Widersprüche bleiben darin sichtbar.", limit: "Kein falscher Konsens. Mehrere KI-Stimmen werden nicht zu mehreren Belegen, kein Mehrheitsvotum ersetzt eine Quelle." },
      { claim: "Agenten dürfen finden, vergleichen, anfechten, entwerfen, erklären und vorschlagen.", limit: "Sie entscheiden nicht. Bindende Entscheidungen brauchen eine menschliche Freigabe." },
      { claim: "Das Protokoll speichert Klassen, Entscheidungen, Versionen und Zeitpunkte.", limit: "Keine Rohinhalte im Protokoll. Nachvollziehbar, ohne zu duplizieren, was geschützt ist." },
    ],
  },
  band: {
    title: "Ein Stand, auf den sich Agenten und Menschen einigen.",
    text: "Trag dich ein, wir melden uns mit dem nächsten Termin.",
  },
};
