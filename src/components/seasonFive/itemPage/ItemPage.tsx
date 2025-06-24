import FadeInSectionVariants from "../../../animation/animation";
import { _SEASONFIVEIMAGEPATH } from "../../../helper/constants";
import {
  yOffsetVariants,
  xOffsetVariants,
  containerVariants,
} from "../../../variants";
import Button from "../../button/Button";
import ScrollToTop from "../../scrollToTop/ScrollToTop";
import styles from "./ItemPage.module.scss";
import { motion } from "framer-motion";

export interface ItemProps {
  item: {
    id: number;
    image: string;
    pdf: string;
    title: string;
    information: {
      text: string[];
      additionaltext?: string[];
      includes: string[];
      requires?: string[];
    };
  };
}

const ItemPage = ({ item: { image, pdf, information, title } }: ItemProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/pdfs/${pdf}`;
    link.download = pdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <FadeInSectionVariants variants={containerVariants}>
        <ScrollToTop />
        <div className={styles.itemPage}>
          <div className={styles.image}>
            <motion.div variants={yOffsetVariants}>
              <img src={`${_SEASONFIVEIMAGEPATH}${image}`} alt="Image" />
            </motion.div>
          </div>
          <motion.div variants={xOffsetVariants}>
            <div className={styles.infoBox}>
              <h2>{title}</h2>
              <div>
                {information &&
                  information?.text.map((t, index) => <p key={index}>{t}</p>)}

                {information && information.includes && (
                  <>
                    <ul className={styles.list}>
                      {information?.includes?.map((el) => (
                        <li key={el}>{el}</li>
                      ))}
                    </ul>
                  </>
                )}
                {information && information.requires && (
                  <>
                    <p>Requires:</p>
                    <ul className={styles.additionList}>
                      {information?.requires?.map((el) => (
                        <li key={el}>{el}</li>
                      ))}
                    </ul>
                  </>
                )}

                {information &&
                  information.additionaltext &&
                  information?.additionaltext.map((t, index) => (
                    <p key={index}>{t}</p>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={yOffsetVariants}>
          <div className={styles.linkTo}>
            <Button action={handleDownload} text="Download PDF" _blank="true" />
          </div>
        </motion.div>
      </FadeInSectionVariants>
    </>
  );
};

export default ItemPage;
