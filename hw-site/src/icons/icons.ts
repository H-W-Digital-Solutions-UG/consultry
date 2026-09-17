/**
 * Monoline-Icon-Set der H&W-Website.
 *
 * Bildsprache (Anlehnung an das Consultry-Motiv: Knoten, Links, Orbital-Lanes):
 * - Raster 24x24, Schutzzone 1px, Strichstärke 1.5, runde Enden/Ecken
 * - stroke="currentColor", keine Flächen – einzige Ausnahme: kleine
 *   Knotenpunkte (r <= 1.5) mit fill="currentColor"
 * - Knotenformen: Kreis (Prozess/Akteur), Quadrat (System/Modell),
 *   Dreieck (Signal/Paket); gestrichelt = alt, geplant oder Grenze
 *
 * Jeder Wert ist das innere SVG-Markup; das umgebende <svg> mit den
 * Strichattributen setzt Icon.astro.
 */

export type IconName =
  | "step-understand"
  | "step-detect"
  | "step-potential"
  | "step-evaluate"
  | "step-redesign"
  | "step-roadmap"
  | "step-build"
  | "step-integrate"
  | "step-secure"
  | "step-deploy"
  | "cap-process-analysis"
  | "cap-ai-strategy"
  | "cap-process-redesign"
  | "cap-ai-engineering"
  | "cap-software-engineering"
  | "cap-model-engineering"
  | "cap-cloud-infra"
  | "cap-cybersecurity"
  | "cap-ai-governance"
  | "cap-ai-enablement"
  | "chain-measure";

/** Gefüllter Knotenpunkt (einzige erlaubte Fläche). */
const dot = (cx: number, cy: number, r = 1.3) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" stroke="none"/>`;

export const icons: Record<IconName, string> = {
  /* --- Schritte ------------------------------------------------------ */

  // Auge, in dessen Mitte eine Prozesskette beobachtet wird
  "step-understand": `
    <path d="M2 12C6 5.5 18 5.5 22 12"/>
    <path d="M2 12C6 18.5 18 18.5 22 12"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M7.9 12H9"/>
    <path d="M15 12H16.1"/>
    ${dot(6.6, 12, 1.2)}
    ${dot(17.4, 12, 1.2)}`,

  // Lupe hebt unter mehreren Knoten den AI-geeigneten (Quadrat) hervor
  "step-detect": `
    <circle cx="10" cy="10" r="6.5"/>
    <path d="M14.8 14.8L20.5 20.5"/>
    <rect x="8.25" y="8.25" width="3.5" height="3.5" rx="0.6"/>
    ${dot(19.5, 5)}
    ${dot(4, 19.5)}
    ${dot(21, 11.5)}`,

  // Knoten bekommt eine konkrete Beschriftung (Callout-Label)
  "step-potential": `
    <circle cx="7" cy="16.5" r="2.75"/>
    <path d="M8.9 14.5L12.5 10.2"/>
    <rect x="12.5" y="3.5" width="9" height="6.5" rx="1.5"/>
    <path d="M15 6.25H19"/>
    <path d="M15 8H17.25"/>
    ${dot(15.5, 20.5, 1.2)}
    <path d="M9.4 17.7L14.3 20"/>`,

  // Wippe: Kreis (wirtschaftlich) und Quadrat (technisch) auf einem Balken
  "step-evaluate": `
    <path d="M3.5 15L20.5 9"/>
    <path d="M12 13.3L9 19.5H15L12 13.3Z"/>
    <path d="M7 21.5H17"/>
    <circle cx="5.5" cy="11.6" r="2.4"/>
    <rect x="16.4" y="5" width="4.6" height="4.6" rx="0.7" transform="rotate(-19.4 18.7 7.3)"/>`,

  // Alter Direktweg (gestrichelt) wird neu über einen AI-Knoten (Quadrat) geführt
  "step-redesign": `
    ${dot(4, 19)}
    ${dot(20, 19)}
    <path d="M6.5 19H17.5" stroke-dasharray="2.2 2.4"/>
    <rect x="9.75" y="4.75" width="4.5" height="4.5" rx="0.7"/>
    <path d="M4 17.5V10C4 8.3 5.3 7 7 7H9.75"/>
    <path d="M20 17.5V10C20 8.3 18.7 7 17 7H14.25"/>`,

  // Pfad mit Meilensteinen (Punkt, Kreis) bis zur Fahne
  "step-roadmap": `
    ${dot(3.5, 19.5)}
    <path d="M3.5 19.5C7 19.5 6.75 12 10 12"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M14 12C16.75 12 16.75 8.75 19.25 8.75"/>
    <path d="M19.25 9.5V3"/>
    <path d="M19.25 3L22.75 4.75L19.25 6.5Z"/>`,

  // Bausteine: ein Modul wird auf zwei bestehende gesetzt
  "step-build": `
    <rect x="3.5" y="14.5" width="6.5" height="6.5" rx="0.8"/>
    <rect x="14" y="14.5" width="6.5" height="6.5" rx="0.8"/>
    <rect x="8.75" y="2.5" width="6.5" height="6.5" rx="0.8"/>
    <path d="M12 10.5V14"/>
    <path d="M10.1 12.4L12 14.2L13.9 12.4"/>
    <path d="M9 17.75H14.9" stroke-dasharray="1.6 1.8"/>`,

  // Hub verbindet drei Knotenformen: Modell (Quadrat), Signal (Dreieck), System (Kreis)
  "step-integrate": `
    <circle cx="12" cy="12" r="3"/>
    <rect x="3" y="3" width="5" height="5" rx="0.7"/>
    <path d="M18.5 3L21.6 8.2H15.4L18.5 3Z"/>
    <circle cx="12" cy="19.5" r="2.25"/>
    <path d="M9.9 9.9L7.9 7.9"/>
    <path d="M14.1 9.9L16.3 7.7"/>
    <path d="M12 15V17.25"/>`,

  // Schild, in dem ein Knotennetz geschützt liegt
  "step-secure": `
    <path d="M12 2.5L20 5.5V11C20 16 16.5 19.8 12 21.5C7.5 19.8 4 16 4 11V5.5L12 2.5Z"/>
    <path d="M12 8.5L8.8 14H15.2L12 8.5Z"/>
    ${dot(12, 8.5, 1.15)}
    ${dot(8.8, 14, 1.15)}
    ${dot(15.2, 14, 1.15)}`,

  // Laufendes System (Quadrat mit Start-Dreieck) plus Optimierungsschleife
  "step-deploy": `
    <rect x="3" y="3" width="13" height="13" rx="1.6"/>
    <path d="M7.75 6.5L12.5 9.5L7.75 12.5V6.5Z"/>
    <path d="M18.5 15A3.5 3.5 0 1 1 15 18.5"/>
    <path d="M13.4 20.1L15 18.5L16.6 20.1"/>`,

  /* --- Capabilities --------------------------------------------------- */

  // Prozesskette, ein Knoten steht unter der Analyse-Ringblende
  "cap-process-analysis": `
    ${dot(3, 12)}
    ${dot(21, 12)}
    <path d="M4.3 12H9.5"/>
    <path d="M14.5 12H19.7"/>
    <circle cx="12" cy="12" r="2.5"/>
    <circle cx="12" cy="12" r="6.25" stroke-dasharray="2.1 2.3"/>`,

  // Entscheidungsbaum: aus drei Optionen wird der Pfad zum System gewählt
  "cap-ai-strategy": `
    <circle cx="4.75" cy="12" r="2.5"/>
    <path d="M7.25 12C11 12 12.5 5 17 5" stroke-dasharray="2.2 2.4"/>
    <path d="M7.25 12H16.75"/>
    <path d="M7.25 12C11 12 12.5 19 17 19" stroke-dasharray="2.2 2.4"/>
    <rect x="16.75" y="9.75" width="4.5" height="4.5" rx="0.7"/>
    ${dot(19, 5, 1.2)}
    ${dot(19, 19, 1.2)}`,

  // Kreislauf: Prozessknoten (Kreis) wird gegen AI-natives Design (Quadrat) getauscht
  "cap-process-redesign": `
    <path d="M12 5A7 7 0 0 1 19 12"/>
    <path d="M17 10.2L19 12.3L21 10.2"/>
    <path d="M12 19A7 7 0 0 1 5 12"/>
    <path d="M3 13.8L5 11.7L7 13.8"/>
    <circle cx="7" cy="7" r="2.4"/>
    <rect x="14.7" y="14.7" width="4.6" height="4.6" rx="0.7"/>`,

  // Eingaben (Knoten) laufen durch ein Modell (Quadrat) zur Ausgabe (Pfeil)
  "cap-ai-engineering": `
    ${dot(3.5, 6.5)}
    ${dot(3.5, 17.5)}
    <path d="M4.8 7.2L9 10.2"/>
    <path d="M4.8 16.8L9 13.8"/>
    <rect x="9" y="9" width="6" height="6" rx="0.8"/>
    <path d="M15 12H21"/>
    <path d="M18.5 9.5L21 12L18.5 14.5"/>`,

  // Code-Klammern mit Knoten an den Spitzen
  "cap-software-engineering": `
    <path d="M9 6L3.5 12L9 18"/>
    <path d="M15 6L20.5 12L15 18"/>
    <path d="M13.5 4L10.5 20"/>
    ${dot(3.5, 12, 1.2)}
    ${dot(20.5, 12, 1.2)}`,

  // Geschichtetes Netz, das in ein Modell (Quadrat) mündet
  "cap-model-engineering": `
    <path d="M5 8L12 5M5 8L12 12M5 8L12 19"/>
    <path d="M5 16L12 5M5 16L12 12M5 16L12 19"/>
    <path d="M12 5L17 10.5M12 12H17M12 19L17 13.5"/>
    ${dot(5, 8)}
    ${dot(5, 16)}
    ${dot(12, 5)}
    ${dot(12, 12)}
    ${dot(12, 19)}
    <rect x="17" y="9.75" width="4.5" height="4.5" rx="0.7"/>`,

  // Drei Infrastruktur-Lanes mit Knoten und Verbindungen dazwischen
  "cap-cloud-infra": `
    <path d="M3 6H21"/>
    <path d="M3 12H21"/>
    <path d="M3 18H21"/>
    <rect x="6" y="4" width="4" height="4" rx="0.7"/>
    <circle cx="16" cy="12" r="2"/>
    ${dot(10, 18)}
    <path d="M8 8L14.4 10.7"/>
    <path d="M14.4 13.3L11 17"/>`,

  // Schloss, Schlüsselloch als Knoten
  "cap-cybersecurity": `
    <rect x="5" y="10.5" width="14" height="10.5" rx="2"/>
    <path d="M8.5 10.5V7.5A3.5 3.5 0 0 1 15.5 7.5V10.5"/>
    ${dot(12, 15)}
    <path d="M12 16.3V18.3"/>`,

  // Prozessfluss passiert ein Kontrolltor, darüber die Freigabe
  "cap-ai-governance": `
    ${dot(3.5, 16.5)}
    ${dot(20.5, 16.5)}
    <path d="M5 16.5H19"/>
    <path d="M10 11V21"/>
    <path d="M14 11V21"/>
    <path d="M9 6.5L11.25 8.75L15.5 4.5"/>`,

  // Person erhält Wissen vom System (Quadrat) – Pfeil zeigt auf den Menschen
  "cap-ai-enablement": `
    <circle cx="8" cy="7.5" r="2.75"/>
    <path d="M2.5 20C2.5 15 13.5 15 13.5 20"/>
    <rect x="16" y="4.75" width="5.5" height="5.5" rx="0.8"/>
    <path d="M16 7.5H12"/>
    <path d="M14 5.5L12 7.5L14 9.5"/>`,
  // Messen und optimieren: Messkurve mit Rückkopplungsschleife
  "chain-measure": `
    <path d="M3 17L8 11.5L11.5 14.5L17 8"/>
    <circle cx="17" cy="8" r="1.3" fill="currentColor" stroke="none"/>
    <path d="M20.5 12.5A4 4 0 1 1 16.5 16.5"/>
    <path d="M16.5 14.2V16.7H19"/>
  `,
};
