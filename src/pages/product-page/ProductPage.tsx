import styles from "./ProductPage.module.css";

export const ProductPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Картинка */}
        <div className={styles.imageWrapper}>
          <img
            src="https://avatars.mds.yandex.net/i?id=5dbc75cc67dfa9ade0e1710efc639026_l-4076029-images-thumbs&n=13"
            alt="product"
          />
        </div>

        {/* Информация */}
        <div className={styles.info}>
          <h1>Шелковая пижама</h1>

          <p className={styles.price}>49.99 €</p>

          <p className={styles.desc}>
            Мягкая и стильная пижама из шелка. Идеально подходит для комфортного
            сна и отдыха дома.
          </p>

          {/* Размеры */}
          <div className={styles.sizes}>
            <span>Размер:</span>
            <div className={styles.sizeList}>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
          </div>

          {/* Кнопка */}
          <button className={styles.addBtn}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};
