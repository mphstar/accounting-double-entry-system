import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Payment from "@/features/company/expense/payment/Payment";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Payment" }));
  }, []);

  return <Payment />;
}

export default InternalPage;
