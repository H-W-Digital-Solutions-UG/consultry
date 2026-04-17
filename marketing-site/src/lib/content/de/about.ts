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
      "Wir bauen den operativen AI-Begleiter für Beratungen, den wir selbst gebraucht hätten.",
    body:
      "Drei Gründer aus Berlin. Consulting, Security, Produkt. Wir kennen die Schmerzpunkte aus der Praxis — und wir bauen das System, das Beratungen wirklich steuert, nicht noch ein Tool daneben.",
  },
  team: {
    overline: "DAS TEAM",
    title: "Drei Gründer. Ein Betriebsverständnis.",
    body:
      "Hinter Consultry steht ein Team, das Beratung, AI-Architektur und Produktarbeit zusammenbringt — und seit Jahren selbst erlebt, wo die Lücke zwischen Tool und Alltag liegt.",
    members: [
      {
        name: "Julian Weber",
        role: "Co-Founder · CTO/CISO",
        focus:
          "Baut die AI-native Architektur. Security by Design, erklärbare Empfehlungen und eine Plattform, die auch bei 200 Beratern stabil bleibt.",
        image: {
          src: "/images/team-julian.png",
          alt: "Porträt von Julian Weber",
        },
      },
      {
        name: "Caspar Hertel",
        role: "Co-Founder · CEO",
        focus:
          "Spricht täglich mit Managing Partnern und BD-Leitern. Verantwortet Positionierung, Go-to-Market und die Gespräche, aus denen Pilotkunden werden.",
        image: {
          src: "/images/team-caspar.png",
          alt: "Porträt von Caspar Hertel",
        },
      },
      {
        name: "Paul Hannemann",
        role: "Co-Founder · CPO",
        focus:
          "Übersetzt Beratungslogik in Produkt. Sorgt dafür, dass Consultry nach Beratung denkt — nicht nach CRM, Ticket-System oder Tabellenkalkulation.",
        image: {
          src: "/images/team-paul.png",
          alt: "Porträt von Paul Hannemann",
        },
      },
    ] satisfies Founder[],
  },
  narrative: {
    overline: "UNSERE GESCHICHTE",
    title: "Beratungen verdienen ein System, das ihre Logik kennt.",
    paragraphs: [
      "Wir haben Consultry begonnen, weil wir die gleiche Szene zu oft gesehen haben: Freitagnachmittag, Managing Partner, 14 offene Tabs. Salesforce für die Pipeline. Excel für das Staffing. PowerPoint für das Angebot. Confluence für die Methodik. Und am Ende entscheidet das Bauchgefühl, weil niemand mehr alles zusammenbringt.",
      "In DACH-Beratungen zwischen 30 und 200 Beratern liegen die größten Hebel nicht in mehr Software, sondern in weniger Brüchen. 80 % des Umsatzes kommt aus Bestandskunden — aber die stärksten Signale dazu stehen in Newslettern, im Postfach eines Partners und in einer Ausschreibung, die niemand rechtzeitig gesehen hat.",
      "Consultry ist die operative Ebene, die wir uns selbst gewünscht haben: Sie verbindet Marktsignal, Team-Matching, Angebot, Delivery und Wissensrückfluss. AI ist dabei kein Knopf, sondern das Interaktionsprinzip. Sie sprechen mit dem System, das System bereitet vor — und Sie entscheiden.",
      "Wir sind im Pre-Launch. Wir bauen gemeinsam mit einer kleinen Zahl Pilotkunden aus dem DACH-Raum. Wenn Sie eine Beratung mit 30 bis 200 Beratern führen und Consultry mitgestalten wollen, sprechen Sie mit uns.",
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
        detail: "Alle Kundendaten bleiben in der EU, kein Workaround nötig",
      },
      {
        value: "Pre-Launch",
        label: "Status",
        detail: "Pilotkunden werden aktuell kuratiert, Warteliste ist offen",
      },
    ] satisfies ProofStat[],
  },
  cta: {
    eyebrow: "NÄCHSTER SCHRITT",
    title: "Sie wollen dabei sein, wenn Consultry live geht?",
    body:
      "Tragen Sie sich auf die Warteliste ein. Sie hören als Erste zum Launch — und wenn Sie Pilotkunde werden wollen, kreuzen Sie es im Formular an. Wir melden uns binnen 48 Stunden direkt.",
    primaryCta: {
      label: "Auf die Warteliste",
      href: "/warteliste",
    },
  },
} as const;
