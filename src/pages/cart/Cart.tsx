import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

export const Cart = () => {
  return (
    <div className={styles.cartPage}>
      <h1>Ваша корзина</h1>

      <div className={styles.cartContent}>
        {/* Лист товаров */}
        <div className={styles.items}>
          <div className={styles.item}>
            <img
              src="https://avatars.mds.yandex.net/i?id=5dbc75cc67dfa9ade0e1710efc639026_l-4076029-images-thumbs&n=13"
              alt="product"
            />
            <div className={styles.info}>
              <h3>Шелковая пижама</h3>
              <p>Цена: 49.99 €</p>
              <div className={styles.quantity}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <p className={styles.total}>49.99 €</p>
            <button className={styles.remove}>✕</button>
          </div>
        </div>

        {/* Блок заказа */}
        <div className={styles.summary}>
          <h2>Итого</h2>
          <p>Товары: 49.99 €</p>
          <p>Доставка: 5 €</p>
          <p className={styles.totalAmount}>Итого: 54.99 €</p>
          <Link to="/checkout" className={styles.checkoutBtn}>
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
};
