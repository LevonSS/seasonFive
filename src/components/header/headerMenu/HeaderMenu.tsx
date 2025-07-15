import { NavLink, useLocation } from "react-router";
import styles from "./HeaderMenu.module.scss";

interface Props {
  isHidden: boolean;
  isVisibleMobileMenu: boolean;
  onContactOpen: () => void;
  onShowMobileMenu: (prevState: (prev: boolean) => boolean) => void;
}

const HeaderMenu = ({
  isHidden,
  isVisibleMobileMenu,
  onContactOpen,
  onShowMobileMenu,
}: Props) => {
  const { pathname } = useLocation();

  return (
    <>
      <nav
        className={`${styles.nav} ${
          isVisibleMobileMenu ? styles["nav--showMobileMenu"] : ""
        } ${isHidden ? styles["nav--hidden"] : ""}`}
      >
        <div
          className={`${styles.nav__mobileMenu} ${
            isVisibleMobileMenu ? styles["nav__mobileMenu--showMobileMenu"] : ""
          }`}
          onClick={() => onShowMobileMenu((prev) => !prev)}
        >
          <span>&nbsp;</span>
        </div>
        <ul
          className={`${styles.headermenu} ${
            pathname === "/season" ? styles["white"] : ""
          }`}
        >
          <NavLink
            className={styles.item}
            to="/about"
            onClick={() => onShowMobileMenu(() => false)}
          >
            About
          </NavLink>
          <NavLink
            className={styles.item}
            to="/services"
            onClick={() => onShowMobileMenu(() => false)}
          >
            Our Services
          </NavLink>
          <NavLink
            className={styles.item}
            to="/projects"
            onClick={() => onShowMobileMenu(() => false)}
          >
            Projects
          </NavLink>
          <NavLink
            title="Aranet Wireless Sensors"
            className={styles.item}
            to="/packages"
            onClick={() => onShowMobileMenu(() => false)}
          >
            Monitoring
          </NavLink>
          <NavLink
            title="Season5 Climate Computer"
            className={styles.item}
            to="/season"
            onClick={() => onShowMobileMenu(() => false)}
          >
            Season5
          </NavLink>
          {/* <NavLink
            title="Season5 Climate Computer"
            className={styles.item}
            to="/blog"
            onClick={() => onShowMobileMenu(() => false)}
          >
            Blog
          </NavLink> */}
          <a
            className={styles.item}
            onClick={() => {
              onContactOpen();
            }}
          >
            Contact Us
          </a>
        </ul>
      </nav>
      <div className={styles["nav__overlay"]}></div>
    </>
  );
};

export default HeaderMenu;
