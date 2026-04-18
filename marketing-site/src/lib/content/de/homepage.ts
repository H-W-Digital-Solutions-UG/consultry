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
  title: "Consultry · Die AI-native Steuerungsebene für IT-Beratungen",
  description:
    "AI-nativ und tenant-isoliert. Signal, Staffing, Angebot und Delivery in einer Ansicht. Für IT- und Digitalisierungsberatungen mit 30 bis 200 Beratern im DACH-Raum. Pre-Launch, Warteliste offen.",
  keywords: [
    "AI-native Beratungssoftware",
    "Steuerungsebene IT-Beratung",
    "Consulting Software DACH",
    "Software für Beratungsunternehmen",
    "PSA Software Beratung",
    "Staffing Software Beratung",
    "AI-native Plattform Consulting",
    "DSGVO Beratungssoftware",
    "Angebotserstellung Beratung AI",
  ],
} as const;

export const homepageContent = {
  hero: {
    eyebrow: "DER OPERATIVE AI-BEGLEITER FÜR BERATUNGEN",
    title: [
      "Weniger Tools.",
      "Mehr Beratung.",
    ],
    body:
      "EU-gehostet, tenant-isoliert, DSGVO in der Produktlogik. Keine Zeile Mandatsdaten wandert in ein US-Modell.",
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
      alt: "Consultry Arbeitsebene mit Opportunity, Team und Delivery in einer Ansicht",
    },
    proofLine:
      "Pre-Launch · Für DACH-Beratungen mit 30 bis 200 Beratern · Pilotplätze werden kuratiert",
    sideCards: [
      {
        title: "AI-nativ. Kein Chatbot am Rand.",
        body:
          "Fünf Interaktionsschichten vom Command Bar bis zum Agentic Workflow. Jeder Vorschlag kommt mit Begründung, jede Freigabe mit Audit-Trail.",
      },
      {
        title: "Ihre Mandate bleiben bei Ihnen.",
        body:
          "Honorare, Stakeholder und Kompetenzprofile laufen auf lokalen Open-Source-Modellen in der EU. Nichts wandert in ein gemeinsames Modell.",
      },
    ],
    metrics: [
      { value: "Signal", label: "Chancen aus Ihrem Bestandsbuch" },
      { value: "Match", label: "Drei Teams mit Begründung" },
      { value: "Offer", label: "Angebot in Stunden" },
      { value: "Learn", label: "Wissen, das zurückfließt" },
    ],
  },
  answers: [
    {
      question: "Ist Consultry nur ein CRM mit AI drauf?",
      answer:
        "Nein. Ein CRM kennt Ihre Pipeline. Consultry kennt Ihre Berater, Ihr Wissen und Ihre Delivery. Vom Signal bis zum Learning, in einer Ansicht.",
      href: "/produkt/consultry-vs-crm",
      linkLabel: "Zum CRM-Vergleich",
    },
    {
      question: "Was heißt AI-nativ bei Consultry konkret?",
      answer:
        "Fünf Interaktionsschichten vom Command Bar bis zum Agentic Workflow. Jeder Vorschlag kommt mit Begründung. Sie verfeinern im Dialog, bis es passt. Kein One-Click-Magic, kein fertiges Ergebnis auf Knopfdruck.",
      href: "/produkt",
      linkLabel: "Zum Produktprinzip",
    },
    {
      question: "Was passiert mit unseren Mandatsdaten?",
      answer:
        "Sie bleiben bei Ihnen. Tenant-isoliert, auf lokalen Open-Source-Modellen in der EU. Nichts wandert in ein gemeinsames Modell, nichts geht an Big-US-Anbieter.",
      href: "/unternehmen",
      linkLabel: "Zur Haltung",
    },
  ] satisfies HomepageAnswer[],
  steps: [
    {
      id: "account-growth",
      stepLabel: "[01]",
      stepperLabel: "Signal",
      eyebrow: "BESTANDSKUNDEN UND MARKTSIGNALE",
      title: "Ein neuer Entscheider beim Kunden. Ihr Einstieg ist vorbereitet.",
      body:
        "Consultry beobachtet, was sich in Ihren Bestandskunden bewegt: Entscheider-Wechsel, neue Strategien, anlaufende Initiativen. Aus jedem relevanten Signal wird eine vorbereitete Opportunity. Mit Bedarfshypothese, passender Projektreferenz aus Ihrer Delivery-Historie und konkretem Einstieg.",
      ctaLabel: "Zur Seite Bestandskunden-Wachstum",
      image: {
        src: "/images/figma/step-signal.png",
        alt: "Priorisierte Marktsignale mit Bedarfshypothese und Projektreferenz",
      },
      caption:
        "Signal, Bedarfshypothese, Projektreferenz. In einer Ansicht.",
    },
    {
      id: "staffing-forecasting",
      stepLabel: "[02]",
      stepperLabel: "Match",
      eyebrow: "BERATER UND KAPAZITÄT",
      title: "Drei Teams mit Begründung. Sie geben frei.",
      body:
        "Consultry kennt Skills, Projekthistorie und Verfügbarkeit Ihrer Berater. Für jede Opportunity entstehen drei belastbare Varianten, mit Margin und Matching-Score. Sie wählen, ändern, ergänzen. Skill-Lücken werden früh sichtbar, nicht erst im nächsten Forecast.",
      ctaLabel: "Zur Seite Staffing und Forecasting",
      image: {
        src: "/images/figma/step-matching.png",
        alt: "Drei Team-Varianten mit Match-Score, Verfügbarkeit und Forecast",
      },
      caption:
        "Drei Varianten, Margin inklusive, Verfügbarkeit geprüft. In Minuten.",
      flipped: true,
    },
    {
      id: "proposal-workflow",
      stepLabel: "[03]",
      stepperLabel: "Offer",
      eyebrow: "ANGEBOT UND VERTRAG",
      title: "Drei Stunden zum Angebot. Nicht drei Tage.",
      body:
        "Engagement-Brief, CVs, Referenzen und Pricing entstehen aus demselben Kontext wie die Opportunity. Kein Copy-Paste zwischen PowerPoint, Word und Inbox. Consultry baut die erste Version. Sie verfeinern in Sätzen, bis es passt.",
      ctaLabel: "Zum Angebots-Workflow",
      image: {
        src: "/images/figma/step-delivery.png",
        alt: "Angebots-Canvas mit Varianten, CVs und Freigabeprozess",
      },
      caption:
        "Von der qualifizierten Chance zum belastbaren Angebot. In einem Workflow.",
    },
    {
      id: "knowledge-reuse",
      stepLabel: "[04]",
      stepperLabel: "Learn",
      eyebrow: "WISSEN UND DELIVERY",
      title: "Jedes Projekt arbeitet für den nächsten Pitch.",
      body:
        "Delivery Health, Scope-Risiken und Deckungsbeiträge laufen in derselben Ansicht. Methoden und Referenzen fließen nach Projektende zurück. Eine Frage wie \u201eSAP-Datenmigration Retail\u201c liefert 15 Sekunden später eine Antwort, nicht eine Dokumentliste.",
      ctaLabel: "Zur Seite Wissen und Delivery",
      image: {
        src: "/images/figma/step-knowledge.png",
        alt: "Wissensbausteine und Referenzen im Delivery-Kontext",
      },
      caption:
        "Weniger Suchen. Mehr Antwort.",
      flipped: true,
    },
  ] satisfies HomepageStep[],
  internalLinks: [
    {
      href: "/produkt/account-growth",
      label: "Bestandskunden-Wachstum",
      body:
        "Entscheider-Wechsel und neue Initiativen bei Ihren Bestandskunden. Priorisiert, mit Bedarfshypothese und Projektreferenz aus Ihrer Delivery-Historie.",
    },
    {
      href: "/produkt/staffing-forecasting",
      label: "Staffing und Forecasting",
      body:
        "Drei Team-Varianten pro Opportunity, mit Margin und Verfügbarkeit. Skill-Lücken werden früh sichtbar.",
    },
    {
      href: "/produkt/knowledge-reuse",
      label: "Wissen, das wieder auftaucht",
      body:
        "Methoden und Referenzen erscheinen im Kontext. 15 Sekunden Antwort statt drei Stunden Suche.",
    },
    {
      href: "/produkt/commercial-control",
      label: "Delivery und Marge",
      body:
        "Projekt-Health und Deckungsbeitrag, live. Invoice-Ready-Übergabe an DATEV per XRechnung und ZUGFeRD.",
    },
    {
      href: "/produkt/consultry-vs-crm",
      label: "Consultry vs. Standard-CRM",
      body:
        "Ein CRM kennt die Pipeline. Consultry kennt Ihre Berater, Ihr Wissen und Ihre Delivery.",
    },
  ] satisfies HomepageLinkCard[],
  metrics: [
    {
      value: "Eine Ansicht",
      label: "Statt fünf bis acht Tools",
      body:
        "Signal, Staffing, Angebot und Delivery laufen in einem System zusammen. Heute verteilen sie sich auf fünf bis acht Tools und eine Spreadsheet-Kette daneben.",
    },
    {
      value: "3 Stunden",
      label: "Vom Brief zum Angebot",
      body:
        "Heute zwei bis vier Tage. Engagement-Brief, CVs, Referenzen und Pricing aus demselben Kontext, nicht aus sieben Dokumenten.",
    },
    {
      value: "80–90 %",
      label: "Ziel-Utilization pro Berater",
      body:
        "Heute 60 bis 70 Prozent. Pipeline, Skills und Verfügbarkeit in einer Steuerungslogik. Bench-Kosten werden früher sichtbar.",
    },
    {
      value: "15 Sekunden",
      label: "Antwort aus der Wissensbasis",
      body:
        "Heute drei Stunden Suche. Eine Query statt einer Dokumentliste. Referenzen und Methoden im Delivery-Kontext.",
    },
  ] satisfies HomepageMetric[],
  waitlist: {
    eyebrow: "WARTELISTE",
    title: "Als Erste dabei, wenn Consultry live geht.",
    body:
      "E-Mail eintragen. Zum Launch hören Sie zuerst. Pilot-Interesse im nächsten Schritt ankreuzen, wir melden uns binnen 48 Stunden.",
    placeholder: "Geschäftliche E-Mail-Adresse",
    buttonLabel: "Auf die Warteliste",
    trustLine:
      "Double-Opt-in · Für DACH-Beratungen · Pilotplätze werden kuratiert",
    success:
      "Danke. Bitte bestätigen Sie den Link in Ihrer E-Mail.",
  } satisfies HomepageWaitlist,
} as const;
