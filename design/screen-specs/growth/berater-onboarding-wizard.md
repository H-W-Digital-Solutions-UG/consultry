# Berater-Onboarding Wizard — Screen Spec

**Screen-ID:** GRW-08
**PRD-Modul:** 9.3 — Smart Recruiting
**Journey(s):** J4-S1 bis S4 (Martina setzt neuen Berater auf)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Martina (Office-Managerin) — legt neue Berater im System an, Desktop-only |
| **Sekundaer** | Thomas (Freigabe, Vertrags-Review) |
| **Frequenz** | Martina: 1-3x/Woche (bei aktivem Recruiting). Durchlaufzeit pro Berater: 20-45 Min. |
| **Trigger** | Recruiting Pipeline → "Onboarding starten", Admin Panel → "Neuen Berater anlegen", Command Bar "Onboarding starten". |
| **Herkunft** | Recruiting Pipeline, Admin Panel, Command Bar. |
| **Ziel** | Neuen Berater vollstaendig im System anlegen: Stammdaten, CV, Skills, Vertrag, System-Zugang. Endzustand: Berater ist einsatzbereit und erhaelt Willkommens-E-Mail. |
| **Geraete** | Desktop only. Martina arbeitet ausschliesslich am Desktop. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Martina | einen neuen Berater in einem gefuehrten Wizard anlegen | ich nichts vergesse und der Prozess strukturiert ist |
| 2 | Martina | einen CV hochladen und KI-extrahierte Daten pruefen | das Onboarding schnell geht |
| 3 | Martina | KI-normalisierte Skills ueberpruefen und anpassen | die Datenqualitaet stimmt |
| 4 | Martina | den Wizard jederzeit als Entwurf speichern | ich unterbrechen und spaeter fortfahren kann |
| 5 | Martina | LinkedIn-Daten automatisch importieren lassen | ich weniger manuell eingeben muss |
| 6 | Thomas | den Vertragsstatus im Wizard sehen | ich weiss, wann der Berater startklar ist |
| 7 | Martina | am Ende eine Willkommens-E-Mail ausloesen und den Onboarding-Agent aktivieren | der Berater sich willkommen fuehlt und angeleitet wird |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (Multi-Step Wizard)**
**Begruendung:** Onboarding ist ein sequentieller Prozess mit klar definierten Schritten. Ein Wizard mit Fortschrittsanzeige fuehrt Martina durch den Prozess und verhindert, dass Schritte uebersprungen werden. Progressive Disclosure: jeder Schritt zeigt nur die relevanten Felder.

**Dieser Screen ist Desktop-only.** Keine Mobile-Variante.

```
┌─ Sidebar ─┬─ Berater-Onboarding Wizard ─────────────────────────────────┐
│            │                                                              │
│  Growth    │  Neuer Berater: Onboarding                                  │
│  > Recruit.│                                                              │
│            │  ┌─ Progress Bar ───────────────────────────────────────┐   │
│            │  │ ● Stammdaten → ● CV Upload → ○ Skill Review →       │   │
│            │  │ ○ Vertrag → ○ System-Zugang → ○ Willkommen          │   │
│            │  │ Schritt 2 von 6                                      │   │
│            │  └──────────────────────────────────────────────────────┘   │
│            │                                                              │
│            │  ┌─ Step Content ───────────────────────────────────────┐   │
│            │  │                                                       │   │
│            │  │  ═══ Schritt 2: CV Upload & Extraktion ═══           │   │
│            │  │                                                       │   │
│            │  │  ┌─ Upload Area ─────────────────────────────────┐   │   │
│            │  │  │                                                │   │   │
│            │  │  │  📄 CV hier ablegen oder [Datei auswaehlen]   │   │   │
│            │  │  │                                                │   │   │
│            │  │  │  Unterstuetzte Formate: PDF, DOCX, DOC        │   │   │
│            │  │  │  Max: 10 MB                                    │   │   │
│            │  │  │                                                │   │   │
│            │  │  └────────────────────────────────────────────────┘   │   │
│            │  │                                                       │   │
│            │  │  ✨ KI-Extraktion laeuft...                          │   │
│            │  │  ████████████░░░░░░░░  60%                           │   │
│            │  │                                                       │   │
│            │  │  ┌─ Extrahierte Daten ──────────────────────────┐    │   │
│            │  │  │                                               │    │   │
│            │  │  │  Name:        [Anna Fischer        ] ✅       │    │   │
│            │  │  │  Titel:       [SAP Senior Consultant] ✅      │    │   │
│            │  │  │  Erfahrung:   [12 Jahre             ] ✅      │    │   │
│            │  │  │  Standort:    [Frankfurt            ] ⚠️ pruefen │ │   │
│            │  │  │                                               │    │   │
│            │  │  │  Skills (Rohdaten → wird in Step 3 normalis.)│    │   │
│            │  │  │  - SAP S/4HANA Migration                      │    │   │
│            │  │  │  - Projektmanagement                          │    │   │
│            │  │  │  - ABAP Entwicklung                           │    │   │
│            │  │  │  - Change Management                          │    │   │
│            │  │  │                                               │    │   │
│            │  │  │  Konfidenz: 94%                                │    │   │
│            │  │  │                                               │    │   │
│            │  │  └───────────────────────────────────────────────┘    │   │
│            │  │                                                       │   │
│            │  │  ┌─ LinkedIn Import (optional) ─────────────────┐    │   │
│            │  │  │ [LinkedIn-Profil-URL einfuegen: ___________] │    │   │
│            │  │  │ [Importieren] — ergaenzt fehlende Felder     │    │   │
│            │  │  └──────────────────────────────────────────────┘    │   │
│            │  │                                                       │   │
│            │  └───────────────────────────────────────────────────────┘   │
│            │                                                              │
│            │  ┌─ Navigation ─────────────────────────────────────────┐   │
│            │  │ [← Zurueck]    [Entwurf speichern]    [Weiter →]     │   │
│            │  └──────────────────────────────────────────────────────┘   │
│            │                                                              │
└────────────┴──────────────────────────────────────────────────────────────┘
```

**Wizard-Schritte:**

| # | Schritt | Beschreibung | KI-Unterstuetzung |
|---|---------|-------------|-------------------|
| 1 | **Stammdaten** | Name, E-Mail, Telefon, Standort, Startdatum, Senioritaet | Vorausfuellung aus Recruiting Pipeline (falls vorhanden) |
| 2 | **CV Upload & Extraktion** | CV-Upload (PDF/DOCX), KI-Extraktion von Text, Skills, Erfahrung | OCR + NLP-Extraktion, Konfidenz-Anzeige pro Feld |
| 3 | **Skill Review** | KI-extrahierte Skills mit Normalisierungs-Vorschlaegen pruefen | Skill-Normalisierung: "SAP S/4HANA Migration" → "SAP S/4HANA" (Taxonomie-Match) |
| 4 | **Vertrag** | Vertragstyp, Konditionen, Start/Ende, Upload Vertragsdokument | Vorausgefuellt aus Recruiting Pipeline. Thomas-Freigabe-Flow. |
| 5 | **System-Zugang** | E-Mail-Account, Rollen/Rechte, Tool-Zugaenge | KI-Vorschlag basierend auf Rolle: "SAP Senior Consultant → Zugriff auf SAP-Projekte, Wissensbasis" |
| 6 | **Willkommen** | Zusammenfassung, Willkommens-E-Mail Vorschau, Onboarding-Agent Aktivierung | KI generiert personalisierte Willkommens-E-Mail |

**Progress Bar (DS `score-displays` / custom):**
- Abgeschlossene Schritte: `semantic-success` Kreis (●), `heading-sm`, `neutral-900`
- Aktueller Schritt: `brand-primary` Kreis (●), `heading-sm`, `brand-primary`
- Ausstehende Schritte: `neutral-400` Kreis (○), `body-sm`, `neutral-600`
- Verbindungslinien: `neutral-300` (ausstehend), `semantic-success` (abgeschlossen)

**KI-Extraktions-Konfidenz-Icons:**
- Hoch (> 90%): ✅ `semantic-success`
- Mittel (70-90%): ⚠️ `semantic-warning` — "pruefen"
- Niedrig (< 70%): ❌ `semantic-danger` — Pflicht-Korrektur

**Navigation Footer:**
- "Zurueck": `neutral-700` Text-Button, links
- "Entwurf speichern": `neutral-0` bg, `border-default`, Mitte
- "Weiter →": `brand-primary` bg, `neutral-0` Text, rechts
- Im letzten Schritt: "Weiter →" wird zu "Onboarding abschliessen"

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| **Dieser Screen ist Desktop-only.** | |
| `breakpoint-xl`+ | Step Content max-width 720px, zentriert. Progress Bar volle Breite. |
| `breakpoint-lg` | Step Content volle Breite. Progress Bar horizontal scrollbar bei Bedarf. |
| `breakpoint-md` | Progress Bar als kompakte Schritt-Nummern (1/6, 2/6...) statt Labels. |
| `breakpoint-sm` | Redirect zu Desktop. Banner: "Berater-Onboarding ist nur am Desktop verfuegbar." |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Kandidaten-Daten (Vorausfuellung aus Recruiting Pipeline) | Recruiting Service | Bei Wizard-Start |
| CV-Datei (Upload) | File Storage Service | Bei Upload |
| KI-Extraktion (Name, Skills, Erfahrung) | AI Extraction Service | Asynchron nach Upload (5-15 Sek) |
| Skill-Taxonomie (Normalisierungs-Vorschlaege) | Skill Graph Service | Bei Schritt 3 |
| LinkedIn-Profil-Daten (optional) | LinkedIn Integration Service | Bei URL-Import |
| Vertrags-Vorlagen | Document Service | Bei Schritt 4 |
| Rollen/Rechte-Definitionen | IAM Service | Bei Schritt 5 |
| E-Mail-Templates (Willkommen) | Template Service | Bei Schritt 6 |
| Entwurf-Status (Zwischenspeicherung) | Onboarding Service | Auto-Save alle 30 Sek |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Inline AI Extraction + Suggestions** — KI extrahiert, normalisiert und schlaegt vor. Martina prueft und korrigiert. |
| **CV-Extraktion** | KI extrahiert aus CV: Name, Titel, Erfahrungsjahre, Standort, Skills, Ausbildung, Zertifizierungen. Konfidenz pro Feld. |
| **Skill-Normalisierung** | KI mappt extrahierte Skills auf Consultry-Taxonomie: "SAP S/4HANA Migration" → "SAP S/4HANA" + "Migrations-Management". Martina bestaetigt oder korrigiert. |
| **LinkedIn-Enrichment** | KI ergaenzt fehlende Felder aus LinkedIn-Profil: Foto, Zusammenfassung, weitere Skills, Empfehlungen. |
| **Vorausfuellung** | Schritt 1: Vorausgefuellt aus Recruiting Pipeline (Name, Rolle, Skills). Schritt 4: Vertragstyp basierend auf Senioritaet. Schritt 5: Zugangsrechte basierend auf Rolle. |
| **Willkommens-E-Mail** | KI generiert personalisierte E-Mail: "Willkommen bei Consultry, Anna! Als SAP Senior Consultant wirst du..." Martina kann bearbeiten. |
| **Onboarding-Agent** | Im letzten Schritt: Aktivierung des Onboarding-Agents, der den neuen Berater in den ersten Tagen begleitet (Profil vervollstaendigen, System kennenlernen). |

---

## 7. Preview Panel Integration

- **CV-Preview:** Nach Upload wird CV als Preview (DS `preview-panel`, 400px Breite) rechts neben den extrahierten Daten angezeigt. Martina kann CV und Extraktion nebeneinander vergleichen.
- **Willkommens-E-Mail-Preview:** Im letzten Schritt: E-Mail-Vorschau als Preview Panel (HTML-gerendert, 400px Breite).
- **Profil-Vorschau:** Im letzten Schritt: Vorschau des Berater-Profils wie es im System erscheinen wird (Consultant Profile View Layout).

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Datenqualitaets-Score** | "Profil-Vollstaendigkeit: 85%. Fehlend: Foto, Zertifizierungen." — in Progress Bar als Gesamtscore. |
| **Aehnliche Berater** | "3 bestehende Berater haben aehnliches Profil. Skill-Luecken werden teilweise geschlossen." — im AI Card. |
| **Onboarding-Dauer-Prognose** | "Basierend auf bisherigen Onboardings: Berater wird in ca. 5 Tagen einsatzbereit sein." |
| **Fehlende Zertifizierungen** | "Fuer SAP-Projekte wird ISO 27001 empfohlen. Soll Zertifizierung eingeplant werden?" |

---

## 9. Interaktions-Flows

### Flow 1: Vollstaendiges Onboarding (Martina, 30 Min)
```
Martina klickt "Onboarding starten" in Recruiting Pipeline →
Schritt 1: Stammdaten sind vorausgefuellt → pruefen → Weiter →
Schritt 2: CV hochladen → KI extrahiert (10 Sek) → Daten pruefen →
           LinkedIn-URL einfuegen → Ergaenzung → Weiter →
Schritt 3: Skills reviewen → 2 Normalisierungen bestaetigen →
           1 Skill manuell anpassen → Weiter →
Schritt 4: Vertragstyp waehlen → Vertrag hochladen →
           Thomas-Freigabe anfordern → Weiter →
Schritt 5: Rolle waehlen → KI-Vorschlag fuer Zugaenge bestaetigen → Weiter →
Schritt 6: Willkommens-E-Mail pruefen → "Onboarding abschliessen" →
           E-Mail wird gesendet → Onboarding-Agent aktiviert →
           Recruiting Pipeline: Card wechselt zu "Onboarding"
```

### Flow 2: Entwurf speichern und spaeter fortfahren
```
Martina ist bei Schritt 3 → Telefon klingelt →
"Entwurf speichern" → Bestaetigung: "Entwurf gespeichert" →
Spaeter: Recruiting Pipeline → Card zeigt "Onboarding 50%" →
Klick → Wizard oeffnet bei Schritt 3
```

### Flow 3: Schnelles Onboarding (vorausgefuellte Daten)
```
Recruiting Pipeline hat umfangreiche Kandidaten-Daten →
Schritt 1: Stammdaten komplett vorausgefuellt → nur pruefen → Weiter →
Schritt 2: CV bereits hochgeladen (aus Recruiting) → Extraktion fertig → Weiter →
Schritt 3: Skills bereits normalisiert → Bestaetigen → Weiter →
... (beschleunigter Durchlauf in 15 Min)
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Recruiting Pipeline | Berater-Onboarding Wizard | "Onboarding starten" |
| **Von:** Admin Panel | Berater-Onboarding Wizard | "Neuen Berater anlegen" |
| **Zu:** Recruiting Pipeline | `growth/recruiting-pipeline.md` | Wizard-Abschluss (Card wechselt zu "Onboarding") |
| **Zu:** Consultant Profile Editor | `foundation/consultant-profile-editor.md` | Nach Onboarding: Berater ergaenzt eigenes Profil |
| **Zu:** Skill Normalization Dialog | `foundation/skill-normalization-dialog.md` | Schritt 3: detaillierte Skill-Normalisierung |
| **Zu:** Approval Manager | `platform/approval-manager.md` | Schritt 4: Thomas-Freigabe fuer Vertrag |
| **Zu:** Onboarding Agent Dialog | `ai-experience/onboarding-agent-dialog.md` | Letzter Schritt: Agent-Aktivierung fuer neuen Berater |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item:** Berater-Onboarding Wizard | Noch nicht erstellt. |
| **Figma:** Kein Frame vorhanden | Erstanlage erforderlich. Multi-Step Wizard mit Progress Bar, Light Theme. |

---

## 12. Akzeptanzkriterien

- [ ] 6-Schritt-Wizard: Stammdaten, CV Upload, Skill Review, Vertrag, System-Zugang, Willkommen
- [ ] Progress Bar: Schritt-Anzeige mit abgeschlossen/aktuell/ausstehend Status
- [ ] CV Upload: Drag-and-Drop + Datei-Dialog, PDF/DOCX, max 10 MB
- [ ] KI-Extraktion: Name, Titel, Erfahrung, Skills in < 15 Sekunden
- [ ] Konfidenz-Anzeige pro extrahiertem Feld (✅ ⚠️ ❌)
- [ ] Skill-Normalisierung: KI-Vorschlaege mit Bestaetigung/Korrektur
- [ ] LinkedIn-Import: URL-Eingabe, automatische Ergaenzung
- [ ] Entwurf speichern: Auto-Save alle 30 Sek + manueller Save-Button
- [ ] Navigation: Zurueck/Weiter, Schritt-Klick (nur auf abgeschlossene Schritte)
- [ ] Vertrags-Upload und Thomas-Freigabe-Flow
- [ ] System-Zugang: KI-Vorschlag basierend auf Rolle
- [ ] Willkommens-E-Mail: KI-generiert, bearbeitbar, Vorschau
- [ ] Onboarding-Agent-Aktivierung im letzten Schritt
- [ ] Desktop-only: Mobile zeigt Redirect-Banner
- [ ] Accessibility: role="form", aria-current="step", Keyboard-navigierbar

---

## 13. Offene Fragen

1. **CV-Formate:** Welche Formate neben PDF/DOCX? *Empfehlung: Phase 1: nur PDF + DOCX. Phase 2: LinkedIn PDF-Export, TXT.*
2. **LinkedIn-Integration:** Ist ein OAuth-Login noetig oder reicht URL-Scraping? *Empfehlung: Phase 1: URL-basierter Import (Public Profile). Phase 2: OAuth fuer vollstaendige Daten.*
3. **Vertrags-Workflow:** Wie laeuft die Thomas-Freigabe ab? *Empfehlung: Push-Notification an Thomas, Inline-Freigabe im Wizard oder via Approval Manager.*
4. **Onboarding-Agent:** Was genau macht der Agent in den ersten Tagen? *Empfehlung: Profil-Vervollstaendigung, System-Tour, Skill-Update-Nudge, Kalender-Setup.*
5. **Datenmigration:** Koennen bestehende Berater-Daten aus einem Altsystem importiert werden? *Empfehlung: Separater Bulk-Import-Prozess, nicht ueber den Wizard.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
