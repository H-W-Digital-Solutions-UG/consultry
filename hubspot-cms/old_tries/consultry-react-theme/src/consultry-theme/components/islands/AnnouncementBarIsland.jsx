import { useState } from 'react';
import styles from '../../styles/announcementBar.module.css';

export default function AnnouncementBarIsland({ fieldValues }) {
  const { badge_text, message, link, dismissible } = fieldValues;
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles.bar} role="banner">
      <div className={styles.content}>
        {badge_text && <span className={styles.badge}>{badge_text}</span>}
        <span className={styles.message}>{message}</span>
        {link?.url?.href && (
          <a href={link.url.href} className={styles.link}>
            {link.label || 'Mehr erfahren'} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
      {dismissible && (
        <button
          className={styles.close}
          onClick={() => setVisible(false)}
          aria-label="Ankündigung schließen"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="12" y2="12" />
            <line x1="12" y1="4" x2="4" y2="12" />
          </svg>
        </button>
      )}
    </div>
  );
}
