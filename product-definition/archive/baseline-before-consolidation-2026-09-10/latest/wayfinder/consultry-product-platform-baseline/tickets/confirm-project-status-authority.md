---
title: Confirm Project Status authority
status: closed
order: 40
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by: []
closed: 2026-08-01
---

# Confirm Project Status authority

## Question

Ist `ProjectStatusSnapshot` ausschließlich eine rebuildbare Projection aus Deliverables, Milestones, Risks und freigegebenen Quellen, während eine bewusst abgegebene menschliche Statusbewertung als separate `ProjectStatusAssessment` Aggregate Root persistiert wird?

## Resolution comment

Ja. `ProjectStatusSnapshot` ist ausschließlich eine rebuildbare, digestierte Projection aus autoritativen Projektfakten wie Deliverables, Milestones, Risks, aggregierten Time Entries und freigegebenen Source Snapshots. Sie besitzt keine eigene Schreibautorität und darf jederzeit verworfen und neu berechnet werden.

Eine bewusst abgegebene menschliche Einschätzung wird als separate `ProjectStatusAssessment` Aggregate Root mit Project, Author, Assessment Time, Validity, RAG/Rating, Rationale, Basis-Digest und optionalen Evidence References persistiert. Eine abgegebene Bewertung wird nicht überschrieben; Korrektur, Ablösung oder Widerruf erzeugen einen nachvollziehbaren Nachfolgerecord. Eine UI darf Faktenprojektion und menschliche Bewertung gemeinsam anzeigen, muss die Bewertung aber ausdrücklich als solche kennzeichnen; sie darf berechnete Fakten nicht still überschreiben. `PersonalNote` ist nie Input, Personenbezug bleibt WC-/Policy-/Role-gated.

## Context pointers

- [Platform Kernel Data Model Concept](../../../Consultry-Platform-Kernel-Data-Model-Concept-v0.1.md#122-win-to-work-aggregate)
- [Business Domain Definition](../../../Consultry-Business-Domain-Definition-v1.0.md#39-project-observability--work-hero-mvp--deliverable-zentriert-aus-time-entries)
