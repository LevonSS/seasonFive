import { useContext } from "react";
import { AmoFormContext } from "./AmoFormContext";

export const useAmoForm = () => {
  const context = useContext(AmoFormContext);
  if (!context) {
    throw new Error("useAmoForm must be used within an AmoFormProvider");
  }
  return context;
};
