import { useState, ReactNode } from "react";
import { AmoFormType, AmoFormContext } from "./AmoFormContext";

export const AmoFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const value: AmoFormType = {
    isOpen,
    setIsOpen,
    isOpenModal,
    setIsOpenModal,
  };

  return (
    <AmoFormContext.Provider value={value}>{children}</AmoFormContext.Provider>
  );
};
