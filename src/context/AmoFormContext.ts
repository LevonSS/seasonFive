import { createContext } from "react";

export type AmoFormType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
};

export const AmoFormContext = createContext<AmoFormType | undefined>(undefined);
