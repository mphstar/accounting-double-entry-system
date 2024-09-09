import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import BillSummary from "@/features/company/report/bill-summary/BillSummary";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Bill Summary" }));
  }, []);

  return <BillSummary />;
}

export default InternalPage;
