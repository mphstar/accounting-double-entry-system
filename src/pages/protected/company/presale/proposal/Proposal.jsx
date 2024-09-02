import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Proposal from "@/features/company/presale/proposal/Proposal";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Proposal" }));
  }, []);

  return <Proposal />;
}

export default InternalPage;
