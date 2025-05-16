import styles from "./Modal.module.scss";

interface Props {
  title: string;
  text: string;
  image: string;
  isActive: boolean;
  setisActive: (value: boolean) => void;
  setOpenModal: (value: boolean) => void;
}

const Modal = ({
  title,
  text,
  image,
  setOpenModal,
  setisActive,
  isActive,
}: Props) => {
  const handleModalClose = () => {
    setisActive(false);
    setOpenModal(false);
  };
  return (
    <div
      className={`${styles.container}  ${isActive ? styles["isActive"] : ""}`}
    >
      <div className={styles.modal}>
        <h3 className={styles.title}>Project - {title}</h3>
        <figure>
          <img src={image} alt="Project image" loading="lazy" />
        </figure>
        <p className={styles.text}>{text}</p>
        <button onClick={handleModalClose}>Close</button>
      </div>
      <div className={styles.overlay} onClick={handleModalClose}></div>
    </div>
  );
};

export default Modal;
