# Onboarding Agent Dialog — Screen Spec

**Screen-ID:** AI-EXP-09
**PRD-Modul:** 9.3 — Smart Recruiting
**Journey(s):** J4-S3 (Lisa Onboarding mit Agent)
**Layout-Typ:** Dialog
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Lisa (Consultant) — Profil-Onboarding als neue Beraterin |
| **Sekundaer** | Martina (Admin, initiiert Onboarding), Stefan (wird als Ansprechpartner referenziert) |
| **Frequenz** | Einmalig (Onboarding). Partial Re-Entry moeglich bei "Spaeter fortfahren". |
| **Trigger** | Erste Anmeldung nach Account-Erstellung (automatisch), Admin Panel → "Berater einladen" → Lisa erhaelt Magic Link, Notification: "Profil vervollstaendigen". |
| **Herkunft** | Erste Anmeldung (primaer), Notification Center, Admin-Einladung. |
| **Ziel** | Strukturiertes, KI-gestuetztes Onboarding: Profil vollstaendig erfassen (Skills, Erfahrung, Praeferenzen, Verfuegbarkeit) in einem gefuehrten Dialog statt einem klassischen Formular. |
| **Geraete** | Desktop (Slide-Over), Mobile (Fullscreen). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Lisa | durch einen gefuehrten Dialog mein Profil aufbauen | ich nicht durch ein langes Formular scrollen muss |
| 2 | Lisa | meinen CV hochladen oder LinkedIn importieren und Skills automatisch erkennen lassen | ich Zeit spare und nichts vergesse |
| 3 | Lisa | vorgeschlagene Skills mit einem Klick bestaetigen oder ablehnen | die Eingabe schnell geht |
| 4 | Lisa | den Prozess unterbrechen und spaeter fortfahren koennen | ich flexibel bin |
| 5 | Lisa | am Ende eine Vorschau meines Profils sehen | ich weiss wie andere mich sehen werden |
| 6 | Lisa | auf dem Smartphone per Voice antworten koennen | ich das Onboarding unterwegs erledige |
| 7 | Martina | den Onboarding-Status neuer Berater einsehen | ich bei Bedarf nachfasse |

---

## 3. Layout — Desktop

**Layout-Typ: Dialog** (NICHT Progressive Disclosure, NICHT Bento Grid)
**Begruendung:** Onboarding ist eine gefuehrte, schrittweise Aufgabe. Der Dialog Agent fuehrt Lisa durch einzelne Schritte als Gespraech — weniger einschuechternd als ein leeres Profil-Formular. Slide-Over auf Desktop, Fullscreen auf Mobile.

```
┌─ Hauptinhalt (Hintergrund) ──────┬─ Onboarding Agent (Slide-Over 480px) ─┐
│                                   │                                        │
│  [Consultry Dashboard / Leer]     │  ✨ Willkommen bei Consultry     [X]  │
│                                   │                                        │
│                                   │  ┌─ Progress Bar ───────────────────┐ │
│                                   │  │  ■■■■■■░░░░░░░░░░░░░░ 2 von 7    │ │
│                                   │  │  Skills erfassen                  │ │
│                                   │  └──────────────────────────────────┘ │
│                                   │                                        │
│                                   │  ┌─ Agent Message (ai-surface) ─────┐ │
│                                   │  │  ✨ Hallo Lisa! Willkommen bei    │ │
│                                   │  │  mpl Consulting.                  │ │
│                                   │  │                                   │ │
│                                   │  │  Ich helfe dir, dein Profil       │ │
│                                   │  │  einzurichten. Das dauert ca.     │ │
│                                   │  │  5 Minuten.                       │ │
│                                   │  └──────────────────────────────────┘ │
│                                   │                                        │
│                                   │  ┌─ Agent Message (ai-surface) ─────┐ │
│                                   │  │  Ich habe deinen CV analysiert    │ │
│                                   │  │  und folgende Skills erkannt:     │ │
│                                   │  │                                   │ │
│                                   │  │  [✓] SAP S/4HANA                 │ │
│                                   │  │  [✓] Change Management            │ │
│                                   │  │  [✓] Stakeholder-Kommunikation   │ │
│                                   │  │  [ ] ABAP Development             │ │
│                                   │  │  [ ] Projektmanagement            │ │
│                                   │  │                                   │ │
│                                   │  │  Welche davon passen?             │ │
│                                   │  └──────────────────────────────────┘ │
│                                   │                                        │
│                                   │  ┌─ User Reply ─────────────────────┐ │
│                                   │  │  Die ersten drei stimmen!   [Lisa]│ │
│                                   │  └──────────────────────────────────┘ │
│                                   │                                        │
│                                   │  ┌─ Quick Replies ──────────────────┐ │
│                                   │  │  [Alle bestaetigen]              │ │
│                                   │  │  [Weitere Skills hinzufuegen]    │ │
│                                   │  │  [Spaeter fortfahren]            │ │
│                                   │  └──────────────────────────────────┘ │
│                                   │                                        │
│                                   ├────────────────────────────────────────┤
│                                   │  [Freitext eingeben...]        [🎤] [→]│
└───────────────────────────────────┴────────────────────────────────────────┘
```

**Schritte des Onboarding-Dialogs:**

| Schritt | Titel | Agent-Frage | Antwort-Typ |
|---------|-------|------------|-------------|
| 1 | Welcome | Begruessung + CV-Upload/LinkedIn-Import anbieten | `quick-reply`: "CV hochladen", "LinkedIn importieren", "Manuell starten" |
| 2 | Skills erfassen | AI-erkannte Skills aus CV/LinkedIn zur Bestaetigung | `checkbox`: Pre-selektierte Skills + manuelle Ergaenzung |
| 3 | Erfahrung | Berufserfahrung: Jahre, Branchen, Projekt-Highlights | `input` + `select`: Erfahrungsjahre, Branche(n), Freitext fuer Highlights |
| 4 | Praeferenzen | Projekt-Praeferenzen: Branche, Reisebereitschaft, Remote/Onsite | `select` + `quick-reply`: Multiple-Choice Optionen |
| 5 | Verfuegbarkeit | Ab wann verfuegbar, Stunden pro Woche, Einschraenkungen | `input` + `select`: Datum, Wochenstunden, Freitext |
| 6 | Profil-Vorschau | Zusammenfassung als Profil-Karte zeigen | `confirmation`: "Sieht gut aus!" / "Anpassen" |
| 7 | Fertig | Abschluss-Nachricht + naechste Schritte | `quick-reply`: "Dashboard oeffnen", "Profil weiter bearbeiten" |

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Slide-Over (480px). Hauptinhalt bleibt sichtbar im Hintergrund. |
| `breakpoint-lg` | Slide-Over (480px). |
| `breakpoint-md` | Fullscreen. Header mit Back-Button. Progress Bar sticky. |
| `breakpoint-sm` | Fullscreen. Voice-Button prominent neben Input. Quick Replies als volle Breite Buttons. Bottom Nav ausgeblendet waehrend Onboarding. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| CV-Extraktion | API: `POST /consultants/cv-extract` (Multipart Upload) | On-Demand |
| LinkedIn-Import | API: `POST /consultants/linkedin-import` | On-Demand |
| AI-Skills-Erkennung | API: `POST /consultants/skills/suggest` (aus CV/LinkedIn) | On-Demand |
| Skill-Taxonomie | API: `GET /skills/taxonomy` | Cached |
| Branchen-Liste | API: `GET /industries` | Cached |
| Profil speichern | API: `PATCH /consultants/{id}/profile` | Pro Schritt (Auto-Save) |
| Onboarding-Status | API: `GET /consultants/{id}/onboarding-status` | On-Load (Resume) |
| Profil-Vorschau | API: `GET /consultants/{id}/profile-preview` | On-Demand (Schritt 6) |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | Dialog Agent (strukturiert, aufgabenorientiert). KI fuehrt, Lisa antwortet. |
| **CV-Analyse** | CV-Upload → KI extrahiert Skills, Erfahrung, Branchen. Ergebnisse als Pre-Selektionen in Schritt 2-3. |
| **LinkedIn-Import** | OAuth-Flow → KI extrahiert oeffentliches Profil. Gleiche Pre-Fill-Logik wie CV. |
| **Skill-Vorschlaege** | KI schlaegt Skills basierend auf Dokumenten-Analyse vor. Pre-selektiert mit Confidence. Niedrige Confidence (<70%): nicht vorselektiert, aber vorgeschlagen. |
| **Freitext-Verstaendnis** | Lisa kann per Freitext antworten: "Ich bin gut in Change Management und Workshop-Moderation." → KI erkennt Skills daraus. |
| **Message-Reveal** | Alle Agent-Nachrichten erscheinen mit `ktype-ai-reveal` (Token-by-Token). |
| **Adaptive Steps** | Wenn CV erkannt: Schritte 2-3 sind pre-filled. Ohne CV: mehr Freitext-Fragen. Dialog passt sich an. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| Profil-Vorschau (Schritt 6) | Inline-Anzeige der Profil-Karte im Dialog Agent. Zeigt: Name, Foto, Skills (Tags), Erfahrung, Verfuegbarkeit, Match-Readiness-Score. |
| CV-Upload | Inline Thumbnail des hochgeladenen CVs. Klick → Preview Panel (Slide-Over) mit erkannten Daten hervorgehoben. |

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Skill-Confidence** | Pro erkanntem Skill: Confidence-Score. Hoch (>80%): vorselektiert. Mittel (50-80%): vorgeschlagen, nicht selektiert. Niedrig (<50%): nicht angezeigt. |
| **Branchen-Empfehlung** | Basierend auf Projekt-Historie in CV: "Deine Erfahrung deutet auf Retail und Manufacturing hin." |
| **Profil-Vollstaendigkeit** | Nach jedem Schritt: Profil-Vollstaendigkeitsprognose. "Mit diesen Skills: 72%. Noch Verfuegbarkeit ergaenzen fuer 85%." |
| **Team-Matching-Readiness** | "Dein Profil ist zu 85% bereit fuer Matching. Es fehlt: Zertifizierungen." Angezeigt in Schritt 6. |

---

## 9. Interaktions-Flows

### Flow 1: Vollstaendiges Onboarding mit CV (8 Min)
1. Lisa erhaelt Magic Link von Martina → erste Anmeldung
2. Onboarding Agent oeffnet sich automatisch (Slide-Over auf Desktop)
3. Agent: "Willkommen! Moechtest du deinen CV hochladen?" → Lisa waehlt "CV hochladen"
4. Lisa laedt PDF hoch → Ladebalken → "CV analysiert!"
5. Agent: "Ich habe 5 Skills erkannt..." → Lisa bestaetigt 3, entfernt 2
6. Agent: "Wie viele Jahre Beratungserfahrung?" → Lisa: "3 Jahre"
7. Agent: "Welche Branchen?" → Lisa waehlt: Retail, Manufacturing
8. Agent: "Projekt-Praeferenzen?" → Lisa waehlt: "Remote bevorzugt", "Reise 2-3 Tage/Woche"
9. Agent: "Ab wann bist du verfuegbar?" → Lisa: "Ab sofort, 40h/Woche"
10. Agent zeigt Profil-Vorschau-Karte: Name, Skills, Erfahrung, Verfuegbarkeit
11. Lisa: "Sieht gut aus!" → Agent: "Dein Profil ist aktiv! Du bist zu 85% Matching-bereit."
12. Lisa klickt "Dashboard oeffnen" → Onboarding abgeschlossen

### Flow 2: Mobile Onboarding mit Voice (10 Min)
1. Lisa oeffnet Consultry auf dem Smartphone (erste Anmeldung)
2. Onboarding Agent oeffnet sich Fullscreen
3. Agent begruesst Lisa → Quick Reply "Manuell starten" (kein CV auf Smartphone)
4. Agent: "Welche Skills hast du?" → Lisa tippt auf Mikrofon 🎤
5. Lisa spricht: "SAP Change Management, Workshop-Moderation, Stakeholder-Kommunikation"
6. Agent transkribiert und erkennt 3 Skills → zeigt als Checkboxen
7. Lisa bestaetigt per Quick Reply
8. Weitere Schritte per Quick Replies und gelegentlicher Voice-Eingabe
9. Schritt 6: Profil-Vorschau → Lisa bestaetigt
10. Agent: "Fertig! Du kannst am Desktop weitere Details ergaenzen."

### Flow 3: Unterbrochenes Onboarding (5 Min Resume)
1. Lisa startet Onboarding auf Mobile, beendet nach Schritt 3 ("Spaeter fortfahren")
2. Agent: "Kein Problem! Ich erinnere dich morgen."
3. Naechster Tag: Notification "Profil vervollstaendigen — 4 Schritte verbleiben"
4. Lisa oeffnet Notification → Agent setzt bei Schritt 4 fort
5. Agent: "Willkommen zurueck! Wir waren bei deinen Praeferenzen."
6. Lisa schliesst die verbleibenden Schritte ab

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Admin Panel (Martina) | Magic Link → Erste Anmeldung → Agent | "Berater einladen" | `consultantId`, E-Mail |
| Erste Anmeldung | Onboarding Agent (automatisch) | Login | `consultantId`, Onboarding-Status |
| Notification Center | Onboarding Agent (Resume) | "Profil vervollstaendigen" | `consultantId`, `currentStep` |
| Onboarding Agent | Consultant Profile Editor | "Profil weiter bearbeiten" (Schritt 7) | `consultantId` |
| Onboarding Agent | Cockpit Dashboard | "Dashboard oeffnen" (Schritt 7) | — |
| Onboarding Agent | Skill Normalization Dialog | Unbekannter Skill eingegeben | `skillName`, `consultantId` |
| CV-Upload im Agent | CV Extraktion Review | "CV-Details pruefen" (optional) | `documentId`, `consultantId` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Dialog Agent | `component-specs/ai-interaction/dialog-agent.md` (Slide-Over + Fullscreen) |
| Agent Messages | DS 6.4 AI-Generated Content Pattern |
| Quick Replies | `component-specs/ai-interaction/dialog-agent.md` — Pill Buttons |
| Progress Bar | `component-specs/ai-interaction/dialog-agent.md` — Step Indicator |
| Profil-Vorschau-Karte | `component-specs/data-display/cards.md` (Consultant Card) |
| Voice Input | DS 6.9 Voice Input Pattern |
| Slide-Over | `component-specs/composition/slide-over-panel.md` (480px) |

---

## 12. Akzeptanzkriterien

- [ ] Dialog Agent oeffnet sich automatisch bei erster Anmeldung
- [ ] Slide-Over (480px) auf Desktop, Fullscreen auf Mobile
- [ ] 7-Schritt-Dialog: Welcome → Skills → Erfahrung → Praeferenzen → Verfuegbarkeit → Vorschau → Fertig
- [ ] CV-Upload mit AI-Skill-Erkennung (Pre-Selektionen)
- [ ] LinkedIn-Import mit OAuth und Profil-Extraktion
- [ ] Quick Reply Buttons fuer haeufige Antworten
- [ ] Freitext-Eingabe mit AI-Verstaendnis (Skill-Erkennung aus natuerlicher Sprache)
- [ ] Voice Input auf Mobile (Browser Speech API)
- [ ] Progress Bar mit Schritt-Anzeige und Prozent
- [ ] `ktype-ai-reveal` fuer alle Agent-Nachrichten
- [ ] "Spaeter fortfahren" speichert Fortschritt, sendet Erinnerung
- [ ] Auto-Save pro Schritt (kein Datenverlust bei Abbruch)
- [ ] Profil-Vorschau in Schritt 6 als Consultant Card
- [ ] Profil-Vollstaendigkeits-Score am Ende angezeigt
- [ ] Adaptive Schritte: Pre-Fill bei CV/LinkedIn, mehr Fragen ohne Import

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll LinkedIn-Import automatisch das Profilfoto uebernehmen? | Offen — DSGVO-Pruefung noetig |
| 2 | Maximale Dauer bis zur Erinnerungs-Notification bei "Spaeter fortfahren"? | Offen — Vorschlag: 24h |
| 3 | Koennen bestehende Berater den Onboarding-Agent erneut durchlaufen (Profil-Refresh)? | Offen — empfohlen als "Profil-Update-Agent" |
| 4 | Voice Input: On-Device (Browser Speech API) oder Cloud-Transkription? | Offen — On-Device empfohlen fuer Datenschutz |
| 5 | Soll der Agent Lisas Tonalitaet adaptieren (formell/informell)? | Offen — Phase 2, Personalisierung |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 7-Schritt-Dialog. CV-Upload + LinkedIn-Import. AI-Skill-Erkennung. Voice Input. Profil-Vorschau. "Spaeter fortfahren" mit Resume. |
