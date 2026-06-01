export type Founder = {
  name: string;
  role: string;
  focus: string;
  image: {
    src: string;
    alt: string;
  };
};

export type ProofStat = {
  value: string;
  label: string;
  detail: string;
};

export const aboutContent = {
  hero: {
    overline: "ÜBER CONSULTRY",
    title:
      "Wir bauen, was uns als Berater gefehlt hat.",
    body:
      "Drei Berliner Gründer. Consulting, Security, Produkt. Consultry ist die Arbeitsebene zwischen CRM und Delivery, die wir am eigenen Freitagabend vermisst haben. Kein weiteres Tool daneben.",
  },
  team: {
    overline: "DAS TEAM",
    title: "Drei Gründer. Ein Betriebsverständnis.",
    body:
      "Beratung, AI-Architektur und Produktarbeit an einem Tisch. Wir wissen aus erster Hand, wo Tool und Alltag auseinanderlaufen. Consultry schließt genau diese Lücke.",
    members: [
      {
        name: "Julian Weber",
        role: "Co-Founder · CTO/CISO",
        focus:
          "Baut die AI-native Architektur. Tenant-Isolation, erklärbare Empfehlungen, lokale Open-Source-Modelle in der EU. Eine Plattform, die auch bei 200 Beratern ruhig bleibt.",
        image: {
          src: "/images/team-julian.png",
          alt: "Porträt von Julian Weber",
        },
      },
      {
        name: "Caspar Hertel",
        role: "Co-Founder · CEO",
        focus:
          "Spricht täglich mit Managing Partnern und BD-Leitern. Verantwortet Positionierung und Go-to-Market. Führt die Gespräche, aus denen Pilotkunden werden.",
        image: {
          src: "/images/team-caspar.png",
          alt: "Porträt von Caspar Hertel",
        },
      },
      {
        name: "Paul Hannemann",
        role: "Co-Founder · CPO",
        focus:
          "Übersetzt Beratungslogik in Produkt. Consultry denkt nach Mandat, Team und Delivery. Nicht nach CRM, Ticket oder Tabelle.",
        image: {
          src: "/images/team-paul.png",
          alt: "Porträt von Paul Hannemann",
        },
      },
    ] satisfies Founder[],
  },
  narrative: {
    overline: "UNSERE GESCHICHTE",
    title: "Ein System, das nach Beratungslogik denkt.",
    paragraphs: [
      "Wir haben Consultry begonnen, weil wir dieselbe Szene zu oft gesehen haben. Freitag, 18 Uhr, Managing Partner, 14 offene Tabs. Salesforce für die Pipeline. Excel für das Staffing. PowerPoint für das Angebot. Confluence für die Methodik. Und am Ende entscheidet das Bauchgefühl, weil niemand mehr alles zusammenbringt.",
      "In DACH-Beratungen zwischen 30 und 200 Beratern liegt der größte Hebel nicht in mehr Software. Er liegt in weniger Brüchen. Rund 80 Prozent des Umsatzes kommen aus Bestandskunden. Die stärksten Signale dazu stehen in Newslettern, im Postfach eines Partners und in Ausschreibungen, die niemand rechtzeitig sieht.",
      "Consultry ist die Arbeitsebene dazwischen. Signal, Team, Angebot, Delivery und Wissensrückfluss laufen in einer Logik. AI ist kein Knopf, sondern das Interaktionsprinzip. Sie sagen, was Sie brauchen. Das System bereitet vor. Sie entscheiden.",
      "Wir sind im Pre-Launch und bauen mit einer kleinen Zahl Pilotkunden aus dem DACH-Raum. Wenn Sie eine Beratung mit 30 bis 200 Beratern führen und Consultry mitgestalten wollen, sprechen Sie mit uns.",
    ],
    proofRail: [
      {
        value: "3",
        label: "Gründer aus Berlin",
        detail: "Consulting, Security und Produkt in einer Gründungsstory",
      },
      {
        value: "DACH",
        label: "Fokus",
        detail: "Sprache, Marktlogik, BetrVG, DSGVO und AI Act von Anfang an",
      },
      {
        value: "EU",
        label: "Hosting",
        detail: "Tenant-isoliert, auf lokalen Open-Source-Modellen. Keine Umwege über US-Clouds.",
      },
      {
        value: "Pre-Launch",
        label: "Status",
        detail: "Pilotplätze werden kuratiert. Warteliste ist offen.",
      },
    ] satisfies ProofStat[],
  },
  cta: {
    eyebrow: "NÄCHSTER SCHRITT",
    title: "Dabei sein, wenn Consultry live geht?",
    body:
      "E-Mail eintragen, Launch-Info als Erste erhalten. Pilot-Interesse im Qualifier ankreuzen. Wir melden uns binnen 48 Stunden direkt aus dem Gründerteam.",
    primaryCta: {
      label: "Auf die Warteliste",
      href: "/warteliste",
    },
  },
} as const;
