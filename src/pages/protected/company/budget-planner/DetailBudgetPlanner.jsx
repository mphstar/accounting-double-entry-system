import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import DetailBudgetPlanner from "@/features/company/budget-planner/DetailBudgetPlanner";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Detail Budget Planner" }));
  }, []);

  return <DetailBudgetPlanner />;
}

export default InternalPage;
