import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserLog from "@/features/company/staff/logs/UserLog";
import { setPageTitle } from "@/features/common/headerSlice";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "User Logs" }));
  }, []);

  return <UserLog />;
}

export default InternalPage;
