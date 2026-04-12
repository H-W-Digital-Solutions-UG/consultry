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

export const homepageSeo = {
  title: "KI-native Plattform fuer DACH-Beratungen",
  description:
    "Consultry ersetzt Salesforce, Excel und LinkedIn-Recherche durch eine KI-native Plattform fuer DACH-Beratungen – von Signal Intelligence ueber Smart Matching bis Delivery Analytics und Knowledge Hub.",
  keywords: [
    "KI Plattform fuer Beratungen",
    "Beratungs CRM",
    "Consulting CRM DACH",
    "Salesforce Alternative Beratung",
    "Smart Matching Berater",
    "Delivery Analytics Beratung",
    "Signal Intelligence Beratung",
  ],
} as const;

export const homepageContent = {
  hero: {
    eyebrow: "DAS KI-NATIVE BERATUNGS-CRM",
    title: ["Vom Signal", "zum Projekt — in", "einer Plattform."],
    body:
      "Consultry ersetzt Salesforce, Excel und LinkedIn-Recherche durch einen KI-nativen Workspace — gebaut für DACH-Beratungen.",
    primaryCta: {
      label: "Frühzugang sichern",
      href: ctaTargets.homepagePrimary,
    },
    secondaryCta: {
      label: "Demo ansehen",
      href: ctaTargets.homepageSecondary,
    },
    image: {
      src: "/images/figma/hero-dashboard.png",
      alt: "Consultry Produktvorschau mit Pipeline Intelligence Dashboard",
    },
    proofLine: "Eine Plattform. Vier Workflows. Null Datensilos.",
    sideCards: [
      {
        title: "Ein Workspace. Null Silos.",
        body:
          "Schluss mit CRM, Excel-Listen und E-Mail-Threads. Pipeline, Matching, Delivery und Knowledge an einem Ort.",
      },
      {
        title: "KI, die Beratung versteht",
        body:
          "Von Signal-Erkennung über Kompetenz-Matching bis zur Angebotserstellung — KI übernimmt die operative Schwerstarbeit.",
      },
    ],
    metrics: [
      { value: "42", label: "Opportunities" },
      { value: "1.8M EUR", label: "Pipeline-Wert" },
      { value: "+26%", label: "vs. Vorquartal" },
      { value: "8", label: "Hot Leads" },
    ],
  },
  steps: [
    {
      id: "signal-intelligence",
      stepLabel: "[01]",
      stepperLabel: "Signal Intelligence",
      eyebrow: "SIGNAL INTELLIGENCE",
      title: "Marktchancen erkennen, bevor der Wettbewerb reagiert",
      body:
        "Consultry aggregiert Signale aus Ausschreibungsportalen, LinkedIn-Aktivitäten, Branchennews und CRM-Interaktionen — und qualifiziert sie automatisch. Ihr BD-Team startet den Tag mit einem priorisierten Signal-Feed.",
      ctaLabel: "Mehr zu Signal Intelligence",
      image: {
        src: "/images/figma/step-signal.png",
        alt: "Signal Intelligence Feed mit priorisierten Marktchancen",
      },
      caption: "Signal-Feed mit Priorisierung, Match-Score und 1-Klick-Opportunity-Erstellung.",
    },
    {
      id: "smart-matching",
      stepLabel: "[02]",
      stepperLabel: "Smart Matching",
      eyebrow: "SMART MATCHING",
      title: "Das perfekte Team — zusammengestellt in Sekunden",
      body:
        "KI-gestütztes Berater-Matching basierend auf Skills, Verfügbarkeit, Kundenpräferenz und Projektanforderungen. Inklusive Margen-Optimierung und Alternativ-Szenarien.",
      ctaLabel: "Mehr zu Smart Matching",
      image: {
        src: "/images/figma/step-matching.png",
        alt: "Smart Matching Ansicht mit Team-Vorschlägen",
      },
      caption: "Team-Konstellation mit Match-Score, Verfuegbarkeit und Margin-Sicht.",
      flipped: true,
    },
    {
      id: "delivery-analytics",
      stepLabel: "[03]",
      stepperLabel: "Delivery Analytics",
      eyebrow: "DELIVERY ANALYTICS",
      title: "Echtzeit-Einblick in jedes Projekt",
      body:
        "Dashboards für Auslastung, Deckungsbeitrag und Projektfortschritt — vom Partner bis zum Consultant. Nie wieder Blindflug bei Marge und Kapazität.",
      ctaLabel: "Mehr zu Delivery Analytics",
      image: {
        src: "/images/figma/step-delivery.png",
        alt: "Delivery Analytics Dashboard mit Echtzeit-KPIs",
      },
      caption: "Projekt-Dashboard mit Health-Score, Budget-Tracking und Risikoanalyse.",
    },
    {
      id: "knowledge-hub",
      stepLabel: "[04]",
      stepperLabel: "Knowledge Hub",
      eyebrow: "KNOWLEDGE HUB",
      title: "Wissen bewahren. Wissen nutzen. Wissen monetarisieren.",
      body:
        "Ihre Wissensdatenbank mit KI-gestützter Suche: Proposals, Frameworks und Best Practices — immer griffbereit. Jedes Projekt füttert automatisch den Knowledge Graph.",
      ctaLabel: "Mehr zu Knowledge Hub",
      image: {
        src: "/images/figma/step-knowledge.png",
        alt: "Knowledge Hub mit Beratungswissen und Proposals",
      },
      caption: "Wissensbausteine, Benchmarks und Referenzen im operativen Zugriff.",
      flipped: true,
    },
  ] satisfies HomepageStep[],
  metrics: [
    {
      value: "70-80%",
      label: "Weniger BD-Recherchezeit",
      body: "Von 25 auf unter 5 Std. pro Woche",
    },
    {
      value: "2x",
      label: "Schnellere Angebotserstellung",
      body: "Von Tagen auf wenige Stunden",
    },
    {
      value: "40-55%",
      label: "Geringere Akquisekosten",
      body: "Pro qualifizierter Opportunity",
    },
    {
      value: "80-90%",
      label: "Berater-Auslastung",
      body: "Statt 60-70% Branchenschnitt",
    },
  ] satisfies HomepageMetric[],
  waitlist: {
    eyebrow: "WAITLIST",
    title: "Bereit, Ihre Beratung auf das naechste Level zu bringen?",
    body:
      "Sehen Sie in 30 Minuten, wie Consultry den Weg vom Signal zum profitablen Projekt verkürzt — mit Ihren echten Daten, Ihrem Team und Ihren Prozessen.",
    placeholder: "Ihre geschäftliche E-Mail-Adresse",
    buttonLabel: "Frühzugang sichern",
    trustLine: "Keine Kreditkarte nötig · Exklusiv für DACH-Beratungen · Begrenzte Plätze",
    success: "Danke. Wir haben Ihre Anfrage für den Frühzugang erhalten.",
  } satisfies HomepageWaitlist,
} as const;
