// import { ReactNode, useEffect, useState } from "react";
import { ReactNode } from "react";
import styles from "./ModalAmoForm.module.scss";
import { useAmoForm } from "../../context/useAmoForm";

interface Props {
  children: ReactNode;
}

const ModalAmoForm = ({ children }: Props) => {
  const { setIsOpenModal, isOpenModal } = useAmoForm();

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

export default ModalAmoForm;
