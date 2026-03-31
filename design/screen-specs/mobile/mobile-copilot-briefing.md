# Mobile Copilot Briefing — Screen Spec

**Screen-ID:** MOB-05
**PRD-Modul:** 7.1 — AI Copilot
**Journey(s):** J12-S2 (Thomas' Morgen-Briefing), J13-S1 (Stefan: Tages-Briefing)
**Layout-Typ:** Progressive Disclosure (Fullscreen)
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — Morgen-Briefing unterwegs |
| **Sekundaer** | Stefan (Tages-Briefing), Katrin (Quick-Fragen) |
| **Frequenz** | Thomas: 1x/Tag morgens (2-3 Min. Session). Stefan: 1x/Tag. Katrin: ad-hoc. |
| **Trigger** | Bottom Nav "Copilot" (Katrin) / "AI" (Thomas), Push "Dein Morgen-Briefing ist bereit", App-Start (Auto-Open bei erstem Login des Tages). |
| **Herkunft** | Bottom Navigation Bar, Push Notification, Auto-Open bei Login. |
| **Ziel** | Tages-Briefing lesen, auf Empfehlungen reagieren, Quick-Fragen stellen. |
| **Geraete** | Smartphone (primaer). Touch + optional Voice. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | morgens ein kompaktes Briefing auf dem Handy lesen | ich im Taxi weiss was heute ansteht |
| 2 | Thomas | die wichtigsten Zahlen (Pipeline, Approvals, Auslastung) auf einen Blick sehen | ich Prioritaeten setzen kann |
| 3 | Thomas | auf Empfehlungen direkt reagieren (genehmigen, anrufen, delegieren) | ich unterwegs produktiv bin |
| 4 | Thomas | per Voice eine Folgefrage stellen | ich nicht tippen muss |
| 5 | Stefan | ein Briefing zu meinen Projekten und Verfuegbarkeiten sehen | ich den Tag planen kann |
| 6 | Katrin | den Copilot nach spezifischen Daten fragen | ich schnelle Antworten bekomme |

---

## 3. Layout — Briefing (Fullscreen)

**Layout-Typ: Progressive Disclosure (Fullscreen)**
**Begruendung:** Das Briefing ist ein linearer, konversationeller Flow. Fullscreen nutzt den gesamten Bildschirm fuer maximale Lesbarkeit. Kein Bento Grid — Content ist sequentiell, nicht parallel.

```
┌─ Status Bar ────────────────────────────────┐
│  9:41                              ■ ▶ 87%  │
├─────────────────────────────────────────────┤
│                                             │
│  [←]  Copilot                               │  <- Header mit Back
│                                             │
│  ┌─ Briefing Card (ai-surface) ──────────┐  │
│  │  Guten Morgen, Thomas 👋               │  │
│  │  Montag, 31. Maerz 2026               │  │
│  │                                        │  │
│  │  ─── Deine Zahlen ───                  │  │
│  │                                        │  │
│  │  Pipeline     Auslastung   Approvals   │  │
│  │  2.4M EUR     78%          3 offen     │  │
│  │  +180K ▲      -2% ▼                    │  │
│  │                                        │  │
│  └────────────────────────────────────────┘  │
│                                             │
│  ┌─ Empfehlung 1 ────────────────────────┐  │
│  │  ⚠️ Churn-Risiko: RetailCorp AG       │  │
│  │  45 Tage ohne Kontakt.                │  │
│  │  [Alert oeffnen →]                    │  │
│  └────────────────────────────────────────┘  │
│                                             │
│  ┌─ Empfehlung 2 ────────────────────────┐  │
│  │  ✅ 3 Staffing-Freigaben ausstehend   │  │
│  │  RetailCorp, InnovateTech, MedTech    │  │
│  │  [Approvals oeffnen →]               │  │
│  └────────────────────────────────────────┘  │
│                                             │
│  ┌─ Empfehlung 3 ────────────────────────┐  │
│  │  📊 Quartalsbericht faellig           │  │
│  │  Q1-Zahlen zusammenfassen?            │  │
│  │  [Bericht generieren →]              │  │
│  └────────────────────────────────────────┘  │
│                                             │
│  ──────────────────────────────────────────  │
│                                             │
│  ┌─ Chat-Eingabe ────────────────────────┐  │
│  │  Frag mich etwas...            [🎤]   │  │  <- Voice + Text Input
│  └────────────────────────────────────────┘  │
│                                             │
├─────────────────────────────────────────────┤
│  ◇ Cockpit  ◇ Approvals  ◇ Pipeline ◆ AI  │  <- Bottom Nav
└─────────────────────────────────────────────┘
```

**Briefing-Struktur:**
1. **Greeting Card** (`ai-surface`): Personalisierte Begruessung + 3 KPI-Metriken (Metric Cards, kompakt)
2. **Empfehlungs-Cards** (max 3-5): Priorisierte Aktionen mit Typ-Icon und Deep-Link
3. **Chat-Eingabe**: Text + Voice Input am unteren Rand (ueber Bottom Nav)

---

## 4. Layout — Chat-Modus (nach Frage)

```
┌─────────────────────────────────────────────┐
│  [←]  Copilot                               │
│                                             │
│  [Briefing Card — collapsed zu 1 Zeile]     │
│  "Pipeline: 2.4M · Auslastung: 78%"        │
│                                             │
│  ┌─ User Bubble ─────────────────────────┐  │
│  │  Wie steht es um die InnovateTech     │  │
│  │  Opportunity?                          │  │
│  └────────────────────────────────────────┘  │
│                                             │
│  ┌─ AI Response (ai-surface) ────────────┐  │
│  │  InnovateTech AG — Phase 2:           │  │
│  │                                        │  │
│  │  Status: Angebot erstellt              │  │
│  │  Wahrscheinlichkeit: 72%               │  │
│  │  Naechster Schritt: Follow-up Call     │  │
│  │  Faellig: 02.04.2026                   │  │
│  │                                        │  │
│  │  [Opportunity oeffnen →]              │  │
│  └────────────────────────────────────────┘  │
│                                             │
│  ┌─ Chat-Eingabe ────────────────────────┐  │
│  │  Frag mich etwas...            [🎤]   │  │
│  └────────────────────────────────────────┘  │
│                                             │
├─────────────────────────────────────────────┤
│  ◇ Cockpit  ◇ Approvals  ◇ Pipeline ◆ AI  │
└─────────────────────────────────────────────┘
```

- Briefing Card kollabiert zu einer kompakten KPI-Zeile
- Chat-Verlauf mit User-Bubble und AI-Response
- AI-Response nutzt `ktype-ai-reveal` Animation (Token-by-Token)
- Deep-Links in AI-Responses zu relevanten Screens

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Briefing-Content | API: `GET /copilot/briefing?persona={id}` | Taeglich morgens vorberechnet |
| KPI-Metriken | API: `GET /dashboard/kpis` | Echtzeit |
| Empfehlungen | AI-Engine: Top-5 Actions basierend auf Persona + Kontext | Taeglich |
| Chat-Antwort | API: `POST /copilot/chat` (Streaming) | On-Demand |
| Voice-Transkription | Browser Speech API (on-device) | Real-time |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | Copilot (Thomas, Stefan): Proaktives Briefing + reaktiver Chat |
| **Briefing** | Automatisch generiert basierend auf: offene Approvals, Pipeline-Aenderungen, Alerts, Kalender |
| **Chat** | Natuerlichsprachige Fragen. Kontext: aktuelle Briefing-Daten + Account/Opportunity-Datenbank. |
| **Voice Input** | Mikrofon-Button rechts im Chat-Feld. DS 6.9 Voice Input Pattern. 3 States: idle/listening/processing. |
| **ktype-ai-reveal** | AI-Antworten erscheinen Token-by-Token (`duration-slow`, `easing-enter`). |
| **Deep-Links** | AI-Antworten enthalten klickbare Links zu Screens (Opportunity, Alert, Approval). |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| Dokument-Referenz in AI-Antwort | Inline Preview (Thumbnail 48px + Dateiname). Tap → Fullscreen Preview oder Download. |
| Angebots-Vorschau | Compact Inline Preview im Chat. Kein Hover-Tooltip (Mobile). |

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Briefing-Personalisierung** | Thomas: Pipeline + Approvals + Alerts. Stefan: Projekte + Verfuegbarkeit + Team. |
| **Empfehlungs-Reihenfolge** | Nach Impact sortiert (Umsatz, Dringlichkeit, Confidence). Max 5 Empfehlungen. |
| **Tageszeit-Anpassung** | Morgens: Briefing-Modus. Nachmittags: "Zusammenfassung des Tages" statt Morgen-Briefing. |
| **Lern-Effekt** | Nach 14 Tagen: Empfehlungen angepasst an Thomas' typische Aktions-Muster (DS 6.11). |

---

## 9. Interaktions-Flows

### Flow 1: Morgen-Briefing (2 Min.)
1. Thomas oeffnet App morgens (Auto-Open Briefing oder Tap auf Push)
2. Fullscreen Briefing mit Greeting + 3 KPIs
3. Thomas scrollt durch 3 Empfehlungen
4. Tap "Approvals oeffnen →" → Navigiert zu Approval Queue (MOB-02)
5. Nach Approvals: Back → Briefing → naechste Empfehlung

### Flow 2: Voice-Frage
1. Thomas tippt auf 🎤 im Chat-Feld
2. Mikrofon-Button wird rot (Listening-State, DS 6.9)
3. Thomas spricht: "Wie steht es um InnovateTech?"
4. Processing-State (Spinner im Button)
5. Transkription erscheint in User-Bubble
6. AI-Antwort streamt mit `ktype-ai-reveal`
7. Thomas liest Antwort, tippt ggf. auf Deep-Link

### Flow 3: Quick-Aktion aus Empfehlung
1. Thomas sieht Empfehlung "⚠️ Churn-Risiko: RetailCorp AG"
2. Tap "Alert oeffnen →"
3. Navigiert zu Mobile Alert Detail (MOB-04)
4. Thomas bearbeitet Alert (anrufen/delegieren)
5. Zurueck zum Briefing per Back-Button

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| App-Start / Push | Copilot Briefing (Fullscreen) | Auto-Open / Tap Push | Persona-ID |
| Briefing Empfehlung | Approval Queue (MOB-02) | Tap "Approvals oeffnen" | Filter: `status=pending` |
| Briefing Empfehlung | Alert Detail (MOB-04) | Tap "Alert oeffnen" | `alertId` |
| Briefing Empfehlung | Opportunity Detail (Desktop Deep-Link) | Tap "Opportunity oeffnen" | `opportunityId` |
| Chat Deep-Link | Beliebiger Screen | Tap auf Link in AI-Antwort | Entity-ID |
| Bottom Nav | Copilot Briefing | Tap "AI" / "Copilot" | — |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Briefing Card | Stitch "AI Dashboard" — Dark/Amber (NUR Inspiration, Light Theme kanonisch) |
| Chat Interface | DS 6.4 AI-Generated Content Pattern |
| Voice Input | DS 6.9 Voice Input Pattern |
| KPI Metrics | DS 6.1 Dashboard/Cockpit Layout (kompakte Mobile-Variante) |

---

## 12. Akzeptanzkriterien

- [ ] Briefing laedt in <3s (inkl. KPI-Berechnung)
- [ ] Personalisierte Begruessung mit Tageszeit-Anpassung
- [ ] 3 KPI-Metriken mit Trend-Indikatoren
- [ ] Max 5 priorisierte Empfehlungen mit Deep-Links
- [ ] Empfehlungs-Cards zeigen Typ-Icon, Titel, 1-Zeilen-Kontext, Action-Link
- [ ] Chat-Eingabe mit Text + Voice Input
- [ ] Voice Input: 3 States (idle/listening/processing) per DS 6.9
- [ ] AI-Antworten mit `ktype-ai-reveal` Animation
- [ ] Deep-Links in AI-Antworten navigieren zu korrekten Screens
- [ ] Auto-Open Briefing bei erstem Tages-Login (konfigurierbar)
- [ ] Briefing Card kollabiert bei Chat-Nutzung
- [ ] Offline: Cached Briefing anzeigen, Chat deaktiviert mit Hinweis

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll Auto-Open Briefing per Default aktiv oder opt-in sein? | Offen |
| 2 | Maximale Briefing-Laenge (Wort-Limit)? | Offen — Vorschlag: 200 Woerter |
| 3 | Soll das Briefing als Audio abspielbar sein (TTS)? | Nein — nur Voice Input, kein Voice Output (User-Entscheidung) |
| 4 | Chat-Verlauf: Persistent ueber Sessions oder taeglich zurueckgesetzt? | Offen |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Morgen-Briefing. Voice Input. Chat-Modus. Empfehlungs-Cards. |
