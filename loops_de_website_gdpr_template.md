# Loops.so für Deutschland – konservatives Starter-Set (Mustertexte)

**Stand:** 15.04.2026  
**Zweck:** praktische Mustertexte für Website, Newsletter-Anmeldung und Datenschutzerklärung bei Start mit Loops.  
**Wichtig:** Das ist **kein Rechtsrat**, sondern eine konservative Arbeitsvorlage. Bitte ersetze alle Platzhalter und gleiche die Texte mit deinen **tatsächlichen** Prozessen, Speicherfristen, Unternehmensdaten und deiner finalen Transfergrundlage ab.

---

## 1. Empfohlene Minimal-Variante für den Start

Wenn du mit Loops startest und dein Risiko klein halten willst, nimm diese Kombination:

1. **Separate Newsletter-Einwilligung** auf der Website.
2. **Double-Opt-In aktiv**.
3. **Website-Anmeldungen nur über den Loops Form Endpoint** bzw. die Loops-Formulare.
4. **Open- und Click-Tracking in Loops deaktiviert**.
5. **Datenschutzerklärung und Impressum** direkt am Formular verlinkt.
6. **Kein Marketing über transaktionale E-Mails**.

---

## 2. Copy für das Formular (empfohlene Fassung ohne Tracking)

### 2.1 Checkbox-Text

```text
[ ] Ich möchte E-Mails von [UNTERNEHMENSNAME] zu [z. B. Produktupdates, neuen Funktionen, Launch-News und Angeboten] erhalten. Für Versand und Verwaltung nutzen wir Loops (Astrodon Corporation, USA). Dabei kann es zu einer Übermittlung personenbezogener Daten in die USA kommen. Weitere Informationen zur Verarbeitung, zu eingesetzten Garantien und zu meinen Rechten finde ich in der Datenschutzerklärung. Meine Einwilligung kann ich jederzeit mit Wirkung für die Zukunft über den Abmeldelink in jeder E-Mail widerrufen.
```

### 2.2 Hinweis direkt unter dem Button

```text
Nach dem Absenden erhältst du eine E-Mail mit einem Bestätigungslink. Erst nach dieser Bestätigung ist deine Anmeldung abgeschlossen.
```

### 2.3 Links direkt unter oder neben dem Formular

```text
Datenschutzerklärung | Impressum
```

### 2.4 Sehr kurze Variante für enge Formulare

```text
[ ] Ich möchte Newsletter und Produktupdates von [UNTERNEHMENSNAME] erhalten. Hinweise zur Verarbeitung durch Loops (USA), zu internationalen Datenübermittlungen und zu meinen Widerrufsrechten finde ich in der Datenschutzerklärung.
```

> **Nicht empfohlen:** Marketing-Einwilligung in AGB verstecken, vorausgewählte Checkboxen oder Sammel-Einwilligungen für „Newsletter + Tracking + Werbung + Partnerangebote“.

---

## 3. Optionale Zusatz-Checkbox für Tracking

Diese Zusatz-Checkbox brauchst du **nur dann**, wenn du in Loops **Open- oder Click-Tracking eingeschaltet lässt**.

```text
[ ] Ich willige zusätzlich ein, dass Öffnungen und Klicks in Newsletter-E-Mails zu Analysezwecken gemessen werden.
```

### Zusatz-Hinweis

```text
Wenn du diese zusätzliche Einwilligung nicht einholen willst, schalte Open- und Click-Tracking in Loops vollständig aus.
```

---

## 4. Minimaler HTML-Snippet für die Website

```html
<form action="[LOOPS_FORM_ENDPOINT]" method="post">
  <label for="email">E-Mail</label>
  <input type="email" id="email" name="email" required>

  <input type="hidden" name="source" value="Website Newsletter">

  <label>
    <input type="checkbox" name="newsletterConsent" value="yes" required>
    Ich möchte E-Mails von [UNTERNEHMENSNAME] zu [Produktupdates / neuen Funktionen / Angeboten] erhalten. Für Versand und Verwaltung nutzen wir Loops (Astrodon Corporation, USA). Dabei kann es zu einer Übermittlung personenbezogener Daten in die USA kommen. Weitere Informationen zur Verarbeitung, zu eingesetzten Garantien und zu meinen Rechten finde ich in der Datenschutzerklärung. Meine Einwilligung kann ich jederzeit mit Wirkung für die Zukunft über den Abmeldelink in jeder E-Mail widerrufen.
  </label>

  <!-- Nur verwenden, wenn Tracking in Loops aktiv bleibt -->
  <!--
  <label>
    <input type="checkbox" name="trackingConsent" value="yes">
    Ich willige zusätzlich ein, dass Öffnungen und Klicks in Newsletter-E-Mails zu Analysezwecken gemessen werden.
  </label>
  -->

  <button type="submit">Jetzt anmelden</button>

  <p>Nach dem Absenden erhältst du eine E-Mail mit einem Bestätigungslink. Erst nach dieser Bestätigung ist deine Anmeldung abgeschlossen.</p>
  <p>
    <a href="/datenschutz">Datenschutzerklärung</a> ·
    <a href="/impressum">Impressum</a>
  </p>
</form>
```

> **Wichtig:** Das `required` bei der Newsletter-Checkbox passt nur für ein **reines Newsletter-Formular**. Wenn dein Formular auch ohne Newsletter-Anmeldung funktionieren soll (z. B. Account-Erstellung, Warteliste oder Download), muss die Newsletter-Einwilligung **freiwillig und getrennt** bleiben; dann `required` entfernen und die Anmeldung technisch separat behandeln.

---

## 5. Datenschutzerklärung – Mustertext (empfohlene konservative Fassung)

> Diese Fassung ist bewusst vorsichtig formuliert. An einer Stelle musst du die **konkret verwendete Transfergrundlage** einsetzen.

### 5.1 Newsletter / Produktupdates per E-Mail

```markdown
### Newsletter / Produktupdates per E-Mail

Wenn Sie sich für unseren Newsletter bzw. unsere Produktupdates anmelden, verarbeiten wir Ihre E-Mail-Adresse sowie die für Anmeldung, Bestätigung und Dokumentation Ihrer Einwilligung erforderlichen Protokolldaten. Sofern Sie freiwillig weitere Angaben machen (z. B. Ihren Namen), verarbeiten wir auch diese Daten.

Zweck der Verarbeitung ist der Versand von Newsletter-, Produkt- und Unternehmensinformationen sowie die Dokumentation Ihrer Einwilligung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.

Die Anmeldung erfolgt im Double-Opt-In-Verfahren. Nach Ihrer Anmeldung erhalten Sie eine E-Mail, in der Sie Ihre Anmeldung bestätigen müssen. Erst nach dieser Bestätigung wird Ihre Anmeldung aktiviert.

Für Versand und Verwaltung unserer E-Mails nutzen wir Loops, einen Dienst der Astrodon Corporation, USA. Empfänger Ihrer Daten ist insoweit Astrodon Corporation als unser Dienstleister für E-Mail-Versand und Listenverwaltung.

Dabei kann es zu einer Übermittlung personenbezogener Daten in die USA kommen. Rechtsgrundlage dieser Drittlandsübermittlung ist: [HIER DEINE TATSÄCHLICHE TRANSFERGRUNDLAGE EINSETZEN – z. B. Angemessenheitsbeschluss für zertifizierte Empfänger nach dem EU-U.S. Data Privacy Framework ODER Standardvertragsklauseln; zusätzlich angeben, wie eine Kopie der Garantien angefordert werden kann].

Wir speichern Ihre Daten, bis Sie Ihre Einwilligung widerrufen oder der Zweck der Verarbeitung entfällt. Daten, die wir zum Nachweis der Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, speichern wir nur so lange, wie dies hierfür erforderlich ist. [BITTE MIT DEINER TATSÄCHLICHEN SPEICHERLOGIK ABGLEICHEN.]

Die Bereitstellung Ihrer Daten ist freiwillig. Ohne Angabe Ihrer E-Mail-Adresse können wir Ihnen den Newsletter jedoch nicht zusenden.

Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, insbesondere über den Abmeldelink in jeder E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.

Ihnen stehen außerdem die gesetzlichen Betroffenenrechte zu, insbesondere auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Beschwerde bei einer Datenschutzaufsichtsbehörde.
```

---

## 6. Datenschutzerklärung – DPF-Variante (nur nach Live-Prüfung verwenden)

> **Nur verwenden, wenn du die gültige Zertifizierung im offiziellen Data Privacy Framework Register tatsächlich geprüft hast.**

Den Absatz zur Drittlandsübermittlung aus Abschnitt 5.1 kannst du dann durch diesen Absatz ersetzen:

```markdown
Dabei kann es zu einer Übermittlung personenbezogener Daten in die USA kommen. Soweit die Übermittlung an einen nach dem EU-U.S. Data Privacy Framework (DPF) gültig zertifizierten Empfänger erfolgt, stützen wir diese Übermittlung auf den Angemessenheitsbeschluss der Europäischen Kommission für das EU-U.S. Data Privacy Framework. Informationen zur Zertifizierung und weitere Hinweise zu der Datenverarbeitung durch Loops finden Sie in den Datenschutzinformationen des Anbieters. Sofern zusätzlich oder alternativ geeignete Garantien nach Art. 46 DSGVO eingesetzt werden, können Sie Informationen hierzu unter [KONTAKT-E-MAIL] anfordern.
```

---

## 7. Datenschutzerklärung – SCC-Variante (falls du ausdrücklich so dokumentierst)

Wenn du **nicht** mit einem DPF-Hinweis arbeiten willst oder zusätzlich auf **Standardvertragsklauseln** abstellst, kannst du statt des Platzhalters aus Abschnitt 5.1 diese Variante verwenden:

```markdown
Dabei kann es zu einer Übermittlung personenbezogener Daten in die USA kommen. Soweit kein Angemessenheitsbeschluss greift, stützen wir solche Übermittlungen auf die von der Europäischen Kommission bereitgestellten Standardvertragsklauseln sowie gegebenenfalls weitere geeignete Garantien. Informationen hierzu sowie eine Kopie der wesentlichen Garantien können Sie unter [KONTAKT-E-MAIL] anfordern.
```

---

## 8. Mini-Flow für Loops: So sollte dein Setup aussehen

### 8.1 In Loops

1. Unter **Settings → Sending** **Double-Opt-In einschalten**.
2. Unter **Settings → Sending** **Open- und Click-Tracking ausschalten**, solange du keine separate Tracking-Einwilligung einholst.
3. Unter **Settings → Domain** **Firmenname und Anschrift** pflegen, damit der Footer korrekt ergänzt wird.
4. Falls du Anmeldungen direkt einer Mailingliste zuordnen willst, diese Liste in Loops auf **Public** setzen.

### 8.2 Auf deiner Website

1. Formular an den **Loops Form Endpoint** anbinden.
2. Nur die Daten abfragen, die du wirklich brauchst.
3. Newsletter-Einwilligung **separat** erfassen.
4. Direkt am Formular auf **Datenschutzerklärung** und **Impressum** verlinken.
5. Unter dem Formular auf das **Double-Opt-In** hinweisen.

### 8.3 Was du für Marketing-Anmeldungen **nicht** tun solltest

- **Nicht** Website-Newsletter-Anmeldungen per `Create contact` oder `Update contact` API in Loops anlegen.
- **Nicht** davon ausgehen, dass API-basierte neue Kontakte automatisch vom Double-Opt-In geblockt sind.
- **Nicht** Marketing über transaktionale E-Mails verschicken.
- **Nicht** Open-/Click-Tracking aktiv lassen, wenn du dafür keine gesonderte Einwilligung einholst.

---

## 9. Interne Dokumentation, die du ab Tag 1 haben solltest

Lege intern mindestens diese Felder bzw. Nachweise ab:

- verwendeter Einwilligungstext / Textversion
- Formularquelle (z. B. „Footer Website“, „Waitlist Landingpage“)
- Zeitpunkt der Anmeldung
- Zeitpunkt der DOI-Bestätigung
- E-Mail-Adresse
- ggf. freiwillige Zusatzdaten
- Abmeldezeitpunkt
- Information, ob Tracking-Einwilligung erteilt wurde oder nicht

---

## 10. Nicht auf der Website, aber vor Go-Live erledigen

1. **Loops-DPA prüfen und dokumentieren.**
2. **Subprocessor-Liste sichern** und intern ablegen.
3. **Tatsächliche Transfergrundlage final festlegen**.
4. **Falls du die DPF-Variante nutzen willst: Zertifizierung live im offiziellen Register prüfen.**
5. **Impressum vollständig machen**.
6. **Tatsächliche Speicherfristen festlegen**.

---

## 11. Schnelle To-do-Liste für heute

### Unbedingt heute

- [ ] Impressum live
- [ ] Datenschutzerklärung mit Newsletter-Abschnitt live
- [ ] Separate Newsletter-Einwilligung am Formular live
- [ ] DOI-Hinweis am Formular live
- [ ] Loops Double-Opt-In aktiv
- [ ] Loops Tracking aus
- [ ] Firmenname + Adresse in Loops gepflegt

### Vor der ersten echten Kampagne

- [ ] DPA abgelegt
- [ ] Subprocessor-Liste abgelegt
- [ ] Transfergrundlage im Datenschutzhinweis finalisiert
- [ ] Testanmeldung inkl. DOI und Abmeldung einmal selbst durchgespielt

---

## 12. Platzhalter, die du ersetzen musst

- `[UNTERNEHMENSNAME]`
- `[Produktupdates / neuen Funktionen / Angeboten]`
- `[LOOPS_FORM_ENDPOINT]`
- `[KONTAKT-E-MAIL]`
- konkrete Speicherfrist oder Kriterien
- konkrete Transfergrundlage

---

## 13. Kurzfassung in einem Satz

Wenn du mit Loops sofort starten willst, ist die sicherste Startvariante für Deutschland: **separate Newsletter-Einwilligung + Double-Opt-In über den Loops Form Endpoint + Tracking aus + saubere Datenschutzerklärung + korrektes Impressum**.

---

## 14. Quellenbasis dieser Vorlage

Diese Vorlage basiert inhaltlich auf:

- BfDI: Hinweise zu **Newsletter-Bestellung auf Webseiten**
- BfDI: Hinweise zu **Zählpixeln**
- DSGVO / Art. 13 (Informationspflichten)
- Loops-Dokumentation zu **Double-Opt-In**, **Contact Properties**, **Forms**, **Editor/Footer**, **DPA** und **Privacy Policy**

