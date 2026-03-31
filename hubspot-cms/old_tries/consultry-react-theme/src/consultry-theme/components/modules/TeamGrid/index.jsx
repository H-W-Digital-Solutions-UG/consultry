import '../../../styles/tokens.css';
import {
  ModuleFields,
  TextField,
  ImageField,
  ChoiceField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/teamGrid.module.css';

export function Component({ fieldValues }) {
  const { eyebrow, headline, subtitle, columns, members } = fieldValues;

  const columnsValue = columns === '4' ? 4 : 3;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {(eyebrow || headline) && (
          <header className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {headline && <h2 className={styles.headline}>{headline}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}

        <div
          className={styles.grid}
          style={{
            gridTemplateColumns: `repeat(${columnsValue}, 1fr)`,
          }}
        >
          {members &&
            members.map((member, idx) => (
              <article className={styles.card} key={idx}>
                {member.photo?.src && (
                  <div className={styles.photoContainer}>
                    <img
                      src={member.photo.src}
                      alt={member.name}
                      className={styles.photo}
                    />
                  </div>
                )}
                <div className={styles.cardBody}>
                  {member.name && (
                    <h3 className={styles.name}>{member.name}</h3>
                  )}
                  {member.role && (
                    <p className={styles.role}>{member.role}</p>
                  )}
                  {member.bio && (
                    <p className={styles.bio}>{member.bio}</p>
                  )}
                  {member.linkedin_url && (
                    <div className={styles.socialLinks}>
                      <a
                        href={member.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="UNSER TEAM" />
    <TextField
      name="headline"
      label="Headline"
      default="Die Menschen hinter Consultry"
    />
    <TextField name="subtitle" label="Subtitle" default="" />
    <ChoiceField
      name="columns"
      label="Columns"
      display="select"
      default="3"
      choices={[
        ['3', '3 Columns'],
        ['4', '4 Columns'],
      ]}
    />
    <RepeatedFieldGroup
      name="members"
      label="Team Members"
      occurrence={{ min: 1, max: 16, default: 6 }}
      default={[
        {
          name: 'Dr. Sarah Müller',
          role: 'CEO & Gründerin',
          photo: { src: '' },
          linkedin_url: '',
          bio: '',
        },
        {
          name: 'Thomas Berger',
          role: 'CTO',
          photo: { src: '' },
          linkedin_url: '',
          bio: '',
        },
        {
          name: 'Lisa Hoffmann',
          role: 'Head of Product',
          photo: { src: '' },
          linkedin_url: '',
          bio: '',
        },
        {
          name: 'Markus Weber',
          role: 'Head of Sales',
          photo: { src: '' },
          linkedin_url: '',
          bio: '',
        },
        {
          name: 'Anna Schmidt',
          role: 'Lead Designer',
          photo: { src: '' },
          linkedin_url: '',
          bio: '',
        },
        {
          name: 'Jonas Fischer',
          role: 'Lead Engineer',
          photo: { src: '' },
          linkedin_url: '',
          bio: '',
        },
      ]}
    >
      <TextField name="name" label="Name" />
      <TextField name="role" label="Role" />
      <ImageField name="photo" label="Photo" />
      <TextField
        name="linkedin_url"
        label="LinkedIn URL"
        default=""
      />
      <TextField name="bio" label="Bio (optional)" default="" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Team Grid',
  description: 'Grid of team member cards with photo, name, and role',
};
