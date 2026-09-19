import type { DemoWorkflow } from "./demo-workflow-types";

/** Illustrative work samples, never excerpts from real customer documents. */
export const deliveryWorkflows: Record<
  "brand" | "brain",
  DemoWorkflow
> = {
  brain: {
    title: "Wissensgraph",
    context: "Hansa · Wissen aus Confluence, Notion, Obsidian und SharePoint",
    role: "Wissensverantwortliche",
    task: "Verbinde die vorhandenen Quellen zum Firmengedächtnis für Hansa.",
    outcome: "Ein Wissensgraph mit vier Quellen, sichtbaren Widersprüchen und markiertem gültigem Stand.",
    sources: [
      { id: "confluence", title: "Confluence · Space Hansa Delivery", meta: "Beispieldaten · 48 Seiten", excerpt: "Cutover-Plan Wave 2, Steering-Unterlagen und Protokolle des Delivery-Teams." },
      { id: "notion", title: "Notion · Workspace Methoden", meta: "Beispieldaten · 12 Seiten", excerpt: "Methodenhandbuch v3 (gültig) und v2 (überholt), je Werk planen, mindestens drei Probeläufe." },
      { id: "obsidian", title: "Obsidian · Vault Lessons Learned", meta: "Beispieldaten · 31 Notizen", excerpt: "Wave 1 brauchte bei vergleichbarer Datenlage einen vierten Probelauf." },
      { id: "sharepoint", title: "SharePoint · Angebote", meta: "Beispieldaten · 7 Dokumente", excerpt: "Angebot Cutover 2025 verweist auf Methodenhandbuch v2 und nennt Industrie Nord als Referenz." },
    ],
    steps: [
      {
        id: "quellen",
        label: "Quellen verbinden",
        caption: "Vier Systeme, ein Graph. Quellen bleiben mit Herkunft und Zugriffsregeln verbunden.",
        duration: 9500,
        sourceIds: ["confluence", "notion", "obsidian", "sharepoint"],
        activity: "Die vier Quellen werden mit ihren Rechten angebunden; private Notizen bleiben außen vor.",
        actionLabel: "Zusammenhänge erkennen",
        artifact: {
          label: "Wissensgraph",
          title: "Hansa · Quellen",
          status: "4 Quellen verbunden",
          tone: "ok",
          blocks: [
            { label: "Confluence · Hansa Delivery", system: "confluence", items: [
              { text: "Cutover-Plan Wave 2", state: "done" },
            ] },
            { label: "Notion · Methoden", system: "notion", items: [
              { text: "Methodenhandbuch v3", state: "done" },
            ] },
            { label: "Obsidian · Lessons Learned", system: "obsidian", items: [
              { text: "Lessons Learned Wave 1", state: "done" },
              { text: "Persönliche Notizen · privat", state: "blocked" },
            ] },
            { label: "SharePoint · Angebote", system: "sharepoint", items: [
              { text: "Angebot Cutover 2025", state: "done" },
            ] },
          ],
        },
        note: "Verbunden heißt lesbar im erlaubten Rahmen. Private Notizen und gesperrte Ablagen erscheinen nicht.",
      },
      {
        id: "zusammenhaenge",
        label: "Zusammenhänge erkennen",
        caption: "Der Graph zeigt, was worauf aufbaut und wo sich Quellen widersprechen.",
        duration: 10000,
        sourceIds: ["confluence", "notion", "obsidian", "sharepoint"],
        activity: "Verweise zwischen Plan, Methode, Erfahrung und Angebot werden zu Kanten des Graphen.",
        actionLabel: "Gültigen Stand markieren",
        artifact: {
          label: "Wissensgraph",
          title: "Hansa · Zusammenhänge",
          status: "1 Widerspruch",
          tone: "warn",
          blocks: [
            { label: "Verknüpft", system: "graph", items: [
              { text: "Cutover-Plan Wave 2 → Lessons Learned Wave 1", state: "done" },
              { text: "Angebot Cutover 2025 → Methodenhandbuch v2", state: "open" },
            ] },
            { label: "Widerspruch", system: "conflict", text: "Das Angebot baut auf Methodenhandbuch v2 auf. Gültig ist v3: je Werk planen, mindestens drei Probeläufe." },
          ],
        },
      },
      {
        id: "stand",
        label: "Gültigen Stand markieren",
        caption: "Neue Fassungen ersetzen alte. Fehlende Freigaben bleiben sichtbar.",
        duration: 10000,
        sourceIds: ["notion", "sharepoint"],
        activity: "v3 wird als gültig markiert, v2 als überholt. Die Referenz bleibt bis zur Freigabe gesperrt.",
        actionLabel: "Nächste Aufgabe vorbereiten",
        artifact: {
          label: "Wissensgraph",
          title: "Hansa · Gültiger Stand",
          status: "Stand markiert",
          tone: "neutral",
          blocks: [
            { label: "Gilt", system: "current", items: [
              { text: "Methodenhandbuch v3", state: "done" },
              { text: "Reconciliation Report v3", state: "done" },
            ] },
            { label: "Überholt", system: "stale", items: [
              { text: "Methodenhandbuch v2 · ersetzt durch v3", state: "blocked" },
            ] },
            { label: "Freigabe", system: "approval", items: [
              { text: "Referenz Industrie Nord · extern gesperrt", state: "blocked" },
            ] },
          ],
        },
        note: "Markieren ersetzt keine Prüfung. Was gilt, hängt an Quelle, Zeitpunkt und Freigabe.",
      },
      {
        id: "aufgabe",
        label: "Weiterarbeiten",
        caption: "Die nächste Aufgabe beginnt im Graphen, nicht bei null.",
        duration: 9500,
        sourceIds: ["notion", "sharepoint", "obsidian"],
        activity: "Das Angebot Cutover wird mit dem gültigen Stand verknüpft; die offene Referenz bleibt intern.",
        artifact: {
          label: "Wissensgraph",
          title: "Hansa · Nächste Aufgabe",
          status: "Zur fachlichen Prüfung",
          tone: "neutral",
          blocks: [
            { label: "Angebot Cutover 2025", system: "sharepoint", items: [
              { text: "Nutzt jetzt Methodenhandbuch v3", state: "done" },
              { text: "Reserve für einen vierten Probelauf aus Wave 1", state: "done" },
            ] },
            { label: "Bleibt offen", system: "approval", text: "Fachliche Prüfung des Angebots und die externe Kundenfreigabe der Referenz." },
          ],
        },
        note: "Der Graph hält fest, auf welchen Quellen die Arbeit aufbaut und welche Zugriffsregeln gelten.",
      },
    ],
    download: {
      filename: "beispiel-hansa-wissensgraph.txt",
      label: "Graphübersicht herunterladen",
      text: `Wissensgraph · Hansa (fiktives Beispiel)

Quellen: Confluence (Hansa Delivery), Notion (Methoden), Obsidian (Lessons Learned), SharePoint (Angebote)
Gilt: Methodenhandbuch v3, Reconciliation Report v3, Lessons Learned Wave 1
Überholt: Methodenhandbuch v2, Reconciliation Report v2
Widerspruch: Angebot Cutover 2025 verweist auf v2
Freigabe offen: Referenz Industrie Nord (extern gesperrt)
Nächste Aufgabe: Angebot Cutover 2025 auf v3, Reserve aus Wave 1, Referenz intern

Die Demo verwendet statische Beispieldaten. Es wurde keine Quelle verändert und nichts freigegeben.
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
      text: `ILLUSTRATIVES PRODUKTBEISPIEL: keine echten Kundendaten
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

ÄNDERUNGSNOTIZ (INTERN)
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
