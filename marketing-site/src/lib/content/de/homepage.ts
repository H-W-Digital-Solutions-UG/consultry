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
    "Consultry führt Signal, Staffing, Angebot und Delivery in einer Arbeitsebene zusammen. Für IT- und Digitalisierungsberatungen mit 30 bis 200 Beratern im DACH-Raum. Pre-Launch, Warteliste offen.",
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
    eyebrow: "OPERATIVE AI FÜR DACH-BERATUNGEN",
    title: [
      "Sie kennen Ihr Team.",
      "Consultry kennt",
      "den Markt.",
    ],
    body:
      "Eine Arbeitsebene für Signal, Staffing, Angebot und Delivery. Für Beratungen mit 30 bis 200 Beratern.",
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
      "Pre-Launch · Sie entscheiden, Consultry bereitet vor · Tenant-isoliert, EU-Hosting",
    sideCards: [
      {
        title: "Ein Bestandskunde wechselt den CTO. Sie wissen es zuerst.",
        body:
          "Consultry liest Stakeholder-Wechsel, Hiring und Ausschreibungen über Nacht. Morgens liegt ein Engagement-Brief mit warmem Pfad bereit.",
      },
      {
        title: "Die SAP-Migration von damals. Im nächsten Pitch wieder da.",
        body:
          "Methoden, Referenzen und Lessons Learned fließen nach Projektende zurück. Im nächsten Pitch sind sie nicht im Archiv, sondern im Canvas.",
      },
    ],
    metrics: [
      { value: "Signal", label: "Chancen, bevor andere sie sehen" },
      { value: "Match", label: "Drei Teams mit Begründung" },
      { value: "Offer", label: "Angebot in drei Stunden" },
      { value: "Learn", label: "Wissen, das zurückfließt" },
    ],
  },
  answers: [
    {
      question: "Ist Consultry ein weiteres Tool neben den sieben, die wir haben?",
      answer:
        "Nein, im Gegenteil. Consultry ersetzt die Steuerungs-Ebene, die heute auf CRM, PSA, Spreadsheet und Slack verteilt ist. Signal, Staffing, Angebot und Delivery laufen wieder in einer Ansicht zusammen.",
      href: "/produkt",
      linkLabel: "Zur Produktübersicht",
    },
    {
      question: "Was heißt operative AI bei Consultry konkret?",
      answer:
        "Die AI bereitet vor, Sie entscheiden. Jeder Vorschlag kommt mit Begründung, jeder geht nur mit Freigabe raus. Das System lernt mit Ihren Daten, aber ausschließlich für Sie. Tenant-isoliert, in der EU.",
      href: "/unternehmen",
      linkLabel: "Zum Gründungs-Warum",
    },
    {
      question: "Warum reicht ein CRM nicht?",
      answer:
        "Ein CRM kennt Ihre Pipeline. Es kennt nicht Ihre Berater, Ihr Firmenwissen oder Ihre Delivery-Realität. Consultry verbindet alles, vom Signal bis zum Learning.",
      href: "/produkt/consultry-vs-crm",
      linkLabel: "Zum Vergleich",
    },
  ] satisfies HomepageAnswer[],
  steps: [
    {
      id: "account-growth",
      stepLabel: "[01]",
      stepperLabel: "Signal",
      eyebrow: "BESTANDSKUNDEN UND SIGNALE",
      title: "Ein CTO wechselt. Sie wissen es als Erste.",
      body:
        "Über Nacht zieht Consultry Stakeholder-Wechsel, Hiring und Ausschreibungen zusammen. Morgens liegen drei priorisierte Chancen auf dem Tisch, mit warmem Pfad und erstem Briefing. Keine 30 ungelesenen Newsletter, keine fünf offenen Tabs.",
      ctaLabel: "Zur Seite Bestandskunden-Wachstum",
      image: {
        src: "/images/figma/step-signal.png",
        alt: "Priorisierte Marktsignale mit Match-Logik und Warm Paths",
      },
      caption:
        "Signale, warmer Pfad und der direkte Einstieg in die Opportunity. In einer Ansicht.",
    },
    {
      id: "staffing-forecasting",
      stepLabel: "[02]",
      stepperLabel: "Match",
      eyebrow: "BERATER UND KAPAZITÄT",
      title: "Drei Teams mit Begründung. Sie geben frei.",
      body:
        "Consultry kennt Skills, Projekthistorie und Verfügbarkeit. Für jede Opportunity entstehen drei belastbare Varianten, mit Margin und Matching-Score. Sie wählen, ändern, ergänzen. Skill-Lücken und Unterauslastung werden früh sichtbar, nicht erst im nächsten Forecast.",
      ctaLabel: "Zur Seite Staffing und Forecasting",
      image: {
        src: "/images/figma/step-matching.png",
        alt: "Drei Team-Varianten mit Match-Score, Verfügbarkeit und Forecast",
      },
      caption:
        "Drei Varianten, Margin inklusive, Verfügbarkeit geprüft. In Minuten statt Tagen.",
      flipped: true,
    },
    {
      id: "proposal-workflow",
      stepLabel: "[03]",
      stepperLabel: "Offer",
      eyebrow: "ANGEBOT UND VERTRAG",
      title: "Angebot in drei Stunden, nicht in Tagen.",
      body:
        "Engagement-Brief, CVs, Referenzen und Pricing entstehen aus demselben Kontext wie die Opportunity. Kein Copy-Paste zwischen PowerPoint, Word und Inbox. Consultry baut die erste Version. Sie verfeinern in Sätzen, bis es passt.",
      ctaLabel: "Zum Angebots-Workflow",
      image: {
        src: "/images/figma/step-delivery.png",
        alt: "Angebots-Canvas mit Varianten, CVs und Freigabeprozess",
      },
      caption:
        "Von der qualifizierten Chance zum belastbaren Angebot. In einem Workflow, nicht in sieben.",
    },
    {
      id: "knowledge-reuse",
      stepLabel: "[04]",
      stepperLabel: "Learn",
      eyebrow: "WISSEN UND DELIVERY",
      title: "Das Wissen von damals. Im nächsten Pitch wieder da.",
      body:
        "Delivery Health, Scope-Risiken und Deckungsbeiträge laufen in derselben Arbeitsebene. Methoden und Referenzen fließen nach Projektende zurück. Eine Frage wie \u201eSAP-Datenmigration Retail\u201c liefert eine Antwort in Sekunden, nicht eine Dokumentliste.",
      ctaLabel: "Zur Seite Wissen und Delivery",
      image: {
        src: "/images/figma/step-knowledge.png",
        alt: "Wissensbausteine und Referenzen im Delivery-Kontext",
      },
      caption:
        "Wissensbausteine, Referenzen und Learnings. Dort, wo sie Umsatz bringen.",
      flipped: true,
    },
  ] satisfies HomepageStep[],
  internalLinks: [
    {
      href: "/produkt/account-growth",
      label: "Bestandskunden-Wachstum",
      body:
        "Signale aus dem Bestandskundenbuch. Stakeholder-Wechsel, Hiring, Ausschreibungen, priorisiert und mit warmem Pfad.",
    },
    {
      href: "/produkt/staffing-forecasting",
      label: "Staffing und Forecasting",
      body:
        "Drei Team-Varianten pro Opportunity, mit Margin und Begründung. Auslastung und Skill-Lücken werden früh sichtbar.",
    },
    {
      href: "/produkt/knowledge-reuse",
      label: "Wissen, das wieder auftaucht",
      body:
        "Methoden, Referenzen und Lessons Learned erscheinen dort, wo Sie sie brauchen. Nicht im Archiv.",
    },
    {
      href: "/produkt/commercial-control",
      label: "Delivery und Marge",
      body:
        "Projekt-Health, Deckungsbeitrag und Invoice-Ready-Übergabe an DATEV. In einer Sicht.",
    },
    {
      href: "/produkt/consultry-vs-crm",
      label: "Consultry vs. Standard-CRM",
      body:
        "Ein CRM kennt die Pipeline. Consultry kennt Ihre Berater, Ihr Wissen und Ihre Delivery-Realität.",
    },
  ] satisfies HomepageLinkCard[],
  metrics: [
    {
      value: "15h → 3h",
      label: "BD-Recherche pro Woche",
      body:
        "Heute: 15 bis 25 Stunden über fünf bis acht Tools. Mit Consultry: Signal, Stakeholder-Kontext und Briefing in einer Ansicht.",
    },
    {
      value: "3h statt 2–4 Tage",
      label: "Vom Brief zum Angebot",
      body:
        "Engagement-Brief, CVs, Referenzen und Pricing aus einem Kontext. Nicht aus sieben Dokumenten.",
    },
    {
      value: "60–70% → 80–90%",
      label: "Ziel-Utilization pro Berater",
      body:
        "Pipeline, Skills und Verfügbarkeit in einer Steuerungslogik. Bench-Kosten werden früher sichtbar.",
    },
    {
      value: "15 Sek statt 3h",
      label: "Antwort aus der Wissensbasis",
      body:
        "Eine Query statt einer Dokumentliste. Methoden und Referenzen finden Sie in Sekunden, nicht in Meetings.",
    },
  ] satisfies HomepageMetric[],
  waitlist: {
    eyebrow: "WARTELISTE",
    title: "Als Erste dabei, wenn Consultry live geht.",
    body:
      "E-Mail eintragen. Zum Launch hören Sie zuerst. Wer Pilotkunde werden will, kreuzt das im nächsten Schritt an. Wir melden uns binnen 48 Stunden.",
    placeholder: "Geschäftliche E-Mail-Adresse",
    buttonLabel: "Auf die Warteliste",
    trustLine:
      "Double-Opt-in · Für DACH-Beratungen · Pilotplätze werden kuratiert",
    success:
      "Danke. Bitte bestätigen Sie den Link in Ihrer E-Mail.",
  } satisfies HomepageWaitlist,
} as const;
