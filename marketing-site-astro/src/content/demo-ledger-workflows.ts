import type { DemoWorkflow } from "./demo-workflow-types";

/** Illustrative work products. No live sources, permissions, messages or approvals. */
export const ledgerWorkflows: Record<"ledger" | "access", DemoWorkflow> = {
  ledger: {
    title: "Schwarm-Orchestrierung",
    context: "Hansa Wave 2 · Cutover-Plan mit drei Agenten und Audit",
    role: "Projektleitung · orchestriert Delivery, Daten und Risiko",
    task: "Lass Delivery, Daten und Risiko den Cutover-Plan prüfen und führe einen Arbeitsstand zusammen.",
    outcome: "Ein auditierter Arbeitsstand 08: jeder Beitrag mit Quelle, ein Gegenbeleg, offene Freigabe.",
    sources: [
      { id: "ledger-07", title: "Wissensledger · Stand 07", meta: "Beispieldaten · Cutover-Plan Hansa Wave 2", excerpt: "Drei Probeläufe je Werk. Annahme aus Methodenhandbuch v3, nicht aus Wave 1 bestätigt." },
      { id: "methods-v3", title: "Methodenhandbuch v3 · 4.2", meta: "Beispieldaten · Cutover", excerpt: "Je Werk planen, mindestens drei Probeläufe vorsehen." },
      { id: "wave-1-lessons", title: "Lessons Learned · Hansa Wave 1", meta: "Beispieldaten · Retrospektive", excerpt: "Bei vergleichbarer Datenlage war ein vierter Probelauf nötig." },
      { id: "reconciliation-v3", title: "Reconciliation Report v3 · S. 4", meta: "Beispieldaten · Datenprüfung", excerpt: "Restabweichungen in zwei Werken noch offen." },
    ],
    steps: [
      {
        id: "start",
        label: "Schwarm starten",
        caption: "Ein Auftrag, drei Agenten, jeder in seinem erlaubten Ausschnitt.",
        duration: 9500,
        sourceIds: ["ledger-07"],
        activity: "Die Orchestrierung verteilt Teilaufgaben; jeder Agent liest nur, was seine Rolle darf.",
        actionLabel: "Beiträge auditieren",
        artifact: {
          label: "Orchestrierung",
          title: "Hansa Wave 2 · Lauf 08",
          status: "3 Agenten aktiv",
          tone: "neutral",
          blocks: [
            { label: "Delivery", system: "delivery", items: [
              { text: "Ablauf und Probeläufe je Werk prüfen", state: "open" },
            ] },
            { label: "Daten", system: "daten", items: [
              { text: "Datenlage und Reconciliation abgleichen", state: "open" },
            ] },
            { label: "Risiko", system: "risiko", items: [
              { text: "Gegenbelege aus früheren Waves suchen", state: "open" },
            ] },
            { label: "Koordination", system: "koordination", items: [
              { text: "Freigabe · bleibt bei der Projektleitung", state: "blocked" },
            ] },
          ],
        },
        note: "Orchestrierung heißt verteilen und zusammenführen. Entscheiden bleibt bei Menschen.",
      },
      {
        id: "audit",
        label: "Beiträge auditieren",
        caption: "Jeder Beitrag wird gegen seine Quelle geprüft. Gleiche Quelle, kein zweiter Beleg.",
        duration: 10000,
        sourceIds: ["methods-v3", "wave-1-lessons", "reconciliation-v3"],
        activity: "Das Audit ordnet jedem Beitrag Quelle und Prüfergebnis zu und erkennt Beiträge mit derselben Grundlage.",
        actionLabel: "Konsens bilden",
        artifact: {
          label: "Agenten-Audit",
          title: "Hansa Wave 2 · Audit",
          status: "4 Beiträge · 1 Gegenbeleg",
          tone: "warn",
          blocks: [
            { label: "Beiträge", system: "audit", items: [
              { text: "Delivery · drei Probeläufe je Werk · Methodenhandbuch v3", state: "done" },
              { text: "Risiko · vierter Lauf nötig · Lessons Learned Wave 1 · Gegenbeleg", state: "done" },
            ] },
            { label: "Befund", system: "conflict", text: "Zwei gleichlautende Beiträge stützen sich auf eine Quelle. Der Gegenbeleg aus Wave 1 widerspricht ihnen." },
          ],
        },
      },
      {
        id: "konsens",
        label: "Konsens bilden",
        caption: "Der Schwarm einigt sich auf einen Arbeitsstand. Der Widerspruch bleibt darin sichtbar.",
        duration: 10000,
        sourceIds: ["methods-v3", "wave-1-lessons", "reconciliation-v3"],
        activity: "Die Koordination übernimmt die Korrektur in Stand 08 und hält die offene Entscheidung fest.",
        actionLabel: "Übergabe und Protokoll erstellen",
        artifact: {
          label: "Arbeitsstand",
          title: "Hansa Wave 2 · Stand 08",
          status: "Arbeitskonsens · keine Freigabe",
          tone: "warn",
          blocks: [
            { label: "Angenommen", system: "current", items: [
              { text: "Mindestens drei Probeläufe je Werk plus Reserve", state: "done" },
            ] },
            { label: "Offen", system: "approval", items: [
              { text: "Gilt das Wave-1-Risiko auch für Wave 2?", state: "open" },
              { text: "Go-Freigabe · nur durch die Projektleitung", state: "blocked" },
            ] },
          ],
        },
        note: "Konsens ist kein Wahrheitsbeleg. Der Gegenbeleg und die offene Frage bleiben am Stand hängen.",
      },
      {
        id: "protokoll",
        label: "Übergabe & Protokoll",
        caption: "Wer hat was mit welcher Quelle beigetragen? Das Protokoll hält es fest.",
        duration: 9500,
        sourceIds: ["ledger-07", "wave-1-lessons"],
        activity: "Der Lauf wird als Stand 08 ins Ledger geschrieben; das Protokoll verknüpft Beiträge, Quellen und Entscheidungen.",
        artifact: {
          label: "Protokoll",
          title: "Hansa Wave 2 · Übergabe",
          status: "Zur internen Prüfung",
          tone: "neutral",
          blocks: [
            { label: "Protokoll Lauf 08", system: "audit", items: [
              { text: "4 Beiträge · 3 Agenten · 4 Quellen", state: "done" },
              { text: "0 Freigaben erteilt", state: "blocked" },
            ] },
            { label: "Nächste Aufgaben", system: "koordination", items: [
              { text: "Datenleitung · Reconciliation abschließen", state: "open" },
              { text: "Projektleitung · Go-Bedingung entscheiden", state: "blocked" },
            ] },
          ],
        },
        note: "Der nächste Lauf startet auf Stand 08. Stand 07 bleibt nachvollziehbar.",
      },
    ],
    download: {
      filename: "hansa-cutover-lauf-08-protokoll-beispiel.txt",
      label: "Protokoll herunterladen",
      text: `Schwarm-Orchestrierung · Hansa Wave 2 · Lauf 08 (fiktives Beispiel)

Agenten: Delivery, Daten, Risiko; Koordination führt zusammen
Beiträge: 4 · Quellen: Stand 07, Methodenhandbuch v3, Lessons Learned Wave 1, Reconciliation Report v3
Audit: zwei gleichlautende Beiträge mit derselben Quelle; ein Gegenbeleg aus Wave 1
Arbeitsstand 08: mindestens drei Probeläufe je Werk plus Reserve, Datenprüfung vor dem ersten Lauf
Offen: Gilt das Wave-1-Risiko für Wave 2? Go-Freigabe nur durch die Projektleitung
Nächste Aufgaben: Reconciliation abschließen, Werke bestätigen, Go-Bedingung entscheiden

Die Demo verwendet statische Beispieldaten. Es wurde nichts freigegeben oder in ein führendes System geschrieben.
`,
    },
  },
  access: {
    title: "Zugriffsverwaltung",
    context: "Hansa · Workspace-Verwaltung für Team und Agenten",
    role: "Workspace-Verantwortliche",
    task: "Richte den Zugriff für das Hansa-Team und seine Agenten ein.",
    outcome: "SSO, Rollen, Integrationen und ein Rahmen für Agenten, der am Zugriff selbst gilt.",
    sources: [
      { id: "verzeichnis", title: "Verzeichnis · Entra ID", meta: "Beispieldaten · Gruppen Hansa-Team, Partner", excerpt: "14 Personen im Hansa-Team, 2 Partnerinnen, 2 Gäste ohne SSO." },
      { id: "rechtematrix", title: "Rechtematrix · Hansa", meta: "Beispieldaten · Rollen und Wirkungen", excerpt: "Consultants lesen Hansa-Unterlagen. Tagessätze und Kalkulation nur für Partnerinnen." },
      { id: "integrationen", title: "Integrationsliste", meta: "Beispieldaten · SharePoint, CRM, DMS", excerpt: "SharePoint und CRM sind angebunden, das DMS wartet auf eine Freigabe der IT." },
    ],
    steps: [
      {
        id: "identitaet",
        label: "Identität & SSO",
        caption: "SSO fürs Team. Agenten bleiben als eigene Mitwirkende identifizierbar.",
        duration: 9500,
        sourceIds: ["verzeichnis"],
        activity: "Gruppen aus dem Verzeichnis werden übernommen; Agenten handeln später im Auftrag einer Person.",
        actionLabel: "Rollen und Rechte setzen",
        artifact: {
          label: "Zugriffsverwaltung",
          title: "Hansa · Identität",
          status: "SSO aktiv",
          tone: "ok",
          blocks: [
            { label: "Single Sign-on", system: "sso", items: [
              { text: "Entra ID · verbunden", state: "done" },
              { text: "2 Gäste ohne SSO · einladen oder entfernen", state: "open" },
            ] },
            { label: "Agenten", system: "agent", text: "Agenten bleiben mit eigener Identität erkennbar. Sie arbeiten im Auftrag mit begrenzten, delegierten Befugnissen innerhalb der Organisationsregeln." },
          ],
        },
        note: "Beispieldaten. Diese Demo verbindet kein Verzeichnis und ändert keine Konten.",
      },
      {
        id: "rollen",
        label: "Rollen & Rechte",
        caption: "Rechte gelten je Wirkung: Lesen, Schreiben, Löschen, Weitergeben.",
        duration: 10000,
        sourceIds: ["rechtematrix"],
        activity: "Die Rechtematrix wird zu Rollen. Ein Agent erhält nur die für den Auftrag delegierten Befugnisse innerhalb der Organisationsregeln.",
        actionLabel: "Integrationen prüfen",
        artifact: {
          label: "Zugriffsverwaltung",
          title: "Hansa · Rollen",
          status: "3 Rollen · 1 Ausnahme",
          tone: "neutral",
          blocks: [
            { label: "Rollen", system: "roles", items: [
              { text: "Partnerin · Hansa vollständig, inkl. Tagessätze", state: "done" },
              { text: "Agent im Auftrag · begrenzte, delegierte Befugnisse", state: "done" },
            ] },
            { label: "Wirkungen", system: "effects", items: [
              { text: "Schreiben · nur in eigene Canvases", state: "done" },
              { text: "Weitergeben nach außen · gesperrt", state: "blocked" },
            ] },
          ],
        },
      },
      {
        id: "integrationen",
        label: "Integrationen",
        caption: "Angebundene Systeme behalten ihre Rechte. Geprüft wird am Zugriff, nicht im Prompt.",
        duration: 10000,
        sourceIds: ["integrationen", "rechtematrix"],
        activity: "SharePoint und CRM spiegeln ihre Berechtigungen; das DMS bleibt bis zur IT-Freigabe getrennt.",
        actionLabel: "Rahmen für Agenten setzen",
        artifact: {
          label: "Zugriffsverwaltung",
          title: "Hansa · Integrationen",
          status: "2 verbunden · 1 offen",
          tone: "warn",
          blocks: [
            { label: "Verbundene Systeme", system: "integrations", items: [
              { text: "SharePoint · Rechte gespiegelt", state: "done" },
              { text: "E-Mail-Versand · nicht verbunden", state: "blocked" },
            ] },
            { label: "Prinzip", system: "principle", text: "Consultry ersetzt keine Rechte im Quellsystem. Was dort gesperrt ist, bleibt auch für Agenten gesperrt." },
          ],
        },
      },
      {
        id: "rahmen",
        label: "Agentenrahmen",
        caption: "Ein Auftrag bekommt Quellen, Werkzeuge und erlaubte Wirkungen. Darin arbeitet der Agent selbstständig.",
        duration: 9500,
        sourceIds: ["rechtematrix", "integrationen"],
        activity: "Der Rahmen für den Auftrag Staffing-Vorbereitung wird gesetzt und jeder Zugriff protokolliert.",
        artifact: {
          label: "Zugriffsverwaltung",
          title: "Hansa · Agentenrahmen",
          status: "Rahmen gesetzt",
          tone: "ok",
          blocks: [
            { label: "Auftrag · Staffing-Vorbereitung", system: "agent", items: [
              { text: "Quellen · Hansa-Erfahrung, Methodenstandard", state: "done" },
              { text: "Tagessätze · gesperrt", state: "blocked" },
            ] },
            { label: "Protokoll", system: "audit", items: [
              { text: "3 Lesezugriffe · protokolliert", state: "done" },
              { text: "1 abgelehnter Abruf · Tagessätze", state: "blocked" },
            ] },
          ],
        },
        note: "Innerhalb des Rahmens muss nichts erneut freigegeben werden. Außerhalb wird abgelehnt und festgehalten.",
      },
    ],
    download: {
      filename: "beispiel-hansa-zugriffsverwaltung.txt",
      label: "Zugriffsübersicht herunterladen",
      text: `Zugriffsverwaltung · Hansa (fiktives Beispiel)

Identität: Entra ID SSO, Gruppen Hansa-Team und Partner, 2 Gäste ohne SSO offen; Agenten als eigene Mitwirkende identifizierbar
Rollen: Partnerin (vollständig), Consultant (lesen, Canvas schreiben), Agent im Auftrag (begrenzte, delegierte Befugnisse innerhalb der Organisationsregeln), Gast (freigegebene Unterlagen)
Wirkungen: Lesen erlaubt, Schreiben nur im Canvas, Löschen gesperrt, Weitergabe gesperrt
Integrationen: SharePoint (gespiegelt), CRM (Leserechte), DMS (offen), E-Mail (nicht verbunden)
Agentenrahmen Staffing-Vorbereitung: Hansa-Erfahrung, Methodenstandard, Canvas, Kostenband; Tagessätze und Versand gesperrt
Protokoll: 3 Lesezugriffe, 0 Schreibzugriffe außerhalb des Canvas, 1 abgelehnter Abruf

Die Demo verwendet statische Beispieldaten. Es wurden keine Konten, Rechte oder Systeme verändert.
`,
    },
  },
};
