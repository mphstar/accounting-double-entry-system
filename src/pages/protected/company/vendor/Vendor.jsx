import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Vendor from "@/features/company/vendor/Vendor";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Vendor" }));
  }, []);

  return <Vendor />;
}

export default InternalPage;
