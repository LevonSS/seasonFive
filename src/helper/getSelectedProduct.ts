import { products } from "../data/data";

export const getSelectedProduct = (id: string) => {
  let selectedProduct = null;
  products.map((product) =>
    product.map((item) => {
      if (typeof item !== "string") {
        return item.id === parseInt(id) && (selectedProduct = item);
      }
    })
  );

  return { selectedProduct };
};
