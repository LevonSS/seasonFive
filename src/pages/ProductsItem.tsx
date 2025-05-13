import { useParams } from "react-router";
import { getSelectedProduct } from "../helper/getSelectedProduct";
import ItemPage from "../components/itemPage/ItemPage";
import { defObj } from "../helper/constants";

const ProductItem = () => {
  const { productId } = useParams();
  const { selectedProduct } = getSelectedProduct(productId!);
  console.log(selectedProduct);
  return (
    <div>
      <ItemPage item={selectedProduct ? selectedProduct : defObj} />
    </div>
  );
};

export default ProductItem;
