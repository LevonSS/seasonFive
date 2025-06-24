import { useParams } from "react-router";
import { getSelectedProduct } from "../helper/getSelectedProduct";
import ItemPage from "../components/itemPage/ItemPage";
import { defObj } from "../helper/constants";
import PageNotFound from "./PageNotFound";

const ProductItem = () => {
  const { productId } = useParams();
  const { selectedProduct } = getSelectedProduct(productId!);

  if (!selectedProduct) return <PageNotFound />;

  return (
    <div>
      <ItemPage item={selectedProduct ? selectedProduct : defObj} />
    </div>
  );
};

export default ProductItem;
