import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
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
          <i className="fa-solid fa-basket-shopping"></i>
        </NavLink>
      </nav>
    </header>
  );
};
