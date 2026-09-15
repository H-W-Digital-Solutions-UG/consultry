# Landet das gegen die Pains der Zielkunden? Marktvalidierung und Modellentscheidung

Recherchiert am 16. August 2026. Zielkunden: IT- und SAP-nahe Beratungen im DACH-Raum, 20 bis 200 Beschäftigte, Microsoft-geprägt. Vorgabe für die Modellwahl: **Consultry hostet keine Kundeninhalte auf eigener Infrastruktur.**

**Kurzantwort:** Ja, es landet, und zwar präziser als vor der Recherche gedacht. Die Pains sind mit aktuellen Zahlen belegbar, und sie zeigen alle auf dasselbe Modell: **Managed In-Tenant**, also alles im Vertrag des Kunden, ausgerollt und betrieben von Consultry, gehostet von niemandem außer den Vertragspartnern, die der Kunde schon hat. Dieses Modell beantwortet acht von zehn typischen Einkäufer-Rückfragen durch seine Bauweise; die zwei offenen sind lösbare Hausaufgaben (Verbrauchskalkulator, Haftungsmatrix).

---

## 1. Die Pains, jetzt mit Zahlen

**Pain 1: Alle wollen KI, der Datenschutz bremst.** 41 Prozent der deutschen Unternehmen setzen KI aktiv ein, mehr als doppelt so viele wie im Vorjahr (17 Prozent). Gleichzeitig nennen **77 Prozent Datenschutzanforderungen als Hemmnis**, 61 Prozent die Anforderungen an technische Sicherheit (Bitkom 2026, 604 Unternehmen ab 20 Beschäftigten). Das Zeitfenster ist also jetzt: Die Nachfrage explodiert, und die größte Hürde ist exakt das, was euer Modell konstruktiv beseitigt.

**Pain 2: Selbst Copilot scheitert an der eigenen Datenlage.** **66 Prozent der Organisationen verschieben oder stoppen die Copilot-Einführung wegen Datenschutzrisiken**, auf Vorstandsebene sogar 75 Prozent. 73 Prozent fürchten, dass KI intern bereits vertrauliche Informationen offenlegt, 63 Prozent schieben SharePoint-Berechtigungsreviews vor sich her (CoreView, State of Microsoft 365 Security and Governance 2026). Das ist der Türöffner schlechthin: Nicht das Modell ist das Problem, sondern Berechtigungen, Oversharing, Governance. Genau dort sitzen eure Rollenvererbung, die vorgelagerten Filter und der Auditweg.

**Pain 3: Die Schatten-KI läuft längst.** **42,7 Prozent der Mitarbeitenden nutzen KI-Tools ohne Freigabe**; rund 13 Prozent geben dabei Kundendaten ein, knapp 16 Prozent strategische Informationen (ESCRIBA-Studie, Juni 2026). Für eine Beratung, die von Verschwiegenheit lebt, ist das der stille Super-GAU. Consultry ist der sanktionierte Kanal, der die Schatten-Nutzung ersetzt, mit Protokoll statt Blindflug.

**Pain 4: Der Beratungsmarkt zwingt zur Effizienz.** Der deutsche Beratungsmarkt stagnierte 2025 (+0,5 Prozent), für 2026 werden +4,5 Prozent erwartet; KI-Projekte wachsen mit +19 bis +22 Prozent weit überdurchschnittlich. Und: **Beratungen unter 1 Mio. € Umsatz schrumpften um bis zu 2,5 Prozent** (BDU-Zahlen via consulting.de). Eure Zielgruppe steht also unter doppeltem Druck: Sie muss KI können, um sie zu verkaufen, und sie muss effizienter werden, um zu überleben.

**Pain 5, die gute Nachricht fürs Wertversprechen: Effizienzgewinne bleiben als Marge im Haus.** Laut Lünendonk-Liste 2026 nutzen Beratungen KI bereits produktiv, aber **43 Prozent sehen keinerlei Auswirkung auf die Preisgestaltung**, 19 Prozent berichten sogar Preissteigerungen über bessere Qualität. Kunden fordern die „KI-Rendite" bislang nicht ein. Übersetzt: Die 2.275 € je Berater und Monat, die euer Agent freilegt, muss die Beratung aktuell nicht an ihre Kunden durchreichen. Das ist das stärkste ökonomische Argument dieser Recherche.

**Pain 6: Souveränität ist kaufentscheidend und preisrobust.** 71,1 Prozent der Unternehmen stufen technologische Souveränität als sehr wichtig oder geschäftskritisch ein; **32,4 Prozent würden eine europäische Lösung mit 90 Prozent des Funktionsumfangs eines US-Marktführers wählen, wenn sie 100 Prozent Souveränität garantiert, unabhängig vom Preis** (Foundry/plusserver 2026). Das validiert zweierlei: die EU-Ausprägung als Angebot und eure Premium-Preislogik.

Dazu die bereits belegten Kernzahlen: 70 Prozent der Beratungskunden misstrauen KI-erstellten Berichten (Source Global Research), +40 Prozent Qualität je Aufgabe im Feldversuch (Harvard/BCG 2023). Der Agent im Hintergrund, der Berater vorn: bestätigt.

---

## 2. Abgleich: Pain gegen Modellelement

| Pain (Beleg) | Was ihn trifft |
|---|---|
| 77 % Datenschutz-Hemmnis (Bitkom) | Verarbeitung nur in Verträgen, die der Kunde schon hat; keine neue Grenze |
| 66 % Copilot-Stopp wegen Oversharing (CoreView) | Rollenvererbung aus M365, vorgelagerte Filter, Datenklassen-Policy im Gateway |
| 42,7 % Schatten-KI (ESCRIBA) | sanktionierter Kanal mit Auditweg je Agentenlauf, exportierbar |
| Kleine Beratungen schrumpfen (BDU) | 2.275 € freigelegte Kapazität je Berater und Monat, Zielannahme |
| 43 % keine Preiswirkung (Lünendonk) | Ersparnis bleibt Marge des Hauses, nicht Rabatt an dessen Kunden |
| 32,4 % wählen EU preisunabhängig (Foundry/plusserver) | EU-Ausprägung im Kundenvertrag; Premium-Sitz ist begründbar |
| 70 % misstrauen KI-Berichten (Source Global) | Agent im Hintergrund, Freigabe durch den Berater, konforme Outputs |

---

## 3. Das Modell mit den wenigsten Rückfragen: Managed In-Tenant

Die Vorgabe „Consultry hostet nichts selbst" macht die Entscheidung eindeutig und das Angebot einfacher. Es gibt **ein Modell in drei Ausprägungen**, alle nach demselben Muster: Infrastruktur und Verträge gehören dem Kunden, Consultry liefert Software, Ausrollung und Betrieb per delegiertem Zugriff (Lighthouse-Muster), die Steuerungsebene bleibt ein reiner Metadaten-Dienst.

1. **Azure-Ausprägung (Standard):** Datenebene per Template in die Subscription der Beratung, Foundry-Modelle im Tenant, EU-Datenzone, Abuse-Opt-out. Der Regelfall, weil die Zielkunden Microsoft-Häuser sind.
2. **AWS-Ausprägung:** dasselbe Spiegelbild mit Bedrock, für AWS-geprägte Häuser.
3. **EU-Ausprägung:** für Kunden, die keinen US-Hyperscaler wollen: GPU-Instanz oder Serverless-Konto bei einem europäischen Anbieter (Nebius, IONOS und vergleichbare), **kontrahiert auf den Namen der Beratung**, von Consultry eingerichtet und betrieben. Offene Gewichte, Nullspeicherung als Bauweise. Der Sockel (überschlägig 1.000 bis 1.600 € je Monat) steht auf der Rechnung des Kunden, nicht in eurer GuV.

Der Verkaufssatz dazu, in einem Atemzug: **„Wir hosten Ihre Daten nicht. Niemand Neues hostet Ihre Daten. Es rechnet dort, wo Ihre Verträge schon sind, und wir betreiben es."**

Konsequenzen für die Zahlen: Consultrys COGS bestehen in allen drei Ausprägungen praktisch nur noch aus Support und Versionspflege (20 bis 30 € je Sitz). Kein Sockel in den Fixkosten, Infrastruktur-Break-even bei 1 bis 2 Kunden, Team-Break-even unverändert bei rund 16 bis 23 Kunden (konservativ kommuniziert: 15 bis 25). Der Token- und GPU-Kostenblock liegt vollständig beim Kunden, oft anrechenbar auf bestehende Cloud-Commitments.

---

## 4. Der Rückfragen-Test

Zehn Fragen, die Geschäftsführung, IT oder der Datenschutzbeauftragte einer Beratung stellen wird:

| Rückfrage | Status |
|---|---|
| Wo liegen unsere Daten? | beantwortet: in euren eigenen Tenants und Verträgen |
| Brauchen wir eine neue AVV für Inhalte? | beantwortet: nein, nur eine Metadaten-AVV mit Consultry; und wer M365 hat, aber noch kein Azure, bleibt beim selben Vertragspartner und derselben Microsoft-Datenschutzvereinbarung, es kommt nur eine Subscription im bestehenden Tenant dazu |
| Sieht Consultry unsere Inhalte? | beantwortet: nein, technisch (Telemetrie ohne Inhalte, Rollen ohne Data-Plane, Break-Glass nur mit Freigabe) |
| Trainiert jemand auf unseren Daten? | beantwortet: nein, nirgends; Opt-out-Schritte sind Teil des Onboardings |
| US-Zugriff, CLOUD Act? | beantwortet mit ehrlicher Einordnung: euer bestehendes Microsoft-Risiko bleibt euer bestehendes; wer es nicht will, nimmt die EU-Ausprägung im eigenen Vertrag |
| Was passiert bei Kündigung? | beantwortet: alles bleibt bei euch, Index, Logs, Artefakte |
| Warum nicht einfach Copilot? | beantwortet: 66-Prozent-Zahl plus Fachlogik, Freigaben, Auditweg |
| Wir haben keine Cloud-Kompetenz. | beantwortet, braucht Runbook: begleitetes Onboarding, unter einem Tag als Ziel |
| Was kostet uns der Cloud-Verbrauch im Monat? | **offen: Verbrauchskalkulator bauen** (je Sitz und Modellmix, mit Messwerten ab Pilot) |
| Wer haftet, wenn euer Template falsch konfiguriert? | **offen: Rollen- und Haftungsmatrix plus Vermögensschadenhaftpflicht** |
| Können wir alles über eine Rechnung beziehen? | beantwortet: ja, das ist der Standard: Modell- und Tokenkosten laufen über die Consultry-Rechnung (All-in-Sitz, CSP-Kanal); Subscription, Tenant und Microsoft-DPA bleiben beim Kunden |

Neun von elf beantwortet das Modell durch Bauweise. Die zwei offenen sind Arbeitspakete, keine Architekturprobleme.

---

## 5. Nächste Schritte aus der Recherche

Erstens den Verbrauchskalkulator als kleines Vertriebswerkzeug bauen (Eingabe: Sitze, Modellmix; Ausgabe: erwartete Cloud-Kosten des Kunden je Monat). Zweitens die Rollen- und Haftungsmatrix als einseitiges Beiblatt. Drittens die CoreView-66-Prozent und Bitkom-77-Prozent ins Deck ziehen (Problem- beziehungsweise Verbund-Folie), beide sind frischer und näher am Kaufmoment als die bisherige 54-Prozent-Zahl. Viertens die Lünendonk-Preisaussage in die Tonspur der Wandel-Folie: Die Ersparnis bleibt derzeit als Marge im Haus. Fünftens die zweite Discovery-Frage fest einbauen und beim Design-Partner erheben: „Wo liegen eure Projektdokumente wirklich?" (M365 / Fileserver oder DMS / beim Mandanten); für belastbare Marktquoten dazu gibt es keine öffentliche Studie, das SharePoint-Argument gilt daher nur nach bestätigter Discovery. Die Antwort „Fileserver" ist seit der Lokal-Spur kein Ausschluss mehr, sondern ein Routing: Diese Jobs laufen vollständig auf dem tenant-lokalen 27B.

## 6. Quellen

- Bitkom, „Künstliche Intelligenz in Deutschland", Studienbericht 2026 (604 Unternehmen ab 20 Beschäftigten): 41 % Nutzung, 77 % Datenschutzanforderungen als Hemmnis. https://www.bitkom.org/Bitkom/Publikationen/Kuenstliche-Intelligenz-in-Deutschland und Zusammenfassung https://www.all-about-security.de/ki-einsatz-in-deutschen-unternehmen-verdoppelt-bitkom-studie-2026/
- CoreView, „State of Microsoft 365 Security and Governance 2026": 66 % verschieben Copilot, 73 % fürchten interne Lecks. https://netzpalaver.de/2026/07/21/zwei-drittel-der-unternehmen-verschieben-die-einfuehrung-von-microsoft-copilot-wegen-datenschutzrisiken/
- ESCRIBA-Studie, Juni 2026: 42,7 % Schatten-KI ohne Freigabe. https://www.it-boltwise.de/schatten-ki-427-nutzen-ki-tools-ohne-freigabe-risiken-fuer-unternehmen.html
- BDU-Marktzahlen 2025/2026 via consulting.de: +0,5 % Stagnation 2025, +4,5 % erwartet 2026, KI-Projekte +19/+22 %, kleine Beratungen bis -2,5 %. https://www.consulting.de/artikel/stillstand-2025-aufschwung-2026-ki-wird-zum-motor-der-beratungsbranche/
- Lünendonk-Liste 2026 via consulting.de: 43 % keine Preiswirkung von KI, 19 % Preissteigerungen. https://www.consulting.de/artikel/luenendonk-liste-bislang-keine-auswirkung-von-ki-auf-die-preisgestaltung/
- Foundry/plusserver, „Digitale Souveränität 2026": 71,1 % geschäftskritisch, 32,4 % EU-Lösung preisunabhängig. https://www.plusserver.com/pressemitteilung/studie-digitale-souveraenitaet-cloud-2026/

*Belastbarkeits-Hinweis im Stil der bisherigen Disziplin: ESCRIBA (Stichprobe unklar) und CoreView (Herstellerstudie) vor Investor-Datenraum einmal im Original prüfen; Bitkom, Lünendonk und BDU sind erstklassig zitierbar.*
