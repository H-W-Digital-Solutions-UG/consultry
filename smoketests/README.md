# Smoketests

Elternordner für alle Smoke-Tests von Consultry. Jeder Smoke-Test ist ein eigener Unterordner mit eigenem README,
eigenem Stand und eigener Auswertung. Die Struktur bleibt flach, damit die Übersicht auch bei mehreren parallelen
Tests erhalten bleibt.

## Konvention

```
smoketests/
  README.md                      diese Übersicht
  <smoketest-name>/              ein Test = ein Ordner
    README.md                    Frage, Mechanik, Start, Auswertung
    screenshots/v1-before/       Stand vor der jeweiligen Überarbeitung
    screenshots/                 aktueller Stand
    ...                          Code des Tests (eigenständig lauffähig)
```

- Ein Ordner je Test, benannt nach dem, was getestet wird, nicht nach dem Datum.
- Jeder Test hält seinen Kontext-Extrakt selbst (`CONTEXT-EXTRACT.md`), damit er ohne das restliche Repo lesbar ist.
- Ergebnisse und Entscheidungen aus einem Test werden in `product-definition/DECISIONS.md` festgehalten, nicht hier.
- Vor einer Überarbeitung wird der Ausgangsstand als Screenshot-Satz unter `screenshots/v1-before/` gesichert.

## Laufende Tests

| Ordner | Frage | Stand |
|---|---|---|
| [`landingpage-positionierung/`](landingpage-positionierung/) | Welche der fünf Positionierungen bringt IT-/SAP-Beratungen auf die Warteliste? | v2, minimalistische Überarbeitung 13.09.2026 |
