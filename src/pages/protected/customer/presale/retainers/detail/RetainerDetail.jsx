import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import RetainerDetail from "@/features/customer/presale/retainers/detail/RetainerDetail";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Retainers" }));
  }, []);

  return <RetainerDetail />;
}

export default InternalPage;
