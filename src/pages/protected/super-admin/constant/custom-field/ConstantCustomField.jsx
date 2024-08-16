import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../../../features/common/headerSlice";
import ConstantCustomField from "../../../../../features/super-admin/constant/custom-field/ConstantCustomField";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Constant" }));
  }, []);

  return <ConstantCustomField />;
}

export default InternalPage;
