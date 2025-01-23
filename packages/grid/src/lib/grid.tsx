import styles from './grid.module.css';

export function Grid() {
  return (
    <div className={styles.gridContainer}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className={styles.gridItem}>
          <h3>Grid Item {item}</h3>
          <p>Description for item {item}</p>
        </div>
      ))}
    </div>
  );
}

export default Grid;