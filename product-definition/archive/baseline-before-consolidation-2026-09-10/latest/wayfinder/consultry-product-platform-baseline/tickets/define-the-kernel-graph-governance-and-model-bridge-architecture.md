---
title: Define the kernel graph, governance, and Model Bridge architecture
status: closed
labels:
  - wayfinder:grilling
interaction: HITL
parent: Ratify the Consultry Product and Business-Domain Baseline
assignee: prior-session
blocked_by: []
closed: 2026-08-01
---

# Define the kernel graph, governance, and Model Bridge architecture

## Question

Welche getrennten Graph-, Validation-, Authority-, Execution-, Harness- und Model-Routing-Verantwortungen bilden den wiederverwendbaren Platform Kernel?

## Resolution comment

Der Kernel trennt Domain Context, Core Skill, Execution & Lineage, Validation & Assurance und Authority Relationship Graph. Validation, Human Approval, Authorization und Effect Admission bleiben getrennte Entscheidungen. Model Bridge ist Registry, Resolver und auditierter Gateway Service mit `model_policy_id` und ohne Silent Downgrade; Governance Control Plane bleibt ein eigenes Modul.

## Context pointers

- [Fünf Graphfamilien](../../../Consultry-Platform-Kernel-Data-Model-Concept-v0.1.md#21-fünf-kanonische-graph-familien)
- [Model Bridge](../../../Consultry-Platform-Kernel-Data-Model-Concept-v0.1.md#10-uml--model-bridge)
- [Cross-Model-Invarianten](../../../Consultry-Platform-Kernel-Data-Model-Concept-v0.1.md#16-cross-model-invarianten)
