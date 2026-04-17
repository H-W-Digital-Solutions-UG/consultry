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
    label: "Bestandskunden-Wachstum",
    body:
      "Wie Signal, Warm Path und Engagement-Brief aus 80 % Ihrer Umsatzquelle einen steuerbaren Wachstumspfad machen.",
  },
  staffing: {
    href: "/produkt/staffing-forecasting",
    label: "Staffing und Forecasting",
    body:
      "Wie Skills, Verfügbarkeit und Delivery-Realität drei Team-Varianten mit Begründung liefern. Statt Excel und Bauchgefühl.",
  },
  knowledge: {
    href: "/produkt/knowledge-reuse",
    label: "Wissen, das wieder auftaucht",
    body:
      "Wie Methodik, Referenzen und Lessons Learned im richtigen Moment sichtbar werden. Statt in Confluence zu versanden.",
  },
  commercial: {
    href: "/produkt/commercial-control",
    label: "Delivery und Marge",
    body:
      "Wie Allocation, Kostenbezug und Invoice-Ready-Übergabe in einer operativen Sicht zusammenlaufen.",
  },
  comparison: {
    href: "/produkt/consultry-vs-crm",
    label: "Consultry vs. CRM",
    body:
      "Warum ein CRM die Wertschöpfungslogik einer Beratung nicht abbilden kann. Und was stattdessen gebraucht wird.",
  },
} as const;

export const wedgeContent: Record<WedgeSlug, WedgeContent> = {
  "account-growth": {
    slug: "account-growth",
    overline: "BESTANDSKUNDEN-WACHSTUM",
    title: "Wie macht Consultry aus 80 % Ihrer Umsatzquelle einen steuerbaren Wachstumspfad?",
    description:
      "Consultry verbindet Marktsignale, Stakeholder-Kontext und Warm Paths zu priorisierten Opportunities. Aus der Umsatzquelle, die in DACH-Beratungen am stärksten wirkt: dem Bestandskunden.",
    keywords: [
      "Bestandskunden-Wachstum Beratung",
      "Account Expansion DACH",
      "Opportunity-Signal Beratung",
      "Warm Paths Consulting",
    ],
    introAnswer:
      "In DACH-Beratungen kommen rund 80 % des Umsatzes aus Bestandskunden. Die stärksten Signale dafür stehen in Newslettern, im Postfach eines Partners und in Ausschreibungen, die niemand rechtzeitig sieht. Consultry liest sie mit, verbindet sie mit Ihrem Netzwerk und übersetzt sie in priorisierte Opportunities. Mit Engagement-Brief und Warm Path.",
    keyTakeaways: [
      "80 % Ihres Umsatzes kommen aus Bestandskunden. 80 % Ihrer Aufmerksamkeit gehen in Neukunden-Recherche.",
      "Ein Signal ohne Kontext ist ein weiterer To-do-Eintrag. Ein Signal mit Warm Path, Bedarfshypothese und Team-Vorschlag ist eine Opportunity.",
      "CTO-Wechsel, Budgetentscheidungen und Ausschreibungen werden früher sichtbar. Sie reagieren in Tagen statt Wochen.",
      "BD-Recherche fällt typischerweise von 15 bis 25 Stunden pro Woche auf 3 bis 5 Stunden.",
    ],
    sections: [
      {
        title: "Warum Bestandskunden Ihr stärkster Hebel sind.",
        body:
          "In IT- und Digitalisierungsberatungen zwischen 30 und 200 Beratern entsteht der Großteil des Umsatzes aus Folgegeschäft. Jeder Managing Partner weiß das. Trotzdem verpufft der Hebel in der Praxis. Signale, Zuständigkeiten und Kontext liegen in verschiedenen Postfächern, CRMs und Köpfen. Consultry bringt sie zusammen.",
      },
      {
        title: "Welche Signale Consultry für Sie mitliest.",
        body:
          "Das System verdichtet die Signale, die im Alltag einer Beratung wirklich Handlung auslösen. Ohne dass Ihre Partner ihre LinkedIn-Feeds jeden Morgen selbst scannen müssen.",
        bullets: [
          "Stakeholder-Wechsel auf C-Level oder in Projektverantwortung",
          "Hiring-Signale, die auf neue Initiativen hinweisen",
          "Ausschreibungen, Rahmenverträge und formale RFP-Indikatoren",
          "Presse, Regulatorik und Marktbewegungen mit Bezug zu Ihren Schwerpunkten",
        ],
      },
      {
        title: "Was aus einem Signal operativ entsteht.",
        body:
          "Kein weiterer Datensatz. Sondern ein Engagement-Brief. Wer ist der Stakeholder, welche Bedarfshypothese passt, welcher Berater aus Ihrem Team kennt den Kunden, welche Referenz haben Sie bereits abgeschlossen. Mit einem Klick wandert das in Staffing und Angebotsarbeit.",
      },
      {
        title: "Der Unterschied zu Market Intelligence.",
        body:
          "Monitoring-Tools zeigen Ihnen, was passiert. Consultry zeigt Ihnen, was Sie tun können. Mit Ihrem Team, Ihrem Wissen und Ihren Beziehungen. Genau dort, wo CRM- und Intel-Tools aufhören.",
      },
    ],
    faqBlocks: [
      {
        question: "Was ist der Unterschied zwischen Signal und Opportunity?",
        answer:
          "Ein Signal ist ein Hinweis aus dem Markt. Eine Opportunity ist ein bearbeitbarer Kontext mit Bedarfshypothese, Warm Path, Team-Vorschlag und nächstem konkreten Schritt.",
      },
      {
        question: "Funktioniert das nur für Bestandskunden?",
        answer:
          "Der Fokus liegt auf Bestandskunden und Folgegeschäft. Dort ist der Hebel am größten. Neukunden-Signale werden mitgelesen, sobald ein Warm Path oder eine Referenz-Brücke besteht.",
      },
      {
        question: "Warum ist das für DACH-Beratungen besonders relevant?",
        answer:
          "Beziehungsgeschäft, Referenzlogik und Folgeprojekte wirken im DACH-Raum stärker als generischer Outbound. Consultry baut genau auf dieser Logik auf. Tenant-isoliert, mit EU-Hosting und DSGVO von Anfang an.",
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
    overline: "STAFFING UND FORECASTING",
    title: "Wie macht Consultry aus Excel-Staffing drei Team-Varianten mit Begründung?",
    description:
      "Consultry verbindet Skills, Projekterfahrung, Verfügbarkeit und Delivery-Realität zu belastbaren Staffing- und Forecast-Entscheidungen. Mit Match-Score, Begründung und Freigabe.",
    keywords: [
      "Staffing Software Beratung",
      "Berater-Matching DACH",
      "Forecasting Consulting",
      "Kapazitätsplanung Beratung",
    ],
    introAnswer:
      "Staffing scheitert in Beratungen selten an fehlenden CVs. Es scheitert daran, dass Skills, Zertifikate, Verfügbarkeit, Projekterfahrung und Delivery-Risiko in fünf Systemen liegen. Consultry führt diese Dimensionen zusammen. Für jede Opportunity schlägt das System drei Team-Varianten vor. Mit Begründung, Match-Score und Forecast-Kontext. Auslastung steigt typischerweise von 60–70 % auf 80–90 %.",
    keyTakeaways: [
      "Staffing heißt nicht, einen freien Kalenderplatz zu finden. Es heißt, den passenden Berater mit echtem Projektfit zu platzieren.",
      "Drei Varianten, jede mit Begründung. Sie sehen, warum wer vorgeschlagen wird. Sie entscheiden.",
      "Forecasting wird belastbar, wenn Pipeline, Kapazität und Delivery-Realität in einer Logik zusammenlaufen.",
      "Engpässe, Bench-Situationen und Skill-Gaps werden früher sichtbar. Oft Wochen vor dem nächsten Staffing-Meeting.",
    ],
    sections: [
      {
        title: "Warum Staffing heute reaktiv bleibt.",
        body:
          "Skills liegen in CVs. Verfügbarkeit im Kalender. Delivery-Risiken im Kopf des Projektleiters. Pipeline-Wahrscheinlichkeiten im CRM. Solange diese Ebenen nicht verbunden sind, entscheidet Staffing auf Bauchgefühl. Und die Bench kostet typischerweise 5.000 bis 10.000 Euro pro Berater und Monat.",
      },
      {
        title: "Was in das Matching einfließt.",
        body:
          "Consultry bewertet nicht nach Keywords. Das System verbindet fachliche Tiefe, Erfahrung, Teamkontext und operative Plausibilität. Und begründet jede Empfehlung.",
        bullets: [
          "Skill-Niveau mit branchenrelevanter Projekterfahrung",
          "Verfügbarkeit mit Projekt- und Urlaubs-Überschneidungen",
          "Team-Konstellationen, die bereits gut miteinander geliefert haben",
          "Delivery-Risiko und kommerzielle Plausibilität aus laufenden Projekten",
        ],
      },
      {
        title: "Was Forecasting im Produktkontext heißt.",
        body:
          "Das System verbindet Pipeline-Signale mit realer Teamkapazität. Sie sehen vier Wochen im Voraus, ob Sie eine Deal-Welle bedienen können. Oder ob Sie früher in Hiring, Nearshoring oder Partnering gehen sollten.",
      },
      {
        title: "DACH-konform, nicht intransparent.",
        body:
          "Jede Empfehlung ist erklärbar. People-Analytics bleiben auf operativer Ebene. Aggregierte Sichten, keine heimlichen Bewertungen. BetrVG, DSGVO und AI Act sind eingebaut, nicht später angeschraubt.",
      },
    ],
    faqBlocks: [
      {
        question: "Ist das einfach ein Skill-Matching-Tool?",
        answer:
          "Nein. Ein Skill-Matcher zeigt Treffer. Consultry verbindet Skills mit Verfügbarkeit, Teamkontext, Pipeline und Delivery-Realität. Und begründet, warum ein Berater besser passt als ein anderer.",
      },
      {
        question: "Hilft das nur beim Staffing oder auch im Forecast?",
        answer:
          "Beides. Dieselben Datenpunkte treiben Staffing-Vorschläge und Forecasting-Sichten. Sie sehen Engpässe und Bench-Risiken früher und steuern gezielter.",
      },
      {
        question: "Was heißt das für unsere Auslastung konkret?",
        answer:
          "Pilotkunden erreichen typischerweise eine Auslastung von 80–90 % statt 60–70 %. Der Hebel liegt weniger darin, einzelne Berater zu drücken, sondern darin, Leerlauf und Engpässe überhaupt früh zu sehen.",
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
    overline: "WISSENSBASIS",
    title: "Wie sorgt Consultry dafür, dass Projektwissen wieder auftaucht statt in Confluence zu versanden?",
    description:
      "Consultry macht Referenzen, Methodik, Lessons Learned und Delivery-Artefakte in Angebot, Staffing und Delivery wieder nutzbar. Quellengebunden, versioniert und tenant-isoliert.",
    keywords: [
      "Wissensmanagement Beratung",
      "Knowledge Reuse Consulting",
      "Methodik Beratung",
      "Projektwissen DACH",
    ],
    introAnswer:
      "Beratungen haben selten ein Dokumentations-Problem. Sie haben ein Wiederverwendungs-Problem. Methodik, Referenzen und Lessons Learned liegen in Confluence, SharePoint und Laufwerken. Sichtbar, aber nicht mehr auffindbar. Consultry bringt das Wissen dorthin zurück, wo es Wert erzeugt. In den Engagement-Brief. Ins Angebot. Ins Onboarding. In die Delivery. Antwortzeit sinkt von Stunden auf Sekunden.",
    keyTakeaways: [
      "Wissen in Beratungen entsteht im Projekt. Es wirkt aber erst, wenn es im nächsten Projekt wieder auftaucht.",
      "Consultry verknüpft Inhalte quellengebunden. Sie sehen immer, wo eine Methode herkommt und welcher Kollege sie zuletzt angewendet hat.",
      "Referenzen und Case Studies erscheinen automatisch im Angebots-Canvas. Sie müssen sie nicht mehr suchen.",
      "Onboarding-Zeit für neue Berater sinkt typischerweise um die Hälfte.",
    ],
    sections: [
      {
        title: "Warum ein Wiki nicht reicht.",
        body:
          "Ein Wiki ist ein Archiv. Archive funktionieren, wenn Menschen wissen, wonach sie suchen. Im Beratungsalltag weiß niemand, was der Kollege vor zwei Jahren bei einem ähnlichen Projekt gelernt hat. Consultry holt das Wissen heraus, bevor jemand danach fragen muss.",
      },
      {
        title: "Was Consultry wiederverwendbar macht.",
        body:
          "Das System strukturiert operative Wissensbausteine. Nicht nur Dokumente.",
        bullets: [
          "Referenzen und Case Studies mit Branche, Methode und Team",
          "Methodik, Templates und Playbooks mit Anwendungs-Kontext",
          "Lessons Learned aus abgeschlossenen Deliveries",
          "Berater-Profile mit tatsächlicher Projekterfahrung, nicht nur CV-Claims",
        ],
      },
      {
        title: "Wann Wissen wieder auftaucht.",
        body:
          "Im Engagement-Brief erscheinen passende Referenzen. Im Staffing-Vorschlag erscheint relevante Projekterfahrung. Im Angebots-Canvas erscheinen Methodik und Case Studies. In der Delivery erscheinen Risikoindikatoren aus vergleichbaren Projekten, bevor Sie sie selbst suchen.",
      },
      {
        title: "Vertrauen durch Quellenbindung.",
        body:
          "Jede Information ist quellengebunden. Sie sehen, aus welchem Projekt, welchem Dokument und von welchem Kollegen eine Aussage stammt. Für vertrauliche Inhalte laufen lokale Open-Source-Modelle in der EU. Keine halluzinierten Aussagen, keine intransparenten Automatismen.",
      },
    ],
    faqBlocks: [
      {
        question: "Ist Consultry ein Wissensmanagement-Tool?",
        answer:
          "Nicht primär. Wissensrückfluss ist kein Selbstzweck. Consultry nutzt ihn als Hebel für schnellere Angebote, bessere Staffing-Entscheidungen und stabilere Delivery.",
      },
      {
        question: "Welche Rolle spielen Quellen?",
        answer:
          "Zentrale Rolle. Inhalte sind quellengebunden, tenant-isoliert und versioniert. Sie sehen immer, wo eine Aussage herkommt, und können sie nachvollziehen.",
      },
      {
        question: "Hilft das auch beim Onboarding neuer Berater?",
        answer:
          "Ja, erheblich. Neue Kollegen greifen vom ersten Tag an auf Methodik, Referenzen und Lessons Learned zu. Anlaufzeit in Delivery und Enablement sinkt typischerweise um die Hälfte.",
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
    overline: "DELIVERY UND MARGE",
    title: "Wie verbindet Consultry Delivery mit Marge, bevor Abweichungen teuer werden?",
    description:
      "Consultry führt Delivery Health, Allocation, Kostenbezug und Invoice-Ready-Übergabe in einer operativen Sicht zusammen. Sie sehen Marge und Risiko, bevor der Monatsabschluss sie zeigt.",
    keywords: [
      "Delivery Control Beratung",
      "Marge Steuerung Consulting",
      "Invoice Ready Beratung",
      "Commercial Control DACH",
    ],
    introAnswer:
      "Wenn Delivery und kommerzielle Sicht getrennt laufen, sehen Sie Probleme im Monatsabschluss. Zu spät. Consultry verbindet Projekt-Allocation, Risiko-Indikatoren, Kostenbezug und Invoice-Ready-Übergabe in derselben Arbeitsebene. Partner und Projektleiter sehen Marge und Abweichung in Echtzeit. Nicht im Reporting vier Wochen später.",
    keyTakeaways: [
      "Delivery-Risiken zeigen sich früh, wenn Scope, Auslastung und Kostenbezug in einer Sicht zusammenkommen.",
      "Invoice-Ready-Übergabe an DATEV oder Bexio ersetzt keine Buchhaltung. Sie beseitigt den Medienbruch zwischen Projekt und Rechnung.",
      "Margen-Steuerung wird vom Monats-Reporting zur täglichen Steuerungsgröße.",
      "Partner sehen ohne Excel-Export, wo Aufwand oder Scope aus dem Ruder laufen. Und steuern gegen, bevor die Marge kippt.",
    ],
    sections: [
      {
        title: "Warum Projekt-Dashboards nicht reichen.",
        body:
          "Ein Projekt-Dashboard zeigt Milestones. Ein Beratungsprojekt lebt aber von der Verbindung zwischen Scope, Auslastung, Fremdleistung und Rechnungsnähe. Solange diese Dimensionen in verschiedenen Tools liegen, steuern Sie reaktiv.",
      },
      {
        title: "Was Consultry in einer Sicht zusammenbringt.",
        body:
          "Der Schwerpunkt liegt auf operativer Transparenz. Nah am Projekt, nicht im Backoffice.",
        bullets: [
          "Allocation mit Echtzeit-Sicht auf Auslastung und Bench",
          "Delivery Health mit Risiko-Indikatoren aus vergleichbaren Projekten",
          "Kostenbezug mit Fremdleistungen und Rebilling-Logik",
          "Invoice-Ready-Übergabe als saubere Schnittstelle zu DATEV, Bexio oder Ihrem ERP",
        ],
      },
      {
        title: "Vom Reporting zur Steuerung.",
        body:
          "Wenn Projektleiter früh sehen, wo Scope oder Aufwand kippen, wird Commercial Control zur Steuerungsgröße. Nicht zum Bericht, der nachträglich erklärt, warum eine Marge gefallen ist.",
      },
      {
        title: "Klare Abgrenzung zu ERP und Buchhaltung.",
        body:
          "Consultry ist kein ERP. Rechnungsstellung, Buchhaltung und Jahresabschluss bleiben in Ihren etablierten Systemen. Consultry schließt die Lücke davor. Zwischen Opportunity, Staffing, Delivery und invoice-naher Vorbereitung.",
      },
    ],
    faqBlocks: [
      {
        question: "Ist Consultry ein ERP oder Billing-System?",
        answer:
          "Nein. Consultry bereitet Rechnungsgrundlagen vor und übergibt sie an DATEV, Bexio oder Ihr ERP. Rechnungsstellung selbst bleibt dort, wo sie heute ist.",
      },
      {
        question: "Warum ist Delivery und Marge ein eigener Bereich?",
        answer:
          "Weil Marge selten daran verloren geht, dass eine Rechnung falsch ist. Sondern daran, dass Scope-Abweichungen und Auslastungs-Probleme zu spät sichtbar werden.",
      },
      {
        question: "Spielt das mit unseren Bestandssystemen zusammen?",
        answer:
          "Ja. Consultry ersetzt keine etablierten Systeme blind. Die Plattform integriert dort, wo Integration schneller und risikoärmer ist als Ersatz.",
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
    overline: "CONSULTRY VS. CRM",
    title: "Warum reicht ein CRM für eine Beratung nicht aus?",
    description:
      "Ein CRM kennt Ihre Pipeline, aber nicht Ihre Berater. Consultry verbindet Marktsignal, Team-Matching, Angebot, Delivery und Wissensrückfluss in einer Arbeitsebene.",
    keywords: [
      "CRM Alternative Beratung",
      "Salesforce Alternative Consulting",
      "Beratung Plattform DACH",
      "PSA Alternative Consulting",
    ],
    introAnswer:
      "CRMs kennen Ihre Pipeline. Sie kennen nicht Ihre Berater. Workforce-Tools kennen Ihre Berater. Sie kennen nicht den Markt. PSA-Tools tracken Delivery. Sie tracken nicht die Akquise. Consultry ist das verbindende System dazwischen. Gebaut für die Wertschöpfungslogik einer Beratung. Nicht für den Vertriebsprozess eines Software-Vendors.",
    keyTakeaways: [
      "Ein CRM ist ein Vertriebswerkzeug. Eine Beratung verkauft aber Team, Methodik und Delivery. Nicht nur Abschlüsse.",
      "Die eigentliche Arbeit einer Beratung beginnt nach dem Deal. Staffing, Delivery, Wissensrückfluss.",
      "Consultry verbindet Signal, Team, Angebot, Delivery und Wissen in einer Logik. Ein CRM bildet davon höchstens einen Ausschnitt ab.",
      "Die Migration erfolgt nicht als Big Bang. Consultry integriert, wo Ersatz unnötig wäre. Und schließt die Lücken, die bisher niemand schließt.",
    ],
    sections: [
      {
        title: "Was ein CRM nicht abbildet.",
        body:
          "Kontakte, Deals, Aktivitäten. Ja. Aber nicht, welcher Berater den Kunden aus einem vergleichbaren Projekt kennt. Nicht, welche Methodik passt. Nicht, welches Delivery-Risiko beim letzten Mal entstand. Nicht, was aus der Delivery zurück in den nächsten Deal fließt. Genau dort lebt eine Beratung.",
      },
      {
        title: "Warum das für eine Beratung teuer ist.",
        body:
          "Eine Beratung verkauft mehrere Dimensionen gleichzeitig. Expertise, Team, Methodik, Delivery-Sicherheit, kommerzielle Plausibilität. Wenn diese Dimensionen in sieben Tools liegen, verliert jeder Partner mehrere Stunden pro Woche daran, sie zusammenzubringen. Und jeder Deal wird langsamer, ungenauer oder beides.",
      },
      {
        title: "Wie sich Consultry positioniert.",
        body:
          "Consultry ist kein CRM. Kein PSA. Kein ERP. Consultry ist der operative AI-Begleiter für Beratungen. Die Ebene, die Marktsignal, Team, Angebot, Delivery und Wissensrückfluss zusammenführt. CRM-Funktionalität ist enthalten, wo sie gebraucht wird. Sie ist aber nicht die Hauptstory.",
      },
      {
        title: "Wann ein Vergleich besonders relevant wird.",
        body:
          "Wenn Ihr Freitagnachmittag so aussieht. 14 offene Tabs. CRM für die Pipeline. Excel für das Staffing. PowerPoint für das Angebot. Confluence für die Methodik. Und am Ende entscheidet das Bauchgefühl, weil niemand mehr alles zusammenbringt.",
      },
    ],
    faqBlocks: [
      {
        question: "Will Consultry unser CRM ersetzen?",
        answer:
          "Nicht blind. Consultry schließt zuerst die Lücken zwischen CRM, Staffing, Angebot, Delivery und Wissen. Wenn Ihr CRM nach einigen Monaten den Nutzen nicht mehr rechtfertigt, können Sie es ablösen. Müssen Sie aber nicht.",
      },
      {
        question: "Ist Consultry eher CRM, PSA oder Wissenssystem?",
        answer:
          "Keines davon isoliert. Die Plattform verbindet diese Logiken in einer Arbeitsebene. Dort, wo Beratungen heute sieben Tools parallel nutzen.",
      },
      {
        question: "Warum ist das für DACH-Beratungen besonders relevant?",
        answer:
          "Bestandskundengeschäft, Staffing-Druck, Delivery-Risiken und Compliance-Anforderungen wirken in DACH anders als in den USA. Consultry ist in Berlin gebaut, für IT- und Digitalisierungsberatungen im DACH-Raum. Tenant-isoliert, mit EU-Hosting, DSGVO, AI Act und BetrVG von Anfang an.",
      },
    ],
    internalLinks: [
      sharedInternalLinks.growth,
      sharedInternalLinks.staffing,
      sharedInternalLinks.knowledge,
      sharedInternalLinks.commercial,
    ],
    comparisonTable: {
      overline: "DIE WESENTLICHEN UNTERSCHIEDE",
      title: "Was Consultry anders aufsetzt.",
      body:
        "Der Vergleich fokussiert nicht Features, sondern die operative Logik, die Beratungen im Tagesgeschäft brauchen.",
      columnHeaders: ["FUNKTIONEN", "CONSULTRY", "STANDARD-CRM"],
      rows: [
        {
          feature: "Signal-Feed aus Newslettern, Ausschreibungen und Presse",
          consultry: "yes",
          competitor: "no",
        },
        {
          feature: "Team-Matching mit Skills, Verfügbarkeit und Projekterfahrung",
          consultry: "yes",
          competitor: "no",
        },
        {
          feature: "Angebots-Canvas mit Pricing und Delivery-Realität",
          consultry: "yes",
          competitor: "partial",
        },
        {
          feature: "Delivery, Marge und Commercials in einer Sicht",
          consultry: "yes",
          competitor: "no",
        },
        {
          feature: "Wissensrückfluss aus abgeschlossenen Projekten",
          consultry: "yes",
          competitor: "no",
        },
        {
          feature: "Erklärbare Empfehlungen mit menschlicher Freigabe",
          consultry: "yes",
          competitor: "partial",
        },
      ],
    },
  },
};

export const wedgeSlugs = Object.keys(wedgeContent) as WedgeSlug[];
