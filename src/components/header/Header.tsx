import Logo from "../logo/Logo";
import HeaderMenu from "./headerMenu/HeaderMenu";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";

type ContactProps = {
  onContactOpen: () => void;
};
const Header = ({ onContactOpen }: ContactProps) => {
  const [isVisibleMobileMenu, setShowMobileMenu] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuHidden(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isMenuHidden ? styles["header--hidden"] : ""
      }`}
    >
      <div
        className={`${styles.header__backgroundLayer} ${
          isVisibleMobileMenu
            ? styles["header__backgroundLayer--showMobileMenu"]
            : ""
        }`}
        onClick={() => setShowMobileMenu(false)}
      ></div>
      <Logo isVisibleMobileMenu={isVisibleMobileMenu} image={logo} />
      <HeaderMenu
        isHidden={isMenuHidden}
        onShowMobileMenu={setShowMobileMenu}
        onContactOpen={onContactOpen}
        isVisibleMobileMenu={isVisibleMobileMenu}
      />
    </header>
  );
};

export default Header;
