# Dokumentenrestrukturierung vom 10.09.2026

Auftrag: Die Erkenntnisse aus der Codex-Session „Wissensledger integrieren“ übernehmen, Modellhosting ausnehmen und die vorbereitete Restrukturierung abschließen. Aktueller Einstieg: [INDEX](../../INDEX.md).

## Umgesetztes Layout

Die sechs führenden Dateien liegen direkt unter `product-definition/`: INDEX, CONTEXT, PRODUCT, DECISIONS, BACKEND-START und SOURCES. Der Parent-README und Root-CLAUDE führen dorthin. Der frühere `latest/`-Baum wurde nach `archive/baseline-before-consolidation-2026-09-10/latest/` verschoben. Der zusätzliche Vision-One-Pager liegt dort unter `supplemental/`.

Die bestehenden Archive, der Intake vom 05.09. und separate Design-/Code-/Pitch-/Finanztracks bleiben erhalten. Das August-Handover wurde aus dem bereits vorhandenen Konsolidierungspaket als lesbare Quelle samt Original-ZIP übernommen. Die alten Inventare und der Organisationsvorschlag liegen unter `proposal-review/` als datierte Belege.

## Inhaltlicher Abgleich

- Die Session wurde vollständig über 15 Turns gelesen; 11 ausgewählte Turns sind mit Originalnachrichten gesichert. Vier Modellhosting-/Hardware-/Betriebsabschnitte sind aus der neuen Sessionübernahme ausgenommen.
- Übernommen wurden Ledger als Teil des Kerns, Schwarm-Wissensstand, referenzierte Kontextversionen, Task-Teilgraphen, logische Rückführung, Rollen/Skills, Trajectories, Lernmuster und vertrauliche Beratungsarbeit.
- Shared Co-Work aus dieser Session bleibt erhalten. Gemeinsame Arbeit und empfängerbezogene Rechte werden zusammengeführt, ohne alle Produktbereiche zu bloßen Views eines einzigen Datenobjekts zu erklären.
- Nutzeranforderungen, bestätigte Strukturen, Assistentenvorschläge und offene technische Ausgestaltung sind in DECISIONS unterschieden.
- Die 59 historischen Tickets behalten ihre Rohstatus. Die aktuelle Wayfinder-Route wird über W1–W6 in DECISIONS geführt. Die früheren Detailfragen bleiben gezielt nachladbar.
- Die Migration wählt weder Modellhosting noch Blockchain, Graph-Datenbank, endgültige Runtime oder ersten Proof-Fall.

## Bestand und Prüfung

Vor dem Umzug wurden 166 tatsächlich vorhandene Dateien einschließlich des vollständigen `latest/`-Baums und betroffener Einstiegspunkte im [BEFORE.zip](BEFORE.zip) gesichert. [BEFORE.json](BEFORE.json) enthält Größen und SHA-256. Der Zip-Rückweg umfasst auch unversionierte und uncommittete Produktarbeit; er ersetzt kein vollständiges Backup aller Code- und Medienprojekte.

132 Dateien wurden aus `latest/` archiviert. Markdown-Verweise wurden bei Bedarf relativ zum neuen Standort berechnet; [LINK-REBASES.json](LINK-REBASES.json) weist die betroffenen Dateien aus. [PATH-MAP.csv](PATH-MAP.csv) enthält Original- und Zielpfade sowie Hashes vor und unmittelbar nach der Linkmigration. Spätere redaktionelle Änderungen an den führenden Einstiegspunkten werden dadurch nicht als byte-identisch behauptet.

Die maschinenlesbare Abschlussprüfung steht in [VERIFICATION.json](VERIFICATION.json). Sie prüft die Originalbytes im Recovery-ZIP, den kompletten verschobenen Baum gegen ausschließlich die erlaubte Linktransformation, erhaltene Bild- und Ticketbestände sowie lokale Verweise der sechs führenden Dokumente. Historische fehlende Referenzen werden in [HISTORICAL-LINK-GAPS.json](HISTORICAL-LINK-GAPS.json) ausgewiesen; sie wurden nicht durch erfundene Dateien ersetzt.

Ergebnis: alle 132 Dateien und 13 PNGs erhalten; 59 Tickets mit 32 offenen und 27 geschlossenen Status erhalten; die neuen Produkt- und Routingverweise sind auflösbar. 30 Verweisvorkommen im historischen Baum zeigen auf bereits fehlende Design-/Pitch-/Hypermock-Dateien. Die Linktransformation erhält die ursprünglichen Ziele; diese historischen Lücken sind keine neuen Produktblocker. Das aktuelle Research-/Source-Routing funktioniert ohne diese Dateien.

Diese Prüfung betrifft Dokumente und Ablage. Backend-, Graph-, Ledger- oder Modellfunktionen wurden in diesem Auftrag nicht implementiert oder getestet. Externe Forschungs- und Rechtsquellen wurden nicht neu online verifiziert. Die Änderungen sind lokal; ein Git-Commit wurde nicht erstellt.

## Gezielter Rückweg

1. Vor einer Rücknahme den dann aktuellen Arbeitsstand sichern; seit dieser Migration hinzugekommene Änderungen zuerst abgleichen.
2. BEFORE.zip in einen separaten temporären Ordner entpacken, Größen und Hashes gegen BEFORE.json prüfen. Nicht direkt über den aktuellen Arbeitsbaum entpacken.
3. Anhand PATH-MAP.csv den früheren `latest/`-Baum und nur die tatsächlich zurückzunehmenden Einstiegspunkte wiederherstellen. Neue Erkenntnisse aus den sechs führenden Dokumenten zuvor erhalten.
4. Erst nach diesem Abgleich den alten Einstieg wieder aktivieren. Kein pauschales Git-Reset: Vorherige uncommittete Arbeit gehört zum gesicherten Bestand.

Das Skript `migrate.py` ist ein einmaliger, gegen Mehrfachausführung abgesicherter Migrationsnachweis. Sein `verify`-Modus ist für erneute Prüfung vorgesehen; `package` erzeugt einen geprüften datierten Export und verweigert das Überschreiben eines bestehenden ZIPs. `prepare` und `migrate` dürfen nicht gegen einen späteren Arbeitsstand wiederholt werden.

## Export

Der Export `output/Consultry-Produktbasis-2026-09-10.zip` enthält die sechs führenden Dokumente, Wegweiser, das Produktarchiv einschließlich Migrationsbelegen sowie die drei in SOURCES direkt referenzierten Repo-Code-/Research-Dateien. Ein Hashmanifest und ZIP-Integritätsprüfung sichern den Snapshot. Er enthält keine vollständigen Code-, Design-, Medien- oder Finanzprojekte. Die historische Baseline enthält ihre damaligen Hostingnotizen weiterhin; sie sind nicht Teil der neuen Produktentscheidungen.
