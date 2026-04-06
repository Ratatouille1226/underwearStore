import { ProductCard } from "../product-card/ProductCard";
import styles from "./ProductList.module.css";

export const ProductList = () => {
  return (
    <div className={styles.grid}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
