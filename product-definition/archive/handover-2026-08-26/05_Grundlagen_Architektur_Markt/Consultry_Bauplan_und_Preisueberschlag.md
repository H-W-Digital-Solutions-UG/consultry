# Consultry: technischer Bauplan und Preisüberschlag

Alle Zahlen sind Überschlag mit gekennzeichneten Annahmen (Abschnitt 9), Preise recherchiert am 16. August 2026. Umrechnung 1 $ ≈ 0,90 € als Planungsannahme. Kein Ersatz für den Finanzplan, aber belastbar genug für Bauentscheidung und Investorengespräch.

**Die Kurzantwort in drei Zahlen:** Der Sitz kann für 119 bis 149 € verkauft werden, Consultrys eigene COGS liegen in allen Wegen bei 20 bis 30 € je Sitz (nur Support und Versionspflege, denn Inferenz und Infrastruktur laufen in Kundenverträgen: dort 14 bis 80 € je Sitz, fallend mit der Flottengröße), und der Break-even inklusive schlankem Team liegt bei ungefähr **15 bis 25 Kunden**. Reine Infrastruktur trägt sich ab 1 bis 2 Kunden, denn **Consultry hostet keine Kundeninhalte auf eigener Infrastruktur**: Auch der dedizierte GPU-Sockel (rund 1.000 bis 1.600 € je Monat) läuft im Vertrag des Kunden und wird von Consultry nur ausgerollt und betrieben. Teuer wird nur ein Frontier-8x-Knoten zu früh, und den sieht dieser Plan nicht vor.

---

## 1. Bauplan Weg A: im Azure-Tenant des Kunden (der Standard)

Je Kunde eine Resource Group, ausgerollt als versioniertes Bicep- oder Terraform-Template. Inhalt:

**Container Apps Environment** (skaliert auf null, kein AKS-Betriebsaufwand) mit vier Containern:

- `gateway`: dünner Modell-Router auf LiteLLM-Basis oder eigenentwickelt. Zieht die signierte Routing- und Policy-Tabelle aus der Steuerungsebene, ruft ausschließlich Endpunkte im Tenant auf, setzt die Datenklassen-Policy durch. Kein Agenten-Code spricht je direkt mit einem Provider.
- `workers`: Ingest über Microsoft Graph (SharePoint und OneDrive Delta-Sync, Berechtigung Sites.Selected, also nur explizit freigegebene Sites), Chunking, Embedding-Aufrufe, Re-Indexing. Dazu die Korpus-Kompilierung: Aus der menschenlesbaren Basis werden agentenlesbare Kontextpakete abgeleitet (27B, delta-getrieben, nie handgepflegt); der Drift-Wächter meldet Abweichungen und Quellen-Widersprüche als Findung an den fachlich Zuständigen.
- `filter`: die Kontextschleuse. Deterministische Erkenner (Presidio plus eigene Regeln) und das tenant-lokale 27B als semantischer Klassifikator, beim Ingest und noch einmal am fertig zusammengebauten Kontext. Grundregel: Kein Datum reist auf einer Route unter seiner Klasse; Entscheidungen in fester Reihenfolge entfernen, pseudonymisieren, hochstufen, blockieren, je Lauf im Audit bilanziert. Pseudonym-Zuordnung liegt im Key Vault des Kunden, nie zentral.
- `orchestrator`: die eigene Workflow-Runtime, Kern-IP von Consultry: vordefinierte Abläufe je Rolle und Aufgabe, mit Failsafes, Selbstvalidierung und Guardrails, gekapselt hinter dem Gateway.
- `connector` (optional, on-prem beim Kunden): liest Fileserver und DMS mit Leserechten je Freigabe, erbt die Dateisystem-Berechtigungen, verbindet sich ausschließlich ausgehend in den Tenant des Kunden und wird wie alles andere versioniert per Pull aktualisiert.

**Azure Database for PostgreSQL Flexible** (kleine B-Serie) mit pgvector als Index und Audit-Log (Append-only-Tabelle, Export in unveränderlichen Blob-Storage). **Key Vault** für Schlüssel und Pseudonym-Map, **Storage Account** für Artefakte, **Log Analytics** nur an den Kunden. **Foundry**: Modell-Deployments im Tenant, EU-Region oder EU-Datenzone, Abuse-Monitoring-Opt-out als fester Onboarding-Schritt; das Embedding-Modell läuft ebenfalls im Tenant, Embeddings sind Daten. Für K4-Klartext kommt eine tenant-lokale GPU-VM mit Qwen3.8 27B dazu (offene Gewichte, vLLM, scale-to-zero; Baustein 8 im Architektur-Papier). **Entra**: Multi-Tenant-App für SSO, Worker unter Managed Identities.

Kostenwirkung: Der Kunde trägt die Azure-Basiskosten von grob 150 bis 400 € je Monat plus seine Token (Überschlag 10 bis 60 € je Berater und Monat, je nach Modellwahl, läuft oft gegen sein bestehendes Azure-Commitment). Consultry trägt hier fast nichts.

**Wenn der Kunde noch kein Azure hat:** Fast jeder Zielkunde hat M365, und damit denselben Vertragspartner und dieselbe Microsoft-Datenschutzvereinbarung (DPA), die auch Azure-Dienste abdeckt. Der Onboarding-Handgriff ist dann nur: eine Azure-Subscription im bestehenden Entra-Tenant anlegen (Runbook-Schritt, ein halber Tag, auf Wunsch über den CSP-Partner des Hauses). Kein neuer Vertragspartner, kein neuer Datenraum; die sensibelsten Dokumente des Hauses liegen heute schon in SharePoint, Azure ist derselbe Vertrauensraum. Sprachdisziplin dazu: nicht „Sie haben schon eine AVV mit Azure" sagen, sondern präzise „gleicher Vertragspartner, gleiche Datenschutzvereinbarung, neue Subscription"; den konkreten Vertragsweg (EA, MCA, CSP) je Kunde einmal juristisch bestätigen lassen. Häuser ganz ohne Microsoft nehmen die AWS- oder die EU-Ausprägung; dort entsteht wirklich eine neue Grenze, aber eine kundeneigene, europäisch wählbare und dokumentierte, womit das präzise Versprechen trägt: Kein Datum verlässt das Haus auf einem Weg, den der Kunde nicht kennt und nicht freigegeben hat.

**Wenn die sensiblen Dokumente nicht in M365 liegen:** Realistisch für einen Teil der Zielkunden: Alltag in M365, Sensibles auf dem Fileserver, im DMS (DATEV, ELO, d.velop) oder gleich in Umgebungen des Mandanten (Datenräume, dessen Tenant). Eine belastbare Marktquote dafür existiert nicht, also wird sie ab dem Design-Partner erhoben. Das Modell bricht daran nicht, es routet anders, in vier Punkten: Erstens ist der Kernkorpus von Consultry ohnehin das Firmengedächtnis der Beratung (Angebote, Methoden, Vorlagen, Projektberichte), und das liegt bei IT-nahen Häusern fast immer in M365; Mandanten-Rohdaten braucht die Masse der Zuarbeit gar nicht. Zweitens ist die **Lokal-Spur** Standardvariante des Modells: Der On-Prem-Connector bindet Fileserver und DMS an, und für alles aus lokalen Quellen gilt die Quellbindung: **Diese Jobs rechnen vollständig auf dem Consultry-verwalteten 27B im Kunden-Tenant**, nie auf Frontier-Modellen, nie serverless; pseudonymisierte Hochstufung nur per expliziter Freigabe je Quelle, Standard aus. Drittens je Quelle zwei Modi: **ephemer** als Default (nur Struktur und Metadaten im Index, Volltext wird zur Laufzeit geholt, auf dem 27B verarbeitet, nichts persistiert) oder **indexiert** als Opt-in (Volltext und Embeddings in den Tenant-Index). Wem selbst die transiente Verarbeitung im eigenen Tenant zu weit geht, für den bleibt die strikte Ausbaustufe: das 27B als On-Prem-Instanz neben dem Fileserver (Weg C light), die KI zum Wissen, wörtlich. Viertens die Vertriebsdisziplin: Das Argument „liegt doch heute schon in SharePoint" nur benutzen, wenn die Discovery es bestätigt hat. Zweite Discovery-Frage deshalb: **„Wo liegen eure Projektdokumente wirklich?"** (M365 / Fileserver oder DMS / beim Mandanten).

## 2. Bauplan Weg B: dediziert im Kundenvertrag, serverless die Ausnahme

Zwei Präzisierungen zuerst. Erstens: **Serverless heißt geteilte Infrastruktur.** Im Nebius AI Studio laufen Prompts über gemeinsame Endpunkte; Nullspeicherung ist dort eine Vertragsklausel, keine Bauweise. Zweitens: **Consultry hostet nichts selbst.** Auch in Weg B gehören alle inhaltsführenden Verträge dem Kunden; Consultry rollt aus und betreibt per delegiertem Zugriff, wie in Weg A. Daraus ergeben sich zwei Betriebsformen, erzwungen durch die Datenklassen-Policy im Gateway:

**B-dediziert, der Normalfall für vertrauliche Klassen (K3, K4).** vLLM läuft auf einer dedizierten GPU-Instanz **im eigenen Konto der Beratung** (Nebius oder vergleichbarer EU-Anbieter, kontrahiert auf den Namen des Kunden, von Consultry per Template eingerichtet und betrieben). Der GPU-Anbieter ist Subprozessor des Kunden, kein Dritter sieht Prompts, keine Inhaltslogs, Nullspeicherung als Bauweise. Startgröße: **eine H200-Instanz** mit Geschäftszeiten-Autoscaling (rund 240 Betriebsstunden je Monat, Spot mit On-Demand-Fallback, vorgewärmt ab 7 Uhr), überschlägig **1.000 bis 1.600 € je Monat auf der Rechnung des Kunden**, rund um die Uhr on-demand wären es rund 3.000 €. Darauf läuft die 70B-Klasse (Qwen, Llama, GLM-Mittelklasse) in FP8, die nach Eval-Harness die Masse der Zuarbeit trägt. Konservativ versorgt eine Instanz 50 Sitze; der Engpass ist Burst-Latenz, nicht Durchsatz. Ab gut zehn Sitzen ist der Sockel kleiner als die Sitzpreise daneben, die Rechnung läuft direkt zwischen Beratung und Anbieter.

**B-serverless, nur für unkritische Klassen (K1, K2) und als Preiseinstieg.** Token-weise ab 0,08 $/M (Mittelklasse um 0,20 bis 0,36 $/M, Oberklasse 0,90 bis 1,06 $/M) **im kundeneigenen Studio-Konto**, API-Schlüssel im Key Vault des Kunden, vertragliche Nullspeicherung. Was der Kunde nicht ausdrücklich für geteilte Verarbeitung freigibt, kann diesen Weg technisch nie erreichen, und der Auditweg weist je Agentenlauf aus, auf welcher Betriebsform gerechnet wurde.

Gemeinsame Datenhaltung beider Formen: EU-Objektspeicher und Postgres im kundeneigenen Vertrag, Umschlagverschlüsselung mit kundeneigenem Schlüssel (BYOK).

**Die Frontier-offene Klasse (Kimi K3, 2,8-Billionen-MoE) bleibt die Ausnahme:** Dediziert bräuchte sie einen vollen 8x-Knoten (on-demand rund 26.000 $ je Monat, Spot rund 14.000 $), das lohnt erst ab vierstelligen Sitzzahlen. Bis dahin gibt es sie serverless für freigegebene Klassen (3,11 $/M) oder über Weg A im Kunden-Tenant. Für höchste Ansprüche steht als Roadmap-Option vertrauliches Rechnen (H100/H200-TEE, attestierte Enklaven) im Raum, als Option, nicht als Versprechen.

## 3. Steuerungsebene (Consultry zentral, EU)

Bewusst klein: eine Container-Umgebung plus verwaltetes Postgres in einer EU-Region (Azure Sweden oder Hetzner), GitHub Actions als CI, signierte Container-Releases in einer Registry. Kunden-Deployments **ziehen** Versionen, Consultry hat keinen stehenden Zugriff (Break-Glass nur mit Kundenfreigabe). Funktional: Routing- und Policy-Editor, Lizenz und Abrechnung, Health-Dashboard aus reinen Metriken. Laufende Kosten: 400 bis 800 € je Monat.

## 4. Aufwand und Zeitplan (Schätzung für 2 bis 3 Engineers)

| Monat | Meilenstein |
|---|---|
| 1 bis 2 | Gateway dünn (zwei Adapter: Foundry, ein Dev-Endpunkt), SharePoint-Ingest, pgvector, zwei Kern-Workflows, Audit-Log v1 |
| 3 | Bicep-Template gehärtet, Onboarding-Runbook, Filter v1, Entra-SSO, zwei Datenklassen (intern, vertraulich) |
| 4 | Pilot im Tenant des Design-Partners, Eval-Harness aus echten Aufgaben |
| 5 bis 6 | Weg B: vLLM-Dediziert-Sockel plus Studio-Adapter für freigegebene Klassen, BYOK, Mandantentrennung, Datenklassen-Policy v1 |

MVP Weg A also in 3 bis 4 Monaten, Weg B rund 6 bis 8 Wochen dahinter. Der Auditweg läuft ab Monat 1 mit, weil Nachrüsten das Teuerste an dieser Architektur wäre.

## 5. COGS je Sitz und Monat (Zielannahme: 25 Mio. Token je Berater und Monat)

| Posten | Weg A | Weg B |
|---|---|---|
| Inferenz | 0 € (zahlt Kunde in seiner Cloud) | 0 € für Consultry; beim Kunden: GPU-Sockel ≈ 80 / 32 / 16 € je Sitz bei 20 / 50 / 100 Sitzen, serverless (nur K1, K2) ≈ 14 € |
| Embeddings, Re-Indexing | 0 € | 0 € (kundeneigener Vertrag) |
| Hosting-Anteil (DB, Storage, Compute) | ≈ 0 € | ≈ 0 € (kundeneigener Vertrag) |
| Support und Versionspflege (kalkulatorisch, 3 bis 5 h je Kunde und Monat) | 20 bis 30 € je Sitz bei 10 Sitzen | 20 bis 30 € je Sitz bei 10 Sitzen |
| **Summe je Sitz (Consultry-COGS)** | **≈ 20 bis 30 €** | **≈ 20 bis 30 €** |

Der GPU-Sockel ist für den Kunden ein Flottenfixum, kein Mengenkostenfaktor: Ab gut zehn Sitzen ist er kleiner als die Sitzpreise daneben, ab rund 100 Sitzen kostet dedizierte Inferenz praktisch dasselbe wie serverless, bei der stärkeren Zusage. Für Consultry sind Support und Versionspflege in allen Wegen die einzige echte Software-COGS-Position; die Software-Marge liegt strukturell über 80 Prozent. Im Ein-Rechnungs-Standard kommt Infrastruktur als gedeckelter, separat ausgewiesener Durchlaufposten hinzu, bepreist über den All-in-Sitz.

## 6. Preisvorschlag

| Komponente | Weg A | Weg B | Weg C |
|---|---|---|---|
| Plattform je Beratung und Monat | 500 € | 750 € | ab 2.500 € |
| Sitz je Monat | 119 € | 149 € | individuell |
| Dedizierte Kapazität | entfällt | im Vertrag des Kunden | im Vertrag des Kunden |

Wertanker-Check: 119 € Sitz gegen rund 2.275 € freigelegte Kapazität je Berater und Monat sind gut 5 Prozent des geschaffenen Werts. Das ist die Verteidigungslinie gegen jeden Preiseinwand. ACV-Check: 15 Sitze Weg A ergeben rund 27.000 € je Jahr (passt zur 25.000-€-SAM-Annahme), 8 Sitze mit Einstiegskonditionen rund 15.000 € (passt zum blended Plan). Der 149-€-Sitz in Weg B bepreist Betrieb, Verantwortung und die stärkere Zusage, nicht Infrastruktur: GPU-Sockel und Token laufen im Vertrag des Kunden, ein Durchreichen mit Aufschlag entfällt.

**Abrechnung: zwei Tarife, ein Datenweg.** Abrechnungsweg und Datenweg sind getrennte Dinge; Geld darf über Consultry fließen, Daten nie.

- **Tarif „Alles aus einer Hand" (Standard):** Modell-, Token- und Infrastrukturkosten laufen generell über die Consultry-Rechnung, denn das ist für den Kunden das einfachste Erlebnis: ein Preis, alles drin. Mechanik: Die Consultry-verwaltete Subscription im Tenant des Kunden hängt am CSP-Kanal (Consultry als indirekter Reseller über einen Distributor); alles andere im Tenant bleibt unberührt, parallele Subscriptions und bestehende Verträge inklusive. Tenant, Datenraum und Microsoft-DPA bleiben beim Kunden, nur die Rechnung kommt von Consultry. Verpackt als All-in-Sitzpreis (Zielpreise: 149 € Weg A, 189 € Weg B) mit Inklusivkontingent von 25 Mio. Token je Sitz und Monat, Staffel darüber, jährlicher True-up.
- **Tarif „Eigene Cloud-Rechnung" (Option):** für Häuser mit bestehendem Azure-Commitment, auf das der Verbrauch einzahlen soll, oder mit eigener Einkaufslandschaft: Plattform und Sitze von Consultry (119 beziehungsweise 149 €), Verbrauch direkt beim Kunden; optional die Consultry-Gebühr als transaktierbares Marketplace-Angebot über die Microsoft-Rechnung, anrechenbar aufs Commitment.
- **Option „Enklave" (Stufe 3, buchbar):** K4- und Lokal-Spur-Verarbeitung in attestierten Confidential-GPU-Enklaven im Kunden-Tenant (NCC-H100-v5-Klasse, Schlüsselfreigabe nur nach Attestierung, Betreiberzugriff technisch ausgeschlossen). Zielpreis gestaffelt: ab 490 € je Monat (bis 50 Sitze, Spot-Profil mit On-Demand-Fallback) bis 2.500 € (bis 200 Sitze, zwei Enklaven samt Betrieb); im Options-Tarif als Durchreiche. Bewusst eine Option ab mittlerer Kundengröße, kein Standard: Der K4-Default auf der normalen Tenant-GPU (ab ≈ 150 € je Monat im Spot-Profil) reicht für die meisten Häuser, die Enklave kauft nur, wer „technisch ausgeschlossen" statt „vertraglich zugesichert" braucht. Technisch ein SKU-Wechsel, keine Architekturänderung.

Ehrlichkeit zum Standard-Tarif: Er holt einen gedeckelten Infrastruktur-Durchlaufposten in die eigene Rechnung, mit Forderungsrisiko (Consultry schuldet dem Distributor unabhängig vom Zahlungseingang), CSP-Support-Pflichten und einstelliger Resale-Marge. Im Reporting läuft dieser Anteil deshalb als eigene, niedrigmargige Zeile, damit die Software-Marge über 80 Prozent sichtbar bleibt; der Verbrauchsdeckel je Sitz begrenzt das Risiko, der Verbrauchskalkulator wird zum internen Pricing-Werkzeug. CSP-Bezug zählt in der Regel nicht auf bestehende Azure-Commitments, genau dafür gibt es die Option. Reseller-Zugriffe (GDAP) folgen demselben Rollenschnitt wie Lighthouse: Betrieb ja, Data-Plane nein. Für die EU-Ausprägung je Anbieter prüfen, ob ein Reseller-Programm die Endkunden-AVV erhält, sonst dort getrennte Rechnung. Der CSP-Kanal wird zum ersten zahlenden Kunden aufgesetzt (indirekter Reseller ist bewusst die leichtgewichtige Variante); bis dahin überbrückt die Option.

**Rechenbeispiel 200 Sitze (Weg A, All-in, mit Option Enklave), Überschlag:** Sitze 200 × 149 € Liste, mit Volumenstaffel blended ≈ 130 € → ≈ 26.000 € je Monat; Plattform 500 €; Option Enklave 2.500 € → **Consultry-Rechnung ≈ 29.000 € je Monat, ≈ 350.000 € ACV**. Darin enthaltener Infrastruktur-Durchlauf (über den CSP-Kanal eingekauft): Token ≈ 2.800 bis 8.000 €, Basis-Infrastruktur ≈ 1.000 €, zwei NCC-Enklaven im Geschäftszeiten-Profil ≈ 700 € (Spot) bis 3.900 € (on-demand). Wertanker: 200 Sitze legen ≈ 455.000 € Kapazität je Monat frei (Zielannahme), die Rechnung ist gut 6 Prozent davon. Sizing-Annahme: rund ein Viertel der Last läuft auf dem 27B, zwei Enklaven tragen das im Geschäftszeiten-Profil mit Reserve (n+1); ab dem Piloten messen. Einordnung: 200 Sitze sind das obere Ende des Zielsegments, der Beleg dafür, dass das Modell dorthin skaliert, ohne die Architektur zu wechseln.

## 7. Break-even: das X

Deckungsbeitrag je Durchschnittskunde (10 Sitze): Weg A rund 1.400 bis 1.500 € je Monat (Marge um 85 Prozent), Weg B rund 1.900 bis 2.000 € (über 85 Prozent, GPU-Sockel und Token liegen beim Kunden). Planungswert blended konservativ: **1.450 € je Kunde und Monat**.

| Schwelle | Fixkosten je Monat | X (Kunden) |
|---|---|---|
| Infrastruktur trägt sich | ≈ 1.500 bis 2.000 € (Steuerungsebene, CI, Dev-GPU, Tools); Kundeninhalte hostet Consultry nirgends | **1 bis 2** |
| Team trägt sich (2 Gründer bescheiden, 1 Engineer, Nebenkosten) | ≈ 23.000 bis 25.000 € | **16 bis 17** bei Ø 10 Sitzen, **bis ≈ 23** bei kleinerem Kundenmix (blended ACV 15.000 €) |

Also: **X ≈ 15 bis 25 Kunden**, das entspricht grob 150 bis 220 Sitzen. Bei einer Rampe von ein bis zwei Neukunden je Monat ab Monat 5 liegt die kumulierte Lücke bis zum Break-even überschlägig zwischen 200.000 und 350.000 €. Der Ask von 500.000 € trägt das mit Reserve für Team-Ausbau, und die Reihenfolge des Plans (Weg A zuerst, GPU-Sockel und Token immer im Kundenvertrag) hält die Lücke klein, weil das teuerste Kostenrisiko, die Token, in Weg A gar nicht in eurer GuV liegt.

Die ehrliche Fassung deiner Vermutung lautet daher: Ja, bis zum Team-Break-even ist es unprofitabel, das ist bei rund 23.000 € Monatsburn unvermeidlich. Aber es gibt keinen infrastrukturellen Grund für Unprofitabilität. Jeder Kunde ist ab Tag 1 deckungsbeitragspositiv, auch auf Weg B.

## 8. Was diesen Überschlag kippen könnte

Erstens ein Agentenverbrauch weit über 25 Mio. Token je Sitz (Gegenmittel: Verbrauchsdeckel je Sitz plus Fair-Use, Messung beim Design-Partner ab Monat 4). Zweitens Support-Aufwand über 5 h je Kunde und Monat in fremden Tenants (Gegenmittel: Runbook, Template-Disziplin, Gesundheits-Telemetrie). Drittens Preisverfall der Sitze im Wettbewerb (Gegenmittel: der Auditweg und die Tenant-Architektur sind das, was Billiganbieter nicht kopieren, verkauft wird Verschwiegenheit, nicht Token).

## 9. Zentral im Consultry-Tenant? Betrieb ja, Daten nein

Die naheliegende Frage: alles in einem Consultry-Azure-Tenant aufsetzen und nur an den Kunden-Tenant anbinden. Die Antwort braucht eine Trennung von drei Dingen, die im Wort „zentral" zusammenfallen:

**Steuerung zentral: ja, ist sie schon.** Workflow-Definitionen, Policies, Lizenz, Releases liegen in der Steuerungsebene bei Consultry.

**Betrieb zentral: ja, und zwar ohne Datenumzug.** Das ist der eigentliche Wunsch hinter der Frage (Verwaltungsaufwand), und Azure hat dafür die passenden Mechanismen: **Azure Lighthouse** gibt Consultry delegierten, rollenbasierten Zugriff auf die Kunden-Deployments aus dem eigenen Tenant heraus, alle Kunden in einer Ansicht, jede Aktion im Log des Kunden, jederzeit widerrufbar. Ergänzt um **Azure Managed Applications** (zentral ausgerollte Updates in die Kunden-Subscription) und die Multi-Tenant-Entra-App für SSO. Wichtig ist der Rollenschnitt: Betriebsrollen auf die Infrastruktur, keine Data-Plane-Rollen auf Storage und Key Vault; Zugriff auf Inhalte gibt es nur per Break-Glass mit Kundenfreigabe. Damit sinkt der Betriebsaufwand je Kunde Richtung Flottenbetrieb, ohne dass ein Inhalt den Kunden-Tenant verlässt.

**Verarbeitung der Inhalte zentral: nein.** Sobald Consultrys Tenant Kundeninhalte verarbeitet, ist die weitere Grenze überschritten, auch wenn die Speicherung beim Kunden bliebe; Verarbeitung ist datenschutzrechtlich eine Grenze, nicht erst die Ablage. Die Folgen wären konkret: je Deal eine neue AVV-Verhandlung über Inhalte (Wochen im Vertriebszyklus statt Tage), die Token-Kosten wandern in die eigene GuV, und der stärkste Differenzierer fällt, Consultry wäre einer von vielen Wrappern mit US-Modellen unter eigenem Vertrag. Gespart würden dafür nur wenige Support-Stunden, die Lighthouse ohnehin einspart.

Und für Kunden ganz ohne eigene Cloud gilt dasselbe Muster: Weg B heißt kundeneigener EU-Vertrag (GPU-Instanz oder Studio-Konto auf den Namen der Beratung), von Consultry eingerichtet und per delegiertem Zugriff betrieben. Consultry hostet in keiner Variante Kundeninhalte; ein „Consultry-Azure-SaaS" wäre die schwächste aller Varianten, dieselbe Betriebslast, aber die schlechtere Vertrauensgeschichte.

---

## 10. Investoren-Einwände und die Antworten

**„Das kann die Beratung doch selbst bauen."** Der Prototyp: ja, in Wochen. Das Produkt: nein. Selbermachen heißt dauerhaft zwei bis drei Engineers (überschlägig 540.000 € Arbeitgeberkosten je Jahr) für Eval-Harness, Filter, Datenklassen, Audit-Export, Modellpflege und Updates, gegen rund 27.000 € ACV bei uns, Faktor zwanzig. Dazu die Opportunitätskosten: Die Stunden dieser Leute wären beim Zielkunden fakturierbar (162,50 €/h). Und interne Werkzeuge sterben nach Version 1, weil kein Team dahintersteht, während sich Modelle, Preise und Rechtslage monatlich bewegen. Wir verkaufen nicht das Aufsetzen der Grenze, sondern ihre Pflege im Abo. Kernsatz: Selber machen heißt, ein zweites Produkt neben dem eigenen Geschäft zu betreiben.

**„Macht Microsoft das nicht selbst, Stichwort Copilot?"** Copilot ist generische Assistenz je Nutzer. Consultry ist der rollenübergreifende Arbeitsablauf der Beratung mit Freigaben, Audit und Deliverable-Qualität, also Fachlogik, die Microsoft nicht baut. Und unsere Gateway-Ebene ist bewusst anbieteroffen (Foundry heute, Bedrock, EU-Gewichte): Diesen Schritt kann Microsoft nicht mitgehen, ohne das eigene Lizenzgeschäft zu relativieren. Microsoft verdient an der Lizenz, wir am gelungenen Projekt.

**„Deployments je Kunde skalieren nicht, das ist Dienstleistung mit Software dran."** Das Muster ist erprobt (Databricks, Elastic, Confluent): ein Codepfad, versionierte Templates, Pull-Updates, Lighthouse als Flottenkonsole. Die Messgrößen dafür stehen im Plan: Onboarding unter einem Tag, Support unter fünf Stunden je Kunde und Monat, Bruttomarge über 80 Prozent trotz Tenant-Modell. Genau dieser Betriebsaufwand ist zugleich der Burggraben: Wrapper scheuen ihn.

**„Die Token-Kosten fressen euch die Marge."** Nein, sie sind ein gedeckelter Durchlaufposten: Im Ein-Rechnungs-Standard kauft Consultry den Verbrauch über den CSP-Kanal ein (14 bis 80 € je Sitz, fallend mit der Flotte) und verkauft ihn im All-in-Sitz mit Inklusivkontingent und Staffel darüber; das Risiko trägt der Deckel, nicht die Marge. Im Reporting läuft der Anteil separat, die Software-Marge über 80 Prozent bleibt sichtbar. Wer ein Azure-Commitment hat, nimmt die Option mit eigener Cloud-Rechnung, dann berühren Token unsere GuV gar nicht.

**„Der Privacy-Weg kostet Qualität, offene Modelle sind schlechter."** Die Frontier-Klasse offener Gewichte ist da (Kimi K3). Das Routing entscheidet ein Eval-Harness aus echten Beratungsaufgaben, keine Ideologie. Und wo ein Kunde geschlossene Spitzenmodelle will, bekommt er sie im eigenen Tenant (Weg A), je Datenklasse konfiguriert.

**„Der Betrieb in fremden Tenants frisst euch auf."** Kalkulatorisch mit drei bis fünf Stunden je Kunde und Monat eingepreist, technisch adressiert mit Lighthouse, Runbook und Gesundheitstelemetrie ohne Inhalte. Die Kennzahl wird ab dem Design-Partner gemessen.

**„Wer haftet bei einem Vorfall?"** Je Weg eine klare Shared-Responsibility-Matrix, der dokumentierte Datenweg ist als Auditweg Produktbestandteil. ISO-27001- beziehungsweise SOC-2-Pfad nach der Runde; bis dahin gilt das präzise Versprechen statt eines Zertifikatsversprechens.

**„Wenn der Agent so viel übernimmt, brauchen Beratungen weniger Berater, euer Markt schrumpft."** Der Markt zeigt das Gegenteil: KI-Beratung wächst rund zwanzig Prozent jährlich, die Arbeitslast bleibt hoch, weil Fragestellungen komplexer werden, und 43 Prozent der Häuser geben Effizienzgewinne bislang nicht über Preise weiter, die freigelegte Zeit wird fakturierbar weiterverkauft (Lünendonk 2026). Unsere Leitplanke „befähigen, nicht ersetzen" ist außerdem Adoptionsstrategie: Gekauft wird Consultry von der Geschäftsführung, benutzt von Beratern. Ein Werkzeug, das seine Nutzer bedroht, wird intern beerdigt; eines, das ihnen die Arbeit zurückgibt, tragen sie selbst ins Haus.

**„Und wenn der Kunde kündigt?"** Dann behält er alles, Index, Logs und Artefakte liegen in seinem Tenant. Der saubere Exit ist Teil der Vertrauensgeschichte. Gehalten wird der Kunde durch Workflows, Evals und Updates, nicht durch Geiselhaft der Daten.

---

## 11. Annahmen und Quellen

- **25 Mio. Token je Berater und Monat**: Zielannahme, bewusst großzügig (rund 20 Agentenläufe je Arbeitstag à 60.000 Token blended). Ab Pilot durch Messung ersetzen.
- **Modellmix 70/25/5** (Mittelklasse, Oberklasse, Frontier-offen) ergibt 0,62 $ je Mio. Token blended. Die Studio-Preise sind blended-Angaben des Anbieters (inklusive Cache-Anteil); reale Agentenlasten können abweichen.
- **Nebius AI Studio, Stand 16.08.2026**: Kimi K3 3,11 $/M, GLM-5.2 1,06 $/M, DeepSeek V4 Pro 0,90 $/M, Qwen3.5 0,36 $/M, DeepSeek V4 Flash 0,20 $/M, Einstiegsmodelle ab 0,08 $/M (artificialanalysis.ai).
- **Nebius GPU, Stand 16.08.2026**: H100 3,85 $/h, H200 4,50 $/h on-demand; Spot 2,15 beziehungsweise 2,45 $/h (gpufinder.dev).
- **Dediziert-Sockel**: 1x H200, 70B-Klasse in FP8, Geschäftszeiten-Autoscaling ≈ 240 Betriebsstunden je Monat. Rechenwege: Geschäftszeiten on-demand ≈ 970 €, 24/7 Spot ≈ 1.610 €, 24/7 on-demand ≈ 2.960 €; Planungswert 1.000 bis 1.600 €. Konservativ 50 Sitze je Instanz (Engpass Burst-Latenz, nicht Durchsatz); ab dem Piloten messen. Der Sockel ist Kundenkostenposition im kundeneigenen Vertrag, keine Consultry-COGS.
- **K4-Standard**: Qwen3.8 27B (offene Gewichte, Apache 2.0, FP8 ≈ 28 GB, 262k Kontext, Gewichte veröffentlicht 13./14.08.2026) auf 1x A100-80-GB-VM im Kunden-Tenant; Azure NC24ads A100 v4 Spot 0,68 $/h, on-demand 3,67 $/h, Geschäftszeiten-Profil ≈ 150 bis 900 € je Monat, Kundenkostenposition mit scale-to-zero. Vier Rollen auf einer GPU: K4-Klartext-Verarbeitung, Kontextschleusen-Klassifikator, Anonymisierungs-Pipeline für Frontier-Freigaben (Pseudonymisierung mit tenant-lokaler Rückübersetzung), Korpus-Kompilierung der agentenlesbaren Wissensfassung.
- **Confidential-Enklave (Option Stufe 3)**: Standard_NCC40ads_H100_v5, 1x H100 NVL 94 GB: on-demand 8,90 $/h, Spot 1,64 $/h (Stand 16.08.2026). Je Enklave und Monat: Geschäftszeiten-Profil ≈ 350 € (Spot) bis 1.900 € (on-demand), 24/7 Spot ≈ 1.080 €. Das 27B passt in FP8 auf eine Enklave, Schlüsselfreigabe nur nach Attestierung. Kostenhebel: Spot-first mit Fallback (Zielkorridor 400 bis 600 €), Option erst ab ~30 bis 50 Sitzen anbieten, und perspektivisch der Filter-Split: ein kleines 7B-Klassifikationsmodell übernimmt die Schleuse, das 27B rechnet nur noch K4-Klartext; eval-gated, drückt den Standard weiter Richtung 100 € Klasse.
- **Personalkosten**: 2 Gründer à ≈ 5.500 € Arbeitgeberkosten, 1 Engineer ≈ 8.500 €, Sonstiges ≈ 2.000 € je Monat. Anpassen an euren echten Plan.
- **Wechselkurs** 1 $ ≈ 0,90 €, Planungsannahme.
- Azure-Detailpreise (Foundry-Token je Modell, Container Apps) sind als Bandbreiten angesetzt und je Kundenvertrag zu präzisieren; sie liegen ohnehin beim Kunden.
