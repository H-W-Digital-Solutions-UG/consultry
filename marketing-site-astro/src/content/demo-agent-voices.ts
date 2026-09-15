import type { DemoVariant } from './demo-workflow-types';

type Agent = 'recherche' | 'vorbereitung' | 'pruefung' | 'redaktion' | 'sprache' | 'delivery' | 'daten' | 'risiko' | 'koordination' | 'uebergabe' | 'zugriff' | 'planung' | 'kosten';
export const demoAgents: Record<Agent, { name: string; role: string; initials: string; tone: string; kind?: 'system' }> = {
  recherche: { name: 'Recherche', role: 'Quellen finden', initials: 'R', tone: 'sage' },
  vorbereitung: { name: 'Vorbereitung', role: 'Arbeitsstand aufbauen', initials: 'V', tone: 'copper' },
  pruefung: { name: 'Fachprüfung', role: 'Aussagen hinterfragen', initials: 'F', tone: 'sage' },
  redaktion: { name: 'Redaktion', role: 'Unterlage überarbeiten', initials: 'R', tone: 'copper' },
  sprache: { name: 'Sprache', role: 'Kundenbegriffe prüfen', initials: 'S', tone: 'violet' },
  delivery: { name: 'Delivery', role: 'Ablauf vorbereiten', initials: 'D', tone: 'copper' },
  daten: { name: 'Daten', role: 'Grundlagen abgleichen', initials: 'D', tone: 'sage' },
  risiko: { name: 'Betrieb / Risiko', role: 'Gegenbelege einbringen', initials: 'B', tone: 'violet' },
  koordination: { name: 'Koordination', role: 'Beiträge zusammenführen', initials: 'K', tone: 'copper' },
  uebergabe: { name: 'Übergabe', role: 'Nächste Arbeit vorbereiten', initials: 'Ü', tone: 'copper' },
  zugriff: { name: 'Erlaubter Kontext', role: 'Bestehende Leserechte', initials: '✓', tone: 'sage', kind: 'system' },
  planung: { name: 'Einsatzplanung', role: 'Arbeitspaket strukturieren', initials: 'E', tone: 'copper' },
  kosten: { name: 'Kostenrahmen', role: 'Planungsannahmen rechnen', initials: 'K', tone: 'violet' },
};
interface Contribution { agent: Agent; text: string }
type Exchange = [Contribution, Contribution];

/** Fictional agent contributions grounded only in the existing demo workflows. */
export const demoAgentVoices: Record<DemoVariant, Exchange[]> = {
  corpus: [
    [{ agent: 'recherche', text: 'Im Vertrag steht: Cutover-Vorbereitung für Wave 2. Ich nehme § 2 als Ausgangspunkt.' }, { agent: 'vorbereitung', text: 'Ich lege das Briefing an. Werke und zusätzliche Leistungen lasse ich ausdrücklich offen.' }],
    [{ agent: 'recherche', text: 'Im früheren Angebot gibt es einen Readiness-Workshop zu Abhängigkeiten und Verantwortlichen.' }, { agent: 'vorbereitung', text: 'Den Baustein schlage ich für das Gespräch vor. Ob er beauftragt ist, bleibt zu prüfen.' }],
    [{ agent: 'pruefung', text: 'Der Vorschlag beantwortet noch nicht, welche Werke, Termine und Verantwortlichen gemeint sind.' }, { agent: 'vorbereitung', text: 'Ich mache daraus drei konkrete Kundenfragen und halte die Auftragsgrenze sichtbar.' }],
    [{ agent: 'pruefung', text: 'Leistungsrahmen, Erfahrungsbaustein und offene Fragen sind getrennt. Eine Leistungszusage ergibt sich daraus nicht.' }, { agent: 'uebergabe', text: 'Das interne Gesprächsbriefing liegt bereit. Du kannst es jetzt für deinen Termin mitnehmen.' }],
  ],
  brain: [
    [{ agent: 'recherche', text: 'Der alte Abschnitt verspricht Big-Bang mit zwei Probeläufen. Methodenhandbuch v3 sagt etwas anderes.' }, { agent: 'pruefung', text: 'Ich markiere den Altstand: je Werk planen und mindestens drei Probeläufe vorsehen.' }],
    [{ agent: 'pruefung', text: 'v3 ist die Grundlage für den neuen Methodenabsatz. Die Referenzfreigabe ist damit nicht geklärt.' }, { agent: 'redaktion', text: 'Ich aktualisiere den Absatz und lasse die offene Nennung von Industrie Nord sichtbar.' }],
    [{ agent: 'recherche', text: 'Für die externe Nennung von Industrie Nord ist kein Freigabenachweis hinterlegt.' }, { agent: 'redaktion', text: 'Ich schlage vor, die Referenz aus dem Kundenabschnitt zu entfernen. Der interne Hinweis bleibt.' }],
    [{ agent: 'pruefung', text: 'Die aktuelle Methode ist übernommen und die Referenz entfernt. Die projektbezogene Eignung bleibt zu prüfen.' }, { agent: 'uebergabe', text: 'Der neue Abschnitt ist als Entwurf bereit. Das Original bleibt unverändert; die Angebotsfreigabe bleibt offen.' }],
  ],
  brand: [
    [{ agent: 'recherche', text: 'Die Vorlage nutzt Report v2. Der neuere Reconciliation Report v3 widerspricht dem uneingeschränkten Go.' }, { agent: 'pruefung', text: 'Ich trenne die Entscheidungsempfehlung von der belegten Datenlage. Der Abschnitt muss überarbeitet werden.' }],
    [{ agent: 'pruefung', text: 'Aus v3 lässt sich kein uneingeschränktes Go ableiten. Die verbleibenden Abweichungen sind offen.' }, { agent: 'redaktion', text: 'Ich ersetze die Zusage durch einen belegten Entscheidungstext. Der Kundenbegriff ist als Nächstes dran.' }],
    [{ agent: 'sprache', text: 'Die Kundensprache lautet „Werksdigitalisierung“. Für die Referenz Industrie Nord fehlt die externe Freigabe.' }, { agent: 'redaktion', text: 'Ich ordne die Folie in Empfehlung, Entscheidungsfragen und Weitergabehinweis. Die Referenz bleibt intern.' }],
    [{ agent: 'pruefung', text: 'Empfehlung, Begriff und Referenz sind bearbeitet. Die Freigabe der gesamten Unterlage ist weiterhin offen.' }, { agent: 'uebergabe', text: 'Der Folienentwurf liegt mit zwei Entscheidungsfragen im Canvas. Die fachliche Freigabe bleibt bei euch.' }],
  ],
  ledger: [
    [{ agent: 'delivery', text: 'Auf Stand 07 beginne ich mit drei Probeläufen je Werk. Ob sie ausreichen, ist eine Annahme.' }, { agent: 'daten', text: 'Das Handbuch fordert mindestens drei. Werke im Scope und nötige Laufzahl müssen wir noch klären.' }],
    [{ agent: 'delivery', text: 'Delivery, Daten und Kunde kommen auf drei Läufe — aber alle aus demselben Methodenhandbuch.' }, { agent: 'risiko', text: 'Gegenbeleg: Wave 1 brauchte bei vergleichbarer Datenlage einen vierten Lauf. Wir brauchen eine Reserve und Datenprüfung.' }],
    [{ agent: 'daten', text: 'Ich halte offen, ob das Wave-1-Risiko auf Wave 2 zutrifft. Die Reconciliation ist ebenfalls noch zu prüfen.' }, { agent: 'koordination', text: 'Arbeitsstand 08: mindestens drei Läufe plus Reserve. Das ist unser Arbeitskonsens, keine Go-Freigabe.' }],
    [{ agent: 'delivery', text: 'Ich nehme die Planung mit Reserve und die offenen Prüfaufgaben für Datenleitung und Kundenverantwortliche in den Übergabeentwurf auf.' }, { agent: 'uebergabe', text: 'Die nächste Aufgabe startet auf 08. Der frühere Stand bleibt nachvollziehbar; fachliche Freigabe und Wissensübernahme bleiben offen.' }],
  ],
  access: [
    [{ agent: 'zugriff', text: 'Für diesen Auftrag sind Hansa-Erfahrung und Methodenstandard sichtbar. Exakte Tagessätze bleiben gesperrt.' }, { agent: 'planung', text: 'Ich bereite Arbeitspaket, Rollenbedarf und einen groben Kostenrahmen vor. Eine Kundenzusage gehört nicht dazu.' }],
    [{ agent: 'recherche', text: 'Cutover-Vorbereitung umfasst Ablauf, Datenprüfung und mögliche Reserven. Die Probeläufe selbst sind noch nicht Teil des Pakets.' }, { agent: 'planung', text: 'Ich schlage vier Personentage Senior und vier Consultant vor. Aufwand und Verfügbarkeit müssen bestätigt werden.' }],
    [{ agent: 'zugriff', text: 'Erlaubt ist das generalisierte Band von 1.100–1.500 Euro pro Tag. Rollenpreise bleiben geschützt.' }, { agent: 'kosten', text: 'Für acht Personentage ergeben sich 8.800–12.000 Euro als Planungsband. Die exakte Kalkulation geht an die Partnerin.' }],
    [{ agent: 'planung', text: 'Arbeitspaket, acht Personentage und Kostenband stehen im Übergabeentwurf. Umfang und Verfügbarkeit bleiben zu bestätigen.' }, { agent: 'uebergabe', text: 'Die Prüfanfrage für die Partnerin ist formuliert. Sie ist nicht versendet und erweitert keine Rechte.' }],
  ],
};
