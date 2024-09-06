import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Contract from "@/features/company/contract/Contract";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Contract" }));
  }, []);

  return <Contract />;
}

export default InternalPage;
