import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import InvoiceDetail from "@/features/company/income/invoice/detail/InvoiceDetail";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Invoice" }));
  }, []);

  return <InvoiceDetail />;
}

export default InternalPage;
