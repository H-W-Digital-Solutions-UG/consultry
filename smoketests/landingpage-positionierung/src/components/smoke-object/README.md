# SmokeObject für React 19.3+

`SmokeObject` ergänzt die vorhandenen transparenten Hero-Bilder um eine kurze, durch natives Scrollen
geführte 3D-Bewegung. `models.ts` baut separate volumetrische Körper: vier gestaffelte Korpusplatten,
drei dicke optische Scheiben oder sechs abgerundete Ledger-Blöcke mit kurzen Verbindern.

Die Modelle sind **visuelle Rekonstruktionen** nach den gelieferten Bildern und MP4s. Sie sind keine
Original-3D-Dateien von Higgsfield und bilden dessen Geometrie, Materialien und Licht nur näherungsweise
nach. Als sofort sichtbarer, statischer Fallback dienen verlustfreie transparente WebPs, die aus derselben
rekonstruierten Szene erzeugt wurden. Die ursprünglichen Higgsfield-Bilder bleiben unverändert als Referenzen erhalten.

Den Ordner `smoke-object` in die React-Anwendung übernehmen und `three` (hier 0.186) sowie für TypeScript
`@types/three` installieren. Das Component-Modul importiert sein gekapseltes CSS. Tailwind, Routing, eine
Animationsbibliothek und Consultry-Tracking sind nicht erforderlich.

```tsx
import { SmokeObject } from "./smoke-object/SmokeObject";

export function LedgerHero() {
  return (
    <section data-scroll-scene>
      <h1>Agenten, die ihre Arbeit belegen.</h1>
      <div style={{ width: "100%", maxWidth: 720 }}>
        <SmokeObject
          variant="ledger"
          poster={
            <img
              src="/hero/ledger-scene-720.webp"
              srcSet="/hero/ledger-scene-480.webp 480w, /hero/ledger-scene-720.webp 720w"
              sizes="(min-width: 1024px) 720px, 100vw"
              width={720}
              height={720}
              alt=""
              fetchPriority="high"
              decoding="async"
            />
          }
        />
      </div>
    </section>
  );
}
```

Die öffentliche API besteht aus vier Props:

| Prop | Bedeutung |
| --- | --- |
| `variant` | `corpus`, `brand` oder `ledger`; bestimmt Modell, Material und die kurze Bewegung seiner Einzelkörper. |
| `poster` | Transparentes WebP oder PNG als `<img>` oder `<picture>` mit einem `<img>`; für einen passenden Übergang ein Standbild derselben Szene verwenden. |
| `className` | Optionale Klasse am äußeren Container, etwa für die Breite innerhalb der Hero-Komposition. |
| `annotated` | Optional, standardmäßig `false`: drei dekorative Markierungen `01`/`02`/`03` an den zugehörigen Körpern; die erklärenden HTML-Texte stehen außerhalb des Embeds. |

Der quadratische Bildraum und die Bildmaße im HTML vermeiden Layout-Verschiebungen. Der Elterncontainer
bestimmt die Breite. Canvas und Poster sind dekorativ und für assistive Technologien ausgeblendet; Claims,
Beschriftungen und Handlungswege gehören in das normale HTML außerhalb des Embeds. Es gibt keine
Objektauswahl, Play-/Pause-Leiste, Drag-Steuerung oder automatische Abfolge im Hero. Produktbeispiele können
unterhalb des Heros ihre eigenen fachlichen Bedienelemente anbieten.

## Einbettung und Laden

Das Modul beginnt mit `"use client"` und kann in eine Next.js-Serverseite eingebettet werden. Der Poster-Baum
ist im serverseitigen HTML vorhanden. Der Renderer bereitet zunächst die vollständig angeordnete Pose des
Posters vor. Erst nach einem erfolgreich gerenderten Frame **und an einem passenden Scroll-Endpunkt**
ersetzt der Canvas das Poster. Fortschritt `0` und `1` zeigen dieselbe Anordnung; dazwischen bleiben die
Einzelkörper geöffnet. Es gibt keine Überblendung.

Ist der erste 3D-Frame erst während einer bereits begonnenen Scrollbewegung bereit, bleibt das Poster für
diesen Teil der ersten Passage sichtbar. Der vorbereitete Canvas wartet unverändert in der Poster-Pose,
bis natives Scrollen den Anfang oder das Ende des kurzen Bereichs erreicht. Erst dann wechselt die Ansicht.
Es gibt kein automatisches Nachholen der verpassten Bewegung und keinen Sprung zu einem bereits geöffneten
Modell. Nach dem Wechsel steuert weiteres Vorwärts- oder Rückwärtsscrollen die Szene normal. Die äußere
Bildposition und die erklärenden HTML-Texte können während des Wartens weiterhin dem Scrollen folgen.

Die Landingpages verwenden `public/hero/{variant}-scene-{480,720}.webp`. Die 720-px-Dateien sind
90.426 Byte für Korpus, 71.768 Byte für Alignment und 61.284 Byte für Ledger groß. Sie ersetzen auf den drei
3D-Seiten die ursprünglichen Hero-Poster; es wird kein zusätzliches Referenzbild für den Renderer heruntergeladen.

**Nur `SmokeObject.tsx` importieren: `runtime.ts` und `models.ts` nicht statisch importieren und den dynamischen
Chunk nicht per `modulepreload` vorladen.**

Nach dem `load`-Ereignis wartet das Embed auf die Decodierung des Posters und gibt dem Browser über zwei
`requestAnimationFrame`-Callbacks Gelegenheit, das Bild zuerst darzustellen. Anschließend lädt es Three.js
in einem Idle-Fenster, sofern sich der Bildcontainer innerhalb des Sichtbarkeitsbereichs mit 160 px Vorlauf
befindet. `requestIdleCallback` erhält ein Timeout von 2.500 ms; ohne diese API folgt der nächste Timer-Task
ohne zusätzliche feste Verzögerung. Ein Hintergrund-Tab, eine entfernte Szene oder Nutzerpräferenzen können
das Laden verhindern beziehungsweise verzögern.

`renderer.compileAsync()` bereitet die Material- und Glas-Shader vor, während das Poster sichtbar bleibt.
Die abgeschlossene Kompilierung allein schaltet die Ansicht noch nicht um: Dazu muss der Renderer einen
Frame erfolgreich zeichnen und der Scrollfortschritt einen der beiden passenden Endpunkte erreichen.

Bei `prefers-reduced-motion: reduce`, Data Saver oder 2G bleibt es beim statischen Poster; es gibt keinen
Aktivierungsdialog. Wird reduzierte Bewegung nachträglich aktiviert, zeigt das CSS wieder das statische Poster.
Importfehler, fehlendes WebGL und Kontextverlust lassen die Bildansicht bestehen. Ohne JavaScript
bleibt ein statisches Bild sichtbar. Claims, Navigation und Anmeldung hängen nicht vom Renderer ab.

## Kurzer Scrollbereich

Das nächste Element mit `data-scroll-scene` definiert den Bezug; ohne dieses Attribut dient der Bildcontainer
als Bezug. Die Bewegung beginnt erst nach dem Eintritt in den Scrollbereich und sobald die Mitte des Objekts
die Linie bei 76 % der Viewporthöhe erreicht. Danach wird sie über 420–560 px nativen Scrollweg abgespielt
(`clamp(420, viewportHeight × 0.58, 560)`). Das sind beispielsweise rund 557 px bei 960 px Viewporthöhe
und 490 px bei 844 px Viewporthöhe. Anschließend bleibt das Modell stehen. Die Berechnung verwendet
Layoutkoordinaten ohne die visuelle Verschiebung der äußeren Hero-Ebene.

Der Fortschritt bildet **vollständig angeordnet → deutlich geöffnet → vollständig angeordnet** ab. Die
Korpusplatten lösen sich kurz voneinander, die drei Scheiben öffnen ihren Abstand entlang der gemeinsamen
Achse, und die Ledger-Blöcke trennen sich räumlich, während ihre Verbindungen mitgeführt werden. Kamera und
Grundorientierung bleiben fest. Rückwärtsscrollen führt durch dieselbe kurze Bewegung zurück.

Die Landingpage führt die äußere Objektebene beim nativen Scrollen etwas mit, damit die 3D-Bewegung länger
im Blick bleibt. Dafür erhält die Bühne auf großen Desktop-Ansichten 1120 px Höhe; der mobile Objektraum
ist 460 px hoch. Die Verschiebung folgt `--scene-progress`, nicht der Gesamthöhe des Heros. Zusätzliche
mobile Erklärungstexte verändern dadurch nicht den Ablauf der Bewegung. Diese Rahmung gehört zur
Hero-Komposition, nicht zur öffentlichen Embed-API. Das Posterbild selbst bleibt unverändert; auch beim
Fallback kann sein äußerer Container dieser Rahmung folgen.

Kein Scroll-Hijacking, kein Pinning, kein zusätzlicher Scroll-Spacer und keine zeitgesteuerte Schleife.
Reduzierte Bewegung schaltet auch die Verschiebung der äußeren Hero-Ebene ab.

## Inhaltliche Erläuterungen zur Szene

`HeroInsights.tsx` ergänzt die Landingpages beim ersten Scrollen um drei fachliche Argumente je Variante.
Alle drei bleiben danach gleichzeitig lesbar; es gibt keinen automatischen Wechsel. Die kleinen
Markierungen `01`/`02`/`03` folgen den ausgewählten Körpern in der 3D-Szene und ordnen ihnen die Texte zu.
Sie sind keine zusätzlichen Bedienelemente.

| Variante | Zugeordnete Körperindizes, ab null | Argumente |
| --- | --- | --- |
| Korpus | `0`, `1`, `3` | Fristen mit Quelle; Angebote wiederverwenden; Quellen bleiben führend. |
| Alignment | `0`, `1`, `2` | Aktuell und belegt; die richtige Fassung; Verwendung mit Freigabe. |
| Ledger | `0`, `3`, `4` | Kontext mit Rechten; Belege statt Stimmen; Menschen geben frei. |

Die Argumente sind normales, serverseitig gerendertes HTML außerhalb des dekorativen Canvas. Sie sind für
assistive Technologien auch ohne WebGL zugänglich und werden bei reduzierter Bewegung oder ohne JavaScript
sichtbar angezeigt. Wer `annotated` in einer anderen Anwendung nutzt, stellt die entsprechende zugängliche
HTML-Erklärung selbst daneben.

## Rendering-Budget und Lebenszyklus

- Eine orthografische Kamera und separate, abgerundete 3D-Körper; Physical-/Standard-Materialien für Ton und Glas.
- SRGB-Ausgabe und ACES-Tone-Mapping. Die Materialien werden lokal beleuchtet; sie sind keine Texturkopie des Posters.
- Kleine prozedurale Oberflächentextur und eine lokal berechnete Studio-Umgebung mit 128 px Auflösung. Keine zusätzlichen Modelle, HDRs, Bilder oder Videos werden heruntergeladen.
- Der Glas-Rendering-Pass läuft mit halber Auflösung. Es gibt keinen Postprocessing-Composer und keine Schattenkarten.
- Maximal 30 gerenderte Frames pro Sekunde, DPR höchstens 1,5 und höchstens 720 physische Pixel auf der langen Canvas-Seite.
- Neuzeichnen nur bei geändertem Scrollfortschritt, Größe, Präferenz oder erneuter Sichtbarkeit; keine Render-Schleife im Ruhezustand.
- Größenmessung anhand der Layoutmaße, unabhängig von der Scroll-Transformation des Elterncontainers. Unveränderte Maße setzen den Zeichenpuffer nicht erneut zurück.
- Eine tatsächliche Größenänderung setzt den Canvas erst innerhalb des nächsten Zeichenvorgangs zurück und rendert ihn im selben Task neu; dieser Vorgang wartet nicht auf die 30-fps-Drosselung. So bleibt zwischen Messung und Neuzeichnen der vorhandene Frame stehen.
- Unsichtbare Szene und Hintergrund-Tab pausieren das Rendering. Unmount entfernt Frames, Timer, Beobachter, Resize- und Kontext-Listener sowie Modell-, Umgebungs- und Renderer-Ressourcen. Eine später abgeschlossene Shader-Kompilierung startet danach keinen neuen Frame.

Mehrere Körper und der Glas-Pass benötigen mehrere Zeichenoperationen. Die frühere Aussage über eine einzige
Zeichenoperation bezog sich auf v5 mit einer texturierten 2D-Fläche und gilt für diese Rekonstruktion nicht.

## Verifikation

Für die Ladeübergabe in v7 sind Produktionsbuild, Import-/Paketbudget und 74 gezielte Browserprüfungen
bestanden. Darunter sind verzögerte Downloads bei bereits halbem Scrollfortschritt für alle drei Szenen auf
319 × 592 px (DPR 2,8) und 1440 × 1100 px, Übergabe an beiden Endpunkten, normale Ladewechsel mit Bildvergleich,
Größenänderungen, Reduced Motion, Data Saver, 2G und Renderer-Ausfälle. Der optionale Chunk umfasst
133,3 KiB gzip bei 145 KiB Budget. [Protokolle und Grenzen im App-README](../../../README.md#verifikation-v7--ladeübergabe).

Die früheren 127 Browser-/Szenenprüfungen und 22 Domänentests aus v6 dokumentieren zusätzlich Geometrie,
Abstände, Argumente und Formularabläufe; sie wurden für den Ladefix nicht vollständig wiederholt.
