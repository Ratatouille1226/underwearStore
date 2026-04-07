import styles from "./Checkout.module.css";

export const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <h1>Оформление заказа</h1>

      <div className={styles.container}>
        {/* Форма */}
        <div className={styles.form}>
          <h2>Контактные данные</h2>

          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Телефон" />

          <h2>Доставка</h2>

          <input type="text" placeholder="Город" />
          <input type="text" placeholder="Адрес" />

          <div className={styles.row}>
            <input type="text" placeholder="Индекс" />
            <input type="text" placeholder="Квартира" />
          </div>
        </div>

        {/* Итог */}
        <div className={styles.summary}>
          <h2>Ваш заказ</h2>

          <div className={styles.item}>
            <span>Шелковая пижама</span>
            <span>49.99 €</span>
          </div>

          <div className={styles.item}>
            <span>Доставка</span>
            <span>5 €</span>
          </div>

          <div className={styles.total}>
            <span>Итого</span>
            <span>54.99 €</span>
          </div>

          <button className={styles.payBtn}>Оплатить</button>
        </div>
      </div>
    </div>
  );
};
