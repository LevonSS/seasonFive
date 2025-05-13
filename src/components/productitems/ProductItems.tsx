import styles from "./ProductItems.module.scss";
import { products } from "../../data/data";
import CardItem from "../cardItem/CardItem";
import { FadeInSection } from "../../animation/animation";

const ProductItems = () => {
  const elements = products.map((product, index) => {
    const headline = product[0];
    return (
      <div key={index} className={styles.products__blocks}>
        {typeof headline === "string" && <h2>{headline}</h2>}
        {product.map((item) => {
          const itemObj = item;
          return typeof itemObj === "string" ? null : (
            <CardItem key={itemObj.title} link="products" item={itemObj} />
          );
        })}
      </div>
    );
  });

  return (
    <FadeInSection delay={0.3}>
      <div className={styles.products}>{elements.map((el) => el)}</div>
    </FadeInSection>
  );
};

export default ProductItems;
