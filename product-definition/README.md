# Consultry Product Definition

Dieser Parent-Ordner trennt den aktuell relevanten Arbeitsstand von historischer Produktdokumentation.

## Einstieg

1. [`latest/README.md`](./latest/README.md) — kuratierter Einstieg in die aktuelle Product Definition.
2. [`latest/_CONTEXT-AND-MEMORY.md`](./latest/_CONTEXT-AND-MEMORY.md) — persistenter Kontext- und Entscheidungsanker.
3. [`latest/wayfinder/consultry-product-platform-baseline/map.md`](./latest/wayfinder/consultry-product-platform-baseline/map.md) — laufende Product-/Business-Domain-Entscheidungsfolge.
4. [`latest/MANIFEST.yaml`](./latest/MANIFEST.yaml) — maschinenlesbare Autoritäts- und Statusklassifikation.

## Struktur

| Ordner | Bedeutung |
|---|---|
| [`latest/`](./latest/) | Gesamter derzeit relevante Arbeitsstand: Canon, aktive Product Inputs, Research/UX-Evidenz und klar abgegrenzter Technical Handoff. `latest` ist beweglich und noch kein vollständig ratifizierter Product Baseline Release. |
| [`archive/`](./archive/) | Genau ein historischer Archivbaum für superseded Entscheidungen, PRDs, Personas, Feature-Specs und alte Analysen. Nie Quelle für aktuellen Scope. |

## Autoritätsregel

Ein neueres Änderungsdatum macht ein Dokument nicht automatisch zum Canon. Maßgeblich sind der im Manifest ausgewiesene Status und ratifizierte Wayfinder-Entscheidungen. Bei Konflikten wird die Abweichung explizit reconciliiert; es gibt keine stille Übernahme aus aktiven Kandidaten, technischen Entwürfen oder dem Archiv.
