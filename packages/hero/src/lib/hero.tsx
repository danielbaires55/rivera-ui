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
          A free, modern, and minimalist React UI library. (This is the Hero
          component).
        </p>
        <div className={styles.heroCta}>
            <a
            href="https://rivera-ui-docs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className={styles.ctaPrimary}>
              Docs
            </button>
            </a>

          <button className={styles.ctaSecondary} onClick={onComponentsClick}>
            Components
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
