import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import CreateProposal from "@/features/company/presale/proposal/CreateProposal";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Create Proposal" }));
  }, []);

  return <CreateProposal />;
}

export default InternalPage;
