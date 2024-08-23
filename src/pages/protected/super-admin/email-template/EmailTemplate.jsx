import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import EmailTemplate from "@/features/super-admin/email-template/EmailTemplate";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Email Template" }));
  }, []);

  return <EmailTemplate />;
}

export default InternalPage;
