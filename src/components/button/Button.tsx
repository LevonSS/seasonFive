import { Link } from "react-router";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  link?: string | "";
  _blank?: string | "";
}

const Button = ({ text, link, _blank }: Props) => {
  if (link) {
    return (
      <div className={styles.button}>
        <Link to={link} target={_blank ? "_blank" : ""}>
          {text}
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.button}>
      <button type="button">{text}</button>
    </div>
  );
};

export default Button;
