# Recruiting Pipeline — Screen Spec

**Screen-ID:** GRW-06
**PRD-Modul:** 9.3 — Smart Recruiting
**Journey(s):** J14-S1 (Martina/Thomas verwalten Recruiting-Pipeline)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Martina (Office-Managerin) — operative Recruiting-Verwaltung, Kandidaten-Koordination |
| **Sekundaer** | Thomas (strategische Recruiting-Entscheidungen, Freigaben) |
| **Frequenz** | Martina: 5-10x/Tag (aktives Recruiting). Thomas: 1-2x/Tag (Review). |
| **Trigger** | Sidebar "Growth → Recruiting", Notification "Neuer Kandidat", Skill-Gap Analysis → "Recruiting starten", Command Bar "Recruiting oeffnen". |
| **Herkunft** | Sidebar, Skill-Gap Analysis, Notification Center, Command Bar. |
| **Ziel** | Recruiting-Pipeline verwalten: Kandidaten ueber Phasen bewegen (L0), Kandidaten-Details und Match-Scores pruefen (L1), Onboarding starten (L2). |
| **Geraete** | Desktop (primaer). Martina ist Desktop-Nutzerin. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Martina | alle Kandidaten in einer Kanban-Ansicht nach Phase sehen | ich den Pipeline-Status sofort erfasse |
| 2 | Martina | Kandidaten per Drag-and-Drop zwischen Phasen verschieben | ich effizient arbeite |
| 3 | Martina | den KI-Match-Score pro Kandidat sehen | ich die besten Kandidaten priorisiere |
| 4 | Thomas | KI-Empfehlungen sehen, welcher Kandidat zu welchen offenen Rollen passt | ich strategisch entscheide |
| 5 | Martina | mehrere Kandidaten gleichzeitig taggen, verschieben oder archivieren | ich Bulk-Aktionen durchfuehre |
| 6 | Martina | nach Skills, Senioritaet, Standort und Status filtern | ich die Pipeline einschraenke |
| 7 | Martina | direkt aus der Pipeline das Onboarding starten | der Uebergang nahtlos ist |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (Kanban-Board)**
**Begruendung:** Recruiting Pipeline ist ein phasen-basierter Workflow. Das Kanban-Board ist die natuerliche Darstellung fuer Status-basierte Pipelines. Progressive Disclosure: L0 = Kanban-Spalten mit Kandidaten-Karten, L1 = Kandidaten-Detail im Slide-Over.

```
┌─ Sidebar ─┬─ Recruiting Pipeline (Kanban) ──────────────────────────────┐
│            │                                                              │
│  Growth    │  Recruiting Pipeline            [+ Kandidat] [Filter ▾]     │
│  > Recruit.│  12 Kandidaten · 3 neue diese Woche                         │
│            │                                                              │
│            │  ┌─ Filter Bar ──────────────────────────────────────────┐  │
│            │  │ [Skills ▾] [Senioritaet ▾] [Standort ▾] [Status ▾]  │  │
│            │  │ [ ] Nur KI-Empfehlungen     Suche: _______________   │  │
│            │  └──────────────────────────────────────────────────────┘  │
│            │                                                              │
│            │  ┌─ Identified ─┬─ Contacted ──┬─ Interviewing ──────────┐ │
│            │  │ (4)          │ (3)           │ (2)                     │ │
│            │  │              │               │                         │ │
│            │  │ ┌──────────┐│ ┌───────────┐ │ ┌─────────────────────┐ │ │
│            │  │ │ M. Weber ││ │ K. Schmidt│ │ │ A. Fischer          │ │ │
│            │  │ │ SAP SC   ││ │ Cloud Eng.│ │ │ SAP Senior Cons.    │ │ │
│            │  │ │ [84]     ││ │ [76]      │ │ │ [91]                │ │ │
│            │  │ │ 3 Rollen ││ │ 2 Rollen  │ │ │ 3 Rollen            │ │ │
│            │  │ │ Berlin   ││ │ Muenchen  │ │ │ Frankfurt            │ │ │
│            │  │ └──────────┘│ └───────────┘ │ └─────────────────────┘ │ │
│            │  │              │               │                         │ │
│            │  │ ┌──────────┐│ ┌───────────┐ │ ┌─────────────────────┐ │ │
│            │  │ │ S. Braun ││ │ T. Richter│ │ │ J. Hoffmann         │ │ │
│            │  │ │ NIS2 Exp.││ │ PM Senior │ │ │ Cloud Architect     │ │ │
│            │  │ │ [72]     ││ │ [68]      │ │ │ [78]                │ │ │
│            │  │ │ 1 Rolle  ││ │ 1 Rolle   │ │ │ 2 Rollen            │ │ │
│            │  │ │ Hamburg   ││ │ Wien      │ │ │ Zuerich             │ │ │
│            │  │ └──────────┘│ └───────────┘ │ └─────────────────────┘ │ │
│            │  │ ...          │ ...           │                         │ │
│            │  └──────────────┴───────────────┴─────────────────────────┘ │
│            │                                                              │
│            │  ┌─ Offer ──────┬─ Onboarding ─────────────────────────────┐│
│            │  │ (1)          │ (2)                                       ││
│            │  │              │                                           ││
│            │  │ ┌──────────┐│ ┌───────────┐ ┌───────────┐              ││
│            │  │ │ R. Vogel ││ │ C. Lang   │ │ P. Becker │              ││
│            │  │ │ PM Mid   ││ │ Data Eng. │ │ SAP SC    │              ││
│            │  │ │ [65]     ││ │ [88]      │ │ [80]      │              ││
│            │  │ │ 1 Rolle  ││ │ Onb. 60%  │ │ Onb. 20%  │              ││
│            │  │ └──────────┘│ └───────────┘ └───────────┘              ││
│            │  └──────────────┴──────────────────────────────────────────┘│
│            │                                                              │
└────────────┴──────────────────────────────────────────────────────────────┘
```

**Kanban-Spalten:**

| Spalte | Beschreibung | Header-Farbe |
|--------|-------------|-------------|
| Identified | KI-identifiziert oder manuell hinzugefuegt | `neutral-200` bg |
| Contacted | Erste Kontaktaufnahme erfolgt | `semantic-info-light` bg |
| Interviewing | Im Gespraechsprozess | `semantic-warning-light` bg |
| Offer | Angebot unterbreitet | `brand-warm` |
| Onboarding | Angenommen, Onboarding-Prozess laeuft | `semantic-success-light` bg |

**Kandidaten-Card (DS `cards`):**
- Name: `heading-sm`, `neutral-900`
- Rolle/Skills: `body-sm`, `neutral-700`
- Match-Score: `mono-md`, Score-Farbe nach Skala
- Rollen-Badge: `body-xs`, `semantic-info-light` bg — "3 Rollen" = passt zu 3 offenen Stellen
- Standort: `body-xs`, `neutral-600`
- Drag-Handle: links, `neutral-400` Icon
- Onboarding-Spalte: Fortschrittsbalken unter Card

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Alle 5 Spalten sichtbar, horizontal scrollbar bei Bedarf. |
| `breakpoint-lg` | 4 Spalten sichtbar, letzte Spalte per Scroll. |
| `breakpoint-md` | 3 Spalten sichtbar, Spalten horizontal scrollbar. Drag-and-Drop aktiv. |
| `breakpoint-sm` | Listen-Ansicht statt Kanban. Gruppiert nach Phase. Cards kompakt (L0). Phase-Wechsel per Action-Menu statt Drag-and-Drop. Bottom Nav sichtbar. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Kandidaten-Liste (Name, Rolle, Skills, Phase, Score) | Recruiting Service | Real-time |
| Match-Score (Kandidat vs. offene Rollen) | AI Matching Service | Bei Kandidaten-Aenderung |
| Offene Rollen (Skills, Senioritaet, Projekt) | Workforce Service | Real-time |
| KI-Empfehlungen (Rollen-Zuordnung) | AI Recommendation Service | Bei Seitenladen |
| Onboarding-Fortschritt | Onboarding Service | Real-time |
| Filter-Optionen (Skills, Standorte, Senioritaet) | Aggregation Service | Bei Seitenladen |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Inline Recommendations + Command Bar** — KI-Empfehlungen direkt in Kandidaten-Cards und per Command Bar abrufbar. |
| **Rollen-Matching** | KI berechnet Match-Score: Kandidaten-Skills vs. offene Rollen. Badge "3 Rollen" = passt zu 3 offenen Stellen. |
| **KI-Empfehlung** | Card-Level: "Kandidat passt zu 3 offenen Rollen" auf `ai-surface` Streifen. Klick zeigt Detail-Match. |
| **Priorisierung** | KI sortiert Kandidaten innerhalb jeder Spalte nach: Match-Score × Dringlichkeit der offenen Rolle. |
| **Outreach-Vorschlag** | In "Identified"-Spalte: KI schlaegt personalisierte Kontakt-Nachricht vor. "Nachricht generieren" → Outreach Editor. |
| **Interview-Empfehlung** | In "Interviewing"-Spalte: KI schlaegt Interview-Fragen basierend auf Rolle und Kandidaten-Profil vor. |

---

## 7. Preview Panel Integration

- **Kandidaten-Klick Slide-Over:** Klick auf Kandidaten-Card oeffnet Slide-Over (480px):
  - Vollstaendiges Profil: Name, Foto, CV-Zusammenfassung (KI-generiert)
  - Skills mit Proficiency-Level und Normalisierungsstatus
  - Match-Score-Breakdown (pro offene Rolle)
  - Verfuegbarkeit
  - Interaktions-Historie (Kontaktversuche, Interview-Notizen)
  - Aktionen: Phase wechseln, Taggen, Archivieren, Onboarding starten
- **Hover-Preview (Desktop):** Hover auf Kandidaten-Card zeigt Tooltip (DS 6.10, 320x200px): Name, Top-Skills, Score, naechster Schritt.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Absprung-Risiko** | "Kandidat Fischer hat seit 14 Tagen keine Rueckmeldung erhalten. Absprungrisiko steigt." `semantic-warning` Badge. |
| **Pipeline-Velocity** | "Durchschnittliche Zeit von Identified→Onboarding: 28 Tage. Fischer ist bei Tag 35." — unter Spalten-Header. |
| **Skill-Luecken-Hinweis** | "Fuer SAP S/4HANA werden 3 Berater benoetigt. Nur 1 Kandidat in Pipeline." — Link zu Skill-Gap Analysis. |
| **Onboarding-Prognose** | "Basierend auf bisherigem Fortschritt: Lang wird Onboarding in 5 Tagen abschliessen." |

---

## 9. Interaktions-Flows

### Flow 1: Pipeline-Review (Martina, 5 Min)
```
Martina oeffnet Recruiting Pipeline → Scannt Kanban-Board →
Sieht 4 "Identified" → Klickt M. Weber [84] → Slide-Over oeffnet →
Liest KI-Empfehlung: "Passt zu 3 offenen SAP-Rollen" →
Verschiebt per Drag-and-Drop zu "Contacted"
```

### Flow 2: Bulk-Aktion
```
Martina selektiert 3 Kandidaten (Checkbox auf Cards) →
Bulk-Action-Bar erscheint: [Verschieben ▾] [Taggen ▾] [Archivieren] →
"Verschieben → Contacted" → 3 Cards animieren zu neuer Spalte
```

### Flow 3: Onboarding starten
```
Martina sieht R. Vogel in "Offer" → Klickt Card → Slide-Over →
"Kandidat hat Angebot angenommen" → Klickt "Onboarding starten" →
Berater-Onboarding Wizard oeffnet → Card wechselt zu "Onboarding"
```

### Flow 4: Strategischer Review (Thomas)
```
Thomas oeffnet Pipeline → Filter: "Nur KI-Empfehlungen" →
Sieht Top-5 Kandidaten mit hoechsten Scores →
Klickt A. Fischer [91] → Slide-Over: Detailierter Match →
Genehmigt: "Angebot unterbreiten" → Card wechselt zu "Offer"
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Skill-Gap Analysis | Recruiting Pipeline | "Recruiting starten" Button |
| **Von:** Sidebar | Recruiting Pipeline | Klick "Growth → Recruiting" |
| **Von:** Notification | Recruiting Pipeline | "Neuer Kandidat" Notification |
| **Zu:** Berater-Onboarding Wizard | `growth/berater-onboarding-wizard.md` | "Onboarding starten" |
| **Zu:** Consultant Profile Editor | `foundation/consultant-profile-editor.md` | Klick auf Kandidaten-Profil (nach Onboarding) |
| **Zu:** Outreach Editor | `deal/outreach-editor.md` | "Nachricht generieren" (Kontaktaufnahme) |
| **Zu:** Skill-Gap Analysis | `growth/skill-gap-analysis.md` | "Skill-Luecken anzeigen" Link |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item:** Recruiting Pipeline | Noch nicht erstellt. |
| **Figma:** Kein Frame vorhanden | Erstanlage erforderlich. Kanban-Board mit Drag-and-Drop, Light Theme. |

---

## 12. Akzeptanzkriterien

- [ ] Kanban-Board: 5 Spalten (Identified, Contacted, Interviewing, Offer, Onboarding)
- [ ] Kandidaten-Cards mit Name, Rolle, Match-Score, Rollen-Badge, Standort
- [ ] Drag-and-Drop zwischen Spalten mit Animation (`duration-normal`)
- [ ] KI-Empfehlungen: "Passt zu X offenen Rollen" auf `ai-surface`
- [ ] Match-Score Badge mit Tooltip-Breakdown
- [ ] Bulk-Aktionen: Multi-Select, Verschieben, Taggen, Archivieren
- [ ] Filter Bar: Skills, Senioritaet, Standort, Status
- [ ] Slide-Over Detail: Profil, Skills, Match-Breakdown, Historie
- [ ] "Onboarding starten" navigiert zu Berater-Onboarding Wizard
- [ ] Onboarding-Fortschrittsbalken in Onboarding-Spalte
- [ ] Spalten-Counter (Anzahl Kandidaten pro Phase)
- [ ] Responsive: Listen-Ansicht auf Mobile, Phase-Wechsel per Menu
- [ ] Accessibility: role="list" pro Spalte, aria-grabbed fuer Drag, Keyboard-Verschiebung

---

## 13. Offene Fragen

1. **Kandidaten-Quellen:** Woher kommen Kandidaten in Phase 1? *Empfehlung: Manuell + KI-Empfehlungen aus LinkedIn (sofern integriert).*
2. **Rollen-Definition:** Wo werden offene Rollen definiert? *Empfehlung: Im Workforce Service, referenziert aus Skill-Gap Analysis.*
3. **Interview-Management:** Soll der Interview-Prozess detailliert im Tool abgebildet werden? *Empfehlung: Phase 1: einfaches Status-Tracking. Phase 2: Kalender-Integration, Feedback-Formulare.*
4. **Archiv:** Wie lange bleiben archivierte Kandidaten sichtbar? *Empfehlung: 12 Monate, danach DSGVO-konform geloescht.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
