// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Page404 = lazy(() => import("../pages/protected/404"));

const Blank = lazy(() => import("../pages/protected/Blank"));
const Charts = lazy(() => import("../pages/protected/Charts"));
const Leads = lazy(() => import("../pages/protected/Leads"));
const Integration = lazy(() => import("../pages/protected/Integration"));
const Calendar = lazy(() => import("../pages/protected/Calendar"));
const Team = lazy(() => import("../pages/protected/Team"));
const Transactions = lazy(() => import("../pages/protected/Transactions"));
const Bills = lazy(() => import("../pages/protected/Bills"));
const ProfileSettings = lazy(() =>
  import("../pages/protected/ProfileSettings")
);
const GettingStarted = lazy(() => import("../pages/GettingStarted"));
const DocFeatures = lazy(() => import("../pages/DocFeatures"));
const DocComponents = lazy(() => import("../pages/DocComponents"));

// double entry

const ChartOfAccount = lazy(() =>
  import("../pages/protected/super-admin/double-entry/ChartOfAccount")
);
const JournalAccount = lazy(() =>
  import("../pages/protected/super-admin/double-entry/JournalAccount")
);
const BalanceSheet = lazy(() =>
  import("../pages/protected/super-admin/double-entry/BalanceSheet")
);
const TrialBalance = lazy(() =>
  import("../pages/protected/super-admin/double-entry/TrialBalance")
);
const LedgerSummary = lazy(() =>
  import("../pages/protected/super-admin/double-entry/LedgerSummary")
);
const User = lazy(() => import("../pages/protected/User"));

// staff
const StaffUser = lazy(() =>
  import("../pages/protected/super-admin/staff/StaffUser")
);

const StaffRole = lazy(() =>
  import("../pages/protected/super-admin/staff/StaffRole")
);

const ProductService = lazy(() =>
  import("../pages/protected/super-admin/product-services/ProductService")
);

// Constant
const ConstantTaxes = lazy(() =>
  import("../pages/protected/super-admin/constant/taxes/ConstantTaxes")
);

const ConstantCategory = lazy(() => import("../pages/protected/super-admin/constant/category/ConstantCategory"));

const ConstantUnit = lazy(() => import("../pages/protected/super-admin/constant/unit/ConstantUnit"));

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/welcome", // the url
    component: Welcome, // view rendered
  },
  {
    path: "/leads",
    component: Leads,
  },
  {
    path: "/settings-team",
    component: Team,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
  {
    path: "/transactions",
    component: Transactions,
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
  },
  {
    path: "/settings-billing",
    component: Bills,
  },
  {
    path: "/getting-started",
    component: GettingStarted,
  },
  {
    path: "/features",
    component: DocFeatures,
  },
  {
    path: "/components",
    component: DocComponents,
  },
  {
    path: "/integration",
    component: Integration,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
  {
    path: "/staff/user",
    component: StaffUser,
  },

  {
    path: "/staff/role",
    component: StaffRole,
  },
  {
    path: "/product-services",
    component: ProductService,
  },
  {
    path: "/double-entry/chart",
    component: ChartOfAccount,
  },
  {
    path: "/double-entry/journal-account",
    component: JournalAccount,
  },
  {
    path: "/double-entry/balance-sheet",
    component: BalanceSheet,
  },
  {
    path: "/double-entry/trial-balance",
    component: TrialBalance,
  },
  {
    path: "/double-entry/ledger-summary",
    component: LedgerSummary,
  },

  // Constant
  {
    path: "/constant/taxes",
    component: ConstantTaxes,
  },
  
  {
    path: "/constant/category",
    component: ConstantCategory,
  },
  {
    path: "/constant/unit",
    component: ConstantUnit,
  },


  {
    path: "/user",
    component: User,
  },
];

export default routes;
