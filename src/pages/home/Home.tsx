import { Filters, ProductCard, ProductCardSkeleton } from "../../components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts } from "../../features/products/productsSlice";

import styles from "./Home.module.css";
import { resetFilters } from "../../features/filters/filtersSlice";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.products);
  const filters = useAppSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //Фильтрация
  const filteredItems = items.filter((product) => {
    const matchCatrgory =
      filters.category === "all" || product.category === filters.category;
    const matchColor =
      filters.color === "all" || product.attributes.color === filters.color;
    const matchSize =
      filters.size === "all" ||
      (product.attributes.sizes || []).includes(filters.size);
    return matchCatrgory && matchColor && matchSize;
  });

  // console.log("filteredItems", filteredItems);

  return (
    <div>
      <Filters />

      <div className={styles.grid}>
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        ) : filteredItems.length === 0 ? (
          <div className={styles.empty}>
            <p>Ничего не найдено 😔</p>
            <button onClick={() => dispatch(resetFilters())}>
              Сбросить фильтры
            </button>
          </div>
        ) : (
          filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};
