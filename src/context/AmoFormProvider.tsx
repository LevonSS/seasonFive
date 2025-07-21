import { useState, ReactNode } from "react";
import { AmoFormType, AmoFormContext } from "./AmoFormContext";

export const AmoFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenMailingList, setIsOpenMailingList] = useState(true);
  const [isOpenModalMailingList, setIsOpenModalMailingList] = useState(false);

  const value: AmoFormType = {
    isOpen,
    isOpenMailingList,
    setIsOpen,
    setIsOpenMailingList,
    isOpenModal,
    isOpenModalMailingList,
    setIsOpenModal,
    setIsOpenModalMailingList,
  };

  return (
    <AmoFormContext.Provider value={value}>{children}</AmoFormContext.Provider>
  );
};
