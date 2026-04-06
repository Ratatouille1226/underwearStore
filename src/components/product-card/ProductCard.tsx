import styles from "./ProductCard.module.css";

export const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src="https://avatars.mds.yandex.net/i?id=5dbc75cc67dfa9ade0e1710efc639026_l-4076029-images-thumbs&n=13"
          alt="product"
        />
        <button className={styles.addToCart}>
          <i className="fa-solid fa-basket-shopping"></i>
        </button>
      </div>

      <div className={styles.info}>
        <h3>Шелковая пижама</h3>
        <p>49.99 €</p>
      </div>
    </div>
  );
};
