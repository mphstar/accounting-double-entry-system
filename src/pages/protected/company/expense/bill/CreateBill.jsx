import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import CreateBill from "@/features/company/expense/bill/CreateBill";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Create Bill" }));
  }, []);

  return <CreateBill />;
}

export default InternalPage;
