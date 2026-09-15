---
title: Confirm Client Contract as the business term
status: closed
order: 20
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: codex
blocked_by: []
closed: 2026-08-01
---

# Confirm Client Contract as the business term

## Question

Soll `ClientContract` mit `ClientContractVersion` der kanonische Name für Kundenverträge sein, damit er dauerhaft von `SkillContract`, Schema Contracts und technischen Contracts unterschieden bleibt?

## Resolution comment

Ja, vorerst als kanonische interne und AI-lesbare Wording Convention: `ClientContract` bezeichnet die stabile Identität eines Kundenvertrags, `ClientContractVersion` dessen unveränderliche Fassungen. Damit bleibt der Begriff eindeutig gegenüber `SkillContract`, Schema Contracts und technischen Contracts.

Die Entscheidung legt noch keine endgültige UI-, Sales- oder juristische Bezeichnung fest. Vertragstypen, lokalisierte Labels und rechtliche Dokumentklassen dürfen präziser heißen; eine spätere Umbenennung der internen Convention braucht eine explizite Revision.
