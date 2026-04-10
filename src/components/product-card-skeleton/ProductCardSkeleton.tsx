import styles from "./Skeleton.module.css";

export const ProductCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image} />

      <div className={styles.info}>
        <div className={styles.line} />
        <div className={styles.lineSmall} />
      </div>
    </div>
  );
};
