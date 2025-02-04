import styles from './hero.module.css';

interface HeroProps {
  onComponentsClick?: () => void;
}

export function Hero({ onComponentsClick }: HeroProps) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>App Library</h1>
        <p className={styles.heroSubtitle}>
          A free, modern, and minimalist React UI library.
          (This is the Hero component).
        </p>
        <div className={styles.heroCta}>
          <button className={styles.ctaPrimary}>Get Started</button>
          <button className={styles.ctaSecondary} onClick={onComponentsClick}>
            Components
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
