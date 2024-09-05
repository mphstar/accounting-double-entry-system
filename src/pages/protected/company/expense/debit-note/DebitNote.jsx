import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import DebitNote from "@/features/company/expense/debit-note/DebitNote";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Debit Note" }));
  }, []);

  return <DebitNote />;
}

export default InternalPage;
