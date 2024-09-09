import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import IncomeVsExpense from "@/features/company/report/income-vs-expense/IncomeVsExpense";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Income vs Expense" }));
  }, []);

  return <IncomeVsExpense />;
}

export default InternalPage;
