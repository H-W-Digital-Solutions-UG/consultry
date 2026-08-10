# Local Wayfinder Tracker

Dieses Repository verwendet für die aktuelle Product- und Business-Domain-Wayfinding-Phase den lokalen Markdown-Tracker. Dadurch entsteht kein vorzeitiger technischer oder GitHub-Issue-Backlog.

## Wayfinding operations

- Eine Map liegt als `map.md` in ihrem eigenen Verzeichnis und trägt `wayfinder:map`.
- Jedes Ticket ist eine einzelne Markdown-Datei unter `tickets/` und nennt Map, Status, Label, Assignee und Blocker im Frontmatter.
- Ein offenes Ticket mit leerem `assignee` ist unclaimed. Claim = vor Arbeitsbeginn den eigenen Namen eintragen.
- Ein Ticket gehört zur Frontier, wenn es `status: open`, keinen Assignee und keine offenen Einträge unter `blocked_by` hat.
- Die Auflösung wird unter `## Resolution comment` eingetragen; danach wird `status: closed` gesetzt.
- Die Map erhält anschließend genau einen benannten Link mit einer Ein-Zeilen-Gist unter `## Decisions so far`.
- Neue Tickets werden zuerst angelegt und danach über `blocked_by` verdrahtet.
- In menschlich gelesenen Texten werden Tickets immer über ihren Titel und Link bezeichnet, nie nur über Dateinamen oder Nummern.

## Scope

Der Tracker hält Entscheidungs-, Research-, fachliche Modellierungs- und Low-fidelity-Prototyping-Arbeit fest. Die aktuelle Map folgt der Traceability `Problem/Outcome → Actor/Job → Business Flow → User Journey/Handoff → Product Approach → Capability/Feature → Requirement/Business Rule → Acceptance → Product Horizon`.

Architektur-, Datenmodell-, Graph-, Governance-, Model-Bridge- und Harness-Artefakte dürfen als Constraints oder Machbarkeitsinputs gelesen werden, entscheiden aber keine fachliche Frage. Technische Lösungsableitung, Persistenz, DDL, ADRs, Epics, Implementierung und Code-Issues beginnen erst nach einem expliziten Product-/Business-Domain-Handoff in einer separaten Technical-Wayfinder-Map.
