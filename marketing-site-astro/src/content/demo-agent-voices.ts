import type { DemoVariant } from './demo-workflow-types';

type Agent = 'recherche' | 'vorbereitung' | 'pruefung' | 'redaktion' | 'sprache' | 'delivery' | 'daten' | 'risiko' | 'koordination' | 'uebergabe' | 'zugriff' | 'planung' | 'kosten' | 'quellen' | 'graph' | 'aktualitaet' | 'identitaet' | 'rechte' | 'integration' | 'protokoll' | 'orchestrierung' | 'audit';
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
  quellen: { name: 'Quellen', role: 'Systeme anbinden', initials: 'Q', tone: 'sage' },
  graph: { name: 'Wissensgraph', role: 'Zusammenhänge erkennen', initials: 'G', tone: 'copper' },
  aktualitaet: { name: 'Aktualität', role: 'Gültigen Stand prüfen', initials: 'A', tone: 'violet' },
  identitaet: { name: 'Identität', role: 'SSO und Gruppen', initials: 'I', tone: 'sage', kind: 'system' },
  rechte: { name: 'Rechteprüfung', role: 'Wirkungen prüfen', initials: 'R', tone: 'copper' },
  integration: { name: 'Integrationen', role: 'Quellsysteme spiegeln', initials: 'S', tone: 'violet' },
  protokoll: { name: 'Protokoll', role: 'Zugriffe festhalten', initials: 'P', tone: 'sage', kind: 'system' },
  orchestrierung: { name: 'Orchestrierung', role: 'Aufgaben verteilen', initials: 'O', tone: 'copper', kind: 'system' },
  audit: { name: 'Audit', role: 'Beiträge gegen Quellen prüfen', initials: 'A', tone: 'violet', kind: 'system' },
};
interface Contribution { agent: Agent; text: string }
type Exchange = [Contribution, Contribution];

/** Fictional agent contributions grounded only in the existing demo workflows. */
export const demoAgentVoices: Record<DemoVariant, Exchange[]> = {
  brain: [
    [{ agent: 'quellen', text: 'Confluence, Notion, Obsidian und SharePoint sind mit ihren Rechten angebunden. Private Notizen bleiben außen vor.' }, { agent: 'graph', text: 'Ich lege für jede Quelle Knoten an. Herkunft und Zugriffsregeln bleiben mit den verknüpften Inhalten verbunden.' }],
    [{ agent: 'recherche', text: 'Das Angebot Cutover 2025 verweist auf Methodenhandbuch v2. In Notion gilt inzwischen v3.' }, { agent: 'graph', text: 'Ich verbinde Plan, Methode, Erfahrung und Angebot und markiere den Verweis auf v2 als Widerspruch.' }],
    [{ agent: 'aktualitaet', text: 'v3 ersetzt v2, Report v3 ersetzt v2. Für Industrie Nord fehlt die externe Freigabe.' }, { agent: 'pruefung', text: 'Ich markiere den gültigen Stand und halte die Freigabelücke sichtbar. Geprüft ist damit noch nichts.' }],
    [{ agent: 'graph', text: 'Das Angebot ist jetzt mit v3 und der Reserve aus Wave 1 verknüpft. Die Referenz bleibt intern vermerkt.' }, { agent: 'uebergabe', text: 'Die nächste Aufgabe startet im Graphen. Fachliche Prüfung und Kundenfreigabe bleiben offen.' }],
  ],
  brand: [
    [{ agent: 'recherche', text: 'Die Vorlage nutzt Report v2. Der neuere Reconciliation Report v3 widerspricht dem uneingeschränkten Go.' }, { agent: 'pruefung', text: 'Ich trenne die Entscheidungsempfehlung von der belegten Datenlage. Der Abschnitt muss überarbeitet werden.' }],
    [{ agent: 'pruefung', text: 'Aus v3 lässt sich kein uneingeschränktes Go ableiten. Die verbleibenden Abweichungen sind offen.' }, { agent: 'redaktion', text: 'Ich ersetze die Zusage durch einen belegten Entscheidungstext. Der Kundenbegriff ist als Nächstes dran.' }],
    [{ agent: 'sprache', text: 'Die Kundensprache lautet „Werksdigitalisierung“. Für die Referenz Industrie Nord fehlt die externe Freigabe.' }, { agent: 'redaktion', text: 'Ich ordne die Folie in Empfehlung, Entscheidungsfragen und Weitergabehinweis. Die Referenz bleibt intern.' }],
    [{ agent: 'pruefung', text: 'Empfehlung, Begriff und Referenz sind bearbeitet. Die Freigabe der gesamten Unterlage ist weiterhin offen.' }, { agent: 'uebergabe', text: 'Der Folienentwurf liegt mit zwei Entscheidungsfragen im Canvas. Die fachliche Freigabe bleibt bei euch.' }],
  ],
  ledger: [
    [{ agent: 'orchestrierung', text: 'Ich verteile den Auftrag: Delivery prüft den Ablauf, Daten die Grundlagen, Risiko sucht Gegenbelege. Jeder liest nur seinen Ausschnitt.' }, { agent: 'delivery', text: 'Auf Stand 07 stehen drei Probeläufe je Werk. Ob sie ausreichen, ist eine Annahme aus dem Handbuch.' }],
    [{ agent: 'risiko', text: 'Gegenbeleg: Wave 1 brauchte bei vergleichbarer Datenlage einen vierten Lauf. Wir brauchen eine Reserve.' }, { agent: 'audit', text: 'Delivery und Daten stützen sich auf dieselbe Quelle. Ich zähle das als einen Beleg, nicht als zwei. Der Gegenbeleg aus Wave 1 steht dagegen.' }],
    [{ agent: 'daten', text: 'Ob das Wave-1-Risiko auf Wave 2 zutrifft, halte ich offen. Die Reconciliation ist noch nicht abgeschlossen.' }, { agent: 'koordination', text: 'Arbeitsstand 08: mindestens drei Läufe plus Reserve, Datenprüfung vorab. Das ist Konsens, keine Go-Freigabe.' }],
    [{ agent: 'audit', text: 'Protokoll: vier Beiträge, drei Agenten, vier Quellen, ein Gegenbeleg, eine offene Frage, keine Freigabe.' }, { agent: 'uebergabe', text: 'Lauf 08 ist im Ledger. Der nächste Lauf startet darauf, Stand 07 bleibt nachvollziehbar.' }],
  ],
  access: [
    [{ agent: 'identitaet', text: 'Entra ID ist verbunden, die Gruppen Hansa-Team und Partner sind synchronisiert. Zwei Gäste haben kein SSO.' }, { agent: 'rechte', text: 'Agenten bleiben als eigene Mitwirkende identifizierbar. Sie handeln im Auftrag einer Person mit begrenzten, delegierten Befugnissen.' }],
    [{ agent: 'rechte', text: 'Aus der Rechtematrix werden drei Rollen. Tagessätze und Kalkulation bleiben bei den Partnerinnen.' }, { agent: 'rechte', text: 'Ein Agent erhält nur die für den Auftrag delegierten Befugnisse innerhalb der Organisationsregeln. Löschen und Weitergabe bleiben hier gesperrt.' }],
    [{ agent: 'integration', text: 'SharePoint und CRM spiegeln ihre Berechtigungen. Das DMS wartet auf die Freigabe der IT.' }, { agent: 'rechte', text: 'Geprüft wird am Zugriff selbst. Was im Quellsystem gesperrt ist, bleibt auch für Agenten gesperrt.' }],
    [{ agent: 'protokoll', text: 'Für den Auftrag Staffing-Vorbereitung: drei Lesezugriffe, kein Schreibzugriff außerhalb des Canvas, ein abgelehnter Abruf der Tagessätze.' }, { agent: 'uebergabe', text: 'Der Rahmen steht. Innerhalb arbeitet der Agent selbstständig, außerhalb wird abgelehnt und festgehalten.' }],
  ],
};
