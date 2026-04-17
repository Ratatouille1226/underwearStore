import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useAppSelector } from "../../hooks/hooks";

export const Header = () => {
  const totalCount = useAppSelector((state) =>
    state.cart.items.reduce((cur, item) => cur + item.quantity, 0),
  );

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        LIONES
      </NavLink>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.icon} ${styles.active}` : styles.icon
          }
        >
          <i className="fa-solid fa-house"></i>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? `${styles.icon} ${styles.active}` : styles.icon
          }
        >
          <div className={styles.cartWrapper}>
            <i className="fa-solid fa-basket-shopping"></i>

            {totalCount > 0 && (
              <span className={styles.badge}>{totalCount}</span>
            )}
          </div>
        </NavLink>
      </nav>
    </header>
  );
};
