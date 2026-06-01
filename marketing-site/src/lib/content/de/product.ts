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

export type ProductAnswer = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
};

export type ProductInternalLink = {
  href: string;
  label: string;
  body: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
};

export const productSeo = {
  title: "Produkt · Consultry",
  description:
    "Signal, Team, Angebot, Delivery und Wissen in einer Arbeitsebene. Für IT- und Digitalisierungsberatungen mit 30 bis 200 Beratern im DACH-Raum. EU-gehostet, tenant-isoliert.",
  keywords: [
    "Operativer AI-Begleiter für Beratungen",
    "AI-native Plattform Consulting",
    "Software für Beratungen DACH",
    "Staffing und Forecasting Beratung",
    "Bestandskunden-Wachstum Beratung",
    "Wissensrückfluss Consulting",
    "Delivery und Marge Beratung",
    "CRM-Alternative Beratung",
  ],
} as const;

export const productHero: ProductHeroContent = {
  overline: "DIE PLATTFORM",
  title: [
    "Eine Arbeitsebene.",
    "Kein weiteres Tool.",
  ],
  body:
    "Signal, Team, Angebot, Delivery und Wissen laufen in einer Ansicht zusammen. Statt sieben Tabs, die niemand mehr verknüpft.",
  primaryCta: {
    label: "Auf die Warteliste",
    href: "/warteliste",
  },
  secondaryCta: {
    label: "Architektur ansehen",
    href: "/produkt#architecture",
  },
  metrics: [
    { value: "Signal", label: "aus dem Markt" },
    { value: "Match", label: "aus Ihrem Team" },
    { value: "Angebot", label: "in Stunden" },
    { value: "Wissen", label: "das zurückkommt" },
  ],
  proofLine:
    "Tenant-isoliert · EU-Hosting · Lokale Open-Source-Modelle für vertrauliche Daten",
  preview: {
    src: "/images/hero-dashboard.png",
    alt: "Consultry Arbeitsebene mit Signal-Feed, Team-Matching und Angebotslogik",
  },
};

export const productDemoModule: ProductDemoModuleContent = {
  eyebrow: "PRODUKT-VORSCHAU",
  title: "Signal rein. Angebot raus. In Stunden.",
  body:
    "Ein Bestandskunde wechselt den CTO. Um acht wissen Sie es. Consultry baut den Engagement-Brief, schlägt drei Teams vor und legt die erste Angebotsversion an. Sie verfeinern in Sätzen, bevor irgendetwas rausgeht.",
  meta:
    "Signal-Feed, Engagement-Brief, Team-Matching, Angebot, Delivery und Wissensrückfluss in derselben Arbeitsebene.",
  overlayCta: "Vorschau ansehen",
  poster: {
    src: "/images/product-row-dashboard.png",
    alt: "Consultry Vorschau mit Signal-Feed, Team-Matching und Canvas",
  },
};

export const productAnswers: ProductAnswer[] = [
  {
    question: "Was macht Consultry, was ein CRM nicht kann?",
    answer:
      "Ein CRM kennt Ihre Pipeline. Es kennt weder Ihre Berater noch Ihre Methodik noch Ihre Delivery. Consultry verbindet Signal, Team, Angebot, Delivery und Wissen in einer Logik. Was im CRM steht, ist ein Teil davon. Nicht die Hauptsache.",
    href: "/produkt/consultry-vs-crm",
    linkLabel: "Zum Vergleich",
  },
  {
    question: "Wo setzt Consultry zuerst an?",
    answer:
      "Beim Bestandskunden-Wachstum. Dort entstehen rund 80 Prozent des Umsatzes. Die stärksten Signale stehen in Newslettern, im Postfach eines Partners und in Ausschreibungen, die niemand rechtzeitig sieht. Consultry liest sie mit und macht daraus priorisierte Opportunities.",
    href: "/produkt/account-growth",
    linkLabel: "Zu Bestandskunden-Wachstum",
  },
  {
    question: "Was passiert mit unseren Mandatsdaten?",
    answer:
      "Sie bleiben bei Ihnen. Tenant-isoliert, EU-gehostet, auf lokalen Open-Source-Modellen. Keine Zeile Mandatsdaten wandert in ein US-Modell. Consultry lernt mit Ihren Daten, aber nur für Sie. Nichts fließt in einen gemeinsamen Topf.",
    href: "/unternehmen",
    linkLabel: "Zur Haltung",
  },
];

export const productArchitecture: ProductArchitectureContent = {
  overline: "DIE ARCHITEKTUR",
  title: "Fünf Bereiche. Eine Logik.",
  body:
    "Heute laufen Marktsignal, Staffing, Angebot, Delivery und Wissen parallel in sieben Systemen. Consultry führt sie in einer Arbeitsebene zusammen. Vom ersten Signal bis zum Wissen, das aus dem abgeschlossenen Projekt zurückkommt.",
  layers: [
    {
      id: "account-growth",
      eyebrow: "MARKET & SIGNAL INTELLIGENCE",
      title: "Bestandskunden-Wachstum",
      summary:
        "Newsletter, Ausschreibungen, Stellenanzeigen, Presse. Consultry liest mit und verknüpft CTO-Wechsel, Budgetentscheidungen und Hiring-Wellen mit Ihrem Netzwerk. Das Ergebnis ist kein To-do, sondern ein Engagement-Brief mit Bedarfshypothese, Projektreferenz und konkretem Einstieg.",
      capabilities: [
        "Signal-Feed mit Priorisierung",
        "Stakeholder-Mapping pro Account",
        "Bedarfshypothese aus Signalmuster",
        "Engagement-Brief pro Opportunity",
      ],
      preview: {
        src: "/images/figma/step-signal.png",
        alt: "Signal-Feed mit priorisierten Bestandskunden-Signalen",
        caption:
          "Signale werden nicht gesammelt. Sie werden mit Ihrem Netzwerk, Ihrer Methodik und Ihrem Team verknüpft.",
      },
    },
    {
      id: "staffing-capacity",
      eyebrow: "PEOPLE & CAPACITY",
      title: "Staffing und Forecasting",
      summary:
        "Skills, Zertifikate, Projekterfahrung und Verfügbarkeit werden zu einem lebendigen Knowledge Graph. Pro Opportunity schlägt das System drei Team-Varianten vor, jede mit Begründung und Forecast. Sie wählen, ändern, geben frei.",
      capabilities: [
        "Skill-Normalisierung über die ganze Beratung",
        "Team-Varianten mit Match-Score und Begründung",
        "Forecasting auf Team- und Projektebene",
        "Bench-Sicht und Auslastungs-Steuerung",
      ],
      preview: {
        src: "/images/figma/step-matching.png",
        alt: "Team-Vorschläge mit Match-Score und Verfügbarkeit",
        caption:
          "Drei Varianten, jede mit Begründung. Sie sehen, warum wer vorgeschlagen wird. Sie entscheiden.",
      },
    },
    {
      id: "knowledge-reuse",
      eyebrow: "WISSENSBASIS",
      title: "Wissen, das wieder auftaucht",
      summary:
        "Methodik, Referenzen und Lessons Learned bleiben nicht in Confluence begraben. Sie erscheinen dort, wo sie Umsatz oder Delivery verbessern: im Engagement-Brief, im Angebot, beim Onboarding. Eine Frage wie SAP-Datenmigration Retail liefert in Sekunden eine Antwort.",
      capabilities: [
        "Quellengebundene Antworten statt Halluzinationen",
        "Referenz-Bausteine pro Branche",
        "Methodik, die das System mitbringt",
        "Lessons Learned im richtigen Moment",
      ],
      preview: {
        src: "/images/figma/step-knowledge.png",
        alt: "Wissensbasis mit Referenzen und Methodik",
        caption:
          "Kein Archiv. Wissen taucht dort wieder auf, wo es Umsatz oder Delivery verbessert.",
      },
    },
    {
      id: "proposal-workflow",
      eyebrow: "DEAL EXECUTION",
      title: "Angebot in Stunden statt Tagen",
      summary:
        "Aus Engagement-Brief, Team-Vorschlag, CVs, Referenzen und Pricing entsteht ein Canvas. Ihre Partner reviewen in Sätzen statt in Klicks. Jeder Schritt dokumentiert, bis zur Vertragsgrundlage mit Audit-Trail.",
      capabilities: [
        "Canvas für kollaborative Angebotsarbeit",
        "Automatische CVs und Referenzen",
        "Pricing-Logik mit Delivery-Realität",
        "Review- und Freigabe-Workflow",
      ],
      preview: {
        src: "/images/figma/step-delivery.png",
        alt: "Angebots-Canvas mit Team-Kontext und Pricing",
        caption:
          "Vom qualifizierten Signal zum freigegebenen Angebot. In einer Arbeitsebene.",
      },
    },
    {
      id: "delivery-control",
      eyebrow: "DELIVERY & COMMERCIALS",
      title: "Delivery und Marge",
      summary:
        "Allocation, Delivery Health, Kostenbezug und Invoice-Ready-Übergabe in derselben Steuerungslogik. Marge, Risiko und Abweichung in Echtzeit. Das Wissen aus der Delivery fließt automatisch zurück in die nächste Opportunity.",
      capabilities: [
        "Allocation mit Echtzeit-Sicht",
        "Risk und Health pro Projekt",
        "Kostenbezug und Marge",
        "Invoice-Ready-Übergabe an DATEV oder Bexio",
      ],
      preview: {
        src: "/images/product-row-dashboard.png",
        alt: "Delivery-Sicht mit Marge, Risiko und Commercials",
        caption:
          "Delivery, Marge und Wissensrückfluss in einer Sicht. Kein Excel-Export, kein Medienbruch.",
      },
    },
  ],
  workflowOverline: "DER LIFECYCLE",
  workflowTitle: "Vom Marktsignal bis zum Wissensrückfluss.",
  workflowBody:
    "Jede Beratung lebt vom gleichen Zyklus. Signal erkennen, Team matchen, Angebot schnüren, liefern, steuern, lernen. Consultry macht ihn sichtbar und schließt ihn.",
  workflowSteps: [
    "Signal erkennen und qualifizieren",
    "Team matchen und Angebot schnüren",
    "Liefern, steuern und Wissen zurückführen",
  ],
};

export const productComparison: ComparisonTableContent = {
  overline: "CONSULTRY VS. STANDARD-CRM",
  title: "Warum ein CRM nicht reicht.",
  body:
    "Ein CRM kennt die Pipeline. Workforce-Tools kennen die Berater. PSA-Tools tracken die Delivery. Jedes kennt einen Ausschnitt. Keines verbindet den Zyklus, aus dem eine Beratung ihren Umsatz schöpft.",
  columnHeaders: ["FUNKTIONEN", "CONSULTRY", "STANDARD-CRM"],
  rows: [
    {
      feature: "Signal-Feed aus Newslettern, Ausschreibungen und Presse",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Team-Matching mit Skills, Verfügbarkeit und Projekterfahrung",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Forecasting auf Team- und Projektebene",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Angebots-Canvas mit Pricing und Delivery-Realität",
      consultry: "yes",
      competitor: "partial",
    },
    {
      feature: "Delivery, Marge und Commercials in einer Sicht",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Wissensrückfluss aus abgeschlossenen Projekten",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Erklärbare Empfehlungen mit menschlicher Freigabe",
      consultry: "yes",
      competitor: "partial",
    },
    {
      feature: "Tenant-isoliert, EU-Hosting, DSGVO in der Produktlogik",
      consultry: "yes",
      competitor: "partial",
    },
  ],
};

export const productFaq: ProductFaqItem[] = [
  {
    question: "Ist Consultry ein CRM mit AI drauf?",
    answer:
      "Nein. Ein CRM dokumentiert Vertrieb. Consultry verbindet Marktsignal, Team-Matching, Angebot, Delivery und Wissensrückfluss in einer Arbeitsebene. Sie sagen, was Sie brauchen. Das System bereitet vor. Sie entscheiden.",
  },
  {
    question: "Wie behalten wir die Kontrolle über AI-Empfehlungen?",
    answer:
      "Jede Empfehlung kommt mit Begründung und Freigabe-Schritt. Sie sehen, worauf das System sich stützt, und können in Sätzen korrigieren. Nichts wirkt nach außen, bevor Sie freigegeben haben. Jeder Schritt im Audit-Trail.",
  },
  {
    question: "Wo laufen unsere Mandatsdaten?",
    answer:
      "Tenant-isoliert, EU-gehostet. Vertrauliche Inhalte laufen auf lokalen Open-Source-Modellen in der EU. Ihre Daten lernen nur für Ihre Beratung. Keine Zeile wandert in einen globalen Modelltrainings-Topf oder an einen US-Anbieter.",
  },
  {
    question: "Ist Consultry für DACH-Anforderungen gebaut?",
    answer:
      "Ja. EU-Hosting, DSGVO, AI Act, BetrVG und Works-Council-Mode sind Teil der Produktlogik. Kein Add-on, das später nachgereicht wird. Wir sind drei Gründer aus Berlin und bauen für den DACH-Raum.",
  },
  {
    question: "Für wen ist Consultry gedacht?",
    answer:
      "Für IT- und Digitalisierungsberatungen im DACH-Raum mit 30 bis 200 Beratern. Für Managing Partner, BD- und Delivery-Leads, die Bestandskunden-Wachstum, Staffing, Angebote und Delivery nicht länger in sieben Tools verteilen wollen.",
  },
  {
    question: "Müssen wir unsere Bestandssysteme ersetzen?",
    answer:
      "Nein. Consultry integriert dort, wo Ersatz unnötig wäre. DATEV, Bexio, bestehende HR-Systeme bleiben. Wir schließen zuerst die Lücken zwischen den Tools, die heute nicht sauber zusammenspielen.",
  },
  {
    question: "Was ändert sich beim Staffing konkret?",
    answer:
      "Drei Team-Varianten pro Opportunity, jede mit Begründung, Match-Score und Forecast. Auslastung steigt in Pilot-Setups typischerweise von 60 bis 70 Prozent auf 80 bis 90 Prozent, weil Engpässe und Bench früher sichtbar werden.",
  },
  {
    question: "Wie schnell sind wir live?",
    answer:
      "Wir sind im Pre-Launch. Mit Pilotkunden starten wir unter zwei Wochen nach Setup. Warteliste eintragen, im Qualifier Pilot-Interesse ankreuzen, wir melden uns binnen 48 Stunden.",
  },
];

export const productInternalLinks: ProductInternalLink[] = [
  {
    href: "/produkt/account-growth",
    label: "Bestandskunden-Wachstum",
    body:
      "Signal, Bedarfshypothese, Engagement-Brief. Aus 80 Prozent Ihrer Umsatzquelle ein steuerbarer Wachstumspfad.",
  },
  {
    href: "/produkt/staffing-forecasting",
    label: "Staffing und Forecasting",
    body:
      "Drei Team-Varianten mit Begründung. Skill-Lücken früh sichtbar, Bench-Kosten vermeidbar.",
  },
  {
    href: "/produkt/knowledge-reuse",
    label: "Wissen, das wieder auftaucht",
    body:
      "Methodik und Referenzen im Kontext. 15 Sekunden Antwort statt drei Stunden Suche.",
  },
  {
    href: "/produkt/commercial-control",
    label: "Delivery und Marge",
    body:
      "Allocation, Health, Kostenbezug und Invoice-Ready-Übergabe an DATEV. In einer Sicht.",
  },
  {
    href: "/produkt/consultry-vs-crm",
    label: "Consultry vs. CRM",
    body:
      "Warum ein CRM die Wertschöpfungslogik einer Beratung nicht abbilden kann.",
  },
];

export const productCta = {
  eyebrow: "NÄCHSTER SCHRITT",
  title: "Consultry in Ihrer Beratung sehen?",
  body:
    "Auf die Warteliste eintragen. Zum Launch hören Sie als Erste. Pilot-Interesse im Qualifier ankreuzen. Wir melden uns binnen 48 Stunden direkt aus dem Gründerteam.",
  primaryCta: {
    label: "Auf die Warteliste",
    href: "/warteliste",
  },
} as const;
