import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../../features/common/headerSlice";
import StaffRole from "../../../../features/super-admin/staff/StaffRole";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Staff" }));
  }, []);

  return <StaffRole />;
}

export default InternalPage;
