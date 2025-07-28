import { Link } from "react-router";
import styles from "./Capsule.module.scss";

interface Props {
  image: string;
  text?: string;
  linkText?: string;
  link?: string;
  modifier?: string;
}

const Capsule = ({ image, text, link, linkText, modifier }: Props) => {
  if (!link) {
    return (
      <div className={`${styles.capsule} ${modifier ? styles[modifier] : ""}`}>
        <div className={styles.imgBox}>
          <img
            className={styles.img}
            src={`../../src/assets/images/${image}`}
            alt="Photo"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.capsule} ${modifier ? styles[modifier] : ""}`}>
      <Link to={link ? link : ""}>
        <div className={styles.imgBox}>
          <img className={styles.img} src={image} alt="Photo" />
        </div>
        <div className={styles.capsule__text}>
          <h3>{text}</h3>
          <span>{linkText}</span>
        </div>
      </Link>
    </div>
  );
};

export default Capsule;
