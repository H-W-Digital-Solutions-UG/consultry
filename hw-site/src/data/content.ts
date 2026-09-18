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
  // v3 (2026-09-18): Pain (Team sucht, wartet, erfasst doppelt) und Win
  // (der Ablauf läuft) statt der abstrakten Strategie-Zeile.
  description:
    "Ihr Team sucht, wartet und erfasst doppelt, während alle über AI reden. Wir nehmen den Ablauf, der die meiste Zeit frisst, bauen AI hinein und bleiben, bis er im Alltag läuft. Ohne AI-Strategie, ohne Folien.",
  primaryCta: { label: "Kostenloses Erstgespräch", href: "/kontakt" },
  secondaryCta: { label: "So arbeiten wir", href: "/vorgehen" },
} as const;

export const promise = {
  short: "Wir finden nicht nur Ihre AI Use Cases. Wir setzen sie um.",
  // Einordnung ohne Zahlen. Recherche und Quellen: .agents/product-marketing.md,
  // Abschnitt „Problems & Pain Points“ (v8, 2026-09-18). Kurzfassung v9.
  lede: "AI-Vorhaben scheitern selten am Modell. Sie scheitern davor. Fünf Einwände, die wir kennen, und was wir tun.",
  // Vier Einwände in Kundensprache: Zitat, Hook, ein Satz, passender CTA.
  objections: [
    {
      // Senior-Zusage (Gründer, 2026-09-18) als erster Einwand, Muster benannt, nicht angegriffen.
      quote: "Im Pitch saß die Erfahrung. Geliefert hat jemand anderes.",
      hook: "Wer Sie überzeugt, baut auch.",
      text: "Die Erfahrung aus dem Erstgespräch bewertet Ihre Prozesse, baut die Lösung und bleibt, bis sie produktiv läuft.",
      cta: { label: "Das Gründerteam", href: "/unternehmen#team" },
    },
    {
      quote: "Wir nutzen doch schon AI.",
      hook: "Einzelne ja. Als Ablauf nein.",
      text: "Alle arbeiten, wie sie es für richtig halten, und niemand misst. Wir machen daraus einen Ablauf für das ganze Team.",
      cta: { label: "Ihren Stand klären", href: "/kontakt" },
    },
    {
      quote: "Uns fehlen Know-how und Zeit.",
      hook: "Wir bringen beides mit. Und geben es weiter.",
      text: "Wir bauen die Lösung und zeigen Ihrem Team, wie es sie weiterführt. Ohne für jeden Schritt einen Dienstleister.",
      cta: { label: "So befähigen wir Ihr Team", href: "/vorgehen#phasen" },
    },
    {
      quote: "Was kostet das, und was bringt es?",
      hook: "Das sehen Sie, bevor wir bauen.",
      text: "Jedes Potenzial wird vorher wirtschaftlich und technisch bewertet. Gebaut wird, was sich rechnet.",
      cta: { label: "Wie wir bewerten", href: "/leistungen" },
    },
    {
      quote: "Der Pilot lief. Produktiv wurde er nie.",
      hook: "Wir bauen dort ein, wo Ihr Team arbeitet.",
      text: "In Ihren Systemen, mit Datenschutz und Sicherheit von Anfang an. Wo die Lösung läuft, entscheiden Sie.",
      cta: { label: "Was wir selbst bauen", href: "/leistungen" },
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
  text: "Für jede Aufgabe ein Anbieter, für jedes Werkzeug ein Vertrag, und niemand kennt den ganzen Ablauf. Ihr Team wartet auf Tickets, statt zu arbeiten.",
  points: [
    { title: "Abhängig bei jedem Schritt", text: "Jede Änderung ein Ticket, jeder Anbieter ein Vertrag. Der Ablauf gehört dem Werkzeug, nicht Ihnen." },
    { title: "Wissen wandert ab", text: "Wer die Lösung gebaut hat, kennt sie. Geht der Anbieter, geht das Wissen mit." },
    { title: "Kontrolle zurück", text: "Wir bauen AI in Ihre Abläufe ein, befähigen Ihr Team und bleiben, bis es ohne uns weiterläuft. Wo die Lösung läuft, entscheiden Sie." },
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
