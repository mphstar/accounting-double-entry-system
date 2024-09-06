import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import ExpenseSummary from "@/features/company/report/expense-summary/ExpenseSummary";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Expense Summary" }));
  }, []);

  return <ExpenseSummary />;
}

export default InternalPage;
