import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../../../features/common/headerSlice";
import ConstantUnit from "../../../../../features/super-admin/constant/unit/ConstantUnit";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Constant" }));
  }, []);

  return <ConstantUnit />;
}

export default InternalPage;
