import type { ComparisonTableContent } from "@/lib/content/de/product";

export type WedgeSlug =
  | "account-growth"
  | "staffing-forecasting"
  | "knowledge-reuse"
  | "commercial-control"
  | "consultry-vs-crm";

export type WedgeContent = {
  slug: WedgeSlug;
  overline: string;
  title: string;
  description: string;
  keywords: string[];
  introAnswer: string;
  keyTakeaways: string[];
  sections: Array<{
    title: string;
    body: string;
    bullets?: string[];
  }>;
  faqBlocks: Array<{
    question: string;
    answer: string;
  }>;
  internalLinks: Array<{
    href: string;
    label: string;
    body: string;
    image?: {
      src: string;
      alt: string;
      objectPosition?: string;
    };
  }>;
  comparisonTable?: ComparisonTableContent;
};

const sharedInternalLinks = {
  growth: {
    href: "/produkt/account-growth",
    label: "Bestandskundenwachstum",
    body:
      "Wie Trigger, Warm Paths und Folgeprojekte in einen operativen Growth-Workflow uebersetzt werden.",
  },
  staffing: {
    href: "/produkt/staffing-forecasting",
    label: "Staffing und Forecasting",
    body:
      "Wie Skills, Verfuegbarkeit und Delivery-Realitaet zu belastbareren Staffing-Entscheidungen werden.",
  },
  knowledge: {
    href: "/produkt/knowledge-reuse",
    label: "Knowledge Reuse",
    body:
      "Wie Referenzen, Methoden und Projektwissen wieder nutzbar werden statt verstreut zu bleiben.",
  },
  commercial: {
    href: "/produkt/commercial-control",
    label: "Commercial Control",
    body:
      "Wie Delivery, Kostenbezug und Invoice Prep in einer operativen Sicht zusammenlaufen.",
  },
  comparison: {
    href: "/produkt/consultry-vs-crm",
    label: "Consultry vs. Standard-CRM",
    body:
      "Warum ein Standard-CRM die eigentliche Wertschoepfungslogik von Beratungen nicht sauber abbildet.",
  },
} as const;

export const wedgeContent: Record<WedgeSlug, WedgeContent> = {
  "account-growth": {
    slug: "account-growth",
    overline: "BESTANDSKUNDENWACHSTUM",
    title: "Wie hilft Consultry Beratungen, mehr aus Bestandskunden zu machen?",
    description:
      "Consultry verdichtet Trigger, Stakeholder-Kontext und Warm Paths zu operativ nutzbaren Chancen fuer DACH-Beratungen.",
    keywords: [
      "Bestandskundenwachstum Beratung",
      "Opportunity Management Beratung",
      "Account Expansion Beratung",
      "Warm Paths Beratung",
    ],
    introAnswer:
      "Consultry hilft Beratungen, mehr aus Bestandskunden zu machen, indem relevante Trigger, Stakeholder-Wechsel, Warm Paths und Folgeprojekt-Signale in priorisierte Chancen uebersetzt werden. Wachstum beginnt damit nicht bei generischem Outbound, sondern im bestehenden Kundenkontext.",
    keyTakeaways: [
      "Bestandskunden sind im DACH-Consulting haeufig der staerkere Wachstumshebel als generische Neukundenakquise.",
      "Entscheidend ist nicht nur ein Lead, sondern ein belastbarer Bedarfskontext mit Zugang, Timing und Teamfit.",
      "Consultry macht aus Signalen eine bearbeitbare Opportunity statt einen weiteren Recherche-Task.",
      "Engagement Briefs und Folgeaktionen entstehen aus demselben Kontext wie der Trigger selbst.",
    ],
    sections: [
      {
        title: "Warum ist Bestandskundenwachstum fuer Beratungen so zentral?",
        body:
          "In vielen DACH-Beratungen entsteht der groesste Teil des Umsatzes aus bestehenden Kundenbeziehungen. Genau dort gehen aber viele Chancen verloren, weil Stakeholder-Wechsel, Hiring-Signale, Ausschreibungen und Folgeprojekte nicht als zusammenhaengendes Opportunity-Signal sichtbar werden.",
      },
      {
        title: "Welche Signale wertet Consultry aus?",
        body:
          "Consultry verbindet Account-Kontext mit Triggern aus Markt- und Kundensignalen. Der Fokus liegt auf Signalen, die im Beratungsalltag wirklich Handlung erzeugen.",
        bullets: [
          "Stakeholder-Wechsel und neue Entscheidungsstrukturen",
          "Hiring-Signale und organisatorische Ausbauplaene",
          "Ausschreibungen und formale Bedarfsindikatoren",
          "Marktveraenderungen, die zu Folgeprojekten fuehren",
        ],
      },
      {
        title: "Was entsteht aus einem Signal operativ?",
        body:
          "Consultry erzeugt aus einem Signal keinen isolierten Datensatz, sondern eine bewertbare Opportunity-Grundlage. Dazu gehoeren Kontext, Warm Paths, erste Bedarfshypothesen und der Einstieg in Briefing, Staffing und Proposal.",
      },
      {
        title: "Warum ist das mehr als Market Intelligence?",
        body:
          "Weil der Wert nicht im Monitoring liegt, sondern in der Uebersetzung von Signal zu handlungsfaehiger Opportunity. Genau diese Verbindung fehlt in generischen CRM- oder Lead-Tools meist.",
      },
    ],
    faqBlocks: [
      {
        question: "Was ist der Unterschied zwischen Signal und Opportunity?",
        answer:
          "Ein Signal ist ein Hinweis. Eine Opportunity ist ein bearbeitbarer Kontext mit Bedarf, Priorisierung, Beziehungspfad und naechstem Schritt.",
      },
      {
        question: "Funktioniert das nur fuer Neukunden?",
        answer:
          "Nein. Der primaere Fokus liegt auf Bestandskunden, Folgeprojekten und Warm Paths innerhalb bestehender Kundenbeziehungen.",
      },
      {
        question: "Warum ist das fuer DACH-Beratungen besonders relevant?",
        answer:
          "Weil Folgegeschaeft, Referenzlogik und bestehende Beziehungen in DACH oft der realistischere Wachstumshebel sind als generischer Outbound.",
      },
    ],
    internalLinks: [
      sharedInternalLinks.staffing,
      sharedInternalLinks.knowledge,
      sharedInternalLinks.commercial,
    ],
  },
  "staffing-forecasting": {
    slug: "staffing-forecasting",
    overline: "STAFFING & FORECASTING",
    title: "Wie verbessert Consultry Staffing und Forecasting in Beratungen?",
    description:
      "Consultry verbindet Skills, Projekterfahrung, Verfuegbarkeit und Teamkontext zu belastbareren Staffing- und Forecasting-Entscheidungen in Beratungen.",
    keywords: [
      "Staffing Software Beratung",
      "Berater Matching Software",
      "Forecasting Beratung",
      "Kapazitaetsplanung Beratung",
    ],
    introAnswer:
      "Consultry verbessert Staffing und Forecasting, indem Projektanforderungen, Skills, Verfuegbarkeit, Teamkontext und Delivery-Realitaet in einer gemeinsamen Steuerungslogik zusammenlaufen. So entstehen belastbarere Besetzungsentscheidungen und fruehere Hinweise auf Engpaesse oder Leerlauf.",
    keyTakeaways: [
      "Staffing wird nicht nur ueber freie Kalenderplaetze, sondern ueber Teamfit, Erfahrung und Lieferfaehigkeit gedacht.",
      "Forecasting wird belastbarer, wenn Opportunity-Pipeline und reale Teamverfuegbarkeit verbunden werden.",
      "Skill-Gaps und Engpaesse werden frueher sichtbar.",
      "Das Ziel ist bessere operative Steuerung, nicht Black-Box-Ranking von Personen.",
    ],
    sections: [
      {
        title: "Warum scheitert Staffing oft an Tool-Grenzen?",
        body:
          "In vielen Beratungen liegen Skills in CVs, Verfuegbarkeit in Kalendern, Delivery-Risiken in Koepfen und Pipeline-Wahrscheinlichkeiten in CRM-Feldern. Solange diese Ebenen nicht verbunden sind, bleibt Staffing reaktiv.",
      },
      {
        title: "Welche Faktoren fliessen in das Matching ein?",
        body:
          "Consultry bewertet Besetzungsoptionen nicht nur ueber Keywords oder einfache Skill-Treffer, sondern ueber mehrere operative Dimensionen.",
        bullets: [
          "Projektanforderungen und fachlicher Scope",
          "Skill-Niveau und relevante Projekterfahrung",
          "Verfuegbarkeit und Teamueberschneidungen",
          "Teamkontext, Delivery-Risiko und kommerzielle Plausibilitaet",
        ],
      },
      {
        title: "Was bedeutet Forecasting im Produktkontext?",
        body:
          "Forecasting in Consultry bedeutet, kommende Nachfrage, Teamkapazitaet und Besetzungslogik frueher zusammenzusehen. Das hilft, Engpaesse, Leerstand und unrealistische Zusagen frueher zu erkennen.",
      },
      {
        title: "Wie bleibt das DACH-konform?",
        body:
          "Das Produkt setzt auf erklaerbare Empfehlungen, aggregierte Standardsichten und kontrollierte Nutzung personenbezogener Daten. Ziel ist operative Steuerung, nicht intransparente Personenbewertung.",
      },
    ],
    faqBlocks: [
      {
        question: "Ist das einfach ein Skill-Matching-Tool?",
        answer:
          "Nein. Consultry verbindet Skill-Logik mit Verfuegbarkeit, Teamkontext, Pipeline und Delivery-Realitaet.",
      },
      {
        question: "Hilft das nur beim Staffing oder auch im Forecast?",
        answer:
          "Beides. Staffing und Forecasting profitieren gemeinsam, weil dieselben Datenpunkte in einer Steuerungslogik zusammenlaufen.",
      },
      {
        question: "Koennen damit auch Skill-Gaps sichtbar werden?",
        answer:
          "Ja. Gerade in Kombination mit Opportunity-Pipeline und Delivery-Kontext werden fehlende Kapazitaeten oder Know-how-Luecken frueher erkennbar.",
      },
    ],
    internalLinks: [
      sharedInternalLinks.growth,
      sharedInternalLinks.knowledge,
      sharedInternalLinks.commercial,
    ],
  },
  "knowledge-reuse": {
    slug: "knowledge-reuse",
    overline: "KNOWLEDGE REUSE",
    title: "Wie reduziert Consultry Wissensverlust und macht Projektwissen nutzbar?",
    description:
      "Consultry macht Referenzen, Methoden, Lessons Learned und Delivery-Kontext im Pitch-, Staffing- und Delivery-Flow wieder nutzbar.",
    keywords: [
      "Wissensmanagement Beratung",
      "Wissenstransfer Consulting",
      "Projektwissen Beratung",
      "Knowledge Reuse Consulting",
    ],
    introAnswer:
      "Consultry reduziert Wissensverlust, indem Referenzen, Methoden, Lessons Learned und Projekterfahrung nicht im Archiv verschwinden, sondern in Opportunity, Staffing, Proposal und Delivery wieder auftauchen. Wissen wird damit operativ nutzbar statt nur dokumentiert.",
    keyTakeaways: [
      "Das Problem in Beratungen ist selten fehlende Dokumentation, sondern fehlende Wiederverwendung im richtigen Moment.",
      "Projektwissen muss im naechsten Pitch, Staffing und Delivery wieder erscheinen koennen.",
      "Knowledge Reuse ist ein Umsatz- und Delivery-Thema, nicht nur ein Wiki-Thema.",
      "Quellengebundene Inhalte schaffen Vertrauen und Nachvollziehbarkeit.",
    ],
    sections: [
      {
        title: "Warum reicht ein klassisches Wiki nicht aus?",
        body:
          "Weil Wissen in Beratungen nur dann Wert erzeugt, wenn es dort auftaucht, wo Entscheidungen getroffen werden: im Pitch, beim Staffing, im Delivery-Risiko und in der Wiederverwendung von Referenzen und Methoden.",
      },
      {
        title: "Welche Inhalte werden wiederverwendbar?",
        body:
          "Consultry strukturiert nicht nur Dokumente, sondern konkrete operative Wissensbausteine.",
        bullets: [
          "Referenzen und Projektbeispiele",
          "Methoden, Templates und Playbooks",
          "Lessons Learned und Delivery-Erfahrungen",
          "Kompetenz- und Projekterfahrung einzelner Teams",
        ],
      },
      {
        title: "Wie taucht Wissen im Workflow wieder auf?",
        body:
          "Im Opportunity- und Proposal-Kontext erscheinen relevante Referenzen und Methoden. Im Staffing-Kontext erscheint passende Projekterfahrung. In Delivery-Kontexten erscheinen Lessons Learned und bekannte Risikoindikatoren.",
      },
      {
        title: "Warum ist das ein eigener Wedge?",
        body:
          "Weil Wissensverlust in Beratungen direkt auf Angebotsgeschwindigkeit, Teamqualitaet, Onboarding und Delivery-Wiederholbarkeit einzahlt. Knowledge Reuse ist kein Add-on, sondern ein operativer Hebel.",
      },
    ],
    faqBlocks: [
      {
        question: "Ist Consultry ein Wissensmanagement-Tool?",
        answer:
          "Nicht primaer. Consultry nutzt Wissenswiederverwendung als operativen Hebel fuer Opportunity, Staffing, Proposal und Delivery.",
      },
      {
        question: "Welche Rolle spielen Quellen?",
        answer:
          "Quellen sind wichtig fuer Vertrauen. Inhalte sollen nachvollziehbar, tenant-isoliert und versionierbar bleiben.",
      },
      {
        question: "Hilft das auch beim Onboarding neuer Berater?",
        answer:
          "Ja. Wiederverwendbares Wissen reduziert nicht nur Angebotsaufwand, sondern auch die Anlaufzeit in Delivery und Enablement.",
      },
    ],
    internalLinks: [
      sharedInternalLinks.growth,
      sharedInternalLinks.staffing,
      sharedInternalLinks.commercial,
    ],
  },
  "commercial-control": {
    slug: "commercial-control",
    overline: "COMMERCIAL CONTROL",
    title: "Wie verbindet Consultry Delivery mit Commercial Control?",
    description:
      "Consultry verbindet Delivery Health, Kostenbezug, Billing Prep und kommerzielle Sicht in einem operativen Workflow fuer Beratungen.",
    keywords: [
      "Commercial Control Beratung",
      "Delivery Control Beratung",
      "Billing Prep Beratung",
      "Margensteuerung Beratung",
    ],
    introAnswer:
      "Consultry verbindet Delivery mit Commercial Control, indem Projektstatus, Risikoindikatoren, Kostenbezug und Billing Prep nicht in separaten Tools enden. So werden Abweichungen frueher sichtbar und operativ bearbeitbar, bevor Marge oder Kundenvertrauen leiden.",
    keyTakeaways: [
      "Delivery und Commercial Control gehoeren in Beratungen zusammen, nicht in getrennte Reports.",
      "Fruehe Sicht auf Risiko, Scope und Kostenbezug verbessert Steuerung und Marge.",
      "Billing Prep ist Teil der operativen Kette, nicht nur ein Backoffice-Endpunkt.",
      "Das Ziel ist keine Buchhaltungssoftware, sondern eine bessere kommerzielle Transparenz im Delivery-Flow.",
    ],
    sections: [
      {
        title: "Warum reicht ein reines Projekt-Dashboard nicht aus?",
        body:
          "Weil Projektstatus ohne kommerziellen Bezug zu spaet ist. In Beratungen zaehlen nicht nur Milestones, sondern auch Scope-Risiken, Auslastung, Fremdleistungen und saubere Rechnungsnahe.",
      },
      {
        title: "Was umfasst Commercial Control im Produkt?",
        body:
          "Commercial Control in Consultry bleibt nah am Projekt und fokussiert die operative Sicht, nicht die vollstaendige Buchhaltung.",
        bullets: [
          "Kostenbezug und Rebilling-nahe Transparenz",
          "Risikoindikatoren und Scope-Abweichungen",
          "Delivery Health mit kommerziellem Kontext",
          "Invoice-Ready Vorbereitung fuer nachgelagerte Systeme",
        ],
      },
      {
        title: "Wie zahlt das auf bessere Steuerung ein?",
        body:
          "Wenn Projektteams frueher sehen, wo Scope, Aufwand oder Kostenlogik kippen, wird Commercial Control vom spaeten Reporting zur fruehen Gegensteuerung.",
      },
      {
        title: "Wo endet Consultry und wo beginnt ERP/Buchhaltung?",
        body:
          "Consultry ersetzt nicht blind ERP oder Buchhaltung. Die Plattform schliesst die Luecke zwischen Opportunity, Staffing, Delivery und invoice-naher Vorbereitung.",
      },
    ],
    faqBlocks: [
      {
        question: "Ist Consultry ein ERP oder Billing-System?",
        answer:
          "Nein. Consultry fokussiert die operative Steuerung zwischen Projektarbeit, Kostenbezug und invoice-naher Vorbereitung.",
      },
      {
        question: "Warum ist Commercial Control fuer Beratungen ein Wedge?",
        answer:
          "Weil Marge und Vertrauen oft dort verloren gehen, wo Delivery-Risiken zu spaet mit kommerziellen Auswirkungen verbunden werden.",
      },
      {
        question: "Kann das mit bestehenden Systemen zusammenspielen?",
        answer:
          "Ja. Der Produktschwerpunkt liegt auf Integration und Lueckenschluss, nicht auf blindem Ersatz bestehender Systeme.",
      },
    ],
    internalLinks: [
      sharedInternalLinks.growth,
      sharedInternalLinks.staffing,
      sharedInternalLinks.knowledge,
    ],
  },
  "consultry-vs-crm": {
    slug: "consultry-vs-crm",
    overline: "CONSULTRY VS. STANDARD-CRM",
    title: "Warum reicht ein Standard-CRM fuer Beratungsarbeit nicht aus?",
    description:
      "Consultry vergleicht sich mit Standard-CRMs aus Sicht von Beratungen: Opportunity, Team, Proposal, Delivery und Commercial Control in einem System.",
    keywords: [
      "Salesforce Alternative Beratung",
      "CRM fuer Beratungen Alternative",
      "Standard CRM fuer Beratungen",
      "PSA vs Consulting Operating System",
    ],
    introAnswer:
      "Ein Standard-CRM reicht fuer Beratungsarbeit nicht aus, weil der eigentliche operative Wert nicht in Kontaktpflege und Pipeline endet. Beratungen muessen Opportunity, Team, Proposal, Delivery, Wissen und Commercial Control gemeinsam steuern koennen.",
    keyTakeaways: [
      "CRMs dokumentieren Vertrieb, aber nicht die Uebersetzung von Bedarf zu Team und Delivery.",
      "Beratungen brauchen eine Demand- und Supply-Verbindung, nicht nur eine Deal-Liste.",
      "Knowledge Reuse, Staffing und Commercial Control sind keine Randfunktionen, sondern Teil der Wertschoepfung.",
      "Consultry positioniert sich nicht als generisches CRM, sondern als Operating System fuer Beratungen.",
    ],
    sections: [
      {
        title: "Welche Luecke lassen Standard-CRMs offen?",
        body:
          "Sie erfassen Kontakte, Deals und Aktivitaeten, bilden aber die eigentliche Beratungslogik nicht durchgaengig ab: Wer liefert, warum dieses Team, welche Referenzen passen, welche Risiken entstehen und was fliesst aus Delivery wieder in den naechsten Deal zurueck.",
      },
      {
        title: "Warum ist das fuer Beratungen besonders problematisch?",
        body:
          "Weil Beratungen nicht nur verkaufen, sondern Expertise, Teamkonstellation, Delivery-Qualitaet und kommerzielle Plausibilitaet gleichzeitig verkaufen. Genau diese Verbindung fehlt in generischen CRMs.",
      },
      {
        title: "Wie positioniert sich Consultry statt eines CRM-Narrativs?",
        body:
          "Consultry ist ein AI-native Operating System fuer DACH-Beratungen. CRM-Funktionalitaet wird dort abgedeckt, wo sie noetig ist, aber nicht als Selbstzweck oder Hauptstory.",
      },
      {
        title: "Wann ist ein Vergleich besonders relevant?",
        body:
          "Wenn Beratungen zwischen CRM, Excel, Dokumenten, Staffing-Listen und Delivery-Reports staendig Kontext verlieren und trotzdem Wachstum, Auslastung und Marge gleichzeitig verbessern wollen.",
      },
    ],
    faqBlocks: [
      {
        question: "Will Consultry jedes CRM ersetzen?",
        answer:
          "Nicht blind. Consultry schliesst zuerst die operative Luecke zwischen CRM, Teamsteuerung, Proposal, Delivery und Wissen.",
      },
      {
        question: "Ist Consultry eher CRM, PSA oder Wissenssystem?",
        answer:
          "Keines davon isoliert. Die Plattform verbindet diese Logiken in einem Operating System fuer Beratungsarbeit.",
      },
      {
        question: "Warum ist das fuer DACH-Beratungen relevant?",
        answer:
          "Weil Bestandskundengeschaeft, Staffing-Druck, Delivery-Risiken und Compliance-Anforderungen in DACH besonders stark auf saubere operative Steuerung einzahlen.",
      },
    ],
    internalLinks: [
      sharedInternalLinks.growth,
      sharedInternalLinks.staffing,
      sharedInternalLinks.knowledge,
      sharedInternalLinks.commercial,
    ],
    comparisonTable: {
      overline: "VERGLEICH",
      title: "Was Consultry anders aufsetzt",
      body:
        "Der Vergleich fokussiert nicht Features um ihrer selbst willen, sondern die operative Logik, die Beratungen im Tagesgeschaeft wirklich brauchen.",
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
      ],
    },
  },
};

export const wedgeSlugs = Object.keys(wedgeContent) as WedgeSlug[];
