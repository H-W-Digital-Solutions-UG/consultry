# CV Extraktion Review — Screen Spec

**Screen-ID:** DEAL-06
**PRD-Modul:** 10.4 — Smart CV Generator
**Journey(s):** J4-S2 (CV-Extraktion bei Berater-Onboarding)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Martina (Office Managerin) — CV-Extraktion pruefen, korrigieren, bestaetigen |
| **Sekundaer** | Katrin (gelegentlich, bei Berater-Screening), Lisa/Stefan (eigenes CV re-importieren) |
| **Frequenz** | Martina: 5-10x/Woche (pro neuem Berater). Katrin: 1-2x/Woche. |
| **Trigger** | Notification "CV-Extraktion abgeschlossen — bitte pruefen", Berater-Onboarding Wizard Step 2, Admin Panel → Berater → "CV pruefen", Consultant Profile Editor → "CV hochladen". |
| **Herkunft** | Notification Center (primaer), Onboarding Wizard, Admin Panel, Consultant Profile Editor. |
| **Ziel** | KI-extrahierte Daten aus hochgeladenem CV pruefen, korrigieren, Skill-Normalisierung durchfuehren, Profildaten bestaetigen. |
| **Geraete** | Desktop (ausschliesslich). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Martina | das Original-CV neben den extrahierten Daten sehen | ich die Extraktion nachvollziehe |
| 2 | Martina | die Confidence pro extrahiertem Feld sehen | ich weiss wo ich genauer hinschauen muss |
| 3 | Martina | einzelne Felder inline korrigieren | falsch extrahierte Daten schnell beheben kann |
| 4 | Martina | Skill-Normalisierungs-Vorschlaege inline sehen | die Taxonomie konsistent bleibt |
| 5 | Martina | alle Felder auf einmal akzeptieren oder einzeln reviewen | ich je nach Confidence schnell oder gruendlich arbeite |
| 6 | Martina | nach der Pruefung das Berater-Profil automatisch befuellen lassen | ich nicht doppelt eingeben muss |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (Split-View: 1/2 + 1/2)**
**Begruendung:** CV Extraktion Review ist ein Verifikations-Workflow: Original pruefen → Extraktion validieren → Korrekturen vornehmen → Bestaetigen. Die Split-View (DS 6.10) zeigt links das Original-PDF und rechts die strukturierten extrahierten Daten.

```
┌─ Sidebar ─┬─ CV Extraktion Review Toolbar ───────────────────────────┐
│            │  Berater: Tim Schneider  │  Confidence: 84%              │
│  Team      │  │ [Alle akzeptieren] │ [Einzeln pruefen] │ [Abbrechen]│
│  > Onboard.├──────────────────────────────────────────────────────────┤
│            │                                                          │
│            │  ┌─ Original CV (1/2) ────────┬─ Extrahierte Daten (1/2)┐│
│            │  │                            │                          ││
│            │  │  ┌─ PDF Render ──────────┐ │  ┌─ Persoenliche Daten ┐ ││
│            │  │  │                       │ │  │  Name:               │ ││
│            │  │  │  TIM SCHNEIDER        │ │  │  [Tim Schneider   ]  │ ││
│            │  │  │  SAP Consultant       │ │  │  🟢 Conf: 98%       │ ││
│            │  │  │                       │ │  │                      │ ││
│            │  │  │  Profil               │ │  │  Titel:              │ ││
│            │  │  │  Erfahrener SAP-      │ │  │  [SAP Consultant  ]  │ ││
│            │  │  │  Berater mit Fokus    │ │  │  🟢 Conf: 95%       │ ││
│            │  │  │  auf S/4HANA und      │ │  │                      │ ││
│            │  │  │  Datenmigration.      │ │  │  E-Mail:             │ ││
│            │  │  │  ABAP-Entwicklung     │ │  │  [t.schneider@...]   │ ││
│            │  │  │  und MM-Modul...      │ │  │  🟢 Conf: 99%       │ ││
│            │  │  │                       │ │  └──────────────────────┘ ││
│            │  │  │  Berufserfahrung      │ │                          ││
│            │  │  │                       │ │  ┌─ Skills ────────────┐ ││
│            │  │  │  AutoParts AG         │ │  │                      │ ││
│            │  │  │  01/2024 - 08/2024    │ │  │  ┌─ Skill ────────┐ │ ││
│            │  │  │  SAP S/4HANA Migr.    │ │  │  │ SAP S/4HANA    │ │ ││
│            │  │  │  Consultant, Data     │ │  │  │ 🟢 Conf: 95%  │ │ ││
│            │  │  │  Migration...         │ │  │  │ Senior         │ │ ││
│            │  │  │                       │ │  │  │ 3 Proj. Evidenz│ │ ││
│            │  │  │  PharmaCorp           │ │  │  │ [✓] [✏️] [✕]  │ │ ││
│            │  │  │  06/2023 - 10/2023    │ │  │  └────────────────┘ │ ││
│            │  │  │  SAP MM Rollout...    │ │  │                      │ ││
│            │  │  │                       │ │  │  ┌─ Skill ────────┐ │ ││
│            │  │  │  [Seite 1/3]          │ │  │  │ Projektmgmt    │ │ ││
│            │  │  │  [◀] [▶]             │ │  │  │ 🟡 Conf: 72%  │ │ ││
│            │  │  └───────────────────────┘ │  │  │ ???            │ │ ││
│            │  │                            │  │  │ Normalisierung:│ │ ││
│            │  │                            │  │  │ ○ Agil (Scrum) │ │ ││
│            │  │                            │  │  │ ○ Klassisch PM │ │ ││
│            │  │                            │  │  │ ● Hybrid       │ │ ││
│            │  │                            │  │  │ [Uebernehmen]  │ │ ││
│            │  │                            │  │  └────────────────┘ │ ││
│            │  │                            │  │                      │ ││
│            │  │                            │  │  ┌─ Skill ────────┐ │ ││
│            │  │                            │  │  │ Datenanalyse   │ │ ││
│            │  │                            │  │  │ 🔴 Conf: 45%  │ │ ││
│            │  │                            │  │  │ In CV erwaehnt │ │ ││
│            │  │                            │  │  │ aber unklar    │ │ ││
│            │  │                            │  │  │ [✓] [✏️] [✕]  │ │ ││
│            │  │                            │  │  └────────────────┘ │ ││
│            │  │                            │  │                      │ ││
│            │  │                            │  │  [+ Skill manuell]  │ ││
│            │  │                            │  └──────────────────────┘ ││
│            │  │                            │                          ││
│            │  │                            │  ┌─ Projekte ──────────┐ ││
│            │  │                            │  │  AutoParts AG 🟢    │ ││
│            │  │                            │  │  PharmaCorp 🟢      │ ││
│            │  │                            │  │  LogiTech 🟢        │ ││
│            │  │                            │  │  [Alle anzeigen]    │ ││
│            │  │                            │  └──────────────────────┘ ││
│            │  │                            │                          ││
│            │  │                            │  ┌─ Zertifizierungen ──┐ ││
│            │  │                            │  │  SAP S/4HANA 🟢    │ ││
│            │  │                            │  │  AWS Cloud Pr. 🟢  │ ││
│            │  │                            │  │  ITIL Foundation 🟢│ ││
│            │  │                            │  └──────────────────────┘ ││
│            │  │                            │                          ││
│            │  │                            │  ┌─ Aktion ───────────┐ ││
│            │  │                            │  │  [Profil befuellen] │ ││
│            │  │                            │  │  [Zurueck]          │ ││
│            │  │                            │  └──────────────────────┘ ││
│            │  └────────────────────────────┴──────────────────────────┘│
│            │                                                          │
└────────────┴──────────────────────────────────────────────────────────┘
```

**Confidence-Indikatoren:**

| Indikator | Confidence | Token | Bedeutung |
|-----------|-----------|-------|-----------|
| 🟢 | 80-100% | `semantic-success` | Hohe Sicherheit. Martina kann direkt akzeptieren. |
| 🟡 | 60-79% | `semantic-warning` | Mittlere Sicherheit. Review empfohlen. |
| 🔴 | 0-59% | `semantic-danger` | Niedrige Sicherheit. Manuelle Pruefung erforderlich. |

**Skill-Normalisierung inline:**
Bei mehrdeutigen Skills (🟡/🔴) zeigt das System Normalisierungsvorschlaege aus der Skill-Taxonomie direkt im Skill-Card. Radio-Buttons fuer Auswahl. "Uebernehmen" speichert die normalisierte Version. Fuer komplexere Faelle: Link zum Skill Normalization Dialog (`foundation/skill-normalization-dialog.md`).

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Split-View: 1/2 Original CV + 1/2 Extrahierte Daten. |
| `breakpoint-lg` | Split-View: 40% PDF + 60% Daten (Daten brauchen mehr Platz). |
| `breakpoint-md` | Stacked: PDF-Preview oben (collapsible), Extrahierte Daten unten. |
| `breakpoint-sm` | Hinweis: "CV-Review am Desktop empfohlen." Kein sinnvolles Mobile-Layout. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Original-CV (PDF) | API: `GET /consultants/{id}/cv/original` | On-Load |
| Extrahierte Daten (strukturiert) | API: `GET /consultants/{id}/cv/extraction` | On-Load |
| Confidence-Scores pro Feld | AI Extraction Engine | Bei Extraktion (einmalig) |
| Skill-Taxonomie (Normalisierung) | API: `GET /skills/taxonomy` | Cached |
| Normalisierungs-Vorschlaege | AI Skill Matching | Bei Extraktion |
| Berater-Profil (fuer Abgleich) | API: `GET /consultants/{id}/profile` | On-Load |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | AI-Extraktion (Hintergrund) + Mensch-Review (Vordergrund). Martina sieht und validiert — sie nutzt kein Prompt-Interface. |
| **Extraktion** | KI extrahiert aus PDF: Name, Kontaktdaten, Skills (mit Proficiency-Level), Berufserfahrung (Projekte), Ausbildung, Zertifizierungen, Sprachen. Laufzeit: 1-3 Minuten (asynchron). |
| **Confidence-Scores** | Pro Feld: Confidence 0-100%. Basierend auf: Klarheit im PDF, Konsistenz mit Kontext, Mehrfach-Erwaehnung. |
| **Skill-Normalisierung** | KI mappt extrahierte Skill-Begriffe auf die Consultry-Taxonomie. Bei Mehrdeutigkeit: Radio-Button-Auswahl (Agil/Klassisch/Hybrid). |
| **Projekt-Strukturierung** | KI parsed Freitext-Berufserfahrung in strukturierte Projekte: Firma, Zeitraum, Rolle, Skills, Branche. |
| **Evidenz-Anzeige** | Pro Skill: "Evidenz: 3 Projekte erwaehnt (AutoParts, PharmaCorp, LogiTech)" als Begruendung. Klick auf Evidenz scrollt PDF zur relevanten Stelle. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| **Original-CV** | PDF-Render links (Page-by-Page-Navigation, Zoom). Highlighting der aktuell reviewten Passage (KI markiert Quellstelle im PDF wenn Martina ein extrahiertes Feld fokussiert). |
| **Evidenz-Link** | Klick auf "Evidenz anzeigen" bei einem Skill scrollt das PDF zur relevanten Stelle und highlighted den Textbereich. |
| **Fullscreen-PDF** | Doppelklick auf PDF-Bereich oeffnet Fullscreen-Preview (DS 6.10). |

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Review-Priorisierung** | Felder mit Confidence <80% werden oben angezeigt und visuell hervorgehoben. "3 Felder benoetigen Review" als Summary in der Toolbar. |
| **Aehnliche Profile** | "Aehnliches Profil gefunden: Stefan Kraus (82% Skill-Overlap). [Vergleichen]" als Info-Card. |
| **Fehlende Felder** | "Foto, Sprachkenntnisse und Reisebereitschaft konnten nicht extrahiert werden — muessen manuell ergaenzt werden." Als Warning-Card am Ende. |
| **Duplikat-Erkennung** | "Berater 'Tim Schneider' existiert bereits im System. [Zusammenfuehren] oder [Neues Profil behalten]." |

---

## 9. Interaktions-Flows

### Flow 1: Standard-Review (Martina, 10 Min)
```
Notification "CV-Extraktion abgeschlossen: Tim Schneider" →
CV Extraktion Review oeffnet → Split-View: PDF links, Daten rechts →
Toolbar: Confidence 84% → 3 Felder mit 🟡/🔴 →
Martina scrollt zu 🟡 "Projektmanagement" → waehlt "Hybrid" → Uebernehmen →
Martina scrollt zu 🔴 "Datenanalyse" → prueft PDF → loescht Skill (nicht relevant) →
Alle anderen Felder: 🟢 → "Alle akzeptieren" fuer gruene Felder →
"Profil befuellen" → Berater-Profil wird automatisch erstellt →
Success Toast: "Tim Schneiders Profil wurde befuellt (78% Vollstaendigkeit)."
```

### Flow 2: Alle akzeptieren (hohe Confidence)
```
CV Extraktion Review oeffnet → Confidence 96% → 0 Felder mit 🟡/🔴 →
Martina scannt kurz → "Alle akzeptieren" →
Confirmation Dialog: "8 Skills, 5 Projekte, 3 Zertifizierungen uebernehmen?" →
Bestaetigen → "Profil befuellen" → fertig
```

### Flow 3: Skill-Normalisierung komplex
```
🟡 Skill "IT-Architektur" → Normalisierungsvorschlaege: "Enterprise Architecture",
"Solution Architecture", "Technical Architecture" →
Martina unsicher → Klick "Skill Normalization Dialog" →
Dialog oeffnet mit Taxonomie-Baum → Martina waehlt "Solution Architecture" →
Dialog schliesst → Skill aktualisiert im Review
```

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Berater-Onboarding Wizard | CV Extraktion Review | Step 2: "CV pruefen" | `consultantId`, `cvUploadId` |
| Admin Panel | CV Extraktion Review | Berater → "CV pruefen" | `consultantId` |
| Notification Center | CV Extraktion Review | "Extraktion abgeschlossen" | `consultantId`, `extractionId` |
| CV Extraktion Review | Consultant Profile Editor | "Profil befuellen" | `consultantId`, extrahierte Daten |
| CV Extraktion Review | Skill Normalization Dialog | "Skill normalisieren" (komplex) | `skillTerm`, Taxonomie-Kontext |
| Consultant Profile Editor | CV Extraktion Review | "CV hochladen" (Re-Import) | `consultantId`, neues PDF |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Split-View (PDF + Daten) | DS 6.10 Preview Panel (Split-View-Variante). |
| Confidence-Indikatoren | DS 3.1 Semantic Colors (`semantic-success`, `semantic-warning`, `semantic-danger`). |
| Skill-Cards | DS 6.4 AI-Generated Content Pattern (adaptiert fuer Extraktions-Review). |
| Inline-Edit | DS 6.7 Inline Edit Pattern. |
| PDF-Highlighting | Kein Stitch-Aequivalent. Custom Overlay auf PDF-Render. |

---

## 12. Akzeptanzkriterien

- [ ] Split-View: Original-CV (PDF) links, Extrahierte Daten (Formular) rechts
- [ ] PDF-Render mit Page-by-Page-Navigation und Zoom
- [ ] Confidence-Indikatoren pro Feld (🟢 ≥80%, 🟡 60-79%, 🔴 <60%)
- [ ] Inline-Edit fuer alle extrahierten Felder
- [ ] Skill-Normalisierungs-Vorschlaege inline (Radio-Buttons)
- [ ] Link zum Skill Normalization Dialog fuer komplexe Faelle
- [ ] "Alle akzeptieren" akzeptiert nur 🟢-Felder, 🟡/🔴 bleiben zur Review
- [ ] Evidenz-Links: Klick scrollt PDF zur Quellstelle + Highlight
- [ ] "Profil befuellen" uebertraegt Daten in Consultant Profile
- [ ] Duplikat-Erkennung mit Zusammenfuehren-Option
- [ ] Fehlende Felder als Warning-Card angezeigt
- [ ] Responsive: Stacked Layout auf Tablet, Desktop-Empfehlung auf Mobile
- [ ] Accessibility: Split-View aria-role="complementary", Inline-Edit aria-label, Focus Management bei Evidenz-Navigation

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll die Extraktion auch Fotos aus dem PDF erkennen und vorschlagen? | Offen — Empfehlung: Ja, Phase 1. Foto-Erkennung mit Confirmation. |
| 2 | Wie wird mit mehrsprachigen CVs umgegangen (DE/EN gemischt)? | Offen — Empfehlung: KI erkennt Sprache pro Abschnitt, extrahiert in Originalsprache. |
| 3 | Soll Martina extrahierte Daten in Bulk akzeptieren koennen (mehrere Berater gleichzeitig)? | Offen — Empfehlung: Phase 2 (Batch-Review-Queue). |
| 4 | Wie lange werden Extraktionsergebnisse gespeichert bevor sie verfallen? | Offen — Empfehlung: 30 Tage, danach neu extrahieren. |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. Split-View, Confidence-Indikatoren, Skill-Normalisierung inline, Evidenz-Verlinkung, Profil-Befuellung. |
