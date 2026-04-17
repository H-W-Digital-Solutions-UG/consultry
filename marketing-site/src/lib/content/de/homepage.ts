import { ctaTargets } from "@/lib/content/shared";

export type HomepageHero = {
  eyebrow: string;
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
  image: {
    src: string;
    alt: string;
  };
  proofLine: string;
  sideCards: ReadonlyArray<{
    title: string;
    body: string;
  }>;
  metrics: ReadonlyArray<{
    value: string;
    label: string;
  }>;
};

export type HomepageStep = {
  id: string;
  stepLabel: string;
  stepperLabel: string;
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  image: {
    src: string;
    alt: string;
  };
  caption: string;
  flipped?: boolean;
};

export type HomepageMetric = {
  value: string;
  label: string;
  body: string;
};

export type HomepageWaitlist = {
  eyebrow: string;
  title: string;
  body: string;
  placeholder: string;
  buttonLabel: string;
  trustLine: string;
  success: string;
};

export type HomepageAnswer = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
};

export type HomepageLinkCard = {
  href: string;
  label: string;
  body: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
};

export const homepageSeo = {
  title: "Consultry · Der operative AI-Begleiter für IT-Beratungen",
  description:
    "Consultry verbindet Marktsignal, Staffing, Angebot, Delivery und Wissensrückfluss in einem System für IT- und Digitalisierungsberatungen im DACH-Raum. Pre-Launch. Warteliste offen.",
  keywords: [
    "operativer AI-Begleiter",
    "Consulting Software DACH",
    "Software für Beratungsunternehmen",
    "PSA Software Beratung",
    "Staffing Software Beratung",
    "AI-native Plattform Consulting",
    "Auslastungssteuerung Consultants",
    "Angebotserstellung Beratung Software",
    "Wissensmanagement Consulting",
  ],
} as const;

export const homepageContent = {
  hero: {
    eyebrow: "DER OPERATIVE AI-BEGLEITER FÜR BERATUNGEN",
    title: [
      "Sie kennen Ihr Team.",
      "Consultry kennt",
      "den Markt.",
    ],
    body:
      "Consultry verbindet Marktsignal, Staffing, Angebot, Delivery und Wissensrückfluss in einem System. Gebaut für IT- und Digitalisierungsberatungen mit 30 bis 200 Beratern im DACH-Raum.",
    primaryCta: {
      label: "Auf die Warteliste",
      href: ctaTargets.homepagePrimary,
    },
    secondaryCta: {
      label: "Produkt ansehen",
      href: ctaTargets.homepageSecondary,
    },
    image: {
      src: "/images/figma/hero-dashboard.png",
      alt: "Consultry Arbeitsfläche mit Opportunity, Team und Delivery in einer Ansicht",
    },
    proofLine:
      "Pre-Launch · Erklärbare Empfehlungen mit menschlicher Freigabe · EU-Hosting",
    sideCards: [
      {
        title: "Ihre nächste Chance steht meist schon im Haus",
        body:
          "Stakeholder-Wechsel, Ausschreibungen, Hiring. Consultry zieht die Signale zusammen und zeigt Ihnen über Nacht, wo eine Opportunity entsteht, bevor sie jemand anders sieht.",
      },
      {
        title: "Wissen, das nicht im Archiv endet",
        body:
          "Referenzen, Methoden und Lessons Learned tauchen genau dort wieder auf, wo sie Umsatz bringen: im nächsten Pitch, im nächsten Staffing, im nächsten Projekt.",
      },
    ],
    metrics: [
      { value: "Signal", label: "Marktchancen, bevor sie jemand anders sieht" },
      { value: "Match", label: "Team-Vorschlag mit Begründung" },
      { value: "Offer", label: "Angebot in Stunden, nicht in Tagen" },
      { value: "Learn", label: "Wissen fließt aus dem Projekt zurück" },
    ],
  },
  answers: [
    {
      question: "Was ist Consultry in einem Satz?",
      answer:
        "Consultry ist der erste operative AI-Begleiter für IT- und Digitalisierungsberatungen im DACH-Raum: vom ersten Marktsignal bis zum Wissensrückfluss in einem System.",
      href: "/produkt",
      linkLabel: "Zur Produktseite",
    },
    {
      question: "Für wen ist Consultry gebaut?",
      answer:
        "Für IT- und Digitalisierungsberatungen mit 30 bis 200 Beratern im DACH-Raum, die Bestandskunden-Wachstum, Staffing und Delivery nicht länger über sieben Tools steuern wollen.",
      href: "/unternehmen",
      linkLabel: "Mehr zum DACH-Fokus",
    },
    {
      question: "Warum reicht ein CRM nicht aus?",
      answer:
        "Ein CRM kennt die Pipeline, aber nicht Ihre Berater. PSA-Tools tracken Delivery, aber nicht die Akquise. Consultry verbindet beide Welten und das Firmenwissen dazwischen.",
      href: "/produkt/consultry-vs-crm",
      linkLabel: "Zum Vergleich",
    },
  ] satisfies HomepageAnswer[],
  steps: [
    {
      id: "account-growth",
      stepLabel: "[01]",
      stepperLabel: "Signal",
      eyebrow: "MARKT & SIGNAL INTELLIGENCE",
      title: "Sie sehen die Chance, bevor sie jemand anders sieht.",
      body:
        "Über Nacht erkennt Consultry, was passiert: CTO-Wechsel bei einem Bestandskunden, eine passende Ausschreibung, Hiring-Signale bei einem Prospect. Morgens um 8 haben Sie drei priorisierte Chancen auf dem Tisch, mit Kontext, Beziehungspfad und erstem Briefing, nicht mit 30 ungelesenen Newslettern.",
      ctaLabel: "Mehr zu Marktsignalen und Bestandskunden",
      image: {
        src: "/images/figma/step-signal.png",
        alt: "Priorisierte Marktsignale mit Match-Logik und Warm Paths",
      },
      caption:
        "Signale, Warm Paths und der direkte Einstieg in die Opportunity, in einer Ansicht.",
    },
    {
      id: "staffing-forecasting",
      stepLabel: "[02]",
      stepperLabel: "Match",
      eyebrow: "PEOPLE & CAPACITY",
      title: "Sie schlagen drei Teams vor, nicht eines aus Verlegenheit.",
      body:
        "Consultry kennt Skills, Projekterfahrung, Verfügbarkeit und Teamchemie. Für jede Opportunity entstehen drei belastbare Team-Varianten mit Margin-Blick und Begründung. Sie entscheiden, welches Team gewinnt. Skill-Lücken und Unterauslastung werden früh sichtbar, nicht erst im nächsten Forecast.",
      ctaLabel: "Mehr zu Staffing und Forecasting",
      image: {
        src: "/images/figma/step-matching.png",
        alt: "Drei Team-Varianten mit Match-Score, Verfügbarkeit und Forecast",
      },
      caption:
        "Drei Team-Varianten, Margin inklusive, Verfügbarkeit geprüft. In Minuten statt Tagen.",
      flipped: true,
    },
    {
      id: "proposal-workflow",
      stepLabel: "[03]",
      stepperLabel: "Offer",
      eyebrow: "DEAL EXECUTION",
      title: "Aus der qualifizierten Chance wird ein Angebot in Stunden.",
      body:
        "Engagement Brief, passende CVs, Referenzen und Pricing-Logik kommen aus demselben Kontext wie die Opportunity selbst. Kein Copy-Paste zwischen PowerPoint, Word und Inbox. Das Angebot steht in Stunden statt in Tagen: freigegeben, versioniert, nachvollziehbar.",
      ctaLabel: "Mehr zum Angebotsprozess",
      image: {
        src: "/images/figma/step-delivery.png",
        alt: "Angebots-Canvas mit Varianten, CVs und Freigabeprozess",
      },
      caption:
        "Von der qualifizierten Chance zum belastbaren Angebotsentwurf, in einem Workflow.",
    },
    {
      id: "knowledge-reuse",
      stepLabel: "[04]",
      stepperLabel: "Learn",
      eyebrow: "WISSENSBASIS & DELIVERY",
      title: "Das Wissen aus dem letzten Projekt hilft im nächsten Pitch.",
      body:
        "Delivery Health, Scope-Risiken, Deckungsbeiträge und Lessons Learned laufen in derselben Arbeitsebene zusammen. Methoden, Referenzen und Erfahrungen fließen nach Projektende zurück. Sie tauchen beim nächsten Pitch, Staffing oder Projektstart wieder auf. Genau dann, wenn sie Wert erzeugen.",
      ctaLabel: "Mehr zu Wissen und Delivery",
      image: {
        src: "/images/figma/step-knowledge.png",
        alt: "Wissensbausteine und Referenzen im Delivery-Kontext",
      },
      caption:
        "Wissensbausteine, Referenzen und Learnings, verfügbar dort, wo sie Umsatz bringen.",
      flipped: true,
    },
  ] satisfies HomepageStep[],
  internalLinks: [
    {
      href: "/produkt/account-growth",
      label: "Bestandskunden-Wachstum",
      body:
        "Wie aus Stakeholder-Wechseln, Hiring-Signalen und Ausschreibungen priorisierte Opportunities werden.",
    },
    {
      href: "/produkt/staffing-forecasting",
      label: "Staffing und Forecasting",
      body:
        "Wie Skills, Verfügbarkeit und Teamchemie zu drei belastbaren Team-Varianten pro Opportunity werden.",
    },
    {
      href: "/produkt/knowledge-reuse",
      label: "Wissen, das wieder auftaucht",
      body:
        "Wie Methoden, Referenzen und Lessons Learned im nächsten Pitch, Staffing und Projekt erscheinen.",
    },
    {
      href: "/produkt/commercial-control",
      label: "Delivery und Marge",
      body:
        "Wie Projekt, Deckungsbeitrag und Invoice-Ready-Übergabe an DATEV in einer Sicht zusammenlaufen.",
    },
    {
      href: "/produkt/consultry-vs-crm",
      label: "Consultry vs. Standard-CRM",
      body:
        "Warum ein CRM Ihre Pipeline kennt, aber nicht Ihre Berater, Ihr Firmenwissen und Ihre Delivery-Realität.",
    },
  ] satisfies HomepageLinkCard[],
  metrics: [
    {
      value: "15h → 3h",
      label: "BD-Recherche pro Woche",
      body:
        "Statt 15 bis 25 Stunden pro Woche über fünf bis acht Tools. Consultry bündelt Recherche und Stakeholder-Kontext in einer Arbeitsebene.",
    },
    {
      value: "Tage → Stunden",
      label: "Vom Brief zum Angebot",
      body:
        "Engagement Brief, Team-Variante, CVs und Proposal-Draft entstehen aus einem gemeinsamen Kontext, nicht aus sieben Dokumenten.",
    },
    {
      value: "60–70% → 80–90%",
      label: "Ziel-Utilization pro Berater",
      body:
        "Weil Pipeline, Skills und Verfügbarkeit in einer Steuerungslogik zusammenlaufen. Bench-Kosten werden früher sichtbar.",
    },
    {
      value: "+25–40%",
      label: "Ziel-Steigerung Win-Rate",
      body:
        "Passende Referenzen, realistisches Team und belastbare Begründung, im Angebot selbst, nicht in der Nacharbeit.",
    },
  ] satisfies HomepageMetric[],
  waitlist: {
    eyebrow: "WARTELISTE",
    title: "Sie wollen dabei sein, wenn Consultry live geht?",
    body:
      "Tragen Sie sich ein. Zum Launch hören Sie als Erste. Wenn Sie eine Beratung mit 30 bis 200 Beratern führen und Consultry mitgestalten wollen, sprechen wir binnen 48 Stunden direkt miteinander.",
    placeholder: "Ihre geschäftliche E-Mail-Adresse",
    buttonLabel: "Auf die Warteliste",
    trustLine:
      "Double-Opt-in · Exklusiv für DACH-Beratungen · Pilotplätze werden kuratiert",
    success:
      "Danke. Bitte bestätigen Sie jetzt noch Ihre Anmeldung über den Link in Ihrer E-Mail.",
  } satisfies HomepageWaitlist,
} as const;
