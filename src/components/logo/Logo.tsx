import { Link } from "react-router";
import styles from "./Logo.module.scss";

interface Props {
  isVisibleMobileMenu?: boolean;
  image: string;
  from?: string;
}

const Logo = ({ isVisibleMobileMenu, image, from }: Props) => {
  return (
    <Link
      to="/"
      className={`${styles.logoBox} ${
        isVisibleMobileMenu ? styles["logoBox--showMobileMenu"] : ""
      }`}
    >
      <img
        src={`../../src/assets/${image}`}
        alt="Logo"
        className={`${
          from
            ? [styles["logoBox__logo"], styles["logoBox__logo" + from]].join(
                " "
              )
            : styles["logoBox__logo"]
        }`}
      />
    </Link>
  );
};

export default Logo;
