# Consultry — Whiteboard-Derived Mermaid Diagrams v0.1

**Status:** Discovery-Artefakt; fachlich zu validieren  
**Datum:** 02.08.2026  
**Quelle:** Zwei Workshop-Whiteboards zu Consultry Core, Meeting Intelligence, QA Sandbox und den adressierten Consulting-Pain-Points.  
**Bezug:** [Product Vision](./Consultry-Product-Vision-v1.0.md), [Feature ↔ Pain Map](../archive/superseded-product-baseline-2026-08/Consultry-Feature-Pain-Map-v1.0.md), [Business Domain Definition](./Consultry-Business-Domain-Definition-v1.0.md), [Project Intelligence](./Consultry-Project-Intelligence-Symbiosis-Graph-v1.0.md).

> **Interpretationshinweis:** Die vier Architekturgruppen und die Pfeilrichtungen sind strukturierende Ableitungen. Auf dem ersten Whiteboard waren die Verbindungen zwischen Meeting Intelligence, QA Sandbox und Consultry Core ohne Pfeilspitzen dargestellt. Schwer lesbare Begriffe wurden als „Knowledge-/Utility-Sharing“, „externe Projekte“ und „Management (KPIs, Dashboards, Teams)“ normalisiert.

---

## 1. Consultry-Plattformarchitektur

```mermaid
flowchart TB
    MI["Meeting Intelligence"] --> CORE["Consultry Core"]
    QA["QA Sandbox"] --> CORE

    CORE --> DELIVERY["Projekte und Ressourcen"]
    CORE --> KNOWLEDGE["Wissen und Angebote"]
    CORE --> BUSINESS["Business und Steuerung"]
    CORE --> GOVERNANCE["Governance und Kontrolle"]

    DELIVERY --> PROJECTS["Projekte"]
    DELIVERY --> PEOPLE["Mitarbeiter / Consultants"]
    PEOPLE --> ROLES["Rollen"]
    DELIVERY --> AGENTS["Agenten"]
    DELIVERY --> CLIENTS["Kundenstammdaten"]
    DELIVERY --> FINANCE["Finanzen"]

    KNOWLEDGE --> KM["Knowledge und Recherche"]
    KNOWLEDGE --> ARTEFACTS["Artefakte (Docs etc.)"]
    KNOWLEDGE --> PRODUCTS["Produkte und Kompetenzen"]

    BUSINESS --> PROCESSES["Interne Prozesse"]
    BUSINESS --> SALES["Sales"]
    BUSINESS --> MANAGEMENT["Management (KPIs, Dashboards, Teams)"]
    BUSINESS --> RESEARCH["Research"]

    GOVERNANCE --> MODEL["Model Governance"]
    GOVERNANCE --> HITL["Human in the loop"]
```

## 2. Von den Pain Points zu den benötigten Fähigkeiten

```mermaid
flowchart LR
    subgraph PAINS["Beobachtete Pain Points"]
        direction TB
        P1["Ähnliche Probleme<br/>in mehreren Projekten"]
        P2["Ausschreibungen binden<br/>viel Consultant-Zeit"]
        P3["Akquise ohne präzise<br/>Problem-/Lösungsangebote"]
        P4["Sales ist nicht ausreichend<br/>fachspezifisch informiert"]
        P5["Boutiquen haben kein<br/>eigenes Sales-Team"]
        P6["Die digitale Welt<br/>wächst schnell"]
    end

    subgraph EFFECTS["Auswirkungen"]
        direction TB
        E1["Doppelte Arbeit und wenig<br/>Knowledge-/Utility-Sharing"]
        E2["Lange Bearbeitungs-<br/>und Angebotszeiten"]
        E3["Senior-Zeit wird für<br/>Präzisierung gebunden"]
        E4["Bedarfe aus Projekten werden nicht<br/>systematisch zu Sales-Signalen"]
        E5["Sales muss Angebote<br/>weitgehend neu erarbeiten"]
    end

    subgraph NEEDS["Abgeleitete Fähigkeiten"]
        direction TB
        N1["Methoden, Analysen, Spreadsheets,<br/>Präsentationen und Blueprints wiederverwenden"]
        N2["Ausschreibungs- und<br/>Angebotsprozess unterstützen"]
        N3["Problem und Lösungsangebot<br/>fachlich präzisieren"]
        N4["Kundenbedarfe erkennen und<br/>als Opportunity qualifizieren"]
        N5["Aktuelles Wissen, QA<br/>und Human-in-the-loop"]
    end

    P1 --> E1 --> N1
    P2 --> E2 --> N2
    P3 --> E3 --> N3
    P4 --> E3
    P5 --> E4 --> N4
    P6 --> E5 --> N5
    P4 --> E5
```

## 3. Zielprozess vom Kundenbedarf bis zum Wissenskreislauf

```mermaid
flowchart LR
    subgraph DISCOVERY["1. Bedarf entdecken"]
        direction TB
        START["Kundentermin oder<br/>laufende Projektarbeit"]
        START --> MI["Meeting Intelligence"]
        MI --> NEED["Weitere Kundenbedarfe erkennen"]
        NEED --> SIGNAL["Sales-Indikator / Opportunity"]
    end

    subgraph QUALIFY["2. Opportunity qualifizieren"]
        direction TB
        ANALYSIS["Problem und Lösungsangebot präzisieren"]
        ANALYSIS --> MATCH["Interne oder externe<br/>Consultants identifizieren"]
        MATCH --> CHECK["Skill-Match, Kapazität, Budget,<br/>Auslastung, Projektstatus und Kosten prüfen"]
    end

    subgraph PROPOSAL["3. Angebot entwickeln"]
        direction TB
        FEEDBACK["Mehrstufige Feedback-Runden"]
        FEEDBACK --> REVIEW["QA Sandbox und<br/>Human-in-the-loop"]
        REVIEW --> READY{"Freigabereif?"}
        READY -- Nein --> FEEDBACK
        READY -- Ja --> OFFER["Finales Angebot<br/>im Corporate Design"]
    end

    subgraph DELIVERY["4. Liefern und lernen"]
        direction TB
        PROJECT["Projekt durchführen"]
        PROJECT --> KNOW["Methoden, Analysen und<br/>Artefakte im Core sichern"]
        PROJECT --> DEVELOPMENT["Skill-Profile weiterentwickeln"]
        DEVELOPMENT --> OPP["Neue Opportunities"]
    end

    SIGNAL --> ANALYSIS
    CHECK --> FEEDBACK
    OFFER --> PROJECT

    KNOW --> ANALYSIS
    OPP --> SIGNAL

    CORE["Consultry Core"] -. Datenbasis .-> ANALYSIS
    CORE -.-> MATCH
    CORE -.-> CHECK
    CORE -.-> KNOW

    CI["Corporate Identity / Design"] -. Vorgabe .-> OFFER
```

---

*Ende v0.1. Die Diagramme dokumentieren den aus den Workshop-Whiteboards abgeleiteten Zwischenstand und ersetzen keine freigegebene Architektur- oder Produktspezifikation.*
