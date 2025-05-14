import { motion } from "framer-motion";
import { _SERVICESIMAGEPATH } from "../../helper/constants";
import styles from "./ServiceTypes.module.scss";
import FadeInSectionVariants from "../../animation/animation";
import {
  yOffsetVariants,
  xOffsetVariants,
  containerVariants,
} from "../../variants";

interface ServiceTypesProps {
  type: string;
  image: string;
  text: string[];
  properties: string[];
}

const ServiceTypes = ({ type, image, text, properties }: ServiceTypesProps) => {
  return (
    <FadeInSectionVariants variants={containerVariants}>
      <div className={styles.serviceTypesBox}>
        <div className={styles.serviceTypesBox__imgBox}>
          <motion.div variants={yOffsetVariants}>
            <img src={`${_SERVICESIMAGEPATH}${image}`} />
          </motion.div>
        </div>
        <div className={styles.serviceTypesBox__textBox}>
          <motion.div variants={xOffsetVariants} className="flexColumn">
            <h3>{type}</h3>

            {text.map((item) => (
              <p key={item}>{item}</p>
            ))}

            <ul>
              {properties.map((property) => (
                <li key={property}>{property}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </FadeInSectionVariants>
  );
};

export default ServiceTypes;
