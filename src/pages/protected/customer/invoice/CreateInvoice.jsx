import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import CreateInvoice from "@/features/customer/invoice/CreateInvoice";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Create Invoice" }));
  }, []);

  return <CreateInvoice />;
}

export default InternalPage;
