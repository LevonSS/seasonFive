import { packagesAndKits } from "../data/data";

export const getSelectedPackage = (id: string) => {
  let selectedPackage = null;
  packagesAndKits.map((item) => {
    return item.id === parseInt(id) && (selectedPackage = item);
  });

  return { selectedPackage };
};
