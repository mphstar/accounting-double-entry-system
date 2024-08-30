import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import BudgetPlanner from "@/features/company/budget-planner/BudgetPlanner";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Budget Planner" }));
  }, []);

  return <BudgetPlanner />;
}

export default InternalPage;
