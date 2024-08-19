import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../../features/common/headerSlice";
import ProductService from "../../../../features/company/product-services/ProductService";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Product & Services" }));
  }, []);

  return <ProductService />;
}

export default InternalPage;
