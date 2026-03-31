import { useState } from 'react';
import styles from '../../styles/tabFilter.module.css';

export default function TabFilterIsland({ fieldValues }) {
  const { tabs, style, dark_mode } = fieldValues;
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapperClasses = [
    styles.wrapper,
    dark_mode ? styles.wrapperDark : '',
    style === 'underline' ? styles.wrapperUnderline : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses} role="tablist">
      {tabs?.map((tab, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === activeIndex}
          className={`${styles.tab} ${i === activeIndex ? styles.tabActive : ''}`}
          onClick={() => setActiveIndex(i)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
