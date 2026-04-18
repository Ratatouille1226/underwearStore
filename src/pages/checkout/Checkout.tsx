import styles from "./Checkout.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  createOrder,
  type OrderFormData,
} from "../../features/orders/ordersSlice";
import { clearCart } from "../../features/cart/cartSlice";

import { useForm } from "react-hook-form";

export const Checkout = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);
  const { loading, error } = useAppSelector((state) => state.orders);

  // 🔥 react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrderFormData>({
    mode: "onTouched",
  });

  // итоговая сумма
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  // отправка
  const onSubmit = async (data: OrderFormData) => {
    const result = await dispatch(createOrder(data));

    if (createOrder.fulfilled.match(result)) {
      dispatch(clearCart());
      reset();
      alert("Заказ успешно оформлен 🎉");
    }
  };

  return (
    <div className={styles.checkout}>
      <h1>Оформление заказа</h1>

      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        {/* ФОРМА */}
        <div className={styles.form}>
          <h2>Контактные данные</h2>

          <input
            placeholder="Имя"
            className={errors.name ? styles.inputError : styles.input}
            {...register("name", { required: "Введите имя" })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          <input
            placeholder="Email"
            className={errors.email ? styles.inputError : styles.input}
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Некорректный email",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <input
            placeholder="Телефон"
            className={errors.phone ? styles.inputError : styles.input}
            {...register("phone", {
              required: "Введите телефон",
              minLength: {
                value: 6,
                message: "Слишком короткий номер",
              },
            })}
          />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}

          <h2>Доставка</h2>

          <input
            placeholder="Город"
            className={errors.city ? styles.inputError : styles.input}
            {...register("city", { required: "Введите город" })}
          />
          {errors.city && <p className={styles.error}>{errors.city.message}</p>}

          <input
            placeholder="Адрес"
            className={errors.address ? styles.inputError : styles.input}
            {...register("address", { required: "Введите адрес" })}
          />
          {errors.address && (
            <p className={styles.error}>{errors.address.message}</p>
          )}

          <input
            placeholder="Индекс"
            className={errors.zip ? styles.inputError : styles.input}
            {...register("zip", {
              required: "Введите индекс",
              minLength: {
                value: 4,
                message: "Слишком короткий индекс",
              },
            })}
          />
          {errors.zip && <p className={styles.error}>{errors.zip.message}</p>}
        </div>

        {/* ИТОГ */}
        <div className={styles.summary}>
          <h2>Ваш заказ</h2>

          {cartItems.map((item) => (
            <div key={item.product.id} className={styles.item}>
              <span>{item.product.name}</span>
              <span>{item.product.price * item.quantity} €</span>
            </div>
          ))}

          <div className={styles.item}>
            <span>Доставка</span>
            <span>5 €</span>
          </div>

          <div className={styles.total}>
            <span>Итого</span>
            <span>{(total + 5).toFixed(2)} €</span>
          </div>

          <button type="submit" disabled={loading} className={styles.payBtn}>
            {loading ? "Оформляем..." : "Оплатить"}
          </button>

          {error && <p className={styles.error}>{error}</p>}
        </div>
      </form>
    </div>
  );
};
