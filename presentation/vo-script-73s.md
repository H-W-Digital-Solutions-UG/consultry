# Consultry Pitch — Voiceover-Skript (73,5s, storyline-aligned)

Für: `consultry-pitch-animation-1080p60-logo-safe-master.mp4`
~160 Wörter · ruhiges Executive-Tempo (~130 WpM) · Betonungszeilen aus der TTS-Regie eingebaut.
Es werden nur Claims aus dem Video gesprochen — keine neuen Zahlen/Metriken.

---

## A · Timecode-Version (für den Schnitt)

| TC | Sektion im Video | Text | Wörter |
|---|---|---|---|
| 0:00–0:09 | /01 Hook — „Ihre Kunden erwarten mehr." | Ihre Kunden erwarten mehr. Schneller. Präziser. Fundierter. — Und das Wissen, das Sie dafür brauchen, existiert längst. In Ihrer Firma. | 21 |
| 0:09–0:20 | Problem — Tool-Icons, „Verstreut" | Das Problem: Es steckt in Excel-Sheets, Verträgen und Projektordnern. In Köpfen, auf PCs, in endlosen Tools. **Alles verteilt.** Und wenn jemand geht — geht es mit. | 27 |
| 0:20–0:26 | Logo-Reveal — Ihr Geschäft/Marke/Wissen | **Consultry bringt es zusammen.** Ihr Geschäft. Ihre Marke. Ihr Wissen. Eine Plattform. | 12 |
| 0:26–0:36 | /02 Plattform — Signal & Team Cards | Signal erkennt Ausschreibungen und Trends, die zu Ihnen passen. Team kennt Projekte und Auslastung — und meldet Faktura-Risiken, bevor sie Geld kosten. | 23 |
| 0:36–0:42 | /03 Angebot — Prompt → Draft | Ihr Vertrieb fragt — Consultry antwortet. Mit dem richtigen Angebot, aus Ihren echten Referenzen. | 14 |
| 0:42–0:51 | /04 Wissen — „wenn es zählt" | Und im Kundentermin ist Ihr Wissen da, wenn es zählt. Die richtige Antwort — in Sekunden. Alle Risiken im Blick. | 20 |
| 0:51–1:05 | /05 Business Case — „Kein AI-Chatbot" + ROI-Chart | **Kein AI-Chatbot.** Das Betriebssystem für Beratungsarbeit — von Signal über Angebot und Staffing bis Wissen und Abrechnung. Die Rechnung ist einfach: Ein gesparter Beratertag zahlt Consultry. **Der Rest ist Marge.** | 31 |
| 1:05–1:13 | Outro — CTA „Auf die Warteliste" | Weniger Tools. Mehr Effizienz. **Mehr Beratung.** Consultry. Jetzt auf die Warteliste. | 12 |

**Gesamt: 160 Wörter ≈ 71–74s** bei ruhigem Pitch-Tempo.

---

## B · TTS-ready Text (direkt ins Audio-Modell, unter die Regieanweisung)

```
Ihre Kunden erwarten mehr. Schneller. Präziser. Fundierter.
Und das Wissen, das Sie dafür brauchen, existiert längst. In Ihrer Firma.

Das Problem: Es steckt in Excel-Sheets, Verträgen und Projektordnern. In Köpfen, auf PCs, in endlosen Tools.
Alles verteilt.
Und wenn jemand geht — geht es mit.

Consultry bringt es zusammen.
Ihr Geschäft. Ihre Marke. Ihr Wissen. Eine Plattform.

Signal erkennt Ausschreibungen und Trends, die zu Ihnen passen.
Team kennt Projekte und Auslastung — und meldet Faktura-Risiken, bevor sie Geld kosten.

Ihr Vertrieb fragt — Consultry antwortet.
Mit dem richtigen Angebot, aus Ihren echten Referenzen.

Und im Kundentermin ist Ihr Wissen da, wenn es zählt.
Die richtige Antwort — in Sekunden. Alle Risiken im Blick.

Kein AI-Chatbot.
Das Betriebssystem für Beratungsarbeit — von Signal über Angebot und Staffing bis Wissen und Abrechnung.
Die Rechnung ist einfach: Ein gesparter Beratertag zahlt Consultry.
Der Rest ist Marge.

Weniger Tools. Mehr Effizienz. Mehr Beratung.
Consultry. Jetzt auf die Warteliste.
```

---

## C · Sync-Hinweise für die Abmischung

- **Anker-Punkte:** „Alles verteilt." muss auf den Icon-Block (~0:14) fallen, „Consultry bringt es zusammen." exakt auf den Logo-Reveal (~0:21), „Kein AI-Chatbot." auf die gleichnamige Karte (~0:51), „Der Rest ist Marge." während das ROI-Chart voll aufgebaut ist (~1:02).
- **Pausen:** ~300 ms nach kurzen Sätzen, ~700 ms zwischen den Absätzen (= Sektionswechsel im Video). Die Leerzeilen im TTS-Text erzeugen das bei den meisten Modellen automatisch.
- **Toleranz:** Läuft die Aufnahme auf 75–76s, zuerst die Pausen bei 0:20 und 0:51 kürzen — nicht das Tempo erhöhen.
- **Kürzungs-Reserve** (falls >77s): „In Ihrer Firma." (Hook) und „Eine Plattform." (Bridge) können ersatzlos entfallen (−6 Wörter ≈ −3s).
- Aussprache gemäß Regie: kon-SALL-tri · Ei-Ai-Chatbot · „Faktura" deutsch.
