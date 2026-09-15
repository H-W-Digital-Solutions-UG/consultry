# Kontext-Extrakt für die Smoke-Test-Seiten

Stand 12.09.2026. Verdichtet aus dem Wissenskonsolidierungspaket (04.09.), dem Handover (26.08.), dem Pitch Deep
Report (15.08.) und der Consultry Marketing DS (Figma-Skills). Status der Aussagen: berichtet, nicht neu ratifiziert.

## Produktkern (CONTEXT.md / PRODUCT.md, 04.09.)

- Consultry ist der AI-native Arbeitskern für spezialisierte Beratungen: Firmenwissen und Projekterfahrung verbunden
  mit Akquise, Beratungsarbeit und Unternehmensführung. Harness by default, einfaches Quellen-/Connector-Onboarding,
  kontrollierte Daten- und Modellwege.
- Mandant ist die Beratung; ihre Klienten haben eigene Vertraulichkeitsgrenzen.
- Neun Kernfähigkeiten: Quellen anschließen, Wissen verknüpfen, Wissen aktuell halten, Arbeitskontext bilden, Menschen
  und Agenten koordinieren, Ergebnisse erzeugen, Ergebnisse prüfen, Informationen schützen, Modelle kontrolliert nutzen.
- Ein akzeptiertes Kundenartefakt wird nicht automatisch Firmenwissen. Artefakt-Freigabe, Korpus-Übernahme, Asset-Release
  und Modelltraining sind verschiedene Vorgänge.
- Verworfen: Chat-only-Produkt; Harness nur als Nächster-Schritt-Vorschlag; zwei Menschen je Ergebnis; Ähnlichkeit =
  wiederverwendbares Asset; Rechteprüfung nur am Prompt/Frontend (Audit: unzureichend).

## Vokabular (verwendet in den Seiten)

Ergänzung 13.09., Ledger-Seite v11: Der [aktuelle Produktkern](../../product-definition/PRODUCT.md)
und [„Wissensledger integrieren“, L2–L5](../../product-definition/archive/session-2026-09-05-wissensledger/INSIGHTS.md)
stellen die gemeinsame versionierte Arbeitsgrundlage, erhaltene Widersprüche und geprüfte Fortsetzung
in den Mittelpunkt. Ein Arbeitskonsens belegt keine Wahrheit und erteilt keine Geschäftsfreigabe.
Die akzeptierte Sicht bleibt an Aufgabe, Identität, Zweck und Rechte gebunden; konkrete Annahmeregeln
und technische Konsensverfahren sind weiterhin offen. Der ältere Extrakt unten ist kein Beleg für
einen inzwischen ausgewählten technischen Stack.

| Begriff | Bedeutung |
|---|---|
| Firmengedächtnis / Brain | quellenbezogene, zugriffsgerechte Wissens- und Kontextschicht; keine Garantie objektiver Wahrheit |
| Wissensgraph | Beziehungen zwischen Objekten, Quellen, Aussagen, Ergebnissen mit Herkunft und Gültigkeit (bitemporal: valid time, record time) |
| Harness / HarnessPack | kontextgebundene Ausführung; das Pack ist die Grenze: Korpus, Memory, Tools, Connector-Grants, Credentials, Policy, Output-Contract |
| Capability-Token | kurzlebige, job-scoped Rechte (`cap:corpus.read:{job}` …); ohne Token keine Ausführung |
| Model Bridge | Modellwahl ist Konfiguration; Datenweg begrenzt zuerst, dann Qualität/Aufwand; Validator mit getrennter Policy |
| Egress-Entscheidung | ALLOW · ALLOW_SANITIZED · REQUIRE_REVIEW · LOCAL_ONLY · BLOCK; fail closed |
| Corporate Alignment | drei getrennte Perspektiven: Wissen, Marke/CD, Governance/Freigabe; kein Gesamt-Score |
| Challenge | quellengebundene Anfechtung durch Perspektiven (Delivery, Daten/Experte, Kunde/Abnahme, Betrieb/Risiko, Kommerziell); konsolidiert ohne falschen Konsens |
| Wissensledger / Arbeitskonsens | nachvollziehbarer vereinbarter Wissensstand einer Aufgabe; frühere Versionen, Quellen und Gegenbelege bleiben erhalten, Folgearbeit nutzt den erlaubten Ausschnitt |

## Sprachregelungen (Deep Report B1–B12, Deck v10)

- Kernsätze: „Das Wissen der ganzen Firma arbeitet mit.“ · „Berechtigungen gelten für Agenten wie für Menschen.“ ·
  „Kein Weg, keine Verarbeitung.“ · „Erst geprüft, dann Firmenwissen.“ · „Im Tenant des Kunden. Wir hosten nichts.“ ·
  „Es rechnet dort, wo eure Verträge schon sind.“ · „Fällt ein Anbieter aus, wechseln wir das Modell, nicht den Datenraum.“
- Nicht verwenden: „instant compliant“, „maximal konform“, US-Polemik, pauschale Rechtszusagen.
- Zahlen: nur belegte Studien (Gartner 2023, Atlassian 2025, Bitkom 2026, CoreView 2026, SPI 2025, 6sense 2025,
  Dell’Acqua/BCG 2023); interne Annahmen als Annahmen kennzeichnen.
- Positionierung gegen horizontale Company-Brain-Produkte: Consultry modelliert, was die Beratung für andere kann
  (Methoden, Präzedenz, Belege, Historie), nicht nur, wer sie ist.

## Betriebswege (Datengrenze-Architektur, 26.08.)

A · im Tenant des Kunden (Azure/AWS, Entra ID, Rechte aus M365) · B · EU im Vertrag des Kunden (offene Gewichte auf
EU-GPU, BYOK, Consultry betreibt, hostet nichts) · C · dediziert bis on-prem. Ein Modell-Gateway, Routing je Kunde,
Projekt, Datenklasse (K1 öffentlich … K4 kundenvertraulich).

## Marketing DS (Quelle: consultry-figma-webflow-preflight)

- Farben: brand `#BF5347`, light `#CA7168`, dark `#A2463C`, warm `#E8913A` (dekorativ), warning `#D97706` (Status).
- Flächen: light `#FFFBF9`, warm `#FFF5F0`, dark `#2C2926`, elevated `#3A3833`, hero `#1E1B18`, text-on-dark `#FAFAF9`.
- Gradient `135deg #E8913A → #E8655A → #9B59B6`: nur Hero-CTA (1), 2-px-Trenner (max 2), eine Unterstreichung, Logo.
- Typo: Inter; JetBrains Mono für Zahlen/Code. Radius 8/12/16/24, Buttons immer Pill. Raster 12 Spalten, 1200 px.
- Flächenwechsel: nie zwei gleiche Flächen hintereinander. Motion 200/400/600 ms, `cubic-bezier(0.16,1,0.3,1)`,
  keine Loops, `prefers-reduced-motion` respektiert.
- Abweichung im Material: Deck, BSS-Kurzpitch und LinkedIn-Hub nutzen Magenta `#AD2764`/`#D2397E` auf denselben Flächen.

## Onboarding (Korpus-Ritual v1.0)

Tier 0 Kickoff: ein aktiver Vertrag → Verlängerungsfenster mit Quellklausel. Tier 1 Woche 1: alle Verträge, 3–5
Angebote. Tier 2 Woche 2–3: Capability-Statements, Referenzen, Skill-Daten. Tier 3 laufend: DMS/SharePoint read-only.
Time-to-first-Wow < 15 Minuten als Ziel. Trust-Frame vorab: tenant-isoliert, read-only, kein Training auf geteiltem Speicher.
