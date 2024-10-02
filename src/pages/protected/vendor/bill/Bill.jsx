import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Bill from "@/features/vendor/bill/Bill";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Bill" }));
  }, []);

  return <Bill />;
}

export default InternalPage;
