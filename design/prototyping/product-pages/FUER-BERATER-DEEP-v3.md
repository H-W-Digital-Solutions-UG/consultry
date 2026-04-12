# Fuer Berater & Projektleiter -- Deep Pain-Point Product Page v3

> **Seiten-Architektur:** 10 Sektionen, emotional aufgebaut
> **Erzaehlbogen:** Schmerz → Erkennung → Transformation → Beweis → Identifikation → Karriere → Impact
> **Personas:** Stefan Kraus (34, PL, SAP, 4-6h/Woche) + Lisa Tran (28, Consultant, Change Mgmt, 15-30 Min/Tag)
> **Prinzip:** Wir verkaufen keine Features. Wir erzaehlen einen Arbeitstag, der sich anfuehlt wie ihrer -- nur besser.

---

## Page-Flow (10 Sektionen)

```
1. HERO          → Schmerz-Identifikation ("Sie sind Berater, kein Daten-Pfleger")
2. PAIN CARDS    → 6 konkrete Frustrationen aus dem echten Alltag
3. TAGESABLAUF   → "08:00 — Stefans Morgen" als Scroll-Timeline
4. KNOWLEDGE     → Der Moment wo 47 Wiki-Treffer zu einer Antwort werden
5. STAFFING      → Die Card die Stefan in 2 Minuten entscheiden laesst
6. KARRIERE      → Lisas Entwicklungs-Kompass: "72% auf dem Weg zu Senior"
7. FLYWHEEL      → Stefan → Lisa → Katrin: Wie Wissen zurueckfliesst
8. PROFIL        → "Null manuelle Pflege": Auto-Update nach Projektabschluss
9. METRICS       → Harte Zahlen: Vorher/Nachher
10. CTA          → Emotional close
```

---

## 1. HERO

```
Surface: mktg-surface-hero (#1E1B18) + ambient glow
Badge:   [Fuer Berater & Projektleiter]  (brand-warm)

Headline (56px, Extra Bold, white):
  Stefan hat 4 Stunden an einer
  Checkliste gearbeitet, die es
  schon gab.

Subline (18px, Regular, neutral-500):
  Irgendwo im Wiki. Oder bei einem Kollegen. Oder im
  Sharepoint-Ordner von 2023. Niemand weiss es. Jeder
  macht es nochmal. 10-20% der Projektzeit fuer Probleme,
  die laengst geloest sind.

CTA Row:
  [Fruehzugang sichern]  (Gradient, lg)
  [Berater-Demo ansehen →]  (Ghost, lg)

Stats Row (4 Stat Counters):
  "10-20%"         →  der Projektzeit fuer bereits geloeste Probleme
  "5-10K EUR"      →  Bench-Kosten pro Berater pro Monat
  "75%"            →  durchschnittliche Profil-Vollstaendigkeit (ohne Consultry)
  "30+ Min"        →  fuer eine Antwort, die in 30 Sekunden da sein koennte
```

**Warum dieser Hero funktioniert:**
Er erzaehlt nicht, was Consultry kann. Er erzaehlt, was Stefan gestern passiert ist.
Direkt aus dem PRD-Szenario: "Stefan hat 4 Stunden an einer existierenden Checkliste gearbeitet."
Jeder Berater erkennt diesen Moment. Sofort. Persoenlich. Schmerzhaft.

---

## 2. PAIN CARDS — "Kommt Ihnen das bekannt vor?"

```
Surface: mktg-surface-dark (#2C2926)
Section Header (Centered, Dark):
  Kicker: ALLTAG OHNE CONSULTRY
  H2:     Kommt Ihnen das bekannt vor?
  Sub:    Sechs Momente, die jeder Berater kennt — und die
          niemand ausspricht.

Layout: 3x2 Grid, 6 Feature Cards (Dark)

CARD 1: "Die Checkliste, die es schon gibt"
  Icon:   [Document Search]
  Body:   Sie brauchen eine SAP-Migrationscheckliste.
          Die gibt es. Bei einem Kollegen. Im Wiki.
          In einem Sharepoint-Ordner von 2023.
          Sie finden sie nicht. Also bauen Sie eine neue.
          4 Stunden. Fuer etwas, das laengst existiert.

CARD 2: "Die Staffing-Anfrage ohne Kontext"
  Icon:   [Message Question]
  Body:   "Hey Stefan, haettest du Zeit fuer ein
          SAP-Projekt?" Per Slack. Kein Kunde.
          Kein Team. Kein Zeitraum. Keine Ahnung ob
          das Projekt zu Ihrer Karriere passt.
          Sie fragen 3x zurueck. 2 Tage spaeter wissen Sie Bescheid.

CARD 3: "Das veraltete Profil"
  Icon:   [User Clock / Outdated]
  Body:   9 Jahre SAP-Erfahrung. 3 Skills im Profil.
          Weil Profil-Pflege Ihre niedrigste Prioritaet ist.
          Und weil es langweilig ist.
          Ergebnis: Staffing-Anfragen die nicht passen.
          Weil das System Sie nicht kennt, wie Sie heute sind.

CARD 4: "5 Screens fuer den Projektstatus"
  Icon:   [Windows/Tabs]
  Body:   Morgens: SAP Solution Manager, Excel-Budget,
          Outlook, Jira, und dann fragen Sie Ihren
          PL-Kollegen per Teams.
          In 15 Minuten haben Sie ein ungefaehres Bild.
          Ungefaehr.

CARD 5: "Wo stehe ich eigentlich?"
  Icon:   [Compass / Direction]
  Body:   Sie wollen Senior Consultant werden.
          Was fehlt noch? Ihr Entwicklungsgespraech
          war vor 6 Monaten. Die Ziele stehen auf
          einem Excel-Zettel. Niemand trackt den Fortschritt.

CARD 6: "Wissen das in Koepfen steckt"
  Icon:   [Brain / Lock]
  Body:   Das Firmenwissen Ihrer Beratung steckt in den
          Koepfen einzelner Berater. In lokalen Dateien.
          In E-Mails. Wenn jemand geht, geht das Wissen mit.
          Wenn jemand fragt, wartet er auf Slack-Antworten.
```

---

## 3. TAGESABLAUF — "08:00 — Stefans Morgen, Kundenbüro"

```
Surface: mktg-surface-hero (#1E1B18)
Section Header (Left, Dark):
  Kicker: EIN TAG MIT CONSULTRY
  H2:     08:00 — Stefans Morgen. Kundenbüro. Laptop.
  Sub:    Stefan ist Senior Consultant und Projektleiter.
          Er leitet 2 Projekte mit 7 Beratern.
          So startet sein Tag.

Layout: Timeline Steps (Dark variant) — vertikal, 4 Steps

STEP 1: 08:00 — Dashboard-Check
  Badge:    [10 Min]
  Headline: "Wo stehen meine Projekte?"
  Body:     Nicht: SAP Solution Manager oeffnen, Excel-Budget
            pruefen, Outlook checken, Jira scannen, Kollegen fragen.
            Sondern: Ein Dashboard. Zwei Projekte auf einen Blick.

            RetailCorp: On Track. Alle Milestones im Plan.
            MedTech: At Risk. Budget 68% bei 55% Fortschritt.

            Copilot warnt:
            "Scope-Creep erkannt: 3 Legacy-Systeme, +25K EUR.
             Empfehlung: Change Request mit Kunden besprechen."

            Stefan sieht das Problem. Versteht die Ursache.
            Hat eine Handlungsempfehlung. In 10 Minuten.
            Nicht in 2 Meetings naechste Woche.

STEP 2: 08:22 — Eskalation in 7 Minuten
  Badge:    [7 Min]
  Headline: "Thomas alertieren" — ein Tap.
  Body:     Stefan tippt nicht: "Lieber Thomas, ich muss
            leider mitteilen, dass..." in eine E-Mail.
            Er tappt: [Thomas alertieren].

            Thomas bekommt einen P0-Alert auf seinem Handy.
            Nicht "Nachricht von Stefan" sondern:
            "MedTech: Scope-Creep. +25K EUR. +2 Wochen.
             Budget-Puffer: 32%. Empfehlung: Change Request.
             [Freigeben] [Kommentieren] [Eskalieren]"

            Thomas gibt frei. 08:22. 7 Minuten nach Erkennung.
            Nicht: E-Mail → Meeting → Praesentation → Entscheidung.

STEP 3: 09:30 — Firmenwissen in 30 Sekunden
  Badge:    [30 Sek]
  Headline: "Haben wir ein Template fuer SAP-Berechtigungskonzepte?"
  Body:     Stefan sitzt beim Kunden. Braucht eine konkrete Antwort.
            Nicht morgen. Jetzt.

            Er tippt in die Command Bar. 30 Sekunden spaeter:

            "Ja, 2 Templates:
             1. SAP-Autorisierungs-Konzept (RetailCorp Q4/2024)
             2. Berechtigungskonzept Retail (MM, SD, FI)
             [Oeffnen] [Download] [In Projekt-Docs]"

            Nicht: Wiki durchsuchen (47 Treffer).
            Nicht: Stefan per Slack fragen (Antwort in 4 Stunden).
            Sondern: Die Antwort. Aus dem kollektiven Wissen
            der gesamten Beratung. In 30 Sekunden.

STEP 4: 12:30 — Staffing-Entscheidung beim Mittagessen
  Badge:    [2 Min]
  Headline: Neue Staffing-Anfrage. Alles auf einer Card.
  Body:     Push-Notification. Stefan hat 5 Minuten zwischen
            zwei Meetings.

            RetailCorp AG. SAP S/4HANA Migration. Lead.
            Muenchen, Hybrid, KW 20-46. 1.800 EUR/Tag.
            Team: Lisa T., Tim K.

            Karriere-Fit: "Dein 3. Retail-Projekt → Senior+"
            Timing: "MedTech endet KW 19 — 1 Woche Puffer"
            Katrins Notiz: "Warm-Path ueber Thomas. Du kennst Lisa."

            [Zusagen] — ein Tap. 12:35.
            Katrin weiss Bescheid. Kalender reserviert. Fertig.
```

---

## 4. KNOWLEDGE AGENT — "Synthese, nicht Links"

```
Surface: mktg-surface-dark (#2C2926)
Layout: Feature Showcase Row (Image Left, Dark)

Headline: 47 Wiki-Treffer sind keine Antwort.
          30 Sekunden Synthese schon.

Body:     Berater loesen die gleichen Aufgaben immer wieder von Null.
          SAP-Migrationschecklisten. Stakeholder-Mapping-Templates.
          Compliance-Frameworks. Das Wissen existiert in Ihrer Beratung.
          Aber es steckt in Koepfen und lokalen Dateien.

          Der Knowledge-Agent aendert das:

          → Synthese aus historischen Projekten, nicht Dokument-Links
          → Experten-Vorschlag: "Lisa hat Retail-Change-Erfahrung"
          → Templates sofort nutzbar: [Oeffnen] [Download] [In Projekt]
          → Quellen transparent: "Quelle: Stefan K., MedTech Q2/2026"

          Lisa spart 2-3 Stunden Recherche.
          Stefan spart die Slack-Unterbrechung.
          Das Firmenwissen wird nutzbar. Nicht nur gespeichert.

[Screenshot: Knowledge-Agent Chat mit Synthese, Quellen, Experten-Tipp]
```

---

## 5. STAFFING CARD — "Die Anfrage, die alles sagt"

```
Surface: mktg-surface-hero (#1E1B18)
Layout: Feature Showcase Row (Image Right, Dark) mit Mobile-Mockup

Kicker: STAFFING NEU GEDACHT
Headline: Ihre Berater entscheiden in 2 Minuten.
          Nicht in 2 Tagen.

Body Left:
  Heute: "Hey Stefan, haettest du Zeit?"
  Per Slack. Ohne Kontext.
  Stefan fragt zurueck. Sie antworten in 4 Stunden.
  Er sagt zu. 2 Tage sind vergangen.

  Mit Consultry bekommt Stefan EINE Card.
  Alles drauf:

  → Kunde, Projekt, Rolle, Zeitraum, Tagessatz
  → Team: "Du kennst Lisa — 2x zusammengearbeitet"
  → Karriere-Fit: "Dein 3. Retail-Projekt → Senior+"
  → Timing-Warnung: "MedTech endet KW 19 — 1 Woche Puffer"
  → Katrins persoenliche Notiz mit Kontext

  Stefan liest. Stefan versteht. Stefan entscheidet.
  [Zusagen] — 12:35.
  Nicht: Nachfragen → Warten → Nochmal nachfragen → Zusagen.

Image Right: [Mobile Staffing-Card Mockup]
```

---

## 6. KARRIERE — "72% auf dem Weg zu Senior"

```
Surface: mktg-surface-dark (#2C2926)
Layout: Feature Showcase Row (Image Left, Dark)

Kicker: ENTWICKLUNG SICHTBAR MACHEN
Headline: Lisa sieht ihren Weg.
          Nicht irgendwann. Jetzt. Konkret.

Body:     Lisa will Senior Consultant werden.
          Heute steht das Ziel auf einem Excel-Zettel.
          Niemand trackt den Fortschritt. Das Entwicklungsgespraech
          war vor 6 Monaten. Sie fuehlt sich orientierungslos.

          Mit Consultry sieht Lisa:

          ███████░░░░░░░░░ 72% auf dem Weg zu Senior

          Erfuellt (3/5):
          ✓ Change Management: Senior-Level
          ✓ Team-Leadership: 5+ Interviews
          ✓ Branche: Pharma (MedTech-Projekt)

          In Arbeit (2/5):
          ○ PROSCI-Zertifizierung (Plan: Q3 2026)
          ○ Retail-Erfahrung (RetailCorp pending)

          Empfohlene naechste Schritte:
          1. RetailCorp-Projekt annehmen → +15%
          2. PROSCI-Zertifizierung → +10%
          3. Mentoring eines Junior → +5%

          Timeline: Senior-Level Ende Q4 2026 / Anfang Q1 2027.

          Das ist keine vage Karriereplanung.
          Das ist ein konkreter Weg mit Meilensteinen.

Image Left: [Entwicklungs-Dashboard Mockup: Progress Bar + Soll/Ist]
```

---

## 7. FLYWHEEL — "Stefans Wissen. Lisas Vorteil. Katrins Matching."

```
Surface: mktg-surface-hero (#1E1B18)
Section Header (Centered):
  Kicker: DAS WISSENS-SCHWUNGRAD
  H2:     15 Minuten Upload.
          Monate an Wirkung.

Layout: 3-Step horizontal flow mit Annotations

STEP 1: Stefan (Abends, Hotel, nach Go-Live)
  "Stefan laedt 5 Dokumente hoch. 15 Minuten."
  Cutover-Checkliste, Lessons Learned, Abschlussbericht.
  System extrahiert: 4 Knowledge-Bausteine.
  Profil aktualisiert sich automatisch:
  → SAP Fiori UX (NEU)
  → Data Migration Pharma: Mid → Senior
  → Profil-Vollstaendigkeit: 85% → 91%

  → Arrow →

STEP 2: Lisa (3 Monate spaeter, neues Projekt)
  "Lisa sucht: 'Datenmigration Pharma Checkliste'"
  Knowledge-Agent liefert: Stefans MedTech-Checkliste.
  47 Checkpunkte. Sofort nutzbar.
  Lisa spart 2-3 Stunden Recherche.
  "Hinweis: Du hast dieses Playbook selbst geschrieben!"
  → Ihr eigenes Wissen kommt zu ihr zurueck.

  → Arrow →

STEP 3: Katrin (Naechste Staffing-Runde)
  "Katrin sucht: 'Pharma S/4HANA Lead'"
  Stefan: Score 98/100. Pharma-Expert.
  Knowledge-Beitraege sichtbar. NPS 82.
  Feedback: "Very professional, excellent GxP understanding."
  Stefan wird fuer das naechste Pharma-Projekt gebucht.

  Annotation (zentriert, unter dem Flow):
  "Wissen das in Koepfen steckt, wird Firmenwissen.
   Firmenwissen wird Karrierevorteil.
   Karrierevorteil wird besseres Matching.
   Besseres Matching wird zufriedenere Kunden.
   Der Kreislauf schliesst sich. Automatisch."
```

---

## 8. AUTO-PROFIL — "Null manuelle Pflege"

```
Surface: mktg-surface-dark (#2C2926)
Layout: Feature Showcase Row (Image Right, Dark) mit Mobile Notification Mockup

Kicker: PROFIL-AKTUALISIERUNG
Headline: Ihr Profil aktualisiert sich.
          Sie bestaetigen.

Body:     Stefan hat 9 Jahre SAP-Erfahrung.
          Sein Profil zeigte 3 Skills. Weil er nie Zeit hat.
          Weil es langweilig ist. Weil es seine niedrigste Prioritaet ist.

          10 Minuten nach Projektabschluss:

          [Notification]
          "Basierend auf deinem MedTech-Projekt:
           ✓ SAP S/4HANA: Senior → Senior+
           ✓ Data Migration Pharma: Mid → Senior
           🆕 SAP Fiori UX: Mid (neu erkannt)
           📈 Profil-Vollstaendigkeit: 85% → 91%
           [OK, akzeptieren]  [Aenderungen pruefen]"

          Stefan tappt [OK]. 2 Minuten. Sein Profil ist live.
          Katrin's Matching-Engine sieht ihn sofort als
          Pharma-Experten. Er bekommt passende Projekte.
          Ohne je einen Skill manuell eingetippt zu haben.

          Das ist der Unterschied zwischen 75% und 91%
          Profil-Vollstaendigkeit. Nicht Fleiss. Automatisierung.

Image Right: [Mobile Profil-Update Notification Mockup]
```

---

## 9. METRICS — "Die Zahlen sprechen"

```
Surface: mktg-surface-hero (#1E1B18)
Layout: Section mit Metric Cards (Dark), 2 Rows

Row 1: Vorher (neutral/grau, gedaempft)
  "30+ Min"     →  Wissenssuche pro Anfrage
  "75%"         →  Profil-Vollstaendigkeit (veraltet)
  "2 Tage"      →  Staffing-Entscheidung
  "0%"          →  Wissens-Wiederverwendung

Row 2: Nachher (brand-warm/orange, leuchtend)
  "<5 Min"      →  Knowledge-Agent Synthese
  "91%"         →  Profil (auto-aktualisiert)
  "2 Min"       →  Staffing-Entscheidung (eine Card)
  "100%"        →  Wissen durchsuchbar, wiederverwendbar

Annotation:
  "Stefan nutzt Consultry 4-6 Stunden pro Woche. Nicht pro Tag.
   Lisa nutzt Consultry 15-30 Minuten pro Tag.
   Consultry ist kein Admin-Tool. Es ist ein Arbeitsmittel."
```

---

## 10. CTA BAND

```
Component: Marketing CTA Band (Dark)

Headline: Sie loesen Probleme fuer Ihre Kunden.
          Wer loest die Probleme fuer Sie?

Subline:  Consultry arbeitet im Hintergrund. Damit Sie sich
          auf das konzentrieren koennen, wofuer man Sie gebucht hat.

CTA:      [Fruehzugang sichern]  [Berater-Demo ansehen →]
```
