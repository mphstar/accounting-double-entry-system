import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Invoice from "@/features/company/income/invoice/Invoice";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Invoice" }));
  }, []);

  return <Invoice />;
}

export default InternalPage;
