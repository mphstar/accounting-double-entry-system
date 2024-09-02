import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import ProductStock from "@/features/company/report/product-stock/ProductStock";
import Customer from "@/features/company/customer/Customer";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Customer" }));
  }, []);

  return <Customer />;
}

export default InternalPage;
