# Avatars

**Komponenten-Familie:** Primitives
**DS-Version:** v1.3
**DS-Referenz:** — (neu in v1.3)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Avatars repraesentieren Personen (Berater, Kontakte, Nutzer) und Organisationen (Kunden, Firmen) visuell. Sie erscheinen in Profilen, Listen, Cards, Notifications und der Stakeholder-Map.

---

## 2. Anatomie

```
┌───────┐
│       │
│  Foto │  <- Rund (radius-full), Foto oder Initialen
│  /AB  │
│       │
└───────┘
   [●]     <- Optional: Status-Dot (online/offline/busy)
```

---

## 3. Varianten

| Variante | Form | Inhalt | Verwendung |
|----------|------|--------|------------|
| **Person (Foto)** | Kreis, `radius-full` | Foto-Upload | Berater, Nutzer, Kontakte mit Foto. |
| **Person (Initialen)** | Kreis, `radius-full` | 1-2 Buchstaben, `brand-primary` bg, `neutral-0` text | Fallback wenn kein Foto. Initialen aus Vor-/Nachname. |
| **Organisation** | Rounded Square, `radius-md` | Logo oder `Building2` Icon | Kunden, Firmen. |
| **Anonymisiert** | Kreis, `radius-full` | Generisches Silhouette-Icon, `neutral-300` bg | Client Portal: Berater ohne Identitaet. |
| **Gruppe** | Ueberlappende Kreise (max 4 + "+N") | Fotos/Initialen | Team-Anzeige in Cards, Staffing. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `person` / `organization` / `anonymous` / `group` | `person` | Typ des Avatars. |
| `size` | `xs` / `sm` / `md` / `lg` / `xl` | `md` | Groesse (siehe unten). |
| `src` | URL | `null` | Foto-URL. Fallback zu Initialen. |
| `name` | String | erforderlich | Name fuer Initialen-Berechnung und `aria-label`. |
| `status` | `online` / `offline` / `busy` / `none` | `none` | Status-Dot. |
| `items` | Array | `[]` | Fuer Gruppe: Array von Avatar-Daten. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| **Groessen:** | |
| xs | 24px |
| sm | 32px |
| md | 40px |
| lg | 56px |
| xl | 80px (Profil-Header) |
| Border-radius (Person) | `radius-full` |
| Border-radius (Org) | `radius-md` (8px) |
| Initialen bg | `brand-primary` |
| Initialen text | `neutral-0`, `heading-sm` (sm/md), `heading-md` (lg/xl) |
| Anonymisiert bg | `neutral-300` |
| Anonymisiert icon | `neutral-500`, `UserCircle` |
| Status-Dot | 8px (sm), 10px (md), 12px (lg). Position: bottom-right. |
| Status online | `semantic-success` |
| Status offline | `neutral-400` |
| Status busy | `semantic-danger` |
| Status-Dot border | 2px `neutral-0` (weisser Ring um Dot) |
| Gruppe overlap | -8px margin-left (ab 2. Avatar). Border: 2px `neutral-0`. |
| Gruppe "+N" | `neutral-200` bg, `neutral-700` text, `body-xs` |

---

## 6. Interaktive States

| State | Visuell |
|-------|---------|
| **Default** | Wie Variante. |
| **Hover** | Leichter brightness-Shift (+5%). Cursor: pointer (wenn klickbar). |
| **Focus** | `border-focus` Ring (2px `brand-primary`). |
| **Loading** | Shimmer-Placeholder (Kreis in `neutral-200`). |
| **Error** | Fallback zu Initialen-Variante. |

---

## 7. Responsive Verhalten

Avatars skalieren nicht automatisch. Container bestimmt die Groesse. Empfehlung: `lg`/`xl` nur auf Desktop-Profil-Headern. `sm`/`md` fuer Listen und Cards. `xs` fuer kompakte Tabellen.

---

## 8. Voice Input Integration

Nicht zutreffend.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Alt-Text** | `alt="Markus Schneider"` (Foto). Dekorativ: `alt=""` + `aria-hidden="true"`. |
| **Status-Dot** | `aria-label="Online"` / `aria-label="Abwesend"`. Nie nur visuell. |
| **Gruppe** | `aria-label="Team: Markus S., Lisa T. und 2 weitere"`. |
| **Kontrast** | Initialen auf `brand-primary`: 4.62:1 (geprueft). |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Cards (`data-display/cards.md`) | Avatar in Card-Headern. |
| Data Tables (`data-display/data-tables.md`) | Avatar-Spalte in Berater-/Kunden-Tabellen. |
| Notification Inbox (`composition/notification-inbox.md`) | Absender-Avatar in Notifications. |
| Topbar (`navigation/topbar-breadcrumbs.md`) | User-Avatar rechts in Topbar. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Anonymisiert-Variante fuer Client Portal. Gruppen-Avatar. |
