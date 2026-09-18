/**
 * Firmendaten der H&W Digital Solutions UG.
 * Rechtsdaten entsprechen marketing-site/src/lib/company.ts (Consultry-Site);
 * bei Änderungen beide Stellen pflegen.
 */
export const company = {
  name: "H&W Digital Solutions",
  legalName: "H&W Digital Solutions UG (haftungsbeschränkt)",
  domain: "hw-digitalsolutions.de",
  siteUrl: "https://hw-digitalsolutions.de",
  tagline: "AI Transformation & Engineering",
  // v4 (2026-09-18): schlichter Satz statt Kontrast-Slogan („Kein Pilotprojekt. Ihr Tagesgeschäft.“).
  claim: "AI, die Ihr Team jeden Tag nutzt.",
  claimDe: "Von Geschäftsprozessen zu produktiver AI.",
  address: {
    street: "Greifswalder Straße 13d",
    postalCode: "10405",
    city: "Berlin",
    country: "Deutschland",
  },
  phoneDisplay: "+49 (0) 176 70937993",
  phoneHref: "tel:+4917670937993",
  email: "contact@hw-digitalsolutions.de",
  commercialRegister: "HRB 258903 B",
  registerCourt: "Amtsgericht Charlottenburg (Berlin)",
  vatId: "DE365222097",
  managingDirectors: ["Paul Hannemann", "Julian Weber"],
  euDisputeUrl: "https://ec.europa.eu/consumers/odr/",
} as const;

export const nav = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/vorgehen", label: "Vorgehen" },
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
