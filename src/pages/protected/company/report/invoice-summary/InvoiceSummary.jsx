import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import InvoiceSummary from "@/features/company/report/invoice-summary/InvoiceSummary";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Invoice Summary" }));
  }, []);

  return <InvoiceSummary />;
}

export default InternalPage;
