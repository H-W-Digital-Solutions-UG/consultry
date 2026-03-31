import { useState } from 'react';
import styles from '../../styles/faq.module.css';

function PlusIcon({ open }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={`${styles.icon} ${open ? styles.iconOpen : ''}`}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function FAQIsland({ fieldValues }) {
  const { eyebrow, headline, items } = fieldValues;
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>{headline}</h2>
        </div>

        <div className={styles.list} role="list">
          {items?.map((item, i) => (
            <div className={styles.item} key={i} role="listitem">
              <button
                className={styles.trigger}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.question}</span>
                <PlusIcon open={openIndex === i} />
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`${styles.content} ${openIndex === i ? styles.contentOpen : ''}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
