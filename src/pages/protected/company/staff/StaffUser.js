import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../../features/common/headerSlice";
import StaffUser from "../../../../features/company/staff/StaffUser";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Staff" }));
  }, []);

  return <StaffUser />;
}

export default InternalPage;
