import '../../../styles/tokens.css';
import { Island } from '@hubspot/cms-components';
import { ModuleFields, TextField, ImageField, BooleanField, RepeatedFieldGroup, FieldGroup } from '@hubspot/cms-components/fields';
import TestimonialCarouselIsland from '../../islands/TestimonialCarouselIsland.jsx?island';

export function Component({ fieldValues }) {
  return <Island module={TestimonialCarouselIsland} fieldValues={fieldValues} />;
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="KUNDENSTIMMEN" />
    <TextField name="headline" label="Headline" default="Was unsere Kunden sagen" />
    <BooleanField name="dark_mode" label="Dark Mode" default={true} />
    <BooleanField name="auto_play" label="Auto-Play" default={true} />
    <RepeatedFieldGroup name="testimonials" label="Testimonials" occurrence={{ min: 1, max: 10, default: 3 }}
      default={[
        { quote: 'Consultry hat unsere Beratungsprozesse grundlegend verändert. Die KI-gestützte Pipeline-Analyse spart uns 10 Stunden pro Woche.', author_name: 'Dr. Sarah Müller', author_role: 'Managing Partner', company_name: 'Strategos Consulting' },
        { quote: 'Endlich ein CRM, das für den DACH-Markt gebaut wurde. DATEV-Integration und DSGVO-Konformität waren für uns entscheidend.', author_name: 'Thomas Berger', author_role: 'Geschäftsführer', company_name: 'Berger & Partner' },
        { quote: 'Die automatische Rechnungsstellung hat unseren Verwaltungsaufwand um 60% reduziert. Ein Game-Changer für Beratungen.', author_name: 'Lisa Hoffmann', author_role: 'Head of Operations', company_name: 'NovaTech Advisory' },
      ]}
    >
      <TextField name="quote" label="Quote" />
      <TextField name="author_name" label="Author Name" />
      <TextField name="author_role" label="Author Role" />
      <TextField name="company_name" label="Company Name" />
      <ImageField name="avatar" label="Avatar" />
      <ImageField name="company_logo" label="Company Logo" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = { label: 'Testimonial Carousel' };
