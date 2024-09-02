import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import RefferalProgram from "@/features/super-admin/refferal-program/RefferalProgram";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Refferal Program" }));
  }, []);

  return <RefferalProgram />;
}

export default InternalPage;