import type { Locale } from '../../i18n/locale.ts';

/** Shared by the rendered checkbox and the server-side HubSpot consent record. */
export const waitlistConsentVersion = 'consultry_hubspot_waitlist_2026-09-16_v1';
export const waitlistConsent = {
  de: {
    communications: 'Ich möchte E-Mails von Consultry zu Launch-Info, Produkt-Updates und Pilotplätzen erhalten.',
    processing: 'Dafür darf Consultry meine E-Mail-Adresse und Anmeldedaten über HubSpot verarbeiten.',
    privacyPrefix: 'Hinweise zur Verarbeitung, zu Datentransfers und meinen Rechten stehen in der',
    privacyLabel: 'Datenschutzerklärung',
    withdrawal: '. Ich kann meine Einwilligung jederzeit über den Abmeldelink widerrufen.',
  },
  en: {
    communications: 'I would like to receive emails from Consultry about the launch, product updates and pilot places.',
    processing: 'For this purpose, Consultry may process my email address and signup details through HubSpot.',
    privacyPrefix: 'Information about processing, data transfers and my rights is available in the',
    privacyLabel: 'privacy policy',
    withdrawal: '. I can withdraw my consent at any time using the unsubscribe link.',
  },
} as const;

export function consentRecord(locale: Locale, origin: string) {
  const copy = waitlistConsent[locale];
  const privacyPath = locale === 'en' ? '/en/legal/datenschutz' : '/legal/datenschutz';
  return `${copy.communications} ${copy.processing} ${copy.privacyPrefix} ${copy.privacyLabel} (${new URL(privacyPath, origin).href})${copy.withdrawal}`;
}
