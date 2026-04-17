import { legalNavigationItems } from "@/lib/legal-documents";

export type NavLink = {
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type SocialLink = {
  label: string;
  href?: string;
  kind: "linkedin" | "xing";
};

export const announcement = {
  text: "Pre-Launch: Warteliste offen für DACH-Beratungen",
  href: "/warteliste",
  ctaLabel: "Zur Warteliste",
} as const;

export const ctaTargets = {
  nav: "/warteliste",
  homepagePrimary: "/warteliste",
  homepageSecondary: "/produkt#demo",
  productPrimary: "/warteliste",
  productSecondary: "/produkt#architecture",
  aboutPrimary: "/warteliste",
} as const;

export const deepDiveCta = {
  title: "Consultry, sobald es live geht.",
  body:
    "Sie sind als Erste dabei, wenn Consultry startet. Bestandskunden-Signale, Staffing, Wissen und Angebote laufen dann in einem System zusammen — und nicht mehr in sieben.",
  primaryCta: {
    label: "Auf die Warteliste",
    href: ctaTargets.nav,
  },
} as const;

export const richDemoCta = {
  title: "Sie wollen das Ganze aus der Nähe sehen?",
  body:
    "Tragen Sie sich ein. Zum Launch zeigen wir Ihnen als Erstes, wie Consultry Bestandskunden-Wachstum, Staffing, Wissen und Delivery in einer Arbeitsebene verbindet.",
  primaryCta: {
    label: "Auf die Warteliste",
    href: ctaTargets.nav,
  },
  trustLine:
    "Double-Opt-in · Exklusiv für DACH-Beratungen · Pilotplätze auf Anfrage",
} as const;

export const navLinks: NavLink[] = [
  { label: "Produkt", href: "/produkt" },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerBrand = {
  title: "Consultry",
  tagline:
    "Der operative AI-Begleiter für IT- und Digitalisierungsberatungen im DACH-Raum.",
  complianceLabel: "DSGVO · EU-HOSTING",
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "PLATTFORM",
    links: [
      { label: "Produktübersicht", href: "/produkt" },
      { label: "Bestandskunden-Wachstum", href: "/produkt/account-growth" },
      { label: "Staffing und Forecasting", href: "/produkt/staffing-forecasting" },
      { label: "Wissen, das wieder auftaucht", href: "/produkt/knowledge-reuse" },
      { label: "Delivery und Marge", href: "/produkt/commercial-control" },
    ],
  },
  {
    title: "UNTERNEHMEN",
    links: [
      { label: "Über uns", href: "/unternehmen" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "RECHTLICHES",
    links: legalNavigationItems.map((item) => ({
      label: item.footerLabel,
      href: item.href,
    })),
  },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/100302158/", kind: "linkedin" },
  { label: "XING", kind: "xing" },
] as const;
