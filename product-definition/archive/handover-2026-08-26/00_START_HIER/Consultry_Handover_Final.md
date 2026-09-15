# Consultry · Finales Session-Handover: Pitch- und Investor-Track

**Stand: 26. August 2026** · Dieses Dokument ist die **aligned Dokumentationsgrundlage** der gesamten Session. Es ersetzt `Consultry_Handover_Pitch.md` (Stand 17./18.08.) als Einstiegspunkt; das alte Handover bleibt als Archiv gültig. Zielgruppe: die Gründer und **jede neue Session oder jeder Agent**, der lokale Consultry-Bestände (Pitch-Decks, Sales-Material, Research, Website-Texte) aktualisieren soll, ohne Widersprüche zu erzeugen.

**Leseanleitung für Agents:** Erst Abschnitt 9 (Arbeitsregeln) lesen, dann Abschnitt 2 (Faktenbasis). Bei jedem Textwiderspruch zwischen Dateien gilt die Hierarchie aus Abschnitt 3: **v10 führt**. Vor jedem Patch den exakten Anker frisch aus der Datei greppen, nie aus diesem Dokument kopieren und blind ersetzen.

---

## 0. Session-Referenzen und IDs

Interne Referenzen dieser Cowork-Session (für Rückverfolgung und Zugriff durch Folge-Agents):

| Referenz | Wert |
|---|---|
| Session- und Uploads-ID | `7b206817-1b22-5a1e-848f-f519a1c3f13a` |
| Transcript-Pfad (Sessionprotokoll, JSONL) | `/root/.claude/projects/-home-claude/7b206817-1b22-5a1e-848f-f519a1c3f13a.jsonl` |
| Arbeitsverzeichnis | `/home/claude/` |
| Upload „Beautiful Autosaved.pptx" (25.08.) | Datei-UUID `88bb7ffc-b419-471c-b2c4-5e9280505326` |
| Letzte Lieferung PPT-Abgleich (25.08.) | file_uuid `ad6b4505-fcec-4337-ae62-740cc7e2c9b0` |
| Nutzer | Julian Weber (CTO), remx.chark@gmail.com |

Die UUIDs sind sessioninterne Referenzen der Cowork-Umgebung, keine externen Systeme. Screenshots liegen unter `/home/claude/shots/`, Playwright-Hilfsskripte unter `/opt/node-tools/`.

---

## 1. Firmenkontext und Positionierung

**Consultry** baut die KI-Plattform für **IT- und SAP-Beratungen mit 20 bis 200 Beratern im DACH-Raum**. Betriebsmodell: **Managed In-Tenant**, die Plattform rechnet im Microsoft-Tenant des Kunden. Kernsatz: **„Wir hosten nichts."** Kategoriezeile auf dem Cover: „KI-Plattform für IT- und SAP-Beratungen · betrieben im Tenant des Kunden".

**Produktlogik:** Drei **Kreisläufe** (Gewinnen, Liefern, Steuern) auf einem **verifizierten Firmengedächtnis**. Jede Aussage hat eine Quelle, jede Freigabe macht den nächsten Agenten klüger. **Routing auf zwei Achsen**: die Schutzklasse entscheidet, wohin eine Aufgabe darf; die Aufgabenschwere entscheidet, was sie kostet; ein **Eval-Harness** hält die Qualitätsschwelle. Zugriff: **„Berechtigungen gelten für Agenten wie für Menschen"** (Entra, Sites.Selected; Anti-Oversharing).

**Team (Stand Deck Folie 13, Glow-up vom 24.08.):** Caspar (verkauft heute IT-Beratung an genau diese Zielkunden, Netzwerk ist die erste Pipeline, **Vollzeit ab der ersten bezahlten Erprobung, terminiert**), Julian (fünf Jahre Banken geschützt, entwickelt seit zwei Jahren Agenten, baut die Plattform: Agenten, Datengrenze, Modellbetrieb), Paul (neun Jahre auf der Einkäuferseite von Beratung, Konzern-IT, MBA Entrepreneurship). Punch: „Einer verkauft an diesen Markt, einer baut für ihn, einer hat neun Jahre bei ihm eingekauft. **Niemand muss uns den Kunden erklären.**"

**Runde:** Pre-Seed, Business Angels DACH. **Entwicklungspartner:** Krallmann AG (Berlin, IT-Beratung seit 2006, über 380 Projekte; Absichtserklärung unterschrieben, bezahlter Pilot kommt danach; ehrlich genau so sagen). Nächstes Gespräch: Krallmann-VP (Serdan), Fragebogen liegt bereit.

**Beschluss vom 18.08.:** Der frühere Referenzname H&W bleibt aus allen live verwendeten Pitch-Materialien **draußen**; Archivdateien bleiben unangetastet.

---

## 2. Kanonische Faktenbasis (immer identisch sprechen und schreiben)

### 2.1 Preise und Einheiten (dritte und gültige Preiswelt)

- **All-in-Sitz 149 Euro** je Monat (Standardweg) beziehungsweise **189 Euro** (EU-Weg), **inklusive Token-Kontingent**. Volumentarif ab dem Dreifachen. Plattformgebühr als **Rechenannahme 500 Euro** je Monat. Sichtbare Folie nennt Struktur statt Preisliste: „Wiederkehrende Sitze, eine feste Plattformgebühr. Ein Preis, alles drin." Preise stehen im Datenraum, nicht auf der Folie.
- **ACV-Anker rund 25.000 Euro**: 11 All-in-Sitze plus Plattform ergibt 25.668 Euro im Jahr. ACV immer dreifach trennen: 25.000 Euro SAM-Annahme, 15.000 Euro blended im Plan, Krallmann läuft auf Design-Partner-Konditionen.
- **Größenargumente:** 10 Sitze kosten 17.880 Euro im Jahr, unter 1 Prozent von 2 Millionen Euro Umsatz. Ein Sitz kostet unter 7 Prozent des Kapazitätswerts (149 geteilt durch 2.275 ergibt 6,5 Prozent).
- **Kapazitätswert je Berater: rund 2.275 Euro je Monat** (Agent übernimmt 3,5 von 10 internen Stunden je Woche, Durchschnittssatz 162,50 Euro je Stunde). **Immer als Zielannahme kennzeichnen, nie als gemessene Einsparung.**
- Ältere Preiswelten (49 und 99; dann 50 auf 69 sichtbar im PPT) sind **Historie**, nur als Q&A-Wissen: „Wir haben früh zu billig gedacht und die Preislogik an den Kapazitätswert angepasst."

### 2.2 Runde, Cap Table, Renditerechnung

- **Ask: 500.000 Euro für 17,5 Prozent**, post-money 2,86 Millionen Euro. Alte Stände (250k für rund 10 Prozent) dürfen **nirgends** mehr auftauchen; das PPT trägt sie mutmaßlich noch (Prüfpunkt offen, siehe Abschnitt 5.5).
- **Cap Table nach der Runde: 73,5 / 9 / 17,5** (Gründer / ESOP / Angels). Nach einer Seed mit 20 bis 25 Prozent Verwässerung halten die Gründer 55 bis 59 Prozent.
- **Multiples-Methodik: 6 bis 8 mal Umsatz.** Basisfall 3 Millionen ARR ergibt 18 bis 24 Millionen Bewertung (6 bis 8 mal aufs Post-Money). Zielplan 13 Millionen ARR (0,8 Prozent von 1,63 Milliarden EU-SAM, rund 800 Kunden) ergibt 78 bis 104 Millionen (27 bis 36 mal). **Verwässerungs-Caveat immer mitsprechen.**
- **Break-even: 20 bis 27 Kunden**, das sind 0,14 bis 0,19 Prozent des Einstiegsmarkts, im Plan in Jahr 2. Infrastruktur trägt sich ab dem zweiten Kunden, jeder Kunde rechnet sich ab dem ersten Monat (Zielannahmen).
- **Jahr 1: rund 12 Kunden, rund 150.000 Euro ARR**, davon 10 referenzfähig. Jahr 3: 13 Millionen ARR (nicht 12).

### 2.3 Markt

- **Einstiegsmarkt DACH: 14.500 Firmen**, bottom-up, bewusst konservativ über den NACE-J62-Schnitt gezählt; sauber bereinigt wären es 18 bis 19 Tausend, der Feinschnitt liegt im Datenraum. Fußnote im Deck sagt genau das.
- DACH-Einstiegsmarkt mal ACV-Annahme ergibt rund **360 Millionen Euro**; **EU-SAM rund 1,63 Milliarden Euro**. Leitsatz: „Der Plan ist konservativ. Der Markt ist es nicht."

### 2.4 Belege mit Ehrlichkeitsmarkern (Pflichtkennzeichnung)

| Beleg | Zahl | Marker |
|---|---|---|
| Qualität je Aufgabe (Harvard/BCG 2023, 758 Berater) | plus 40 Prozent bewertete Qualität | Übertragung auf Consultry ist **Zielannahme** |
| Bitkom 2026 | 77 Prozent nennen Datenschutz als KI-Hemmnis | neutral |
| CoreView 2026 | 66 Prozent (zwei Drittel) verschieben Copilot-Rollouts, Oversharing-Angst | **Herstellerstudie**, immer so markieren |
| Atlassian State of Teams | Kontextwechsel- und Suchzeit-Belege | **Anbieterstudie**, immer so markieren |
| Projekttermine | 26,6 Prozent der Projekte verfehlen den Termin, Überschreitung im Schnitt 11,3 Prozent | neutral |
| Schatten-KI | 42,7 Prozent | nur Notizen |
| Accenture GenAI-Umpreisung | rund minus 18 Prozent | Sekundärbeleg, Backup-Folie |
| McKinsey | rund 25 Prozent Outcome-Fees (nicht 30) | Sekundärbeleg |
| EU-Präferenz | 32,4 Prozent wählen EU preisunabhängig | neutral |
| Lünendonk | 43 Prozent (keine Preiswirkung, Ersparnis bleibt Marge im Haus) | neutral |

**Verbotene Formulierungen:** „maximal compliant", Pauschal-Compliance-Versprechen, „Personal einsparen" (Sprachregel: **Kapazität freilegen**), gemessene Einsparung behaupten, wo Zielannahme gilt.

### 2.5 Wettbewerbs- und Kategoriewissen

Drei Werkzeugklassen, fair beschrieben (Folie 8): generische Copiloten und Work-KI, AI-Baukästen, KI-CRMs; je erst Stärke, dann Grenze. **Riplo** (UK, 2,3 Millionen Pfund, „AI OS for consulting") ist heute auf PE-Diligence gepivotet: **Pflicht-Notiz als Kategorie-Validierung plus Fokus-Warnung.** Microsoft-Antwort: nicht defensiv; „Microsoft verdient an der Lizenz, wir am gelungenen Projekt"; keine Aussagen darüber, was Microsoft bauen wird. DIY-Antwort: zwei bis drei Engineers dauerhaft gegen rund 25.000 Euro ACV, Faktor zwanzig. PSA-Reserve: Kantata und Rocketlane verwalten Arbeit, sie erledigen sie nicht.

---

## 3. Datei-Inventar mit Iterationsständen

Hierarchie: **FÜHREND** schlägt REFERENZ, REFERENZ schlägt ARCHIV. Records (Archiv) werden nie rückwirkend umgeschrieben.

| Datei | Rolle | Stand | Status |
|---|---|---|---|
| `Consultry_Pitchdeck_v10.html` | **Das Investor-Deck**, 15 Folien, Klickstufen, Sprechernotizen, rund 120 zählgeprüfte Patches dieser Session | 24.08. 15:29 | **FÜHREND** |
| `Consultry_Handover_Final.md` + `.html` | dieses Dokument | 26.08. | **FÜHREND (Doku)** |
| `Consultry_PPT_Investor_Abgleich.html` | PPT gegen Master: 6 kundenlastige Stellen, 15-Zeilen-Mapping, Betriebsmodell, Upload-Befund Sektion 06 | 25.08. 13:50 | REFERENZ |
| `Consultry_Deck_Sprachpass.html` | Wortebenen-Review: 13 Stellen, 5 Geschmacksfragen, Punchline-Karte | 24.08. | REFERENZ (Einbau teils offen) |
| `Consultry_Deck_Grill_v3.html` | Review-Lineage v3: Sweep-Nachprüfung, Q&A-Matrix, offene Liste | 22.08. | REFERENZ |
| `Consultry_Deck_Grill_v2.html` | Review v2 („Notizen erzählen die Firma von gestern") | 21.08. | ARCHIV mit Statusbadges |
| `Consultry_Messaging_Memo_3_Ideen.html` | 3 EN-Ideen (Quality, IP, Routing) plus Kopfschmerz-Frame mit Implizit-Audit | 22.08. | REFERENZ |
| `Consultry_Fragebogen_Krallmann_VP.html` | 42 Fragen, 7 Sektionen für das Serdan-Gespräch | 25.08. | EINSATZBEREIT |
| `Consultry_BSS_Kurzpitch.html` | Kurzpitch, H&W-bereinigt; eigener Gedankenstrich-Pass steht aus | 21.08. | REFERENZ |
| `Consultry_LinkedIn_Hub.html` | LinkedIn-Zentrale: Strategie, Kalender, 12 Posts, Playbook | 18.08. | REFERENZ |
| `Consultry_LinkedIn_*.md` (6 Dateien) | Masterplan, Woche 1, W2 bis 6, Playbook, Julian-Fassungen | 18.08. | REFERENZ |
| `Consultry_Handover_Pitch.md` | Vorgänger-Handover (17./18.08.) | 21.08. ergänzt | ARCHIV |
| `Consultry_Handover_Datengrenze.md`, `Consultry_Datengrenze_Architektur.md`, `Consultry_Datengrenze_Visual.html` | Architektur-Track (Datengrenze, Bausteine; Baustein 11 Kosten-Router als Angebot offen) | 17./18.08. | REFERENZ |
| `Consultry_Bauplan_und_Preisueberschlag.md` | Bauplan und Preisrechnung | 17.08. | REFERENZ |
| `Consultry_Marktvalidierung_Betriebsmodell.md`, `Consultry_Vision_geschaerft.md` | Markt- und Visionsgrundlagen | 16.08. | REFERENZ |
| `Consultry_Deck_Review.md` | PPT-Review der Beautiful-Linie (v8_2_9, v9): Struktur, Bugs, Riplo, NACE | 09.08. | **RECORD** (nie umschreiben) |
| `Consultry_Deck_Grill_Angels.md`, `Consultry_Deck_Grill_Website.html` | Grill v1 (Angels-Sicht, 28-Fixes-Runde) | 17.08. | ARCHIV |
| `Consultry_Kernsaetze_Zahlenkarte.pdf` | Termin-Einseiter | 17.08. | REFERENZ (Zahlen vor Druck gegen Abschnitt 2 prüfen) |
| `Consultry_Pitch_Transkript.pdf`, `_Rohtranskript.txt`, `_Highlight_Report.pdf`, `_Deep_Report.pdf` | Pitch-Übung 15.08. plus Auswertung und Red-Team B1 bis B12 | 15.08. | ARCHIV |
| `Beautiful_Autosaved.pptx` | Upload 25.08.: **leere Beautiful.ai-Vorlage als Bild-Export**, kein Consultry-Inhalt | 25.08. | GEPRÜFT, KEINE QUELLE |
| `deck_text_aktuell.txt`, `deck_notes_v10_neu.txt` | Extraktionen sichtbarer Text und Notizen | 24.08. / 21.08. | WERKZEUG (nach Patches neu ziehen) |
| Echte Consultry-PPTX (Beautiful.ai-Export mit Consultry-Cover) | für die verifizierte Nachzieh-Liste je Folie | ausstehend | **EXTERN AUSSTEHEND** |

---

## 4. Entscheidungs-Log (chronologisch)

| Datum | Entscheidung | Konsequenz |
|---|---|---|
| 15.08. | Pitch-Übung transkribiert und ausgewertet (Red-Team B1 bis B12) | Grundlage der Grill-Reihe |
| 16.08. | Marktvalidierung und Vision geschärft | Zahlenbasis für Deck und Handover |
| 17.08. | Grill v1 plus 28-Fixes-Runde ins Deck; erstes Handover | v10 wird Arbeitsstand |
| 18.08. | **H&W raus aus allen Live-Pitch-Materialien** (Records unangetastet); LinkedIn-Familie und Datengrenze-Handover erstellt | Team-Folie umformuliert; BSS-Kurzpitch bereinigt |
| 21.08. | Grill v2 gefunden: „Die Notizen erzählen die Firma von gestern" (3 Cap-Table-Stände, alte Runden-Multiples, 3 Preiswelten). Beschluss: **Notizen-Sweep und Full Alignment, das Deck ist authoritativ über die Notizen** | Eine Preiswelt, ein Cap Table, eine Multiples-Methodik überall; Sweep-Nachprüfung veröffentlicht |
| 21.08. | **Ask-Stand endgültig: 500k für 17,5 Prozent** (alte 250k-Stände getilgt, nur noch als Historie in Records) | PPT-Ask wird roter Prüfpunkt |
| 22.08. | Grill v3 mit v2 als Referenz (Q&A-Matrix, neue Befunde N1 bis N4). Nutzerwahl: **Zeitfenster sichtbar auf Folie 4, KI-Karte** | Zeitfenster-Zeile eingebaut („Diese Lücke ist das Zeitfenster … besetzt die Kategorie") |
| 22.08. | „Fix die Befunde": alle v3-Folienbefunde eingebaut | Bühne 14 von 15 grün, F12 wartet extern |
| 22.08. | Drei EN-Messaging-Ideen (Quality, IP, Routing) als Memo verarbeitet, zwei Notiz-Reserven ins Deck | Routing-Margen-Antwort und Eigen-IP-Reserve stehen in den Notizen |
| 24.08. | Kopfschmerz-Frame-Audit (6 Sorgen): **Sales-Material wird explizit, Investor-Deck bleibt bewusst implizit**; Lücke Rollen-Zugriff geschlossen, Lücke KI-Slop bleibt offen | Nutzerauftrag: Rollen-Zugriff präsenter (F6-Kette, F9-Claim plus SVG-Label) |
| 24.08. | **Sprachpass** (Deck-only-Brille) geliefert; **Founder-Glow-up F13 eingebaut** | Restliste 12 Stellen plus 5 Geschmacksfragen wartet auf „bau ein" |
| 25.08. | Fragebogen Krallmann-VP (Serdan) erstellt; PPT-Investor-Abgleich geliefert; **Deck-Betriebsmodell: v10 führt, PPT nachziehen oder einfrieren, kundenlastige PPT-Folien werden Grundstock des Sales-Decks** | Klare Rollen je Datei |
| 25.08. | Upload „Beautiful [Autosaved]" verifiziert: **leere Vorlage, Bild-Export, keine Quelle** | Echte Consultry-PPTX weiterhin ausstehend |
| 26.08. | Dieses finale Handover als aligned Dokumentationsgrundlage | ersetzt Handover_Pitch.md als Einstieg |

---

## 5. Review- und QA-Historie (Lineage mit Kernbefunden)

### 5.1 Grill v1 (17.08., Angels-Sicht)
4 Treffer, 15-Folien-Ampel, 19 Formulierungs-Fixes; 28 Fixes eingebaut. Wichtigster Nachläufer: LOI-Sprachregel (B6).

### 5.2 Grill v2 (21.08., Bühne gegen Souffleurkasten)
Kernbefund: **Notizen erzählten die Firma von gestern** (drei Cap-Table-Stände, alte Runden-Multiples, drei Preiswelten nebeneinander). Beschluss und Sweep siehe Log. T1/T2 erledigt, T4/T8 teilerledigt dokumentiert.

### 5.3 Grill v3 (22.08., mit v2 als Ausgangsreferenz)
Sweep-Nachprüfung: alle gewobenen Zahlen nachgerechnet und bestätigt. Offene Liste: Punkte 1 bis 5, 7, 8, 9 **erledigt**; Punkt 6 teilerledigt (**Pipeline-Zahl bewusst offen**, erst nennen, wenn belastbar); Punkt 10 extern. **Q&A-Matrix: 8 von 10 grün**; GTM nur in Notizen (bewusst), **Krallmann-Absprung bleibt Lücke** (Antwort fehlt). Bühne: **14 von 15 Folien grün**, F12 wartet auf externe Angaben.

### 5.4 Sprachpass (24.08., Wortebene, Deck-only-Brille)
13 Stellen (1 rot, 5 Jargon, 7 Politur) plus 5 Geschmacksfragen plus Punchline-Karte. **Eingebaut: F13-Zeile (im Glow-up).** Rest wartet auf Freigabe „bau ein". Heute (26.08.) am v10 verifizierte offene Anker: F3 „Und die freie Woche fließt zurück" (rot), F9 „Es rechnet dort", F12-Titel „…ersten Produktpfad…", F12 „Systemprototyp" (2 Stellen, eine bereits mit Zusatz „über alle drei Kreisläufe"), F14 „mit realem Fall", F6 „verbundene Entitäten" (Wortlaut weicht vom Sprachpass-Anker ab, vor Patch frisch greppen).

### 5.5 PPT-Investor-Abgleich (25.08., Dokumentebene)
6 kundenlastige Stellen mit Umzugsziel (Vorher/Nachher, 6-Pain-Raster, Demo-Tiefe, sichtbare Preise, Compliance-Beruhigung, OS-Claim), 15-Zeilen-Mapping, Delta-Tabelle (7 fehlende Fortschritte), roter Punkt **Ask-Drift** (PPT mutmaßlich 250k für 10 Prozent). **Sektion 06: Upload war die leere Vorlage.** Prüfpunkte für die echte Datei: Ask-Stand, Platzhalter- und Higgsfield-Bugs der v8-Linie, neue Folien seit 09.08.

### 5.6 Kopfschmerz-Audit (24.08., Frame-Ebene)
Sechs Sorgen (Modellwahl, Token-Kosten, KI-Slop-Vertrauensverlust, Hosting/Deployment, DSGVO/DORA/AI-Act, personenbasierter Kontext-Zugriff). Verdikt: im Investor-Deck bewusst implizit, im Sales-Material explizit machen. **Offen: KI-Slop-Notiz** (ein Satz, F3 oder F7).

---

## 6. Q&A-Archiv (stehende Investor-Antworten, Details in den v10-Notizen)

- **Ersetzt ihr Berater?** „Wir ersetzen keine Berater. Wir geben ihnen ihre Arbeit zurück."
- **Kann die Beratung das selbst bauen?** Prototyp ja, Produkt nein: zwei bis drei Engineers dauerhaft gegen rund 25.000 Euro ACV, Faktor zwanzig, und deren Stunden wären fakturierbar.
- **Macht das nicht Copilot?** 66 Prozent verschieben Copilot wegen Datenschutz (CoreView, Herstellerstudie); das Problem ist Governance, genau die verkaufen wir. Keine Spekulation über Microsofts Roadmap; „Microsoft verdient an der Lizenz, wir am gelungenen Projekt."
- **Fressen Token die Marge?** Nein: gedeckeltes Kontingent im All-in-Sitz, Volumentarif ab dem Dreifachen, **Routing auf zwei Achsen** (Schutzklasse bestimmt wohin, Aufgabenschwere bestimmt was es kostet), Eval-Harness hält die Qualität. Software-Marge über 80 Prozent.
- **Was, wenn ein Anbieter sperrt oder zurückfällt?** „Fällt ein Anbieter aus, wechseln wir das Modell, nicht den Datenraum."
- **Woher kommt der Moat?** Verifiziertes Firmengedächtnis plus Freigabe-Lernschleife plus **Eigen-IP** (zweiter Schutzgrund neben der Datengrenze) plus Rollen-Zugriff („Berechtigungen gelten für Agenten wie für Menschen").
- **Oversharing-Angst?** Kein Weg, keine Verarbeitung; jeder sieht nur, was er sehen darf (Entra, Sites.Selected).
- **Riplo?** Kategorie validiert, Fokus entscheidet: Riplo pivotierte zu PE-Diligence, wir bleiben auf der Beratungs-Wertschöpfung.
- **GTM?** Erste Erprobungen aus Caspars Bestandsnetzwerk und dem Umfeld des Entwicklungspartners; Pfad: Gespräch, Prototyp-Demo, bezahlte Erprobung. **Pipeline-Zahl erst nennen, wenn belastbar.**
- **LOI-Status?** Wörtlich: Absichtserklärung unterschrieben, bezahlter Pilot kommt danach. Nie mehr behaupten.
- **Compliance-Wording:** immer „dokumentierter, kundenspezifisch freigegebener Daten- und Modellweg", nie „maximal compliant".
- **Stellenabbau-Frage:** „Kapazität freilegen, nie Personal einsparen."
- **Offene Lücke (bewusst dokumentiert):** Antwort auf einen möglichen **Krallmann-Absprung** fehlt noch (Grill v3).

---

## 7. Offene Punkte

### 7.1 Im Deck (auf Zuruf einbaubar)
1. **Sprachpass-Rest:** 12 Stellen plus 5 Geschmacksfragen (Liste und Zielformulierungen in `Consultry_Deck_Sprachpass.html`; heute verifizierte Anker in 5.4).
2. **KI-Slop-Notiz:** ein Satz gegen Slop-Vertrauensverlust, Platzwahl F3 oder F7.
3. Angebote aus der Session, noch nicht beauftragt: Eigen-IP- und Routing-Post als Julian-Volltexte; Baustein 11 (Kosten-Router) ins Architekturpapier; Sales-Deck-Start aus dem Sechser-Block; Wandel-Folie als v10-Anhang-Backup (mit minus 18 Prozent und rund 25 Prozent, korrigierte Zahlen); BSS-Kurzpitch-Gedankenstrich-Pass; Pilot-Konfigurationsblatt nach dem Serdan-Gespräch; Tonproben-Feinschliff der 12 LinkedIn-Posts.

### 7.2 Extern bei den Gründern (blockiert Folien oder Aussagen)
1. **LOI-Status fixieren** und einheitlich sprechen (Folie 12, gefährlichster Red-Team-Punkt).
2. **Krallmann-Logofreigabe** oder Textnennung entscheiden.
3. **Gesprächszahl N** für Folie 12 („N Gespräche geführt") liefern.
4. **Pipeline-Zahl** für die GTM-Notiz, sobald belastbar.
5. **Echte Consultry-PPTX** exportieren und anhängen (für die verifizierte Nachzieh-Liste je Folie).

---

## 8. Update-Pfade für lokale Bestände (wer zieht woraus nach)

| Lokaler Bestand | Quelle der Wahrheit | Verfahren |
|---|---|---|
| PowerPoint (Beautiful-Linie) | v10 plus Abgleich Sektion 03 | Nachziehen Folie für Folie oder einfrieren und v10-PDF versenden; Bild-Export beachten (Text nicht editierbar) |
| Sales- und Krallmann-Deck (neu) | kundenlastige PPT-Folien (6 Stellen) plus Kopfschmerz-Frame explizit plus Preiskarte All-in | separates Vorhaben, Grundstock liegt im Abgleich |
| Kernsätze- und Zahlenkarte (PDF) | Abschnitt 2 dieses Handovers | vor jedem Druck gegenprüfen (Karte ist vom 17.08.) |
| LinkedIn-Posts und Hub | Hub plus Masterplan; Faktenbasis Abschnitt 2 | Tonproben-Feinschliff offen; neue Posts (IP, Routing) auf Zuruf |
| Website- und Marketing-Texte | Faktenbasis Abschnitt 2 plus Messaging-Memo (3 Ideen, Kopfschmerz-Frame) | Figma- und Webflow-Skills stehen in der Umgebung bereit |
| Architektur-Papier | Datengrenze-Dateien; Baustein 11 offen | auf Zuruf |
| Datenraum | Preise, Feinschnitt Markt, Quellenblatt | Anhang-Aufgabe aus Handover v1 bleibt offen |

**Alignment-Regel:** Jede Zahl in jedem Bestand muss gegen Abschnitt 2 bestehen. Weicht ein Bestand ab, wird der Bestand geändert, nicht Abschnitt 2 (außer die Gründer beschließen neu, dann zuerst hier ändern und das Änderungsdatum loggen).

---

## 9. Arbeitsregeln für Agents (verbindlich in dieser Zusammenarbeit)

### 9.1 Sprache und Stil
- **Deutsch zuerst** in allen Deliverables; Keyword-Fettung sparsam (ein Fettwort je Satz).
- **Keine Gedankenstriche** (kein em-Dash, kein en-Dash) in sichtbarem Text; auch CSS-Escapes wie `\2013` zählen. Ersatz: Komma, Doppelpunkt, „bis", Balken-Bullets.
- Ein Ding, ein Name: Firmengedächtnis, Kreislauf, Sitz, Haus. Verben statt Substantive auf -ung. Punchlines müssen ohne Tonspur tragen (Angels lesen allein).
- **Ehrliche Quellenarbeit:** Zielannahmen kennzeichnen, Herstellerstudien und Anbieterstudien markieren, keine Pauschal-Compliance-Versprechen.

### 9.2 Patch-Disziplin (v10 und alle HTML-Bestände)
- Vor jedem Patch den **exakten Anker frisch greppen**; nie aus Doku oder Gedächtnis ersetzen.
- Python-Patches als `rep(old, new, count)` mit **Count-Assert**; ein fehlgeschlagener Assert bricht ab, bevor geschrieben wird (Datei bleibt unversehrt, Skript ist gefahrlos wiederholbar).
- **Deutsche Anführungszeichen nie in Python-Match-Strings** (Encoding-Falle); für solche Stellen das Edit-Tool verwenden. Em-Dash-Zeichen in Match-Strings sind unkritisch.
- Nach jedem Patch: Dash-Zählung (literal plus `\2013`), betroffene Folien rendern, **SendUserFile** nach jeder sinnvollen Änderung.

### 9.3 Playwright-Verifikation (Pflicht vor Lieferung von HTML)
- Chromium-Pfad: `/opt/pw-browsers/chromium-1194/chrome-linux/chrome` (nicht der Default-Pfad).
- Deck-Hash-Navigation: `goto(url#n)` und danach **`reload()`**, sonst greift die Folien-Stage nicht.
- `domcontentloaded` plus 1.300 Millisekunden warten; **kein networkidle** (855.000-Zeichen-Deck läuft in Timeouts).
- Endzustand einer Folie erzwingen: `data-stage` auf Maximum, `.on` setzen (für Tab-Panels zusätzlich `.cur` bei Stufengleichheit).
- Overflow-Check ohne SVG-Elemente; Seiten mit `scroll-behavior:smooth` vor Crops auf `auto` stellen und `scrollIntoView({behavior:'instant'})`.
- Fertige Skripte liegen unter `/opt/node-tools/` (allshots, fixshots, grillshot, abgleichshot und weitere).

### 9.4 Werkzeuge und Umgebungen
- PPTX lesen: `markitdown datei.pptx`; Thumbnails: pptx-Skill `scripts/thumbnail.py datei.pptx eigener-prefix` (Prefix immer setzen). Beautiful.ai-Exporte können **reine Bild-Folien** sein: dann Sichtprüfung über die Medien-JPGs je Folie (`ppt/slides/_rels/` mappt Folie auf Bild).
- Extraktionen (`deck_text_aktuell.txt`, `deck_notes_v10_neu.txt`) nach jedem Patch-Lauf neu ziehen, sie veralten sonst.
- Für neue Deliverables: eigenständige HTML-Datei in der Consultry-Palette (#AD2764, #D2397E, #F9E2EC, #FFFBF9, #EDDFD7; Segoe UI und Georgia), Nav-Chips, Pills und Badges, dash-frei, Playwright-geprüft.

### 9.5 Governance
- **v10 ist die einzige Quelle der Wahrheit** für Pitch-Inhalte; Notizen sind dem sichtbaren Deck untergeordnet (Beschluss vom 21.08.).
- Records (`Consultry_Deck_Review.md`, Transkripte, alte Grills) werden **nie rückwirkend geändert**; neue Erkenntnisse erzeugen neue Dokumente oder datierte Nachträge.
- Kein neues Governance-Vokabular erfinden; Dateien konkret beim Namen nennen (Lehre aus dem „Master"-Missverständnis vom 25.08.; „Investor-Master v10" ist seitdem als Begriff eingeführt und meint exakt `Consultry_Pitchdeck_v10.html`).
- H&W taucht in keinem live verwendeten Material auf.

---

*Ende des Handovers. Bei Widersprüchen zwischen diesem Dokument und einer Datei mit jüngerem Datum gilt die jüngere Datei, und dieses Handover bekommt einen datierten Nachtrag.*
