/**
 * Inhaltsbausteine der H&W-Website.
 * Quelle: Handover "AI-Native Repositioning & Website", Abschnitte 1–6.
 * Abschnitt 7 ff. (Hero-Entwurf im Wortlaut, Seitenstruktur) lag beim
 * Erstellen nicht vollständig vor – Hero-Zeilen sind daraus abgeleitet und
 * als PROVISORISCH markiert, bis der Originalwortlaut vorliegt.
 */

export const hero = {
  eyebrow: "AI-Native Consulting & Engineering", // PROVISORISCH – aus Abschnitt 7 rekonstruiert
  headline: "Von Geschäfts\u00ADprozessen zu produktiver KI.", // \u00AD = weiches Trennzeichen für schmale Viewports
  claim: "From Process to Production.",
  description:
    "Wir analysieren, wie Ihr Unternehmen arbeitet, identifizieren konkrete AI-Potenziale und entwickeln daraus produktive Lösungen – von der Prozessoptimierung bis zum sicheren Deployment.",
  primaryCta: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
  secondaryCta: { label: "So arbeiten wir", href: "/vorgehen" },
} as const;

/**
 * Drei Story-Beats des Scroll-Heros auf der Startseite (Spezifikation
 * „Immersive Scroll-Hero“, 2026-09-17). Reihenfolge = Achse Prozess → Produktion.
 * Ohne JavaScript bzw. bei Reduced Motion erscheinen sie als einfache Liste.
 */
export const heroBeats = [
  { n: "01", title: "Prozesse verstehen", text: "Wir sehen zuerst, wie Ihr Unternehmen tatsächlich arbeitet." },
  { n: "02", title: "AI-native neu denken", text: "Wo es sich lohnt, wird der Ablauf neu gedacht – nicht nur beschleunigt." },
  { n: "03", title: "Produktiv betreiben", text: "Wir bauen die Lösung, sichern sie ab und messen die Wirkung." },
] as const;

export const promise = {
  short: "Wir finden nicht nur Ihre AI Use Cases. Wir setzen sie um.",
  long: "Wir helfen Unternehmen, die größten Potenziale künstlicher Intelligenz in ihren Geschäftsprozessen zu identifizieren – und setzen die daraus entstehenden Lösungen direkt um.",
} as const;

/** Die zehn Schritte des Leistungsbilds (Abschnitt 2). */
export const deliverySteps = [
  {
    n: 1,
    title: "Unternehmen und Abläufe verstehen",
    text: "Wir analysieren Ihr Unternehmen und seine tatsächlichen Geschäftsprozesse – nicht die Technologie zuerst, sondern die Arbeit, die täglich passiert.",
    phase: "process",
  },
  {
    n: 2,
    title: "AI-geeignete Prozesse erkennen",
    text: "Wir identifizieren ineffiziente Abläufe und die Stellen, an denen AI einen echten Unterschied macht.",
    phase: "process",
  },
  {
    n: 3,
    title: "Konkrete Potenziale benennen",
    text: "Aus Beobachtungen werden konkrete Verbesserungspotenziale mit klarem Bezug zu Ihrem Geschäft.",
    phase: "process",
  },
  {
    n: 4,
    title: "Wirtschaftlich und technisch bewerten",
    text: "Jedes Potenzial wird nach wirtschaftlichem Hebel und technischer Machbarkeit priorisiert.",
    phase: "process",
  },
  {
    n: 5,
    title: "Prozesse AI-native neu denken",
    text: "Wo es sich lohnt, gestalten wir Prozesse grundsätzlich neu – statt AI an bestehende Abläufe anzuschrauben.",
    phase: "design",
  },
  {
    n: 6,
    title: "Umsetzungspfad entwickeln",
    text: "Ein konkreter Plan mit Reihenfolge, Abhängigkeiten und Meilensteinen – kein Slide-Deck, das in der Schublade landet.",
    phase: "design",
  },
  {
    n: 7,
    title: "Lösung selbst entwickeln",
    text: "Wir bauen die identifizierte AI-Lösung mit eigenem Engineering-Team – dieselben Menschen, die den Prozess verstanden haben.",
    phase: "build",
  },
  {
    n: 8,
    title: "Modelle, Infrastruktur, Integrationen",
    text: "Modellauswahl, Infrastruktur und die Anbindung an Ihre bestehenden Systeme kommen aus einer Hand.",
    phase: "build",
  },
  {
    n: 9,
    title: "Security, Governance, Compliance",
    text: "Sicherheit, Governance und regulatorische Anforderungen sind Teil der Lösung, nicht ein nachgelagerter Audit.",
    phase: "production",
  },
  {
    n: 10,
    title: "Produktiv deployen und optimieren",
    text: "Wir bringen die Lösung in Produktion, befähigen Ihre Mitarbeitenden und messen und verbessern die Ergebnisse weiter.",
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
  "Mitarbeitende befähigen",
  "Ergebnisse messen und optimieren",
] as const;

/** Abgrenzung zu klassischer Beratung (Abschnitt 2, letzter Absatz). */
export const contrast = {
  heading: "Wo klassische Beratung aufhört, fangen wir erst an.",
  text: "Management- und AI-Beratung endet oft bei einer Strategie, einer Roadmap oder einer PowerPoint. Wir hören dort nicht auf: Die identifizierte Lösung bauen wir anschließend selbst und bringen sie in Produktion.",
  classic: ["AI-Strategie", "Use-Case-Katalog", "Roadmap", "Empfehlung"],
  hw: ["Prozessanalyse", "Lösungsdesign", "Eigenes Engineering", "Produktiver Betrieb"],
} as const;

/** Capabilities – Beleg für die Umsetzungskompetenz, nicht das Produktversprechen (Abschnitte 4/5). */
export const capabilities = [
  { title: "Business Process Analysis", text: "Abläufe, Schnittstellen und Engpässe verstehen, bevor über Technologie gesprochen wird." },
  { title: "AI Strategy", text: "Priorisierte AI-Potenziale mit wirtschaftlicher Bewertung statt Technologie-Wunschlisten." },
  { title: "Process Redesign", text: "Prozesse so gestalten, dass AI ihr natürlicher Bestandteil ist." },
  { title: "AI Engineering", text: "LLM-Anwendungen, Retrieval, Agenten und Evaluierung – produktionsreif gebaut." },
  { title: "Software Engineering", text: "Saubere Anwendungen, APIs und Integrationen in Ihre bestehende Landschaft." },
  { title: "Model Engineering", text: "Modellauswahl, Anpassung und Betrieb passend zu Datenlage und Anforderungen." },
  { title: "Cloud & Infrastructure", text: "Infrastruktur, die zur Lösung passt – skalierbar, wartbar, beherrschbar." },
  { title: "Cybersecurity", text: "Absicherung von Daten, Modellen und Zugängen als Teil des Designs." },
  { title: "AI Governance", text: "Nachvollziehbarkeit, Verantwortlichkeiten und Compliance von Anfang an." },
  { title: "AI Enablement", text: "Teams befähigen, mit der Lösung zu arbeiten und sie weiterzuentwickeln." },
] as const;

export const positioning = {
  category: "AI Transformation & Engineering",
  altCategory: "AI-Native Consulting & Engineering",
  principle:
    "Wir verstehen, wie Ihr Unternehmen arbeitet, finden die größten AI-Hebel und setzen die passende Lösung anschließend selbst um.",
} as const;
