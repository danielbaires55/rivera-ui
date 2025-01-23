import styles from './hero.module.css';
import React from 'react';
export function Hero() {
  
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Transform Your Digital Presence</h1>
        <p className={styles.heroSubtitle}>
          Innovative solutions for modern businesses
        </p>
        <div className={styles.heroCta}>
          <button className={styles.ctaPrimary}>Get Started</button>
          <button className={styles.ctaSecondary}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
