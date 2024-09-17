import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import ProductStock from "@/features/company/product-stock/ProductStock";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Product Stock" }));
  }, []);

  return <ProductStock />;
}

export default InternalPage;
