# Skill Normalization Dialog — Screen Spec

**Screen-ID:** FND-04
**PRD-Modul:** 8.1 — Consultant Intelligence
**Journey(s):** J4-S3 (Skill-Normalisierung bei Profil-Pflege)
**Layout-Typ:** Modal
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Lisa (Junior Consultant) — Skill eingeben und normalisieren |
| **Sekundaer** | Martina (Admin: CV-Import mit Skill-Mapping), Stefan (eigene Skills pflegen) |
| **Frequenz** | Lisa: 1-2x/Monat (Profil-Update). Martina: 5-10x/Tag (Onboarding, CV-Extraktion). |
| **Trigger** | Profil-Editor: unbekannter Skill eingegeben, CV-Extraktion: nicht-normalisierte Skills erkannt, Bulk-Import: mehrere Skills zur Normalisierung. |
| **Herkunft** | Consultant Profile Editor (`foundation/consultant-profile-editor.md`), Admin Panel CV-Extraktion, Onboarding Wizard. |
| **Ziel** | Eingegebene Skills auf normalisierte Taxonomie mappen, Duplikate vermeiden, Skill-Graphen konsistent halten. |
| **Geraete** | Desktop (primaer). Mobile nicht vorgesehen (Skill-Normalisierung ist Desktop-Workflow). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Lisa | einen Skill eingeben und sofort den normalisierten Vorschlag sehen | mein Profil mit der Firmen-Taxonomie konsistent ist |
| 2 | Lisa | einen KI-Vorschlag akzeptieren, ablehnen oder anpassen | ich die Kontrolle ueber mein Profil behalte |
| 3 | Martina | nach CV-Import alle nicht-normalisierten Skills auf einmal mappen | das Onboarding schnell geht |
| 4 | Martina | die Confidence der KI-Zuordnung sehen | ich bei unsicheren Mappings manuell eingreifen kann |
| 5 | Lisa | die Skill-Taxonomie als Baum-Vorschau sehen | ich verstehe, wo mein Skill eingeordnet wird |
| 6 | Stefan | einen neuen Skill vorschlagen wenn kein Match existiert | fehlende Skills in die Taxonomie aufgenommen werden |

---

## 3. Layout — Desktop

**Layout-Typ: Modal (560px)**
**Begruendung:** Skill-Normalisierung ist ein fokussierter Entscheidungs-Dialog — Lisa sieht ihren eingegebenen Skill, die KI-Empfehlung und entscheidet. Ein Modal ueber dem Profil-Editor haelt den Kontext sichtbar. Im Bulk-Modus wird das Modal auf 640px erweitert.

### Single-Skill-Modus

```
┌─ Modal (560px) ───────────────────────────────────────────┐
│                                                            │
│  Skill-Normalisierung                                 [X]  │
│                                                            │
│  ── Deine Eingabe ──                                       │
│                                                            │
│  "SAP FI/CO"                                               │
│                                                            │
│  ── KI-Vorschlag ──────────────────── Confidence: 94% ──  │
│                                                            │
│  ┌─ ai-surface ───────────────────────────────────────┐   │
│  │  ✨ Normalisierter Name: SAP Financial Accounting   │   │
│  │  Kategorie: ERP > SAP > Finance                     │   │
│  │  Aliase: SAP FI, SAP CO, SAP FI/CO, FI/CO          │   │
│  │  ■■■■■■■■■░ 94% Confidence                         │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  ── Taxonomie-Einordnung ──                                │
│                                                            │
│  ┌─ Tree Preview ─────────────────────────────────────┐   │
│  │  ▶ Technologie                                      │   │
│  │    ▼ ERP                                            │   │
│  │      ▼ SAP                                          │   │
│  │        ▼ Finance                                    │   │
│  │          ● SAP Financial Accounting  ← Dein Skill   │   │
│  │          ○ SAP Controlling                          │   │
│  │          ○ SAP Treasury Management                  │   │
│  │        ▶ Logistics                                  │   │
│  │        ▶ HCM                                        │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  ┌────────────────────────────────────────────────────┐   │
│  │  [Ablehnen]  [Anpassen...]  [Uebernehmen ✓]       │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Bulk-Modus (nach CV-Extraktion)

```
┌─ Modal (640px) ───────────────────────────────────────────────┐
│                                                                │
│  Skill-Normalisierung (Bulk)                              [X]  │
│  7 Skills aus CV-Import · 5 automatisch gemappt                │
│                                                                │
│  ┌─ Skill-Liste ──────────────────────────────────────────┐   │
│  │                                                         │   │
│  │  ✅ "Projektmanagement" → Projektmanagement   [94%]     │   │
│  │  ✅ "SAP FI"            → SAP Financial Acc.  [91%]     │   │
│  │  ✅ "Change Mgmt"       → Change Management   [89%]     │   │
│  │  ✅ "Agile"             → Agile Methodik      [87%]     │   │
│  │  ✅ "Stakeh. Mgmt"      → Stakeholder Mgmt    [85%]     │   │
│  │  ⚠️ "Retail Rollout"    → ???                 [42%]     │   │
│  │  ⚠️ "GxP Validierung"   → ???                 [38%]     │   │
│  │                                                         │   │
│  │  ── 2 Skills benoetigen manuelle Zuordnung ──           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                │
│  ┌─ Detail: "Retail Rollout" ─── Confidence: 42% ─────────┐   │
│  │  ✨ Vorschlaege:                                         │   │
│  │  ○ Retail (Branche)              [62%]                   │   │
│  │  ○ Rollout-Management (Methodik) [54%]                   │   │
│  │  ○ [Neuen Skill vorschlagen...]                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  [5 automatische uebernehmen]   [Alle pruefen und ...]  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Confidence-Indikator:** Score Bar (DS 5.7) inline neben jedem Mapping. Farbcodierung nach Score-Tokens: 80-100 `score-excellent`, 60-79 `score-good`, 40-59 `score-moderate`, <40 `score-weak`. Text immer `neutral-900`.

**KI-Vorschlag-Bereich:** `ai-surface` Hintergrund, `ai-border` links (3px), Sparkle-Icon (`ai-sparkle`).

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Modal 560px (single) / 640px (bulk), zentriert. |
| `breakpoint-lg` | Modal 560px / 640px. |
| `breakpoint-md` | Modal 90vw. Taxonomie-Baum collapsed, per Toggle einblendbar. |
| `breakpoint-sm` | Nicht vorgesehen. Skill-Normalisierung ist ein Desktop-Workflow. Auf Mobile wird der Skill ohne Normalisierung temporaer gespeichert und spaeter am Desktop normalisiert. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Skill-Taxonomie (Baum-Struktur) | Knowledge Graph Service | Bei Modal-Oeffnung, Cache 1h |
| Normalisierungs-Vorschlag (KI) | AI Skill Service | Bei Modal-Oeffnung (pro Skill) |
| Confidence-Score | AI Skill Service | Pro Vorschlag, bei Berechnung |
| Aliase / Synonyme | Knowledge Graph Service | Bei Modal-Oeffnung |
| CV-extrahierte Skills (Bulk) | Document Service + AI Extraction | Bei Bulk-Trigger |
| Bestehende Profil-Skills | Consultant Service | Bei Modal-Oeffnung |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Dialog Agent** — gefuehrte Entscheidung pro Skill. KI schlaegt vor, Nutzer entscheidet. |
| **Normalisierung** | KI mappt eingegebenen String auf naechsten Taxonomie-Eintrag. Zeigt normalisierten Namen, Kategorie und Aliase. |
| **Confidence-Score** | Pro Vorschlag: 0-100%. Berechnet aus String-Aehnlichkeit, Kontext (Branche, Profil), Taxonomie-Abdeckung. Visualisiert als Score Bar + Prozent-Label. |
| **Mehrfach-Vorschlaege** | Bei Confidence <70%: KI zeigt 2-3 Alternativ-Vorschlaege mit je eigenem Score. Nutzer waehlt. |
| **Neuer-Skill-Vorschlag** | Bei keinem Match: "Neuen Skill vorschlagen" oeffnet Inline-Formular (Name, Kategorie-Vorschlag). Wird an Admin zur Pruefung gesendet. |
| **Bulk-Automatik** | Im Bulk-Modus: Skills mit Confidence >=80% werden automatisch vorausgewaehlt (Checkbox aktiv). Skills <80% erfordern manuelle Pruefung. |

---

## 7. Preview Panel Integration

- **Taxonomie-Baum:** Inline-Preview der Skill-Hierarchie im Modal (kein separates Panel). Aktueller Skill ist hervorgehoben (`brand-primary` Text, `interactive-warm` Hintergrund).
- **Profil-Kontext:** Unterhalb des Modals schimmert der Profil-Editor durch (Modal-Overlay `neutral-900` at 50%).

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Auto-Normalisierung** | Bei Confidence >=95%: Skill wird direkt uebernommen ohne Dialog (mit Undo-Toast: "SAP FI/CO → SAP Financial Accounting. [Rueckgaengig]"). |
| **Kontext-Bewusstsein** | KI beruecksichtigt bestehende Skills im Profil: "Du hast bereits 'SAP MM'. 'SAP FI/CO' passt in denselben SAP-Bereich." |
| **Trend-Hinweis** | Bei haeufig angefragten Skills: "SAP S/4HANA ist in 35% der aktuellen Anfragen — moechtest du diesen Skill ebenfalls hinzufuegen?" als `body-xs` Hinweis unter dem Taxonomie-Baum. |
| **Duplikat-Erkennung** | "Du hast 'Projektmanagement' bereits. 'PM' ist ein Alias dafuer." Warning-Card im Modal. |

---

## 9. Interaktions-Flows

### Flow 1: Lisa gibt unbekannten Skill ein (Single, 15 Sek)
```
Profil-Editor → Skills-Sektion → "SAP FI/CO" eingeben →
Autocomplete findet keinen exakten Match → Modal oeffnet →
KI-Vorschlag: "SAP Financial Accounting" (94%) →
Taxonomie-Baum zeigt Einordnung → Lisa klickt "Uebernehmen" →
Modal schliesst → Skill als Tag im Profil-Editor sichtbar
```

### Flow 2: Martina normalisiert CV-Import (Bulk, 2 Min)
```
Admin Panel → CV-Upload → KI-Extraktion erkennt 7 Skills →
5 mit >=80% Confidence → 2 mit <50% →
Modal oeffnet (Bulk-Modus) → 5 automatisch vorausgewaehlt →
Martina klickt auf "Retail Rollout" → Detail-Bereich →
3 Vorschlaege → Martina waehlt "Rollout-Management" →
"GxP Validierung" → "Neuen Skill vorschlagen" → Name eingeben →
"Alle uebernehmen" → Modal schliesst → Skills im Profil
```

### Flow 3: Lisa lehnt Vorschlag ab und passt an
```
Modal oeffnet → KI-Vorschlag: "Agile Methodik" →
Lisa: "Nein, mein Skill ist spezifischer" → Klickt "Anpassen..." →
Inline-Suche in Taxonomie oeffnet → Lisa tippt "Scrum" →
Autocomplete: "Scrum (Agile > Frameworks)" → Lisa waehlt →
"Uebernehmen" → Modal schliesst
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Consultant Profile Editor | Skill Normalization Dialog (Modal) | Unbekannter Skill eingegeben |
| **Von:** Admin Panel (CV-Extraktion) | Skill Normalization Dialog (Bulk Modal) | Nicht-normalisierte Skills erkannt |
| **Von:** Onboarding Wizard | Skill Normalization Dialog (Modal) | Skill-Eingabe in Onboarding |
| **Zu:** Consultant Profile Editor | `foundation/consultant-profile-editor.md` | "Uebernehmen" / Modal schliessen |
| **Zu:** Admin Panel | `platform/admin-panel.md` | Bulk-Normalisierung abgeschlossen |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein dediziertes Item | Skill Normalization ist als Teil des Profil-Editors konzipiert (Item #11). |
| **Figma:** Kein eigener Frame | Zu erstellen als Unterframe von Profil-Editor. |

---

## 12. Akzeptanzkriterien

- [ ] Modal (560px single, 640px bulk) mit Overlay (`neutral-900` at 50%)
- [ ] KI-Vorschlag mit normalisiertem Namen, Kategorie und Aliasen auf `ai-surface` Hintergrund
- [ ] Confidence-Score als Score Bar (DS 5.7) mit Prozent-Label, farbcodiert nach Score-Tokens
- [ ] Taxonomie-Baum-Preview mit hervorgehobenem Ziel-Skill
- [ ] 3 Aktionen: Uebernehmen (Primary), Anpassen (Secondary), Ablehnen (Tertiary)
- [ ] Bulk-Modus: Skill-Liste mit Checkbox-Vorauswahl (>=80% Confidence)
- [ ] Bulk: automatisch gemappte Skills mit einem Klick uebernehmen
- [ ] "Neuen Skill vorschlagen" bei keinem Match (Inline-Formular)
- [ ] Auto-Normalisierung bei >=95% Confidence mit Undo-Toast
- [ ] Duplikat-Erkennung: Warning wenn Skill bereits im Profil
- [ ] Accessibility: Modal role="dialog", aria-modal, Focus Trap, Escape schliesst

---

## 13. Offene Fragen

1. **Auto-Normalisierung Schwellenwert:** Ab welcher Confidence wird automatisch normalisiert? *Empfehlung: >=95%. Darunter immer Dialog.*
2. **Neuer-Skill-Genehmigung:** Wer genehmigt neue Skill-Vorschlaege? *Empfehlung: Admin (Martina) ueber Admin Panel.*
3. **Taxonomie-Tiefe:** Wie tief ist die Skill-Taxonomie? *Empfehlung: Max 4 Ebenen (Bereich > Technologie > Produkt > Spezialisierung).*
4. **Multi-Mapping:** Kann ein Skill in mehrere Kategorien fallen? *Empfehlung: Ja, primaere + sekundaere Kategorie.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
