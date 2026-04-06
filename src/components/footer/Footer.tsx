import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>LIONES</h2>
          <p>Магазин пижам и нижнего белья. Стиль и комфорт каждый день.</p>
          <p className={styles.contact}>✉ contact@liones.com</p>
        </div>

        <div className={styles.socials}>
          <a href="#" aria-label="Telegram">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="#" aria-label="VK">
            <i className="fa-brands fa-vk"></i>
          </a>
          <a href="#" aria-label="Max">
            <i className="fa-solid fa-globe"></i>{" "}
            {/* Используем иконку сайта для Max */}
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 LIONES. Все права защищены.</p>
      </div>
    </footer>
  );
};
