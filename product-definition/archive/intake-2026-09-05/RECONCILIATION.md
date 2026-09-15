# Abgleich der beiden Pakete mit dem Projekt

Stand: 05.09.2026. Prüfung vor den Änderungen dieser Integrationssession. Der bisherige `latest/`-Baum wurde weder verschoben noch gelöscht; die sechs vorgeschlagenen führenden Dokumente wurden nicht als alleinige Produktbasis eingesetzt.

## Gesicherte Befunde

- Die Wissenskonsolidierung enthält 190 Dateien einschließlich ihres Manifests. Alle 189 im Manifest erfassten Dateien stimmen in Größe und SHA-256 überein. Das Manifest erfasst sich selbst nicht.
- Alle 190 Dateien sind bytegleich mit der vorhandenen lokalen Entpackung unter `output/Consultry-Wissenskonsolidierung-2026-09-04/`.
- Von 151 eingefrorenen Repo-Quellen sind lokal 149 bytegleich. Genau `product-definition/latest/CONTEXT.md` und `_CONTEXT-AND-MEMORY.md` enthalten neuere Präzisierungen: UI-Wissensintegration, rollenbasierte API/Harness-Nutzung, Graph/Brain als zentrale Richtung und Frontier-bevorzugte sensible AI-Verarbeitung.
- Der bereits unversionierte Pitchdeck-v10.185-Handover ist im Paket bytegleich enthalten. Sein lokaler unversionierter Zustand ist kein Beleg dafür, dass das Paket ihn nicht kennt.
- Gegenüber dem lokalen `latest/`-Baum fehlen im Paket 13 PNG-Dateien aus Prototyp-/UX-Evidenzpfaden sowie `.DS_Store`. Es ersetzt damit keinen vollständigen Snapshot dieses Baums. Andere Code-/Medienprojekte wurden ohnehin überwiegend nur inventarisiert.
- Das enthaltene August-Handover-ZIP ist integer; seine 58 Mitglieder bestehen die CRC-Prüfung. Die sechs Hauptdokumente besitzen 58 gültige lokale Dateiverweise innerhalb der gelieferten Paketstruktur.

Die Inventar- und Quellenzahlen sind Bestandsprüfungen. Sie bedeuten nicht, dass sämtliche Medien, Codeprojekte oder externen Forschungsquellen erneut inhaltlich geprüft wurden.

## Durchgeführte Zusammenführung

1. Beide Original-ZIPs mit Prüfsummen im datierten Produktarchiv gesichert; Ledger-Markdown und -HTML zusätzlich unverändert lesbar abgelegt.
2. Die Ledger-Idee als gewünschte Ergänzung zum Consultry-Kern und als technischen Integrationskandidaten dokumentiert. Konkrete DID-/Blockchain-/Konsensverfahren bleiben offen.
3. Die jüngeren lokalen Nutzerpräzisierungen erhalten und im Kontextanker um die neue Eingangsquelle ergänzt.
4. Veraltete Startverweise auf eine obligatorische Product-/Mock-first-Reihenfolge in den Einstiegspunkten korrigiert. Historische Wayfinder-Resolutions und Ticketstatus bleiben erhalten; die Map erhält einen ausdrücklichen Vorranghinweis.
5. Den neuen Kandidaten und die Quellenablage in den Statusmanifesten registriert.

Vor den Änderungen wurden die bearbeiteten Bestandsdateien einschließlich der bereits vorhandenen Nutzeränderungen unter `output/Consultry-Integration-2026-09-05/before/` gesichert. Das ist eine lokale Änderungssicherung, kein vollständiges Repo-Backup. Es wurde kein Commit erzeugt. Für einen Rückweg nur die Änderungen dieser Session gezielt zurücknehmen; ein pauschales Git-Reset würde ältere uncommittierte Nutzerarbeit gefährden.

## Voraussetzungen der späteren Archivierung

| Thema | Konkrete notwendige Behandlung |
|---|---|
| Inhaltliche Übernahme | die beiden jüngeren Kontextdateien und die Ledger-Anforderung in die sechs Zieldokumente reconciliieren; direkte Nutzerentscheidungen von Vorschlägen und berichteten Beschlüssen unterscheiden |
| Vollständige Sicherung | vom aktuellen lokalen Baum ausgehen, einschließlich Bildern, unversionierten Dateien und sonstiger neuer Arbeit; nicht den ZIP-Auszug als Vollersatz einsetzen |
| Linkmigration | `archive/repo/...` und `review/...` aus den sechs Dokumenten auf die tatsächlich gewählte Zielstruktur abbilden; lokale Datei-/Asset-Verweise und externe Einstiegsverweise auf `latest/` prüfen |
| Autoritätsstatus | die Statusklassen und aussagebezogenen Einschränkungen aus `latest/MANIFEST.yaml` erhalten; ein Hashmanifest ersetzt sie nicht |
| Entscheidungen | 59 Wayfinder-Tickets mit Herkunft und Teilentscheidungen erhalten; die 32 offenen Tickets nicht pauschal schließen |
| Einzelner lebender Einstieg | nach der Übernahme die bisherigen Wegweiser umstellen und den alten Baum ausdrücklich einfrieren; keine konkurrierenden Produktbaselines pflegen |
| Pitch und Medien | aktiven Pitch und abhängige Assets separat abgleichen; keine Produkt-/Technikratifikation durch Dateiverschiebung |
| Prüfnachweis und Rückweg | vor/nach jedem Umzug Dateiliste, Größen und Hashes vergleichen, Links validieren und exakte Rückverschiebung dokumentieren |

Der ursprüngliche `review/ARCHIVPLAN.md` im [Konsolidierungs-ZIP](./Consultry-Wissenskonsolidierung-2026-09-04.zip) bleibt der Organisationsvorschlag. Diese Session ergänzt dessen Voraussetzungen und integriert die neue Idee; sie stellt keine Zustimmung zur gesamten darin vorgeschlagenen Umorganisation fest.

## Abschlussprüfung der Integration

- Vier gesicherte Eingangsdateien stimmen mit ihren SHA-256-/Größenangaben überein; beide Original-ZIPs bestehen die CRC-Prüfung.
- 15 lokale Verweise in den drei neuen Markdown-Dokumenten und neun neu hinzugefügte Verweise in bestehenden Einstiegspunkten sind auflösbar.
- Beide bearbeiteten YAML-Statusmanifeste lassen sich parsen; `git diff --check` meldet keine Formatfehler.
- Sämtliche vor dieser Session vorhandenen Zeilen des Kontextankers sind erhalten; das eingefrorene Konsolidierungspaket ist mit allen 190 Dateien unverändert.
- Ein unabhängiger fachlicher Gegencheck fand keine notwendige Korrektur an der Trennung von Nutzerwunsch, technischen Vorschlägen, Zugriffsgrenzen und menschlicher Autorität.

Dies sind Dokumentations- und Bestandsprüfungen. Ledger-Funktionen, Kryptografie und Laufzeitsicherheit wurden nicht implementiert oder getestet; die ursprüngliche HTML-Visualisierung wurde quellenbasiert eingeordnet, nicht funktional abgenommen.
