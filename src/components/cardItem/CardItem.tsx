import { Link } from "react-router";
import styles from "./CardItem.module.scss";
import { _IMAGEPATH } from "../../helper/constants";
import { FadeInSection } from "../../animation/animation";

export interface CardProps {
  link?: string | "";
  item: {
    id: number;
    title: string;
    description?: string;
    image: string;
    price?: number;
    information?: object;
  };
}

const CardItem = ({
  link,
  item: { id, description, title, image },
}: CardProps) => {
  return (
    <div className={styles.cardItem}>
      <FadeInSection duration={0.5}>
        <Link to={`/${link}/${id}`}>
          <div className={styles.cardItem__title}>
            <h3>{title}</h3>
            {description ? <span>{description}</span> : ""}
          </div>

          <div className={styles.cardItem__image}>
            <img src={`${_IMAGEPATH}${image}.webp`} />
          </div>

          <div className={styles.cardItem__button}>
            <button type="button">Learn More</button>
          </div>
        </Link>
      </FadeInSection>
    </div>
  );
};

export default CardItem;
