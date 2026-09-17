/**
 * Inhaltsbausteine der H&W-Website.
 * Die Copy folgt hw-site/.agents/product-marketing.md (Positionierung,
 * Leistungsbild, Delivery Chain, Sprachregeln: Sie-Form, „AI“ statt „KI“,
 * keine erfundenen Kennzahlen, Kunden, Zertifizierungen oder Zitate).
 * Faktenquelle: Handover "AI-Native Repositioning & Website".
 */

export const hero = {
  eyebrow: "AI Transformation & Engineering",
  // Weiches Trennzeichen (­) nur in Wörtern über ca. 14 Zeichen an einer
  // Silbengrenze einfügen; die aktuelle Headline braucht keines.
  // Hook (2026-09-17): Der breiteste Schmerz ist nicht „Folien“, sondern
  // Lärm ohne Ergebnis. AI-Adoption ist niedriger, als die eigene Blase
  // vermuten lässt; die Headline holt Betriebe ab, bei denen noch nichts läuft.
  headline: "Alle reden über AI. Bei Ihnen läuft sie.",
  claim: "From Process to Production.",
  description:
    "Sie brauchen keine AI-Strategie, um anzufangen. Wir schauen auf Ihre Abläufe, finden den größten Hebel und bauen die Lösung selbst.",
  primaryCta: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
  secondaryCta: { label: "So arbeiten wir", href: "/vorgehen" },
} as const;

/** Die drei Beats zum Hero (Prozess zuerst, AI-native, Betrieb). Hero.astro rendert sie noch nicht. */
export const heroBeats = [
  {
    n: 1,
    title: "Der Prozess zuerst",
    text: "Wir beginnen bei der Arbeit, die in Ihrem Unternehmen täglich passiert.",
  },
  {
    n: 2,
    title: "AI-native neu gedacht",
    text: "AI wird Teil des Ablaufs, nicht ein Werkzeug daneben.",
  },
  {
    n: 3,
    title: "Produktiv im Betrieb",
    text: "Dasselbe Team baut die Lösung, sichert sie ab und misst die Wirkung.",
  },
] as const;

export const promise = {
  short: "Wir finden nicht nur Ihre AI Use Cases. Wir setzen sie um.",
  // Beispielszenario, als Beispiel gekennzeichnet; kein Kundenergebnis.
  long: "Ein Beispiel: Ihr Angebotsprozess läuft heute über mehrere Systeme und viele Rückfragen, ganz ohne AI. Wir finden den Hebel, gestalten den Ablauf neu, bauen die Lösung und integrieren sie dort, wo Ihr Team arbeitet.",
  // Senior-Zusage (Gründer, 2026-09-17): als Versprechen formuliert, nicht als Angriff.
  senior: "Keine Junior-Berater. Wer Ihren Prozess versteht, baut ihn auch.",
} as const;

/** Die zehn Schritte des Leistungsbilds (Abschnitt 2). */
export const deliverySteps = [
  {
    n: 1,
    title: "Unternehmen und Abläufe verstehen",
    text: "Wir analysieren, wie Ihr Unternehmen tatsächlich arbeitet: Abläufe, Beteiligte, Systeme.",
    phase: "process",
  },
  {
    n: 2,
    title: "AI-geeignete Prozesse erkennen",
    text: "Wo Ihr Team wartet, sucht oder doppelt erfasst, setzen wir an.",
    phase: "process",
  },
  {
    n: 3,
    title: "Konkrete Potenziale benennen",
    text: "Wir benennen jedes Potenzial so konkret, dass Sie es prüfen können.",
    phase: "process",
  },
  {
    n: 4,
    title: "Wirtschaftlich und technisch bewerten",
    text: "Sie sehen vor dem Bauen, was sich rechnet, und entscheiden selbst.",
    phase: "process",
  },
  {
    n: 5,
    title: "Prozesse AI-native neu denken",
    text: "Wo es sich lohnt, gestalten wir den Ablauf neu, statt AI anzuschrauben.",
    phase: "design",
  },
  {
    n: 6,
    title: "Umsetzungspfad entwickeln",
    text: "Reihenfolge, Abhängigkeiten, Meilensteine. Ein Plan, den wir selbst abarbeiten.",
    phase: "design",
  },
  {
    n: 7,
    title: "Lösung selbst entwickeln",
    text: "Wer den Prozess analysiert hat, baut auch die Lösung.",
    phase: "build",
  },
  {
    n: 8,
    title: "Modelle, Infrastruktur, Integrationen",
    text: "Die Lösung läuft in Ihren Systemen, nicht daneben. Modelle und Infrastruktur inklusive.",
    phase: "build",
  },
  {
    n: 9,
    title: "Security, Governance, Compliance",
    text: "Von Anfang an eingebaut, nicht am Ende geprüft.",
    phase: "production",
  },
  {
    n: 10,
    title: "Produktiv deployen und optimieren",
    text: "Die Lösung geht live. Wir befähigen Ihr Team, messen und optimieren weiter.",
    phase: "production",
  },
] as const;

/** Die Delivery Chain als Kurzform (Abschnitt 3). */
export const chain = [
  "Business verstehen",
  "Prozesse analysieren",
  "AI-Potenziale identifizieren",
  "Prozesse neu gestalten",
  "Lösung konzipieren",
  "Modelle auswählen",
  "Software entwickeln",
  "Systeme integrieren",
  "Deployen",
  "Absichern",
  "Mitarbeiter befähigen",
  "Messen und optimieren",
] as const;

/** Kurztext je Glied der Delivery Chain (Reihenfolge wie `chain`). Ausgangslage: heutiger Ablauf ohne AI. */
export const chainTexts = [
  "Wir sehen uns an, womit Ihr Unternehmen Geld verdient und wo die Arbeit hängt.",
  "Abläufe, Beteiligte, Systeme: Wir zeichnen nach, wie ein Vorgang heute wirklich läuft.",
  "Wo Ihr Team wartet, sucht oder doppelt erfasst, benennen wir den Hebel und bewerten ihn.",
  "Wo es sich lohnt, denken wir den Ablauf neu, statt Technik an den alten anzuschrauben.",
  "Aus dem neuen Ablauf wird ein Lösungsdesign mit Reihenfolge und Meilensteinen.",
  "Wir wählen die Modelle, die zu Ihren Daten, Anforderungen und Ihrem Datenschutz passen.",
  "Dasselbe Team, das den Prozess verstanden hat, baut die Anwendung.",
  "Die Lösung läuft in Ihren Systemen, nicht daneben.",
  "Wir bringen die Lösung in Betrieb, in Ihrer Infrastruktur oder unserer.",
  "Daten, Modelle und Zugänge sind abgesichert; Governance und Compliance sind eingebaut.",
  "Ihr Team lernt, mit der Lösung zu arbeiten und sie weiterzuentwickeln.",
  "Wir messen die Wirkung im Betrieb und verbessern die Lösung laufend.",
] as const;

/** Abgrenzung zu klassischer Beratung (Abschnitt 2, letzter Absatz). */
export const contrast = {
  heading: "Wo klassische Beratung aufhört, fangen wir erst an.",
  text: "Beratung endet oft bei Strategie, Roadmap oder PowerPoint. Und die Erfahrenen pitchen, die Unerfahrenen liefern. Bei uns gibt es beides nicht: Wer im Erstgespräch sitzt, bewertet Ihre Prozesse, baut die Lösung und bleibt bis in den Betrieb.",
  classic: ["AI-Strategie", "Use-Case-Katalog", "Roadmap", "Pitch-Team, dann Lieferteam", "Für jedes Werkzeug ein Anbieter", "Empfehlung"],
  hw: ["Prozessanalyse", "Lösungsdesign", "Eigenes Engineering", "Ein Team von Analyse bis Betrieb", "Prozess, Daten und Wissen bleiben bei Ihnen", "Produktiver Betrieb"],
  // Schlusszeilen der beiden Spalten (Contrast.astro).
  classicEnd: "Bleibt Empfehlung.",
  hwEnd: "Läuft im Betrieb.",
} as const;

/**
 * Souveränität – Positionierungspunkt der Gründer (2026-09-17): Schluss mit
 * dem Flickenteppich aus Dienstleistern; Kunden holen sich die Kontrolle über
 * ihre Abläufe zurück, indem sie AI-Workflows und Prozesse richtig nutzen.
 * Bewusst ohne Zahl („10.000 Dienstleister“) und ohne Wertung über andere.
 */
export const sovereignty = {
  eyebrow: "Souveränität",
  heading: "Schluss mit dem Flickenteppich aus Dienstleistern.",
  text: "Für jede Aufgabe ein Anbieter, für jedes Werkzeug ein Vertrag, und niemand kennt den ganzen Ablauf. Holen Sie sich Ihre Souveränität zurück: mit AI-Workflows, die Ihre Prozesse richtig nutzen und in Ihrem Haus laufen.",
  points: [
    { title: "Ihre Prozesse", text: "Der Ablauf gehört Ihnen, nicht dem Werkzeug. Wir bauen AI in Ihre Arbeit ein, statt Ihre Arbeit an ein Tool anzupassen." },
    { title: "Ihre Daten", text: "Verarbeitet, wo Sie es entscheiden. Sie behalten die Kontrolle darüber, was wohin fließt." },
    { title: "Ihr Wissen", text: "Ihr Team versteht, was läuft und warum. Kein Betrieb, der nur mit uns funktioniert." },
  ],
} as const;

/** Capabilities – Beleg für die Umsetzungskompetenz, nicht das Produktversprechen (Abschnitte 4/5). */
export const capabilities = [
  { title: "Business Process Analysis", text: "Abläufe, Schnittstellen und Engpässe verstehen. Vor jeder Technologie." },
  { title: "AI Strategy", text: "Priorisierte AI-Potenziale, wirtschaftlich bewertet. Keine Wunschliste." },
  { title: "Process Redesign", text: "Prozesse, in denen AI natürlicher Bestandteil ist." },
  { title: "AI Engineering", text: "LLM-Anwendungen, Retrieval, Agenten und Evaluierung, produktionsreif gebaut." },
  { title: "Software Engineering", text: "Anwendungen, APIs und Integrationen in Ihre bestehende Landschaft." },
  { title: "Model Engineering", text: "Modellauswahl, Anpassung und Betrieb passend zu Ihren Daten." },
  { title: "Cloud & Infrastructure", text: "Infrastruktur, die zur Lösung passt. Wartbar und beherrschbar." },
  { title: "Cybersecurity", text: "Daten, Modelle und Zugänge abgesichert. Teil des Designs." },
  { title: "AI Governance", text: "Nachvollziehbarkeit, Verantwortlichkeiten und Compliance von Anfang an." },
  { title: "AI Enablement", text: "Ihr Team nutzt die Lösung und entwickelt sie weiter." },
] as const;

export const positioning = {
  category: "AI Transformation & Engineering",
  altCategory: "AI-Native Consulting & Engineering",
  principle:
    "Wir verstehen, wie Ihr Unternehmen arbeitet, finden die größten AI-Hebel und setzen die passende Lösung anschließend selbst um.",
} as const;
