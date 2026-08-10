---
title: Place the Three-Slice Mock UI Demo Gate Before the Technical PoC
status: closed
order: 53
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by:
  - Specify the Opportunity-to-Project Representative Business Thread
  - Specify the Active Project/Delivery Blind-Spot and Rebuttal-Simulation Reference Thread
  - Specify the Knowledge/Reuse and Corporate Artifact Alignment Reference Thread
  - Ratify the Minimum Decision and Effect Authority Spine
closed: 2026-08-05
---

# Place the Three-Slice Mock UI Demo Gate Before the Technical PoC

## Question

Soll vor einem Technical PoC und erst recht vor einem Full-Backend-MVP zunächst ein zusammenhängender, nicht-funktionaler Mock-UI-Demo-Flow für die drei Haupt-Slices erstellt und gemeinsam validiert werden?

## Resolution comment

Ja. Vor dem Technical PoC und dem späteren Full-Backend-MVP wird ein eigener `Three-Slice Mock UI Demo Gate` eingeführt.

Die drei bereits ratifizierten Representative Business Threads bilden die drei Haupt-Slices:

1. `Opportunity-to-Project / External Commitment`;
2. `Active Project/Delivery Blind-Spot and Rebuttal Simulation`;
3. `Knowledge/Reuse and Corporate Artifact Alignment`.

Für alle drei wird zunächst ein zusammenhängender, nicht-funktionaler Mock-UI-Demo-Flow erstellt und mit menschlichem Feedback iteriert. Er validiert Problem-/Job-Verständlichkeit, narrative und fachliche Kontinuität, Rollenkompression, Responsibility/Authority-Grenzen, Human-AI-Zusammenarbeit, Source-/Evidence-Sichtbarkeit, Handoffs, negative beziehungsweise Recovery-Pfade und das Zusammenspiel der drei Slices über den gemeinsamen Consultry Core.

Der Mock darf realistische Daten und Reaktionen simulieren, benötigt aber weder produktive Integrationen noch persistentes Backend, Agent Runtime, Graph Engine, Model Bridge, technische Authorization oder funktionierende External Effects. UI, Navigation, Screenfolge, Agenten-Choreografie und Automatisierungsgrad bleiben testbare Hypothesen. Die geführte App ist der primäre Demo-Client; das optionale Harness wird nur dort gezeigt, wo es einen eigenständigen Nutzungswert erklärt, und besitzt keine zusätzliche Authority.

Nach der Mock-Validierung werden die drei Slice Contracts und ein Product Gap Register konsolidiert. Erst ein explizites `Definition-complete Three-Slice Technical PoC Handoff` eröffnet eine eigene Technical-Wayfinder-Map und einen gestuften Technical PoC für alle drei Slices. Das spätere Full-Backend-MVP wird erst anhand der PoC-Erkenntnisse begrenzt; die Mock-Demo ist weder Backend-Spezifikation noch Product-/Market-Validation.

## Scope clarification — 2026-08-06

Der Gate bleibt gültig, sein Mock-Artefakt wurde präzisiert: Die drei Slices werden nicht als App-Grenzen oder nacheinander ablaufende Mini-Demos umgesetzt. Sie dienen als tiefe Anchor Journeys in einem navigierbaren **Systemic Platform Click Dummy** mit flacher Whole-Product-Breite, gemeinsamem In-Memory-State, Progressive Disclosure und agent-nativem Co-Work. Das erhöht die zu testende Systemkohärenz, erweitert den Gate aber weder zu einem Backend-MVP noch zu vollständiger Modultiefe. Maßgeblich ist der [Systemic Platform Click Dummy Experience Contract v0.1](../../../Consultry-Systemic-Platform-Click-Dummy-Experience-Contract-v0.1.md).
