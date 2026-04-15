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
  title: "Consultry | AI-native Operating System fuer DACH-Beratungen",
  description:
    "Consultry verbindet Bestandskundenwachstum, Staffing, Forecasting, Wissenswiederverwendung und Delivery Control in einem AI-nativen Operating System fuer DACH-IT- und Digitalisierungsberatungen.",
  keywords: [
    "AI-native Operating System fuer Beratungen",
    "Software fuer Beratungsunternehmen",
    "Consulting Plattform DACH",
    "operatives System Beratung",
    "Consulting Software fuer IT- und Digitalisierungsberatungen",
    "Bestandskundenwachstum Beratung",
    "Staffing Software Beratung",
    "Forecasting Beratung",
    "Wissensmanagement Beratung",
  ],
} as const;

export const homepageContent = {
  hero: {
    eyebrow: "AI-NATIVE OPERATING SYSTEM FUER DACH-BERATUNGEN",
    title: ["Steuern Sie", "Bestand, Staffing", "und Delivery."],
    body:
      "Erkennen Sie Chancen frueher, besetzen Sie Teams sicherer und halten Sie Delivery in einem System steuerbar.",
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
      alt: "Consultry Produktvorschau mit Opportunity-, Staffing- und Delivery-Kontext",
    },
    proofLine: "Erklaerbare Empfehlungen · Menschliche Freigaben · Audit Trail by default",
    sideCards: [
      {
        title: "Mehr aus Bestandskunden machen",
        body:
          "Trigger, Warm Paths und Folgeprojekte werden sichtbar, bevor Chancen intern verloren gehen.",
      },
      {
        title: "Wissen im System halten",
        body:
          "Referenzen, Methoden und Lessons Learned fliessen zurueck in den naechsten Pitch, das naechste Staffing und das naechste Projekt.",
      },
    ],
    metrics: [
      { value: "Bestand", label: "als primaerer Wachstumshebel" },
      { value: "Staffing", label: "mit Forecast- und Teamkontext" },
      { value: "Wissen", label: "wieder nutzbar statt vergessen" },
      { value: "Control", label: "von Opportunity bis Delivery" },
    ],
  },
  answers: [
    {
      question: "Was ist Consultry in einem Satz?",
      answer:
        "Consultry ist das AI-native Operating System fuer DACH-IT- und Digitalisierungsberatungen, das Bestandskundenwachstum, Staffing, Angebotsarbeit, Wissenswiederverwendung und Delivery Control verbindet.",
      href: "/produkt",
      linkLabel: "Zur Produktseite",
    },
    {
      question: "Fuer wen ist Consultry gebaut?",
      answer:
        "Der Fokus liegt auf DACH-Beratungen mit etwa 30 bis 200 Mitarbeitenden, die Folgegeschaeft, Teamsteuerung und Projektwissen nicht laenger ueber getrennte Tools organisieren wollen.",
      href: "/unternehmen",
      linkLabel: "Mehr zum DACH-Fokus",
    },
    {
      question: "Warum nicht einfach ein Standard-CRM?",
      answer:
        "Weil Beratungsarbeit nicht bei Pipeline endet. Das eigentliche Problem liegt zwischen Opportunity, Team, Proposal, Delivery und Commercial Control.",
      href: "/produkt/consultry-vs-crm",
      linkLabel: "Zum Vergleich",
    },
  ] satisfies HomepageAnswer[],
  steps: [
    {
      id: "account-growth",
      stepLabel: "[01]",
      stepperLabel: "Account Growth",
      eyebrow: "ACCOUNT GROWTH",
      title: "Chancen im Bestand frueher erkennen",
      body:
        "Consultry verdichtet Stakeholder-Wechsel, Ausschreibungen, Hiring, Marktbewegungen und bestehenden Account-Kontext zu priorisierten Chancen. Mit Beziehungspfaden, Begruendung und naechster Handlung statt blossem Newsfeed.",
      ctaLabel: "Mehr zu Bestandskundenwachstum",
      image: {
        src: "/images/figma/step-signal.png",
        alt: "Signal Intelligence Feed mit priorisierten Marktchancen",
      },
      caption:
        "Priorisierte Signale mit Match-Logik, Warm Paths und direktem Einstieg in die Opportunity.",
    },
    {
      id: "staffing-forecasting",
      stepLabel: "[02]",
      stepperLabel: "Staffing & Forecasting",
      eyebrow: "STAFFING & FORECASTING",
      title: "Teams besser besetzen und Kapazitaeten frueher sehen",
      body:
        "Projektanforderungen, Skills, Projekterfahrung, Verfuegbarkeit und Teamkontext fliessen in nachvollziehbare Staffing-Vorschlaege ein. Gleichzeitig entsteht ein realistischeres Bild von Auslastung, Engpaessen und kommendem Leerlauf.",
      ctaLabel: "Mehr zu Staffing und Forecasting",
      image: {
        src: "/images/figma/step-matching.png",
        alt: "Staffing und Forecasting Ansicht mit Team-Vorschlaegen",
      },
      caption:
        "Teamvarianten mit Match-Score, Verfuegbarkeit, Projekterfahrung und Forecast-Kontext.",
      flipped: true,
    },
    {
      id: "proposal-workflow",
      stepLabel: "[03]",
      stepperLabel: "Proposal Workflow",
      eyebrow: "PROPOSAL WORKFLOW",
      title: "Angebote schneller erstellen",
      body:
        "Aus Opportunity, Teamvorschlag und vorhandenem Beratungswissen entstehen Engagement Briefs, CVs, Proposal-Drafts und Entscheidungsgrundlagen. Keine Copy-Paste-Kette ueber Dokumente, Postfaecher und Bauchgefuehl.",
      ctaLabel: "Mehr zum Proposal Workflow",
      image: {
        src: "/images/figma/step-delivery.png",
        alt: "Proposal Workflow mit Angebotsentwurf und Teamkontext",
      },
      caption:
        "Von der qualifizierten Chance zum belastbaren Angebotsentwurf in einem Workflow.",
    },
    {
      id: "knowledge-reuse",
      stepLabel: "[04]",
      stepperLabel: "Knowledge Reuse",
      eyebrow: "KNOWLEDGE REUSE",
      title: "Projektwissen in den naechsten Deal fuehren",
      body:
        "Delivery Health, Scope-Risiken, Kostenbezug und Lessons Learned laufen in derselben Arbeitsebene zusammen. So wird Projektwissen nicht archiviert, sondern im naechsten Deal und in der naechsten Besetzung wieder nutzbar.",
      ctaLabel: "Mehr zu Wissenswiederverwendung",
      image: {
        src: "/images/figma/step-knowledge.png",
        alt: "Knowledge Hub mit Beratungswissen und Referenzen",
      },
      caption:
        "Wissensbausteine, Referenzen und Learnings tauchen dort wieder auf, wo sie Umsatz und Delivery verbessern.",
      flipped: true,
    },
  ] satisfies HomepageStep[],
  internalLinks: [
    {
      href: "/produkt/account-growth",
      label: "Bestandskundenwachstum",
      body:
        "Wie Consultry Trigger, Warm Paths und Folgeprojekte im DACH-Consulting sichtbar macht.",
    },
    {
      href: "/produkt/staffing-forecasting",
      label: "Staffing und Forecasting",
      body:
        "Wie Skills, Verfuegbarkeit und Teamlogik zu belastbareren Staffing-Entscheidungen werden.",
    },
    {
      href: "/produkt/knowledge-reuse",
      label: "Knowledge Reuse",
      body:
        "Wie Projektwissen wieder im Pitch, Staffing und Delivery auftaucht statt im Archiv zu enden.",
    },
    {
      href: "/produkt/commercial-control",
      label: "Commercial Control",
      body:
        "Wie Delivery, Kostenbezug und Billing Prep in einer operativen Steuerung zusammenlaufen.",
    },
    {
      href: "/produkt/consultry-vs-crm",
      label: "Consultry vs. Standard-CRM",
      body:
        "Warum Beratungen mehr brauchen als ein System fuer Kontakte, Pipeline und Reporting.",
    },
  ] satisfies HomepageLinkCard[],
  metrics: [
    {
      value: "Frueher",
      label: "Folgegeschaeft erkennen",
      body:
        "Weil Bestandskunden-Signale, Stakeholder-Kontext und naechste Chancen nicht mehr verstreut liegen.",
    },
    {
      value: "Belastbarer",
      label: "Staffing und Forecasting",
      body:
        "Weil Verfuegbarkeit, Skills und Projektrealitaet in einer gemeinsamen Steuerungslogik zusammenlaufen.",
    },
    {
      value: "Weniger",
      label: "Wissensverlust",
      body:
        "Weil Referenzen, Methoden und Lessons Learned im operativen Flow wieder auftauchen.",
    },
    {
      value: "Schneller",
      label: "von Chance zu Angebot",
      body:
        "Weil Briefing, Team, CVs und Proposal nicht mehr separat zusammengesucht werden muessen.",
    },
  ] satisfies HomepageMetric[],
  waitlist: {
    eyebrow: "WARTELISTE",
    title: "Sichern Sie sich fruehen Zugang zu Consultry",
    body:
      "Tragen Sie sich ein, wenn Sie Bestandskundenwachstum, Staffing, Wissen und Angebote nicht mehr ueber Excel und isolierte Tools steuern wollen.",
    placeholder: "Ihre geschaeftliche E-Mail-Adresse",
    buttonLabel: "Auf die Warteliste",
    trustLine:
      "Double-Opt-in · Exklusiv fuer DACH-Beratungen · Begrenzte Pilotplaetze",
    success: "Danke. Bitte bestaetigen Sie jetzt noch Ihre Anmeldung per E-Mail.",
  } satisfies HomepageWaitlist,
} as const;
