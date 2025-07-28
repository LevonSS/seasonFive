import { Link } from "react-router";
import styles from "./Salmon.module.scss";
import { FadeInSection } from "../../animation/animation";
import mission from "../../assets/images/mission.jpg";

const Salmon = () => {
  return (
    <FadeInSection delay={0.3}>
      <div className={styles.salmon}>
        <div className={styles.salmon__text}>
          <h3>
            <FadeInSection delay={0.1}>
              <span>At Season5, we believe that every plant</span>
            </FadeInSection>
            <FadeInSection delay={0.15}>
              <span>deserves the right climate — and</span>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <span> every grower deserves a system</span>
            </FadeInSection>
            <FadeInSection delay={0.25}>
              <span>that works with nature, not against it.</span>
            </FadeInSection>
          </h3>
          <FadeInSection delay={0.45}>
            <Link className={styles.salmon__btnSalmon} to="/about">
              Our Mission{" "}
            </Link>
          </FadeInSection>
        </div>
        <div className={styles.salmon__image}>
          <img src={mission} alt="Photo" />
        </div>
      </div>
    </FadeInSection>
  );
};

export default Salmon;
