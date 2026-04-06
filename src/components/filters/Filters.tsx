import styles from "./Filters.module.css";

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.group}>
        <span>Категория</span>
        <select>
          <option>Все</option>
          <option>Пижамы</option>
          <option>Бельё</option>
        </select>
      </div>

      <div className={styles.group}>
        <span>Цвет</span>
        <select>
          <option>Все</option>
          <option>Черный</option>
          <option>Белый</option>
          <option>Красный</option>
        </select>
      </div>

      <div className={styles.group}>
        <span>Размер</span>
        <select>
          <option>Все</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
      </div>
    </div>
  );
};
