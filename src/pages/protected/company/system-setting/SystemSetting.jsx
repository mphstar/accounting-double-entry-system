import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import SystemSetting from "@/features/company/system-setting/SystemSetting";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "System Setting" }));
  }, []);

  return <SystemSetting />;
}

export default InternalPage;
