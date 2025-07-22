import { FadeInSection } from "../../animation/animation";
import { useAmoForm } from "../../context/useAmoForm";
import { handleScrollToTop } from "../../helper/scrollToTop";
import styles from "./Banner.module.scss";

interface Props {
  text: string;
}

const Banner = ({ text }: Props) => {
  const { setIsOpenModal } = useAmoForm();

  return (
    <FadeInSection delay={0.3}>
      <div className={styles.container}>
        <div className={styles.container__title}>
          <h3>{text}</h3>
        </div>
        <div className={styles.container__link}>
          <span onClick={() => handleScrollToTop({ action: setIsOpenModal })}>
            Coffee's on us — let's talk!
          </span>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Banner;
