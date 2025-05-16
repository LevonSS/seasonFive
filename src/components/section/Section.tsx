import { ReactNode } from "react";
import styles from "./Section.module.scss";
import { FadeInSection } from "../../animation/animation";

interface Props {
  children: ReactNode;
  type?: string;
  modifier?: string;
  yOffset?: number;
}

const Section = ({ children, type, modifier, yOffset = 50 }: Props) => {
  return (
    <FadeInSection y={yOffset}>
      <section
        className={`${styles["sectionBox"]} ${type ? styles[type] : ""} ${
          modifier ? styles[modifier] : ""
        }`}
      >
        {children}
      </section>
    </FadeInSection>
  );
};

export default Section;
