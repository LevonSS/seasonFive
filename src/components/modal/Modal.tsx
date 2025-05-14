import { Suspense } from "react";
import styles from "./Modal.module.scss";

interface Props {
  text: string;
  image: string;
  setOpenModal: (value: boolean) => void;
}

const Modal = ({ text, image, setOpenModal }: Props) => {
  return (
    <div className={`${styles.container} `}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Project</h3>
        <Suspense fallback={<p>Loading...</p>}>
          <figure>
            <img src={image} alt="Project image" loading="lazy" />
          </figure>
        </Suspense>
        <div className={styles.text}>{text}</div>
        <button onClick={() => setOpenModal(false)}>Close</button>
      </div>
      <div className={styles.overlay} onClick={() => setOpenModal(false)}></div>
    </div>
  );
};

export default Modal;
