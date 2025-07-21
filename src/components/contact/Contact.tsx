import styles from "./Contact.module.scss";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { FadeInSection } from "../../animation/animation";
// import { motion } from "framer-motion";
// import { containerVariants, yOffsetVariants } from "../../variants";
import { useAmoForm } from "../../context/useAmoForm";
import { handleScrollToTop } from "../../helper/scrollToTop";

export type ContactToggleProps = {
  onContactClose: (param?: string) => void;
  isOpenContact: boolean;
};

const Contact = ({ isOpenContact, onContactClose }: ContactToggleProps) => {
  const { setIsOpenModal } = useAmoForm();

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
      <FadeInSection delay={0.1} y={100} viewport={false}>
        <div className={styles.contact__title}>
          <h5>Get in touch today.</h5>
        </div>
      </FadeInSection>
      <FadeInSection delay={0.2} y={100} viewport={false}>
        <div className={styles.contact__contactgroup}>
          <h6>Phone</h6>
          <p>(+374) 60 615151</p>
        </div>
      </FadeInSection>
      <FadeInSection delay={0.3} y={100} viewport={false}>
        <div className={styles.contact__contactgroup}>
          <h6>Email</h6>
          <p>info@season5.am</p>
        </div>
      </FadeInSection>
      <FadeInSection delay={0.3} y={100} viewport={false}>
        <div className={styles.contact__contactgroup}>
          <h6>Address</h6>
          <p> 49 Komitas ave.</p>
        </div>
      </FadeInSection>
      <FadeInSection delay={0.4} y={100} viewport={false}>
        <div className={styles.contact__contactgroup}>
          <button onClick={() => handleScrollToTop({ action: setIsOpenModal })}>
            Let’s Connect
          </button>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;
