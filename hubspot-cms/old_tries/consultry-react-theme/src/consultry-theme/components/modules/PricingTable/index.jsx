import '../../../styles/tokens.css';
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  TextField,
  NumberField,
  BooleanField,
  RepeatedFieldGroup,
  FieldGroup,
  LinkField,
} from '@hubspot/cms-components/fields';
import PricingIsland from '../../islands/PricingIsland.jsx?island';

export function Component({ fieldValues }) {
  return <Island module={PricingIsland} fieldValues={fieldValues} />;
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="Preise" />
    <TextField
      name="headline"
      label="Headline"
      default="Transparente Preise, ohne Überraschungen"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Wählen Sie den Plan, der zu Ihrem Team passt."
    />
    <BooleanField
      name="show_toggle"
      label="Show Monthly/Annual Toggle"
      default={true}
    />
    <NumberField
      name="annual_discount"
      label="Annual Discount %"
      default={20}
    />
    <RepeatedFieldGroup
      name="plans"
      label="Pricing Plans"
      occurrence={{ min: 1, max: 4, default: 3 }}
      default={[
        {
          name: 'Starter',
          description: 'Für kleine Beratungsteams, die gerade anfangen.',
          monthly_price: 49,
          featured: false,
          featured_badge: '',
          features: [
            { text: 'Bis zu 5 Benutzer' },
            { text: 'CRM & Pipeline' },
            { text: 'Basis-KI-Funktionen' },
            { text: 'E-Mail-Integration' },
          ],
          cta: { label: 'Kostenlos testen', url: { href: '/signup?plan=starter' } },
        },
        {
          name: 'Professional',
          description: 'Für wachsende Beratungsunternehmen mit anspruchsvollen Workflows.',
          monthly_price: 99,
          featured: true,
          featured_badge: 'Beliebteste Wahl',
          features: [
            { text: 'Bis zu 25 Benutzer' },
            { text: 'Erweitertes Pipeline Management' },
            { text: 'KI-Zusammenfassungen & Insights' },
            { text: 'Zeiterfassung & Abrechnung' },
            { text: 'API-Zugang' },
          ],
          cta: { label: 'Kostenlos testen', url: { href: '/signup?plan=pro' } },
        },
        {
          name: 'Enterprise',
          description: 'Für große Beratungsgesellschaften mit individuellen Anforderungen.',
          monthly_price: 199,
          featured: false,
          featured_badge: '',
          features: [
            { text: 'Unbegrenzte Benutzer' },
            { text: 'Custom Workflows' },
            { text: 'Dedicated Account Manager' },
            { text: 'SSO & SCIM' },
            { text: 'SLA & Priority Support' },
            { text: 'On-Premise Option' },
          ],
          cta: { label: 'Kontakt aufnehmen', url: { href: '/contact?plan=enterprise' } },
        },
      ]}
    >
      <TextField name="name" label="Plan Name" />
      <TextField name="description" label="Description" />
      <NumberField name="monthly_price" label="Monthly Price (€)" />
      <BooleanField name="featured" label="Featured Plan" default={false} />
      <TextField name="featured_badge" label="Featured Badge Text" />
      <RepeatedFieldGroup
        name="features"
        label="Features"
        occurrence={{ min: 1, max: 12, default: 4 }}
      >
        <TextField name="text" label="Feature Text" />
      </RepeatedFieldGroup>
      <FieldGroup name="cta" label="CTA">
        <TextField name="label" label="Label" />
        <LinkField name="url" label="URL" />
      </FieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Pricing Table',
};
