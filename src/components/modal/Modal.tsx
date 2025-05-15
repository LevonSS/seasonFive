import { Suspense } from "react";
import styles from "./Modal.module.scss";

interface Props {
  text: string;
  image: string;
  isActive: boolean;
  setisActive: (value: boolean) => void;
  setOpenModal: (value: boolean) => void;
}

const Modal = ({ text, image, setOpenModal, setisActive, isActive }: Props) => {
  const handleModalClose = () => {
    setisActive(false);
    setOpenModal(false);
  };
  return (
    <div
      className={`${styles.container}  ${isActive ? styles["isActive"] : ""}`}
    >
      <div className={styles.modal}>
        <h3 className={styles.title}>Project</h3>
        <Suspense fallback={<p>Loading...</p>}>
          <figure>
            <img src={image} alt="Project image" loading="lazy" />
          </figure>
        </Suspense>
        <div className={styles.text}>{text}</div>
        <button onClick={handleModalClose}>Close</button>
      </div>
      <div className={styles.overlay} onClick={handleModalClose}></div>
    </div>
  );
};

export default Modal;
