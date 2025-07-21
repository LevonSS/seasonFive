// import { ReactNode, useEffect, useState } from "react";
import { ReactNode } from "react";
import styles from "./ModalMailingList.module.scss";
import { useAmoForm } from "../../context/useAmoForm";

interface Props {
  children: ReactNode;
}

const ModalAmoForm = ({ children }: Props) => {
  const { setIsOpenModalMailingList, isOpenModalMailingList } = useAmoForm();

  return (
    <div
      className={`${styles.modalContainerMailingList} ${
        !isOpenModalMailingList ? styles["hidden"] : ""
      }`}
      aria-hidden={!isOpenModalMailingList}
    >
      <div className={styles.modal}>{children}</div>
      <div
        className={styles.overlay}
        onClick={() => setIsOpenModalMailingList(false)}
      ></div>
    </div>
  );
};

export default ModalAmoForm;
