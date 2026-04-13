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
};

export const productSeo = {
  title: "Consultry Plattform | Operative Steuerung fuer DACH-Beratungen",
  description:
    "Consultry ist das AI-native Operating System fuer DACH-Beratungen. Von Account Growth ueber Staffing und Proposal bis Delivery und Commercial Control.",
  keywords: [
    "AI-native Operating System fuer Beratungen",
    "Software fuer Beratungsunternehmen",
    "Consulting Plattform DACH",
    "Staffing Software Beratung",
    "Forecasting Beratung",
    "Wissensmanagement Beratung",
    "Salesforce Alternative Beratung",
    "Commercial Control Beratung",
  ],
} as const;

export const productHero: ProductHeroContent = {
  overline: "DIE PLATTFORM",
  title: ["Operative Steuerung", "fuer Beratungen.", "Nicht noch ein CRM."],
  body:
    "Consultry verbindet Marktchancen, Teamlogik, Angebotsarbeit, Delivery und Commercial Control in einem AI-nativen System. Erklaerbar, freigabepflichtig und gebaut fuer DACH-IT- und Digitalisierungsberatungen.",
  primaryCta: {
    label: "Demo anfragen",
    href: "/#waitlist",
  },
  secondaryCta: {
    label: "Module entdecken",
    href: "/produkt#architecture",
  },
  metrics: [
    { value: "Bestand", label: "im Fokus" },
    { value: "Staffing", label: "mit Kontext" },
    { value: "Proposals", label: "mit System" },
    { value: "Delivery", label: "mit Commercial Control" },
  ],
  proofLine: "EU-Hosting · DSGVO by design · Erklaerbare AI-Empfehlungen",
  preview: {
    src: "/images/hero-dashboard.png",
    alt: "Consultry Dashboard mit Beratungs-Workflow und Kennzahlen",
  },
};

export const productDemoModule: ProductDemoModuleContent = {
  eyebrow: "PRODUKT-DEMO",
  title: "Sehen Sie denselben Ablauf, den Ihr Team spaeter live nutzt.",
  body:
    "Die Demo zeigt den Kernflow von Consultry: Chance erkennen, Team belastbar vorschlagen, Angebot strukturieren und Delivery sauber weiterfuehren.",
  meta:
    "Von Signal-Feed und Engagement Brief ueber Staffing und Proposal bis zur Delivery- und Commercial-Sicht bleibt alles in einer zusammenhaengenden Arbeitsebene.",
  overlayCta: "Demo-Vorschau laden",
  poster: {
    src: "/images/product-row-dashboard.png",
    alt: "Consultry Produkt-Demo mit Signal-Feed und kollaborativer Arbeitsoberflaeche",
  },
};

export const productAnswers: ProductAnswer[] = [
  {
    question: "Was unterscheidet Consultry von einem Standard-CRM?",
    answer:
      "Consultry dokumentiert nicht nur Vertrieb, sondern verbindet Chance, Team, Proposal, Delivery und Commercial Control in einer zusammenhaengenden Steuerungslogik.",
    href: "/produkt/consultry-vs-crm",
    linkLabel: "Zum Vergleich",
  },
  {
    question: "Welches Problem loest Consultry zuerst?",
    answer:
      "Consultry schliesst die operative Luecke zwischen Bestandskundenkontext, Staffing, Angebotsarbeit und Wissenswiederverwendung - genau dort, wo in Beratungen Zeit, Marge und Kontext verloren gehen.",
    href: "/produkt/account-growth",
    linkLabel: "Zum Growth-Wedge",
  },
  {
    question: "Fuer wen ist die Plattform gedacht?",
    answer:
      "Der Fokus liegt auf DACH-IT- und Digitalisierungsberatungen mit etwa 30 bis 200 Mitarbeitenden, die Folgegeschaeft, Teamsteuerung und Delivery nicht laenger ueber isolierte Tools organisieren wollen.",
    href: "/kontakt",
    linkLabel: "Kontakt aufnehmen",
  },
];

export const productArchitecture: ProductArchitectureContent = {
  overline: "PLATTFORM-ARCHITEKTUR",
  title: "Fuenf Steuerungsbereiche. Ein System.",
  body:
    "Consultry verbindet die Steuerungsbereiche, die Beratungen heute meist getrennt organisieren: Bestandskundenwachstum, Team- und Kapazitaetssteuerung, Wissenswiederverwendung, Opportunity und Proposal sowie Delivery und Commercial Control.",
  layers: [
    {
      id: "account-growth",
      eyebrow: "ACCOUNT GROWTH",
      title: "Client & Market System",
      summary:
        "Bestandskunden, Stakeholder, Warm Paths, Trigger und Folgechancen werden zu einem operativen Bild verdichtet. So entsteht aus verstreutem Account-Kontext eine bewertbare Opportunity-Grundlage.",
      capabilities: [
        "Account-Kontext",
        "Stakeholder-Mapping",
        "Warm Paths",
        "Signal-Feed",
      ],
      preview: {
        src: "/images/figma/step-signal.png",
        alt: "Signal Intelligence Feed mit priorisierten Marktchancen",
        caption:
          "Priorisierte Signale mit Match-Logik, Warm Paths und direktem Einstieg in die Opportunity.",
      },
    },
    {
      id: "staffing-capacity",
      eyebrow: "TEAM & CAPACITY",
      title: "Consultant & Capacity System",
      summary:
        "Skills, Zertifikate, Projekterfahrung, Verfuegbarkeit und Teamstrukturen werden zu einer belastbaren Grundlage fuer Staffing, Forecasting und Skill-Gap-Sicht.",
      capabilities: [
        "Skill-Normalisierung",
        "Verfuegbarkeitslogik",
        "Kapazitaetsplanung",
        "Forecasting",
      ],
      preview: {
        src: "/images/figma/step-matching.png",
        alt: "Staffing und Forecasting mit Team-Vorschlaegen",
        caption:
          "Teamvarianten mit Match-Score, Verfuegbarkeit, Projekterfahrung und Forecast-Kontext.",
      },
    },
    {
      id: "knowledge-reuse",
      eyebrow: "KNOWLEDGE & REUSE",
      title: "Knowledge System",
      summary:
        "Methoden, Referenzen, Assets und Lessons Learned werden nicht nur archiviert, sondern direkt in Angebotsarbeit, Delivery und Onboarding nutzbar gemacht.",
      capabilities: [
        "Referenzbausteine",
        "Methodenwissen",
        "Lessons Learned",
        "Quellengebundene Suche",
      ],
      preview: {
        src: "/images/figma/step-knowledge.png",
        alt: "Knowledge Hub mit Beratungswissen und Referenzen",
        caption:
          "Wissensbausteine, Referenzen und Learnings tauchen dort wieder auf, wo sie Umsatz und Delivery verbessern.",
      },
    },
    {
      id: "proposal-workflow",
      eyebrow: "OPPORTUNITY & PROPOSAL",
      title: "Proposal Workflow",
      summary:
        "Von Engagement Brief und Teamvorschlag ueber CVs und Pricing bis zu Proposal-Drafts und Vertragsgrundlagen bleibt alles in einem nachvollziehbaren Freigabeprozess.",
      capabilities: [
        "Engagement Briefs",
        "Teamvorschlaege",
        "Proposal-Drafts",
        "Review und Freigaben",
      ],
      preview: {
        src: "/images/figma/step-delivery.png",
        alt: "Proposal Workflow mit Angebotsentwurf und Teamkontext",
        caption:
          "Von der qualifizierten Chance zum belastbaren Angebotsentwurf in einem Workflow.",
      },
    },
    {
      id: "delivery-control",
      eyebrow: "DELIVERY & COMMERCIAL CONTROL",
      title: "Delivery Control System",
      summary:
        "Allocation, Delivery Health, Kostenbezug, Invoice Prep und Lernrueckfluss laufen in einer gemeinsamen Steuerungslogik zusammen. So endet Delivery nicht im Datengrab.",
      capabilities: [
        "Allocation",
        "Risk & Health",
        "Kostenbezug",
        "Billing Prep",
      ],
      preview: {
        src: "/images/product-row-dashboard.png",
        alt: "Delivery Control mit Projekt- und Commercial-Sicht",
        caption:
          "Delivery, Kostenbezug und Commercial Control bleiben in derselben operativen Sicht.",
      },
    },
  ],
  workflowOverline: "DER WORKFLOW",
  workflowTitle: "Aus einer Chance wird ein plausibles Projekt. Nicht nur ein Lead.",
  workflowBody:
    "Der operative Kern von Consultry liegt in der Uebersetzung zwischen Demand und Supply: aus Bedarf wird eine belastbare Opportunity, aus Opportunity ein glaubwuerdiges Team und Angebot, aus Delivery wieder verwertbares Wissen.",
  workflowSteps: [
    "Signal und Bedarf erkennen",
    "Team und Angebot plausibel machen",
    "Delivery steuern und Wissen zurueckfuehren",
  ],
};

export const productComparison: ComparisonTableContent = {
  overline: "CONSULTRY VS. STANDARD-CRM",
  title: "Warum generische CRMs Beratungsarbeit nur zur Haelfte abbilden",
  body:
    "CRMs dokumentieren Vertrieb. Consultry verbindet Vertrieb, Teamlogik, Angebotsarbeit, Delivery und Commercial Control in einem System, das auf die Wertschoepfung von Beratungen ausgelegt ist.",
  columnHeaders: ["FUNKTIONEN", "CONSULTRY", "STANDARD CRM"],
  rows: [
    {
      feature: "Bestandskunden- und Triggerlogik fuer Account Expansion",
      consultry: "yes",
      competitor: "partial",
    },
    {
      feature: "Berater- und Team-Matching mit Verfuegbarkeit und Projekterfahrung",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Forecasting auf Team- und Projektbasis",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Proposal-Workflow statt nur Opportunity-Pflege",
      consultry: "yes",
      competitor: "partial",
    },
    {
      feature: "Delivery- und Commercial-Sicht im selben System",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Wissensrueckfluss aus Delivery in Proposal und Staffing",
      consultry: "yes",
      competitor: "no",
    },
    {
      feature: "Erklaerbare Empfehlungen mit Freigabe und Audit Trail",
      consultry: "yes",
      competitor: "partial",
    },
    {
      feature: "DSGVO- und DACH-orientierte Produktlogik",
      consultry: "yes",
      competitor: "partial",
    },
  ],
};

export const productFaq: ProductFaqItem[] = [
  {
    question: "Was unterscheidet Consultry von einem Standard-CRM?",
    answer:
      "Consultry ist kein umfunktioniertes Vertriebswerkzeug, sondern ein operatives System fuer Beratungen. Die Plattform verbindet Chance, Team, Proposal, Delivery und Wissensrueckfluss in einem durchgaengigen Workflow.",
  },
  {
    question: "Wie geht Consultry mit AI-Risiken um?",
    answer:
      "Empfehlungen bleiben erklaerbar, editierbar und freigabepflichtig. Entscheidungen werden nicht heimlich automatisiert, sondern mit Begruendung und Audit Trail vorbereitet.",
  },
  {
    question: "Ist Consultry fuer DACH-Anforderungen gebaut?",
    answer:
      "Ja. EU-Hosting, DSGVO, kontrollierte Nutzung personenbezogener Daten und sensible People-Analytics-Standards sind Teil der Produktlogik, nicht nur ein spaeteres Add-on.",
  },
  {
    question: "Fuer wen ist Consultry gedacht?",
    answer:
      "Fuer DACH-IT- und Digitalisierungsberatungen mit etwa 30 bis 200 Mitarbeitenden, die Bestandskundengeschaeft, Staffing, Angebotsgeschwindigkeit und Delivery sauber in einem System zusammenziehen wollen.",
  },
  {
    question: "Muessen wir bestehende Systeme sofort ersetzen?",
    answer:
      "Nein. Consultry integriert dort, wo Ersatz unnoetig oder riskant waere, und schliesst zuerst die operative Luecke zwischen den Systemen, die heute nicht sauber zusammenspielen.",
  },
  {
    question: "Wie verbessert Consultry Staffing und Forecasting?",
    answer:
      "Consultry verbindet Projektanforderungen, Skills, Verfuegbarkeit, Teamkontext und Delivery-Realitaet. Dadurch werden Engpaesse, Leerstand und bessere Besetzungsoptionen frueher sichtbar.",
  },
  {
    question: "Wie reduziert Consultry Wissensverlust?",
    answer:
      "Referenzen, Methoden, Lessons Learned und Delivery-Kontext bleiben nicht im Archiv. Sie tauchen wieder auf, wenn neue Opportunities qualifiziert, Teams vorgeschlagen oder Angebote erstellt werden.",
  },
];

export const productInternalLinks: ProductInternalLink[] = [
  {
    href: "/produkt/account-growth",
    label: "Bestandskundenwachstum",
    body:
      "Wie Trigger, Warm Paths und Folgeprojekte in einen operativen Growth-Workflow uebersetzt werden.",
  },
  {
    href: "/produkt/staffing-forecasting",
    label: "Staffing und Forecasting",
    body:
      "Wie Skills, Verfuegbarkeit und Delivery-Realitaet zu belastbareren Staffing-Entscheidungen werden.",
  },
  {
    href: "/produkt/knowledge-reuse",
    label: "Knowledge Reuse",
    body:
      "Wie Referenzen, Methoden und Projektwissen wieder nutzbar werden statt verstreut zu bleiben.",
  },
  {
    href: "/produkt/commercial-control",
    label: "Commercial Control",
    body:
      "Wie Delivery, Kostenbezug und Invoice Prep in einer operativen Sicht zusammenlaufen.",
  },
  {
    href: "/produkt/consultry-vs-crm",
    label: "Consultry vs. CRM",
    body:
      "Warum ein Standard-CRM die eigentliche Wertschoepfungslogik von Beratungen nicht sauber abbildet.",
  },
];

export const productCta = {
  eyebrow: "BEREIT FUER DAS SYSTEM?",
  title: "Schluss mit CRM, Excel und Kontextverlust zwischen den Teams",
  body:
    "In einer persoenlichen Demo zeigen wir, wie Consultry Ihre operative Steuerung verdichtet: mit Ihren Daten, Ihrem Team und Ihren realen Prozessen.",
  primaryCta: {
    label: "Demo vereinbaren",
    href: "/#waitlist",
  },
} as const;
