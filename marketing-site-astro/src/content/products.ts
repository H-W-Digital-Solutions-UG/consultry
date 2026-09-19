import { brain } from './brain';
import { brand } from './brand';
import { ledger } from './ledger';
import { access } from './access';
import type { PageContent } from './types';
/** Hero explainer: one core function shown as a matching visual beside the copy. */
export interface Explainer { image: string }

export const products: { slug: string; label: string; summary: string; content: PageContent; aspects: string[]; steps: string[]; explainer: Explainer }[] = [
  { slug: 'firmengedaechtnis', label: 'Firmengedächtnis', summary: 'Deine KI nutzt, was du schon erarbeitet hast. Du erklärst weniger neu.', content: brain, aspects: ['Deine KI hat dein Wissen zur Hand.', 'Du siehst, was sich geändert hat.', 'Nutze deine Vorarbeit für die nächste Idee.'], steps: ['Wissen parat', 'Änderungen sehen', 'Vorarbeit nutzen'], explainer: { image: '/hero/explainer-firmengedaechtnis.webp' } },
  { slug: 'corporate-alignment', label: 'Corporate Alignment', summary: 'Dein Wissen und deine Vorlagen gleich im Entwurf. Weniger Nacharbeit für dich.', content: brand, aspects: ['Deine Vorlagen sind schon dabei.', 'So klingt es nach dir.', 'Mach aus dem Entwurf dein Ergebnis.'], steps: ['Vorlagen dabei', 'Dein Ton', 'Dein Ergebnis'], explainer: { image: '/hero/explainer-corporate-alignment.webp' } },
  { slug: 'agenten-ledger', label: 'Agenten und Schwarm-Orchestration', summary: 'Deine Agenten arbeiten zusammen. Du hast weniger mit der Abstimmung zu tun.', content: ledger, aspects: ['Deine Agenten packen gemeinsam an.', 'Alle arbeiten am selben Auftrag.', 'Du behältst den Überblick.'], steps: ['Gemeinsam anpacken', 'Ein Auftrag', 'Überblick'], explainer: { image: '/hero/explainer-agenten-ledger.webp' } },
  { slug: 'zugriff', label: 'Zugriff & Kontrolle', summary: 'Agenten arbeiten eigenständig. Klare Rechte begrenzen, was sie lesen, ändern und versenden dürfen.', content: access, aspects: ['Du bestimmst, was deine Agenten dürfen.', 'Deine Agenten haben Raum zum Arbeiten.', 'Für jeden Zugriff gelten deine Regeln.'], steps: ['Du bestimmst', 'Freiraum', 'Deine Regeln'], explainer: { image: '/hero/explainer-zugriff.webp' } },
];
export const productPath = (slug: string) => `/produkt/${slug}`;
export const siteOrigin = (import.meta.env.SITE_URL || 'https://consultry.de').replace(/\/$/, '');
export const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
