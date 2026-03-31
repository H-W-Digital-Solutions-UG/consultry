# Copilot Sidebar — Screen Spec

**Screen-ID:** AI-EXP-01
**PRD-Modul:** 7.1 — AI Copilot
**Journey(s):** J12-S2 (Thomas' Morgen-Briefing)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) |
| **Sekundaer** | Katrin, Stefan |
| **Frequenz** | Thomas: 2-5x/Tag. Katrin: 1-2x/Tag. Stefan: 1x/Tag. |
| **Trigger** | Klick auf Copilot-Icon in Topbar, Keyboard Shortcut (`Cmd+J`), Automatisch beim morgendlichen Login (Briefing-Modus). |
| **Herkunft** | Jeder Screen — Copilot ist global verfuegbar. Hauptsaechlich aus Cockpit (J12-S1). |
| **Ziel** | Briefing lesen, Frage stellen, Handlungsempfehlung ausfuehren, zurueck zum vorherigen Screen. |
| **Geraete** | Desktop (primaer), Tablet, Mobile (dedizierter Fullscreen). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | ein Morgen-Briefing mit den wichtigsten Zahlen und Aktionen sehen | ich in 2 Minuten weiss, was heute ansteht |
| 2 | Thomas | eine Frage in natuerlicher Sprache stellen | ich nicht durch 5 Screens navigieren muss |
| 3 | Thomas | per Voice eine Frage stellen | ich unterwegs schnell Antworten bekomme |
| 4 | Thomas | auf Handlungsempfehlungen direkt aus dem Copilot klicken | ich nahtlos in den richtigen Screen springe |
| 5 | Katrin | den Copilot nach Pipeline-Status fragen | ich eine schnelle Zusammenfassung ohne Tabellen-Analyse bekomme |
| 6 | Stefan | ueber den Copilot meine Verfuegbarkeit pruefen | ich nicht den Kalender separat oeffnen muss |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure** (NICHT Bento Grid)
**Begruendung:** Der Copilot ist ein konversationeller, linearer Flow (Briefing → Frage → Antwort → Aktion). Bento Grid wuerde die Konversation fragmentieren.

```
┌─────────────────────────────────────────┬──────────────────────┐
│                                         │                      │
│  Hauptinhalt (z.B. Cockpit Dashboard)   │  Copilot Sidebar     │
│                                         │  400px               │
│  Wird leicht nach links verschoben      │                      │
│  (nicht verkleinert)                    │  ┌─ Briefing ──────┐ │
│                                         │  │  Guten Morgen,   │ │
│  Overlay: neutral-900 15% opacity       │  │  Thomas.         │ │
│                                         │  │  3 Approvals...  │ │
│                                         │  │  [Approvals]     │ │
│                                         │  └─────────────────┘ │
│                                         │                      │
│                                         │  ┌─ Chat Thread ──┐ │
│                                         │  │  ...            │ │
│                                         │  └─────────────────┘ │
│                                         │                      │
│                                         │  ┌─ Predictions ──┐ │
│                                         │  │  Du wirst...    │ │
│                                         │  └─────────────────┘ │
│                                         │                      │
│                                         │  ┌─ Input ────────┐ │
│                                         │  │  [✨] Frage [🎤]│ │
│                                         │  └─────────────────┘ │
│                                         │                      │
└─────────────────────────────────────────┴──────────────────────┘
```

**Sections (Top → Bottom):**

1. **Header:** "✨ Consultry Copilot" + Minimize `_` + Close `X`
2. **Briefing Card** (L1-Summary): KI-generiertes Morgen-Briefing. `ai-surface` bg. Enthalt:
   - Begruessung mit Tageszeit-Kontext
   - 2-3 Key KPIs (Pipeline-Wert, Auslastung, offene Approvals)
   - 1-2 Action Buttons (direkte Links)
3. **Conversation Thread** (L2-Detail bei Interaktion): Chat-Historie. Scrollbar.
4. **Predictive Suggestions** (DS 6.12): 2-3 "Du wirst wahrscheinlich..."-Cards.
5. **Input Area:** AI Prompt Input + Voice Button + Submit Button.

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Sidebar 400px rechts. Hauptinhalt leicht verschoben. Overlay 15%. |
| `breakpoint-lg` | Sidebar 360px. Overlay 25%. |
| `breakpoint-md` | Fullscreen-Overlay. Close-Button oben rechts. Briefing + Chat + Input. |
| `breakpoint-sm` | Mobile Fullscreen. Bottom Navigation Bar sichtbar. Input ueber Bottom Nav (`padding-bottom: 72px`). Dedizierter Screen: `mobile/mobile-copilot-briefing.md`. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| KPI-Zusammenfassung (Pipeline, Auslastung, Approvals) | Aggregation aus Pipeline, Workforce, Approval-Modulen | Real-time bei Panel-Oeffnung |
| Letzte Copilot-Konversation | Session Storage (fluechtiger) + Server (letzte 7 Tage) | Beim Oeffnen laden |
| Predictive Suggestions | ML-Modell basierend auf Nutzerverhalten der letzten 30 Tage | Alle 15 Minuten neu berechnet |
| Persona-Kontext | User-Profil (Rolle, Praeferenzen) | Statisch nach Login |
| Modul-Kontext | Aktuelle URL / aktiver Screen | Real-time |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Copilot** — kontextbezogener Assistent. Reagiert auf Fragen, bietet proaktive Briefings. |
| **Voice Input** | Mikrofon-Button im Input-Feld (DS 6.9). Sprache → Text → Copilot-Query. |
| **Antwort-Rendering** | `ktype-ai-reveal` (DS 3.6.1): Character-by-character Reveal. Nur bei Erstgenerierung. |
| **Quellen-Attribution** | Jede Antwort zeigt nummerierte Quellen: "CRM", "Dealfront", "Projektdaten". |
| **Confidence** | AI Badge mit Confidence-Score bei faktischen Aussagen (Zahlen, Prognosen). |
| **Persona-Kontext** | Thomas bekommt strategische Zusammenfassungen. Katrin bekommt operative Details. Stefan bekommt Projekt-bezogene Antworten. |
| **Kontext-Uebergabe** | Copilot kennt den aktuellen Screen. Frage "Wie steht es hier?" liefert kontextbezogene Antwort. |

---

## 7. Preview Panel Integration

- **Dokument-Vorschau:** Wenn der Copilot auf Angebote, Vertraege oder CVs referenziert, zeigt er eine Inline-Preview (DS 6.10, Variante "Inline", 200px Hoehe) innerhalb der Chat-Antwort.
- **Expandable:** Klick auf Preview oeffnet Slide-Over Panel mit voller Dokument-Ansicht.
- **Unterstuetzte Typen:** PDF (Angebote), DOCX (Vertraege), AI-generierte Inhalte (Briefs).

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Morgen-Briefing** | Automatisch beim ersten Login des Tages. Zusammenfassung der wichtigsten Aenderungen seit letztem Login. |
| **"Du wirst wahrscheinlich..."** | 2-3 Vorschlaege basierend auf: (1) Offene Approvals, (2) Geplante Meetings, (3) Haeufigste Aktionen zur aktuellen Tageszeit. |
| **Smart Follow-Up** | Nach einer Copilot-Antwort: "Moechtest du [verwandte Aktion]?" als Chip-Buttons unter der Antwort. |
| **Kontext-Nudge** | Wenn Thomas laenger als 30s auf dem Cockpit ist ohne Aktion: Copilot zeigt dezenten Nudge: "3 Approvals warten auf dich." |

---

## 9. Interaktions-Flows

### Flow 1: Morgen-Briefing
```
Thomas oeffnet App → Cockpit laedt → Copilot oeffnet automatisch →
Briefing Card zeigt KPIs + Aktionen → Thomas klickt "Approvals anzeigen" →
Copilot schliesst → Approval-Screen oeffnet
```

### Flow 2: Frage stellen
```
Thomas klickt Copilot-Icon (oder Cmd+J) → Sidebar oeffnet →
Thomas tippt "Wie steht RetailCorp?" → Copilot zeigt Antwort mit
ktype-ai-reveal → Quellen werden angezeigt → Thomas klickt
"Opportunity oeffnen" → Slide-Over mit Opportunity Detail oeffnet
```

### Flow 3: Voice-Frage
```
Thomas tippt Mic-Button → Listening-State (pulsing) →
Thomas spricht: "Was steht heute an?" → Processing → Text erscheint →
Copilot generiert Antwort → ktype-ai-reveal
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Cockpit Dashboard | Copilot Sidebar | Copilot-Icon, Cmd+J, Auto-Open |
| **Von:** Jeder Screen | Copilot Sidebar | Copilot-Icon in Topbar |
| **Zu:** Approval Manager | `platform/approval-manager.md` | Klick auf "Approvals anzeigen" |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Klick auf Opportunity-Link in Antwort |
| **Zu:** Pipeline (Signal Feed) | `growth/signal-feed.md` | Klick auf Signal-Link in Briefing |
| **Zu:** Financial Dashboard | `delivery/financial-dashboard.md` | Klick auf KPI in Briefing |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Cockpit (Dashboard) | Item #13 — Thomas' Cockpit / Morgen-Briefing. Zeigt das Dashboard mit Copilot-Bereich. |
| **Stitch Board:** (kein dediziertes Item) | Copilot Sidebar hat kein eigenes Stitch-Board-Item. Empfehlung: Neues Item generieren ("AI Copilot Sidebar"). |
| **Figma:** Keine dedizierte Figma-Frame | Stitch-Import existiert fuer Cockpit, aber nicht fuer isoliertes Copilot Panel. |

---

## 12. Akzeptanzkriterien

- [ ] Copilot oeffnet sich beim morgendlichen Erst-Login automatisch mit Briefing
- [ ] Briefing zeigt aktuelle KPIs (Pipeline-Wert, Auslastung, offene Approvals)
- [ ] Freitext-Fragen werden beantwortet mit Quellen-Attribution
- [ ] Voice-Input funktioniert: Mikrofon → Transkription → Antwort
- [ ] ktype-ai-reveal Animation bei Erst-Generierung (deaktiviert bei prefers-reduced-motion)
- [ ] Predictive Suggestions zeigen 2-3 kontextbezogene Aktionen
- [ ] Klick auf Action-Buttons navigiert zum richtigen Screen
- [ ] Preview Panel zeigt Dokument-Vorschauen inline
- [ ] Responsive: Sidebar auf Desktop, Fullscreen auf Tablet/Mobile
- [ ] Accessibility: Focus Trap, aria-live fuer Antworten, Keyboard-Navigation

---

## 13. Offene Fragen

1. **Briefing-Persistenz:** Soll das Morgen-Briefing den ganzen Tag verfuegbar bleiben oder nach dem ersten Lesen verschwinden? *Empfehlung: Bleibt als erstes Element im Chat-Thread, markiert als "gelesen".*
2. **Multi-Sprache:** Erkennt der Copilot die Sprache der Frage automatisch, oder folgt er immer der UI-Sprache? *Empfehlung: UI-Sprache als Default, automatische Erkennung als Fallback.*
3. **Konversations-Limit:** Wie viele Nachrichten werden im Chat-Thread gespeichert? *Empfehlung: Letzte 50 Nachrichten, aelter via "Aeltere laden".*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
