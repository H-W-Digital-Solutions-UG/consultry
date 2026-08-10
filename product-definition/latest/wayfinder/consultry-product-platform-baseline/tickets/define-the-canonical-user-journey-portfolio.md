---
title: Define the canonical user-journey portfolio
status: closed
order: 44
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by:
  - Define Consultancy Jobs and Responsibility Coverage
closed: 2026-08-03
---

# Define the canonical user-journey portfolio

## Question

Welche End-to-End-Journey-Familien müssen den priorisierten Problem-/Outcome-Raum vollständig abdecken, welche drei strukturell unterschiedlichen Reference Threads prüfen den Whole-Product-Scope zuerst, und welche weiteren Journeys brauchen später eine kanonische Detail-Spezifikation statt nur eines Horizon Contracts?

## Journey contract

Jede In-Scope-Journey benennt Archetyp, Primary Actor und Mitwirkende, Job/Outcome, Trigger und Preconditions, Current Workaround, Happy Path, Cross-Role-Handoffs, Alternate/Reject/Recovery Paths, fachliche Objekte und vorläufige State Changes, Human-AI-Beiträge, Business Rules, Abschlusszustand, direkten `Target-Consultancy Outcome`, gegebenenfalls den davon getrennten nachgelagerten `Client/Engagement Outcome`, Acceptance Intent und geplante Spezifikationstiefe.

Dieses Ticket entscheidet Portfolio, Reference-Thread-Auswahl und Spezifikationstiefe breadth-first; es löst die einzelnen Journey-Fragen noch nicht. Vollständige Invariants, universelle Human-AI-/Object-/State-Contracts, quantitative Acceptance und Horizons sind bewusst nachgelagert.

Das Portfolio konsumiert die sechs ratifizierten Business Coverage Views und die getrennte Enabling Lane aus [Define Consultancy Jobs and Responsibility Coverage](define-canonical-responsibility-and-job-families.md). Coverage Views werden nicht automatisch eins zu eins zu Journey Families: Journeys dürfen mehrere Views als End-to-End-Handoffs durchlaufen, während jeder Scope Trace genau eine primäre View behält.

## Resolution comment

Ja. Das kanonische Portfolio verwendet sechs Business Journey Families plus eine Enabling Family:

1. `Need/Signal to Responsible Client Commitment and Project Readiness`
2. `Active Client Work to Reviewed/Accepted Outcome or Responsible Closure`
3. `Knowledge/Expert Need or Learning to Context-Fit Application and Governed Reuse`
4. `Demand to Staffing and Capability Response`
5. `Work/Commitment to Operational and Economic Readiness`
6. `Cross-View Evidence to Firm/Portfolio Decision and Follow-through`
7. `Consultancy Setup or Controlled Change to First Accepted Value and Governed Evolution` als Enabling Family

Eine Journey Family folgt verantwortetem User Progress von einem erkennbaren Trigger bis zu einem beobachtbaren Abschlusszustand und darf mehrere Business Coverage Views durchlaufen. Sie ist weder eine Kopie einer Coverage View noch Rolle, Modul, Workspace, Screen oder technischer Workflow.

Die drei zuerst zu spezifizierenden Representative Business Threads bleiben:

1. [Specify the Opportunity-to-Project Representative Business Thread](confirm-the-proposal-aggregate-lifecycle.md)
2. [Specify the Active Project/Delivery Blind-Spot and Rebuttal-Simulation Reference Thread](specify-consultant-daily-work-and-project-delivery-journeys.md)
3. [Specify the Knowledge/Reuse and Corporate Artifact Alignment Reference Thread](specify-corporate-artifact-alignment-reference-thread.md)

Alle drei erreichen `Reference now`-Tiefe. Der später ausgewählte erste Validation Slice wird zusätzlich `Definition-complete`; Active Project/Delivery Rebuttal bleibt der führende, aber in diesem Ticket nicht final ausgewählte Candidate.

`Personal Daily Attention and Capture` ist eine horizontale Experience-/Continuity-Journey und keine siebte peer Business Journey Family. Tender, Existing-Client Sensing und External Client Participation sind Branches. Corporate Artifact Alignment, Responsibility/Authority, Source/Evidence/Rights, Human-AI, Validation, Recovery und Archetype Variation bleiben Cross-Cutting Contracts beziehungsweise Trace Dimensions.

Die Spezifikationstiefe wird in `Reference now`, `Canonical later` und `Horizon contract` getrennt. JF-4 bis JF-6 bleiben zunächst Horizon Contracts; ihre fachliche Scope-Verpflichtung verschwindet dadurch nicht. Adoption/Evolution benötigt volle kanonische Tiefe vor externem Rollout oder mutabler Tenant-Konfiguration, blockiert aber nicht die erste begrenzte Technical Validation.

Der ratifizierte [Canonical User-Journey Portfolio](../../../Consultry-Canonical-User-Journey-Portfolio-v0.1.md) enthält Coverage-/Anchor-Zuordnung, Thread-Grenzen, horizontale Interaction Patterns, Branch Placement, Tiefenklassen und die Fast-Track-Grenze zwischen Slice Handoff und finalem Product Handoff.

Status: im HITL-Grill am 03.08.2026 ratifiziert und geschlossen.
