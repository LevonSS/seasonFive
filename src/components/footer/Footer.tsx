import { BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import styles from "./Footer.module.scss";
import { useAmoForm } from "../../context/useAmoForm";
import { handleScrollToTop } from "../../helper/scrollToTop";

const Footer = () => {
  const { setIsOpenModalMailingList } = useAmoForm();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__topSection}>
        <Logo image="bottomLogo.png" from="footer" />
        <div className={styles.footer__topSection__social}>
          <Link to="https://www.facebook.com/season5.am/" target="_blank">
            <BsFacebook />
          </Link>
          <Link
            to="https://www.linkedin.com/company/season-5-llc/"
            target="_blank"
          >
            <BiLogoLinkedin />
          </Link>
          <Link to="https://www.instagram.com/season5.am/" target="_blank">
            <BsInstagram />
          </Link>
        </div>
        <Button
          text="Get on Our Mailing List"
          action={() =>
            handleScrollToTop({ action: setIsOpenModalMailingList })
          }
        />
      </div>
      <div className={styles.footer__copyright}>
        <span>©2025 Season Five LLC | Yerevan, Armenia</span>
      </div>
    </footer>
  );
};

export default Footer;
