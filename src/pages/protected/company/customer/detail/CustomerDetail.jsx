import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import CustomerDetail from "@/features/company/customer/detail/CustomerDetail";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Customer" }));
  }, []);

  return <CustomerDetail />;
}

export default InternalPage;
