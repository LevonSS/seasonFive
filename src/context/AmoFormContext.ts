import { createContext } from "react";

export type AmoFormType = {
  isOpen: boolean;
  isOpenMailingList: boolean;
  setIsOpen: (value: boolean) => void;
  setIsOpenMailingList: (value: boolean) => void;
  isOpenModal: boolean;
  isOpenModalMailingList: boolean;
  setIsOpenModal: (value: boolean) => void;
  setIsOpenModalMailingList: (value: boolean) => void;
};

export const AmoFormContext = createContext<AmoFormType | undefined>(undefined);
