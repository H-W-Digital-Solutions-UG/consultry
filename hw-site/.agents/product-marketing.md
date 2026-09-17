# Product Marketing Context

**Document version:** v1
**Last updated:** 2026-09-17

Kontextdokument für die Website und alle Marketing-Skills der H&W Digital Solutions UG (`hw-site/`). Sprache der Kundenansprache: Deutsch, Sie-Form, „AI“ (nie „KI“). Quellen: Positionierungs-Handover (Firmenfakten, Leistungsbild, Delivery Chain, Versprechen), `src/data/content.ts`, `src/data/company.ts`, `src/pages/*.astro`, `DESIGN.md` sowie die sichtbare Copy der alten HubSpot-Site (`hw-digitalsolutions.de`, Stand 2026). Alles, was nicht aus diesen Quellen stammt, ist als Annahme markiert. Harte Regel: keine erfundenen Kennzahlen, Kunden, Zertifizierungen oder Zitate.

---

## Product Overview

**One-liner:** H&W versteht, wie Ihr Unternehmen arbeitet, findet die größten AI-Hebel in Ihren Geschäftsprozessen und setzt die passende Lösung selbst um.

**What it does:** H&W analysiert die tatsächlichen Abläufe eines Unternehmens, bewertet AI-Potenziale nach wirtschaftlichem Hebel und technischer Machbarkeit und gestaltet Prozesse dort AI-native neu, wo es sich lohnt. Anschließend entwickelt dasselbe Team die Lösung selbst: Modellauswahl, Software, Integrationen, Infrastruktur, Absicherung, Deployment, Enablement der Mitarbeiter und laufende Optimierung. Leitmotiv: „From Process to Production“ (deutsch: „Von Geschäftsprozessen zu produktiver AI“).

**Product category:** „AI Transformation & Engineering“ (Alternative: „AI-Native Consulting & Engineering“). Ausdrücklich nicht reine Strategieberatung und nicht reine Softwareagentur. Kunden suchen vermutlich unter Begriffen wie „AI Beratung Umsetzung“, „AI Prozessoptimierung“, „AI Lösung entwickeln lassen“. Keine belastbaren Daten vorhanden, Annahme: Suchbegriffe sind nicht validiert.

**Product type:** Dienstleistung (Beratung, Transformation und Engineering aus einer Hand), projektbasiert.

**Business model:** Keine belastbaren Daten vorhanden, Annahme: projektbezogene Beauftragung, beginnend mit einer Prozessanalyse, fortgeführt als Umsetzungs- und Betriebsauftrag. Preise werden nicht auf der Website genannt. Einstieg ist ein Erstgespräch von 30 Minuten.

**Leistungsbild (zehn Schritte, verbindliche Reihenfolge, Quelle: Handover):**
1. Unternehmen und Abläufe analysieren
2. Ineffiziente oder AI-geeignete Prozesse erkennen
3. Konkrete Verbesserungspotenziale identifizieren
4. Nach wirtschaftlichem und technischem Potenzial bewerten
5. Prozesse dort AI-native neu denken, wo es sich lohnt
6. Konkreten Umsetzungspfad entwickeln
7. AI-Lösung selbst entwickeln
8. Modelle, Infrastruktur und Integrationen bereitstellen
9. Security, Governance und Compliance abdecken
10. Produktiv deployen und weiter optimieren

Auf der Website in vier Phasen gruppiert: Prozess (1–4), Design (5–6), Engineering (7–8), Produktion (9–10).

**Delivery Chain (Kurzform, zwölf Glieder):** Business verstehen → Prozesse analysieren → AI-Potenziale identifizieren → Prozesse neu gestalten → Lösung konzipieren → Modelle auswählen → Software entwickeln → Systeme integrieren → Deployen → Absichern → Mitarbeiter befähigen → Ergebnisse messen und optimieren.

**Capabilities (Beleg, nicht Versprechen):** Business Process Analysis, AI Strategy, Process Redesign, AI Engineering, Software Engineering, Model Engineering, Cloud & Infrastructure, Cybersecurity, AI Governance, AI Enablement.

**Herkunft (Repositionierung):** Die bisherige Site positioniert H&W als „Your IT & Cybersecurity Experts“ mit den Leistungsfeldern Cybersecurity Consulting, Software Engineering & Cloud Architecture, AI & Blockchain und IT Projects („Imagine, Plan, Execute“). Diese Breite wird aufgegeben. Cybersecurity, Cloud und Software Engineering bleiben als Capabilities in der Delivery Chain erhalten; Blockchain/Web3 entfällt. Die alte Site nennt außerdem „10+ years of software engineering experience“, „Certified Advice“ und einen Abschnitt „Certifications“. Die Zertifizierungen (CISSP, GIAC GCIA, OSCP, OSDA, Microsoft Cybersecurity Architect Expert, Microsoft Azure Security Engineer Associate, CSPO, IREB CPRE) und die Partner (Wavect, Rubicon Tech, Polity, turntabl, Systango) wurden am 2026-09-17 von den Gründern zur Übernahme freigegeben und sind in `content.ts` (`certifications`, `partners`, `standards`) hinterlegt; es sind Personen-Zertifikate des Gründerteams, keine Unternehmens-Zertifizierung. „10+ years“ und „Certified Advice“ bleiben nicht freigegeben.

---

## Target Audience

**Target companies:** Keine belastbaren Daten vorhanden, Annahme: Unternehmen im deutschsprachigen Raum mit gewachsenen, personalintensiven Geschäftsprozessen (Mittelstand und mittelgroße Organisationen), die AI im Betrieb nutzen wollen, aber kein eigenes AI-Engineering-Team haben. Branche im Handover nicht eingegrenzt; die Website spricht bewusst branchenoffen.

**Decision-makers:** Keine belastbaren Daten vorhanden, Annahme: Geschäftsführung und Inhaber, Bereichs- und Prozessverantwortliche (COO, Leitung Operations, Leitung Fachbereich), IT-Leitung und CTO als technische Instanz.

**Primary use case:** Ein Unternehmen weiß oder ahnt, dass AI seine Abläufe verbessern könnte, hat aber weder eine belastbare Bewertung, wo der Hebel liegt, noch ein Team, das die Lösung baut und produktiv betreibt.

**Jobs to be done:**
- Herausfinden, welche unserer Prozesse sich mit AI wirklich lohnen, bevor wir Geld für Technologie ausgeben.
- Die identifizierte Lösung von einem Partner bauen, integrieren und absichern lassen, ohne ein eigenes AI-Team aufzubauen.
- Eine Lösung produktiv in Betrieb bringen, die Mitarbeiter mitnehmen und die Wirkung messen, statt bei einem Piloten zu enden.

**Use cases (Beispielszenarien, keine Kundenergebnisse; nur als „Beispiel“ gekennzeichnet verwenden):**
- Eingehende Dokumente und Anfragen (Post, E-Mail, Formulare) werden manuell gesichtet, klassifiziert und weitergeleitet; AI übernimmt Erfassung und Vorsortierung, Mitarbeiter entscheiden.
- Angebots- und Auftragsbearbeitung mit vielen Rückfragen und Medienbrüchen zwischen Systemen; AI-gestützte Vorbereitung und Prüfung, integriert in bestehende Systeme.
- Wissensintensive Sachbearbeitung, bei der Mitarbeiter Informationen aus vielen Quellen zusammensuchen; ein abgesicherter Zugang zum Unternehmenswissen im Arbeitsprozess.

---

## Personas

Keine belastbaren Daten vorhanden, Annahme: B2B-Kauf mit mehreren Beteiligten. Rollen und Inhalte sind aus dem Leistungsbild abgeleitet, nicht aus Kundengesprächen.

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Decision Maker: Geschäftsführung / Inhaber | Ergebnis im Betrieb, Risiko, Verlässlichkeit des Partners | Hat Roadmaps und Pilotprojekte gesehen, aber wenig Produktives | Ein Partner vom Prozess bis zum produktiven System, mit Verantwortung bis in den Betrieb |
| Champion: Bereichs- oder Prozessverantwortlicher (COO, Leitung Operations) | Dass der konkrete Ablauf spürbar besser wird | Kennt die Reibung im Alltag, hat keine Zeit und kein Team für AI | Wir beginnen bei seinem Prozess und liefern eine Lösung, die dort läuft |
| Technical Influencer: IT-Leitung / CTO | Integration, Sicherheit, Betreibbarkeit, keine Schatten-IT | Fürchtet Insellösungen und Tools, die niemand wartet | Integration in die bestehende Landschaft, Security und Governance als Teil des Designs |
| Financial Buyer: CFO / kaufmännische Leitung | Wirtschaftlicher Hebel, nachvollziehbare Priorisierung | Kann AI-Vorschläge nicht bewerten | Jedes Potenzial wird nach wirtschaftlichem Hebel und Machbarkeit bewertet, bevor gebaut wird |
| User: Mitarbeiter im Fachbereich | Dass die Lösung im Alltag hilft und verständlich ist | Angst vor Mehraufwand oder Ersatz | Enablement gehört zum Leistungsbild, die Lösung ist Teil ihres Prozesses |

---

## Problems & Pain Points

**Core problem:** Unternehmen wissen, dass AI ihre Abläufe verändern wird, aber nicht, wo der größte Hebel liegt und wer die Lösung tatsächlich baut und betreibt. Zwischen Idee und produktivem System klafft eine Lücke.

**Why alternatives fall short:**
- Management- und AI-Beratung endet oft bei Strategie, Use-Case-Katalog, Roadmap oder PowerPoint. Umsetzung bleibt beim Kunden (Quelle: Handover, Abgrenzung).
- Softwareagenturen und Systemhäuser bauen, was bestellt wird, ohne den Geschäftsprozess vorher zu hinterfragen (Annahme).
- Technologiegetriebene Anbieter verkaufen Modelle, RAG, Agenten oder Plattformen als Lösung, bevor klar ist, welcher Prozess sich wie verbessern lässt (Annahme, abgeleitet aus dem Positionierungsprinzip).
- Eigene Piloten mit Bordmitteln bleiben Prototypen: keine Integration, keine Absicherung, kein Betrieb (Annahme).

**What it costs them:** Keine belastbaren Daten vorhanden, Annahme: Beratungsbudget ohne produktives Ergebnis, weiterlaufende manuelle Arbeit, verlorene Zeit gegenüber Wettbewerbern, Frust in den Fachbereichen. Keine Zahlen nennen.

**Emotional tension:** Keine belastbaren Daten vorhanden, Annahme: Druck, „etwas mit AI“ zu tun, gepaart mit der Sorge, Geld in Konzepte zu stecken, die nie laufen. Unsicherheit bei Datenschutz und Sicherheit. Zweifel, ob die eigene Organisation das Ergebnis tragen kann.

---

## Competitive Landscape

Keine belastbaren Daten vorhanden, Annahme: Es liegt keine Wettbewerbsanalyse vor. Keine Namen nennen. Kategorien nach dem Handover-Kontrast:

**Direct:** AI-Beratungen und AI-Agenturen mit eigenem Engineering — fallen dort kurz, wo sie beim Modell oder Tool beginnen statt beim Geschäftsprozess, oder wo Betrieb, Security und Enablement nicht Teil des Auftrags sind (Annahme).

**Secondary:** Management- und Strategieberatung mit AI-Roadmap — fällt kurz, weil sie bei Strategie, Roadmap oder PowerPoint endet und die Umsetzung an ein anderes Haus übergibt (Quelle: Handover). Softwareagenturen und IT-Systemhäuser — fallen kurz, weil sie umsetzen, ohne Prozess und Potenzial vorher zu bewerten (Annahme).

**Indirect:** Interne Umsetzung mit dem eigenen IT-Team, Einsatz generischer AI-Assistenten ohne Prozessänderung, oder Abwarten — fallen kurz, weil ohne Prozessanalyse, Integration und Betrieb kein produktives System entsteht (Annahme).

---

## Differentiation

**Key differentiators:**
- Eine durchgehende Delivery Chain: vom Verständnis des Geschäfts bis zur gemessenen Wirkung im Betrieb, ohne Übergabe an ein anderes Haus.
- Beginn beim Prozess, nicht bei der Technologie. Bewertung nach wirtschaftlichem Hebel und Machbarkeit, bevor gebaut wird.
- Dasselbe Team, das den Prozess verstanden hat, baut die Lösung.
- Security, Governance und Compliance sind Teil der Lösung, kein nachgelagerter Audit.
- Enablement der Mitarbeiter und Messung der Ergebnisse gehören zum Leistungsbild.
- Keine Junior-Berater: Wer im Erstgespräch sitzt, bewertet die Prozesse, baut die Lösung und bleibt bis in den Betrieb. Kein Pitch-Team, das an ein Lieferteam übergibt. (Zusage der Gründer, 2026-09-17; auf der Website als Versprechen formulieren, nie als Angriff auf andere Häuser.)

**How we do it differently:** Wir hören nicht bei Strategie, Roadmap oder PowerPoint auf. Die identifizierte Lösung bauen wir anschließend selbst und bringen sie in Produktion.

**Why that's better:** Der Kunde bekommt ein laufendes System statt einer Empfehlung. Verantwortung bleibt bei einem Partner. Erkenntnisse aus der Analyse gehen nicht an der Schnittstelle zur Umsetzung verloren.

**Why customers choose us:** Keine belastbaren Daten vorhanden, Annahme: Weil sie eine Umsetzung wollen, nicht einen Bericht, und weil sie einen Partner suchen, der Prozessverständnis und Engineering in einem Team hat.

**Positionierungsprinzip:** Nicht über technische Buzzwords verkaufen (Modelle, RAG, Agenten, Deployments, Kubernetes, AI Security, Compliance). Das sind Fähigkeiten und Beleg, nicht das Versprechen. Die Kundengeschichte lautet: „Wir verstehen, wie Ihr Unternehmen arbeitet, finden die größten AI-Hebel und setzen die passende Lösung selbst um.“

---

## Objections

Keine belastbaren Daten vorhanden, Annahme: keine Vertriebsgespräche dokumentiert. Einwände sind aus Positionierung und Zielgruppe abgeleitet.

| Objection | Response |
|-----------|----------|
| „Wir hatten schon eine AI-Beratung. Es gab eine Roadmap, passiert ist nichts.“ | Genau dort setzen wir an: Wir bauen die Lösung selbst und tragen Verantwortung bis in den Betrieb. |
| „Unsere Daten dürfen das Haus nicht verlassen.“ | Modellauswahl, Infrastruktur und Absicherung sind Teil unseres Designs. Wir wählen, was zu Ihren Anforderungen passt, und sichern Daten, Modelle und Zugänge ab. |
| „Wir wissen nicht, ob sich das rechnet.“ | Wir bewerten jedes Potenzial nach wirtschaftlichem Hebel und technischer Machbarkeit, bevor gebaut wird. Sie entscheiden auf dieser Grundlage. |
| „Ist ein kleines Team dafür groß genug?“ | Keine belastbaren Daten vorhanden, Annahme: Teamgröße nicht kommunizieren; auf durchgehende Verantwortung und dasselbe Team von Analyse bis Betrieb verweisen. |
| „Am Ende sitzen dann doch Berufseinsteiger bei uns.“ | Nein. Wer Ihre Prozesse analysiert, baut auch die Lösung. Es gibt bei uns kein Pitch-Team und kein Lieferteam. |
| „Wir nutzen bereits einen AI-Assistenten.“ | Ein Assistent verändert keinen Prozess. Wir gestalten den Ablauf so, dass AI sein natürlicher Bestandteil ist, integriert in Ihre Systeme. |

**Anti-persona:** Keine belastbaren Daten vorhanden, Annahme: Unternehmen, die ausschließlich eine Strategie oder ein Gutachten ohne Umsetzung wollen; Anfragen nach reiner Personalgestellung oder Body Leasing; Kunden, die ein bestimmtes Tool vorgeben und keine Prozessanalyse wünschen; Privatpersonen und Projekte ohne Geschäftsprozessbezug (etwa reine Blockchain- oder Web3-Vorhaben aus dem alten Leistungsportfolio).

---

## Switching Dynamics

Keine belastbaren Daten vorhanden, Annahme: aus Positionierung abgeleitet.

**Push:** Roadmaps ohne Umsetzung. Piloten, die nie produktiv gehen. Tool-Käufe, die den Ablauf nicht verändern. Beratung, die an der Umsetzung übergibt.

**Pull:** Ein Partner vom Prozess bis zum produktiven System. Beginn bei der eigenen Arbeit statt bei einer Technologie-Liste. Bewertung vor dem Bauen. Ein konkretes Erstgespräch über einen konkreten Prozess.

**Habit:** Bestehende Beziehungen zu Systemhaus oder Beratung. Die Vorstellung, AI sei ein Thema für die IT allein. Der Reflex, erst eine Strategie in Auftrag zu geben.

**Anxiety:** Datenschutz, Sicherheit und Compliance. Abhängigkeit von einem Anbieter. Kosten ohne messbares Ergebnis. Akzeptanz der Mitarbeiter. Ob der Partner den Betrieb wirklich stemmt.

---

## Regel: Ausgangslage ohne AI (2026-09-17)

Zielkunden haben in der Regel **keinen AI-Prozess und keine AI-Lösung**. Jede Copy geht vom bestehenden, meist manuellen Ablauf aus (Systeme, Rückfragen, Medienbrüche) und führt von dort zur produktiven AI. Nicht schreiben: „Ihre AI-Lösung“, „Ihr AI-Prozess“, „Ihre AI-Strategie“ als etwas Vorhandenes. Schreiben: „AI, die in Ihrem Betrieb läuft“, „Ihr Angebotsprozess läuft heute ohne AI“.

## Messaging-Baustein: Hero-Hook (2026-09-17)

**Kern:** AI-Adoption ist niedriger, als die eigene Blase vermuten lässt (Gründer-Einschätzung, keine Zahl). Der breiteste Schmerz der Zielgruppe ist Lärm ohne Ergebnis: Alle reden über AI, im eigenen Betrieb läuft nichts, und niemand weiß, wo anfangen. Der Hero holt genau dort ab, ohne Vorwurf und ohne Voraussetzung.

**Freigegebene Formulierungen:**
- Headline: „Alle reden über AI. Bei Ihnen läuft sie.“
- Claim: „From Process to Production.“
- Beschreibung: „Sie brauchen keine AI-Strategie, um anzufangen. Wir schauen auf Ihre Abläufe, finden den größten Hebel und bauen die Lösung selbst.“

**Abgelöst:** „AI, die in Ihrem Betrieb läuft. Nicht auf Folien.“ (zu lang, Kontrast nur gegen Beratung, nicht gegen den Einstiegsschmerz). Der Folien-Kontrast lebt weiter in „Der Unterschied“.

## Messaging-Baustein: Senior-Zusage (2026-09-17)

**Kern:** Keine Junior-Berater. Das Muster „Die Erfahrenen pitchen, die Unerfahrenen liefern“ gibt es bei H&W nicht: Wer im Erstgespräch sitzt, bewertet die Prozesse, baut die Lösung und bleibt bis in den Betrieb.

**Tonalität:** Als Zusage formulieren, nicht als Abrechnung. Keine Namen anderer Häuser, keine Wörter wie „Bullshit“, „Abzocke“, „Junior-Bashing“. Das Muster darf benannt werden („Sie kennen das Modell“), die Wertung liefert der Leser selbst.

**Freigegebene Formulierungen:**
- Hook: „Keine Junior-Berater. Wer Ihren Prozess versteht, baut ihn auch.“
- Kontrast: „Sie kennen das Modell: Die Erfahrenen pitchen, die Unerfahrenen liefern. Bei uns gibt es dieses Modell nicht. Wer im Erstgespräch sitzt, bewertet Ihre Prozesse, baut die Lösung und bleibt bis in den Betrieb.“
- Unternehmen: „Zwei Gründer, ein Team, keine Übergaben. Sie arbeiten mit denen, die Sie kennenlernen.“
- Kontrast-Listen: klassisch „Pitch-Team, dann Lieferteam“ / H&W „Ein Team von Analyse bis Betrieb“.

**Nicht behaupten:** Teamgrößen, Senioritätsjahre. Zertifikate nur die freigegebenen aus `content.ts`, immer als Zertifikate der Personen im Gründerteam.

## Messaging-Baustein: Souveränität (2026-09-17)

**Kern (Gründer-Wortlaut):** „Schluss mit 10.000 Dienstleistern. Hole dir deine Souveränität zurück, indem du AI-Workflows und Prozesse richtig nutzt.“ Das Problem ist der Flickenteppich: für jede Aufgabe ein Anbieter, für jedes Werkzeug ein Vertrag, niemand kennt den ganzen Ablauf. Die Lösung ist Kontrolle über die eigenen Abläufe durch AI-Workflows, die im eigenen Haus laufen.

**Tonalität:** Sie-Form. Die Zahl „10.000“ ist rhetorisch und wird auf der Website nicht verwendet (keine erfundenen Größen). Keine Abwertung von Tools oder anderen Dienstleistern, das Muster wird benannt, die Wertung liefert der Leser.

**Freigegebene Formulierungen:**
- Hook: „Schluss mit dem Flickenteppich aus Dienstleistern.“
- Lede: „Holen Sie sich Ihre Souveränität zurück: mit AI-Workflows, die Ihre Prozesse richtig nutzen und in Ihrem Haus laufen.“
- Drei Punkte: Ihre Prozesse (Ablauf gehört Ihnen, nicht dem Werkzeug), Ihre Daten (verarbeitet, wo Sie es entscheiden), Ihr Wissen (kein Betrieb, der nur mit uns funktioniert).
- Kontrast-Listen: klassisch „Für jedes Werkzeug ein Anbieter“ / H&W „Prozess, Daten und Wissen bleiben bei Ihnen“.

**Annahme (zu bestätigen):** Lösungen werden in den Systemen des Kunden betrieben und bleiben dessen Eigentum; die Aussage „Ihre Daten: verarbeitet, wo Sie es entscheiden“ setzt voraus, dass H&W keine eigene Datenhaltung erzwingt.

---

## Customer Language

**How they describe the problem:**
- Keine belastbaren Daten vorhanden. Keine Kunden-Verbatims vorhanden; keine erfinden. Annahme für Arbeitsformulierungen (nicht als Zitat verwenden): „Wir wissen, dass da was geht, aber nicht wo.“ / „Wir haben ein Konzept, aber niemanden, der es baut.“ / „Der Pilot läuft, aber nicht im Alltag.“

**How they describe us:**
- Keine belastbaren Daten vorhanden. Keine Verbatims vorhanden; keine erfinden.

**Words to use:**
Geschäftsprozess, Ablauf, Prozess, Arbeit, die täglich passiert; AI-Potenzial, AI-Hebel, Hebel; bewerten, priorisieren; AI-native neu denken; Umsetzungspfad; selbst bauen, umsetzen, entwickeln, integrieren; produktiv, in Produktion, im Betrieb, laufen; absichern, Security, Governance, Compliance (als Bestandteil, nicht als Versprechen); befähigen, Mitarbeiter; messen, optimieren, Wirkung; ein Partner, aus einer Hand, Verantwortung bis in den Betrieb, ohne Übergabe; konkret; Erstgespräch; Delivery Chain; From Process to Production; AI Transformation & Engineering.

**Words to avoid:**
revolutionieren, end-to-end, ganzheitlich, innovativ, nahtlos, KI (immer „AI“), disruptiv, Digitalisierung (als Selbstzweck), Cutting Edge, State of the Art, next level / Level-Up, smart, Synergien, Mehrwert schaffen, 360°, Full-Service, Experten (als Behauptung ohne Beleg), Blockchain, Web3, kostenlos (nicht bestätigt), „zertifizierte Beratung“ / „Certified Advice“ (Unternehmen ist nicht zertifiziert; Personen-Zertifikate siehe Proof Points), Roadmap und Use-Case-Katalog als eigenes Angebot (nur als Kontrast zur klassischen Beratung), technische Buzzwords als Versprechen in Headlines (LLM, RAG, Agenten, Kubernetes, Deployment; erlaubt nur als Beleg in Capability-Texten), Ausrufezeichen, Gendersternchen und Doppelnennungen.

**Glossary:**
| Term | Meaning |
|------|---------|
| From Process to Production | Leitmotiv. Deutsch: „Von Geschäftsprozessen zu produktiver AI“. Visuell die Achse Lavendel → Magenta-Violett. |
| Delivery Chain | Die zwölfgliedrige Kette von „Business verstehen“ bis „Ergebnisse messen und optimieren“; ein Partner, keine Übergabe. |
| Leistungsbild | Die zehn Schritte, gruppiert in vier Phasen: Prozess, Design, Engineering, Produktion. |
| AI-native | Ein Prozess wird so gestaltet, dass AI sein natürlicher Bestandteil ist, statt AI an den bestehenden Ablauf anzuschrauben. |
| AI-Potenzial / AI-Hebel | Eine konkrete, bewertete Verbesserungsmöglichkeit in einem Geschäftsprozess (wirtschaftlicher Hebel, technische Machbarkeit). |
| Umsetzungspfad | Konkreter Plan mit Reihenfolge, Abhängigkeiten und Meilensteinen (Schritt 6). |
| Capability | Fähigkeit, die H&W zur Umsetzung braucht; Beleg für Umsetzungskompetenz, nicht das Produktversprechen. |
| Erstgespräch | Primäre Conversion: 30 Minuten, der Kunde bringt einen konkreten Prozess mit, Antwort in der Regel innerhalb eines Werktags. |
| AI Transformation & Engineering | Positionierungskategorie; Alternative: AI-Native Consulting & Engineering. |

---

## Brand Voice

**Tone:** Sachlich, direkt, ruhig, selbstbewusst ohne Lautstärke. Redaktionell statt werblich (DESIGN.md: Eyebrows in Satzschreibung, keine Versalien, keine Zierstriche; Motion nur zurückhaltend).

**Style:** Aktiv, parataktisch, konkret. Kurze Hauptsätze statt Schachtelsätze. Behauptung, dann Beleg. Der Prozess des Kunden steht im Satz vor der Technologie.

**Personality:** direkt, konkret, verbindlich, technisch fundiert, unaufgeregt.

**Sprachmechanik (verbindlich für deutsche Kunden-Copy):**
- Sie-Form. Kein Gendern: generisches Maskulinum oder umformulieren (also „Mitarbeiter“ oder „Ihr Team“, nicht „Mitarbeitende“ oder „Mitarbeiter:innen“).
- Durchgehend „AI“, nie „KI“. Betrifft auch `company.claimDe` und die Hero-Headline in `content.ts`, die derzeit noch „KI“ tragen.
- Deutsche Anführungszeichen „…“.
- Keine Ausrufezeichen.
- Kein Gedankenstrich in Headlines, Eyebrows, CTAs und Labels. In Fließtext höchstens ein Gedankenstrich pro Absatz. Interpretation: Die Regel nennt „—“; sie wird auf den deutschen Halbgeviertstrich „–“ ebenso angewandt, da beide als Gedankenstrich wirken. Bevorzugt: Punkt oder Doppelpunkt.
- Aktiv statt passiv. Parataxe statt Hypotaxe.
- Keine Buzzwords ohne Substanz (siehe Words to avoid).

**Redaktionsbrief Website (Stand 2026-09-17, Nutzerintention wörtlich: „bessere Hooks, weniger Rumgelaber, etwas weniger Subtexte“):**
- Jede Sektions-Headline ist ein Hook: eine Behauptung, die der Leser wiederholen oder bestreiten würde. Keine Beschreibung des Abschnitts („Unsere Leistungen“, „Wie wir arbeiten“ sind keine Hooks).
- Fließtext hart kürzen. Längenlimits pro Slot: Hero-Beschreibung ≤ 24 Wörter; Ledes ≤ 18 Wörter; Schritttexte ≤ 14 Wörter; Capability-Texte ≤ 9 Wörter; CTA-Text ≤ 16 Wörter.
- Subtexte (Ledes unter Headlines) nur, wenn sie einen neuen Fakt tragen. Sonst leer (`""`).
- Informationsarchitektur bleibt: Jeder Slot im Schema von `content.ts` und in den Seiten existiert weiter; nur der Inhalt ändert sich oder wird geleert.
- Slots, die davon betroffen sind: `hero` (eyebrow, headline, claim, description, CTAs), `promise` (short, long), `deliverySteps[10]` (title, text), `chain[12]`, `contrast` (heading, text, classic, hw), `capabilities[10]` (title, text), `positioning` (category, altCategory, principle), Sektions-Eyebrows, H2 und Ledes auf `/`, `/leistungen`, `/vorgehen` (inklusive der vier Phasen), `/unternehmen`, `/kontakt`, sowie `Cta` (heading, text). Annahme: Phasentexte auf `/vorgehen` fallen unter das Lede-Limit (≤ 18 Wörter).

---

## Proof Points

**Metrics:** Keine belastbaren Daten vorhanden. Keine Kennzahlen veröffentlichen. Die Angabe „10+ years of software engineering experience“ der alten Site ist nicht bestätigt und wird nicht übernommen.

**Certifications (freigegeben 2026-09-17):** CISSP, GIAC GCIA, OSCP, OSDA, Microsoft Certified Cybersecurity Architect Expert, Microsoft Certified Azure Security Engineer Associate, CSPO, IREB CPRE. Zertifikate der Personen im Gründerteam; Badges aus der alten Site in `src/assets/certs/`.

**Partners (freigegeben 2026-09-17):** Wavect, Rubicon Tech, Polity, turntabl, Systango. Logos in `src/assets/partners/`, einfarbig gerendert; Ninox aus der alten Site ist nicht mehr in der Liste.

**Customers:** Keine belastbaren Daten vorhanden. Keine Kundenlogos, keine Referenzen, keine Fallstudien freigegeben. Die alte Site zeigt NIST- und OWASP-Logos ausschließlich als Verweis auf Standards („Industry Standards“), nicht als Kunden oder Zertifizierungen. Zulässig ist ein Hinweis auf Orientierung an anerkannten Standards, nicht mehr.

**Testimonials:** Keine belastbaren Daten vorhanden. Keine Zitate verwenden.

**Value themes:**
| Theme | Proof |
|-------|-------|
| Ein Partner vom Prozess bis zur Produktion | Delivery Chain und Leistungsbild mit zehn Schritten; dasselbe Team von Analyse bis Betrieb (Positionierung, kein Kundenergebnis) |
| Bewerten, bevor gebaut wird | Schritt 4 (wirtschaftliche und technische Bewertung) und Schritt 6 (Umsetzungspfad) |
| Sicherheit ist Teil des Designs | Capabilities Cybersecurity und AI Governance; Schritt 9; Cybersecurity-Herkunft der Firma; Orientierung an NIST und OWASP als Standards |
| Lösungen laufen im Betrieb | Schritt 10 (deployen, befähigen, messen, optimieren); Capability AI Enablement |
| Umsetzung statt PowerPoint | Kontrast klassische Beratung (Strategie, Use-Case-Katalog, Roadmap, Empfehlung) gegen H&W (Prozessanalyse, Lösungsdesign, eigenes Engineering, produktiver Betrieb) |

Konkrete Szenarien dürfen genutzt werden, wenn sie als Beispiel gekennzeichnet sind („zum Beispiel“, „ein typischer Fall“), nie als Ergebnis.

---

## Goals

**Business goal:** Repositionierung von der breiten IT-, Cybersecurity- und Softwareberatung zum AI-nativen Consulting-, Transformations- und Engineering-Partner sichtbar machen und qualifizierte Erstgespräche über konkrete Geschäftsprozesse gewinnen.

**Conversion action:** „Erstgespräch vereinbaren“ (primär, Ziel `/kontakt`). Angebot: 30 Minuten, einen konkreten Prozess mitbringen, Antwort in der Regel innerhalb eines Werktags. Kontakt: contact@hw-digitalsolutions.de (die alte Site nennt teils die .com-Adresse; gültig ist .de). Sekundär: „So arbeiten wir“ (`/vorgehen`), Mailto-Link im CTA.

**Current metrics:** Keine belastbaren Daten vorhanden. Kein Tracking auf der neuen Site (statisch, keine Cookies, laut README und Datenschutzerklärung).

---

## Changelog
*Newest first. One line per revision: what changed and why.*
- v4 (2026-09-17) — Zertifizierungen und Partner der alten Site von den Gründern freigegeben und als Proof Points aufgenommen.
- v3 (2026-09-17) — Hero-Hook auf Einstiegsschmerz umgestellt („Alle reden über AI. Bei Ihnen läuft sie.“); Adoptions-Einschätzung als Gründer-Input ohne Zahl.
- v2 (2026-09-17) — Messaging-Baustein Souveränität ergänzt (Gründer-Input), Annahme zur Datenhaltung markiert.
- v1 (2026-09-17) — Initial context. Auto-Entwurf aus Positionierungs-Handover, `content.ts`, Seiten, DESIGN.md und alter HubSpot-Copy; Redaktionsbrief (Hooks, Längenlimits, Sprachmechanik) aufgenommen; Lücken bei Zielgruppe, Wettbewerb, Einwänden, Verbatims und Belegen als Annahmen markiert.
