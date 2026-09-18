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
  // Hook (2026-09-17): Der breiteste Schmerz ist Lärm ohne Ergebnis; Zeile 1
  // holt Betriebe ab, bei denen noch nichts läuft. Zeile 2 trägt den Kern
  // (Engineering in die Abläufe). „Bei Ihnen läuft sie“ war als Hosting
  // missverständlich und wurde ersetzt.
  headline: "Alle reden über AI. Wir bauen sie ein.",
  claim: "From Process to Production.",
  // v4 (2026-09-18): zwei kurze Sätze, Pain und Win („knackiger Hook, max. 2 Sätze“).
  description: "Ihr Team sucht, wartet, tippt doppelt. Wir bauen AI genau dort ein.",
  primaryCta: { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  secondaryCta: { label: "So arbeiten wir", href: "/vorgehen" },
} as const;

/**
 * Proof-Szene „Wer bei uns baut“ (Gründer, 2026-09-18): Senior-Zusage als
 * eigener Block über dem Versprechen, kombiniert mit den Zertifikaten
 * (klein, unprominent, nie allein stehend). Muster benennen, nicht angreifen.
 */
export const expertise = {
  eyebrow: "Wer bei uns baut",
  quote: "Im Pitch: Senior. In der Lieferung: Junior.",
  heading: "Wer Sie überzeugt, baut auch.",
  text: "Wer im Erstgespräch sitzt, bewertet, baut und bleibt, bis es läuft.",
  certsLabel: "Zertifikate im Gründerteam. Bei denen, die auch bauen.",
  cta: { label: "Das Gründerteam", href: "/unternehmen#team" },
  secondary: { label: "Alle Nachweise", href: "/unternehmen#nachweise" },
} as const;

export const promise = {
  short: "Wir finden nicht nur Ihre AI Use Cases. Wir setzen sie um.",
  // Einordnung ohne Zahlen. Recherche und Quellen: .agents/product-marketing.md,
  // Abschnitt „Problems & Pain Points“ (v8, 2026-09-18). Kurzfassung v9.
  lede: "Es scheitert selten am Modell. Vier Einwände, vier Antworten.",
  // Vier Einwände in Kundensprache: Zitat, Hook, ein Satz, passender CTA.
  // Die Senior-Zusage steht als eigene Szene darüber (`expertise`).
  // `data`: ein belegter Zahlenpunkt je Einwand (v11, Gründer: „Zahlen geben
  // Trust und Proof“). Nur Primärquellen, exakt wie veröffentlicht, Quelle am
  // Element. Bitkom: Presseinformation „Digitalisierung der Wirtschaft“,
  // 11. März 2026, 604 Unternehmen ab 20 Beschäftigte. WTI: Microsoft und
  // LinkedIn, Work Trend Index 2024, 31.000 Befragte in 31 Ländern.
  objections: [
    {
      quote: "Wir nutzen doch schon AI.",
      hook: "Einzelne ja. Als Ablauf nein.",
      text: "Alle arbeiten, wie sie es für richtig halten, und niemand misst. Wir machen daraus einen Ablauf für das ganze Team.",
      cta: { label: "Ihren Stand klären", href: "/kontakt" },
      viz: "align" as const,
      data: { value: 78, unit: "%", label: "der AI-Nutzer bringen eigene Tools mit zur Arbeit. Ohne Vorgabe von oben", chart: "ring" as const, series: [{ v: 78, name: "" }], source: "Work Trend Index 2024, Microsoft und LinkedIn" },
    },
    {
      quote: "Dafür haben wir weder Leute noch Zeit.",
      hook: "Wir bringen beides mit. Und geben es weiter.",
      text: "Wir bauen die Lösung und zeigen Ihrem Team, wie es sie weiterführt. Ohne für jeden Schritt einen Dienstleister.",
      cta: { label: "So befähigen wir Ihr Team", href: "/vorgehen#phasen" },
      viz: "handover" as const,
      data: { value: 66, unit: "%", label: "der Unternehmen fehlt die Zeit für Digitalisierung, 70 % fehlen die Fachkräfte", chart: "bars" as const, series: [{ v: 66, name: "Zeit" }, { v: 70, name: "Fachkräfte" }], source: "Bitkom 2026, 604 Unternehmen ab 20 Beschäftigte" },
    },
    {
      quote: "Rechnet sich das überhaupt?",
      hook: "Das sehen Sie, bevor wir bauen.",
      text: "Jedes Potenzial wird vorher wirtschaftlich und technisch bewertet. Gebaut wird, was sich rechnet.",
      cta: { label: "Wie wir bewerten", href: "/leistungen" },
      viz: "rank" as const,
      data: { value: 59, unit: "%", label: "der Führungskräfte können den Nutzen von AI nicht beziffern. 60 % fehlt ein Plan", chart: "bars" as const, series: [{ v: 59, name: "Nutzen unklar" }, { v: 60, name: "Kein Plan" }], source: "Work Trend Index 2024" },
    },
    {
      quote: "Der Pilot lief. Mehr nicht.",
      hook: "Wir bauen dort ein, wo Ihr Team arbeitet.",
      text: "In Ihren Systemen, mit Datenschutz und Sicherheit von Anfang an. Wo die Lösung läuft, entscheiden Sie.",
      cta: { label: "Was wir selbst bauen", href: "/leistungen" },
      viz: "pilot" as const,
      data: { value: 41, unit: "%", label: "der Unternehmen setzen AI ein. 48 % planen und diskutieren noch", chart: "stack" as const, series: [{ v: 41, name: "im Einsatz" }, { v: 48, name: "geplant" }], source: "Bitkom 2026, 604 Unternehmen ab 20 Beschäftigte" },
    },
  ],
  cta: { line: "Sprechen Sie mit denen, die auch bauen.", secondary: { label: "So arbeiten wir", href: "/vorgehen" } },
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
    text: "Die Lösung läuft in Ihren Systemen, nicht daneben. Modelle und Integrationen inklusive.",
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
  "Wir bringen die Lösung live, in der Umgebung, die Sie wählen.",
  "Daten, Modelle und Zugänge sind abgesichert; Governance und Compliance sind eingebaut.",
  "Ihr Team lernt, mit der Lösung zu arbeiten und sie weiterzuentwickeln.",
  "Wir messen die Wirkung im Alltag und verbessern die Lösung laufend.",
] as const;

/** Abgrenzung zu klassischer Beratung (Abschnitt 2, letzter Absatz). */
export const contrast = {
  heading: "Eine Roadmap ist kein Ergebnis.",
  text: "Beratung endet oft bei Strategie, Roadmap oder PowerPoint. Und die Erfahrenen pitchen, die Unerfahrenen liefern. Bei uns gibt es beides nicht: Wer im Erstgespräch sitzt, bewertet Ihre Prozesse, baut die Lösung und bleibt, bis sie produktiv läuft.",
  classic: ["AI-Strategie", "Tool zuerst, Ablauf später", "Roadmap", "Pitch-Team, dann Lieferteam", "Für jedes Werkzeug ein Anbieter", "Wirkung ungemessen", "Empfehlung"],
  hw: ["Prozessanalyse", "Ablauf zuerst, Tool zuletzt", "Eigenes Engineering", "Ein Team von Analyse bis Go-live", "Prozess, Daten und Wissen bleiben bei Ihnen", "Wirkung gemessen", "Produktive Lösung"],
  // Schlusszeilen der beiden Spalten (Contrast.astro).
  classicEnd: "Bleibt Empfehlung.",
  hwEnd: "Läuft produktiv.",
} as const;

/**
 * Souveränität – Positionierungspunkt der Gründer (2026-09-17): Schluss mit
 * dem Flickenteppich aus Dienstleistern; Kunden holen sich die Kontrolle über
 * ihre Abläufe zurück, indem sie AI-Workflows und Prozesse richtig nutzen.
 * Bewusst ohne Zahl („10.000 Dienstleister“) und ohne Wertung über andere.
 */
export const sovereignty = {
  eyebrow: "Souveränität",
  // v2 (2026-09-18): konkreter Pain statt abstraktem Hook; Position 02 auf der Startseite.
  heading: "Zu viele Dienstleister. Zu wenig Kontrolle.",
  // v3 (2026-09-18): ein Satz Lede, drei Einzeiler (Gründer: „zu viel, zu verstreut“).
  text: "Für jede Aufgabe ein Anbieter. Niemand kennt den ganzen Ablauf.",
  points: [
    { title: "Abhängig bei jedem Schritt", text: "Jede Änderung ein Ticket." },
    { title: "Wissen wandert ab", text: "Geht der Anbieter, geht das Wissen." },
    { title: "Kontrolle zurück", text: "Ihr Team führt die Lösung selbst weiter." },
  ],
} as const;

/**
 * Software und Web (Gründer, 2026-09-18): zweiter Einstieg neben dem
 * Prozess-Einstieg. Gebaut mit Senior Engineers und den Software-Partnern,
 * AI-gestützt, nach einem Entwicklungsprozess mit Review- und
 * Vertraulichkeitsregeln (Quelle: H&W-Angebotsvorlage, Abschnitt
 * „Confidentiality And AI-Assisted Work“). Proof-Karte: Fakten zum laufenden
 * Plattformprojekt (Name, Rolle, Zeitraum, Umfang) folgen nach Freigabe der
 * Gründer; bis dahin ohne Namen und ohne Zahlen.
 */
export const software = {
  eyebrow: "Software und Web",
  heading: "Nicht jedes Projekt beginnt bei AI.",
  ledeShort: "Individualsoftware, Plattformen, Webauftritte. Mit Senior Engineers und Partnern, AI-gestützt gebaut.",
  lede: "Manche beginnen bei einer Software, die endlich gebaut werden muss. Individualsoftware, Plattformen und Webauftritte bauen wir mit Senior Engineers und unseren Software-Partnern: AI-gestützt, nach einem Entwicklungsprozess, den wir in einem laufenden Plattformprojekt mit mehreren Partnern erprobt haben.",
  offers: [
    { title: "Individualsoftware und Plattformen", text: "Anwendungen, APIs und Integrationen in Ihre bestehende Landschaft." },
    { title: "Webauftritt, Shop und App", text: "Websites, Webshops und mobile Apps, die Ihr Team selbst pflegen kann." },
    { title: "Architektur, Cloud und Absicherung", text: "Systemdesign, Migration und Security in der Umgebung, die Sie wählen." },
  ],
  sdlc: {
    title: "So bauen wir: AI-gestützt, mit klaren Regeln.",
    items: [
      "AI-Werkzeuge im gesamten Entwicklungsprozess, mit festen Prompt- und Vertraulichkeitsregeln.",
      "Jede Änderung wird von Menschen geprüft, bevor sie zu Ihnen geht.",
      "Keine Secrets, keine Produktionsdaten, kein vertraulicher Code in öffentlichen AI-Tools.",
      "Abnahme mit Nachweisen: Tests, Review-Notizen, Artefakte.",
    ],
  },
  proof: {
    label: "Erprobt im laufenden Projekt",
    title: "Ein Plattformprojekt, mehrere Software-Partner, ein Entwicklungsstandard.",
    text: "Mehrere Partner liefern nach demselben AI-gestützten Entwicklungsprozess mit Review- und Vertraulichkeitsregeln. Die Leute im Erstgespräch sind die Leute, die den Code schreiben.",
  },
  cta: { line: "Eine Software, ein Webauftritt oder beides?", primary: { label: "Projekt im Erstgespräch besprechen", href: "/kontakt" } },
} as const;

/**
 * Showcases (Gründer, 2026-09-18): konkrete Aufbauten, die die Souveränitäts-
 * Punkte belegen. Beschreiben, wie wir bauen; keine Kundennamen, keine
 * Kennzahlen. Gründer-Wortlaut zum ersten Showcase: „AI-unterstütztes CMS:
 * Die Kreativität Ihres Teams und Ihr unschlagbares Angebot perfekt und
 * selbstgesteuert in Szene setzen … aus WordPress und statischen Templates
 * oder aufwändiger manueller Pflege wird Pipeline: Design-driven CMS
 * (Storyblok + Figma) → Consultry Human x AI Workflow; einfacher Transfer
 * aus WordPress, Typo3 etc.“
 */
export const showcases = [
  {
    kicker: "Showcase: AI-gestütztes CMS",
    title: "Ihr Webauftritt, selbstgesteuert.",
    text: "Aus WordPress, Typo3 oder statischen Templates wird eine Pipeline: Design in Figma, Design-getriebenes CMS, Consultry Human x AI Workflow.",
    href: "/showcases/webauftritt",
  },
  {
    kicker: "Showcase: Software mit Partnern",
    title: "Mehrere Software-Partner, ein Standard.",
    text: "Ein Plattformprojekt, in dem mehrere Partner nach demselben AI-gestützten Entwicklungsprozess liefern.",
    href: "/leistungen#software",
  },
] as const;

export const showcaseWeb = {
  eyebrow: "Showcase: AI-gestütztes CMS",
  title: "Ihr Webauftritt, selbstgesteuert.",
  lede: "Die Kreativität Ihres Teams und Ihr Angebot perfekt in Szene gesetzt, ohne Ticket an eine Agentur. Aus WordPress, Typo3 oder statischen Templates wird eine Pipeline: Design in Figma, Inhalte in einem Design-getriebenen CMS, dazwischen der Consultry Human x AI Workflow.",
  before: {
    heading: "Woran Webauftritte heute hängen.",
    items: [
      { title: "Pflege per Ticket", text: "Jede Textänderung, jede neue Seite geht an eine Agentur oder an die eine Person im Haus, die das Template kennt." },
      { title: "Template statt Design", text: "Statische Vorlagen bestimmen, wie Ihr Angebot aussieht. Was nicht ins Raster passt, bleibt weg." },
      { title: "Wissen im Werkzeug", text: "WordPress oder Typo3 kennt nur, wer es eingerichtet hat. Geht die Person, geht der Zugang zum eigenen Auftritt." },
    ],
  },
  pipeline: {
    heading: "Die Pipeline: vom Design zur Seite, ohne Umweg.",
    steps: [
      { name: "Figma", title: "Design als Quelle", text: "Ihr Team oder Ihre Agentur gestaltet Komponenten, nicht einzelne Seiten. Das Design bleibt die eine Wahrheit." },
      { name: "Design-getriebenes CMS", title: "Bausteine statt Templates", text: "Jede Komponente aus Figma ist im CMS ein Baustein, etwa in Storyblok. Die Redaktion setzt Seiten zusammen, ohne Entwickler." },
      { name: "Consultry Human x AI Workflow", title: "AI entwirft, Ihr Team entscheidet", text: "Texte, Varianten und Übersetzungen entstehen aus Ihrem Angebot. Jede Freigabe bleibt bei Menschen." },
      { name: "Live", title: "Veröffentlicht, wo Sie es entscheiden", text: "Die Seite wird gebaut, abgesichert und veröffentlicht. Schnell, messbar, in der Umgebung Ihrer Wahl." },
    ],
  },
  migration: {
    heading: "Der Umzug aus WordPress, Typo3 und Co.",
    items: [
      { title: "Inhalte übernehmen", text: "Seiten, Medien und Struktur werden in Bausteine übertragen. Nichts wird von Hand nachgebaut, was sich übertragen lässt." },
      { title: "Auffindbarkeit erhalten", text: "URLs, Weiterleitungen und Metadaten bleiben erhalten. Ihr Auftritt verliert beim Umzug nicht, was er sich aufgebaut hat." },
      { title: "Redaktion befähigen", text: "Ihr Team pflegt ab dem ersten Tag selbst. Wir bleiben, bis das ohne uns läuft." },
    ],
  },
  after: {
    heading: "Was Ihr Team danach kann.",
    items: [
      "Neue Angebote und Kampagnen selbst in Szene setzen, ohne Ticket.",
      "Design bleibt konsistent, weil jede Seite aus denselben Bausteinen entsteht.",
      "AI-Entwürfe für Texte und Varianten nutzen und selbst freigeben.",
      "Kein Anbieter, der den Zugang zum eigenen Auftritt hält.",
    ],
  },
  cta: { line: "Welches System hält Ihren Auftritt heute fest?", primary: { label: "Webauftritt im Erstgespräch besprechen", href: "/kontakt" } },
} as const;

/**
 * Nachweise. Zertifizierungen und Partner der bisherigen Website,
 * von den Gründern am 2026-09-17 zur Übernahme freigegeben. Die
 * Zertifizierungen sind Personen-Zertifikate des Gründerteams, keine
 * Unternehmens-Zertifizierung; die Site formuliert das entsprechend.
 * Nicht freigegeben bleiben „Certified Advice“ und „10+ years“.
 */
export const certifications = [
  { name: "CISSP", issuer: "ISC2", file: "cissp.png" },
  { name: "GIAC GCIA", issuer: "Certified Intrusion Analyst", file: "giac-gcia.png" },
  { name: "OSCP", issuer: "OffSec Certified Professional", file: "oscp.png" },
  { name: "OSDA", issuer: "OffSec Defense Analyst", file: "osda.png" },
  { name: "Cybersecurity Architect Expert", issuer: "Microsoft Certified", file: "cybersecurity-architect.png" },
  { name: "Azure Security Engineer Associate", issuer: "Microsoft Certified", file: "azure-security-engineer.png" },
  { name: "CSPO", issuer: "Scrum Alliance, Certified Scrum Product Owner", file: "cspo.png" },
  { name: "IREB CPRE", issuer: "Requirements Engineering, Foundation Level", file: "ireb-cpre.png" },
] as const;

export const partners = [
  { name: "Wavect", href: "https://wavect.io/", file: "wavect.png" },
  { name: "Rubicon Tech", href: "https://rubicontech.io/", file: "rubicon.png" },
  { name: "Polity", href: "https://polity.li/", file: "polity.png" },
  { name: "turntabl", href: "https://turntabl.io/", file: "turntabl.png" },
  { name: "Systango", href: "https://www.systango.com/", file: "systango.png" },
] as const;

/** Capabilities – Beleg für die Umsetzungskompetenz, nicht das Produktversprechen (Abschnitte 4/5). */
export const capabilities = [
  { title: "Business Process Analysis", text: "Abläufe, Schnittstellen und Engpässe verstehen. Vor jeder Technologie." },
  { title: "AI Strategy", text: "Priorisierte AI-Potenziale, wirtschaftlich bewertet. Keine Wunschliste." },
  { title: "Process Redesign", text: "Prozesse, in denen AI natürlicher Bestandteil ist." },
  { title: "AI Engineering", text: "LLM-Anwendungen, Retrieval, Agenten und Evaluierung, produktionsreif gebaut." },
  { title: "Software Engineering", text: "Anwendungen, APIs und Integrationen in Ihre bestehende Landschaft." },
  { title: "Model Engineering", text: "Modellauswahl, Anpassung und Evaluierung passend zu Ihren Daten." },
  { title: "Cloud & Infrastructure", text: "Ihre Cloud, Ihr Rechenzentrum oder ein Anbieter Ihrer Wahl. Wir richten ein, was zur Lösung passt." },
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
