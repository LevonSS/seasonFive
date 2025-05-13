import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Products = ({ children }: Props) => {
  return children;
};

export default Products;
