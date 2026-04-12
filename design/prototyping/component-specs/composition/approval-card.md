# Approval Card

**Komponenten-Familie:** Composition
**DS-Version:** v1.3
**DS-Referenz:** — (neu)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Approval Card ist eine spezialisierte Card-Komponente fuer Genehmigungs-Workflows. Sie stellt Freigabeanfragen in einer effizienten, entscheidungsfreundlichen Form dar und ermoeglicht schnelle Genehmigung, Ablehnung oder Delegation.

**Primaere Persona:** Thomas Weber (Managing Partner) — bearbeitet taegliche Genehmigungsanfragen im Cockpit und unterwegs auf dem Smartphone.

**Haeufigste Verwendungen:**
- Approval Manager: Warteschlange aller offenen Genehmigungen
- Mobile Approval Card: Quick-Approval via Swipe
- Cockpit Dashboard: Top-3-Approvals als Bento-Grid-Zelle
- Notification Inbox: Approval-Notifications verlinken zur Approval Card

---

## 2. Anatomie

### Compact (Listenzeile)
```
┌──────────────────────────────────────────────────────────────────┐
│  [📋 Icon]  Angebot: RetailCorp SAP    [Avatar: K.E.]  340k EUR │
│             Wartet seit 2h               [Genehmigen] [Ablehnen]│
└──────────────────────────────────────────────────────────────────┘
     ↑              ↑                         ↑            ↑
  Type Icon    Title + Wait Time         Requester    Quick Actions
```

### Expanded (Vollansicht)
```
┌──────────────────────────────────────────────────────────────────┐
│  [📋]  Angebotsfreigabe                        ⏱ Wartet seit 2h │
│        RetailCorp — SAP S/4HANA Migration                 [···] │
│        Angefragt von: [Avatar] Katrin Engel                     │
├──────────────────────────────────────────────────────────────────┤
│  ┌─ KI-Bewertung ────────────────────────────────────────────┐  │
│  │  ✨ Empfehlung: Genehmigen                                │  │
│  │  DB1 liegt bei 28%, ueber Schwellwert (25%). Kunde hat     │  │
│  │  3 erfolgreiche Projekte in den letzten 12 Monaten.       │  │
│  └───────────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────┤
│  Zusammenfassung                                                │
│  Angebotswert:     340.000 EUR                                  │
│  DB1-Marge:        28%                                          │
│  Projektlaufzeit:  6 Monate                                     │
│  Team-Groesse:     4 Berater                                    │
├──────────────────────────────────────────────────────────────────┤
│  Verlauf                                                        │
│  ● Erstellt: 29.03.2026, Katrin Engel                           │
│  ● Review: 30.03.2026, Stefan Kraus ("LGTM")                   │
├──────────────────────────────────────────────────────────────────┤
│  [An Person delegieren ▾]    [Ablehnen]    [✓ Genehmigen]      │
└──────────────────────────────────────────────────────────────────┘
```

### Inline (eingebettet)
```
┌──────────────────────────────────────┐
│  Angebotsfreigabe                    │
│  RetailCorp — 340k EUR              │
│  ✨ Empfehlung: Genehmigen           │
│  [Genehmigen] [Ablehnen]            │
└──────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Groesse | Verwendung |
|----------|---------|------------|
| **Compact** | Listenzeile, 64-72px Hoehe | Approval Manager Queue. Tabellen-artige Darstellung fuer schnelles Scannen. |
| **Expanded** | Vollstaendige Card mit allen Details | Einzelansicht: Klick auf Compact oder direkter Zugang. KI-Bewertung, Finanzdaten, Verlauf sichtbar. |
| **Inline** | Reduzierte Card, 120-160px Hoehe | Eingebettet in Cockpit-Dashboard (Bento Grid Zelle) oder Notification Inbox. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `compact` / `expanded` / `inline` | `compact` | Darstellungs-Variante. |
| `type` | `offer` / `budget` / `staffing` / `contract` / `expense` | erforderlich | Genehmigungs-Typ (bestimmt Icon und Label). |
| `title` | String | erforderlich | Titel der Genehmigung. |
| `subtitle` | String | `null` | Untertitel (z.B. Kundenname, Projekt). |
| `requester` | Avatar Props + Name | erforderlich | Anfragende Person. |
| `amount` | String | `null` | Zusammenfassungswert (z.B. "340.000 EUR"). |
| `status` | `pending` / `approved` / `rejected` / `delegated` | `pending` | Aktueller Status. |
| `waitingSince` | DateTime | `null` | Zeitpunkt seit wann die Anfrage wartet. |
| `aiAssessment` | Object | `null` | KI-Bewertung: `{ recommendation, explanation }`. |
| `details` | Array of Key-Value | `[]` | Detail-Daten (Expanded-Variante). |
| `history` | Array of History Items | `[]` | Genehmigungs-Verlauf (Expanded-Variante). |
| `onApprove` | Function | erforderlich | Callback fuer Genehmigung. |
| `onReject` | Function | erforderlich | Callback fuer Ablehnung. |
| `onDelegate` | Function | `null` | Callback fuer Delegation. |
| `delegateTo` | Array of Person | `[]` | Verfuegbare Personen fuer Delegation. |
| `swipeToApprove` | Boolean | `true` | Mobile: Swipe-Right fuer Genehmigung. |
| `keyboardShortcut` | Boolean | `true` | Keyboard-Shortcut "G" fuer Genehmigen. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Card bg | `neutral-0` |
| Card border | `border-default` |
| Card radius | `radius-lg` |
| Card shadow | `shadow-sm` |
| Card padding (Compact) | `space-3` vertikal, `space-4` horizontal |
| Card padding (Expanded) | `space-4` |
| Card padding (Inline) | `space-3` |
| Title font (Compact) | `heading-sm`, `neutral-900` |
| Title font (Expanded) | `heading-lg`, `neutral-900` |
| Title font (Inline) | `heading-sm`, `neutral-900` |
| Subtitle font | `body-sm`, `neutral-600` |
| Amount font | `mono-md`, `neutral-900` |
| Wait time font | `body-sm` |
| Wait time color (< 4h) | `neutral-600` |
| Wait time color (4-24h) | `semantic-warning` |
| Wait time color (> 24h) | `semantic-danger` |
| Wait time icon | `icon-xs` (Clock), entsprechende Farbe |
| Type Icon | `icon-md`, `neutral-500` |
| Requester Avatar | Avatar `sm` (Compact/Inline), Avatar `md` (Expanded) |
| Status: Pending left border | 3px `semantic-warning` |
| Status: Approved left border | 3px `semantic-success` |
| Status: Rejected left border | 3px `semantic-danger` |
| Status: Delegated left border | 3px `brand-primary` |
| Status Badge (Compact) | Gemaess `badges-tags.md` mit semantischer Farbe |
| AI Assessment bg | `ai-surface` |
| AI Assessment border | `ai-border` (links, 3px) |
| AI Assessment radius | `radius-md` |
| AI Assessment padding | `space-3` |
| AI Assessment icon | `ai-sparkle` Sparkles, `icon-sm` |
| AI Assessment font | `body-md`, `neutral-900` |
| AI Assessment recommendation font | `heading-sm`, `neutral-900` |
| Details label font | `label`, `neutral-600` |
| Details value font | `body-md`, `neutral-900` |
| Details value (monetary) | `mono-md`, `neutral-900` |
| History dot | 8px, semantische Farbe, `radius-full` |
| History text font | `body-sm`, `neutral-700` |
| History timestamp font | `body-xs`, `neutral-500` |
| Divider | `border-subtle` |
| Approve Button | Primary-Variante: `semantic-success` bg, `neutral-0` text |
| Reject Button | Secondary-Variante: `border-default`, `neutral-700` text |
| Delegate Button | Ghost-Variante: `brand-primary` text |
| Swipe approve bg | `semantic-success-light` |
| Swipe approve icon | `icon-lg` (Check), `semantic-success` |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default (Pending)** | Left border `semantic-warning`. Wait-Time sichtbar. | — |
| **Hover (Compact)** | `interactive-warm` bg | `duration-fast`. Klick oeffnet Expanded. |
| **Focus** | `border-focus` Ring | Keyboard-Navigation. |
| **Swipe Right (Mobile)** | Card verschiebt sich nach rechts. `semantic-success-light` bg wird sichtbar. Check-Icon. | Ab 40% Swipe-Distanz: Genehmigung wird ausgeloest. Haptic Feedback. |
| **Swipe Left (Mobile)** | Nicht unterstuetzt (destruktive Aktion erfordert explizite Interaktion). | — |
| **Keyboard "G"** | Approve-Button pulsiert kurz (visuelles Feedback). | Nur wenn Approval Card fokussiert. Genehmigung wird ausgefuehrt. |
| **Approving** | Approve-Button zeigt Spinner. Card bg blendet zu `semantic-success-light`. | `duration-normal`. |
| **Approved** | Left border wird `semantic-success`. Status-Badge "Genehmigt". Buttons verschwinden. | Card bleibt 2s sichtbar, dann Fade-out aus der Queue. |
| **Rejecting** | Ablehnen oeffnet Grund-Auswahl (Bottom Sheet auf Mobile, Dropdown auf Desktop). | Pflichtfeld: Ablehnungsgrund. |
| **Rejected** | Left border wird `semantic-danger`. Status-Badge "Abgelehnt". | Card bleibt 2s sichtbar, dann Fade-out. |
| **Delegating** | Dropdown mit verfuegbaren Personen. | Auswahl sendet Delegation, Status wechselt. |
| **Delegated** | Left border wird `brand-primary`. Status-Badge "Delegiert an [Name]". | Card verschwindet aus eigener Queue. |
| **Loading** | Shimmer: Header-Block + 2 Zeilen (Compact), volle Card-Silhouette (Expanded). | Bei initialem Laden. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-lg`+ | Compact in Queue-Liste. Klick oeffnet Expanded als Slide-Over oder Inline-Expansion. KI-Bewertung voll sichtbar. |
| `breakpoint-md` | Compact in Queue. Expanded als Bottom Sheet (Expanded-Variante). |
| `breakpoint-sm` | Compact als volle Breite. Swipe-to-Approve aktiv. Expanded als Bottom Sheet (Fullscreen). Buttons in Footer gestapelt: Genehmigen oben, Ablehnen darunter. |

**Mobile Quick-Approval:**
- Swipe-Right auf Compact Card loest Genehmigung aus (mit Haptic Feedback).
- Ablehnung immer ueber Button (nie via Swipe — destruktive Aktionen erfordern bewusste Interaktion).

---

## 8. Voice Input Integration

Nicht zutreffend — Genehmigungs-Aktionen sind explizite Entscheidungen, die nicht ueber Voice Input ausgeloest werden sollen. Die KI-Bewertung wird gelesen, nicht diktiert.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Compact: `role="article"`, `aria-label="Genehmigungsanfrage: [Titel], wartet seit [Zeit]"`. |
| **Status** | Status als `aria-label` angesagt: "Status: Ausstehend" / "Genehmigt" / "Abgelehnt" / "Delegiert". |
| **Keyboard** | `Tab` fokussiert Card, dann Buttons. `Enter` auf Card oeffnet Expanded. `G` fuer Genehmigen (wenn fokussiert). |
| **Screen Reader** | KI-Bewertung: "KI-Empfehlung: Genehmigen. DB1 liegt bei 28 Prozent, ueber Schwellwert." |
| **Swipe** | Swipe-Aktion hat alternative Button-Aktion fuer Nutzer ohne Touch. |
| **Wait Time** | Urgenz-Eskalation auch als Text-Label ("Dringend: wartet seit ueber 24 Stunden"), nicht nur Farbe. |
| **Focus Restore** | Nach Genehmigung/Ablehnung: Focus springt zur naechsten Card in der Queue. |
| **Reduced Motion** | Swipe-Animation deaktiviert. Sofortige Statusaenderung ohne Fade-Transition. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Cards (`data-display/cards.md`) | Approval Card ist eine spezialisierte Card-Variante. Teilt Basis-Tokens (bg, radius, shadow). |
| AI Content Card (`ai-interaction/ai-content-card.md`) | KI-Bewertungs-Sektion in der Expanded-Variante nutzt AI Content Card Pattern. |
| Badges & Tags (`primitives/badges-tags.md`) | Status-Badges fuer Pending/Approved/Rejected/Delegated. |
| Avatars (`primitives/avatars.md`) | Requester-Avatar im Header. |
| Bottom Sheet (`composition/bottom-sheet.md`) | Mobile Expanded-Ansicht als Bottom Sheet. Ablehnungsgrund-Auswahl als Bottom Sheet. |
| Notification Inbox (`composition/notification-inbox.md`) | Approval-Notifications verlinken zur Approval Card. |
| Buttons (`primitives/buttons.md`) | Approve/Reject/Delegate Buttons. Approve nutzt spezielle `semantic-success` Variante. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Compact/Expanded/Inline-Varianten. KI-Bewertung. Swipe-to-Approve. Keyboard Shortcut "G". Urgenz-Eskalation. |
