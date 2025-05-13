import styles from "./Contact.module.scss";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import FadeInSectionVariants from "../../animation/animation";
import { motion } from "framer-motion";
import { containerVariants, yOffsetVariants } from "../../variants";

export type ContactToggleProps = {
  onContactClose: (param?: string) => void;
  isOpenContact: boolean;
};

const Contact = ({ isOpenContact, onContactClose }: ContactToggleProps) => {
  const ref = useOutsideClick({
    handleToggleContact: () => onContactClose("close"),
  });

  return (
    <div
      ref={ref}
      className={`${styles.contact} ${
        isOpenContact ? styles["contact--toggle"] : ""
      }`}
    >
      <div
        className={styles.contact__close}
        onClick={() => onContactClose("close")}
      ></div>
      <FadeInSectionVariants variants={containerVariants} viewport={false}>
        <motion.div variants={yOffsetVariants}>
          <div className={styles.contact__title}>
            <h5>Get in touch today.</h5>
          </div>
        </motion.div>
        <motion.div variants={yOffsetVariants}>
          <div className={styles.contact__contactgroup}>
            <h6>Phone</h6>
            <p>
              (+374) 60 615151</p>
          </div>
        </motion.div>
        <motion.div variants={yOffsetVariants}>
          <div className={styles.contact__contactgroup}>
            <h6>Email</h6>
            <p>info@season5.am</p>
          </div>
        </motion.div>
        {/* <motion.div variants={yOffsetVariants}>
          <div className={styles.contact__contactgroup}>
            <h6>Visit</h6>
            <p>Nor Norqi, 4-rd zangvac, Yerevan, Armenia</p>
          </div>
        </motion.div> */}
      </FadeInSectionVariants>
    </div>
  );
};

export default Contact;
