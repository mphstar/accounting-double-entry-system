import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import VendorDetail from "@/features/company/vendor/detail/VendorDetail";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Vendor" }));
  }, []);

  return <VendorDetail />;
}

export default InternalPage;
