import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import BillDetail from "@/features/company/expense/bill/detail/BillDetail";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Bill" }));
  }, []);

  return <BillDetail />;
}

export default InternalPage;
