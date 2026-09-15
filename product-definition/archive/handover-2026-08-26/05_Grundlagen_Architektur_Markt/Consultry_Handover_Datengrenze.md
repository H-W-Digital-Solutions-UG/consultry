# Handover · Datengrenze, Privacy und Betriebsmodell

Stand 17. August 2026. Dieses Dokument übergibt den kompletten Privacy- und Architektur-Strang: Entwurf (Papiere) und Visualisierung. Es ist die Grundlage für das separate Krallmann-Deck, für Due-Diligence-Antworten und für die technische Umsetzung des Prototyps.

---

## 1. Die Leitsätze (wörtlich verwenden)

Zwei Grenzen und eine Leitplanke tragen alles:

1. **Beratung bleibt ein Beziehungsgeschäft.** Wir automatisieren nicht die Beziehung, wir finanzieren sie.
2. **Die Daten des Kunden überschreiten keine weitere Grenze.** Wir bringen die KI zum Wissen, nicht das Wissen zur KI.
3. **Wir befähigen Berater, wir ersetzen sie nicht.** Der Agent übernimmt die Arbeit, die den Berater vom Beraten abhält.

Dazu die Betriebssätze: „Wir hosten Ihre Daten nicht. Niemand Neues hostet Ihre Daten. Es rechnet dort, wo Ihre Verträge schon sind, und wir betreiben es." · „Fällt ein Anbieter aus, wechseln wir das Modell, nicht den Datenraum." · „Kein Datum reist auf einer Route unter seiner Klasse." · „Ein Wissen, zwei Lesarten. Die Wahrheit gabelt sich nie." · Wortdisziplin: Pseudonymisierung mit tenant-lokaler Rückübersetzung, keine „Anonymisierung" im Rechtssinn; nie „maximal compliant".

## 2. Das Betriebsmodell: Managed In-Tenant

**Consultry hostet keine Kundeninhalte, nirgends.** Ein Modell, drei Ausprägungen, alle nach demselben Muster: Infrastruktur und Verträge gehören dem Kunden, Consultry liefert Software, Ausrollung und Betrieb per delegiertem Zugriff (Lighthouse-Rollenschnitt: Betrieb ja, Data-Plane nein, Break-Glass nur mit Freigabe). Die Steuerungsebene ist ein reiner Metadaten-Dienst.

- **Azure (Standard):** Datenebene per Template in die Subscription der Beratung, Foundry-Modelle im Tenant (EU-Datenzone, Abuse-Monitoring-Opt-out als fester Onboarding-Schritt, Nachweis je Deployment: Capability ContentLogging=false). Wer M365 hat, aber kein Azure: gleicher Vertragspartner, gleiche Microsoft-DPA, es kommt nur eine Subscription im bestehenden Tenant dazu (Vertragsweg EA/MCA/CSP je Kunde juristisch bestätigen).
- **AWS:** Spiegelbild mit Bedrock.
- **EU-Ausprägung:** für Häuser ohne US-Cloud-Wunsch: GPU-Instanz oder Studio-Konto bei einem EU-Anbieter, kontrahiert auf den Namen der Beratung, von Consultry eingerichtet und betrieben. Nebius-DD-Hinweis: Herkunft aus der Yandex-Aufspaltung, Nasdaq-Listing; IONOS/StackIT/OVHcloud als nennbare Alternativen bereithalten.

**Tarife:** „Alles aus einer Hand" (Standard): All-in-Sitz 149 € (Weg A) bzw. 189 € (Weg B), inklusive 25 Mio. Token je Sitz und Monat, eine Rechnung von Consultry über den CSP-Kanal (indirekter Reseller); Infrastruktur als gedeckelter, separat ausgewiesener Durchlaufposten, Software-Marge über 80 %. Option „Eigene Cloud-Rechnung" (119/149 € plus Eigenverbrauch) für Häuser mit Azure-Commitment (CSP zählt darauf nicht ein; Consultry-Gebühr optional via Marketplace aufs Commit). Option „Enklave" gestaffelt ab 490 €/Monat (bis 50 Sitze) bis 2.500 € (bis 200 Sitze). Grundsatz: Geldweg und Datenweg sind getrennte Dinge.

## 3. Die Architektur in Kürze (Details: Architektur-Papier, 10 Bausteine)

**Datenklassen K1 bis K4 plus Sperrklasse plus Quellbindung.** Policy im Gateway durchgesetzt, nicht in der UI. Sperrklasse: nie in einen Modellaufruf, Quelle schlägt Inhalt. Quellbindung (Lokal-Spur): Inhalte von Fileserver/DMS rechnen ausschließlich auf dem tenant-lokalen 27B, ephemer als Default (nur Struktur im Index, Volltext zur Laufzeit), indexiert nur als Opt-in je Quelle; On-Prem-Connector read-only, nur ausgehend, erbt NTFS-Rechte.

**Das Arbeitspferd: Qwen3.8 27B im Kunden-Tenant** (offene Gewichte, Apache 2.0, FP8 ≈ 28 GB, 262k Kontext, Vision-Encoder). Vier Rollen auf einer GPU: K4-Klartext, Kontextschleusen-Klassifikator, Anonymisierungs-Pipeline, Korpus-Kompilierung. Kosten: 1x A100-VM, Spot 0,68 $/h, Geschäftszeiten-Profil ≈ 150 bis 900 €/Monat, Kundenkostenposition, scale-to-zero. Kostenhebel: Filter-Split auf ein 7B (eval-gated).

**Kontextschleuse:** klassifiziert beim Ingest und am fertigen Kontext; vier Entscheidungen in fester Reihenfolge: entfernen, pseudonymisieren, hochstufen (nie still kastrieren), blockieren. Schleusen-Bilanz je Lauf im Audit. Konservative Defaults, Chunk erbt Dokument-Maximum, eigener Eval-Harness inklusive Anonymisierungs-Recall.

**Frontier-Freigabe (Rundweg):** deterministische Erkenner als Netz, 27B generalisiert Quasi-Identifikatoren, zweiter Prüfpass bewertet Rest-Risiko, Frontier-Aufruf, tenant-lokale Rückübersetzung; die Zuordnung liegt nur im Key Vault des Kunden. Regel: „Klartext klein und nah, Denken groß und pseudonymisiert."

**K4-Eskalationsleiter:** Stufe 1 Tenant + EU-Datenzone + Zero-Retention (Opt-out) · Stufe 2 dedizierte Kapazität (PTU oder eigene GPU-VM) · Stufe 3 Confidential-Enklave im Tenant (NCC40ads H100 v5, GA; 8,90 $/h on-demand, 1,64 $/h Spot; je Enklave GZ ≈ 350 bis 1.900 €/Monat; SKU-Wechsel, keine Architekturänderung; Schlüsselfreigabe nur nach Attestierung) · Stufe 4 on-prem (Weg C light).

**Wissensbasis:** Ein-Quellen-Prinzip. Menschenlesbare Basis ist die einzige Wahrheit; die agentenlesbare Fassung ist ein Build-Artefakt (27B, delta-getrieben, nie handgepflegt, Datenklasse geerbt). Drift-Wächter: kein Kontextpaket älter als seine Quelle; Widersprüche gehen als Findung an den fachlich Zuständigen. Freigaben fließen als Vorschlag in die menschliche Basis zurück.

**Streams (SIEM):** Aggregat zuerst. Der Strom bleibt im SIEM, Abfragen erzeugen Findings, der Worker liest nur Ergebnisse, geplant statt Echtzeit, K3/K4 → Lokal-Spur. „Wir schreiben die Berichte über den Strom, wir überwachen ihn nicht."

## 4. Ökonomie (Überschlag, Annahmen gekennzeichnet)

Consultry-COGS in allen Wegen ≈ 20 bis 30 € je Sitz (Support und Versionspflege). Infrastruktur-Break-even ab 1 bis 2 Kunden; Team-Break-even bei 3 Gründern ≈ 20 bis 27 Kunden = 0,14 % des Einstiegsmarkts. Rechenbeispiel 200 Sitze: ≈ 29.000 €/Monat Consultry-Rechnung (≈ 350 T€ ACV), Wertanker 6,4 % der freigelegten Kapazität. Messliste ab Design-Partner: Tokenverbrauch je Berater (Annahme 25 Mio.), Support-Stunden je Kunde (Annahme 3 bis 5), Onboarding-Dauer (Ziel < 1 Tag), Schleusen-Bilanzen, Auslastung 27B, „Wo liegen eure Projektdokumente wirklich?".

## 5. Datei-Inventar

| Datei | Inhalt |
|---|---|
| `Consultry_Datengrenze_Architektur.md` | Das Konzeptpapier: Steuerungs-/Datenebene, Wege A/B/C, 10 Bausteine, Kleingedrucktes der Anbieter, Reihenfolge, Preiswirkung |
| `Consultry_Bauplan_und_Preisueberschlag.md` | Der Bauplan: konkrete Komponenten je Weg, Tarife, Enklave-Option, COGS, Break-even, Investoren-Einwände 1 bis 9, Annahmen mit Quellen |
| `Consultry_Datengrenze_Visual.html` | Die Visual-Seite, 6 Sektionen: Betriebswege, Systemübersicht mit Vertragsraum-Zonen, drei Datenflüsse, Datenklassen-Matrix mit Sperrklasse und Lokal-Spur, Ein Korpus zwei Lesarten, Ökonomie-Charts |
| `Consultry_Marktvalidierung_Betriebsmodell.md` | Sechs belegte Pains, Modellentscheidung, Rückfragen-Test (9 von 11 durch Bauweise beantwortet) |
| `Consultry_Vision_geschaerft.md` | Vision mit beiden Grenzen, Leitplanke, Kurzformen, Folienvarianten, Quellenapparat |

## 6. Offene Arbeitspakete

1. **Verbrauchskalkulator** (Sitze, Modellmix → Kundenkosten bzw. All-in-Pricing); jetzt internes Pricing-Werkzeug, vor dem ersten zahlenden Kunden.
2. **Rollen- und Haftungsmatrix** als einseitiges DD-Beiblatt (die eine offene Rückfrage neben dem Kalkulator).
3. **Eval-Harness-Suiten:** echte Zuarbeit-Aufgaben, Suite „lokale Jobs", Filter-Präzision/Recall, K4-Aufgabenliste für das 27B (besteht es nicht, wird pseudonymisiert hochgestuft, nie Klartext weggegeben).
4. **CSP-Kanal** (indirekter Reseller über Distributor) zum ersten zahlenden Kunden; GDAP-Rollenschnitt wie Lighthouse.
5. **EU-Anbieter-Klärung:** Reseller-Programm mit Endkunden-AVV je Anbieter prüfen (Nebius, IONOS).
6. **Juristische Bestätigungen je Kunde:** Vertragsweg (EA/MCA/CSP), Berufsgeheimnisträger- und HR-Sonderfälle (AI Act), Abuse-Opt-out-Antrag.

## 7. Quellen (Stand 16./17.08.2026)

Bitkom KI-Studie 2026 (77 %/41 %) · CoreView M365 Security 2026 via Netzpalaver (66 %/75 %) · ESCRIBA Juni 2026 (42,7 %; Stichprobe unklar, vor Datenraum prüfen) · Lünendonk-Liste 2026 via consulting.de (43 % keine Preiswirkung) · BDU via consulting.de (+4,5 % 2026e, KI +19/22 %) · Foundry/plusserver 2026 (71,1 %/32,4 %) · Microsoft Learn data-privacy (Abuse Monitoring, EU-Datenzone, ContentLogging) · Microsoft/NVIDIA GA Confidential H100 · Vantage (NCC40ads 8,90/1,64 $/h; NC24ads A100 3,67/0,68 $/h) · Artificial Analysis (Nebius-Studio-Preise, Kimi K3 3,11 $/M) · Yotta Labs (Qwen3.8-27B Specs, Apache 2.0, 13./14.08.2026). Links vollständig in den jeweiligen Papieren.
