# Consultant Profile View — Screen Spec

**Screen-ID:** FND-02
**PRD-Modul:** 8.1 — Consultant & Skill Graph, 10.4 — CV Generator
**Journey(s):** J5-S2 (Stefan/Katrin betrachtet Berater-Profil)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — Berater-Profile im Matching-Kontext bewerten |
| **Sekundaer** | Thomas (Review), Stefan (Peer-Profil), Dr. Mueller (Client Portal: Anonymisiert) |
| **Frequenz** | Katrin: 10-15x/Tag. Thomas: 2-3x/Tag. |
| **Trigger** | Matching-Screen → Berater-Klick, Command Bar → Berater-Suche, Admin Panel → Detail, Staffing-Card. |
| **Herkunft** | Staffing & Matching, Command Bar, Pipeline, Admin Panel. |
| **Ziel** | Profil bewerten, Skills + Erfahrung pruefen, Verfuegbarkeit checken, CV generieren, zum Team hinzufuegen. |
| **Geraete** | Desktop (primaer), Tablet (Slide-Over). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | ein Berater-Profil schnell bewerten | ich entscheiden kann ob der Berater zum Projekt passt |
| 2 | Katrin | den Match-Score im Kontext der aktuellen Opportunity sehen | ich die Passung beurteilen kann |
| 3 | Katrin | einen kundenspezifischen CV generieren | ich dem Kunden ein professionelles Profil senden kann |
| 4 | Thomas | Berater-Performance-Daten sehen (Projekte, Feedback) | ich strategische Personalentscheidungen treffen kann |
| 5 | Dr. Mueller | ein anonymisiertes Profil im Client Portal sehen | ich die Expertise ohne persoenliche Daten bewerten kann |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (Slide-Over primaer, dedizierte Seite sekundaer)**
**Begruendung:** Profile View wird meistens als Slide-Over (L2) aus dem Matching/Pipeline-Kontext geoeffnet. Der Nutzer behaelt den Matching-Screen im Hintergrund.

**Slide-Over (480px, primaer):**

```
┌─ Slide-Over (480px) ───────────────────────────┐
│                                                  │
│  [Avatar]  Markus Schneider              [X]     │
│            Senior SAP Consultant                 │
│            Hamburg · Frei ab KW 18               │
│            Match-Score: [94] ○○○○○○○○○○          │
│                                                  │
│  ┌─ Tabs ──────────────────────────────────┐    │
│  │  [Profil] [Skills] [Projekte] [CV]      │    │
│  └─────────────────────────────────────────┘    │
│                                                  │
│  ── Profil ──                                    │
│  Standort: Hamburg                               │
│  Sprachen: Deutsch (Mutter), Englisch (C1)       │
│  Tagessatz: 1.450 EUR                            │
│  Erfahrung: 12 Jahre SAP Consulting              │
│                                                  │
│  ── Top Skills ──                                │
│  [SAP S/4HANA ★★★★★] [Change Mgmt ★★★★☆]       │
│  [Retail ★★★★☆] [Projektleitung ★★★★★]          │
│                                                  │
│  ── Verfuegbarkeit ──                            │
│  KW 18: 100% | KW 19: 100% | KW 20: 80%        │
│  KW 21: 50%  | KW 22: 100%                      │
│                                                  │
│  ── Letzte Projekte ──                           │
│  RetailCorp Transformation (2024) · ⭐ 4.5/5     │
│  LogistikAG S/4 Migration (2023) · ⭐ 4.8/5      │
│                                                  │
│  [Zum Team hinzufuegen] [CV generieren]          │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Dedizierte Seite (volle Breite, sekundaer):**

Gleiche Struktur wie Slide-Over, aber mit 2/3+1/3 Layout:
- 2/3: Profil-Details mit Tabs
- 1/3: Context Rail mit Match-Score, Verfuegbarkeit, Quick Actions

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Slide-Over 480px oder dedizierte Seite 2/3+1/3. |
| `breakpoint-lg` | Slide-Over 400px. |
| `breakpoint-md` | Fullscreen-Ansicht. |
| `breakpoint-sm` | Fullscreen mit Bottom Nav. Tabs als Scroll-Pills. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Berater-Profil | Consultant Service | Bei Oeffnung |
| Skills + Proficiency-Level | Knowledge Graph | Bei Oeffnung |
| Verfuegbarkeit (KW) | Workforce Service | Real-time |
| Projekt-Historie + Feedback | Project Service | Bei Oeffnung |
| Match-Score (kontextbezogen) | AI Matching Service | Bei Oeffnung aus Matching-Kontext |
| Generierter CV | AI CV Service | Bei "CV generieren" |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **Kontext-Match-Score** | Wenn aus Matching-Screen geoeffnet: Score-Ring mit Opportunity-bezogenem Match (DS 5.7). |
| **CV-Generierung** | "CV generieren" → KI erstellt kundenspezifischen CV. Auswahl: Sprache (DE/EN), Template, enthaltene Projekte. Oeffnet CV Generator (`deal/cv-generator.md`). |
| **Skill-Gap-Hinweis** | Wenn Opportunity-Kontext vorhanden: "Fehlender Skill: Agile (Anforderung). Naechster Berater mit Agile: Lisa T. [78]". |
| **Peer-Empfehlung** | "Markus hat 2x erfolgreich mit Lisa T. gearbeitet. Team-Fit: 95." |

---

## 7. Preview Panel Integration

- **Tab "CV":** Inline-Preview des letzten generierten CVs (DS 6.10, Variante "Inline"). Download-Button.
- **Tab "Projekte":** Projekt-Details als expandierbare Cards. Klick zeigt Projekt-Kurzuebersicht.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Verfuegbarkeits-Prognose** | "Basierend auf aktuellem Projekt: Markus wird voraussichtlich ab KW 22 zu 100% verfuegbar." |
| **Preis-Benchmark** | "Tagessatz 1.450 EUR liegt 5% ueber dem Durchschnitt fuer SAP Senior Consultants im DACH-Raum." |

---

## 9. Interaktions-Flows

### Flow 1: Katrin bewertet Berater im Matching-Kontext
```
Staffing & Matching → Klick auf Markus [94] → Slide-Over oeffnet →
Scannt: Skills, Verfuegbarkeit, Score-Breakdown →
"Passt" → "Zum Team hinzufuegen" → Slide-Over schliesst →
Markus erscheint im Team Panel
```

### Flow 2: CV generieren fuer Kunden
```
Profil View → Tab "CV" → "CV generieren" →
Dialog: Sprache [DE], Template [Standard], Projekte [waehlen] →
KI generiert CV (3-5 Sek) → Preview erscheint →
"Als PDF herunterladen" → CV an Kunden senden
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Staffing & Matching | Profile View (Slide-Over) | Berater-Klick |
| **Von:** Command Bar | Profile View (Seite) | Berater-Suche |
| **Von:** Admin Panel | Profile View (Slide-Over) | Berater-Detail |
| **Zu:** CV Generator | `deal/cv-generator.md` | "CV generieren" |
| **Zu:** Profile Editor | `foundation/consultant-profile-editor.md` | "Bearbeiten" (nur eigenes Profil/Admin) |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #11:** Berater-Profil | Profil-Ansicht mit Skills und Projekten. |
| **Figma:** Frame vorhanden | Profil importiert (Stitch Dark, Anpassung noetig). |

---

## 12. Akzeptanzkriterien

- [ ] Slide-Over (480px) als primaere Ansicht aus Matching-Kontext
- [ ] Header: Avatar, Name, Rolle, Standort, Verfuegbarkeit, Match-Score
- [ ] Tabs: Profil, Skills (mit Proficiency-Level), Projekte (mit Feedback), CV
- [ ] Kontextbezogener Match-Score wenn aus Matching geoeffnet
- [ ] CV-Generierung mit Sprach- und Template-Auswahl
- [ ] Verfuegbarkeits-Kalender (KW-basiert)
- [ ] "Zum Team hinzufuegen" wenn Matching-Kontext aktiv
- [ ] Responsive: Fullscreen auf Tablet/Mobile
- [ ] Client Portal: Anonymisierte Variante (kein Name, kein Foto, keine persoenlichen Daten)
- [ ] Accessibility: Slide-Over role="dialog", Tab-Navigation, Score als aria-valuenow

---

## 13. Offene Fragen

1. **Anonymisierung:** Welche Felder werden im Client Portal anonymisiert? *Empfehlung: Name → "Berater A", Foto → generischer Avatar, E-Mail/Telefon entfernt. Skills + Erfahrung bleiben.*
2. **Feedback-Sichtbarkeit:** Sehen alle Nutzer Projekt-Feedback-Scores? *Empfehlung: Thomas + Katrin: ja. Lisa: nur eigenes. Stefan: nur eigenes + Peer.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
