# Consultry — Privacy Egress Gateway v0.1

**Status:** **Separate Future Technical-Handoff Note.** Kein Product Canon, kein Acceptance Gate, kein aktueller Build-Scope und keine Änderung der Product Vision v2.7. Nur bei späterem Sovereignty-/Kundenbedarf erneut zu priorisieren.  
**Datum:** 12.07.2026  
**Rolle im Doc-Stack:** Isolierter Future-Architecture-Entwurf für die lokale Prüfung, Minimierung und Policy-Entscheidung vor externen Modellaufrufen. Das Dokument hält die Idee fest, ohne Product Vision, PoC/MVP, Demo, PMF-Bar oder Implementation Critical Path zu erweitern.  
**Bezug:** [Product Vision](./Consultry-Product-Vision-v1.0.md), [Alignment Control Plane](./Consultry-Alignment-Control-Plane-v1.0.md), [Business Domain Definition](./Consultry-Business-Domain-Definition-v1.0.md), [MVP PRD](../archive/superseded-product-baseline-2026-08/Consultry-MVP-PRD-v1.0.md), [Virtual/Local Harness Refinement](./Consultry-MVP-Virtual-Harness-Second-Brain-Refinement-v1.0.md), [Project Intelligence & Symbiosis](./Consultry-Project-Intelligence-Symbiosis-Graph-v1.0.md).

> **Future-Architecture-Hypothese.** Falls spätere Kunden einen zusätzlichen self-hosted Sovereignty-/Defense-in-Depth-Layer verlangen, ist der kanonische Begriff **Privacy Egress Gateway**, nicht nur „PII Detector“ oder „PII Router“. Ein einzelnes Erkennungsmodell kann keine vollständige Geheimhaltungs- oder Datenschutzgarantie liefern; der spätere Layer müsste deshalb lokal, mehrschichtig und policy-gesteuert arbeiten.

---

## 1. Problem Und Produktversprechen

Der Consulting Context Graph kann besonders schützenswerte Informationen enthalten: Namen und Kontaktdaten, besondere Kategorien personenbezogener Daten, Kundeninterna, Vertrags- und Preisinformationen, Projektnamen, Geschäftsgeheimnisse, Credentials, Source Code, Architekturdetails oder noch nicht freigegebene Reuse-Artefakte. Ein ContextPack darf solche Inhalte nicht versehentlich an einen externen Modellanbieter senden, nur weil sie in einem Dokument, OCR-Layer, Tool-Ergebnis, Embedding-Job oder Telemetrie-Payload verborgen sind.

Das Privacy Egress Gateway stellt deshalb sicher:

1. Jeder externe Modellpfad ist technisch über **eine** Policy-Grenze geführt.
2. Parsing, Erkennung, Klassifikation und Policy-Entscheidung laufen in einer Consultry- oder kundenseitig kontrollierten Umgebung ohne externen Modellaufruf.
3. Nur die für den konkreten Zweck minimal benötigte, freigegebene oder sanitizierte Information verlässt diese Grenze.
4. Nicht sicher sanitizierbare oder policy-seitig unzulässige Jobs werden blockiert, menschlich geprüft oder auf einen lokalen Inference-Pfad geroutet.
5. Rehydration von Pseudonymen erfolgt ausschließlich innerhalb der vertrauenswürdigen Grenze und nur für den genehmigten Zweck.
6. Jede Entscheidung ist reproduzierbar und auditierbar, ohne sensible Rohinhalte im Audit zu duplizieren.

**Nicht das Versprechen:** „Unsere AI findet 100 % aller PII.“  
**Das belastbare Versprechen:** „Jeder externe Modellaufruf durchläuft eine lokale, mehrschichtige Daten- und Policy-Prüfung; unklare oder verbotene Inhalte verlassen die kontrollierte Grenze nicht.“

---

## 2. Kanonischer Flow

```text
Context Document / Prompt / Tool Payload / Embedding Input
  → local parse + OCR + structure extraction
  → deterministic detectors
  → self-hosted multilingual sensitive-data detector
  → tenant dictionaries + project/account policy
  → span-level classification + risk aggregation
  → EgressDecision
      ├─ ALLOW
      ├─ ALLOW_SANITIZED
      ├─ REQUIRE_REVIEW
      ├─ LOCAL_ONLY
      └─ BLOCK
  → sanitized ModelRequestEnvelope
  → approved external Model API
  → local response scan
  → purpose-scoped local rehydration
  → ResultVerifier + Human Approval + metadata-only Audit
```

`ALLOW` ist nur für Daten zulässig, die keine verbotene Klasse enthalten und deren Zweck, Anbieter, Region, Vertrag und Retention Policy ausdrücklich passen. `ALLOW_SANITIZED` ist der Normalpfad für ersetzbare sensible Referenzen. Bei fehlender Parser-Abdeckung, ausgefallenem Detector, unklarem Risiko oder widersprüchlicher Policy gilt **fail closed**: `REQUIRE_REVIEW`, `LOCAL_ONLY` oder `BLOCK` statt stiller Weiterleitung.

---

## 3. Schutzumfang

### 3.1 Sensible Datenklassen

`SensitiveDataClass` erweitert die reine PII-Sicht:

| Klasse | Beispiele | Default-Behandlung bei externem Modellpfad |
|---|---|---|
| **DirectIdentifier** | Name, E-Mail, Telefon, Personal-/Kundennummer | pseudonymisieren oder blockieren |
| **QuasiIdentifier** | Kombination aus Rolle, Standort, Projekt und Zeitraum | kontextabhängig generalisieren oder prüfen |
| **SpecialCategory / HighlySensitivePersonal** | Gesundheit, biometrische, politische oder vergleichbar hochsensible Angaben | `LOCAL_ONLY` oder `BLOCK`; Ausnahme nur mit expliziter Policy und Rechtsprüfung |
| **CustomerConfidential** | interne Kundenfakten, Projektdetails, nicht öffentliche Stakeholder-/Systemdaten | minimieren, abstrahieren, pseudonymisieren oder lokal routen |
| **CommercialConfidential** | Rates, Preise, Marge, Verhandlungsposition, Forecast | purpose-/rollenabhängig sanitizieren oder blockieren |
| **ContractRestricted / IPRestricted** | Geheimhaltung, Nutzungseinschränkung, fremde IP, unveröffentlichte Artefakte | Policy-/Rights-Entscheidung; Sanitization allein genügt nicht |
| **CredentialOrSecret** | API Keys, Tokens, Passwörter, private Schlüssel, Connection Strings | immer blockieren und als Security Finding behandeln |
| **TechnicalConfidential** | Source Code, Infrastruktur, Schwachstellen, interne Architektur | policy-basiert lokal routen, minimieren oder blockieren |
| **Public / ApprovedExternal** | bereits freigegebene öffentliche Information | zulässig innerhalb Source-/Purpose-Policy |

Die Klassifikation ist tenant-, account-, project-, role- und purpose-scoped. Derselbe Text kann in einem internen Projektjob zulässig und in einem externen Research-, Support- oder Evaluation-Pfad verboten sein.

### 3.2 Egress-Kanäle

Der Gateway gilt nicht nur für sichtbare Chat-Prompts. Er umfasst:

- System-, User- und Tool-Prompts sowie kompilierte `ContextPack`-/`MemoryPack`-Inhalte;
- Dokumente, Anhänge, Bilder, OCR-Text, Tabellen, Kommentare und Metadaten;
- Tool- und MCP-Argumente, Tool-Ergebnisse und Connector-Snapshots;
- Cloud-Embedding-, Reranking-, Moderation-, Speech-, Vision- und Evaluation-Aufrufe;
- Logs, Traces, Telemetrie, Error Reports, Support Bundles und Prompt-/Eval-Datasets;
- Modellantworten vor lokaler Rehydration oder Weitergabe an nachgelagerte Systeme.

Kein SDK, Harness, Connector oder Hintergrundjob darf den Gateway über einen direkten Anbieter-Endpunkt umgehen.

### 3.3 Externe Anbietergrenze

„Externes Modell“ bedeutet jedes Inference-System außerhalb der kontrollierten Consultry-/Kundenumgebung, einschließlich direkter OpenAI- oder Anthropic-APIs und verwalteter Modellplattformen. Consumer-Oberflächen wie ChatGPT oder Claude-Web-Apps sind **kein** zulässiger Consultry-Verarbeitungspfad für Tenant-Dokumente.

---

## 4. Mehrschichtige Lokale Erkennung

Ein robustes Gateway kombiniert mehrere Schichten:

1. **Local Parser/OCR:** strukturtreue Extraktion aus PDF, DOCX, E-Mail, Tabellen, Bildern und Containerformaten; markiert unlesbare oder nicht abgedeckte Bereiche.
2. **Deterministische Detektoren:** Regex, Checksums, Secret Scanner und strukturierte Validatoren für E-Mail, Telefon, IBAN, Steuer-/ID-Muster, Credentials und Schlüsselmaterial.
3. **Self-hosted multilingual NER/Classificator:** deutsch-/englischfähige span-level Erkennung für Personen, Organisationen, Orte, Rollen, Vertrags-/Projektkontext und sensible Semantik.
4. **Tenant Dictionaries:** genehmigte Listen für Kunden, Projektnamen, Codenames, Personen, Vertrags-IDs, Systeme, Produktnamen und besondere Geheimhaltungsbegriffe.
5. **Graph Context:** bekannte Beziehungen aus Account, Project, Contract, RightsState und DataClass verstärken oder korrigieren Findings; der Detector erhält nur den lokal erforderlichen Kontext.
6. **Policy Decision Engine:** entscheidet deterministisch anhand von Zweck, Rolle, Anbieter, Region, Vertrag, Datenklasse, Confidence und zulässiger Transformation.
7. **Human Review:** nur für bewusst definierte Grenzfälle; nicht als stiller Ersatz für fehlende technische Gates.

Detector-Modelle und Regeln sind versioniert, signiert, offline evaluierbar und dürfen selbst keinen externen Egress besitzen. Ein Model-Update ändert keine Policy ohne separate Freigabe.

---

## 5. Sanitization, Pseudonymisierung Und Rehydration

### 5.1 Transformationen

| Transformation | Beispiel | Regel |
|---|---|---|
| Redaction | E-Mail → `[REDACTED_EMAIL]` | wenn Identität für die Aufgabe irrelevant ist |
| Typed Pseudonymization | „Anna Müller“ → `[PERSON_01]` | Typ bleibt erhalten, Original bleibt lokal |
| Generalization | „Werk Stuttgart, Linie 4“ → „DACH-Produktionsstandort“ | nur wenn Detail nicht aufgabenrelevant ist |
| Value Bucketing | exakte Rate → freigegebene Bandbreite | nur bei fachlich ausreichender Genauigkeit |
| Structural Minimization | nur relevante Tabellenzeilen/Spalten senden | vor semantischer Transformation anwenden |
| Local Feature Extraction | Dokument lokal in nicht-sensitive Merkmale/Claims überführen | externe API erhält Merkmale statt Rohdokument |

### 5.2 Token Vault

Pseudonym-Mappings liegen in einem verschlüsselten, tenant- und job-scoped `PseudonymTokenVault`:

- kurze TTL und Zweckbindung;
- keine Aufnahme in Prompt Logs, Audit Payloads oder externe Traces;
- getrennte Schlüssel- und Zugriffsdomäne;
- Rehydration nur durch einen expliziten `RehydrationGrant`;
- standardmäßig job-stabile, nicht tenantweit stabile Tokens, um unnötige Linkability zu vermeiden;
- Löschung nach Job/Retention Policy, sofern kein zulässiger Audit-/Arbeitszweck besteht.

### 5.3 Lokale Rehydration

Die externe Modellantwort wird zunächst lokal auf policy-widrige Inhalte und unerlaubte Platzhaltermanipulation geprüft. Erst danach darf ein genehmigter Result-Typ rehydriert werden. Rehydration darf keine neue Information einfügen, die der nachgelagerte Empfänger nicht sehen darf.

---

## 6. Core Objects Und Datenanforderungen

| Objekt | Zweck | Pflichtfelder |
|---|---|---|
| `PrivacyPolicyPack` | job-spezifische Privacy-/Egress-Regeln | tenant, purpose, role, provider/region, allowed/forbidden classes, transformations, retention, version |
| `PrivacyScanJob` | reproduzierbarer lokaler Scan | input hash, parser coverage, detector/rule versions, scopes, timestamps, status |
| `DetectorFinding` | span-level Finding | class, location/span, confidence, detector, evidence, proposed handling |
| `SanitizationManifest` | deterministische Transformationsspur | input/output hash, finding refs, transformation, placeholder type, coverage |
| `PseudonymToken` | lokales Mapping | token, encrypted value ref, tenant/job/purpose scope, TTL |
| `EgressDecision` | verbindliche Policy-Entscheidung | outcome, reason codes, policy version, finding summary, approver if required |
| `ModelRequestEnvelope` | freigegebene externe Anfrage | provider/model/region, sanitized payload hash, purpose, retention mode, decision ref |
| `RehydrationGrant` | begrenzte Rückauflösung | result type, target audience, token scope, expiry, approver/policy ref |

Audit und Analytics speichern standardmäßig nur Hashes, Klassen, Counts, Decision Codes, Versionen, Zeitpunkte und Korrelationen. Rohspans, Originalwerte und Token-Mappings gehören nicht in den allgemeinen Audit Stream.

### 6.1 Zustandsmodell

```text
Prepared
  → ParsedLocally
  → Classified
  → Decided
      ├─ Blocked
      ├─ AwaitingReview
      ├─ RoutedLocal
      └─ Sanitized
          → SentExternally
          → ResponseScanned
          → RehydratedLocally
          → Completed
```

Ein `PrivacyScanJob` kann bei geänderter Policy oder Detector-Version neu ausgeführt werden; eine alte Entscheidung wird nicht stillschweigend auf einen neuen Payload übertragen.

---

## 7. Invarianten

1. **No bypass:** Kein externer Model-, Embedding-, Tool-, Trace- oder Eval-Egress ohne gültige `EgressDecision` für den exakten Payload Hash.
2. **Local first:** Parsing, Erkennung, Policy-Entscheidung und Pseudonym-Mapping verlassen die kontrollierte Umgebung nicht.
3. **Fail closed:** Unlesbarer Inhalt, fehlende Detector-Abdeckung, ausgefallene Komponente oder unbekannte Datenklasse führt nicht zu `ALLOW`.
4. **Purpose binding:** Eine Freigabe für Drafting gilt nicht automatisch für Research, Support, Telemetrie oder Evaluation.
5. **Least data:** Nur die für den Job minimal erforderlichen Spans oder Merkmale dürfen in den `ModelRequestEnvelope` gelangen.
6. **No secret transform:** Credentials und Secrets werden blockiert, nicht lediglich durch ein Modell paraphrasiert.
7. **No privacy-rights conflation:** Sanitization oder Pseudonymisierung erzeugt keine IP-, Contract-, Confidentiality- oder Cross-Customer-Nutzungsrechte.
8. **No provider-policy conflation:** AVV/DPA, No-Training, Region und Retention bleiben Pflicht, auch wenn ein Payload sanitisiert ist.
9. **No detector guarantee:** Confidence und bekannte Blind Spots bleiben sichtbar; High-Risk-Klassen nutzen lokale Route, Review oder Blockierung.
10. **Metadata-only audit:** Allgemeine Audit-/Telemetry-Pfade enthalten keine Originalwerte oder rehydrierbaren Token-Mappings.
11. **Version pinning:** Decision, Policy, Parser, Detector, Rules und Tenant Dictionary sind versioniert und reproduzierbar.
12. **Response control:** Externe Antworten werden vor Rehydration und Persistenz erneut geprüft.

---

## 8. Funktionale Anforderungen

| ID | Requirement |
|---|---|
| **PEG-FR-001** | Alle externen Inference-, Embedding-, Tool-, Trace-, Eval- und Support-Pfade müssen technisch über den Gateway erzwungen werden. |
| **PEG-FR-002** | Dokumente und Anhänge müssen lokal mit struktur- und span-erhaltender Parser-/OCR-Coverage verarbeitet werden können. |
| **PEG-FR-003** | Das System muss deterministische Detektoren, Secret Scanner, self-hosted multilingual Detection und Tenant Dictionaries kombinieren. |
| **PEG-FR-004** | Jedes Finding muss Datenklasse, Span/Position, Confidence, Detector-/Rule-Version und vorgeschlagene Behandlung tragen. |
| **PEG-FR-005** | `PrivacyPolicyPack` muss Zweck, Rolle, Tenant, Account/Project, Anbieter, Region, Retention und erlaubte Transformationen auswerten. |
| **PEG-FR-006** | Die Decision Engine muss mindestens `ALLOW`, `ALLOW_SANITIZED`, `REQUIRE_REVIEW`, `LOCAL_ONLY` und `BLOCK` unterscheiden. |
| **PEG-FR-007** | Sanitization muss deterministisch ein `SanitizationManifest` mit Input-/Output-Hash und Transformation je Finding erzeugen. |
| **PEG-FR-008** | Pseudonym-Mappings müssen verschlüsselt, job-/purpose-scoped, zeitlich begrenzt und vom allgemeinen Audit getrennt gespeichert werden. |
| **PEG-FR-009** | Nicht sicher sanitizierbare oder policy-seitig lokale Daten müssen ohne externen API-Fallback an einen freigegebenen Local-Only-Model-Path geroutet werden können. |
| **PEG-FR-010** | Ausfall, unvollständiges Parsing oder unbekannte High-Risk-Klasse muss fail-closed behandelt werden. |
| **PEG-FR-011** | Responses müssen lokal gescannt und nur per gültigem `RehydrationGrant` rehydriert werden. |
| **PEG-FR-012** | Logs, Traces, Telemetrie und Error Reports dürfen keine Rohwerte, vollständigen Payloads oder Pseudonym-Mappings speichern. |
| **PEG-FR-013** | Nutzer müssen bei `REQUIRE_REVIEW` Findings, Transformationen, Zweck, Anbieterziel und Konsequenz verstehen und korrigieren können. |
| **PEG-FR-014** | Detector-, Rule-, Dictionary- und Policy-Versionen müssen offline gegen repräsentative deutsche und englische Dokumentklassen evaluiert werden können. |
| **PEG-FR-015** | Provider SDKs, Harnesses und Connectoren müssen direkte Endpunkte blockieren, wenn kein gültiger Gateway-/ModelGateway-Pfad vorliegt. |
| **PEG-FR-016** | Jede Egress-Entscheidung muss mit ModelRequest, HarnessRun, ResultBundle und Audit-Korrelation verknüpft sein, ohne den sensitiven Payload zu replizieren. |
| **PEG-FR-017** | Privacy Egress und Reuse-/Rights-Governance müssen getrennte Decisions bleiben und für Cross-Account-Arbeit beide erfolgreich sein. |
| **PEG-FR-018** | Tenant-Admins müssen Policies, Anbieter/Regionen, lokale Routes, Dictionary Sources und Review-Rollen versioniert konfigurieren können. |

---

## 9. UX- Und Workflow-Anforderungen

Der Gateway darf nicht als weiteres Pflichtmodul im Alltag erscheinen. Er arbeitet standardmäßig im Hintergrund und projiziert nur Ausnahmen in bestehende Frames:

- `ALLOW`/`ALLOW_SANITIZED`: nicht-blockierende Statusanzeige im Trust Drawer; Detail auf Anfrage.
- `REQUIRE_REVIEW`: ein klarer Queue-/Decision-Task mit markierten Findings, vorgeschlagener Transformation, Anbieterziel und einer primären Entscheidung.
- `LOCAL_ONLY`: erklärt, warum die Aufgabe lokal ausgeführt wird und welche Einschränkungen daraus folgen.
- `BLOCK`: benennt konkrete Reason Codes und sichere Alternativen; kein generisches „Compliance Error“.
- Nutzer sehen nur Findings, die sie gemäß Rolle und Zweck sehen dürfen; ein Reviewer erhält nicht automatisch Zugriff auf alle Originalwerte.
- Ein korrigiertes False Positive verbessert ein tenant-spezifisches Dictionary erst nach kontrollierter Freigabe, nicht automatisch aus beliebigem Nutzerfeedback.

Die häufigste sichere Interaktion ist **keine zusätzliche Interaktion**: Consultry minimiert und pseudonymisiert automatisch innerhalb einer genehmigten Policy. Nur echte Unsicherheit oder verbotener Inhalt unterbricht den Arbeitsfluss.

---

## 10. Abhängigkeiten Und Ownership

| Kontext | Liefert | Konsumiert | Ownership-Grenze |
|---|---|---|---|
| **Document/Corpus Ingest** | Parser/OCR, Struktur, Source Spans, File Hash | Scan-/Sanitization-Ergebnis | entscheidet keine Egress-Policy |
| **Consulting Context Graph** | Account/Project/Contract/DataClass/Relationships | metadata-only Decision/Lineage | gibt keinen vollständigen Graphen an Detector oder Modell frei |
| **Consultry Engine / HarnessPack** | Zweck, Rolle, Job, ContextPack, Tool-/Provider-Ziel | `EgressDecision`, sanitizierter Envelope, lokale Route | darf Gateway nicht umgehen |
| **ModelGateway** | Anbieter-/Modell-/Region-/Retention-Fähigkeiten | nur freigegebene `ModelRequestEnvelope`s | besitzt keine Rehydration Tokens |
| **Local Harness / Local Inference** | kontrollierte lokale Ausführung | `LOCAL_ONLY` Jobs | kein stiller externer Fallback |
| **Governance / Tenant Admin** | Policies, Review-Rollen, Provider-/Region-Allowlist | Findings, Decision Reports | kann Detector Finding prüfen, aber nicht technische Evidence überschreiben ohne Audit |
| **Audit / Observability** | Korrelation, Append-only Events, System Health | Hashes, Counts, Reason Codes, Versionen | keine sensitiven Rohpayloads |
| **Contract / Rights / Reuse** | Confidentiality, IP, Usage Rights, ReuseScope | DataClass-/Privacy Findings | Privacy-Sanitization erzeugt keine Wiederverwendungsrechte |
| **Security / Key Management** | Schlüssel, Secret Detection, Vault Policies | Security Findings, Rotation Events | Token Vault bleibt von allgemeiner App-Datenbank getrennt |

---

## 11. Nichtfunktionale Anforderungen Und Eval

- **Detection quality:** Evaluation getrennt nach Datenklasse, Dokumenttyp, Sprache und Scan-Layer; False-Negative-Risiko ist wichtiger als ein globaler Accuracy-Wert.
- **Coverage visibility:** Parser-/OCR-Lücken und nicht gescannte Container/Anhänge werden explizit ausgewiesen.
- **Latency budget:** synchrone Interaktionen benötigen inkrementelles Scanning und Cache nur auf exaktem Payload-/Policy-/Version-Hash; Sicherheit darf nicht durch veraltete Freigaben übersprungen werden.
- **Isolation:** Detector, Token Vault und Local Inference sind tenant-/job-isoliert; Model Weights und Runtime besitzen keinen Public Egress.
- **Supply-chain integrity:** Model-/Rule-/Dictionary-Artefakte sind signiert, versioniert und reproduzierbar deploybar.
- **Adversarial robustness:** Tests umfassen Obfuscation, OCR-Artefakte, Tabellen, Kommentare, eingebettete Dateien, prompt injection, secret splitting und indirekte Identifizierbarkeit.
- **Deletion/retention:** Originale, Mappings, Manifeste und Audit-Metadaten haben getrennte Retention Policies; DSAR-/Legal-Hold-Prozesse dürfen nicht durch Tokenisierung unauflösbar werden.
- **Observability:** Health/latency/error metrics ohne Dokumentinhalte; fehlender Scanner ist ein sichtbarer Systemzustand und kein stiller Degradation Mode.

### 11.1 Mindest-Eval-Slices Vor Aktivierung

1. deutsche und englische Vertrags-/SOW-Dokumente;
2. Projektstatus, Meeting Notes und E-Mails;
3. CVs, Profile, Zertifikate und Skill-Dokumente;
4. Rechnungen, Belege und Commercial/Finance-Tabellen;
5. Quellcode, Konfigurationen und Architektur-/Security-Dokumente;
6. gescannte PDFs, Bilder, Kommentare und eingebettete Anhänge;
7. kundenspezifische Namen/Codenames aus Tenant Dictionaries;
8. Cross-Account-Reuse- und Assetization-Fälle.

---

## 12. Strikte Trennung Vom PoC/MVP Und Optionale Spätere Realisierung

### 12.1 Für PoC/MVP ausreichend und unverändert

- bevorzugt Microsoft Foundry / Azure AI Foundry mit GPT-5.6 (`gpt-5.6-sol` für PMF-kritische komplexe Jobs); Bedrock bleibt unterstützte Alternative/Fallback-Basiskomponente;
- gemeinsamer Grund-Compliance-Contract aus Enterprise-Vertrag/AVV-DPA, No-Training, vereinbarter Region/Retention, IAM/Tenant-Isolation und Audit;
- job-scoped HarnessPack, ModelGateway, SourceBinding, Faithfulness, Approval und Audit;
- GI-5-Sanitization für externe Research-Queries;
- keine ungeprüften Provider-SDK-Pfade außerhalb der akzeptierten Architektur.

Diese Managed-Cloud-Posture ist eine bewusste Product-Scope-Entscheidung: Viele Zielkunden betreiben ihre Unternehmensdaten bereits auf AWS, Azure oder vergleichbaren Enterprise-Clouds. Der zusätzliche self-hosted Detector/Gateway ist daher **keine** Voraussetzung für den aktuellen PoC/MVP.

### 12.2 Explizit nicht Teil des aktuellen MVP-Builds

- vollständiger self-hosted multilingual Sensitive-Data Detector;
- flächendeckender Gateway für alle Model-/Embedding-/Trace-/Eval-Pfade;
- Token Vault und automatische lokale Rehydration;
- Local-Only-Inference-Routing für sämtliche Dokumentklassen;
- Tenant Dictionary Studio und Privacy Review Workspace;
- produktionsreife adversarial/privacy Eval Suite.

### 12.3 Aktivierungs-Gates Nur Bei Späterer Priorisierung

Eine Realisierung wird erst bei belegtem späterem Kunden-/Sovereignty-Bedarf bewertet und nicht automatisch aus diesem Dokument abgeleitet. Dann benötigt ein Rollout mindestens:

1. validierte Kundenanforderung und dokumentierte Datenklassen;
2. gewählte Deployment-Grenze: Consultry-managed private EU runtime, customer-side appliance oder Local Harness;
3. Provider-, Vertrags-, Region- und Retention-Policy je Tenant;
4. repräsentative Eval-Slices und akzeptierte Risk Thresholds;
5. Fail-closed-, Outage- und Local-Only-Fallback-Tests;
6. Security-/Privacy-/Legal-Review sowie klaren Betriebsowner;
7. separate ADRs für Gateway Enforcement, Token Vault und Local Inference, sobald die Implementierung festgelegt wird.

---

## 13. Akzeptanzszenario — ERP-Migrationskontext

1. Ein Consultant startet aus einem Hansa-S/4HANA-Projekt einen Concept-/Analysis-Job mit Meeting Notes, SOW und Datenmigrations-Workbook.
2. Local Parser/OCR erkennt Tabellen, Kommentare und eingebettete Inhalte; ein nicht lesbarer Anhang wird als Coverage Gap markiert.
3. Deterministische Regeln finden E-Mails und ein Credential; das self-hosted Modell erkennt Personen, Werkstandort, Projektnamen und vertrauliche Timeline-Details; Tenant Dictionary erkennt den internen Codename.
4. Das Credential führt zwingend zu Blockierung des betroffenen Spans und Security Finding. Namen/Codenames werden job-scoped pseudonymisiert; exakte Rate und Werkdetails werden entfernt oder generalisiert.
5. Der unlesbare Anhang verhindert `ALLOW`; der Nutzer kann ihn entfernen, lokal prüfen oder den gesamten Job `LOCAL_ONLY` ausführen.
6. Nur der sanitizierte, für den konkreten Drafting-Zweck minimale `ModelRequestEnvelope` wird an den freigegebenen externen Modellpfad gesendet.
7. Die Antwort wird lokal gescannt, genehmigte Tokens werden für den berechtigten Consultant rehydriert und der Draft durch SourceBinding/ResultVerifier geprüft.
8. Audit speichert Decision, Hashes, Klassen/Counts, Policy-/Detector-Version und Korrelation — nicht die Originalnamen, Credentials oder Token-Mappings.
9. Derselbe Payload darf nicht automatisch für Research, Support, Evaluation oder Cross-Account-Reuse verwendet werden; dafür sind neue Purpose-/Rights-/Egress-Decisions erforderlich.

---

## 14. Offene Implementierungsentscheidungen

Diese Punkte sind bewusst **nicht** durch die Product Vision hartgesetzt:

- konkretes self-hosted Detector-Modell und Runtime;
- Consultry-managed EU private runtime versus customer appliance versus lokaler Desktop-/Server-Harness;
- exakte Schwellenwerte je Datenklasse und Dokumenttyp;
- Umfang lokaler Inference für Jobs, die nicht sanitizierbar sind;
- Token-Vault-Technologie, HSM/KMS-Grenze und Retention;
- Mandantenkonfiguration versus Consultry Defaults;
- Performance-/Kostenmodell und Lizenzierung des Gateways.

Diese Entscheidungen benötigen aktuelle technische Evaluation, Kundendatenklassen und eine eigene Architekturentscheidung. Der Produktvertrag—kein externer Egress ohne lokale Decision—bleibt davon unabhängig.

---

*Ende v0.1 — separate Future-Architecture-Notiz ohne Auswirkung auf PoC/MVP oder Product Vision v2.7. Ein PII-Erkennungsmodell wäre nur eine Komponente; priorisiert wird der Layer erst bei belegtem späterem Sovereignty-/Kundenbedarf.*
