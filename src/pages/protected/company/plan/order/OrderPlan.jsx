import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Plan from "@/features/company/plan/Plan";
import OrderPlan from "@/features/company/plan/Order/OrderPlan";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Order Plan" }));
  }, []);

  return <OrderPlan />;
}

export default InternalPage;
