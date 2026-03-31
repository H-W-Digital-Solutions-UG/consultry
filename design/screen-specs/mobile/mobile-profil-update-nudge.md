# Mobile Profil-Update Nudge — Screen Spec

**Screen-ID:** MOB-06
**PRD-Modul:** 8.1 — Berater-Profil-Management
**Journey(s):** J4-S2 (Lisa aktualisiert Profil), J14-S1 (Martina triggert Profil-Updates)
**Layout-Typ:** Progressive Disclosure (Bottom Sheet)
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Lisa (Consultant) — Profil-Pflege nach Projekt-Abschluss |
| **Sekundaer** | Stefan (Senior Consultant, erfahrener), andere Berater |
| **Frequenz** | Lisa: 1-2x/Monat (nach Projekten oder bei Luecken). Stefan: 1x/Monat. |
| **Trigger** | Push Notification "Dein Profil braucht ein Update", Dialog Agent Nudge (in-app), Aufgaben-Liste, Post-Projekt-Automatik. |
| **Herkunft** | Push Notification (primaer), Dialog Agent, Aufgaben-Liste. |
| **Ziel** | Fehlende Profil-Informationen ergaenzen (Skills, Projekterfahrung, Zertifizierungen) — in unter 2 Minuten. |
| **Geraete** | Smartphone (primaer). Quick-Update unterwegs. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Lisa | eine freundliche Erinnerung erhalten wenn mein Profil Luecken hat | ich es aktuell halte |
| 2 | Lisa | genau sehen welche Felder fehlen | ich weiss was zu tun ist |
| 3 | Lisa | einzelne Felder schnell auf dem Handy ergaenzen | ich nicht zum Desktop muss |
| 4 | Lisa | AI-Vorschlaege fuer Skills basierend auf meinem letzten Projekt annehmen | ich Zeit spare |
| 5 | Martina | sehen welche Berater unvollstaendige Profile haben | ich gezielt nachfassen kann |
| 6 | Lisa | sehen wie vollstaendig mein Profil ist (Fortschrittsbalken) | ich motiviert bin es zu vervollstaendigen |

---

## 3. Layout — Nudge (Bottom Sheet Compact)

Der Nudge erscheint als kompaktes Bottom Sheet, ausgeloest durch Push oder Dialog Agent:

```
┌─────────────────────────────────────────────┐
│  [Aktueller Screen, abgedunkelt]            │
├─────────────────────────────────────────────┤
│          ━━━━━━━━━━━                        │  <- Drag Handle
│                                             │
│  📝 Profil-Update                    [X]    │
│                                             │
│  Dein Profil ist zu 72% vollstaendig.       │
│  ■■■■■■■░░░ 72%                             │  <- Score Bar
│                                             │
│  3 Felder fehlen:                           │
│  ☐ Neue Skills aus RetailCorp-Projekt       │
│  ☐ Zertifizierung: SAP S/4HANA             │
│  ☐ Projekterfahrung aktualisieren           │
│                                             │
├─────────────────────────────────────────────┤
│  [Spaeter]            [Jetzt ergaenzen →]   │  <- Footer
└─────────────────────────────────────────────┘
```

- Bottom Sheet Variante: **Compact** (30%) oder **Half** (50%) je nach Anzahl fehlender Felder
- Fortschrittsbalken (`score-good` bei 60-79%, `score-excellent` bei 80+)
- Fehlende Felder als Checklist
- Primaer-Button "Jetzt ergaenzen" fuehrt zum Edit-Flow

---

## 4. Layout — Quick-Edit (Bottom Sheet Expanded)

Wenn Lisa "Jetzt ergaenzen" tippt, expandiert das Bottom Sheet zum Edit-Modus:

```
┌─────────────────────────────────────────────┐
│          ━━━━━━━━━━━                        │
│                                             │
│  Profil ergaenzen                    [X]    │
│  ■■■■■■■░░░ 72% → Ziel: 85%+              │
│                                             │
│  ─── 1. Neue Skills ───                     │
│                                             │
│  AI-Vorschlaege basierend auf               │
│  RetailCorp SAP-Projekt:                    │
│                                             │
│  ┌─ ai-surface ─────────────────────────┐   │
│  │  [✓] SAP S/4HANA Migration           │   │
│  │  [✓] Change Management               │   │
│  │  [ ] Retail Industry                  │   │
│  │  [ ] ABAP Development                │   │
│  │  [+ Eigenen Skill hinzufuegen]       │   │
│  └───────────────────────────────────────┘   │
│                                             │
│  ─── 2. Zertifizierung ───                  │
│                                             │
│  Zertifikat:  [SAP S/4HANA ▾]              │
│  Datum:       [__.__.2026]                  │
│  Dokument:    [Foto aufnehmen 📷]           │
│                                             │
│  ─── 3. Projekterfahrung ───                │
│                                             │
│  RetailCorp SAP-Migration                   │
│  Rolle:    [Senior Consultant ▾]            │
│  Zeitraum: [Okt 2025 – Maerz 2026]         │
│  ☐ Referenz-Projekt (sichtbar im Profil)   │
│                                             │
├─────────────────────────────────────────────┤
│  [Abbrechen]        [Speichern ✓]           │  <- Sticky Footer
└─────────────────────────────────────────────┘
```

- Bottom Sheet Variante: **Expanded** (90%)
- Fortschrittsbalken oben mit Ziel-Markierung
- AI-Skill-Vorschlaege in `ai-surface` Container mit Checkboxen
- Formular-Felder fuer Zertifizierung (mit Kamera-Upload)
- Projekterfahrung als kompaktes Formular
- Sticky Footer mit Speichern-Button

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Profil-Vollstaendigkeit | API: `GET /consultants/{id}/completeness` | Bei jedem Profil-Load |
| Fehlende Felder | API: `GET /consultants/{id}/missing-fields` | Bei Nudge-Trigger |
| AI-Skill-Vorschlaege | AI-Engine: basierend auf letztem Projekt | Bei Nudge-Generierung |
| Profil-Update | API: `PATCH /consultants/{id}` | On-Save |
| Foto-Upload | API: `POST /consultants/{id}/documents` | On-Upload |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | Dialog Agent (Lisa). Nudge wird durch Dialog Agent ausgeloest — freundlich, nicht aufdringlich. |
| **Skill-Vorschlaege** | AI analysiert letztes Projekt und schlaegt relevante Skills vor. Checkboxen zum Annehmen/Ablehnen. |
| **Pre-Fill** | Projekterfahrung-Felder automatisch befuellt basierend auf CRM-Daten (Kunde, Zeitraum, Rolle). |
| **Nudge-Ton** | Freundlich, motivierend: "Dein Profil ist zu 72% vollstaendig — nur noch 3 Felder!" Keine Dringlichkeit. |
| **Nudge-Frequenz** | Max 1x/Woche. Nicht am Wochenende. Nicht waehrend laufendem Projekt (reduzierte Frequenz). |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| Zertifikat-Upload | Kamera oder Galerie. Inline-Vorschau (Thumbnail 64px) nach Upload. Tap → Fullscreen. |
| CV-Vorschau | Nicht in diesem Screen — CV wird im Profil-Editor (Desktop) generiert. |

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Timing** | Nudge nach Projekt-Abschluss (1-3 Tage spaeter). Oder bei Profil-Vollstaendigkeit <70%. |
| **Skill-Relevanz** | AI-Vorschlaege sortiert nach Matching-Relevanz: Skills die haeufig in Opportunities gefordert werden, werden zuerst vorgeschlagen. |
| **Gamification (subtil)** | Fortschrittsbalken motiviert. "Noch 3 Felder bis 85%+" — kein Badge, keine Punkte. Professionell. |
| **Smart Defaults** | Zertifizierungs-Datum: Pre-Fill mit Projekt-Enddatum. Rolle: Pre-Fill mit letzter Projekt-Rolle. |

---

## 9. Interaktions-Flows

### Flow 1: Quick-Skill-Update (90s)
1. Lisa erhaelt Push: "📝 Dein Profil braucht ein Update — 3 Felder fehlen"
2. Tap auf Push → Compact Bottom Sheet mit Nudge
3. Lisa sieht Fortschrittsbalken (72%) und 3 fehlende Felder
4. Tap "Jetzt ergaenzen →"
5. Bottom Sheet expandiert zu Edit-Modus (Expanded)
6. Lisa sieht AI-Skill-Vorschlaege → checkt 2 von 4 an
7. Scrollt zu Zertifizierung → ueberspringt (kein Dokument griffbereit)
8. Scrollt zu Projekterfahrung → Pre-Fill akzeptiert, "Referenz-Projekt" angehakt
9. Tap "Speichern ✓"
10. Success-Toast: "✅ Profil aktualisiert — jetzt bei 82%!"
11. Bottom Sheet schliesst

### Flow 2: Nudge wegdruecken
1. Lisa sieht Compact Bottom Sheet
2. Tap "Spaeter" oder Swipe down
3. Bottom Sheet schliesst
4. Erneuter Nudge in 3 Tagen (max)

### Flow 3: Dialog Agent Nudge (In-App)
1. Lisa oeffnet App (Bottom Nav "Profil")
2. Dialog Agent zeigt inline Hinweis: "Nach deinem RetailCorp-Projekt: 3 Skills koennten dein Profil staerken. [Jetzt ergaenzen]"
3. Tap → Direkt zum Expanded Edit-Modus
4. Weiter wie Flow 1, Schritt 6

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Push Notification | Nudge Bottom Sheet | Tap auf Push | `consultantId`, `missingFields` |
| Dialog Agent (In-App) | Edit Bottom Sheet | Tap "Jetzt ergaenzen" | `consultantId`, `missingFields` |
| Aufgaben-Liste | Nudge Bottom Sheet | Tap auf "Profil aktualisieren" Task | `consultantId` |
| Edit Bottom Sheet | Profil-Editor (Desktop) | Tap "Am Desktop vervollstaendigen" | Deep-Link `consultantId` |
| Zertifikat-Upload | Kamera / Galerie | Tap "Foto aufnehmen" | — |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Nudge Bottom Sheet | Kein Stitch-Aequivalent. Neues Mobile-Pattern. |
| AI-Skill-Vorschlaege | DS 6.4 AI-Generated Content Pattern, `ai-surface` |
| Fortschrittsbalken | DS 5.7 Score Displays (Bar-Variante) |

---

## 12. Akzeptanzkriterien

- [ ] Push Notification bei Profil-Vollstaendigkeit <80% (max 1x/Woche)
- [ ] Compact Bottom Sheet zeigt: Fortschrittsbalken, fehlende Felder-Liste, 2 Buttons
- [ ] Expanded Edit zeigt: AI-Skill-Vorschlaege (Checkboxen), Formular-Felder, Sticky Footer
- [ ] AI-Skill-Vorschlaege basierend auf letztem Projekt
- [ ] Pre-Fill fuer Projekterfahrung (Kunde, Zeitraum, Rolle)
- [ ] Zertifikat-Upload per Kamera oder Galerie mit Inline-Vorschau
- [ ] Fortschrittsbalken aktualisiert sich nach Speichern
- [ ] Success-Toast mit neuem Vollstaendigkeits-Prozentsatz
- [ ] "Spaeter" verschiebt Nudge um 3 Tage
- [ ] Profil-Update in <2 Min. ab Push-Oeffnung moeglich
- [ ] Dialog Agent Nudge als alternative In-App-Trigger
- [ ] Kein Nudge am Wochenende oder waehrend laufendem Projekt

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll es eine "Nicht mehr erinnern" Option geben (Opt-Out)? | Offen — evtl. in Einstellungen |
| 2 | Koennen Skills direkt per Voice eingegeben werden? | Offen — Tech-Abhaengigkeit (Speech-to-Text Qualitaet fuer Fachbegriffe) |
| 3 | Soll der Fortschrittsbalken auf dem Profil-Screen dauerhaft sichtbar sein? | Offen |
| 4 | Gamification-Elemente (z.B. "Profil-Champion" Badge) gewuenscht? | Nein — professioneller Kontext, keine Gamification (User-Entscheidung) |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. AI-Skill-Vorschlaege. Compact/Expanded Bottom Sheet. Dialog Agent Nudge. |
