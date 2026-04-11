import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import type { Product } from "../../types";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      {/* Обертка для клика по карточке */}
      <Link to={`/products/${product.id}`} className={styles.linkWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src="https://avatars.mds.yandex.net/i?id=5dbc75cc67dfa9ade0e1710efc639026_l-4076029-images-thumbs&n=13"
            alt="product"
          />
        </div>

        <div className={styles.info}>
          <h3>{product.name}</h3>
          <p>{product.price} €</p>
        </div>
      </Link>

      {/* Кнопка добавления в корзину отдельно */}
      <button className={styles.addToCart}>
        <i className="fa-solid fa-basket-shopping"></i>
      </button>
    </div>
  );
};
