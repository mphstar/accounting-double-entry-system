import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/features/common/headerSlice";
import LandingPage from "@/features/super-admin/landing-page/LandingPage";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Landing Page" }));
  }, []);

  return <LandingPage />;
}

export default InternalPage;
