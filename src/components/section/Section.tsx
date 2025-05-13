import { ReactNode } from "react";
import styles from "./Section.module.scss";
import FadeInSection from "../../animation/animation";

interface Props {
  children: ReactNode;
  color?: string;
  modifier?: string;
}

const Section = ({ children, color, modifier }: Props) => {
  return (
    <FadeInSection>
      <section
        className={`${styles["sectionBox"]} ${color ? styles[color] : ""} ${
          modifier ? styles[modifier] : ""
        }`}
      >
        {children}
      </section>
    </FadeInSection>
  );
};

export default Section;
