import { packagesAndKits } from "../../data/data";
import CardItem from "../cardItem/CardItem";
import styles from "./PackagesAndKits.module.scss";
import Button from "../button/Button";
// import { FadeInSection } from "../../animation/animation";

const PackagesAndKits = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsContainer__cards}>
        {packagesAndKits.map((item) => (
          <CardItem key={item.title} link="packages" item={item} />
        ))}
      </div>
      <Button text="View More Sensors" link="/products" />
    </div>
  );
};

export default PackagesAndKits;
