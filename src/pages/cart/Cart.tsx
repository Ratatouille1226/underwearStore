import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../features/cart/cartSlice";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (cur, item) => cur + item.product.price * item.quantity,
    0,
  );

  return (
    <div className={styles.cartPage}>
      <h1>Ваша корзина</h1>

      {items.length === 0 ? <span>Корзина пустует...</span> : null}

      <div className={styles.cartContent}>
        {/* Лист товаров */}
        <div className={styles.items}>
          {items.map((item) => (
            <div key={item.product.id} className={styles.item}>
              <img
                src="https://avatars.mds.yandex.net/i?id=5dbc75cc67dfa9ade0e1710efc639026_l-4076029-images-thumbs&n=13"
                alt="product"
              />
              <div className={styles.info}>
                <h3>{item.product.name}</h3>
                <div className={styles.quantity}>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.product.id))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.product.id))}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className={styles.total}>
                {(item.product.price * item.quantity).toFixed(2)} $
              </p>
              <button
                className={styles.remove}
                onClick={() => dispatch(removeFromCart(item.product.id))}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Блок заказа */}
        <div className={styles.summary}>
          <h2>Итого</h2>
          <p>Товары: {totalPrice.toFixed(2)} $</p>
          {/* <p>Доставка: 5 €</p> */}
          <p className={styles.totalAmount}>Итого: {totalPrice.toFixed(2)} $</p>
          <Link to="/checkout" className={styles.checkoutBtn}>
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
  );
};
