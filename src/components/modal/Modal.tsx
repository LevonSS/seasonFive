// import { ReactNode, useEffect, useState } from "react";
import { ReactNode } from "react";
import styles from "./Modal.module.scss";
import { useAmoForm } from "../../context/useAmoForm";

interface Props {
  children: ReactNode;
  setIsOpen: (value: boolean) => void;
}

const Modal = ({ children }: Props) => {
  //   const [mounted, setMounted] = useState(false);
  const { setIsOpenModal, isOpenModal } = useAmoForm();

  //   const el = document.querySelector(".amoforms__submit-button-text");
  //   console.log("el ", el);
  //   useEffect(() => {
  //     setMounted(true);
  //   }, [setMounted]);

  return (
    <div
      className={`${styles.modalContainer} ${
        !isOpenModal ? styles["hidden"] : ""
      }`}
      aria-hidden={!isOpenModal}
    >
      <div className={styles.modal}>
        <h3 className={styles.title}>Contact Us</h3>
        {children}
        {/* <button onClick={() => setIsOpenModal(false)}>Close</button> */}
      </div>
      <div
        className={styles.overlay}
        onClick={() => setIsOpenModal(false)}
      ></div>
    </div>
  );
};

export default Modal;
