# Consultant Profile Editor — Screen Spec

**Screen-ID:** FND-01
**PRD-Modul:** 8.1 — Consultant & Skill Graph
**Journey(s):** J4-S2 (Profil-Erstanlage), J4-S3 (Skill-Normalisierung), LISA-J1-S1 (Profil-Update Nudge)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Lisa (Junior Consultant) — Profil pflegen, Skills aktualisieren |
| **Sekundaer** | Martina (Admin: Profil anlegen/korrigieren), Stefan (eigenes Profil), Katrin (Profil-Review) |
| **Frequenz** | Lisa: 1-2x/Woche (nach Nudge). Martina: 5-10x/Tag (Onboarding). |
| **Trigger** | Profil-Update-Nudge (Notification), Admin Panel "Profil bearbeiten", Sidebar "Profil", Onboarding Wizard Step 2. |
| **Herkunft** | Notification Center (Nudge), Admin Panel (Martina), Sidebar (Selbst-Edit), Onboarding (Erst-Setup). |
| **Ziel** | Profildaten aktualisieren, Skills verwalten, Verfuegbarkeit eintragen, CV hochladen. |
| **Geraete** | Desktop (primaer), Mobile (Lisa: Profil-Nudge beantworten). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Lisa | mein Profil schnell und einfach aktualisieren | ich fuer passende Projekte gematcht werde |
| 2 | Lisa | einen Nudge erhalten wenn mein Profil unvollstaendig ist | ich nichts vergesse |
| 3 | Martina | ein neues Berater-Profil aus einem CV vorausfuellen lassen | das Onboarding schnell geht |
| 4 | Stefan | meine Verfuegbarkeit fuer die naechsten Wochen eintragen | das Staffing-Team Bescheid weiss |
| 5 | Lisa | Skills aus einer normalisierten Taxonomie auswaehlen | meine Skills konsistent mit dem System sind |
| 6 | Martina | KI-extrahierte Felder pruefen und korrigieren | die Datenqualitaet stimmt |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure**
**Begruendung:** Profil-Editor ist formular-basiert mit sequentiellen Sektionen. Progressive Disclosure erlaubt Lisa, nur die relevanten Sektionen zu oeffnen (Accordion-Pattern).

```
┌─ Sidebar ─┬─ Consultant Profile Editor ──────────────────────────────┐
│            │                                                          │
│            │  Mein Profil                    [Vorschau] [Speichern]   │
│            │  Vollstaendigkeit: 78% ■■■■■■■■░░                       │
│            │                                                          │
│            │  ┌─ Accordion: Persoenliche Daten ──────── [▼ offen] ┐  │
│            │  │  Vorname: [Lisa          ]                         │  │
│            │  │  Nachname: [Tran         ]                         │  │
│            │  │  E-Mail: [l.tran@...]                              │  │
│            │  │  Telefon: [+49...]                                  │  │
│            │  │  Standort: [Hamburg ▾]                              │  │
│            │  │  Foto: [Upload] [Avatar]                           │  │
│            │  └───────────────────────────────────────────────────┘  │
│            │                                                          │
│            │  ┌─ Accordion: Skills & Kompetenzen ──── [▼ offen] ──┐  │
│            │  │  ┌─ Skill Tags ──────────────────────────────┐    │  │
│            │  │  │  [Change Management ×] [Kommunikation ×]  │    │  │
│            │  │  │  [Projektmanagement ×]                    │    │  │
│            │  │  │  [+ Skill hinzufuegen]                    │    │  │
│            │  │  └───────────────────────────────────────────┘    │  │
│            │  │  KI-Vorschlaege: [Agile ⚡] [Stakeholder Mgmt ⚡] │  │
│            │  └───────────────────────────────────────────────────┘  │
│            │                                                          │
│            │  ┌─ Accordion: Berufserfahrung ──────── [▶ collapsed]┐  │
│            │  └───────────────────────────────────────────────────┘  │
│            │                                                          │
│            │  ┌─ Accordion: Verfuegbarkeit ──────── [▶ collapsed] ┐  │
│            │  └───────────────────────────────────────────────────┘  │
│            │                                                          │
│            │  ┌─ Accordion: CV & Dokumente ──────── [▶ collapsed] ┐  │
│            │  └───────────────────────────────────────────────────┘  │
│            │                                                          │
│            │  ┌─ Accordion: Tagessatz & Praeferenzen [▶ collapsed]┐  │
│            │  └───────────────────────────────────────────────────┘  │
│            │                                                          │
└────────────┴──────────────────────────────────────────────────────────┘
```

**Vollstaendigkeits-Indikator:** Score Bar (DS 5.7, Bar-Variante) oben. Sektionen mit fehlenden Daten zeigen `semantic-warning` Badge am Accordion-Header.

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Formular max-width 720px zentriert. Breite Seitenraender. |
| `breakpoint-lg` | Volle Breite. |
| `breakpoint-md` | Volle Breite. Accordions standard. |
| `breakpoint-sm` | Mobile: Profil-Nudge als einfaches Single-Section-Formular (nur die angeforderte Sektion). Bottom Navigation Bar. "Speichern" als Sticky Button unten. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Profil-Daten (Name, Kontakt, Standort) | Consultant Service | Bei Seitenladen |
| Skills + Taxonomie | Knowledge Graph + Consultant Service | Bei Seitenladen |
| Verfuegbarkeit (KW-basiert) | Workforce Service | Real-time |
| CV-Dateien | Document Service | Bei Seitenladen |
| Vollstaendigkeits-Score | Berechnet (Client-seitig) | Live bei Aenderung |
| KI-Skill-Vorschlaege | AI Skill Service | Bei Sektions-Oeffnung |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Dialog Agent** (Lisa) — gefuehrte Interaktion fuer Profil-Updates. |
| **Skill-Vorschlaege** | KI schlaegt Skills basierend auf CV und Berufserfahrung vor. `ai-surface` bg, Sparkle-Icon. Klick uebernimmt Skill. |
| **Skill-Normalisierung** | Bei manueller Skill-Eingabe: Autocomplete aus normalisierter Taxonomie. Bei Nicht-Match: Dialog `foundation/skill-normalization-dialog.md`. |
| **CV-Extraktion** | Bei CV-Upload: KI extrahiert Skills, Erfahrung, Zertifizierungen. Pre-Fill mit Confidence-Scores (siehe Admin Panel). |
| **Profil-Nudge** | KI erkennt unvollstaendige Profile und sendet gezielte Nudges: "Dein Profil ist zu 78% vollstaendig. Fehlt: Verfuegbarkeit, Tagessatz." |
| **Smart Pre-Fill** | Bei neuen Erfahrungs-Eintraegen: KI schlaegt Dauer, Rolle und Skills basierend auf aehnlichen Profilen vor. |

---

## 7. Preview Panel Integration

- **CV-Sektion:** Hochgeladene CVs als Inline-Preview (DS 6.10, 200px Hoehe). Klick oeffnet Fullscreen.
- **Profil-Vorschau:** "Vorschau"-Button oeffnet Slide-Over mit der View-Ansicht (wie Katrin/Thomas das Profil sehen wuerden).

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Profil-Nudge** | Notification: "Dein Profil fehlen: Verfuegbarkeit, Tagessatz. [Jetzt aktualisieren]" (DS 6.12). |
| **Skill-Trends** | "Tipp: 'SAP S/4HANA' ist in 40% der aktuellen Anfragen gefordert. Hast du diese Kompetenz?" |
| **Verfuegbarkeits-Erinnerung** | Woechentliche Notification: "Deine Verfuegbarkeit fuer KW 20+ ist nicht aktuell. [Aktualisieren]". |
| **Smart Sections** | Accordion-Sektionen mit fehlenden Daten werden zuerst geoeffnet (automatisch, einmalig). |

---

## 9. Interaktions-Flows

### Flow 1: Lisa reagiert auf Nudge (Mobile, 3 Min)
```
Notification: "Skills aktualisieren" → Tap →
Mobile Profile Editor → Nur Sektion "Skills" offen →
3 KI-Vorschlaege sichtbar → Lisa tippt 2 an → Uebernommen →
"Speichern" (Sticky Button) → Vollstaendigkeit: 85% →
Success Toast: "Profil aktualisiert"
```

### Flow 2: Martina legt Berater an (Desktop)
```
Admin Panel → "+ Berater anlegen" → CV Upload →
KI-Extraktion (5 Sek) → Profil Editor oeffnet →
Felder vorausgefuellt mit Confidence-Scores →
Martina korrigiert ⚠️-Felder → Skill-Normalisierung →
"Speichern" → Berater-Profil erstellt
```

### Flow 3: Stefan aktualisiert Verfuegbarkeit
```
Sidebar "Profil" → Accordion "Verfuegbarkeit" oeffnen →
KW-Kalender: Stefan markiert KW 18-22 als "Verfuegbar, 80%" →
"Speichern" → Workforce Service aktualisiert →
Matching-Algorithmus erhaelt neue Daten
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Notification (Nudge) | Profile Editor | Nudge-Link |
| **Von:** Admin Panel | Profile Editor | "Profil bearbeiten" |
| **Von:** Sidebar | Profile Editor | "Profil" |
| **Zu:** Skill Normalization Dialog | `foundation/skill-normalization-dialog.md` | Unbekannter Skill eingegeben |
| **Zu:** Consultant Profile View | `foundation/consultant-profile-view.md` | "Vorschau" |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #11:** Berater-Profil | Profil-Bearbeitungs-Ansicht. |
| **Figma:** Frame vorhanden | Profil-Editor importiert (Stitch). |

---

## 12. Akzeptanzkriterien

- [ ] Accordion-Sektionen: Persoenlich, Skills, Erfahrung, Verfuegbarkeit, CV, Tagessatz
- [ ] Vollstaendigkeits-Indikator (Score Bar) mit %-Anzeige
- [ ] Sektionen mit fehlenden Daten: Warning Badge am Accordion-Header
- [ ] KI-Skill-Vorschlaege mit `ai-surface` Hintergrund
- [ ] Skill-Autocomplete aus normalisierter Taxonomie
- [ ] CV-Upload mit KI-Extraktion und Confidence-Scores
- [ ] Verfuegbarkeits-Kalender (KW-basiert, Prozent-Auslastung)
- [ ] "Vorschau" oeffnet Profile View im Slide-Over
- [ ] Mobile: Single-Section-Modus bei Nudge, Sticky Save Button
- [ ] Accessibility: Accordion aria-expanded, Formular-Labels, Inline-Validation

---

## 13. Offene Fragen

1. **Pflichtfelder:** Welche Felder sind Pflicht fuer Matching? *Empfehlung: Name, mind. 3 Skills, Standort, Verfuegbarkeit.*
2. **Profil-Sichtbarkeit:** Kann Lisa kontrollieren, wer ihr Profil sieht? *Empfehlung: Phase 2. V1: Alle internen Nutzer.*
3. **Sprach-Kompetenz:** Werden Sprachkenntnisse als separate Kategorie oder als Skills erfasst? *Empfehlung: Separates Feld in "Persoenliche Daten".*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
