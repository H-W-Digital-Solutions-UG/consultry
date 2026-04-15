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
    title: "Wir bauen das AI-native Operating System fuer DACH-Beratungen",
    body: "Drei Gruender aus Consulting, Cybersecurity und Programm-Management vereinen ihre Erfahrung in einem operativen System fuer DACH-IT- und Digitalisierungsberatungen.",
  },
  team: {
    overline: "DAS TEAM",
    title: "Gebaut von Praktikern, nicht von Theoretikern",
    body: "Hinter Consultry steht ein Team, das Unternehmensberatung, Deep Tech und die Entwicklung von KI-Agenten zusammenbringt.",
    members: [
      {
        name: "Julian Weber",
        role: "Co-Founder & CTO/CISO",
        focus: "AI-native Architektur, Security-by-Design und Plattformstabilität für Beratungen mit hohen Anforderungen.",
        image: {
          src: "/images/team-julian.png",
          alt: "Portraet von Julian Weber",
        },
      },
      {
        name: "Caspar Hertel",
        role: "Co-Founder & CEO",
        focus: "Positionierung, Go-to-Market und Kundengespräche mit Beratungen im DACH-Markt.",
        image: {
          src: "/images/team-caspar.png",
          alt: "Portraet von Caspar Hertel",
        },
      },
      {
        name: "Paul Hannemann",
        role: "Co-Founder & CPO",
        focus: "Produkt, UX und Workflow-Design, damit Consultry die Beratungslogik wirklich abbildet.",
        image: {
          src: "/images/team-paul.png",
          alt: "Portraet von Paul Hannemann",
        },
      },
    ] satisfies Founder[],
  },
  narrative: {
    overline: "UNSERE GESCHICHTE",
    title: "Beratungen verdienen ein System, das ihre Logik versteht.",
    paragraphs: [
      "Consultry entstand aus einer simplen Beobachtung: Beratungen koordinieren hochkomplexe Arbeit mit Werkzeugen, die nie fuer Beratungslogik gebaut wurden. Marktsignale landen in Newslettern, Staffing in Tabellen, Angebote in PowerPoints und Delivery-Wissen in verstreuten Dokumenten.",
      "Was in der Praxis fehlt, ist kein weiteres Feature und kein neues Add-on fuer ein generisches CRM. Es fehlt eine gemeinsame operative Ebene, die erkennt, was der Markt verlangt, welches Team wirklich passt, wie ein Angebot schneller belastbar wird und wie Projektwissen wieder ins naechste Mandat zurueckfliesst.",
      "Deshalb haben wir Consultry als AI-natives operatives System konzipiert. Nicht AI-angeflanscht, sondern von Grund auf auf Kontext, Zusammenarbeit und Beratungsprozesse ausgelegt. Das System versteht Signale, Teamkonstellationen, Delivery-Risiken und Wissensbausteine als zusammenhaengenden Workflow.",
      "Unser Ziel ist kein lauter Software-Layer ueber bestehenden Prozessen, sondern ein ruhigeres, klareres Betriebssystem fuer moderne Beratungshaeuser im DACH-Raum: weniger Kontextwechsel, bessere operative Entscheidungen und ein Setup, das die Realitaet von Beratung respektiert.",
    ],
    proofRail: [
      {
        value: "3",
        label: "Gruender",
        detail: "aus Consulting, Produkt und Security",
      },
      {
        value: "100 %",
        label: "DACH-Fokus",
        detail: "Sprache, Marktlogik und Compliance",
      },
      {
        value: "EU",
        label: "Hosting",
        detail: "mit Fokus auf DSGVO und kontrollierte Datenverarbeitung",
      },
      {
        value: "B2B",
        label: "Zielgruppe",
        detail: "IT- und Digitalisierungsberatungen im DACH-Raum",
      },
    ] satisfies ProofStat[],
  },
  cta: {
    eyebrow: "NÄCHSTER SCHRITT",
    title: "Bereit fuer fruehen Zugang zu Consultry?",
    body: "Tragen Sie sich auf die Warteliste ein, wenn Sie Folgegeschaeft, Staffing und Delivery nicht laenger ueber isolierte Tools steuern wollen.",
    primaryCta: {
      label: "Auf die Warteliste",
      href: "/warteliste",
    },
  },
} as const;
