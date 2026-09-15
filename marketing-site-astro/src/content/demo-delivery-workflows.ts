import type { DemoWorkflow } from "./demo-workflow-types";

/** Illustrative work samples, never excerpts from real customer documents. */
export const deliveryWorkflows: Record<
  "corpus" | "brand" | "brain",
  DemoWorkflow
> = {
  corpus: {
    title: "Gesprächsvorbereitung",
    context: "Hansa · Vorbereitung des Gesprächs zu Wave 2",
    role: "Account Lead",
    task: "Bereite den nächsten Kundentermin für Hansa Wave 2 vor.",
    outcome:
      "Ein Gesprächsbriefing mit Leistungsrahmen, einem Erfahrungsbaustein und drei offenen Fragen.",
    sources: [
      {
        id: "vertrag",
        title: "V1 · Rahmenvertrag Hansa",
        meta: "Illustratives Beispiel · paraphrasierter Auszug, § 2",
        excerpt:
          "Begleitung der Cutover-Vorbereitung für Wave 2. Zusätzliche Leistungen sind gesondert zu vereinbaren.",
      },
      {
        id: "angebot",
        title: "A1 · Früheres Angebot: Cutover-Begleitung",
        meta: "Illustratives Beispiel · paraphrasierter Auszug, Vorgehen",
        excerpt:
          "Ein gemeinsamer Readiness-Workshop klärt Abhängigkeiten, Verantwortliche und offene Voraussetzungen vor der Detailplanung.",
      },
    ],
    steps: [
      {
        id: "auftrag",
        label: "Auftrag lesen",
        caption: "Mit einem Vertrag beginnen.",
        duration: 9500,
        sourceIds: ["vertrag"],
        activity:
          "Der Leistungsrahmen wird aus § 2 in die Gesprächsvorbereitung übernommen.",
        actionLabel: "Gesprächsanlass ableiten",
        artifact: {
          label: "Gesprächsbriefing",
          title: "Hansa · Wave 2",
          status: "Erster Arbeitsstand",
          tone: "neutral",
          blocks: [
            {
              label: "Vereinbart",
              text: "Cutover-Vorbereitung für Wave 2. Zusätzliche Leistungen separat vereinbaren. [V1]",
            },
            {
              label: "Vorschlag",
              text: "Passende Vorarbeit noch nicht ergänzt.",
            },
            {
              label: "Im Gespräch klären",
              text: "Fragen noch nicht vorbereitet.",
            },
          ],
        },
        note: "Ein Vertrag liefert einen Gesprächsanlass. Für ein belastbares Angebot fehlen weitere Grundlagen.",
      },
      {
        id: "erfahrung",
        label: "Erfahrung ergänzen",
        caption: "Ein früheres Vorgehen wird zum Gesprächsvorschlag.",
        duration: 10000,
        sourceIds: ["vertrag", "angebot"],
        activity:
          "Ein passender Workshop-Baustein wird aus dem früheren Angebot vorgeschlagen.",
        actionLabel: "Baustein ins Briefing übernehmen",
        artifact: {
          label: "Gesprächsbriefing",
          title: "Hansa · Wave 2",
          status: "Baustein zur Auswahl",
          tone: "neutral",
          blocks: [
            {
              label: "Vereinbart",
              text: "Cutover-Vorbereitung für Wave 2. Zusätzliche Leistungen separat vereinbaren. [V1]",
            },
            {
              label: "Vorschlag",
              text: "Readiness-Workshop zu Abhängigkeiten und Verantwortlichen besprechen. Beauftragung offen. [A1]",
            },
            {
              label: "Im Gespräch klären",
              text: "Fragen noch nicht vorbereitet.",
            },
          ],
        },
      },
      {
        id: "fragen",
        label: "Lücken klären",
        caption: "Aus fehlenden Angaben werden Fragen für den Termin.",
        duration: 10000,
        sourceIds: ["vertrag", "angebot"],
        activity:
          "Der übernommene Vorschlag wird um die noch offenen Kundenfragen ergänzt.",
        actionLabel: "Gesprächsbriefing zusammenstellen",
        artifact: {
          label: "Gesprächsbriefing",
          title: "Hansa · Wave 2",
          status: "Lücken sichtbar",
          tone: "warn",
          blocks: [
            {
              label: "Vereinbart",
              text: "Cutover-Vorbereitung für Wave 2. Zusätzliche Leistungen separat vereinbaren. [V1]",
            },
            {
              label: "Vorschlag",
              text: "Readiness-Workshop zu Abhängigkeiten und Verantwortlichen besprechen. Beauftragung offen. [A1]",
            },
            {
              label: "Im Gespräch klären",
              items: [
                {
                  text: "Welche Werke und welcher Zieltermin?",
                  state: "open",
                },
                {
                  text: "Wer verantwortet die Vorbereitung beim Kunden?",
                  state: "open",
                },
                {
                  text: "Workshop im Auftrag enthalten oder separat vereinbaren?",
                  state: "open",
                },
              ],
            },
          ],
        },
      },
      {
        id: "briefing",
        label: "Briefing nutzen",
        caption: "Eine Arbeitsunterlage für den nächsten Termin.",
        duration: 11000,
        sourceIds: ["vertrag", "angebot"],
        activity:
          "Leistungsrahmen, Vorschlag und offene Fragen stehen in einem kompakten Gesprächsbriefing.",
        artifact: {
          label: "Gesprächsbriefing",
          title: "Hansa · Wave 2",
          status: "Interner Entwurf",
          tone: "neutral",
          blocks: [
            {
              label: "Vereinbart",
              text: "Cutover-Vorbereitung für Wave 2. Zusätzliche Leistungen separat vereinbaren. [V1]",
            },
            {
              label: "Vorschlag",
              text: "Readiness-Workshop zu Abhängigkeiten und Verantwortlichen besprechen. Beauftragung offen. [A1]",
            },
            {
              label: "Im Gespräch klären",
              items: [
                { text: "Welche Werke und welcher Zieltermin?", state: "open" },
                {
                  text: "Wer verantwortet die Vorbereitung beim Kunden?",
                  state: "open",
                },
                {
                  text: "Workshop im Auftrag enthalten oder separat vereinbaren?",
                  state: "open",
                },
              ],
            },
          ],
        },
        note: "Zum internen Vorbereiten. Noch kein Angebot und keine Zusage zu Preis, Kapazität oder Leistungsumfang.",
      },
    ],
    download: {
      filename: "beispiel-hansa-gespraechsbriefing.txt",
      label: "Briefing herunterladen",
      text: `ILLUSTRATIVES PRODUKTBEISPIEL — keine echten Kundendaten
Alle Dokumentauszüge sind erfundene, paraphrasierte Arbeitsbeispiele.

GESPRÄCHSBRIEFING · HANSA · WAVE 2
Status: Interner Entwurf

VEREINBART
Cutover-Vorbereitung für Wave 2. Zusätzliche Leistungen separat vereinbaren. [V1]

VORSCHLAG
Readiness-Workshop zu Abhängigkeiten und Verantwortlichen besprechen. Beauftragung offen. [A1]

IM GESPRÄCH KLÄREN
1. Welche Werke und welcher Zieltermin?
2. Wer verantwortet die Vorbereitung beim Kunden?
3. Workshop im Auftrag enthalten oder separat vereinbaren?

QUELLEN IM BEISPIEL
[V1] Rahmenvertrag Hansa, § 2: Begleitung der Cutover-Vorbereitung für Wave 2; zusätzliche Leistungen gesondert vereinbaren.
[A1] Früheres Angebot: Cutover-Begleitung, Vorgehen: Readiness-Workshop für Abhängigkeiten, Verantwortliche und offene Voraussetzungen.

GRENZE
Arbeitsunterlage für die interne Gesprächsvorbereitung. Kein Angebot und keine Zusage zu Preis, Kapazität oder Leistungsumfang.
`,
    },
  },
  brain: {
    title: "Angebotswerkstatt",
    context: "Angebotsentwurf · S/4HANA-Cutover",
    role: "Angebotsverantwortliche",
    task: "Bringe den Cutover-Abschnitt auf den aktuellen Stand.",
    outcome:
      "Ein aktualisierter Angebotsabschnitt mit Methodenquelle und sichtbarer Freigabelücke.",
    sources: [
      {
        id: "entwurf",
        title: "E1 · Alter Angebotsabschnitt",
        meta: "Illustratives Beispiel · paraphrasierter Entwurf",
        excerpt:
          "Wir führen den Cutover als Big-Bang mit zwei Probeläufen durch. Als Referenz dient Industrie Nord.",
      },
      {
        id: "methode",
        title: "M3 · Methodenhandbuch v3",
        meta: "Beispieldaten · Kap. 4.2 · gültig seit 15.04.2026",
        excerpt:
          "Phasenweise je Werk, mindestens drei Probeläufe. Von der Practice-Leitung freigegeben; ersetzt v2.",
      },
      {
        id: "referenz",
        title: "R1 · Projektakte Industrie Nord",
        meta: "Beispieldaten · Freigabestatus",
        excerpt:
          "Keine Kundenfreigabe für die externe Referenznennung hinterlegt.",
      },
    ],
    steps: [
      {
        id: "altstand",
        label: "Altstand erkennen",
        caption: "Ein alter Absatz soll in ein neues Angebot.",
        duration: 9500,
        sourceIds: ["entwurf", "methode"],
        activity:
          "Der wiederverwendete Abschnitt wird gegen die heute geltende Methode geprüft.",
        actionLabel: "Methodenabschnitt aktualisieren",
        artifact: {
          label: "Angebotsentwurf",
          title: "Vorgehen beim Cutover",
          status: "Veralteter Baustein",
          tone: "warn",
          blocks: [
            {
              label: "Bisher im Entwurf",
              text: "Wir führen den Cutover als Big-Bang mit zwei Probeläufen durch. [E1]",
            },
            {
              label: "Änderungsbedarf",
              text: "v3 ersetzt diesen Ansatz durch eine Planung je Werk mit mindestens drei Probeläufen. [M3]",
            },
          ],
        },
      },
      {
        id: "methode",
        label: "Absatz aktualisieren",
        caption: "Die neue Methode wird in konkreten Angebotstext übersetzt.",
        duration: 10000,
        sourceIds: ["entwurf", "methode", "referenz"],
        activity:
          "Der Methodenabschnitt wurde nach Auswahl aktualisiert. Die Referenznennung ist noch offen.",
        actionLabel: "Referenznennung prüfen",
        artifact: {
          label: "Angebotsentwurf",
          title: "Vorgehen beim Cutover",
          status: "Methode aktualisiert",
          tone: "neutral",
          blocks: [
            {
              label: "Neuer Absatz",
              before: "Big-Bang mit zwei Probeläufen.",
              text: "Wir planen den Cutover phasenweise je Werk mit mindestens drei Probeläufen. [M3]",
            },
            {
              label: "Noch im Entwurf",
              text: "Als Referenz dient Industrie Nord. [E1] Die externe Freigabe ist nicht belegt. [R1]",
            },
          ],
        },
      },
      {
        id: "referenz",
        label: "Referenz bereinigen",
        caption: "Eine ungeklärte Freigabe wird nicht zur stillen Zusage.",
        duration: 10000,
        sourceIds: ["methode", "referenz"],
        activity:
          "Für Industrie Nord liegt keine Kundenfreigabe vor. Die Nennung wird zur Entfernung vorgeschlagen.",
        actionLabel: "Referenz entfernen und Entwurf sichern",
        artifact: {
          label: "Angebotsentwurf",
          title: "Externe Referenz offen",
          status: "Entscheidung erforderlich",
          tone: "warn",
          blocks: [
            {
              label: "Vorgeschlagene Änderung",
              before: "Als Referenz dient Industrie Nord.",
              text: "Referenznennung aus dem Kundenabschnitt entfernen. Intern bleibt der fehlende Freigabenachweis sichtbar. [R1]",
            },
            {
              label: "Methodenabsatz bleibt",
              text: "Wir planen den Cutover phasenweise je Werk mit mindestens drei Probeläufen. [M3]",
            },
          ],
        },
      },
      {
        id: "abschnitt",
        label: "Abschnitt verwenden",
        caption: "Ein aktualisierter Text statt einer weiteren Trefferliste.",
        duration: 11000,
        sourceIds: ["methode", "referenz"],
        activity:
          "Der Entwurf enthält die aktuelle Methode; die nicht freigegebene Referenz ist entfernt.",
        artifact: {
          label: "Angebotsabschnitt",
          title: "Vorgehen beim Cutover",
          status: "Zur fachlichen Prüfung",
          tone: "neutral",
          blocks: [
            {
              label: "Neuer Angebotstext",
              text: "Wir planen den Cutover phasenweise je Werk mit mindestens drei Probeläufen. [M3]",
            },
            {
              label: "Änderungen",
              items: [
                {
                  text: "Methodenhandbuch v3 statt v2 verwendet.",
                  state: "done",
                },
                {
                  text: "Industrie Nord aus dem Kundenabschnitt entfernt.",
                  state: "done",
                },
              ],
            },
            {
              label: "Vor Verwendung klären",
              items: [
                {
                  text: "Projektbezogene Eignung durch Angebotsverantwortliche prüfen.",
                  state: "open",
                },
                {
                  text: "Eine spätere Referenznennung braucht Kundenfreigabe. [R1]",
                  state: "open",
                },
              ],
            },
          ],
        },
        note: "Ein Entwurf zur Übernahme. Das Originaldokument wurde nicht überschrieben; eine externe Angebotsfreigabe bleibt erforderlich.",
      },
    ],
    download: {
      filename: "beispiel-cutover-angebotsabschnitt.txt",
      label: "Abschnitt herunterladen",
      text: `ILLUSTRATIVES PRODUKTBEISPIEL — keine echten Kundendaten
Dokumentauszüge und Angebotstext sind paraphrasierte Arbeitsbeispiele.

ANGEBOTSABSCHNITT · VORGEHEN BEIM CUTOVER
Status: Entwurf zur fachlichen Prüfung

NEUER ANGEBOTSTEXT
Wir planen den Cutover phasenweise je Werk mit mindestens drei Probeläufen. [M3]

ÄNDERUNGSNOTIZ — INTERN
Methodenhandbuch v3 statt des abgelösten v2 verwendet.
Die Nennung von Industrie Nord wurde aus dem Kundenabschnitt entfernt, weil keine externe Kundenfreigabe hinterlegt ist. [R1]

OFFEN VOR VERWENDUNG
- Projektbezogene Eignung durch Angebotsverantwortliche prüfen.
- Externe Angebotsfreigabe einholen.
- Eine spätere Referenznennung braucht einen belegten Kundenfreigabenachweis.

QUELLEN IM BEISPIEL
[M3] Methodenhandbuch v3, Kap. 4.2: gültig seit 15.04.2026, Freigabe Practice Lead; phasenweise je Werk, mindestens drei Probeläufe.
[R1] Projektakte Industrie Nord: keine Kundenfreigabe für die externe Referenznennung hinterlegt.

GRENZE
Das Originaldokument wurde nicht überschrieben. Dieser Arbeitsentwurf ist nicht extern freigegeben.
`,
    },
  },
  brand: {
    title: "Steering vorbereiten",
    context: "Hansa · Steering-Unterlage v7 · Abschnitt 3",
    role: "Projektleitung",
    task: "Überarbeite diese Steering-Folie mit aktueller Grundlage und unserer Kundensprache.",
    outcome:
      "Eine übersichtliche Steering-Folie mit belegter Aussage, zwei Entscheidungsfragen und offenem Freigabestatus.",
    sources: [
      {
        id: "steering",
        title: "S7 · Steering-Unterlage v7",
        meta: "Illustratives Beispiel · paraphrasierter Entwurf, Abschnitt 3",
        excerpt:
          "Wir empfehlen das uneingeschränkte Go für die Digital Twin Factory. Referenz: Industrie Nord. Grundlage: Reconciliation Report v2.",
      },
      {
        id: "report",
        title: "R3 · Reconciliation Report v3",
        meta: "Beispieldaten · paraphrasierte Aussage · 11.09.",
        excerpt:
          "Der aktuelle Stand widerspricht einer uneingeschränkten Go-Empfehlung. Die verbleibenden Abweichungen sind zu klären.",
      },
      {
        id: "sprache",
        title: "B3 · Sprachregel v3",
        meta: "Beispieldaten · paraphrasierte Sprachregel",
        excerpt:
          "In Kundendokumenten ersetzt „Werksdigitalisierung“ den bisherigen Begriff „Digital Twin Factory“.",
      },
      {
        id: "freigabe",
        title: "F1 · Referenz Industrie Nord",
        meta: "Beispieldaten · Freigabestatus",
        excerpt:
          "Intern zitierbar. Keine Kundenfreigabe für die externe Verwendung hinterlegt.",
      },
      {
        id: "layout",
        title: "L1 · Consultry-Beispiellayout",
        meta: "Darstellungsregel für diese Demo · keine Hansa-CD-Vorgabe",
        excerpt:
          "Die Beispiel-Folie gliedert sich in eine Kernaussage, zwei Entscheidungsfragen und einen getrennten Hinweis zur Weitergabe. Dieses Layout illustriert die Bearbeitung im Canvas.",
      },
    ],
    steps: [
      {
        id: "vorlage",
        label: "Vorlage prüfen",
        caption: "Aus dieser Folie soll eine brauchbare Entscheidungsgrundlage werden.",
        duration: 10000,
        sourceIds: ["steering", "report"],
        activity:
          "Die Go-Empfehlung aus v7 wird mit dem neueren Report abgeglichen.",
        actionLabel: "Go-Empfehlung überarbeiten",
        artifact: {
          label: "Steering-Folie · Ausgangsfassung",
          title: "Entscheidungsvorschlag · Abschnitt 3",
          status: "Überarbeitung nötig",
          tone: "warn",
          blocks: [
            {
              label: "Bisher im Entwurf",
              text: "Uneingeschränktes Go für die Digital Twin Factory. Referenz: Industrie Nord. [S7]",
            },
            {
              label: "Neuere Grundlage",
              text: "Report v3 widerspricht dem Go. Die Folie verwendet noch v2. [R3]",
            },
          ],
        },
      },
      {
        id: "wissen",
        label: "Aussage belegen",
        caption: "Die Empfehlung folgt der aktuellen Evidenz.",
        duration: 10000,
        sourceIds: ["report", "sprache"],
        activity:
          "Die uneingeschränkte Zusage wurde durch einen belegten Entscheidungstext ersetzt.",
        actionLabel: "Sprache und Folienaufbau anpassen",
        artifact: {
          label: "Steering-Folie · Inhalt überarbeitet",
          title: "Entscheidungsvorschlag · Abschnitt 3",
          status: "Wissensstand korrigiert",
          tone: "neutral",
          blocks: [
            {
              label: "Überarbeitete Empfehlung",
              before: "Uneingeschränktes Go für die Digital Twin Factory.",
              text: "Ein uneingeschränktes Go ist nicht belegt. Vor der Entscheidung die verbleibenden Abweichungen klären. [R3]",
            },
            {
              label: "Noch anzupassen",
              text: "„Werksdigitalisierung“ als Kundenbegriff verwenden. [B3]",
            },
          ],
        },
      },
      {
        id: "sprache",
        label: "Sprache und Aufbau",
        caption: "Eine klare Aussage. Zwei Fragen. Ein getrennter Prüfhinweis.",
        duration: 10000,
        sourceIds: ["report", "sprache", "freigabe", "layout"],
        activity:
          "Die Folie erhält den Kundenbegriff und einen übersichtlichen Aufbau. Die Referenzfreigabe bleibt getrennt sichtbar.",
        actionLabel: "Folienentwurf zusammenstellen",
        artifact: {
          label: "Steering-Folie · Layoutvorschlag",
          title: "Entscheidung zur Werksdigitalisierung",
          status: "Externe Referenz gesperrt",
          tone: "warn",
          blocks: [
            {
              label: "Entscheidungsgrundlage",
              before: "Uneingeschränktes Go für die Digital Twin Factory.",
              text: "Ein uneingeschränktes Go für die Werksdigitalisierung ist nicht belegt. [R3, B3]",
            },
            {
              label: "Im Steering klären",
              items: [
                { text: "Welche Abweichungen verhindern das Go?", state: "open" },
                { text: "Wer klärt sie bis wann?", state: "open" },
              ],
            },
            {
              label: "Interner Prüfhinweis",
              before: "Referenz: Industrie Nord.",
              text: "Referenz aus der Kundenfassung entfernen; externe Freigabe fehlt. [F1]",
            },
          ],
        },
      },
      {
        id: "memo",
        label: "Folie prüfen",
        caption: "Die Folie steht. Die Entscheidung bleibt beim Steering.",
        duration: 11000,
        sourceIds: ["report", "sprache", "freigabe", "layout"],
        activity:
          "Aussage, Kundensprache und Aufbau stehen im Folienentwurf. Fachliche Prüfung und Weitergabe bleiben offen.",
        artifact: {
          label: "Steering-Folie · Entwurf zur Prüfung",
          title: "Entscheidung zur Werksdigitalisierung",
          status: "Noch nicht freigegeben",
          tone: "warn",
          blocks: [
            {
              label: "Entscheidungsgrundlage",
              text: "Ein uneingeschränktes Go ist nicht belegt. Verbleibende Abweichungen vor der Entscheidung klären. [R3]",
            },
            {
              label: "Im Steering klären",
              items: [
                {
                  text: "Welche Abweichungen verhindern das Go?",
                  state: "open",
                },
                {
                  text: "Wer klärt sie bis wann?",
                  state: "open",
                },
              ],
            },
            {
              label: "Vor Weitergabe",
              items: [
                {
                  text: "Ungeklärte Referenznennung entfernt. [F1]",
                  state: "done",
                },
                {
                  text: "Unterlage fachlich prüfen und freigeben.",
                  state: "open",
                },
              ],
            },
          ],
        },
        note: "Entwurf für die fachliche Prüfung. Erst nach Freigabe weitergeben.",
      },
    ],
    download: {
      filename: "beispiel-steering-folienentwurf.txt",
      label: "Folieninhalt herunterladen",
      text: `ILLUSTRATIVES PRODUKTBEISPIEL — keine echten Kundendaten
Dokumentauszüge und Folieninhalt sind paraphrasierte Arbeitsbeispiele.

STEERING-FOLIE 3 · TEXTENTWURF
Entscheidung zur Werksdigitalisierung
Status: Noch nicht freigegeben

ENTSCHEIDUNGSGRUNDLAGE
Ein uneingeschränktes Go ist nicht belegt. Verbleibende Abweichungen vor der Entscheidung klären. [R3]

IM STEERING KLÄREN
1. Welche Abweichungen verhindern das Go?
2. Wer klärt sie bis wann?

VOR WEITERGABE
- Ungeklärte Referenznennung entfernt. [F1]
- Unterlage fachlich prüfen und freigeben.

ÄNDERUNGSNOTIZ — INTERN
- Die uneingeschränkte Go-Empfehlung auf Basis von Report v2 wurde überarbeitet. [R3]
- „Werksdigitalisierung“ ersetzt den bisherigen Kundenbegriff. [B3]
- Kernaussage, zwei Entscheidungsfragen und Weitergabehinweis bilden einen übersichtlichen Folienaufbau. [L1]
- Die Referenz Industrie Nord wurde aus der Kundenfassung entfernt. Die externe Kundenfreigabe ist nicht hinterlegt. [F1]

GESTALTUNG UND GRENZE
Das Canvas zeigt einen Layoutvorschlag im Consultry-Beispielstil, keine Hansa-CD-Vorgabe. Dieser Download enthält den Folieninhalt als Text, keine Präsentationsdatei. Die gesamte Unterlage bleibt fachlich zu prüfen; Steering-Entscheidung und Freigabe zur Weitergabe sind offen.

QUELLEN IM BEISPIEL
[R3] Reconciliation Report v3, 11.09.: widerspricht der uneingeschränkten Go-Empfehlung.
[B3] Sprachregel v3: „Werksdigitalisierung“ ersetzt „Digital Twin Factory“ in Kundendokumenten.
[F1] Referenz Industrie Nord: intern zitierbar; keine Kundenfreigabe für externe Verwendung hinterlegt.
[L1] Consultry-Beispiellayout: Kernaussage, zwei Entscheidungsfragen, Weitergabehinweis. Darstellungsregel dieser Demo, keine Hansa-CD-Vorgabe.
`,
    },
  },
};
