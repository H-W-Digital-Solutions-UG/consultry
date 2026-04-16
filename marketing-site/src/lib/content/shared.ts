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
  text: "Exklusiver Frühzugang für DACH-Beratungen",
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
  title: "Sichern Sie sich fruehen Zugang zu Consultry",
  body: "Tragen Sie sich auf die Warteliste ein, wenn Sie Bestandskundenwachstum, Staffing und Wissen nicht laenger ueber getrennte Tools steuern wollen.",
  primaryCta: {
    label: "Auf die Warteliste",
    href: ctaTargets.nav,
  },
} as const;

export const richDemoCta = {
  title: "Bereit fuer fruehen Zugang zu Consultry?",
  body: "Tragen Sie sich auf die Warteliste fuer eine Plattform ein, die Bestandskundenwachstum, Staffing, Wissenswiederverwendung und Delivery Control verbindet.",
  primaryCta: {
    label: "Auf die Warteliste",
    href: ctaTargets.nav,
  },
  trustLine: "Double-Opt-in · Exklusiv fuer DACH-Beratungen · Begrenzte Pilotplaetze",
} as const;

export const navLinks: NavLink[] = [
  { label: "Produkt", href: "/produkt" },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerBrand = {
  title: "Consultry",
  tagline: "Das AI-native Operating System fuer DACH-Beratungen.",
  complianceLabel: "DSGVO ORIENTIERT",
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "PLATTFORM",
    links: [
      { label: "Produktuebersicht", href: "/produkt" },
      { label: "Bestandskundenwachstum", href: "/produkt/account-growth" },
      { label: "Staffing und Forecasting", href: "/produkt/staffing-forecasting" },
      { label: "Knowledge Reuse", href: "/produkt/knowledge-reuse" },
      { label: "Commercial Control", href: "/produkt/commercial-control" },
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
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/100302158/", kind: "linkedin" },
  { label: "XING", kind: "xing" },
] as const;
