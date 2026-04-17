export type LegalDocumentMeta = {
  description: string;
  footerLabel: string;
  href: string;
  navLabel: string;
  title: string;
};

export const legalHub = {
  description:
    "Zentrale Uebersicht aller rechtlichen Dokumente von Consultry mit schnellen Einstiegen in Datenschutz, Impressum, Cookies und AGB.",
  footerLabel: "Uebersicht",
  href: "/legal",
  navLabel: "Uebersicht",
  title: "Rechtliches",
} as const satisfies LegalDocumentMeta;

export const legalDocuments = [
  {
    description:
      "Datenschutzrichtlinie mit Angaben zu verarbeiteten Daten, Rechtsgrundlagen, Betroffenenrechten und Kontakt.",
    footerLabel: "Datenschutz",
    href: "/legal/datenschutz",
    navLabel: "Datenschutz",
    title: "Datenschutzrichtlinie",
  },
  {
    description:
      "Anbieterkennzeichnung mit Kontakt, Registerdaten und Informationen zur Streitbeilegung.",
    footerLabel: "Impressum",
    href: "/legal/impressum",
    navLabel: "Impressum",
    title: "Impressum",
  },
  {
    description:
      "Informationen zu Consent-Steuerung, technisch notwendigen Mechanismen und optionalen Statistik-Diensten.",
    footerLabel: "Cookies",
    href: "/legal/cookies",
    navLabel: "Cookies",
    title: "Cookies",
  },
  {
    description:
      "Vorlaeufige AGB-Struktur fuer Pilotangebote, Produktvorschauen und kuenftige Plattformbedingungen.",
    footerLabel: "AGB",
    href: "/legal/agb",
    navLabel: "AGB",
    title: "Allgemeine Geschaeftsbedingungen",
  },
] as const satisfies readonly LegalDocumentMeta[];

export const legalNavigationItems = [legalHub, ...legalDocuments] as const;

export function getLegalDocumentMeta(href: string) {
  return legalNavigationItems.find((item) => item.href === href);
}
