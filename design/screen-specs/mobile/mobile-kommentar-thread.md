# Mobile Kommentar-Thread — Screen Spec

**Screen-ID:** MOB-07
**PRD-Modul:** — (Querschnittsfunktion)
**Journey(s):** — (global, alle Journeys mit Kommentaren)
**Layout-Typ:** Stack + Bottom Nav
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Alle — Katrin, Thomas, Stefan, Lisa |
| **Sekundaer** | — |
| **Frequenz** | Katrin: 5-10x/Tag (Opportunity-Kommentare). Thomas: 2-3x/Tag (Approval-Kommentare, Reviews). Stefan: 3-5x/Tag (Projekt-Diskussionen). Lisa: 1-2x/Tag (Profil-Feedback). |
| **Trigger** | Push Notification "Neuer Kommentar", Tap auf Kommentar-Zaehler an Entity (Opportunity, Angebot, Vertrag, Staffing), Bottom Sheet → "Kommentare", @mention-Notification. |
| **Herkunft** | Opportunity Detail, Angebots-Canvas, Vertrags-Canvas, Staffing & Matching, Project Dashboard — jede Entity mit Kommentar-Funktion. |
| **Ziel** | Schnelle, kontextbezogene Kommunikation zu einer Entity. Kommentar lesen, antworten, Bild anhaengen — in unter 30 Sekunden. |
| **Geraete** | Smartphone (primaer). Touch + Keyboard. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | unterwegs einen Kommentar zu einer Opportunity hinterlassen | das Team meinen Input hat ohne auf Desktop zu warten |
| 2 | Thomas | auf einen Kommentar von Katrin antworten | ich schnell Feedback gebe |
| 3 | Stefan | ein Foto (z.B. Whiteboard vom Workshop) an einen Projekt-Kommentar anhaengen | das Team den Kontext sieht |
| 4 | Lisa | per @mention angesprochen werden und direkt antworten | ich nichts verpasse |
| 5 | Thomas | Kommentare in Echtzeit sehen (ohne Reload) | die Kommunikation fluessig ist |
| 6 | Katrin | per Swipe antworten | ich schneller bin |

---

## 3. Layout — Thread View (Fullscreen)

**Layout-Typ: Stack + Bottom Nav**
**Begruendung:** Kommentar-Threads sind linear, chronologisch, konversationell. Fullscreen nutzt den gesamten Bildschirm fuer maximale Lesbarkeit. Kein Bento Grid. Messaging-Pattern (WhatsApp/iMessage-aehnlich) fuer Vertrautheit.

```
+-- Status Bar -----------------------------------------------+
|  9:41                                           [Signal] 87% |
+--------------------------------------------------------------+
|                                                              |
|  [<-]  RetailCorp -- SAP Angebot          [3 Kommentare]    |  <- Sticky Header
|         Opportunity · Proposal-Phase                         |
|                                                              |
+--------------------------------------------------------------+
|                                                              |
|  +-- Kommentar 1 ------------------------------------------+ |
|  |  [Av] Katrin Engel              Heute, 09:15            | |
|  |                                                          | |
|  |  Thomas, koenntest du das Angebot bis morgen freigeben? | |
|  |  Der Kunde erwartet es bis Mittwoch.                     | |
|  |                                                          | |
|  |  @Thomas Weber                                           | |
|  +----------------------------------------------------------+ |
|                                                              |
|    +-- Antwort 1.1 (eingerueckt) -------------------------+ |
|    |  [Av] Thomas Weber           Heute, 09:42            | |
|    |                                                       | |
|    |  Mache ich heute Nachmittag. DB1 sieht gut aus.      | |
|    +-------------------------------------------------------+ |
|                                                              |
|    +-- Antwort 1.2 (eingerueckt) -------------------------+ |
|    |  [Av] Katrin Engel           Heute, 09:45            | |
|    |                                                       | |
|    |  Danke!                                               | |
|    +-------------------------------------------------------+ |
|                                                              |
|  +-- Kommentar 2 ------------------------------------------+ |
|  |  [Av] Stefan Kraus             Heute, 10:30            | |
|  |                                                          | |
|  |  Hier noch das Whiteboard vom Scoping-Workshop:         | |
|  |                                                          | |
|  |  +----------------------------------------------------+ | |
|  |  |  [Bild: Whiteboard-Foto]                           | | |
|  |  |  (Thumbnail 280px, tap to fullscreen)              | | |
|  |  +----------------------------------------------------+ | |
|  |                                                          | |
|  +----------------------------------------------------------+ |
|                                                              |
+--------------------------------------------------------------+
|  +-- Input Bar (ueber Bottom Nav) -------------------------+ |
|  |  [Av] Antworten...                  [Kamera] [Senden]   | |
|  +----------------------------------------------------------+ |
+--------------------------------------------------------------+
|  (circle) Cockpit  (circle) Approvals  (circle) Pipeline  (circle) AI  |  <- Bottom Nav
+--------------------------------------------------------------+
```

**Kommentar-Bubble Aufbau:**
- Avatar (`avatar-sm`, 28px, `radius-full`)
- Name (`heading-sm`, `neutral-900`) + Timestamp (`body-xs`, `neutral-600`)
- Kommentar-Text (`body-md`, `neutral-900`)
- @mentions: `brand-primary` Text, klickbar → Profil
- Bilder: Thumbnail (max-width 280px, `radius-md`), Tap → Fullscreen Gallery
- Links: `brand-primary`, URL-Preview mit Titel + Favicon (optional)

**Antwort-Einrueckung:**
- 1 Level Einrueckung: `space-6` (24px) links, duennere linke Border (`border-subtle`, 2px, `neutral-200`)
- Max 1 Level — tiefere Verschachtelung wird nicht unterstuetzt (Uebersichtlichkeit auf Mobile)

**Rich Text:**
- **Fett:** `**text**` → `font-weight: 600`
- **Links:** Auto-Detect URLs, klickbar
- **@mentions:** `@Name` → Autocomplete-Dropdown, `brand-primary` Farbe, Push-Notification an erwaehnte Person
- Kein Markdown-Editor — Inline-Formatierung via Tastatur

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| Mobile (primaer) | Fullscreen Thread View wie oben. Bottom Nav sichtbar. Input Bar ueber Bottom Nav. |
| Tablet | Identisch, aber Input Bar breiter. Bilder groesser (max 400px). |
| Desktop | Kommentar-Thread als Slide-Over Panel (DS 5.11) oder integriert in Entity-Detail (Tab "Kommentare"). Nicht als Fullscreen. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Kommentar-Thread | API: `GET /comments?entity={entityType}/{entityId}` | Real-time via WebSocket |
| Kommentar senden | API: `POST /comments` | Sofort (optimistic UI) |
| Bild hochladen | API: `POST /attachments` (multipart) | Async mit Progress-Indicator |
| @mention Autocomplete | API: `GET /users/search?q={query}` | On-Demand (Debounce 300ms) |
| Push Notification (neuer Kommentar) | Push Service | Real-time |
| Entity-Kontext (Titel, Phase, Status) | Entity Service | Bei Seitenladen |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Keine aktive AI** im Kommentar-Thread. |
| **Begruendung** | Kommentare sind persoenliche Kommunikation. KI-Eingriffe (Auto-Complete, Zusammenfassung) waeren hier unangemessen. |
| **Einzige Ausnahme** | @mention-Vorschlaege: System schlaegt relevante Personen vor basierend auf Entity-Kontext (z.B. zugewiesene Berater, Opportunity-Owner). Kein KI-Label — wirkt wie Standard-Autocomplete. |

---

## 7. Preview Panel Integration

- **Bild-Tap:** Tap auf Bild-Thumbnail oeffnet Fullscreen-Gallery mit Swipe-Navigation (wenn mehrere Bilder im Thread).
- **Link-Preview:** URLs im Kommentar-Text zeigen kompakte Preview: Favicon + Titel + Domain. Tap oeffnet im In-App-Browser.
- **Entity-Header:** Tap auf Entity-Titel im Header navigiert zurueck zur Entity-Detail-Ansicht.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Keine Predictive Features** | Kommentar-Threads sind real-time Kommunikation. Keine Prognosen noetig. |
| **Smart Notifications (intern)** | System erkennt ob ein @mention unbeantwortet bleibt (>4h Wartezeit). Reminder-Push an erwaehnte Person. Max 1 Reminder. |

---

## 9. Interaktions-Flows

### Flow 1: Push → Antworten (30 Sek)
```
Katrin erhaelt Push: "@Katrin: Koenntest du das Angebot pruefen?" →
Tap auf Push → Kommentar-Thread oeffnet, Auto-Scroll zum neuen Kommentar →
Katrin liest → Tap auf Input Bar → Tippt: "Ja, mache ich heute." →
Tap "Senden" → Kommentar erscheint sofort (optimistic UI) →
Thomas sieht Katatrins Antwort in Echtzeit (WebSocket)
```

### Flow 2: Swipe-Antwort
```
Thomas scrollt durch Thread → Sieht Katrins Kommentar →
Swipe rechts auf Kommentar → "Antworten" Action erscheint →
Loslassen → Input Bar fokussiert, "Antwort auf Katrin:" Kontext →
Thomas tippt Antwort → Senden → Antwort eingerueckt unter Katrins Kommentar
```

### Flow 3: Bild anhaengen (Stefan)
```
Stefan in Projekt-Kommentar-Thread → Tap [Kamera] →
Action Sheet: [Foto aufnehmen] [Aus Galerie waehlen] →
Stefan waehlt "Foto aufnehmen" → Kamera oeffnet →
Foto aufgenommen → Preview → "Verwenden" →
Optional: Kommentar-Text dazu: "Whiteboard vom Workshop" →
Senden → Bild-Upload (Progress-Bar) → Thumbnail erscheint im Thread
```

### Flow 4: @mention
```
Katrin tippt "@" → Autocomplete-Dropdown erscheint →
Top-Vorschlaege: Thomas (Opportunity-Owner), Stefan (zugewiesen) →
Katrin tippt "Th" → Gefiltert auf "Thomas Weber" →
Tap → "@Thomas Weber" eingefuegt (brand-primary) →
Katrin schreibt weiter → Senden →
Thomas erhaelt Push-Notification mit @mention-Kontext
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Push Notification | Kommentar-Thread | Tap auf "Neuer Kommentar" Push |
| **Von:** Entity Detail (Opportunity, Angebot, etc.) | Kommentar-Thread | Tap auf Kommentar-Zaehler |
| **Von:** Notification Center | Kommentar-Thread | Tap auf Kommentar-Notification |
| **Zu:** Entity Detail | Opportunity Detail, Angebots-Canvas, etc. | Tap auf Entity-Titel im Header |
| **Zu:** Consultant Profile | `foundation/consultant-profile-view.md` | Tap auf Avatar/Name |
| **Zu:** Fullscreen Gallery | Inline | Tap auf Bild-Thumbnail |
| **Desktop:** | Slide-Over Panel / Entity-Tab | Gleiche Daten, anderes Layout |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein Aequivalent | Kommentar-Thread ist neu — kein Stitch-Import. |
| **Figma:** Ausstehend | Mobile Kommentar-Thread muss erstellt werden. |
| **Inspiration:** iMessage, Slack Mobile, Linear Mobile | Thread-Struktur, Swipe-Reply, Real-time. |
| **Component:** Chat Interface | `ai-interaction/chat-interface.md` — aehnliches Bubble-Pattern, aber ohne AI-Kontext. |

---

## 12. Akzeptanzkriterien

- [ ] Fullscreen Thread View mit Kommentar-Bubbles (Avatar, Name, Timestamp, Text)
- [ ] Antwort-Einrueckung: 1 Level, `space-6` links, `border-subtle` links
- [ ] Rich Text: Fett, Links (auto-detect), @mentions (Autocomplete + Push)
- [ ] Bild-Anhaenge: Kamera oder Galerie, Thumbnail (280px), Tap → Fullscreen
- [ ] Real-time Updates via WebSocket (neue Kommentare erscheinen live)
- [ ] "Antworten" Swipe-Action auf Kommentar-Bubbles
- [ ] Input Bar: Text-Input + Kamera-Button + Senden-Button, Keyboard-aware Scroll
- [ ] @mention Autocomplete: Entity-relevante Personen zuerst
- [ ] Push Notification bei neuem Kommentar und @mention
- [ ] Entity-Kontext im Header: Typ, Name, Phase
- [ ] Optimistic UI: Kommentar erscheint sofort nach Senden
- [ ] Offline: Kommentare werden gequeued und bei Verbindung gesendet
- [ ] Accessibility: `role="log"`, `aria-live="polite"`, VoiceOver-kompatibel

---

## 13. Offene Fragen

1. **Thread-Tiefe:** Soll mehr als 1 Level Einrueckung unterstuetzt werden? *Empfehlung: Nein — 1 Level reicht fuer Mobile. Tiefere Threads werden flat dargestellt.*
2. **Editieren/Loeschen:** Kann ein Kommentar nachtraeglich bearbeitet/geloescht werden? *Empfehlung: Bearbeiten innerhalb 5 Min. Loeschen: nur eigene, nur soft-delete (Text: "Kommentar entfernt").*
3. **Reaktionen (Emoji):** Sollen Emoji-Reaktionen auf Kommentare unterstuetzt werden? *Empfehlung: Phase 2. v1: nur Text-Antworten.*
4. **Dateigroesse:** Max Upload-Groesse fuer Bilder? *Empfehlung: 10 MB. Automatische Komprimierung auf 2 MB serverseitig.*
5. **Benachrichtigungs-Praeferenzen:** Kann man Kommentar-Notifications pro Entity stummschalten? *Empfehlung: Ja — "Benachrichtigungen aus" pro Thread.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. Thread-View. Swipe-Reply. @mentions. Bild-Anhaenge. WebSocket. |
