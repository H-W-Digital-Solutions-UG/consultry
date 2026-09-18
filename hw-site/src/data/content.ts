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
  // Hook v4 (2026-09-18): Sieger des Headline-Panels (30 Kandidaten, drei
  // Jurys: Aufmerksamkeit, Käuferklarheit, Regeln). Richtung der Gründer
  // „träumen vs. leben“ als Ort-Kontrast: Meeting (Gerede) gegen Prozess
  // (Alltag). Alternativen im Marketing-Kontext, Baustein Hero-Hook.
  // Zeilenumbruch zwischen den Sätzen ist gesetzt (pre-line), damit „In“ nicht allein steht.
  headline: "AI in jedem Meeting.\nIn keinem Prozess.",
  claim: "From Process to Production.",
  // v5 (2026-09-18): ein Satz, der Win zum Hook („der eine Ablauf“ statt Meeting-Gerede).
  description: "Wir bauen AI in den einen Ablauf, der Ihr Team täglich bremst.",
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
      hook: "Einzelne nutzen AI. Ihr Betrieb nicht.",
      text: "Alle machen es anders, niemand misst den Nutzen. Wir machen daraus einen festen Ablauf für alle.",
      cta: { label: "Ihren Stand klären", href: "/kontakt" },
      viz: "align" as const,
      data: { value: 78, unit: "%", label: "der AI-Nutzer bringen eigene Tools mit zur Arbeit. Ohne Vorgabe von oben", chart: "ring" as const, series: [{ v: 78, name: "" }], source: "Work Trend Index 2024, Microsoft und LinkedIn" },
    },
    {
      quote: "Dafür haben wir weder Leute noch Zeit.",
      hook: "Wir bringen beides mit. Und geben es weiter.",
      text: "Wir bauen die Lösung und zeigen Ihrem Team, wie es sie selbst weiterführt.",
      cta: { label: "So befähigen wir Ihr Team", href: "/vorgehen#phasen" },
      viz: "handover" as const,
      data: { value: 66, unit: "%", label: "der Unternehmen fehlt die Zeit für Digitalisierung, 70 % fehlen die Fachkräfte", chart: "bars" as const, series: [{ v: 66, name: "Zeit" }, { v: 70, name: "Fachkräfte" }], source: "Bitkom 2026, 604 Unternehmen ab 20 Beschäftigte" },
    },
    {
      quote: "Rechnet sich das überhaupt?",
      hook: "Das sehen Sie, bevor wir bauen.",
      text: "Wir rechnen jedes Vorhaben vorher durch. Gebaut wird nur, was sich lohnt.",
      cta: { label: "Wie wir bewerten", href: "/leistungen" },
      viz: "rank" as const,
      data: { value: 59, unit: "%", label: "der Führungskräfte können den Nutzen von AI nicht beziffern. 60 % fehlt ein Plan", chart: "bars" as const, series: [{ v: 59, name: "Nutzen unklar" }, { v: 60, name: "Kein Plan" }], source: "Work Trend Index 2024" },
    },
    {
      quote: "Der Pilot lief. Mehr nicht.",
      hook: "Wir bauen dort ein, wo Ihr Team arbeitet.",
      text: "Direkt in Ihre Systeme, mit Datenschutz von Anfang an. Wo es läuft, entscheiden Sie.",
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
    title: "Ihr Unternehmen verstehen",
    text: "Wir schauen, wie Ihr Betrieb wirklich arbeitet: Abläufe, Menschen, Systeme.",
    phase: "process",
  },
  {
    n: 2,
    title: "Die richtigen Abläufe finden",
    text: "Wo Ihr Team wartet, sucht oder doppelt tippt, setzen wir an.",
    phase: "process",
  },
  {
    n: 3,
    title: "Chancen konkret benennen",
    text: "So konkret, dass Sie jede Chance selbst prüfen können.",
    phase: "process",
  },
  {
    n: 4,
    title: "Durchrechnen, bevor gebaut wird",
    text: "Sie sehen vorher, was es bringt und was es kostet. Dann entscheiden Sie.",
    phase: "process",
  },
  {
    n: 5,
    title: "Den Ablauf neu denken",
    text: "Wo es sich lohnt, gestalten wir den Ablauf neu, statt AI nur anzuschrauben.",
    phase: "design",
  },
  {
    n: 6,
    title: "Den Plan festlegen",
    text: "Reihenfolge, Abhängigkeiten, Meilensteine. Ein Plan, den wir selbst umsetzen.",
    phase: "design",
  },
  {
    n: 7,
    title: "Selbst bauen",
    text: "Wer den Ablauf verstanden hat, baut auch die Lösung.",
    phase: "build",
  },
  {
    n: 8,
    title: "In Ihre Systeme einbauen",
    text: "Die Lösung läuft in Ihren Systemen, nicht daneben.",
    phase: "build",
  },
  {
    n: 9,
    title: "Sicherheit und Datenschutz",
    text: "Von Anfang an eingebaut, nicht am Ende geprüft.",
    phase: "production",
  },
  {
    n: 10,
    title: "Live bringen und verbessern",
    text: "Die Lösung geht live. Ihr Team lernt sie, wir messen und verbessern weiter.",
    phase: "production",
  },
] as const;

/** Die Delivery Chain als Kurzform (Abschnitt 3). */
export const chain = [
  "Business verstehen",
  "Prozesse analysieren",
  "Chancen finden",
  "Prozesse neu gestalten",
  "Lösung planen",
  "Modelle auswählen",
  "Software entwickeln",
  "Systeme integrieren",
  "Live bringen",
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
  "Daten, Modelle und Zugänge sind geschützt; Regeln und Nachvollziehbarkeit sind eingebaut.",
  "Ihr Team lernt, mit der Lösung zu arbeiten und sie weiterzuentwickeln.",
  "Wir messen die Wirkung im Alltag und verbessern die Lösung laufend.",
] as const;

/** Abgrenzung zu klassischer Beratung (Abschnitt 2, letzter Absatz). */
export const contrast = {
  heading: "Eine Roadmap ist kein Ergebnis.",
  text: "Beratung endet oft bei Strategie und Folien. Bei uns baut, wer Sie berät, und bleibt, bis es läuft.",
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
  eyebrow: "Unabhängigkeit",
  // v2 (2026-09-18): konkreter Pain statt abstraktem Hook; Position 02 auf der Startseite.
  heading: "Zu viele Dienstleister. Zu wenig Kontrolle.",
  // v3 (2026-09-18): ein Satz Lede, drei Einzeiler (Gründer: „zu viel, zu verstreut“).
  // v4 (2026-09-18, Gründer-Wortlaut): Schluss mit Vendor Lock-in und teurer Abhängigkeit.
  text: "Schluss mit Vendor Lock-in und teurer Abhängigkeit von Dienstleistern.",
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
  ledeShort: "Software, Plattformen, Websites. Gebaut von erfahrenen Entwicklern und unseren Partnern, mit AI-Unterstützung.",
  lede: "Manchmal muss zuerst eine Software oder eine Website gebaut werden. Das machen wir: mit erfahrenen Entwicklern und unseren Partnern, mit AI-Unterstützung und klaren Regeln.",
  offers: [
    { title: "Software und Plattformen", text: "Anwendungen, Schnittstellen, Anbindung an Ihre Systeme." },
    { title: "Website, Shop und App", text: "Websites, Shops und Apps, die Ihr Team selbst pflegen kann." },
    { title: "Aufbau, Cloud und Sicherheit", text: "Systemaufbau, Umzug in die Cloud und Schutz, wo Sie es wollen." },
  ],
  sdlc: {
    title: "So bauen wir: mit AI, nach klaren Regeln.",
    items: [
      "AI hilft beim Entwickeln, mit festen Regeln für Vertraulichkeit.",
      "Menschen prüfen jede Änderung, bevor sie zu Ihnen geht.",
      "Keine Passwörter, keine echten Daten, kein vertraulicher Code in öffentlichen AI-Tools.",
      "Abnahme mit Belegen: Tests, Prüfnotizen, Ergebnisse.",
    ],
  },
  proof: {
    label: "Erprobt im laufenden Projekt",
    title: "Ein Projekt, mehrere Partner, ein Standard.",
    text: "Alle Partner arbeiten nach denselben Regeln. Wer mit Ihnen spricht, schreibt auch den Code.",
  },
  cta: { line: "Eine Software, eine Website oder beides?", primary: { label: "Projekt im Erstgespräch besprechen", href: "/kontakt" } },
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
    image: "website",
    kicker: "Showcase: Website",
    title: "Ihre Website. Ihr Team pflegt sie selbst.",
    text: "Weg von WordPress und Agentur-Tickets. Ihr Team ändert Texte, Seiten und Angebote selbst, AI hilft beim Schreiben.",
    href: "/showcases/webauftritt",
  },
  {
    image: "software",
    kicker: "Showcase: Software",
    title: "Mehrere Partner, ein Standard.",
    text: "Ein Projekt, in dem alle Partner nach denselben Regeln bauen.",
    href: "/leistungen#software",
  },
] as const;

export const showcaseWeb = {
  eyebrow: "Showcase: Website",
  title: "Ihre Website. Ihr Team pflegt sie selbst.",
  lede: "Neue Seite, neues Angebot, neuer Text: Ihr Team macht das selbst, ohne Ticket an eine Agentur. Wir bauen Ihre Website so, dass das geht, und holen sie aus WordPress oder Typo3 heraus.",
  before: {
    heading: "Woran Websites heute hängen.",
    items: [
      { title: "Jede Änderung ein Ticket", text: "Texte, Seiten, Angebote: alles geht an die Agentur oder an die eine Person, die sich auskennt." },
      { title: "Die Vorlage bestimmt das Aussehen", text: "Was nicht in die Vorlage passt, bleibt weg." },
      { title: "Wissen steckt in einer Person", text: "Geht sie, kommt niemand mehr an die Website." },
    ],
  },
  pipeline: {
    heading: "So bauen wir Ihre Website.",
    steps: [
      { name: "Design", title: "Ein Design, viele Bausteine", text: "Kopfzeile, Angebot, Kontakt: Wir gestalten Bausteine. Aus ihnen entstehen alle Seiten." },
      { name: "Redaktion", title: "Ihr Team baut Seiten selbst", text: "Bausteine zusammenstecken, Texte ändern, Bilder tauschen. Ohne Entwickler, ohne Ticket." },
      { name: "AI-Hilfe", title: "AI schreibt vor, Ihr Team gibt frei", text: "Textvorschläge, Varianten und Übersetzungen aus Ihrem Angebot. Freigegeben wird von Menschen." },
      { name: "Live", title: "Online, wo Sie es wollen", text: "Schnell, sicher, messbar." },
    ],
  },
  migration: {
    heading: "Der Umzug aus WordPress, Typo3 und Co.",
    items: [
      { title: "Inhalte kommen mit", text: "Seiten, Bilder und Struktur werden übernommen, nicht nachgebaut." },
      { title: "Google findet Sie weiter", text: "Adressen und Weiterleitungen bleiben erhalten." },
      { title: "Ihr Team übernimmt", text: "Ab dem ersten Tag pflegt Ihr Team selbst. Wir bleiben, bis das läuft." },
    ],
  },
  after: {
    heading: "Was Ihr Team danach kann.",
    items: [
      "Neue Angebote selbst online stellen, ohne Ticket.",
      "Alle Seiten sehen aus einem Guss aus.",
      "AI-Textvorschläge nutzen und selbst freigeben.",
      "Niemand außer Ihnen hält den Zugang zur eigenen Website.",
    ],
  },
  cta: { line: "Welches System bremst Ihre Website heute?", primary: { label: "Website im Erstgespräch besprechen", href: "/kontakt" } },
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
  // Ergänzt am 2026-09-18 (Gründer): Ninox (Low-Code-Plattform), Bastion Cooperative.
  { name: "Ninox", href: "https://ninox.com/", file: "ninox.png" },
  { name: "Bastion Cooperative", href: "https://bastion.li/", file: "bastion.png" },
] as const;

/** Capabilities – Beleg für die Umsetzungskompetenz, nicht das Produktversprechen (Abschnitte 4/5). */
export const capabilities = [
  { title: "Abläufe analysieren", text: "Verstehen, wo es hakt. Vor jeder Technik." },
  { title: "AI-Chancen bewerten", text: "Was bringt es, was kostet es. Keine Wunschliste." },
  { title: "Abläufe neu gestalten", text: "So, dass AI ein natürlicher Teil der Arbeit ist." },
  { title: "AI-Anwendungen bauen", text: "Assistenten, Suche über Ihr Wissen, Automatisierung. Fertig für den Alltag." },
  { title: "Software bauen", text: "Anwendungen, Schnittstellen, Anbindung an Ihre Systeme." },
  { title: "Modelle auswählen", text: "Passend zu Ihren Daten und Ihrem Datenschutz." },
  { title: "Cloud und Infrastruktur", text: "Ihre Cloud, Ihr Rechenzentrum oder ein Anbieter Ihrer Wahl." },
  { title: "Sicherheit", text: "Daten, Modelle und Zugänge geschützt. Von Anfang an." },
  { title: "Regeln und Nachvollziehbarkeit", text: "Wer darf was, und warum hat die AI so entschieden." },
  { title: "Team befähigen", text: "Ihr Team nutzt die Lösung und entwickelt sie weiter." },
] as const;

export const positioning = {
  category: "AI Transformation & Engineering",
  altCategory: "AI-Native Consulting & Engineering",
  principle:
    "Wir verstehen, wie Ihr Unternehmen arbeitet, finden die größten AI-Hebel und setzen die passende Lösung anschließend selbst um.",
} as const;
