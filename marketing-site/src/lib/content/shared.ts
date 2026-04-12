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
  ctaLabel: "Jetzt Platz sichern",
} as const;

export const ctaTargets = {
  nav: "/#waitlist",
  homepagePrimary: "#waitlist",
  homepageSecondary: "/produkt#demo",
  productPrimary: "/#waitlist",
  productSecondary: "/produkt#architecture",
  aboutPrimary: "/#waitlist",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Produkt", href: "/produkt" },
  { label: "Module", href: "/produkt#modules" },
  { label: "About Us", href: "/unternehmen" },
];

export const footerBrand = {
  title: "Consultry",
  tagline: "Das operative System für Beratungen.",
  complianceLabel: "DSGVO KONFORM",
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "PLATTFORM",
    links: [
      { label: "Funktionen", href: "/produkt#architecture" },
      { label: "Preise", href: "/#waitlist" },
      { label: "Integrationen", href: "/produkt#demo" },
      { label: "Sicherheit", href: "/produkt" },
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
  { label: "Email", href: "mailto:kontakt@consultry.com", kind: "email" },
] as const;
