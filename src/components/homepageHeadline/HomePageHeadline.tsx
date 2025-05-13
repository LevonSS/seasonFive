import { motion } from "framer-motion";
import FadeInSectionVariants from "../../animation/animation";
import { containerVariants, yOffsetVariants } from "../../variants";
import styles from "./HomePageHeadline.module.scss";

const HomePageeHeadline = () => {
  return (
    <FadeInSectionVariants variants={containerVariants}>
      <div className={styles.homepageHeadline}>
        <h1>
          <span>Season5 – Engineering the Perfect Greenhouse Climate.</span>
        </h1>
        <motion.div variants={yOffsetVariants}>
          <p>
            <span>
              At Season5, we engineer smart climate control systems tailored for
              greenhouses. Our expertise in heating, cooling, and automation
              helps growers create stable, efficient, and productive
              environments — no matter the scale or crop.
            </span>
          </p>
        </motion.div>
        <motion.div variants={yOffsetVariants}>
          <p>
            <span>
              Whether you're building a new greenhouse or upgrading an existing
              one, we provide intelligent technologies that make every degree
              and drop of water count.
            </span>
          </p>
        </motion.div>
        <motion.ul variants={yOffsetVariants}>
          <ul>
            <li>Precision Climate Control</li>
            <li>Data-Driven Growing</li>
            <li>Energy Efficiency & Sustainability</li>
          </ul>
        </motion.ul>
      </div>
    </FadeInSectionVariants>
  );
};

export default HomePageeHeadline;
