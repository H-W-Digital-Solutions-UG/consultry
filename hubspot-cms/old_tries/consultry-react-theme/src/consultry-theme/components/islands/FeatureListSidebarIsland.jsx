import { useState } from 'react';
import styles from '../../styles/featureListSidebar.module.css';

export default function FeatureListSidebarIsland({ fieldValues }) {
  const { eyebrow, headline, features, dark_mode } = fieldValues;
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionClasses = [
    styles.section,
    dark_mode ? styles.sectionDark : '',
  ].filter(Boolean).join(' ');

  if (!features || features.length === 0) return null;
  const activeFeature = features[activeIndex];

  return (
    <section className={sectionClasses}>
      <div className={styles.inner}>
        {(eyebrow || headline) && (
          <div className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {headline && <h2 className={styles.headline}>{headline}</h2>}
          </div>
        )}

        <div className={styles.sidebar}>
          {features.map((feature, i) => (
            <button
              key={i}
              className={`${styles.sidebarItem} ${i === activeIndex ? styles.sidebarItemActive : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              <p className={styles.itemTitle}>{feature.title}</p>
              <p className={styles.itemDescription}>{feature.description}</p>
            </button>
          ))}
        </div>

        <div className={styles.visual}>
          {activeFeature?.image?.src && (
            <img
              src={activeFeature.image.src}
              alt={activeFeature.title || 'Feature'}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
}
