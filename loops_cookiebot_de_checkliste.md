# Zusatz: Loops.so + Cookiebot für Deutschland

> **Hinweis:** Dies ist keine Rechtsberatung, sondern eine konservative technische und textliche Vorlage für ein deutsches Website-Setup mit Cookiebot und Loops.so.

## 1. Wichtigste Trennung

Cookiebot ist für **Website-Cookies, Pixel, Skripte und Tracking-Technologien** zuständig.

Loops ist für **Newsletter-/E-Mail-Verarbeitung** zuständig.

Die Einwilligung in „Marketing-Cookies“ über Cookiebot ist **keine automatische Newsletter-Einwilligung**. Für Newsletter, Produkt-Updates oder sonstige werbliche E-Mails brauchst du weiterhin eine separate Newsletter-Einwilligung am Formular, idealerweise mit Double-Opt-In.

## 2. Cookiebot: Sofort-Checkliste

### Banner

- Banner auf Deutsch anzeigen, wenn du Nutzer in Deutschland adressierst.
- Auf der ersten Ebene eine echte Wahl anbieten:
  - **Alle akzeptieren**
  - **Alle ablehnen**
  - **Auswahl speichern / Einstellungen**
- Keine nicht notwendigen Kategorien vorauswählen.
- Kein „Nudging“: Ablehnen darf nicht versteckt, grauer, schwerer erreichbar oder umständlicher sein als Akzeptieren.
- Nicht notwendige Cookies/Skripte/Pixels erst nach Einwilligung laden.

### Kategorien

Nutze die üblichen Cookiebot-Kategorien:

- **Notwendig:** nur technisch zwingend erforderliche Cookies, z. B. Consent-Speicherung, Sicherheitsfunktionen, Warenkorb/Login.
- **Präferenzen:** z. B. Sprache, UI-Einstellungen.
- **Statistik:** z. B. Analytics, Reichweitenmessung, Heatmaps.
- **Marketing:** z. B. Ads, Retargeting, Pixel, Profiling, Marketing-Automation-Tracking.

Wichtig: Einen Dienst nur dann als „Notwendig“ klassifizieren, wenn er wirklich für die vom Nutzer ausdrücklich gewünschte Grundfunktion nötig ist.

### Cookie-Erklärung

- Cookiebot Cookie Declaration auf der Website einbinden, entweder als eigene Cookie-Richtlinie oder in der Datenschutzerklärung.
- In Footer oder Datenschutzseite dauerhaft einen Link **„Cookie-Einstellungen ändern“** anbieten.
- Nach jedem neuen Tool oder Tracking-Script Cookiebot-Scan prüfen und unklassifizierte Cookies manuell bewerten.

Beispiel-Link für die Datenschutzseite:

```html
<a href="javascript: Cookiebot.renew()">Cookie-Einstellungen ändern</a>
```

Optional zusätzlich:

```html
<a href="javascript: Cookiebot.withdraw()">Cookie-Einwilligung widerrufen</a>
```

## 3. Loops: Wie es mit Cookiebot zusammenspielt

### Fall A: Eigene HTML-Form + Loops Form Endpoint

Das ist die sauberste Variante.

Du baust ein eigenes Formular auf deiner Website und sendest die Daten erst nach aktivem Absenden durch den Nutzer an den Loops Form Endpoint.

Dann gilt:

- Cookiebot ist für das Formular selbst normalerweise nicht das Hauptthema.
- Du brauchst trotzdem eine Newsletter-Einwilligung am Formular.
- Du brauchst Double-Opt-In in Loops.
- Du brauchst den Hinweis in der Datenschutzerklärung, dass Loops/Astrodon in den USA als Empfänger/Auftragsverarbeiter eingesetzt wird.
- Du solltest nur die minimal nötigen Daten an Loops senden, z. B. E-Mail, optional Name, Quelle, Liste.

### Fall B: Loops-Embed, Loops-Script, Drittanbieter-Widget oder Tracking auf der Website

Wenn du Loops oder ein anderes Tool per Script, iFrame oder Widget einbindest und dadurch Cookies, lokale Speicherzugriffe, Pixel oder andere Tracker gesetzt werden, musst du es in Cookiebot scannen und korrekt kategorisieren.

- Reines funktionales Formular ohne Tracking: eher nicht als Marketing-Cookie behandeln, aber prüfen.
- Tracking, Profiling, Retargeting oder Marketing-Automation auf der Website: regelmäßig **Marketing** oder ggf. **Statistik**.
- Vor Einwilligung blockieren, wenn nicht notwendig.

Empfehlung: Für den Start **kein Loops-Embed-Script**, sondern eigenes Formular + Form Endpoint.

## 4. E-Mail-Tracking: Nicht über Cookiebot lösen

Cookiebot verwaltet Website-Einwilligungen. Es löst nicht automatisch das Thema **Open Tracking / Click Tracking in E-Mails**.

Für Deutschland ist die konservative Empfehlung:

- In Loops Marketing-E-Mail-Tracking deaktivieren.
- Keine Open-Tracking-Pixel verwenden.
- Keine getrackten Redirect-Links verwenden, sofern du keine separate Einwilligung hast.

Wenn du Tracking trotzdem nutzen willst, brauchst du am Newsletter-Formular eine **separate optionale Einwilligung**, z. B.:

```md
[ ] Ich bin damit einverstanden, dass Öffnungen und Klicks in den E-Mails gemessen werden, um die Inhalte zu verbessern. Diese Einwilligung kann ich jederzeit mit Wirkung für die Zukunft widerrufen.
```

Wenn diese Checkbox nicht aktiviert wird, muss der Newsletter ohne dieses Tracking versendet werden.

## 5. Textbaustein für Datenschutzerklärung: Cookiebot

```md
### Cookie-Einwilligung mit Cookiebot

Wir verwenden auf unserer Website die Consent-Management-Plattform Cookiebot CMP von Usercentrics A/S, Dänemark. Cookiebot hilft uns dabei, Einwilligungen für den Einsatz nicht notwendiger Cookies und vergleichbarer Technologien einzuholen, zu dokumentieren und zu verwalten.

Beim Aufruf unserer Website werden technisch erforderliche Informationen verarbeitet, um den Consent-Banner anzuzeigen, die Auswahl der Nutzerinnen und Nutzer zu speichern und den Nachweis der Einwilligung bzw. Ablehnung führen zu können. Hierbei können insbesondere Informationen zum verwendeten Browser, Datum und Uhrzeit der Auswahl, die aufgerufene URL, der Einwilligungsstatus sowie eine anonymisierte oder gekürzte IP-Adresse verarbeitet werden.

Die Rechtsgrundlage für den Einsatz von Cookiebot ist unser berechtigtes Interesse an einer rechtskonformen, nutzerfreundlichen Verwaltung von Cookie- und Tracking-Einwilligungen gemäß Art. 6 Abs. 1 lit. f DSGVO. Soweit Cookiebot technisch erforderliche Informationen auf Ihrem Endgerät speichert oder ausliest, erfolgt dies zur Bereitstellung der ausdrücklich gewünschten Einwilligungsverwaltung.

Nicht notwendige Cookies und vergleichbare Technologien setzen wir nur ein, wenn Sie zuvor eingewilligt haben. Sie können Ihre Auswahl jederzeit über den Link „Cookie-Einstellungen ändern“ anpassen oder widerrufen.
```

## 6. Textbaustein für Footer / Datenschutzseite

```md
[Cookie-Einstellungen ändern](javascript:Cookiebot.renew())
```

Falls Markdown-JavaScript-Links in deinem CMS blockiert werden, verwende HTML:

```html
<a href="javascript: Cookiebot.renew()">Cookie-Einstellungen ändern</a>
```

## 7. Textbaustein für Newsletter-Formular mit Cookiebot + Loops

```md
[ ] Ich möchte E-Mail-Updates von **[Unternehmen]** zu **[Produkt / Launch / Angeboten / Neuigkeiten]** erhalten. Wir verwenden Loops, einen Dienst der Astrodon Corporation, USA, zur Verwaltung und zum Versand dieser E-Mails. Weitere Informationen, insbesondere zu Empfängern, Drittlandübermittlungen und Widerrufsmöglichkeiten, finden Sie in unserer Datenschutzerklärung.

Nach der Anmeldung erhalten Sie eine E-Mail zur Bestätigung Ihrer Anmeldung. Erst nach Bestätigung werden Sie in den Verteiler aufgenommen.
```

Optional nur, wenn E-Mail-Tracking aktiv bleiben soll:

```md
[ ] Ich bin zusätzlich damit einverstanden, dass Öffnungen und Klicks in den E-Mails gemessen werden, um die Inhalte zu verbessern.
```

## 8. Technische Empfehlung für dein aktuelles Setup

1. Cookiebot im Head einbinden.
2. Auto-Blocking aktivieren oder nicht notwendige Skripte manuell mit `data-cookieconsent` blockieren.
3. Google Analytics, Meta Pixel, Ads, Hotjar, PostHog, etc. nur nach Statistik- bzw. Marketing-Einwilligung laden.
4. Loops-Newsletter über eigenes Formular + Loops Form Endpoint einbinden.
5. Loops Double-Opt-In aktivieren.
6. Loops Open-/Click-Tracking deaktivieren, solange keine separate Tracking-Einwilligung eingeholt wird.
7. Cookie Declaration und „Cookie-Einstellungen ändern“-Link auf der Website veröffentlichen.
8. Datenschutzerklärung um Cookiebot und Loops ergänzen.
9. Cookiebot-Scan nach Veröffentlichung prüfen und alle unbekannten Cookies klassifizieren.
10. DPA/AVV mit Cookiebot/Usercentrics und Loops abschließen bzw. akzeptieren.

## 9. Quellen zur Prüfung

- Cookiebot Auto-Blocking: https://support.cookiebot.com/hc/en-us/articles/360009074960-Automatic-cookie-blocking
- Cookiebot Cookie Declaration: https://support.cookiebot.com/hc/en-us/articles/360004374474-What-is-included-in-the-Cookie-Declaration-Cookiebot-Admin
- Cookiebot Consent-Änderung/Widerruf: https://support.cookiebot.com/hc/en-us/articles/360003798814-Changing-or-withdrawing-consent
- Cookiebot Terms: https://www.cookiebot.com/en/terms-of-service/
- Loops Double-Opt-In: https://loops.so/docs/contacts/double-opt-in
- Loops Form Endpoint: https://loops.so/docs/forms/custom-form
- BfDI Newsletter / Tracking-Pixel: https://www.bfdi.bund.de/DE/Fachthemen/Inhalte/Telemedien/Newsletter.html
- BfDI Zählpixel: https://www.bfdi.bund.de/DE/Buerger/Inhalte/Telemedien/Z%C3%A4hlpixel.html
```
