import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Assets from "@/features/company/assets/Assets";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Assets" }));
  }, []);

  return <Assets />;
}

export default InternalPage;
