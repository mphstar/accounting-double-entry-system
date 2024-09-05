import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import CreditNote from "@/features/company/income/credit-note/CreditNote";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Credit Note" }));
  }, []);

  return <CreditNote />;
}

export default InternalPage;
