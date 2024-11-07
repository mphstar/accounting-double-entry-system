import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import PreviewContract from "@/features/company/contract/preview/PreviewContract";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Preview Contract" }));
  }, []);

  return <PreviewContract />;
}

export default InternalPage;
