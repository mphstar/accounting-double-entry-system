import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Goal from "@/features/company/goal/Goal";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Goal" }));
  }, []);

  return <Goal />;
}

export default InternalPage;
