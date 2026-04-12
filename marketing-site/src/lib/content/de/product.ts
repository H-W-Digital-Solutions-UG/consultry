export type ProductHeroContent = {
  overline: string;
  title: ReadonlyArray<string>;
  body: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  metrics: Array<{
    value: string;
    label: string;
  }>;
  proofLine: string;
  preview: {
    src: string;
    alt: string;
  };
};

export type ProductDemoModuleContent = {
  eyebrow: string;
  title: string;
  body: string;
  meta?: string;
  overlayCta: string;
  poster: {
    src: string;
    alt: string;
  };
};

export type ProductArchitectureContent = {
  overline: string;
  title: string;
  body: string;
  layers: Array<{
    id: string;
    eyebrow: string;
    title: string;
    summary: string;
    capabilities: string[];
    preview: {
      src: string;
      alt: string;
      caption: string;
    };
  }>;
  workflowOverline: string;
  workflowTitle: string;
  workflowBody: string;
  workflowSteps: string[];
};

export type ProductFeatureRowContent = {
  eyebrow: string;
  title: string;
  body: string;
  image: {
    src: string;
    alt: string;
  };
  linkLabel: string;
  reverse?: boolean;
};

export type ComparisonTableRow = {
  feature: string;
  consultry: "yes" | "no" | "partial";
  competitor: "yes" | "no" | "partial";
};

export type ComparisonTableContent = {
  overline: string;
  title: string;
  body?: string;
  columnHeaders: [string, string, string];
  rows: ComparisonTableRow[];
};

export type ProductFaqItem = {
  question: string;
  answer: string;
};

export const productHero: ProductHeroContent = {
  overline: "DIE PLATTFORM",
  title: ["Alles, was Ihre", "Beratung braucht.", "In einem System."],
  body:
    "Consultry ersetzt nicht einzelne Tools. Es schliesst die operative Luecke zwischen Markt, Staffing, Angebotsarbeit und Delivery. Ein AI-natives System fuer Beratungen im DACH-Raum.",
  primaryCta: {
    label: "Demo anfragen",
    href: "/#waitlist",
  },
  secondaryCta: {
    label: "Module entdecken",
    href: "/produkt#modules",
  },
  metrics: [
    { value: "-70%", label: "Recherchezeit" },
    { value: "+35%", label: "Win-Rate" },
    { value: "85%", label: "Berater-Auslastung" },
    { value: "< 2 Wo.", label: "Onboarding" },
  ],
  proofLine: "DSGVO-konform. Entwickelt für Beratungen im DACH-Raum.",
  preview: {
    src: "/images/hero-dashboard.png",
    alt: "Consultry Dashboard mit Beratungs-Workflow und Kennzahlen",
  },
};

export const productDemoModule: ProductDemoModuleContent = {
  eyebrow: "VIDEO DEMO",
  title: "Sehen Sie Consultry in Aktion.",
  body:
    "Sehen Sie Consultry in Aktion: Von der Signal-Erkennung zum maßgeschneiderten Angebot in unter 4 Minuten.",
  meta:
    "Die Demo führt durch denselben operativen Ablauf, den Ihr Team später im Live-System nutzt: Signal aufnehmen, Team vorschlagen, Angebot strukturieren.",
  overlayCta: "Demo-Vorschau laden",
  poster: {
    src: "/images/product-row-dashboard.png",
    alt: "Consultry Produkt-Demo mit Signal-Feed und kollaborativer Arbeitsoberfläche",
  },
};

export const productArchitecture: ProductArchitectureContent = {
  overline: "PLATTFORM-ARCHITEKTUR",
  title: "Vier Schichten. Ein durchgängiger Workflow.",
  body:
    "Consultry ist in vier Schichten aufgebaut - vom Markt bis zum Wissen. Jede Schicht ist AI-durchdrungen und mit den anderen verknuepft. Keine Datensilos. Kein manuelles Uebertragen.",
  layers: [
    {
      id: "market-intelligence",
      eyebrow: "SIGNAL INTELLIGENCE",
      title: "Market Intelligence",
      summary:
        "Signale aus dem DACH-Markt erkennen, priorisieren und als qualifizierte Chancen in Ihren operativen Workflow überführen.",
      capabilities: [
        "Signal-Feed",
        "DACH-Enrichment",
        "Ausschreibungs-Matching",
        "Discovery-Engine",
      ],
      preview: {
        src: "/images/figma/step-signal.png",
        alt: "Signal Intelligence Feed mit priorisierten Marktchancen",
        caption: "Signal-Feed mit Priorisierung, Match-Score und 1-Klick-Opportunity-Erstellung.",
      },
    },
    {
      id: "workforce-matching",
      eyebrow: "SMART MATCHING",
      title: "Workforce & Matching",
      summary:
        "Verfügbarkeiten, Skills und Teamvarianten in einem Modell statt in Kalendern, Tabellen und Bauchgefühl.",
      capabilities: [
        "Skill-Graph",
        "Verfügbarkeits-Forecast",
        "Kapazitätsplanung",
        "Team-Dashboards",
      ],
      preview: {
        src: "/images/figma/step-matching.png",
        alt: "Smart Matching Ansicht mit Team-Vorschlägen",
        caption: "Team-Konstellation mit Match-Score, Verfügbarkeit und Margin-Sicht.",
      },
    },
    {
      id: "deal-execution",
      eyebrow: "DEAL EXECUTION",
      title: "Deal Execution",
      summary:
        "Vom Engagement-Brief bis zum AI-Canvas-Angebot mit Varianten, Pricing und Kontext für jeden Pitch-Moment.",
      capabilities: [
        "Engagement-Briefs",
        "Semantisches Matching",
        "AI-Canvas-Angebote",
        "Vertragsautomatisierung",
      ],
      preview: {
        src: "/images/figma/step-delivery.png",
        alt: "Delivery Analytics Dashboard mit Echtzeit-KPIs",
        caption: "Engagement-Briefs, Angebotsvarianten und Delivery-Kontext bleiben in einem System.",
      },
    },
    {
      id: "delivery-knowledge",
      eyebrow: "KNOWLEDGE HUB",
      title: "Delivery & Knowledge",
      summary:
        "Profitabilität, Wissensrückfluss und Delivery-Steuerung bleiben in derselben Arbeitsebene wie Markt und Angebot.",
      capabilities: [
        "Milestone-Tracking",
        "Risk-Monitoring",
        "Knowledge Engine",
        "Wissensrückfluss",
      ],
      preview: {
        src: "/images/figma/step-knowledge.png",
        alt: "Knowledge Hub mit Beratungswissen und Proposals",
        caption: "Projektwissen, Benchmarks und Delivery-Learnings füttern denselben operativen Graphen.",
      },
    },
  ],
  workflowOverline: "DER WORKFLOW",
  workflowTitle: "Vom Signal zum Projekt in drei Schritten",
  workflowBody:
    "Einheitliche Arbeitsebene fuer Markt, Team, Angebot und Delivery - ohne Toolwechsel zwischen den Phasen.",
  workflowSteps: [
    "Marktveraenderung erkennen",
    "Team und Angebot erstellen",
    "Profitabel liefern und lernen",
  ],
};

export const productFeatureRows: ProductFeatureRowContent[] = [
  {
    eyebrow: "[01]",
    title: "AI, die Ihren Kontext versteht. Nicht nur Ihre Daten.",
    body:
      "Der kontextuelle Copilot passt sich an: Auf einer Opportunity zeigt er Engagement-Briefs und Berater-Vorschlaege. Auf einem Projekt analysiert er Risiken. Vor einem Kundenanruf liefert er ein 30-Sekunden-Briefing. Sie muessen nicht wissen, welche AI-Features existieren - das System erkennt, was Sie gerade brauchen.",
    image: {
      src: "/images/product-row-dashboard.png",
      alt: "Consultry Plattformansicht mit Kontextkarten und operativen Daten",
    },
    linkLabel: "Details ansehen",
  },
  {
    eyebrow: "[02]",
    title: "Command Bar: Denken Sie schneller als Sie klicken.",
    body:
      'Cmd+K und los: "Zeig mir alle verfuegbaren SAP-Berater ab Mai." "Was ist der DB1 vom MedTech-Projekt?" "Erstell ein Angebot fuer RetailCorp." Natuerliche Sprache, moduluebergreifend, kontextbewusst. Power-User lieben es. Alle anderen auch.',
    image: {
      src: "/images/hero-dashboard.png",
      alt: "Consultry Command-Bar-Ansicht mit Such- und Aktionsbefehlen",
    },
    linkLabel: "Details ansehen",
    reverse: true,
  },
  {
    eyebrow: "[03]",
    title: "Zusammenarbeit dort, wo die Arbeit passiert.",
    body:
      "Kommentare, @Mentions und Aktivitaets-Feeds direkt auf Opportunities, Angeboten und Projekten. Kein Slack-Thread ohne Kontext. Kein E-Mail-Ping-Pong mit Word-Redlines. Thomas fragt 'Status RetailCorp?' - und die Antwort ist schon da.",
    image: {
      src: "/images/product-row-dashboard.png",
      alt: "Consultry Kollaborationsansicht mit Kommentaren und Aktivitaetsfeed",
    },
    linkLabel: "Details ansehen",
  },
];

export const productComparison: ComparisonTableContent = {
  overline: "CONSULTRY VS. STANDARD-CRM",
  title: "Warum Beratungen kein generisches CRM brauchen",
  body: "Consultry ist das erste AI-native operative System, das speziell fuer die Wertschoepfungslogik von Unternehmensberatungen im DACH-Raum entwickelt wurde.",
  columnHeaders: ["FUNKTIONEN", "CONSULTRY", "STANDARD CRM"],
  rows: [
    {
      feature: "KI-gestuetzte Signal-Erkennung (DACH-Markt)",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Automatisches Berater-Matching & Staffing",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Pipeline-Dashboard & Deal-Tracking",
      consultry: "yes",
      competitor: "yes",
    },
    {
      feature: "Automatische Angebots- & Report-Erstellung",
      consultry: "yes",
      competitor: "partial",
    },
    {
      feature: "Berater-Auslastung & Kapazitaetsplanung",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Echtzeit-Deckungsbeitrag-Analyse",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "DSGVO-konform mit EU-Hosting",
      consultry: "yes",
      competitor: "partial",
    },
    {
      feature: "Integriertes Wissensmanagement & IP-Sicherung",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Kontextueller AI-Copilot fuer Beratungsprozesse",
      consultry: "yes",
      competitor: "no",
    },
  ],
};

export const productFaq: ProductFaqItem[] = [
  {
    question: "Was unterscheidet Consultry von einem Standard-CRM?",
    answer:
      "Consultry ist kein generisches CRM, sondern ein AI-natives operatives System für Beratungen. Statt nur Pipeline-Daten zu pflegen, verbindet die Plattform Marktintelligenz, Berater-Matching, Angebotserstellung, Delivery-Steuerung und Wissensrückfluss in einem durchgängigen Workflow.",
  },
  {
    question: "Ist Consultry DSGVO-konform?",
    answer:
      "Ja. Consultry wird in der EU gehostet, verarbeitet keine Daten ausserhalb der EU und implementiert Privacy-by-Design. Consent-Management fuer Outreach-Kontakte ist integriert. Fuer Berater-Profiling bieten wir Feature-Gates, die erst nach dokumentierter Betriebsvereinbarung freigeschaltet werden.",
  },
  {
    question: "Wie lange dauert das Onboarding?",
    answer:
      "Starter-Kunden sind in unter 2 Wochen produktiv. Professional-Kunden in 2 bis 4 Wochen. Enterprise-Onboarding umfasst Datenimport, Konfiguration und Schulung und dauert 4 bis 8 Wochen.",
  },
  {
    question: "Welche Tools kann Consultry ersetzen?",
    answer:
      "Consultry ersetzt nicht blind jedes bestehende System. Die Plattform übernimmt aber genau die Lücken zwischen Markt, Team, Angebot, Delivery und Wissen, die heute oft über CRM, Excel, Dokumente und Chat-Threads verteilt sind.",
  },
  {
    question: "Gibt es eine kostenlose Testversion?",
    answer:
      "Wir bieten eine gefuehrte Pilotphase statt einer anonymen Testversion. In 2 bis 4 Wochen arbeiten Sie mit Ihren echten Daten und sehen den Wert in Ihrer Beratung. Ohne Risiko - wenn es nicht passt, kein Vertrag.",
  },
  {
    question: "Wie funktioniert das KI-gestuetzte Berater-Matching?",
    answer:
      "Consultry kombiniert Projektanforderungen mit Skills, Branchenerfahrung, Verfuegbarkeit, Standort und Teamkontext. Dadurch entstehen belastbare Vorschlaege fuer passende Besetzungen und nicht nur einfache Keyword-Treffer.",
  },
  {
    question: "Koennen wir Consultry mit bestehenden Tools integrieren?",
    answer:
      "Ja. Standard-Integrationen decken Outlook, Gmail, Slack, Teams, Google Calendar, Personio und DATEV ab. Fuer komplexere Umgebungen stehen Webhooks, APIs und SSO-Optionen bereit.",
  },
  {
    question: "Fuer welche Unternehmensgroesse ist Consultry geeignet?",
    answer:
      "Der aktuelle Fokus liegt auf Beratungen mit etwa 30 bis 200 Mitarbeitenden, die Bestandskunden, Staffing, Angebot und Delivery sauber in einem System zusammenziehen wollen.",
  },
  {
    question: "Was passiert mit unseren bestehenden CVs und Daten?",
    answer:
      "Im Onboarding importiert Consultry Ihre bestehenden CVs, Kundendaten und Projekthistorie. Die AI extrahiert und normalisiert Skills automatisch. Kein manuelles Abtippen.",
  },
];

export const productCta = {
  eyebrow: "BEREIT FUER DAS SYSTEM?",
  title: "Schluss mit 47 offenen Tabs.",
  body:
    "In 30 Minuten zeigen wir Ihnen, wie Consultry Ihren Beratungsalltag veraendert. Mit Ihren Daten. Mit Ihrem Team. Mit Ihren Prozessen.",
  primaryCta: {
    label: "Demo vereinbaren",
    href: "/#waitlist",
  },
} as const;
