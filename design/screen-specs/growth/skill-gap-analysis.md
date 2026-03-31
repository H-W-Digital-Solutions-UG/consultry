# Skill Gap Analysis — Screen Spec

**Screen-ID:** GRW-07
**PRD-Modul:** 9.3 — Smart Recruiting
**Journey(s):** J14-S1 (Thomas identifiziert Skill-Luecken im Team)
**Layout-Typ:** Bento Grid
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — strategische Personalplanung, Skill-Investitionen |
| **Sekundaer** | Martina (operative Umsetzung, Recruiting-Steuerung), Katrin (Pipeline-vs-Skills-Abgleich) |
| **Frequenz** | Thomas: 1-2x/Woche (strategische Planung). Martina: 2-3x/Woche (Recruiting-Priorisierung). |
| **Trigger** | Sidebar "Growth → Skill Gaps", Cockpit KPI "Auslastung" Klick, Recruiting Pipeline → "Skill-Luecken anzeigen", Command Bar "Skill Gaps oeffnen". |
| **Herkunft** | Cockpit Dashboard, Recruiting Pipeline, Sidebar, Command Bar. |
| **Ziel** | Skill-Luecken identifizieren (L0), Demand vs. Supply verstehen (L1), Recruiting oder Weiterbildung initiieren (L2). |
| **Geraete** | Desktop (primaer). Thomas und Martina sind Desktop-Nutzer. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | eine Heatmap aller Team-Skills sehen | ich Staerken und Luecken auf einen Blick erkenne |
| 2 | Thomas | Nachfrage vs. Angebot pro Skill vergleichen | ich weiss, wo Engpaesse entstehen |
| 3 | Thomas | eine priorisierte Liste der kritischsten Skill-Gaps sehen | ich Recruiting fokussiere |
| 4 | Thomas | KI-Empfehlungen fuer Recruiting oder Weiterbildung erhalten | ich die richtige Massnahme ergreife |
| 5 | Thomas | Skill-Trends ueber die Zeit verfolgen | ich vorausschauend plane |
| 6 | Martina | direkt aus der Analyse Recruiting starten | ich nahtlos in die Pipeline wechsle |
| 7 | Thomas | die Analyse als Report exportieren | ich sie im Partner-Meeting praesentiere |

---

## 3. Layout — Desktop

**Layout-Typ: Bento Grid (3-col)**
**Begruendung:** Skill Gap Analysis zeigt mehrere gleichwertige Analyse-Bloecke — Heatmap, Demand-Supply-Chart, Gap-Prioritaeten, KI-Empfehlungen. Kein linearer Workflow; Thomas scannt und vertieft. Bento Grid (DS 7.1, 3-col Variante) ist ideal.

```
┌─ Sidebar ─┬─ Skill Gap Analysis (Bento Grid, 3 cols) ───────────────────┐
│            │                                                              │
│  Growth    │  Skill Gap Analysis             [Zeitraum ▾] [Export ▾]     │
│  > Skill   │                                                              │
│    Gaps    │  ┌─ Skill Heatmap (span-full) ──────────────────────────┐   │
│            │  │                                                       │   │
│            │  │         SAP S/4  NIS2  Cloud  Agile  Data  AI/ML     │   │
│            │  │ Weber    ████    ▓▓░░  ████   ████   ░░░░  ░░░░     │   │
│            │  │ Fischer  ████    ████   ░░░░  ▓▓░░   ████   ░░░░    │   │
│            │  │ Schmidt  ░░░░    ░░░░  ████   ████   ▓▓░░  ████     │   │
│            │  │ Lang     ░░░░    ▓▓░░  ████   ░░░░  ████   ████     │   │
│            │  │ Becker   ████    ░░░░  ░░░░  ████   ░░░░  ▓▓░░      │   │
│            │  │ Tran     ▓▓░░   ░░░░  ▓▓░░   ████   ████   ░░░░    │   │
│            │  │                                                       │   │
│            │  │ ████ = Expert  ▓▓ = Fortgeschritten  ░░ = Keine      │   │
│            │  └───────────────────────────────────────────────────────┘   │
│            │                                                              │
│            │  ┌─ Demand vs Supply (span-2) ─────────┬─ AI Empfehl. ────┐ │
│            │  │                                      │                   │ │
│            │  │  SAP S/4    ██████████ Demand: 8     │ ✨ KI-Analyse    │ │
│            │  │             ████░░░░░░ Supply: 3     │                   │ │
│            │  │             Gap: -5                   │ "SAP S/4HANA     │ │
│            │  │                                      │  Expertise wird   │ │
│            │  │  NIS2       ██████░░░░ Demand: 5     │  in 60% der      │ │
│            │  │             ██░░░░░░░░ Supply: 2     │  Anfragen         │ │
│            │  │             Gap: -3                   │  benoetigt, nur   │ │
│            │  │                                      │  2 Berater        │ │
│            │  │  Cloud      ████████░░ Demand: 6     │  verfuegbar."    │ │
│            │  │             ██████░░░░ Supply: 4     │                   │ │
│            │  │             Gap: -2                   │ [Recruiting →]   │ │
│            │  │                                      │ [Weiterbildung →]│ │
│            │  │  AI/ML      ████░░░░░░ Demand: 3     │                   │ │
│            │  │             ████░░░░░░ Supply: 2     │ Trend: SAP-      │ │
│            │  │             Gap: -1                   │ Nachfrage +35%   │ │
│            │  │                                      │ seit Q3 2025     │ │
│            │  └──────────────────────────────────────┴───────────────────┘ │
│            │                                                              │
│            │  ┌─ Gap Priority List (span-2) ────────┬─ Trend Lines ────┐ │
│            │  │                                      │                   │ │
│            │  │ Prio  Skill       Gap  Dringl. Aktion│ [Linien-Chart]   │ │
│            │  │ 1.    SAP S/4     -5   🔴 Hoch  [→] │                   │ │
│            │  │ 2.    NIS2        -3   🔴 Hoch  [→] │ SAP S/4 ──────/  │ │
│            │  │ 3.    Cloud       -2   🟡 Mittel[→] │ NIS2    ────/    │ │
│            │  │ 4.    AI/ML       -1   🟢 Gering[→] │ Cloud   ──/      │ │
│            │  │                                      │ AI/ML   ─/       │ │
│            │  │ [→] = "Recruiting starten"           │                   │ │
│            │  │                                      │ Q1  Q2  Q3  Q4   │ │
│            │  └──────────────────────────────────────┴───────────────────┘ │
│            │                                                              │
└────────────┴──────────────────────────────────────────────────────────────┘
```

**Bento Grid Konfiguration:**
- `bento-cols: 3` (Desktop), `2` (Tablet), `1` (Mobile)
- `bento-gap: space-4` (16px)
- Skill Heatmap: `span-full` (erstreckt sich ueber alle 3 Spalten)
- Demand vs Supply Chart: `bento-span-2`
- AI Empfehlungen: 1 Spalte, `ai-surface` Hintergrund, `ai-border` linker Rand (3px)
- Gap Priority List: `bento-span-2`
- Trend Lines: 1 Spalte

**Skill Heatmap Farben:**
- Expert (Level 4-5): `score-excellent` Hintergrund
- Fortgeschritten (Level 2-3): `score-good` Hintergrund
- Grundkenntnisse (Level 1): `score-moderate` Hintergrund
- Keine: `neutral-200` Hintergrund

**Demand-Supply-Balken:**
- Demand: `brand-primary` Fuellung
- Supply: `semantic-success` Fuellung
- Gap (negativ): `semantic-danger` Text

**Gap-Dringlichkeit-Badges (DS `badges-tags`):**
- Hoch: `semantic-danger-light` bg, `semantic-danger` text
- Mittel: `semantic-warning-light` bg, `semantic-warning` text
- Gering: `semantic-success-light` bg, `semantic-success` text

---

## 4. Layout — Responsive

| Breakpoint | Bento Cols | Verhalten |
|-----------|-----------|-----------|
| `breakpoint-xl`+ | 3 | Volle Grid-Ansicht wie oben. |
| `breakpoint-lg` | 3 | Heatmap horizontal scrollbar bei vielen Skills. |
| `breakpoint-md` | 2 | Heatmap: span-full mit horizontalem Scroll. AI Empfehlungen unter Demand-Chart. Gap List span-full. |
| `breakpoint-sm` | 1 | Vertikaler Stack. Heatmap: vereinfachte Top-5-Gaps-Liste statt Matrix. Trend Lines unter Gap List. Bottom Nav sichtbar. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Berater-Skills-Matrix (Berater × Skills, Proficiency) | Skill Graph Service | Bei Seitenladen |
| Skill-Nachfrage (aus Opportunities, Ausschreibungen, Signalen) | Analytics Service | Taeglich |
| Gap-Berechnung (Demand - Supply) | AI Analysis Service | Taeglich |
| Gap-Priorisierung (Dringlichkeit, Trend) | AI Analysis Service | Taeglich |
| KI-Empfehlungen (Recruiting vs. Weiterbildung) | AI Recommendation Service | Bei Seitenladen |
| Trend-Daten (Skill-Nachfrage pro Quartal) | Analytics Service | Woechentlich |
| Offene Rollen (fuer Demand-Berechnung) | Workforce Service | Real-time |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Embedded AI Analysis Card** — KI-Analysen als dedizierte Kachel im Bento Grid. |
| **Gap-Analyse** | KI berechnet Skill-Gaps aus: (1) aktuelle Anfragen/Ausschreibungen, (2) Pipeline-Prognose, (3) aktueller Berater-Pool, (4) geplante Abgaenge. |
| **Empfehlungen** | KI empfiehlt pro Gap: "Recruiting starten" (Gap > 2, keine internen Kandidaten) oder "Weiterbildung empfehlen" (Gap = 1, interner Kandidat mit verwandtem Skill). |
| **Prognose** | "SAP S/4HANA Expertise wird in 60% der Anfragen benoetigt, nur 2 Berater verfuegbar. Bei aktuellem Trend: Gap verdoppelt sich bis Q3." |
| **Berater-Empfehlung** | KI identifiziert Berater mit verwandten Skills: "Tran hat SAP ECC Erfahrung — Weiterbildung zu S/4HANA in 4 Wochen moeglich." |
| **Markt-Kontext** | KI verknuepft Skill-Demand mit Markt-Signalen: "NIS2-Bedarf steigt durch EU-Deadline Okt 2026." |

---

## 7. Preview Panel Integration

- **Berater-Hover (Heatmap):** Hover auf Berater-Name zeigt Tooltip-Preview (DS 6.10, 320x200px): Name, Rolle, Top-5-Skills mit Proficiency, Verfuegbarkeit, letztes Projekt.
- **Skill-Klick (Heatmap):** Klick auf Skill-Spalten-Header oeffnet Slide-Over (480px):
  - Skill-Detail: Name, Beschreibung, verwandte Skills
  - Berater mit diesem Skill (Liste mit Proficiency)
  - Demand-Historie (Mini-Chart)
  - Aktionen: "Recruiting starten", "Weiterbildung planen"
- **Gap-Row-Klick:** Klick auf Gap-Priority-Zeile oeffnet Slide-Over mit Detail-Breakdown.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Gap-Trend-Prognose** | "Bei aktuellem Trend: SAP-Gap verdoppelt sich bis Q3 2026." — unter Trend-Chart als `body-xs` Hinweis. |
| **Abgangs-Risiko** | "Berater Weber (SAP Expert) hat Vertragsende in 3 Monaten. SAP-Gap steigt auf -6." — `semantic-danger` Hinweis im AI Card. |
| **Recruiting-Timing** | "Durchschnittliche Recruiting-Dauer fuer SAP-Berater: 45 Tage. Recruiting sollte bis spaetestens Mai starten." |
| **Weiterbildungs-ROI** | "Weiterbildung von Tran (SAP ECC → S/4HANA): Kosten 5K, reduziert Gap um 1, ROI in 2 Monaten." |

---

## 9. Interaktions-Flows

### Flow 1: Strategischer Review (Thomas, 10 Min)
```
Thomas oeffnet Skill Gap Analysis → Heatmap scannen →
Erkennt: SAP S/4HANA hat viele Luecken →
Demand vs Supply: Gap = -5 →
AI Empfehlung lesen: "60% der Anfragen, nur 2 Berater" →
Klickt "Recruiting starten" → Recruiting Pipeline oeffnet
```

### Flow 2: Detail-Analyse (Thomas, 5 Min)
```
Thomas klickt auf "SAP S/4" in Heatmap →
Slide-Over: 3 Berater mit SAP, Demand-Chart zeigt Anstieg →
KI: "Tran hat SAP ECC, Weiterbildung moeglich" →
Thomas entscheidet: 2 neue Berater recruiten + Tran weiterbilden
```

### Flow 3: Report-Export (Thomas, 2 Min)
```
Thomas klickt "Export" → Dropdown: PDF, CSV →
Waehlt PDF → Report generiert mit Heatmap, Gaps, Empfehlungen →
Thomas laedt herunter → Praesentiert im Partner-Meeting
```

### Flow 4: Recruiting-Priorisierung (Martina, 5 Min)
```
Martina oeffnet Skill Gap Analysis → Gap Priority List →
Sieht: SAP S/4 (-5, Hoch), NIS2 (-3, Hoch) →
Klickt [→] bei SAP S/4 → Recruiting Pipeline oeffnet →
Filter gesetzt: Skills = SAP S/4HANA
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Cockpit Dashboard | Skill Gap Analysis | KPI "Auslastung" Klick |
| **Von:** Recruiting Pipeline | Skill Gap Analysis | "Skill-Luecken anzeigen" Link |
| **Von:** Sidebar | Skill Gap Analysis | Klick "Growth → Skill Gaps" |
| **Zu:** Recruiting Pipeline | `growth/recruiting-pipeline.md` | "Recruiting starten" (mit Skill-Filter) |
| **Zu:** Consultant Profile View | `foundation/consultant-profile-view.md` | Klick auf Berater-Name in Heatmap |
| **Zu:** Consultant Profile Editor | `foundation/consultant-profile-editor.md` | "Weiterbildung planen" → Skill-Update |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item:** Skill Gap Analysis | Noch nicht erstellt. |
| **Figma:** Kein Frame vorhanden | Erstanlage erforderlich. Bento Grid 3-col, Heatmap + Charts, Light Theme. |

---

## 12. Akzeptanzkriterien

- [ ] Skill Heatmap: Berater × Skills Matrix mit Proficiency-Farbskala
- [ ] Demand vs Supply Chart: Horizontale Balken mit Gap-Anzeige
- [ ] Gap Priority List: Sortiert nach Dringlichkeit, mit Aktions-Buttons
- [ ] AI Empfehlungen Card: KI-generierter Text auf `ai-surface` Hintergrund
- [ ] Trend Lines: Skill-Nachfrage ueber Zeit (Quartale)
- [ ] "Recruiting starten" navigiert zu Recruiting Pipeline mit Skill-Filter
- [ ] Export: PDF und CSV mit Heatmap, Gaps, Empfehlungen
- [ ] Bento Grid Layout: 3 Spalten Desktop, 2 Tablet, 1 Mobile
- [ ] Heatmap-Farbskala: Expert/Fortgeschritten/Grundkenntnisse/Keine
- [ ] Hover-Tooltips auf Berater-Namen und Skill-Headers
- [ ] Slide-Over fuer Skill-Detail und Gap-Breakdown
- [ ] Responsive: Vereinfachte Top-5-Liste auf Mobile statt Heatmap
- [ ] Accessibility: role="table" fuer Heatmap, aria-label pro Zelle, Keyboard-navigierbar

---

## 13. Offene Fragen

1. **Skill-Taxonomie:** Wie viele Skills werden in Phase 1 abgebildet? *Empfehlung: Top 20 marktrelevante Skills, erweiterbar.*
2. **Proficiency-Skala:** Wie viele Stufen? *Empfehlung: 5 (Keine, Grundkenntnisse, Fortgeschritten, Expert, Thought Leader).*
3. **Demand-Quelle:** Wie wird Demand berechnet? *Empfehlung: Gewichteter Mix aus offenen Opportunities (50%), Ausschreibungen (30%), Signal-Trends (20%).*
4. **Weiterbildungs-Integration:** Soll ein Weiterbildungskatalog angebunden werden? *Empfehlung: Phase 2. Phase 1: manueller Verweis.*
5. **Datenschutz:** Duerfen individuelle Berater-Skills fuer alle sichtbar sein? *Empfehlung: Sichtbarkeit nach Rolle: Thomas/Martina sehen alle, Berater sehen nur eigene.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
