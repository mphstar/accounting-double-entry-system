import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import Retainers from "@/features/customer/presale/retainers/Retainers";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Retainers" }));
  }, []);

  return <Retainers />;
}

export default InternalPage;
