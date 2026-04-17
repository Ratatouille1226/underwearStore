import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { fetchProducts } from "../../features/products/productsSlice";
import styles from "./ProductPage.module.css";
import { useEffect } from "react";
import { addToCart } from "../../features/cart/cartSlice";

const attributeLabels: Record<string, string> = {
  color: "Цвет",
  sizes: "Размеры",
  material: "Материал",
};

export const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { items, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = items.find((item) => Number(item.id) === Number(id));

  if (loading) return <div>Загрузка...</div>;
  if (!product) return <div>Товар не найден</div>;

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
          <h1>{product.name}</h1>

          <p className={styles.price}>{product.price} €</p>

          <p className={styles.desc}>
            Мягкая и стильная пижама из шелка. Идеально подходит для комфортного
            сна и отдыха дома.
          </p>

          {/* АТРИБУТЫ */}
          <div className={styles.attributes}>
            {Object.entries(product.attributes).map(([key, value]) => (
              <div key={key} className={styles.attributeItem}>
                <span className={styles.attrName}>
                  {attributeLabels[key] || key}
                </span>

                <span className={styles.attrValue}>
                  {Array.isArray(value) ? value.join(", ") : value}
                </span>
              </div>
            ))}
          </div>

          {/* Кнопка */}
          <button
            className={styles.addBtn}
            onClick={() => dispatch(addToCart(product))}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};
