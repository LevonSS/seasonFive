import { seasonFiveProducts } from "../../data/data";
import styles from "./SeasonFive.module.scss";
import ItemPage from "./itemPage/ItemPage";

const SeasonFive = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cards}>
        {seasonFiveProducts?.map((item) => (
          <ItemPage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SeasonFive;
