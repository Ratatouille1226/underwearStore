import { Filters, ProductCard, ProductCardSkeleton } from "../../components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts } from "../../features/products/productsSlice";

import styles from "./Home.module.css";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Filters />

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};
