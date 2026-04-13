import styles from "./Filters.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  setCategory,
  setColor,
  setSize,
} from "../../features/filters/filtersSlice";

export const Filters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const { items } = useAppSelector((state) => state.products);

  //динамические данные для селектов
  const categories = ["all", ...new Set(items.map((p) => p.category))];

  const colors = [
    "all",
    ...new Set(items.map((p) => p.attributes.color as string)),
  ];

  const sizes = [
    "all",
    ...new Set(items.flatMap((p) => p.attributes.sizes || [])),
  ];

  return (
    <div className={styles.filters}>
      <div className={styles.group}>
        <span>Категория</span>
        <select
          value={filters.category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "Все" : cat}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.group}>
        <span>Цвет</span>
        <select
          value={filters.color}
          onChange={(e) => dispatch(setColor(e.target.value))}
        >
          {colors.map((color) => (
            <option key={color} value={color}>
              {color === "all" ? "Все" : color}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.group}>
        <span>Размер</span>
        <select
          value={filters.size}
          onChange={(e) => dispatch(setSize(e.target.value))}
        >
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size === "all" ? "Все" : size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
