# Figma Analyse Report

Vergleich:

- Final Canvas: [2177:865](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-865)
- Components Page: [1:4](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=1-4)

Ziel:

- Neu erfundene oder abgewandelte Komponenten auf dem Final-Canvas identifizieren
- Gegen vorhandene Basis-Components auf der Components-Page abgleichen
- Pro Fund entscheiden lassen:
  - als neue Component in `1:4` aufnehmen
  - oder in der Final Page durch eine vorhandene Basis-Component ersetzen

Methodik:

- Abgleich auf Basis von Figma-Metadaten und Screenshots
- `get_design_context` lieferte in dieser Datei nur einen Selection-Fehler, daher basiert die Bewertung auf Struktur- und Visual-Vergleich

Bereiche, die bereits sauber an die Library angebunden wirken:

- `Marketing Announcement Bar`
- `Marketing Nav Transparent`
- `Marketing Hero Showcase`
- `Marketing Section Header`
- `Marketing Feature Showcase Step`
- `Marketing Feature Showcase Row`
- `Marketing Metric Card`
- `Marketing Rich CTA Band`
- `Marketing CTA Band`

## Findings

### 1. Product Hero Split ist eine neue, manuell gebaute Hero-Variante

- Final Node: [Section — Product Hero Split](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2260-48)
- Vorhandene Basis-Component: [Marketing Product Page Hero / Product Dark](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2271-350)

Warum das ein Fund ist:

- Der Final-Bereich ist kein Instance-Einsatz, sondern ein frei gebauter Frame.
- Die CTAs sind als eigene Frames angelegt statt als `Marketing Button`-Instanzen.
- Die vier KPI-Kacheln sind ebenfalls frei gebaut und nicht an vorhandene Primitive gebunden.
- Der Bereich erfüllt denselben Zweck wie der vorhandene Product-Hero in der Library, weicht aber in Layout, Typobehandlung und CTA-/Metric-Anordnung klar ab.

Bewertung:

- Das ist keine reine Content-Variante des vorhandenen Product-Hero-Components.
- Entweder ist das eine bewusst neue Hero-Familie, oder die Final Page ist von der Library weg gedriftet.

Empfehlung:

- Wenn diese Split-Hero-Variante finaler Standard sein soll: als neue Component aufnehmen.
- Wenn nicht: Final Page auf den vorhandenen Product-Hero zurückführen.

Entscheidungsfrage:

- Soll `Section — Product Hero Split` als zusätzliche Product-Hero-Component auf `1:4` aufgenommen werden, oder soll dieser Abschnitt in der Final Page durch `Marketing Product Page Hero / Product Dark` ersetzt werden?

### 2. Marketing Video Embed wurde zu einer neuen Zwei-Spalten-Sektion umgebaut

- Final Node: [Marketing Video Embed](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-949)
- Vorhandene Basis-Component: [Marketing Video Embed / Theme=Dark](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=337-3)

Warum das ein Fund ist:

- Der Final-Node trägt denselben Namen wie die Library-Component, ist aber kein Instance-Einsatz.
- Die Library zeigt ein kompaktes Video-Embed/Player-Modul.
- Die Final-Version ist eine große Zwei-Spalten-Sektion mit Copy-Column, eigenem Layout-Raster und anderen Proportionen.
- Der Name suggeriert Wiederverwendung, strukturell ist es aber eine andere Komponente.

Bewertung:

- Das ist faktisch eine neue Section-Komponente und kein normales Override des bestehenden Video-Embeds.

Empfehlung:

- Wenn die Zwei-Spalten-Version gewollt ist: als eigene Component aufnehmen, zum Beispiel als `Marketing Video Section / Dark`.
- Wenn nur das bestehende Embed gemeint war: Final Page auf die Basis-Component zurückbauen und Textblock separat mit Standard-Section-Header/Body lösen.

Entscheidungsfrage:

- Soll diese Zwei-Spalten-Video-Sektion als zusätzliche Component auf `1:4` aufgenommen werden, oder soll die Final Page hier auf die bestehende `Marketing Video Embed`-Component zurückgebaut werden?

### 3. Marketing Product Architecture existiert nicht in der Components-Library

- Final Node: [Marketing Product Architecture](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2263-24)
- Nächste vorhandene Kandidaten:
  - [Marketing Feature Stepper / Theme=Dark](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2131-335)
  - [Marketing Feature List Sidebar / Theme=Dark](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=317-26)

Warum das ein Fund ist:

- Auf `1:4` gibt es keinen direkten Basis-Component für dieses Muster.
- Die Final-Version kombiniert drei klar eigenständige Bausteine:
  - Intro-Spalte
  - vier Layer-Karten
  - Workflow-Rail mit drei Schritten
- Die nächsten existierenden Komponenten sind nur semantisch ähnlich, aber visuell und strukturell keine Entsprechung.

Bewertung:

- Das ist ein echter neuer Component-Kandidat.
- Der Bereich wirkt wiederverwendbar genug, um nicht als einmaliger Freihand-Frame im Final zu bleiben.

Empfehlung:

- Als neue Component in die Library aufnehmen.
- Nur dann zurückbauen, wenn die Product-Architektur bewusst mit vorhandenen Stepper-/Sidebar-Komponenten vereinheitlicht werden soll.

Entscheidungsfrage:

- Soll `Marketing Product Architecture` als zusätzliche Component auf `1:4` aufgenommen werden, oder soll diese Sektion in der Final Page auf eine vorhandene Struktur wie `Marketing Feature Stepper` oder `Marketing Feature List Sidebar` zurückgeführt werden?

### 4. FAQ-Sektion ist manuell gebaut statt aus den vorhandenen FAQ-Basis-Components zusammengesetzt

- Final Section: [Section — FAQ](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-1883)
- Beispiel Final Item: [FAQ — Was unterscheidet Consultry ...](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-1888)
- Vorhandene Basis-Components:
  - [Marketing FAQ Item / State=Collapsed / Theme=Dark](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=202-3)
  - [Marketing FAQ Item / State=Expanded / Theme=Dark](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=202-6)
  - [Marketing Section Header / Alignment=Centered, Theme=Dark](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=88-19)

Warum das ein Fund ist:

- Die FAQ-Items sind als freie Frames gebaut, inklusive Pfeil-Textzeichen statt Component-Instanzen.
- Auch der Header der Sektion ist nicht aus dem vorhandenen `Marketing Section Header` aufgebaut.
- Inhaltlich erfüllt die Sektion exakt den Zweck, für den bereits FAQ-Items und Section Header in der Library existieren.

Bewertung:

- Hier wurde kein neuer Component-Typ erfunden, sondern vorhandene Basis-Components wurden umgangen.
- Das ist deshalb eher ein Library-Bypass als ein legitimer neuer Pattern-Typ.

Empfehlung:

- In der Final Page auf `Marketing FAQ Item` plus `Marketing Section Header` zurückbauen.
- Nur dann als eigene Section-Component aufnehmen, wenn die gesamte FAQ-Sektion als vorgefertigtes Bundle bewusst standardisiert werden soll.

Entscheidungsfrage:

- Soll die FAQ-Sektion als neue gebündelte FAQ-Section-Component auf `1:4` aufgenommen werden, oder sollen die manuellen FAQ-Blöcke in der Final Page durch `Marketing FAQ Item` plus `Marketing Section Header` ersetzt werden?

### 5. Footer ist als eigener Custom-Footer gebaut und weicht vom vorhandenen Footer-Component ab

- Final Node: [Marketing Footer](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-971)
- Weitere Duplikate auf dem Final-Canvas:
  - [Homepage Footer](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-884)
  - [Legal Footer 1](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-2361)
  - [Legal Footer 2](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-2438)
  - [Legal Footer 3](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-2506)
- Vorhandene Basis-Component: [Marketing Footer Modern / Theme=Dark](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=514-81)

Warum das ein Fund ist:

- Im Final liegt ein eigener Footer als freier Frame vor, nicht als Component-Instanz.
- Link-Struktur, Navigationsgruppen und Social-Set weichen sichtbar vom vorhandenen Footer-Component ab.
- Der Custom-Footer wurde mehrfach kopiert und ist damit bereits ein Shadow-Component außerhalb der Library.

Bewertung:

- Das ist entweder eine neue Footer-Variante, die offiziell in die Library gehört, oder ein klarer Drift vom Basis-Footer.

Empfehlung:

- Wenn dies der neue Standard-Footer sein soll: als neue Footer-Variante auf `1:4` aufnehmen.
- Wenn nicht: alle Final-Footer auf den bestehenden Footer-Component zurückführen.

Entscheidungsfrage:

- Soll dieser Footer als zusätzliche Footer-Component auf `1:4` aufgenommen werden, oder sollen die Footer auf dem Final-Canvas durch `Marketing Footer Modern / Theme=Dark` ersetzt werden?

### 6. Legal-Page-Template ist mehrfach vorhanden, aber nicht als Basis-Component modelliert

- Beispiel Final Node: [Cookie-Erklärung / Desktop — Dark](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=2177-2409)
- Wiederkehrendes Shell-Muster im Final-Canvas:
  - `Marketing Nav Transparent`
  - legaler Content-Header mit Gradient und Divider
  - gestapelte Inhaltsblöcke
  - Custom Footer

Warum das ein Fund ist:

- Das Legal-Layout wiederholt sich über mehrere Seiten, ist aber nicht auf `1:4` als Template oder Component hinterlegt.
- Es gibt dafür aktuell keinen passenden Basis-Component auf der Components-Page.
- Genau diese Wiederholung ist ein Signal, dass hier ein fehlender Library-Baustein vorliegt.

Bewertung:

- Das ist kein Fall für Austausch gegen einen bestehenden Component, weil aktuell kein passender Legal-Page-Component existiert.
- Es ist vielmehr eine Lücke in der Library.

Empfehlung:

- Als `Marketing Legal Page Template / Dark` oder ähnlich in die Components-Library aufnehmen.

Entscheidungsfrage:

- Soll dieses Legal-Page-Template als zusätzliche Component beziehungsweise Template auf `1:4` aufgenommen werden? Ein sinnvoller Austausch gegen eine bestehende Basis-Component ist aktuell nicht möglich, weil auf `1:4` keine passende Legal-Page-Struktur existiert.

## Priorisierung

1. `FAQ-Sektion`
   Hier gibt es bereits passende Basis-Components. Das ist der klarste Fall für Rückbau auf die Library.
2. `Footer`
   Der Footer ist mehrfach dupliziert und erzeugt damit den größten Wartungsdrift.
3. `Product Hero Split`
   Hohe Sichtbarkeit und bereits ein sehr naher Basis-Component vorhanden.
4. `Marketing Video Embed`
   Name kollidiert mit bestehender Component, Struktur ist aber neu.
5. `Marketing Product Architecture`
   Echte neue Komponente, falls dieses Pattern künftig wiederverwendet werden soll.
6. `Legal-Page-Template`
   Klarer Library-Gap, aber weniger kritisch als die driftenen Komponenten mit bereits vorhandenen Alternativen.

## Kurzfazit

- Auf dem Final-Canvas sind nicht viele komplett neue Patterns entstanden, aber einige zentrale Bereiche umgehen die Components-Library.
- Der größte strukturelle Drift liegt bei `FAQ`, `Footer`, `Product Hero Split` und dem umgebauten `Marketing Video Embed`.
- `Marketing Product Architecture` und das `Legal-Page-Template` wirken dagegen wie echte fehlende Library-Bausteine und sollten eher als neue Components/Templates modelliert werden.
