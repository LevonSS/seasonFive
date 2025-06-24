import { useParams } from "react-router";

import { getSelectedPackage } from "../helper/getSelectedPackage";
import ItemPage from "../components/itemPage/ItemPage";
import { defObj } from "../helper/constants";
import PageNotFound from "./PageNotFound";

const PackagesItem = () => {
  const { packageId } = useParams();
  const { selectedPackage } = getSelectedPackage(packageId ? packageId : "");
  if (!selectedPackage) return <PageNotFound />;

  return (
    <>
      <ItemPage item={selectedPackage ? selectedPackage : defObj} />
    </>
  );
};
export default PackagesItem;
