import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Revenue from "@/features/company/income/revenue/Revenue";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Revenue" }));
  }, []);

  return <Revenue />;
}

export default InternalPage;
