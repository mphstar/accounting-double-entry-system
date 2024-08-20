import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../features/common/headerSlice";
import modalSlice from "../features/common/modalSlice";
import rightDrawerSlice from "../features/common/rightDrawerSlice";
import leadsSlice from "../features/leads/leadSlice";
import filterSlice from "../features/company/double-entry/trial-balance/filterSlice";
import CompanySlice from "../features/super-admin/company/CompanySlice";

const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  lead: leadsSlice,
  trialBalance: filterSlice,

  // super admin
  companySuperAdmin: CompanySlice,
};

export default configureStore({
  reducer: combinedReducer,
});
