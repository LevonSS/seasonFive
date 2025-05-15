import FadeInSectionVariants from "../../animation/animation";
import { _IMAGEPATH } from "../../helper/constants";
import {
  yOffsetVariants,
  xOffsetVariants,
  containerVariants,
} from "../../variants";
import Button from "../button/Button";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import styles from "./ItemPage.module.scss";
import { motion } from "framer-motion";

export interface ItemProps {
  item: {
    id: number;
    image: string;
    price: number;
    title: string;
    information: {
      linkTo?: string;
      isProductItem?: boolean;
      productCode: string;
      text: string[];
      includes: string[];
    };
  };
}

const ItemPage = ({ item: { image, information, title } }: ItemProps) => {
  return (
    <>
      <FadeInSectionVariants variants={containerVariants}>
        <ScrollToTop />
        <div className={styles.itemPage}>
          <div className={styles.itemPage__image}>
            <motion.div variants={yOffsetVariants}>
              <img src={`${_IMAGEPATH}${image}.webp`} alt="Image" />
            </motion.div>
          </div>
          <motion.div variants={xOffsetVariants}>
            <div className={styles.itemPage__infoBox}>
              <h2>{title}</h2>
              <span>Product Code: {information?.productCode}</span>
              <div
                className={`${
                  information?.isProductItem
                    ? styles["itemPage__infoBox__isProductItem"]
                    : ""
                }`}
              >
                {information &&
                  information?.text.map((t, index) => <p key={index}>{t}</p>)}

                {information && information.includes && (
                  <>
                    {!information.isProductItem && (
                      <p>
                        <strong>Package includes:</strong>
                      </p>
                    )}
                    <ul className={styles.itemPage__infoBox__list}>
                      {information?.includes?.map((el) => (
                        <li key={el}>{el}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={yOffsetVariants}>
          <div className={styles.linkTo}>
            <Button
              text="View Details"
              link={information.linkTo}
              _blank="true"
            />
          </div>
        </motion.div>
      </FadeInSectionVariants>
    </>
  );
};

export default ItemPage;
