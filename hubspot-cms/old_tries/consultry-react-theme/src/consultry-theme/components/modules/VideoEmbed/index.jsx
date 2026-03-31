import '../../../styles/tokens.css';
import { Island } from '@hubspot/cms-components';
import {
  ModuleFields,
  TextField,
  ImageField,
  BooleanField,
  ChoiceField,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/videoEmbed.module.css';
import VideoEmbedIsland from '../../islands/VideoEmbedIsland.jsx?island';

export function Component({ fieldValues }) {
  const {
    eyebrow,
    headline,
    subtitle,
    dark_background,
    aspect_ratio,
  } = fieldValues;

  const aspectRatioClass =
    aspect_ratio === '4/3'
      ? styles.aspectFourThree
      : aspect_ratio === '1/1'
        ? styles.aspectSquare
        : styles.aspectSixteenNine;

  return (
    <section
      className={`${styles.section} ${dark_background ? styles.sectionDark : ''}`}
    >
      <div className={styles.inner}>
        {(eyebrow || headline) && (
          <div className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {headline && <h2 className={styles.title}>{headline}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}

        <div className={`${styles.videoContainer} ${aspectRatioClass}`}>
          <Island module={VideoEmbedIsland} fieldValues={fieldValues} />
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="eyebrow" label="Eyebrow" default="" />
    <TextField
      name="headline"
      label="Headline"
      default="Sehen Sie Consultry in Aktion"
    />
    <TextField name="subtitle" label="Subtitle" default="" />
    <TextField
      name="video_url"
      label="Video URL"
      default="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
    <ImageField name="poster_image" label="Poster Image" />
    <ChoiceField
      name="aspect_ratio"
      label="Aspect Ratio"
      display="select"
      default="16/9"
      choices={[
        ['16/9', '16:9 (Widescreen)'],
        ['4/3', '4:3 (Standard)'],
        ['1/1', '1:1 (Square)'],
      ]}
    />
    <BooleanField
      name="dark_background"
      label="Dark Background"
      default={false}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Video Embed',
  description: 'Responsive video player with poster image and play overlay',
};
