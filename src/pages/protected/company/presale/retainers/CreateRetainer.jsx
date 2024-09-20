import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import CreateRetainer from "@/features/company/presale/retainers/CreateRetainer";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Create Retainer" }));
  }, []);

  return <CreateRetainer />;
}

export default InternalPage;
