import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import IncomeSummary from "@/features/company/report/income-summary/IncomeSummary";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Income Summary" }));
  }, []);

  return <IncomeSummary />;
}

export default InternalPage;
