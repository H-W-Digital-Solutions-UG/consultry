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
  title: "Consultry · Der operative AI-Begleiter für Beratungen",
  description:
    "Consultry verbindet Marktsignal, Team-Matching, Angebot, Delivery und Wissensrückfluss in einem System. Gebaut für IT- und Digitalisierungsberatungen im DACH-Raum.",
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
    "Ein System, das Ihre",
    "Beratung wirklich",
    "steuert.",
  ],
  body:
    "Consultry verbindet Marktsignal, Team-Matching, Angebot, Delivery und Wissensrückfluss in einer Arbeitsebene. Sie sprechen mit dem System, das System bereitet vor — und Sie entscheiden.",
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
    "Pre-Launch · Erklärbare Empfehlungen mit menschlicher Freigabe · EU-Hosting",
  preview: {
    src: "/images/hero-dashboard.png",
    alt: "Consultry Arbeitsebene mit Signal-Feed, Team-Matching und Angebotslogik",
  },
};

export const productDemoModule: ProductDemoModuleContent = {
  eyebrow: "PRODUKT-VORSCHAU",
  title: "So sieht der Alltag mit Consultry aus.",
  body:
    "Ein Marktsignal kommt herein. Das System schlägt drei Team-Varianten vor, mit Begründung. Sie wählen eine — das Angebot ist in Stunden statt Tagen fertig. Nach Projektabschluss fließt das, was Sie gelernt haben, automatisch zurück ins System.",
  meta:
    "Signal-Feed, Engagement-Brief, Team-Matching, Angebot, Delivery und Wissensrückfluss laufen in derselben Arbeitsebene.",
  overlayCta: "Vorschau ansehen",
  poster: {
    src: "/images/product-row-dashboard.png",
    alt: "Consultry Vorschau mit Signal-Feed, Team-Matching und Canvas",
  },
};

export const productAnswers: ProductAnswer[] = [
  {
    question: "Was unterscheidet Consultry von einem CRM?",
    answer:
      "Ein CRM kennt Ihre Pipeline, aber nicht Ihre Berater. Consultry verbindet Marktsignal, Team-Matching, Angebot, Delivery und Wissensrückfluss in einer Logik — nicht in sieben Tools.",
    href: "/produkt/consultry-vs-crm",
    linkLabel: "Zum Vergleich",
  },
  {
    question: "Wo setzt Consultry zuerst an?",
    answer:
      "Beim Bestandskunden-Wachstum. 80 % des Umsatzes kommen dort — aber die stärksten Signale stehen in Newslettern, im Postfach eines Partners und in Ausschreibungen, die niemand rechtzeitig sieht. Consultry bringt sie zusammen.",
    href: "/produkt/account-growth",
    linkLabel: "Zu Bestandskunden-Wachstum",
  },
  {
    question: "Für wen ist Consultry gebaut?",
    answer:
      "Für IT- und Digitalisierungsberatungen im DACH-Raum mit 30 bis 200 Beratern. Für Managing Partner, BD- und Delivery-Leads, die nicht noch ein Tool daneben wollen, sondern eine Steuerungsebene.",
    href: "/kontakt",
    linkLabel: "Mit dem Team sprechen",
  },
];

export const productArchitecture: ProductArchitectureContent = {
  overline: "DIE ARCHITEKTUR",
  title: "Fünf Bereiche. Eine Arbeitsebene.",
  body:
    "Beratungen arbeiten heute mit sieben Systemen parallel. Consultry verbindet die fünf Bereiche, in denen Ihre Wertschöpfung wirklich entsteht — vom ersten Marktsignal bis zum Wissen, das aus abgeschlossenen Projekten wieder auftaucht.",
  layers: [
    {
      id: "account-growth",
      eyebrow: "MARKET & SIGNAL INTELLIGENCE",
      title: "Bestandskunden-Wachstum",
      summary:
        "Das System liest Newsletter, Ausschreibungen, Stellenanzeigen, Presse und Partner-Updates mit. CTO-Wechsel, Budgetentscheidungen, neue Initiativen bei Ihren Bestandskunden — alles wird zu einem priorisierten Signal-Feed mit Warm Paths und Engagement-Brief.",
      capabilities: [
        "Signal-Feed mit Priorisierung",
        "Stakeholder-Mapping",
        "Warm Paths aus Ihrem Netzwerk",
        "Engagement-Brief pro Opportunity",
      ],
      preview: {
        src: "/images/figma/step-signal.png",
        alt: "Signal-Feed mit priorisierten Bestandskunden-Signalen",
        caption:
          "Signale werden nicht nur gesammelt — sie werden mit Ihrem Netzwerk, Ihrer Methodik und Ihrem Team verknüpft.",
      },
    },
    {
      id: "staffing-capacity",
      eyebrow: "PEOPLE & CAPACITY",
      title: "Staffing und Forecasting",
      summary:
        "Skills, Zertifikate, Projekterfahrung und Verfügbarkeit werden zu einem lebendigen Knowledge Graph. Das System schlägt drei Team-Varianten vor, mit Begründung, Auslastungs-Logik und Forecast — Sie wählen und geben frei.",
      capabilities: [
        "Skill-Normalisierung über die ganze Beratung",
        "Team-Varianten mit Match-Score",
        "Forecasting auf Team- und Projekt-Ebene",
        "Bench-Sicht und Auslastungs-Steuerung",
      ],
      preview: {
        src: "/images/figma/step-matching.png",
        alt: "Team-Vorschläge mit Match-Score und Verfügbarkeit",
        caption:
          "Drei Varianten, jede mit Begründung. Sie sehen, warum wer vorgeschlagen wird — und entscheiden.",
      },
    },
    {
      id: "knowledge-reuse",
      eyebrow: "WISSENSBASIS",
      title: "Wissen, das wieder auftaucht",
      summary:
        "Methodik, Referenzen, Delivery-Artefakte und Lessons Learned bleiben nicht in Confluence begraben. Sie tauchen wieder auf — im Engagement-Brief, im Angebot, beim Onboarding eines neuen Beraters.",
      capabilities: [
        "Quellengebundene Antworten",
        "Referenz-Bausteine pro Branche",
        "Methodik, die das System mitbringt",
        "Lessons Learned im richtigen Moment",
      ],
      preview: {
        src: "/images/figma/step-knowledge.png",
        alt: "Wissensbasis mit Referenzen und Methodik",
        caption:
          "Kein Archiv. Wissen taucht dort wieder auf, wo es den Umsatz oder die Delivery verbessert.",
      },
    },
    {
      id: "proposal-workflow",
      eyebrow: "DEAL EXECUTION",
      title: "Angebot in Stunden statt Tagen",
      summary:
        "Aus Engagement-Brief, Team-Vorschlag, CVs, Referenzen und Pricing-Logik entsteht ein Angebotsentwurf im Canvas. Ihre Partner reviewen, das System dokumentiert — bis zur Vertragsgrundlage mit Audit Trail.",
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
          "Vom qualifizierten Signal zum freigegebenen Angebot in einer einzigen Arbeitsebene.",
      },
    },
    {
      id: "delivery-control",
      eyebrow: "DELIVERY & COMMERCIALS",
      title: "Delivery und Marge",
      summary:
        "Allocation, Delivery Health, Kostenbezug und Invoice-Ready-Übergabe laufen in derselben Steuerungslogik. Sie sehen Marge, Risiko und Abweichung in Echtzeit — und das Wissen aus der Delivery fließt automatisch zurück.",
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
    "Jede Beratung lebt vom gleichen Zyklus: Signale erkennen, qualifizieren, das richtige Team matchen, Angebot und Vertrag abschließen, liefern, steuern, lernen und weiterwachsen. Consultry macht diesen Zyklus sichtbar — und schließt ihn.",
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
    "CRMs kennen Ihre Pipeline, aber nicht Ihre Berater. Workforce-Tools kennen Ihre Berater, aber nicht den Markt. PSA-Tools tracken Delivery, aber nicht die Akquise. Consultry ist das verbindende System dazwischen — und es handelt aktiv mit.",
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
      feature: "DSGVO, AI Act und BetrVG von Anfang an eingebaut",
      consultry: "yes",
      competitor: "partial",
    },
  ],
};

export const productFaq: ProductFaqItem[] = [
  {
    question: "Was unterscheidet Consultry von einem CRM?",
    answer:
      "Ein CRM dokumentiert Vertrieb. Consultry verbindet Marktsignal, Team-Matching, Angebot, Delivery und Wissensrückfluss in einer einzigen Arbeitsebene. Sie sprechen mit dem System, das System bereitet vor — und Sie entscheiden.",
  },
  {
    question: "Wie behalten wir die Kontrolle über AI-Empfehlungen?",
    answer:
      "Jede Empfehlung kommt mit Begründung und Freigabe-Schritt. Sie sehen, auf welcher Basis das System entschieden hat, und Sie können jederzeit abweichen. Der Mensch entscheidet. Das System bereitet vor.",
  },
  {
    question: "Ist Consultry für DACH-Anforderungen gebaut?",
    answer:
      "Ja. EU-Hosting, DSGVO, AI Act, BetrVG und sensible People-Analytics sind Teil der Produktlogik — nicht ein Add-on, das später nachgereicht wird. Wir sind drei Gründer aus Berlin und bauen für den DACH-Raum.",
  },
  {
    question: "Für wen ist Consultry gedacht?",
    answer:
      "Für IT- und Digitalisierungsberatungen im DACH-Raum mit 30 bis 200 Beratern. Für Managing Partner, BD- und Delivery-Leads, die Bestandskunden-Wachstum, Staffing, Angebote und Delivery nicht länger in sieben Tools verteilen wollen.",
  },
  {
    question: "Müssen wir bestehende Systeme sofort ersetzen?",
    answer:
      "Nein. Consultry integriert dort, wo Ersatz unnötig wäre — DATEV, Bexio, bestehende HR-Systeme. Wir schließen zuerst die Lücke zwischen den Systemen, die heute nicht sauber zusammenspielen.",
  },
  {
    question: "Was ändert sich beim Staffing konkret?",
    answer:
      "Das System schlägt drei Team-Varianten vor, jede mit Begründung, Match-Score und Forecast-Kontext. Auslastung steigt typischerweise von 60–70 % auf 80–90 %, weil Engpässe und Bench-Situationen früher sichtbar werden.",
  },
  {
    question: "Wie schnell sind wir live?",
    answer:
      "Wir sind im Pre-Launch und arbeiten mit einer kleinen Zahl Pilotkunden. Onboarding startet in unter zwei Wochen nach Launch. Wenn Sie dabei sein wollen: Warteliste und im Formular Pilot-Interesse ankreuzen.",
  },
];

export const productInternalLinks: ProductInternalLink[] = [
  {
    href: "/produkt/account-growth",
    label: "Bestandskunden-Wachstum",
    body:
      "Wie Signal, Warm Path und Engagement-Brief aus 80 % Ihrer Umsatzquelle einen steuerbaren Wachstumspfad machen.",
  },
  {
    href: "/produkt/staffing-forecasting",
    label: "Staffing und Forecasting",
    body:
      "Wie Skills, Verfügbarkeit und Delivery-Realität drei Team-Varianten mit Begründung liefern — statt Excel und Bauchgefühl.",
  },
  {
    href: "/produkt/knowledge-reuse",
    label: "Wissen, das wieder auftaucht",
    body:
      "Wie Methodik, Referenzen und Lessons Learned im richtigen Moment sichtbar werden, statt in Confluence zu versanden.",
  },
  {
    href: "/produkt/commercial-control",
    label: "Delivery und Marge",
    body:
      "Wie Allocation, Kostenbezug und Invoice-Ready-Übergabe in einer operativen Sicht zusammenlaufen.",
  },
  {
    href: "/produkt/consultry-vs-crm",
    label: "Consultry vs. CRM",
    body:
      "Warum ein CRM die Wertschöpfungslogik einer Beratung nicht abbilden kann — und was stattdessen gebraucht wird.",
  },
];

export const productCta = {
  eyebrow: "NÄCHSTER SCHRITT",
  title: "Sie wollen Consultry in Ihrer Beratung sehen?",
  body:
    "Tragen Sie sich auf die Warteliste ein. Zum Launch sind Sie als Erste dabei — und wenn Sie Pilotkunde werden wollen, kreuzen Sie es im Formular an. Wir melden uns binnen 48 Stunden.",
  primaryCta: {
    label: "Auf die Warteliste",
    href: "/warteliste",
  },
} as const;
