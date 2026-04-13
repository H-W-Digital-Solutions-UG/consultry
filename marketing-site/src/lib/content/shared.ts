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
  kind: "linkedin" | "x" | "email";
};

export const announcement = {
  text: "Exklusiver Frühzugang für DACH-Beratungen",
  href: "/#waitlist",
  ctaLabel: "Demo anfragen",
} as const;

export const ctaTargets = {
  nav: "/#waitlist",
  homepagePrimary: "#waitlist",
  homepageSecondary: "/produkt#demo",
  productPrimary: "/#waitlist",
  productSecondary: "/produkt#architecture",
  aboutPrimary: "/#waitlist",
} as const;

export const deepDiveCta = {
  title: "Sehen Sie, wie Consultry Folgegeschaeft, Staffing und Wissen verbindet",
  body: "Starten Sie mit einer persoenlichen Demo. Wir zeigen Ihnen Consultry mit Ihrer Kunden-, Team- und Delivery-Logik statt mit generischen Beispiel-Daten.",
  primaryCta: {
    label: "Demo anfragen",
    href: ctaTargets.nav,
  },
} as const;

export const richDemoCta = {
  title: "Bereit fuer das Operating System fuer DACH-Beratungen?",
  body: "Sichern Sie sich fruehen Zugang zu einer Plattform, die Bestandskundenwachstum, Staffing, Wissenswiederverwendung und Delivery Control verbindet.",
  placeholder: "Ihre geschäftliche E-Mail-Adresse",
  buttonLabel: "Demo anfragen",
  trustLine: "Keine Kreditkarte noetig · Exklusiv fuer DACH-Beratungen · Begrenzte Pilotplaetze",
  success: "Danke. Wir haben Ihre Anfrage erhalten.",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
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
  { label: "LinkedIn", href: "https://www.linkedin.com/company/consultry", kind: "linkedin" },
  { label: "X", href: "https://x.com/consultry", kind: "x" },
  { label: "E-Mail", href: "mailto:kontakt@consultry.com", kind: "email" },
] as const;
