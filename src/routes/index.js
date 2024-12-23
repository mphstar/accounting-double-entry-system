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
  import("../pages/protected/company/double-entry/ChartOfAccount")
);
const JournalAccount = lazy(() =>
  import("../pages/protected/company/double-entry/JournalAccount")
);

const CreateJournal = lazy(() =>
  import("../pages/protected/company/double-entry/CreateJournalAccount")
);

const BalanceSheet = lazy(() =>
  import("../pages/protected/company/double-entry/BalanceSheet")
);
const TrialBalance = lazy(() =>
  import("../pages/protected/company/double-entry/TrialBalance")
);
const LedgerSummary = lazy(() =>
  import("../pages/protected/company/double-entry/LedgerSummary")
);
const User = lazy(() => import("../pages/protected/User"));

// staff
const StaffUser = lazy(() =>
  import("../pages/protected/company/staff/StaffUser")
);

const UserLog = lazy(() =>
  import("../pages/protected/company/staff/logs/UserLog")
);

const StaffRole = lazy(() =>
  import("../pages/protected/company/staff/StaffRole")
);

const ProductService = lazy(() =>
  import("../pages/protected/company/product-services/ProductService")
);

// Constant
const ConstantTaxes = lazy(() =>
  import("../pages/protected/company/constant/taxes/ConstantTaxes")
);

const ConstantCategory = lazy(() =>
  import("../pages/protected/company/constant/category/ConstantCategory")
);

const ConstantUnit = lazy(() =>
  import("../pages/protected/company/constant/unit/ConstantUnit")
);

const ConstantCustomField = lazy(() =>
  import("../pages/protected/company/constant/custom-field/ConstantCustomField")
);

const ConstantContract = lazy(() =>
  import("../pages/protected/company/constant/contract-type/ConstantContract")
);

// REPORT

// Transaction
const Transaction = lazy(() =>
  import("../pages/protected/company/report/transaction/Transaction")
);

const AccountStatement = lazy(() =>
  import("../pages/protected/company/report/account-statement/AccountStatement")
);

const ProductStock = lazy(() =>
  import("../pages/protected/company/report/product-stock/ProductStock")
);

const IncomeSummary = lazy(() =>
  import("../pages/protected/company/report/income-summary/IncomeSummary")
);
const ExpenseSummary = lazy(() =>
  import("../pages/protected/company/report/expense-summary/ExpenseSummary")
);

const TaxSummary = lazy(() =>
  import("../pages/protected/company/report/tax-summary/TaxSummary")
);

const IncomeVsExpense = lazy(() =>
  import("../pages/protected/company/report/income-vs-expense/IncomeVsExpense")
);

const Cashflow = lazy(() =>
  import("../pages/protected/company/report/cashflow/Cashflow")
);

const InvoiceSummary = lazy(() =>
  import("../pages/protected/company/report/invoice-summary/InvoiceSummary")
);

const BillSummary = lazy(() =>
  import("../pages/protected/company/report/bill-summary/BillSummary")
);

// END REPORT

const RefferalProgramCompany = lazy(() =>
  import("../pages/protected/company/referral-program/RefferalProgram")
);

// Banking

const Account = lazy(() =>
  import("../pages/protected/company/banking/account/Account")
);

const Transfer = lazy(() =>
  import("../pages/protected/company/banking/transfer/Transfer")
);

// END Banking

// Budget Planner
const BudgetPlanner = lazy(() =>
  import("../pages/protected/company/budget-planner/BudgetPlanner")
);

const CreateBudgetPlanner = lazy(() =>
  import("../pages/protected/company/budget-planner/CreateBudgetPlanner")
);

const DetailBudgetPlanner = lazy(() =>
  import("../pages/protected/company/budget-planner/DetailBudgetPlanner")
);

// Goal
const Goal = lazy(() => import("../pages/protected/company/goal/Goal"));

// Assets
const Assets = lazy(() => import("../pages/protected/company/assets/Assets"));

// Product Stock
const ProductStockCompany = lazy(() =>
  import("../pages/protected/company/product-stock/ProductStock")
);

// Customer
const Customer = lazy(() =>
  import("../pages/protected/company/customer/Customer")
);
const DetailCustomer = lazy(() =>
  import("../pages/protected/company/customer/detail/CustomerDetail")
);

// Presale
// Proposal
const Proposal = lazy(() =>
  import("../pages/protected/company/presale/proposal/Proposal")
);

const CreateProposal = lazy(() =>
  import("../pages/protected/company/presale/proposal/CreateProposal")
);

const DetailProposal = lazy(() =>
  import("../pages/protected/company/presale/proposal/detail/ProposalDetail")
);

// Retainer
const Retainers = lazy(() =>
  import("../pages/protected/company/presale/retainers/Retainers")
);

const CreateRetainer = lazy(() =>
  import("../pages/protected/company/presale/retainers/CreateRetainer")
);

const DetailRetainer = lazy(() =>
  import("../pages/protected/company/presale/retainers/detail/RetainerDetail")
);

// Expense
// Bill
const Bill = lazy(() => import("../pages/protected/company/expense/bill/Bill"));
const CreateBill = lazy(() =>
  import("../pages/protected/company/expense/bill/CreateBill")
);

const DetailBill = lazy(() =>
  import("../pages/protected/company/expense/bill/detail/BillDetail")
);

// Payment
const Payment = lazy(() =>
  import("../pages/protected/company/expense/payment/Payment")
);

// Debit Note
const DebitNote = lazy(() =>
  import("../pages/protected/company/expense/debit-note/DebitNote")
);

// Income
// Invoice
const Invoice = lazy(() =>
  import("../pages/protected/company/income/invoice/Invoice")
);
const CreateInvoice = lazy(() =>
  import("../pages/protected/company/income/invoice/CreateInvoice")
);
const DetailInvoice = lazy(() =>
  import("../pages/protected/company/income/invoice/detail/InvoiceDetail")
);

// Revenue
const Revenue = lazy(() =>
  import("../pages/protected/company/income/revenue/Revenue")
);

// Credit Note
const CreditNote = lazy(() =>
  import("../pages/protected/company/income/credit-note/CreditNote")
);

// Vendor
const Vendor = lazy(() => import("../pages/protected/company/vendor/Vendor"));
const DetailVendor = lazy(() =>
  import("../pages/protected/company/vendor/detail/VendorDetail")
);

// Plan
const PlanCompany = lazy(() => import("../pages/protected/company/plan/Plan"));

// Order Plan
const OrderPlan = lazy(() =>
  import("../pages/protected/company/plan/order/OrderPlan")
);

// Order
const OrderCompany = lazy(() =>
  import("../pages/protected/company/order/Order")
);

// Contract
const Contract = lazy(() =>
  import("../pages/protected/company/contract/Contract")
);
const DetailContract = lazy(() =>
  import("../pages/protected/company/contract/detail/DetailContract")
);

const PreviewContract = lazy(() =>
  import("../pages/protected/company/contract/preview/PreviewContract")
);

// Notification Template
const NotificationTemplate = lazy(() =>
  import(
    "../pages/protected/company/notification-template/NotificationTemplate"
  )
);

// System Setiing
const SystemSetting = lazy(() =>
  import("../pages/protected/company/system-setting/SystemSetting")
);

// Super Admin
// Dashboard
const DashboardSuperAdmin = lazy(() =>
  import("../pages/protected/super-admin//dashboard/Dashboard")
);

// Company
const Company = lazy(() =>
  import("../pages/protected/super-admin/company/Company")
);

// Plan
const Plan = lazy(() => import("../pages/protected/super-admin/plan/Plan"));

// Plan Request
const PlanRequest = lazy(() =>
  import("../pages/protected/super-admin/plan-request/PlanRequest")
);

// Coupon
const Coupon = lazy(() =>
  import("../pages/protected/super-admin/coupon/Coupon")
);

// Detail Coupon
const DetailCoupon = lazy(() =>
  import("../pages/protected/super-admin/coupon/detail/DetailCoupon")
);

// ORDER
const Order = lazy(() => import("../pages/protected/super-admin/Order/Order"));

// Email Template
const EmailTemplate = lazy(() =>
  import("../pages/protected/super-admin/email-template/EmailTemplate")
);

// Landing Page
const LandingPage = lazy(() =>
  import("../pages/protected/super-admin/landing-page/LandingPage")
);

// Refferal Program
const RefferalProgram = lazy(() =>
  import("../pages/protected/super-admin/refferal-program/RefferalProgram")
);

const SystemSettingSuperAdmin = lazy(() =>
  import("../pages/protected/super-admin/system-setting/SystemSetting")
);

// LEVEL VENDOR

// Bill
const BillVendor = lazy(() => import("../pages/protected/vendor/bill/Bill"));

const DetailBillVendor = lazy(() =>
  import("../pages/protected/vendor/bill/detail/BillDetail")
);

// Payment
const PaymentVendor = lazy(() =>
  import("../pages/protected/vendor/payment/Payment")
);

// Transaction
const TransactionVendor = lazy(() =>
  import("../pages/protected/vendor/transaction/Transaction")
);

// LEVEL CUSTOMER

const DashboardCustomer = lazy(() =>
  import("../pages/protected/customer/dashboard/DashboardCustomer")
);

const ProposalCustomer = lazy(() =>
  import("../pages/protected/customer/presale/proposal/Proposal")
);

const ProposalDetailCustomer = lazy(() =>
  import("../pages/protected/customer/presale/proposal/detail/ProposalDetail")
);

const RetainerCustomer = lazy(() =>
  import("../pages/protected/customer/presale/retainers/Retainers")
);

const DetailRetainerCustomer = lazy(() =>
  import("../pages/protected/customer/presale/retainers/detail/RetainerDetail")
);

const ContractCustomer = lazy(() =>
  import("../pages/protected/customer/contract/Contract")
);
const DetailContractCustomer = lazy(() =>
  import("../pages/protected/customer/contract/detail/DetailContract")
);

const InvoiceCustomer = lazy(() =>
  import("../pages/protected/customer/invoice/Invoice")
);
const CreateInvoiceCustomer = lazy(() =>
  import("../pages/protected/customer/invoice/CreateInvoice")
);
const DetailInvoiceCustomer = lazy(() =>
  import("../pages/protected/customer/invoice/detail/InvoiceDetail")
);

const routesCustomer = [
  {
    path: "/customer/contract",
    component: ContractCustomer,
  },
  {
    path: "/customer/contract/:id",
    component: DetailContractCustomer,
  },
  {
    path: "/customer/dashboard", // the url
    component: DashboardCustomer, //
  },
  {
    path: "/customer/presale/proposal",
    component: ProposalCustomer,
  },
  {
    path: "/customer/presale/proposal/:id",
    component: ProposalDetailCustomer,
  },
  {
    path: "/customer/presale/retainers",
    component: RetainerCustomer,
  },
  {
    path: "/customer/presale/retainers/:id",
    component: DetailRetainerCustomer,
  },
  {
    path: "/customer/invoice",
    component: InvoiceCustomer,
  },
  {
    path: "/customer/invoice/create",
    component: CreateInvoiceCustomer,
  },
  {
    path: "/customer/invoice/:id",
    component: DetailInvoiceCustomer,
  },
  {
    path: "/customer/payment",
    component: PaymentVendor,
  },
  {
    path: "/customer/transaction",
    component: TransactionVendor,
  },
];

const routesVendor = [
  {
    path: "/vendor/dashboard", // the url
    component: DashboardCustomer, //
  },
  {
    path: "/vendor/bill",
    component: BillVendor,
  },

  {
    path: "/vendor/bill/:id",
    component: DetailBillVendor,
  },
  {
    path: "/vendor/payment",
    component: PaymentVendor,
  },
  {
    path: "/vendor/transaction",
    component: TransactionVendor,
  },
];

const routesSuperAdmin = [
  {
    path: "/super-admin/dashboard", // the url
    component: DashboardSuperAdmin, // view rendered
  },
  {
    path: "/super-admin/company",
    component: Company,
  },
  {
    path: "/super-admin/plan",
    component: Plan,
  },
  {
    path: "/super-admin/plan-request",
    component: PlanRequest,
  },
  {
    path: "/super-admin/coupon",
    component: Coupon,
  },
  {
    path: "/super-admin/coupon/:id",
    component: DetailCoupon,
  },
  {
    path: "/super-admin/order",
    component: Order,
  },
  {
    path: "/super-admin/email-template",
    component: EmailTemplate,
  },
  {
    path: "/super-admin/landing-page",
    component: LandingPage,
  },
  {
    path: "/super-admin/refferal-program",
    component: RefferalProgram,
  },
  {
    path: "/super-admin/system-setting",
    component: SystemSettingSuperAdmin,
  },
];

const routesCompany = [
  {
    path: "/company/dashboard", // the url
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
    path: "/company/staff/user",
    component: StaffUser,
  },
  {
    path: "/company/staff/user/logs",
    component: UserLog,
  },

  {
    path: "/company/staff/role",
    component: StaffRole,
  },
  {
    path: "/company/product-services",
    component: ProductService,
  },
  {
    path: "/company/double-entry/chart",
    component: ChartOfAccount,
  },
  {
    path: "/company/double-entry/journal-account",
    component: JournalAccount,
  },
  {
    path: "/company/double-entry/journal-account/create",
    component: CreateJournal,
  },
  {
    path: "/company/double-entry/balance-sheet",
    component: BalanceSheet,
  },
  {
    path: "/company/double-entry/trial-balance",
    component: TrialBalance,
  },
  {
    path: "/company/double-entry/ledger-summary",
    component: LedgerSummary,
  },
  {
    path: "/company/customer",
    component: Customer,
  },
  {
    path: "/company/customer/:id",
    component: DetailCustomer,
  },
  {
    path: "/company/presale/proposal",
    component: Proposal,
  },
  {
    path: "/company/presale/proposal/create",
    component: CreateProposal,
  },
  {
    path: "/company/presale/proposal/:id",
    component: DetailProposal,
  },
  {
    path: "/company/presale/retainers/:id",
    component: DetailRetainer,
  },

  {
    path: "/company/presale/retainers",
    component: Retainers,
  },
  {
    path: "/company/presale/retainers/create",
    component: CreateRetainer,
  },

  {
    path: "/company/expense/bill",
    component: Bill,
  },

  {
    path: "/company/expense/bill/create",
    component: CreateBill,
  },

  {
    path: "/company/expense/bill/:id",
    component: DetailBill,
  },
  {
    path: "/company/expense/payment",
    component: Payment,
  },
  {
    path: "/company/expense/debit-note",
    component: DebitNote,
  },
  {
    path: "/company/income/invoice",
    component: Invoice,
  },
  {
    path: "/company/income/invoice/create",
    component: CreateInvoice,
  },
  {
    path: "/company/income/invoice/:id",
    component: DetailInvoice,
  },
  {
    path: "/company/income/revenue",
    component: Revenue,
  },
  {
    path: "/company/income/credit-note",
    component: CreditNote,
  },
  {
    path: "/company/vendor",
    component: Vendor,
  },
  {
    path: "/company/vendor/:id",
    component: DetailVendor,
  },
  {
    path: "/company/refferal-program",
    component: RefferalProgramCompany,
  },
  {
    path: "/company/plan",
    component: PlanCompany,
  },
  {
    path: "/company/plan/order",
    component: OrderPlan,
  },
  {
    path: "/company/order",
    component: OrderCompany,
  },
  {
    path: "/company/contract",
    component: Contract,
  },
  {
    path: "/company/contract/:id",
    component: DetailContract,
  },
  {
    path: "/company/contract/preview/:id",
    component: PreviewContract,
  },
  {
    path: "/company/notification-template",
    component: NotificationTemplate,
  },
  // Constant
  {
    path: "/company/constant/taxes",
    component: ConstantTaxes,
  },

  {
    path: "/company/constant/category",
    component: ConstantCategory,
  },
  {
    path: "/company/constant/unit",
    component: ConstantUnit,
  },
  {
    path: "/company/constant/custom-field",
    component: ConstantCustomField,
  },
  {
    path: "/company/constant/contract-type",
    component: ConstantContract,
  },
  // REPORT
  {
    path: "/company/report/transaction",
    component: Transaction,
  },
  {
    path: "/company/report/income-vs-expense",
    component: IncomeVsExpense,
  },
  {
    path: "/company/report/cashflow",
    component: Cashflow,
  },
  {
    path: "/company/report/invoice-summary",
    component: InvoiceSummary,
  },
  {
    path: "/company/report/bill-summary",
    component: BillSummary,
  },
  {
    path: "/company/report/account-statement",
    component: AccountStatement,
  },
  {
    path: "/company/report/product-stock",
    component: ProductStock,
  },
  {
    path: "/company/report/tax-summary",
    component: TaxSummary,
  },
  {
    path: "/company/report/income-summary",
    component: IncomeSummary,
  },
  {
    path: "/company/report/expense-summary",
    component: ExpenseSummary,
  },
  {
    path: "/company/banking/account",
    component: Account,
  },
  {
    path: "/company/banking/transfer",
    component: Transfer,
  },
  {
    path: "/company/budget-planner",
    component: BudgetPlanner,
  },
  {
    path: "/company/budget-planner/create",
    component: CreateBudgetPlanner,
  },
  {
    path: "/company/budget-planner/:id",
    component: DetailBudgetPlanner,
  },
  {
    path: "/company/goal",
    component: Goal,
  },
  {
    path: "/company/assets",
    component: Assets,
  },
  {
    path: "/company/product-stock",
    component: ProductStockCompany,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/company/system-setting",
    component: SystemSetting,
  },
];

export { routesCompany, routesSuperAdmin, routesVendor, routesCustomer };
