import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../../features/common/headerSlice";
import CreateJournal from "@/features/company/double-entry/journal-account/CreateJournal";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Create Journal Account" }));
  }, []);

  return <CreateJournal />;
}

export default InternalPage;
