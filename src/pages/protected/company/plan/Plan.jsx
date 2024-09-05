import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Plan from "@/features/company/plan/Plan";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Plan" }));
  }, []);

  return <Plan />;
}

export default InternalPage;
