import type { DemoWorkflow } from "./demo-workflow-types";

/** Illustrative work products. No live sources, permissions, messages or approvals. */
export const ledgerWorkflows: Record<"ledger" | "access", DemoWorkflow> = {
  ledger: {
    title: "Cutover-Planung",
    context: "Hansa Wave 2 · interne Projektplanung",
    role: "Projektleitung · mit Delivery, Daten und Risiko",
    task: "Überarbeite den bestehenden Cutover-Plan für Hansa Wave 2.",
    outcome:
      "Ein gemeinsamer Plan mit Aufgaben, Gegenbeleg und offener Freigabe.",
    sources: [
      {
        id: "ledger-07",
        title: "Wissensledger · Stand 07",
        meta: "Beispieldaten · sinngemäße Ausgangsbasis",
        excerpt:
          "Für Hansa Wave 2 wird ein phasenweiser Cutover vorbereitet. Die Zahl der Werke im Scope ist offen. Der bisherige Entwurf beruht auf Stand 07.",
      },
      {
        id: "methods-v3",
        title: "Methodenhandbuch v3 · 4.2",
        meta: "Beispieldaten · sinngemäßer Auszug",
        excerpt:
          "Der Cutover erfolgt phasenweise je Werk mit mindestens drei Probeläufen. Dass genau drei für Wave 2 ausreichen, ist daraus nicht belegt.",
      },
      {
        id: "wave-1-lessons",
        title: "Lessons Learned · Hansa Wave 1",
        meta: "Beispieldaten · sinngemäßer Auszug",
        excerpt:
          "Bei vergleichbarer Datenlage war in Wave 1 ein vierter Probelauf nötig. Die Erfahrung ist als Gegenbeleg zur Annahme von drei ausreichenden Läufen zu berücksichtigen.",
      },
      {
        id: "reconciliation-v3",
        title: "Reconciliation Report v3 · S. 4",
        meta: "Beispieldaten · sinngemäßer Auszug",
        excerpt:
          "Die Go-Empfehlung setzt eine abgeschlossene Reconciliation voraus. Der aktuelle Report stützt keine uneingeschränkte Go-Empfehlung.",
      },
    ],
    steps: [
      {
        id: "start",
        label: "Stand 07 aufnehmen",
        caption: "Der bestehende Plan auf Stand 07 wird zur Arbeitsbasis.",
        duration: 6800,
        sourceIds: ["ledger-07", "methods-v3"],
        activity: "Delivery, Daten und Kunde starten mit derselben Grundlage.",
        actionLabel: "Beiträge und Gegenbeleg abgleichen",
        artifact: {
          label: "Cutover-Plan · Entwurf auf 07",
          title: "Hansa Wave 2 vorbereiten",
          status: "Annahmen prüfen",
          tone: "warn",
          blocks: [
            {
              label: "Vorgehen",
              text: "Je Werk phasenweise vorgehen; zunächst drei Probeläufe einplanen. Ob sie ausreichen, bleibt eine Annahme.",
            },
            {
              label: "Noch zu klären",
              items: [
                {
                  text: "Kundenverantwortliche: Werke im Scope bestätigen.",
                  state: "open",
                },
                {
                  text: "Datenleitung: Zahl der nötigen Probeläufe prüfen.",
                  state: "open",
                },
              ],
            },
          ],
        },
      },
      {
        id: "challenge",
        label: "Plan hinterfragen",
        caption: "Ein Gegenbeleg verändert die Planung.",
        duration: 7800,
        sourceIds: ["methods-v3", "wave-1-lessons"],
        activity:
          "Drei gleichlautende Beiträge werden zu einer Annahme gebündelt.",
        actionLabel: "Arbeitsstand 08 vorbereiten",
        artifact: {
          label: "Cutover-Plan · Abgleich",
          title: "Drei Stimmen. Eine Grundlage.",
          status: "Gegenbeleg erhalten",
          tone: "warn",
          blocks: [
            {
              label: "Delivery · Daten · Kunde",
              text: "„Drei Läufe reichen“ beruht dreimal auf Methodenhandbuch v3. Drei Beiträge, eine Quelle; kein dreifacher Beleg.",
            },
            {
              label: "Betrieb / Risiko",
              text: "Wave 1 brauchte bei vergleichbarer Datenlage einen vierten Lauf. Der Plan braucht eine Reserve und eine Prüfung der Datenlage.",
            },
          ],
        },
      },
      {
        id: "revise",
        label: "Plan überarbeiten",
        caption: "Der Arbeitskonsens hält die offene Entscheidung fest.",
        duration: 7800,
        sourceIds: ["methods-v3", "wave-1-lessons", "reconciliation-v3"],
        activity:
          "Stand 08 übernimmt die Korrektur und den verbleibenden Widerspruch.",
        actionLabel: "Aufgaben für das Team erstellen",
        artifact: {
          label: "Cutover-Plan · Arbeitsstand 08",
          title: "Reserve vorsehen. Go offenhalten.",
          status: "Arbeitskonsens · keine Freigabe",
          tone: "warn",
          blocks: [
            {
              label: "Probeläufe",
              before: "Drei Läufe sollen ausreichen.",
              text: "Mindestens drei Läufe; einen vierten als Reserve vorsehen. Datenleitung prüft, ob der Wave-1-Gegenbeleg auf Wave 2 zutrifft.",
            },
            {
              label: "Go-Bedingung",
              text: "Reconciliation abschließen und fachlich prüfen lassen. Die Zahl der Werke bleibt offen; es gibt noch keine verbindliche Go-Zusage.",
            },
          ],
        },
        note: "Die Beiträge einigen sich auf eine Arbeitsbasis. Eine geschäftliche Freigabe wird dadurch nicht erteilt.",
      },
      {
        id: "handoff",
        label: "Team übergeben",
        caption: "Die Folgeaufgabe startet auf 08 statt bei null.",
        duration: 8500,
        sourceIds: [
          "ledger-07",
          "methods-v3",
          "wave-1-lessons",
          "reconciliation-v3",
        ],
        activity:
          "Der Übergabeentwurf verknüpft Aufgaben, Quellen und den früheren Stand.",
        artifact: {
          label: "Übergabeentwurf · nächste Planungsrunde",
          title: "Drei nächste Schritte für Hansa",
          status: "Zur internen Prüfung",
          tone: "neutral",
          blocks: [
            {
              label: "Aufgaben auf Stand 08",
              items: [
                {
                  text: "Delivery: mindestens drei Läufe plus Reserve terminieren.",
                  state: "open",
                },
                {
                  text: "Datenleitung: Wave-1-Risiko und Reconciliation prüfen.",
                  state: "open",
                },
                {
                  text: "Kundenverantwortliche: Werke im Scope bestätigen.",
                  state: "open",
                },
              ],
            },
            {
              label: "Nachvollziehbar weiterarbeiten",
              text: "Der frühere Entwurf bleibt auf 07 und ist zur erneuten Prüfung markiert. Diese Folgeaufgabe nutzt 08; fachliche Freigabe und Firmenwissen-Übernahme bleiben offen.",
            },
          ],
        },
      },
    ],
    download: {
      filename: "hansa-cutover-uebergabe-beispiel.txt",
      label: "Übergabeentwurf herunterladen",
      text: `HANSA WAVE 2 — CUTOVER-ÜBERGABE
Illustratives Produktbeispiel. Keine echten Kundendaten, Zuweisungen oder Freigaben.

GRUNDLAGE
Arbeitsstand 08 für die nächste interne Planungsrunde.
Arbeitskonsens ist keine fachliche oder geschäftliche Freigabe.

PLANUNGSANSATZ
Je Werk phasenweise vorgehen. Mindestens drei Probeläufe und einen vierten als Reserve planen. Ob die Reserve benötigt wird, muss anhand der Datenlage von Wave 2 geprüft werden.
Keine Go-Zusage vor abgeschlossener Reconciliation und fachlicher Prüfung.

NÄCHSTE AUFGABEN — VERANTWORTLICHKEITEN ALS VORSCHLAG
1. Delivery: Termine für mindestens drei Probeläufe und eine Reserve vorbereiten. Voraussetzung: Werke im Scope bestätigen.
2. Datenleitung: Gegenbeleg aus Wave 1 auf Wave 2 prüfen und offene Reconciliation-Punkte bearbeiten. Ergebnis: Empfehlung zur Zahl der Läufe und dokumentierte Prüfgrundlage.
3. Kundenverantwortliche: Zahl und Auswahl der Werke im Scope bestätigen.

OFFENE ENTSCHEIDUNGEN
- Welche Werke gehören zu Wave 2?
- Ist ein vierter Probelauf nötig?
- Wer erteilt nach Reconciliation die fachliche Go-Freigabe?

QUELLEN — SINNGEMÄSSE BEISPIELAUSZÜGE
- Methodenhandbuch v3, 4.2: phasenweiser Cutover mit mindestens drei Probeläufen.
- Lessons Learned Hansa Wave 1, Datenmigration: vergleichbare Datenlage erforderte einen vierten Lauf.
- Reconciliation Report v3, S. 4: keine uneingeschränkte Go-Empfehlung; abgeschlossene Reconciliation vorausgesetzt.

HERLEITUNG UND HISTORIE
Delivery, Daten und Kunde folgerten aus derselben Quelle, dass drei Läufe ausreichen. Diese drei Beiträge sind ein gebündelter Annahmestrang, keine drei unabhängigen Belege.
Der Gegenbeleg von Betrieb/Risiko bleibt in Stand 08 sichtbar.
Der frühere Entwurf behält Stand 07 und ist zur erneuten Prüfung markiert. Die nächste Aufgabe referenziert Stand 08.
Eine Übernahme ins firmenweite Wissen benötigt eine eigene Prüfung.
`,
    },
  },
  access: {
    title: "Team- und Kostenplanung",
    context: "Hansa · interne Vorbereitung für die Partnerin",
    role: "Consultant · Agent mit denselben Leserechten",
    task: "Bereite Teamaufwand und Kostenrahmen für die Partnerin vor.",
    outcome:
      "Ein nutzbarer Übergabeentwurf, auch wenn exakte Tagessätze gesperrt bleiben.",
    sources: [
      {
        id: "access-methods",
        title: "Methodenhandbuch v3 · 4.2",
        meta: "Beispieldaten · sinngemäßer Auszug",
        excerpt:
          "Der Cutover wird phasenweise vorbereitet. Probeläufe und die Prüfung der Datenabgleiche gehören in den Arbeitsplan.",
      },
      {
        id: "access-lessons",
        title: "Lessons Learned · Hansa Wave 1",
        meta: "Beispieldaten · sinngemäßer Auszug",
        excerpt:
          "Bei vergleichbarer Datenlage war ein zusätzlicher Probelauf nötig. Die Vorbereitung muss die Datenlage und mögliche Reserven berücksichtigen.",
      },
      {
        id: "access-cost-band",
        title: "Hansa · generalisiertes Kostenband",
        meta: "Beispieldaten · erlaubte, abgeleitete Ansicht",
        excerpt:
          "Für die interne Planung ist eine generalisierte Bandbreite von 1.100 bis 1.500 Euro pro Tag sichtbar. Exakte rollenbezogene Tagessätze werden in dieser Consultant-Ansicht nicht ausgegeben.",
      },
    ],
    steps: [
      {
        id: "scope",
        label: "Auftrag eingrenzen",
        caption: "Die Übergabe beginnt im erlaubten Hansa-Kontext.",
        duration: 6800,
        sourceIds: ["access-methods", "access-lessons"],
        activity: "Der Agent übernimmt die Leserechte des Consultants.",
        actionLabel: "Arbeitspaket vorbereiten",
        artifact: {
          label: "Staffing-Übergabe · Arbeitsauftrag",
          title: "Cutover-Vorbereitung planen",
          status: "Interner Entwurf",
          tone: "neutral",
          blocks: [
            {
              label: "Auftrag",
              text: "Arbeitspaket, Rollenbedarf und groben Kostenrahmen für die Partnerin zusammenstellen. Keine Kundenzusage erzeugen.",
            },
            {
              label: "Verfügbare Grundlage",
              items: [
                {
                  text: "Hansa-Projekterfahrung und Methodenstandard nutzen.",
                  state: "done",
                },
                {
                  text: "Exakte Tagessätze: in dieser Ansicht gesperrt.",
                  state: "blocked",
                },
              ],
            },
          ],
        },
        note: "Die Rechte und Quellen sind Beispieldaten. Diese Demo führt keinen echten Abruf oder Berechtigungswechsel aus.",
      },
      {
        id: "staffing",
        label: "Aufwand strukturieren",
        caption: "Ein Aufwandsvorschlag macht die nächste Abstimmung konkret.",
        duration: 7200,
        sourceIds: ["access-methods", "access-lessons"],
        activity:
          "Die Quellen beschreiben das Vorgehen. Der Agent schlägt den Aufwand zur Prüfung vor.",
        actionLabel: "Kostenrahmen ergänzen",
        artifact: {
          label: "Staffing-Übergabe · Aufwand",
          title: "Vorschlag: acht Personentage",
          status: "Planungsannahme",
          tone: "warn",
          blocks: [
            {
              label: "Rollen und Ergebnisse",
              items: [
                {
                  text: "Senior · 4 PT: Cutover-Ablauf und Prüfkriterien entwerfen.",
                  state: "open",
                },
                {
                  text: "Consultant · 4 PT: Datenlage prüfen und Laufplan vorbereiten.",
                  state: "open",
                },
              ],
            },
            {
              label: "Abgrenzung",
              text: "Nur Vorbereitung, noch keine Durchführung der Probeläufe. Die 8 PT sind eine Schätzung; die Quellen belegen das Vorgehen, nicht den Aufwand. Umfang und Verfügbarkeit bleiben zu prüfen.",
            },
          ],
        },
      },
      {
        id: "budget",
        label: "Kosten einordnen",
        caption:
          "Ein Planungsband hilft weiter; die exakten Sätze bleiben geschützt.",
        duration: 7600,
        sourceIds: ["access-cost-band"],
        activity:
          "Das erlaubte Kostenband wird auf den vorgeschlagenen Aufwand angewendet.",
        actionLabel: "Prüfanfrage für die Partnerin formulieren",
        artifact: {
          label: "Staffing-Übergabe · Kostenrahmen",
          title: "8.800–12.000 € als Planungsband",
          status: "Keine Angebotskalkulation",
          tone: "warn",
          blocks: [
            {
              label: "Nachvollziehbar gerechnet",
              text: "Vorgeschlagene 8 PT × generalisierte 1.100–1.500 €/Tag. Daraus entsteht ein Planungsband, keine Kalkulation mit exakten Rollenpreisen.",
            },
            {
              label: "Kommerzielle Prüfung",
              items: [
                {
                  text: "Partnerin: Aufwand, exakte Kalkulation und Freigabe prüfen.",
                  state: "open",
                },
                {
                  text: "Consultant und Agent erhalten dadurch keine weiteren Rechte.",
                  state: "blocked",
                },
              ],
            },
          ],
        },
      },
      {
        id: "handoff",
        label: "Übergabe erstellen",
        caption: "Arbeitspaket und offene Prüfung stehen zusammen bereit.",
        duration: 8200,
        sourceIds: ["access-methods", "access-lessons", "access-cost-band"],
        activity:
          "Der Agent erstellt einen Entwurf. Er versendet nichts und schreibt in kein führendes System.",
        artifact: {
          label: "Staffing-Übergabe · für die Partnerin",
          title: "Bereit für die interne Abstimmung",
          status: "Entwurf · nicht versendet",
          tone: "neutral",
          blocks: [
            {
              label: "Arbeitspaket",
              text: "Cutover-Vorbereitung: Senior 4 PT und Consultant 4 PT, grobes Planungsband 8.800–12.000 €. Durchführung der Probeläufe ist nicht enthalten.",
            },
            {
              label: "Prüfanfrage",
              text: "Bitte Umfang, Personenverfügbarkeit und Aufwand bestätigen sowie die kommerzielle Kalkulation in deinem berechtigten Bereich prüfen. Bis zur Freigabe bleibt dies eine interne Planungsannahme.",
            },
          ],
        },
      },
    ],
    download: {
      filename: "hansa-staffing-uebergabe-beispiel.txt",
      label: "Übergabeentwurf herunterladen",
      text: `HANSA — STAFFING-ÜBERGABE AN DIE PARTNERIN
Illustratives Produktbeispiel. Interner Entwurf, nicht versendet oder freigegeben.

ARBEITSPAKET: CUTOVER-VORBEREITUNG
- Senior, vorgeschlagen 4 Personentage: Cutover-Ablauf und Prüfkriterien entwerfen.
- Consultant, vorgeschlagen 4 Personentage: Datenlage prüfen und Laufplan vorbereiten.
- Erwartete Ergebnisse: Ablaufentwurf, Prüfkriterien und Vorschlag für Probeläufe einschließlich Prüfung eines Reservebedarfs.
- Abgrenzung: Die Durchführung der Probeläufe ist nicht enthalten.

GROBER KOSTENRAHMEN
8 Personentage × generalisiertes Kostenband 1.100–1.500 Euro pro Tag = 8.800–12.000 Euro.
Die Personentage sind eine illustrative Planungsannahme. Die Bandbreite ist keine Kalkulation aus exakten Rollenpreisen und kein Angebot.
Exakte Tagessätze und eine verbindliche kommerzielle Kalkulation sind in diesem Consultant-Entwurf nicht enthalten.

PRÜFANFRAGE AN DIE PARTNERIN
Bitte Umfang, Aufwand und Personenverfügbarkeit bestätigen. Prüfe die exakte kommerzielle Kalkulation in deinem dafür berechtigten Bereich und entscheide über die erforderliche Freigabe.
Bis dahin bleibt der Vorschlag intern. Es besteht keine Kundenzusage.

OFFENE PUNKTE
- Welche Werke und welche Datenlage umfasst die Vorbereitung?
- Sind 4 PT Senior und 4 PT Consultant ausreichend und verfügbar?
- Welche Probeläufe und Reserven sind anschließend erforderlich?
- Wer bestätigt den fachlichen Umfang und die kommerzielle Freigabe?

QUELLEN — SINNGEMÄSSE BEISPIELAUSZÜGE
- Methodenhandbuch v3, 4.2: phasenweise Cutover-Vorbereitung und Probeläufe.
- Lessons Learned Hansa Wave 1: zusätzliche Probeläufe können bei vergleichbarer Datenlage erforderlich sein.
- Generalisiertes Hansa-Kostenband: erlaubte abgeleitete Ansicht mit 1.100–1.500 Euro pro Tag; keine exakten Tagessätze.

ZUGRIFF UND STATUS
Erstellt im Beispielszenario eines Consultants für Projekt Hansa. Der Agent behält denselben Lesebereich. Die Prüfanfrage erweitert keine Rechte.
Die Demo verwendet statische Beispieldaten, keine echte Quellenfilterung. Es wurde nichts gesendet, freigegeben oder in ein führendes System geschrieben.
`,
    },
  },
};
