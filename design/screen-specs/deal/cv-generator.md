# CV Generator — Screen Spec

**Screen-ID:** DEAL-05
**PRD-Modul:** 10.4 — Smart CV Generator
**Journey(s):** J9-S2 (CV-Generierung fuer Angebot)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — opportunity-spezifische CVs erstellen |
| **Sekundaer** | Martina (CV-Formatierung, QA, Export), Thomas (Review) |
| **Frequenz** | Katrin: 2-4x/Woche (pro Angebot 1-3 CVs). Martina: 3-5x/Woche (Export + QA). |
| **Trigger** | Angebots-Canvas → "CV anpassen", Offer Composer → Team-Sektion → "CV generieren", Sidebar "Deal → CVs", Consultant Profile → "CV fuer Opportunity erstellen". |
| **Herkunft** | Angebots-Canvas (primaer), Offer Composer, Sidebar, Consultant Profile View. |
| **Ziel** | Projekt-spezifischen CV generieren (KI-tailored), relevante Skills und Erfahrungen hervorheben, exportieren (PDF, DOCX). |
| **Geraete** | Desktop (ausschliesslich). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | einen CV fuer eine bestimmte Opportunity generieren lassen | der CV die relevanten Skills des Beraters hervorhebt |
| 2 | Katrin | zwischen dem generischen und dem tailored CV vergleichen | ich die Anpassungen nachvollziehe |
| 3 | Katrin | Sektionen ein-/ausblenden (Erfahrung, Zertifizierungen, Ausbildung) | der CV die richtige Laenge hat |
| 4 | Martina | ein Corporate Template fuer den CV waehlen | das Format den Kundenerwartungen entspricht |
| 5 | Martina | den CV als PDF oder DOCX exportieren | ich ihn dem Angebot beilege |
| 6 | Katrin | die Sprache umschalten (DE/EN) | ich CVs fuer internationale Kunden erstelle |
| 7 | Katrin | den Berater wechseln und einen neuen CV generieren | ich CVs fuer das gesamte Team erstelle |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (2/3 + 1/3 Asymmetrie)**
**Begruendung:** CV Generator ist ein dokumentenzentrierter Workflow mit Steuerungsoptionen. 2/3 CV-Preview + 1/3 Control Panel. Die Preview zeigt das Ergebnis in Echtzeit, das Control Panel steuert Generierung und Anpassung.

```
┌─ Sidebar ─┬─ CV Generator Toolbar ───────────────────────────────────┐
│            │  Berater: [Markus Schneider ▾]  │  Opportunity: RetailCorp│
│  Deal      │  │ Sprache: [DE ▾] │ [Vergleich] │ [Export ▾]           │
│  > CVs     ├──────────────────────────────────────────────────────────┤
│            │                                                          │
│            │  ┌─ CV Preview (2/3) ────────────┬─ Control Panel (1/3) ┐│
│            │  │                                │                      ││
│            │  │  ┌─ CV Seite 1 ─────────────┐ │  ┌─ Template ──────┐ ││
│            │  │  │                           │ │  │  [Corporate ▾]  │ ││
│            │  │  │  [Logo: mpl Consulting]   │ │  │  Vorschau: Mini │ ││
│            │  │  │                           │ │  └────────────────┘ ││
│            │  │  │  MARKUS SCHNEIDER         │ │                      ││
│            │  │  │  Senior SAP Consultant    │ │  ┌─ Sektionen ────┐ ││
│            │  │  │                           │ │  │  ☑ Profil       │ ││
│            │  │  │  ┌─ ai-surface ────────┐  │ │  │  ☑ Kernkomp.   │ ││
│            │  │  │  │ ✨ Profil            │  │ │  │  ☑ Erfahrung   │ ││
│            │  │  │  │ Erfahrener SAP-      │  │ │  │  ☑ Projekthist.│ ││
│            │  │  │  │ Berater mit 12 Jah-  │  │ │  │  ☐ Ausbildung  │ ││
│            │  │  │  │ ren Retail-Fokus.     │  │ │  │  ☑ Zertifik.   │ ││
│            │  │  │  │ Spezialisiert auf     │  │ │  │  ☐ Sprachen    │ ││
│            │  │  │  │ S/4HANA-Migrationen   │  │ │  │  ☐ Interessen  │ ││
│            │  │  │  │ im Einzelhandel.      │  │ │  └────────────────┘ ││
│            │  │  │  └─────────────────────┘  │ │                      ││
│            │  │  │                           │ │  ┌─ KI-Anpassung ─┐ ││
│            │  │  │  KERNKOMPETENZEN          │ │  │  Opportunity:   │ ││
│            │  │  │  ● SAP S/4HANA ██████ E  │ │  │  RetailCorp AG  │ ││
│            │  │  │  ● SAP MM      █████░ S  │ │  │  SAP Migration  │ ││
│            │  │  │  ● Retail      █████░ S  │ │  │                  │ ││
│            │  │  │  ● Change Mgmt ████░░ M  │ │  │  Hervorgehoben: │ ││
│            │  │  │  ● Data Migr.  ████░░ M  │ │  │  ✅ SAP S/4HANA │ ││
│            │  │  │                           │ │  │  ✅ Retail       │ ││
│            │  │  └───────────────────────────┘ │  │  ✅ Migration    │ ││
│            │  │                                │  │  ○ ABAP (hinzuf.)│ ││
│            │  │  ┌─ CV Seite 2 ─────────────┐ │  │                  │ ││
│            │  │  │                           │ │  │  [✨ Regenerieren]│ ││
│            │  │  │  PROJEKTHISTORIE          │ │  └────────────────┘ ││
│            │  │  │                           │ │                      ││
│            │  │  │  RetailGroup AG (2024)    │ │  ┌─ Export ───────┐ ││
│            │  │  │  SAP S/4HANA Migration    │ │  │  [PDF]  [DOCX] │ ││
│            │  │  │  Rolle: Lead Consultant   │ │  └────────────────┘ ││
│            │  │  │  ...                      │ │                      ││
│            │  │  └───────────────────────────┘ │                      ││
│            │  │                                │                      ││
│            │  └────────────────────────────────┴──────────────────────┘│
│            │                                                          │
└────────────┴──────────────────────────────────────────────────────────┘
```

**Control Panel Bereiche:**

1. **Template** — Dropdown mit Template-Vorschau (Mini-Thumbnail). Templates: Corporate Standard, Compact (1-Seiter), Kundenspezifisch.
2. **Sektionen** — Toggles (Checkboxen) pro CV-Sektion. Ein-/Ausblenden aktualisiert Preview live. Drag-and-Drop fuer Reihenfolge.
3. **KI-Anpassung** — Zeigt Opportunity-Kontext und welche Skills/Erfahrungen die KI hervorgehoben hat. Manuelle Anpassung: Skills an-/abwaehlen. "Regenerieren" erstellt CV mit aktualisierten Gewichtungen.
4. **Export** — Buttons fuer PDF und DOCX. Export startet Download.

**Vergleichsmodus (Toolbar: "Vergleich"):**

```
┌─ Generischer CV (1/2) ──────────┬─ Tailored CV (1/2) ──────────────┐
│                                  │                                    │
│  MARKUS SCHNEIDER                │  MARKUS SCHNEIDER                  │
│  Senior SAP Consultant           │  Senior SAP Consultant             │
│                                  │                                    │
│  Profil:                         │  ✨ Profil (tailored):             │
│  Erfahrener SAP-Berater          │  Erfahrener SAP-Berater mit       │
│  mit 12 Jahren Erfahrung         │  12 Jahren Retail-Fokus.           │
│  in verschiedenen Branchen.      │  Spezialisiert auf S/4HANA-       │
│                                  │  Migrationen im Einzelhandel.      │
│                                  │  [ai-surface Hintergrund]          │
│                                  │                                    │
│  Skills:                         │  Skills (nach Relevanz sortiert):  │
│  ● SAP S/4HANA                   │  ● SAP S/4HANA ← (Prio 1)       │
│  ● SAP MM                        │  ● Retail ← (Prio 2)             │
│  ● SAP SD                        │  ● Data Migration ← (Prio 3)     │
│  ● ABAP                          │  ● SAP MM                         │
│  ● Data Migration                │  ● Change Mgmt                    │
│                                  │                                    │
└──────────────────────────────────┴────────────────────────────────────┘
```

Aenderungen gegenueber dem generischen CV werden mit `ai-surface` Hintergrund markiert.

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 CV Preview + 1/3 Control Panel. Volle Toolbar. |
| `breakpoint-lg` | CV Preview volle Breite. Control Panel als Slide-Over (Toggle). |
| `breakpoint-md` | CV Preview volle Breite. Control Panel als Bottom Sheet. |
| `breakpoint-sm` | Hinweis: "CV-Erstellung am Desktop empfohlen." Read-only Preview moeglich. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Berater-Profil (Skills, Erfahrung, Projekte) | API: `GET /consultants/{id}/profile` | On-Load |
| Opportunity-Kontext (Anforderungen, Branche) | API: `GET /opportunities/{id}` | On-Load |
| KI-generierter CV | API: `POST /cvs/generate` (Streaming) | On-Demand |
| Template-Bibliothek | API: `GET /cv-templates` | Cached |
| Generischer CV (Vergleich) | API: `GET /consultants/{id}/cv/generic` | On-Load |
| Export | API: `POST /cvs/{id}/export` | On-Demand |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | AI Canvas (generativ). KI erstellt CV, Katrin steuert und iteriert. |
| **Initiale Generierung** | KI generiert tailored CV aus: Berater-Profil + Opportunity-Anforderungen + Branchenkontext. Streaming mit `ktype-ai-reveal`. |
| **Skill-Gewichtung** | KI priorisiert Skills nach Opportunity-Relevanz. Matching-Score pro Skill sichtbar im Control Panel. |
| **Profil-Text** | KI generiert angepassten Profil-Abschnitt: hebt relevante Erfahrung hervor, passt Tonalitaet an Kundentyp an. |
| **Projekthistorie** | KI waehlt relevanteste Projekte aus und ordnet nach Relevanz (nicht chronologisch). |
| **Sprachumschaltung** | DE → EN: KI uebersetzt und passt Terminologie an (nicht nur woertlich). |
| **Regenerierung** | "Regenerieren" im Control Panel: KI erstellt neuen CV mit aktualisierten Skill-Gewichtungen oder Prompt-Anpassung. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| **CV Preview** | Page-by-Page-Darstellung (paginiert). Zeigt finales Dokument wie es exportiert wird. |
| **Vergleichsmodus** | Side-by-Side: Generischer CV (links) vs. Tailored CV (rechts). Aenderungen highlighted mit `ai-surface`. |
| **Export-Vorschau** | Vor Export: Preview des generierten Formats (PDF-Render). |
| **Berater-Profil** | Klick auf Beratername in Toolbar oeffnet Consultant Profile View im Slide-Over (480px) als Referenz. |

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Skill-Relevanz** | "SAP S/4HANA ist Top-1-Anforderung fuer RetailCorp — im CV hervorgehoben." Als `body-xs` im KI-Anpassungs-Panel. |
| **Laenge-Empfehlung** | "Fuer Konzernkunden empfehlen wir 2-Seiter. Aktuell: 3 Seiten — Sektion 'Interessen' ausblenden?" Als Info-Card. |
| **Template-Empfehlung** | "RetailCorp erwartet Corporate-Format (basierend auf vorherigen Angeboten)." |
| **Projekt-Auswahl** | "3 von 8 Projekten ausgewaehlt — hoechste Retail-Relevanz. [Alle anzeigen]." |

---

## 9. Interaktions-Flows

### Flow 1: Tailored CV generieren (Katrin, 10 Min)
```
Angebots-Canvas → "CV anpassen" bei Markus S. → CV Generator oeffnet →
Opportunity-Kontext geladen: RetailCorp, SAP Migration →
KI generiert tailored CV (ktype-ai-reveal, ~10s) →
Katrin prueft Preview → Sektion "Ausbildung" ausblenden →
Skill "ABAP" manuell hinzufuegen → "Regenerieren" →
KI aktualisiert CV (~5s) → Katrin zufrieden → Export: PDF
```

### Flow 2: Vergleich generisch vs. tailored
```
CV Generator → Toolbar: "Vergleich" → Split-View oeffnet →
Links: generischer CV · Rechts: tailored CV →
Aenderungen in ai-surface markiert →
Katrin sieht: Profil-Text angepasst, Skills umsortiert, Projekte gefiltert →
Katrin schliesst Vergleich → Zurueck zum Editor
```

### Flow 3: Team-CVs erstellen (Katrin, 30 Min)
```
Katrin generiert CV fuer Markus S. → Export: PDF →
Toolbar: Berater wechseln → [Lisa Tran ▾] →
KI generiert tailored CV fuer Lisa → Katrin prueft →
Sprache: EN (Kunde verlangt Englisch) → KI uebersetzt →
Export: PDF → Berater wechseln → Tim K. → wiederholen
```

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Angebots-Canvas | CV Generator | "CV anpassen" | `consultantId`, `opportunityId` |
| Offer Composer | CV Generator | Team-Sektion → "CV generieren" | `consultantId`, `offerId` |
| Consultant Profile View | CV Generator | "CV fuer Opportunity erstellen" | `consultantId` |
| CV Generator | Export (PDF/DOCX) | "Export" Button | `cvId`, Format |
| CV Generator | Offer Composer | Export abgeschlossen → CV wird eingebettet | `cvId`, `offerId` |
| CV Generator | Consultant Profile View | Klick auf Beratername | `consultantId` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| CV Preview | DS 6.10 Preview Panel (Document-Variante). |
| Split-View (Vergleich) | DS 6.10 Preview Panel (Split-View-Variante). |
| Control Panel | DS 6.1 Context Rail Pattern (1/3). |
| AI Content Cards | DS 6.4 AI-Generated Content Pattern (`ai-surface` fuer tailored Inhalte). |
| Template-Auswahl | DS 6.6 Selection Pattern (Dropdown + Thumbnail). |

---

## 12. Akzeptanzkriterien

- [ ] 2/3 CV Preview + 1/3 Control Panel Layout
- [ ] KI-generierter tailored CV basierend auf Opportunity-Kontext
- [ ] Streaming-Generierung mit `ktype-ai-reveal`
- [ ] Sektions-Toggles: Ein-/Ausblenden aktualisiert Preview live
- [ ] Template-Auswahl mit mindestens 3 Templates
- [ ] Consultant-Selector in Toolbar (Berater wechseln)
- [ ] Sprachumschaltung DE/EN mit KI-Uebersetzung
- [ ] Vergleichsmodus: Generischer vs. Tailored CV (Side-by-Side)
- [ ] Aenderungen in ai-surface markiert
- [ ] Export als PDF und DOCX
- [ ] Skill-Relevanz im KI-Anpassungs-Panel sichtbar
- [ ] Responsive: Slide-Over auf Tablet, Desktop-Empfehlung auf Mobile
- [ ] Accessibility: Preview aria-role="document", Toggles aria-checked, Focus Management

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll der Consultant selbst (Lisa, Stefan) seinen tailored CV reviewen koennen? | Offen — Empfehlung: Ja, per Notification "CV zur Pruefung". Phase 2. |
| 2 | Wie werden vertrauliche Projekte im CV behandelt (Anonymisierung)? | Offen — Empfehlung: Flag "anonymisieren" pro Projekt. KI ersetzt Firmennamen. |
| 3 | Sollen CVs versioniert werden (pro Opportunity)? | Offen — Empfehlung: Ja, automatisch bei jeder Generierung. |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. KI-tailored CV-Generierung, Vergleichsmodus, Sektions-Toggles, Sprachumschaltung, Multi-Format-Export. |
