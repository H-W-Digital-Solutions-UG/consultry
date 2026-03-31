import '../../../styles/tokens.css';
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  TextField,
  ImageField,
  LinkField,
  RepeatedFieldGroup,
  FieldGroup,
  BooleanField,
} from '@hubspot/cms-components/fields';
import NavIsland from '../../islands/NavIsland.jsx?island';

export function Component({ fieldValues }) {
  return <Island module={NavIsland} fieldValues={fieldValues} />;
}

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: '', alt: 'Consultry', height: 32 }}
    />
    <TextField name="logo_text" label="Logo Text" default="Consultry" />
    <RepeatedFieldGroup
      name="nav_links"
      label="Navigation Links"
      occurrence={{ min: 1, max: 8, default: 4 }}
      default={[
        { label: 'Funktionen', url: { href: '/features' } },
        { label: 'Preise', url: { href: '/pricing' } },
        { label: 'Über uns', url: { href: '/about' } },
        { label: 'Blog', url: { href: '/blog' } },
      ]}
    >
      <TextField name="label" label="Link Label" />
      <LinkField name="url" label="Link URL" />
    </RepeatedFieldGroup>
    <FieldGroup name="cta" label="CTA Button">
      <TextField name="label" label="CTA Label" default="Demo buchen" />
      <LinkField name="url" label="CTA URL" />
    </FieldGroup>
    <BooleanField name="dark_mode" label="Dark Nav" default={false} />
  </ModuleFields>
);

export const meta = {
  label: 'Navigation',
};
