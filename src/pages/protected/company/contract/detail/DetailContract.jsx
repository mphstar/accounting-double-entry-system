import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import DetailContract from "@/features/company/contract/detail/DetailContract";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Detail Contract" }));
  }, []);

  return <DetailContract />;
}

export default InternalPage;
