import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import CreateBudgetPlanner from "@/features/company/budget-planner/CreateBudgetPlanner";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Create Budget Planner" }));
  }, []);

  return <CreateBudgetPlanner />;
}

export default InternalPage;
