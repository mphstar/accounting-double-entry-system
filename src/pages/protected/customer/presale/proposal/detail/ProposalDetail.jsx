import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import ProposalDetail from "@/features/customer/presale/proposal/detail/ProposalDetail";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Proposal" }));
  }, []);

  return <ProposalDetail />;
}

export default InternalPage;
