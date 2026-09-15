---
title: Derive the Product Coverage Skeleton
status: open
order: 110
labels:
  - wayfinder:task
interaction: AFK
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee:
blocked_by:
  - Validate the priority-problem evidence and assumption register
  - Define the business-domain and lifecycle canon
---

# Derive the Product Coverage Skeleton

## Task

Leite aus den ratifizierten Problemen, Reference Threads, Journeys, Cross-Cutting Contracts und dem Business-Domain Canon eine deduplizierte erste Coverage Map ab:

`Problem/Outcome -> Actor/Job -> Flow/Journey Step -> Required Product Behavior -> Product Approach -> Capability/Module Candidate -> Feature -> Functional Requirement -> Quality Requirement -> Business Rule -> Acceptance Intent`

## Guardrails

- Jede Capability und jedes Feature braucht einen Upstream-Problem-/Outcome-Bezug; solution-first Features werden als Hypothese markiert oder entfernt.
- Ein Requirement beschreibt fachliches Verhalten oder Qualität, keine Tabelle, API, Queue, Framework-, Modell- oder Cloud-Auswahl.
- Cross-cutting Requirements für Trust, Source Visibility, Human Responsibility, Privacy, Accessibility, Audit, Configurability und Interoperability bleiben sichtbar.
- Widersprüche in MVP-/Phase-1-Specs, Feature-Pain Map, UX, Pitch und Data-Model Candidate werden als Entscheidungsbedarf zurück in ein HITL-Ticket gespielt, nicht still aufgelöst.
- Quantitative Acceptance Evidence und Product Horizon werden in diesem ersten Pass nicht erfunden; sie werden später ratifiziert und in `Complete the Final Product Traceability Matrix` ergänzt.
