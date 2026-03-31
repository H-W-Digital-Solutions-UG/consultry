# Team & Availability Dashboard — Screen Spec

**Screen-ID:** FND-05
**PRD-Modul:** 8.2 — Capacity & Availability
**Journey(s):** J2-S4 (Thomas prueft Team-Kapazitaet), J6-S1 (Katrin plant Ressourcen)
**Layout-Typ:** Bento Grid
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — Team-Auslastung im Blick behalten, Kapazitaets-Engpaesse erkennen |
| **Sekundaer** | Katrin (BD-Leiterin: Verfuegbare Berater fuer Opportunities finden), Stefan (eigene Team-Kapazitaet pruefen) |
| **Frequenz** | Thomas: 1-2x/Tag (Morgen-Check, Abend-Review). Katrin: 3-5x/Tag (vor Staffing). |
| **Trigger** | Sidebar "Foundation > Team", Cockpit Dashboard → Klick auf Auslastungs-KPI, Command Bar → "Team Auslastung", Staffing-Screen → "Team-Uebersicht". |
| **Herkunft** | Cockpit Dashboard (`platform/cockpit-dashboard.md`), Sidebar, Command Bar, Staffing & Matching. |
| **Ziel** | Team-Kapazitaet auf einen Blick erfassen, Gaps fruehzeitig erkennen, verfuegbare Berater identifizieren, Auslastung optimieren. |
| **Geraete** | Desktop (primaer), Tablet (eingeschraenkt). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | die Gesamt-Auslastung des Teams auf einen Blick sehen | ich weiss, ob wir Kapazitaet haben oder ueberbucht sind |
| 2 | Thomas | eine Heatmap der Team-Verfuegbarkeit ueber Kalenderwochen sehen | ich Gaps und Spitzen fruehzeitig erkenne |
| 3 | Katrin | verfuegbare Berater nach Skills und Zeitraum filtern | ich schnell passende Kandidaten fuer Opportunities finde |
| 4 | Katrin | KI-Empfehlungen zu anstehenden Kapazitaets-Aenderungen erhalten | ich proaktiv planen kann |
| 5 | Thomas | einen Berater anklicken und sein Detail-Profil sehen | ich Staffing-Entscheidungen treffen kann |
| 6 | Thomas | die Availability-Daten als Report exportieren | ich sie in Partner-Meetings verwenden kann |

---

## 3. Layout — Desktop

**Layout-Typ: Bento Grid**
**Begruendung:** Das Team & Availability Dashboard zeigt mehrere gleichwertige Informations-Bloecke: KPI-Strip, Kalender-Heatmap, Berater-Liste, Filter. Es gibt keine lineare Workflow-Hierarchie — Thomas und Katrin scannen und entscheiden, welcher Bereich Aufmerksamkeit verdient. Bento Grid ist ideal (DS 7.1).

```
┌─ Sidebar ─┬─ Team & Availability Dashboard (Bento Grid, 4 cols) ──────────┐
│            │                                                                │
│  Foundation│  Team & Verfuegbarkeit                        [Export] [···]   │
│  > Team    │                                                                │
│            │  ┌─ Filter Bar ──────────────────────────────────────────────┐ │
│            │  │  Team: [Alle ▾]  Skills: [Alle ▾]  Standort: [Alle ▾]   │ │
│            │  │  Zeitraum: [KW 14–26 ▾]                    [Filter ✕]    │ │
│            │  └──────────────────────────────────────────────────────────┘ │
│            │                                                                │
│            │  ┌──────────────┬──────────────┬──────────────┬─────────────┐ │
│            │  │ Auslastung   │ Verfuegbare  │ Anstehende   │ Urlaubs-    │ │
│            │  │ Gesamt       │ Berater      │ Gaps         │ Quote       │ │
│            │  │ 78%          │ 12           │ 3 (KW 20)    │ 8%          │ │
│            │  │ 📈 +2%       │ von 85       │ ⚠️ Achtung   │ normal      │ │
│            │  └──────────────┴──────────────┴──────────────┴─────────────┘ │
│            │                                                                │
│            │  ┌─ Kalender Heatmap (span-3) ────────────┬─ AI Insights ──┐ │
│            │  │                                         │                 │ │
│            │  │  KW: 14  15  16  17  18  19  20  21    │ ✨ 3 Berater    │ │
│            │  │  ┌───┬───┬───┬───┬───┬───┬───┬───┐    │ werden in KW 20 │ │
│            │  │  │ 🟢│ 🟢│ 🟡│ 🟡│ 🟢│ 🟡│ 🔴│ 🟡│ SAP │ frei — passend  │ │
│            │  │  ├───┼───┼───┼───┼───┼───┼───┼───┤    │ fuer RetailCorp │ │
│            │  │  │ 🟡│ 🟢│ 🟢│ 🟢│ 🟡│ 🔴│ 🔴│ 🟡│ CM  │ Projekt.        │ │
│            │  │  ├───┼───┼───┼───┼───┼───┼───┼───┤    │                 │ │
│            │  │  │ 🟢│ 🟢│ 🟢│ 🟡│ 🟢│ 🟢│ 🟡│ 🟢│ Dig │ [Staffing →]    │ │
│            │  │  └───┴───┴───┴───┴───┴───┴───┴───┘    │                 │ │
│            │  │                                         │ ─────────────── │ │
│            │  │  Legende:                               │ KW 22: 5 Bera- │ │
│            │  │  🟢 <60% · 🟡 60-85% · 🔴 >85%        │ ter im Urlaub.  │ │
│            │  │                                         │ [Planung →]     │ │
│            │  └─────────────────────────────────────────┴─────────────────┘ │
│            │                                                                │
│            │  ┌─ Berater-Liste (span-full) ───────────────────────────────┐ │
│            │  │                                                            │ │
│            │  │  Name          │ Team  │ Auslastung │ KW14-21 Verf.│ Akt.│ │
│            │  │  ─────────────────────────────────────────────────────────  │ │
│            │  │  [Av] Markus S.│ SAP   │ 92%  ■■■■■ │ ██░░██░░██░░ │ [→] │ │
│            │  │  [Av] Lisa T.  │ CM    │ 45%  ■■░░░ │ ░░░░██░░░░░░ │ [→] │ │
│            │  │  [Av] Tim R.   │ SAP   │ 80%  ■■■■░ │ ██░░██░░░░░░ │ [→] │ │
│            │  │  [Av] Anna K.  │ Digi  │ 0%   ░░░░░ │ ░░░░░░░░░░░░ │ [→] │ │
│            │  │  [Av] Stefan K.│ SAP   │ 100% ■■■■■ │ ██████░░░░░░ │ [→] │ │
│            │  │                                                            │ │
│            │  │  Zeige 5 von 85 · [Alle anzeigen]                          │ │
│            │  └────────────────────────────────────────────────────────────┘ │
│            │                                                                │
└────────────┴────────────────────────────────────────────────────────────────┘
```

**Bento Grid Konfiguration:**
- `bento-cols: 4` (Desktop), `2` (Tablet), `1` (Mobile)
- `bento-gap: space-4` (16px)
- Filter Bar: `bento-span-full` (volle Breite, ueber dem Grid)
- KPI-Strip: 4 Metric Cards, je 1 Spalte
- Kalender-Heatmap: `bento-span-3` (dreifach breit)
- AI Insights: 1 Spalte, `ai-surface` Hintergrund
- Berater-Liste: `bento-span-full` (volle Breite)

**Heatmap-Farbkodierung:**
- `semantic-success` Hintergrund (`semantic-success-light`): <60% Auslastung (verfuegbar)
- `semantic-warning` Hintergrund (`semantic-warning-light`): 60-85% Auslastung (teilweise)
- `semantic-danger` Hintergrund (`semantic-danger-light`): >85% Auslastung (voll/ueberbucht)

**Berater-Liste Availability Bars:** Inline-Sparkline pro Berater. Gefuellt = gebucht (`neutral-700`), Leer = verfuegbar (`neutral-200`). Pro KW ein Segment.

---

## 4. Layout — Responsive

| Breakpoint | Bento Cols | Verhalten |
|-----------|-----------|-----------|
| `breakpoint-xl`+ | 4 | Volle Grid-Ansicht wie oben. Heatmap span-3, AI Insights daneben. |
| `breakpoint-lg` | 3 | KPI-Strip: 4 Cards in 1 Row (horizontal scroll). Heatmap: span-2. AI Insights: span-1. |
| `breakpoint-md` | 2 | KPI-Strip: 2x2. Heatmap: span-full (horizontal scrollbar fuer KWs). AI Insights: span-full. Berater-Liste: span-full. |
| `breakpoint-sm` | 1 | Vertikaler Stack. KPI-Strip: horizontal scrollbar. Heatmap entfaellt — ersetzt durch vereinfachte Berater-Liste mit Verfuegbarkeits-Badge pro Berater. Bottom Navigation Bar. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| KPI: Auslastung Gesamt (%) | Workforce Service | Real-time |
| KPI: Verfuegbare Berater (Anzahl) | Workforce Service | Real-time |
| KPI: Anstehende Gaps (Anzahl, KW) | Workforce Service + Analytics | Taeglich |
| KPI: Urlaubs-Quote (%) | HR Service | Taeglich |
| Heatmap: Team-Auslastung pro KW pro Skill-Gruppe | Workforce Service + Analytics | Taeglich, bei Seitenladen |
| Berater-Liste (Name, Team, Auslastung, Verfuegbarkeit) | Workforce Service + Consultant Service | Real-time |
| AI Insights (Kapazitaets-Empfehlungen) | AI Copilot Service | Bei Seitenladen, Cache 1h |
| Filter-Optionen (Teams, Skills, Standorte) | Org Service + Knowledge Graph | Statisch |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Dashboard Intelligence** — eingebettete Insights im Bento Grid, kein Dialog. |
| **Kapazitaets-Prognose** | KI analysiert Projekt-Endtermine und sagt voraus, welche Berater wann frei werden: "3 Berater werden in KW 20 frei — passend fuer RetailCorp Projekt." `ai-surface` Kachel, Sparkle-Icon. |
| **Gap-Warnung** | KI erkennt Kapazitaets-Luecken: "KW 22: 5 Berater im Urlaub, nur 2 SAP-Berater verfuegbar. Engpass fuer laufende Projekte." |
| **Skill-basierte Empfehlung** | Bei aktivem Filter (z.B. "SAP"): KI zeigt passende verfuegbare Berater mit Match-Score zur gefilterten Anforderung. |
| **Proaktiver Nudge** | Copilot Sidebar (optional): "3 Projekte enden in KW 19. Noch keine Folgeprojekte geplant. [Staffing planen]" |

---

## 7. Preview Panel Integration

- **Berater-Hover:** Hover auf Berater-Zeile in der Liste zeigt Tooltip (DS 6.10, 320x200px): Avatar, Name, Rolle, aktuelle Projekte, Auslastung, naechste Verfuegbarkeit.
- **Berater-Klick:** Klick auf Berater oeffnet Slide-Over Panel (480px, DS 5.11) mit vollem Profil: Skills, Verfuegbarkeits-Kalender, aktuelle Projekte, Kontakt-Details.
- **Heatmap-Hover:** Hover auf Heatmap-Zelle zeigt Tooltip: Team, KW, Auslastung %, Anzahl gebuchter/verfuegbarer Berater.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Kapazitaets-Trend** | "Basierend auf Projekt-Endterminen: Auslastung sinkt auf 65% in KW 22. Empfehlung: Pipeline-Acceleration." als `body-xs` Hinweis in AI Insights Kachel. |
| **Gap-Prognose** | "SAP-Team: Engpass in KW 18-20 (3 parallele Projekte). [Staffing pruefen]" — Warning-Card in AI Insights. |
| **Urlaubs-Warnung** | "Ungewoehnlich hohe Urlaubs-Konzentration in KW 28-30. 40% des Teams abwesend." |
| **Smart Filter** | Bei Wechsel von Cockpit mit "Auslastungs"-KPI-Klick: Filter automatisch auf relevanten Zeitraum gesetzt. |

---

## 9. Interaktions-Flows

### Flow 1: Thomas Morgen-Check (2 Min)
```
Cockpit Dashboard → Klick auf Auslastungs-KPI (78%) →
Team & Availability Dashboard laedt →
KPI-Strip scannen: 12 verfuegbare Berater, 3 Gaps in KW 20 →
AI Insight: "3 Berater werden in KW 20 frei" →
Heatmap: KW 20 rot im SAP-Team → Hover: 4 Berater ueberbucht →
Thomas kennt die Lage → Zurueck zum Cockpit
```

### Flow 2: Katrin sucht verfuegbare Berater (1 Min)
```
Sidebar "Team" → Dashboard laedt →
Filter: Skills = "SAP S/4HANA", Zeitraum = "KW 18-22" →
Berater-Liste filtert: 3 Berater verfuegbar →
Klick auf Anna K. → Slide-Over: Profil, Skills, Verfuegbarkeit →
"Passt fuer RetailCorp" → [Staffing starten →]
```

### Flow 3: Thomas exportiert fuer Partner-Meeting
```
Dashboard → Filter: Team = "Alle", Zeitraum = "Q2 2026" →
[Export] → Dropdown: CSV, PDF →
PDF generiert: KPI-Zusammenfassung + Heatmap + Berater-Liste →
Download startet → Success-Toast
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Cockpit Dashboard | Team & Availability Dashboard | Klick auf Auslastungs-KPI |
| **Von:** Sidebar | Team & Availability Dashboard | "Foundation > Team" |
| **Von:** Staffing & Matching | Team & Availability Dashboard | "Team-Uebersicht" |
| **Zu:** Consultant Profile View | `foundation/consultant-profile-view.md` | Klick auf Berater (Slide-Over) |
| **Zu:** Staffing & Matching | `deal/staffing-matching.md` | AI Insight "Staffing starten" |
| **Zu:** Verfuegbarkeit Update Dialog | `foundation/verfuegbarkeit-update-dialog.md` | Berater-Slide-Over → "Verfuegbarkeit bearbeiten" |
| **Zu:** Cockpit Dashboard | `platform/cockpit-dashboard.md` | Zurueck-Navigation |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein dediziertes Item | Team-Availability als Teil der Foundation-Layer. |
| **Figma:** Kein eigener Frame | Zu erstellen. Referenz: Cockpit Dashboard (Bento Grid Pattern). |

---

## 12. Akzeptanzkriterien

- [ ] Bento Grid Layout: 4 Spalten Desktop, 2 Tablet, 1 Mobile
- [ ] 4 KPI-Kacheln: Auslastung %, Verfuegbare Berater, Anstehende Gaps, Urlaubs-Quote
- [ ] Filter Bar: Team, Skills, Standort, Zeitraum — mit Reset-Option
- [ ] Kalender-Heatmap mit Farbkodierung: Gruen (verfuegbar), Gelb (teilweise), Rot (voll)
- [ ] Berater-Liste mit Inline-Availability-Sparklines pro KW
- [ ] Hover-Tooltips auf Heatmap-Zellen und Berater-Zeilen
- [ ] Klick auf Berater oeffnet Slide-Over mit Profil-Detail
- [ ] AI Insights Kachel mit `ai-surface` Hintergrund und Kapazitaets-Prognosen
- [ ] Export-Funktion: CSV und PDF
- [ ] Responsive: Heatmap entfaellt auf Mobile, vereinfachte Berater-Liste
- [ ] Accessibility: role="main", aria-label pro Kachel, Keyboard-navigierbar, Heatmap als aria-described Tabelle

---

## 13. Offene Fragen

1. **Heatmap-Granularitaet:** Pro Berater oder pro Skill-Gruppe? *Empfehlung: V1 pro Skill-Gruppe (Team-Ebene). V2 pro Berater (mit Drill-Down).*
2. **Auslastungs-Definition:** Beinhaltet "Auslastung" nur Kundenprojekte oder auch interne Taetigkeiten? *Empfehlung: Nur Kundenprojekte fuer KPI. Interne Taetigkeiten als separate Spalte in der Berater-Liste.*
3. **Export-Berechtigungen:** Wer darf exportieren? *Empfehlung: Thomas, Katrin (Partner/BD). Stefan: nur eigenes Team.*
4. **Echtzeit vs. Taeglich:** Wie aktuell muessen die Heatmap-Daten sein? *Empfehlung: Taeglich fuer Heatmap, Real-time fuer KPIs und Berater-Liste.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
