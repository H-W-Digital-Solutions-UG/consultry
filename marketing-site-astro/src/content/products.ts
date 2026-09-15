import { brain } from './brain';
import { corpus } from './corpus';
import { brand } from './brand';
import { ledger } from './ledger';
import { access } from './access';
import type { PageContent } from './types';

export const products: { slug: string; label: string; summary: string; content: PageContent; aspects: string[] }[] = [
  { slug: 'firmengedaechtnis', label: 'Firmengedächtnis', summary: 'Auf dem aktuellen Stand weiterarbeiten.', content: brain, aspects: ['Die neue Fassung zählt.', 'Freigaben bleiben Wissen.', 'Vorarbeit trägt weiter.'] },
  { slug: 'korpus', label: 'Korpus', summary: 'Aus vorhandenen Unterlagen wird die nächste Arbeitsgrundlage.', content: corpus, aspects: ['Ein Vertrag reicht zum Start.', 'Erfahrung wird Vorschlag.', 'Lücken bleiben sichtbar.'] },
  { slug: 'corporate-alignment', label: 'Corporate Alignment', summary: 'Inhalt und Sprache passen zu eurer Organisation.', content: brand, aspects: ['Inhalt belegen.', 'Eure Sprache bewahren.', 'Freigaben sichtbar halten.'] },
  { slug: 'agenten-ledger', label: 'Wissensledger', summary: 'Der nächste Agent knüpft an euren Arbeitsstand an.', content: ledger, aspects: ['Den Stand mitnehmen.', 'Widersprüche sichtbar halten.', 'Gemeinsam weiterarbeiten.'] },
  { slug: 'zugriff', label: 'Zugriff & Kontrolle', summary: 'KI arbeiten lassen. Im vereinbarten Rahmen.', content: access, aspects: ['Gleiche Rechte wie der Mensch.', 'Gesperrtes bleibt gesperrt.', 'Wirkung nur im Auftrag.'] },
];
export const productPath = (slug: string) => `/produkt/${slug}`;
export const siteOrigin = (import.meta.env.SITE_URL || 'https://consultry.de').replace(/\/$/, '');
export const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
