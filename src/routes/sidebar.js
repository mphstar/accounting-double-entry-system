/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import { BsPeople } from "react-icons/bs";
import { TbBusinessplan, TbReportMoney } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {
  LuBox,
  LuGitPullRequestDraft,
  LuLocateFixed,
  LuShoppingCart,
} from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";
import { RiBankLine, RiTrophyLine } from "react-icons/ri";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  MdHistory,
  MdOutlineMailOutline,
  MdOutlinePageview,
  MdWebAsset,
} from "react-icons/md";
import {
  IoGiftOutline,
  IoSettingsOutline,
  IoShareOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { GoCrossReference, GoGoal } from "react-icons/go";
import { LiaCartPlusSolid } from "react-icons/lia";

const iconClasses = `h-5 w-5 overflow-hidden`;
const submenuIconClasses = `h-5 w-5`;

const routesCustomer = [
  {
    path: "/app/customer/dashboard",
    icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
    name: "Dashboard",
  },
  {
    path: "",
    icon: <RiBankLine className={`${iconClasses} inline`} />,
    name: "Presale",
    submenu: [
      {
        path: "/app/customer/presale/proposal",
        icon: "",
        name: "Proposal",
      },
      {
        path: "/app/customer/presale/retainers",
        icon: "",
        name: "Retainers",
      },
    ],
  },
  {
    path: "/app/customer/invoice",
    icon: <FaRegMoneyBillAlt className={`${iconClasses} inline`} />,
    name: "Invoice",
  },
  {
    path: "/app/customer/expense/payment",
    icon: <IoShareOutline className={`${iconClasses} inline`} />,
    name: "Payment",
  },
  {
    path: "/app/customer/report/transaction",
    icon: <MdHistory className={`${iconClasses} inline`} />,
    name: "Transaction",
  },
  {
    path: "/app/customer/contract",
    icon: <TbBusinessplan className={`${iconClasses} inline`} />,
    name: "Contract",
  },
];

const routesVendor = [
  {
    path: "/app/vendor/dashboard",
    icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
    name: "Dashboard",
  },
  {
    path: "/app/vendor/bill",
    icon: <FaRegMoneyBillAlt className={`${iconClasses} inline`} />,
    name: "Bill",
  },
  {
    path: "/app/vendor/payment",
    icon: <IoShareOutline className={`${iconClasses} inline`} />,
    name: "Payment",
  },
  {
    path: "/app/vendor/transaction",
    icon: <MdHistory className={`${iconClasses} inline`} />,
    name: "Transaction",
  },
];

const routesSuperAdmin = [
  {
    path: "/app/super-admin/dashboard",
    icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
    name: "Dashboard",
  },
  {
    path: "/app/super-admin/company",
    icon: <BsPeople className={`${iconClasses} inline`} />,
    name: "Company",
  },
  {
    path: "/app/super-admin/plan",
    icon: <RiTrophyLine className={`${iconClasses} inline`} />,
    name: "Plan",
  },
  {
    path: "/app/super-admin/plan-request",
    icon: <LuGitPullRequestDraft className={`${iconClasses} inline`} />,
    name: "Feature Request",
  },
  {
    path: "/app/super-admin/coupon",
    icon: <IoGiftOutline className={`${iconClasses} inline`} />,
    name: "Coupon",
  },
  {
    path: "/app/super-admin/order",
    icon: <LiaCartPlusSolid className={`${iconClasses} inline`} />,
    name: "Order",
  },
  {
    path: "/app/super-admin/email-template",
    icon: <MdOutlineMailOutline className={`${iconClasses} inline`} />,
    name: "Email Template",
  },
  {
    path: "/app/super-admin/landing-page",
    icon: <MdOutlinePageview className={`${iconClasses} inline`} />,
    name: "Landing Page",
  },
  {
    path: "/app/super-admin/refferal-program",
    icon: <GoCrossReference className={`${iconClasses} inline`} />,
    name: "Refferal Program",
  },

  {
    path: "/app/super-admin/system-setting",
    icon: <IoSettingsOutline className={`${iconClasses} inline`} />,
    name: "System Setting",
  },
];

const routesCompany = [
  {
    path: "/app/company/dashboard",
    icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
    name: "Dashboard",
  },
  {
    path: "",
    icon: <BsPeople className={`${iconClasses} inline`} />,
    name: "Staff",
    submenu: [
      {
        path: "/app/company/staff/user",
        icon: "",
        name: "User",
      },
      {
        path: "/app/company/staff/role",
        icon: "",
        name: "Role",
      },
    ],
  },
  {
    path: "/app/company/product-services",
    icon: <LuShoppingCart className={`${iconClasses} inline`} />,
    name: "Product & Services",
  },
  {
    path: "/app/company/product-stock",
    icon: <LuBox className={`${iconClasses} inline`} />,
    name: "Product Stock",
  },
  {
    path: "/app/company/customer",
    icon: <FiUserPlus className={`${iconClasses} inline`} />,
    name: "Customer",
  },
  {
    path: "/app/company/vendor",
    icon: <HiOutlineDocumentChartBar className={`${iconClasses} inline`} />,
    name: "Vendor",
  },
  {
    path: "",
    icon: <RiBankLine className={`${iconClasses} inline`} />,
    name: "Presale",
    submenu: [
      {
        path: "/app/company/presale/proposal",
        icon: "",
        name: "Proposal",
      },
      {
        path: "/app/company/presale/retainers",
        icon: "",
        name: "Retainers",
      },
    ],
  },

  {
    path: "",
    icon: <RiBankLine className={`${iconClasses} inline`} />,
    name: "Banking",
    submenu: [
      {
        path: "/app/company/banking/account",
        icon: "",
        name: "Account",
      },
      {
        path: "/app/company/banking/transfer",
        icon: "",
        name: "Transfer",
      },
    ],
  },

  {
    path: "",
    icon: <FaRegMoneyBillAlt className={`${iconClasses} inline`} />,
    name: "Income",
    submenu: [
      {
        path: "/app/company/income/invoice",
        icon: "",
        name: "Invoice",
      },
      {
        path: "/app/company/income/revenue",
        icon: "",
        name: "Revenue",
      },
      {
        path: "/app/company/income/credit-note",
        icon: "",
        name: "Credit Note",
      },
    ],
  },

  {
    path: "",
    icon: <IoShareOutline className={`${iconClasses} inline`} />,
    name: "Expense",
    submenu: [
      {
        path: "/app/company/expense/bill",
        icon: "",
        name: "Bill",
      },
      {
        path: "/app/company/expense/payment",
        icon: "",
        name: "Payment",
      },
      {
        path: "/app/company/expense/debit-note",
        icon: "",
        name: "Debit Note",
      },
    ],
  },

  // {
  //   path: '/app/company/user',
  //   icon: <HiOutlineUser className={iconClasses}/>,
  //   name: 'User',
  // },
  {
    path: "", //no url needed as this has submenu
    icon: <InboxArrowDownIcon className={`${iconClasses} inline`} />, // icon component
    name: "Double Entry", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/company/double-entry/chart", //url
        icon: "", // icon component
        name: "Chart of Accounts", // name that appear in Sidebar
      },
      {
        path: "/app/company/double-entry/journal-account",
        icon: "",
        name: "Journal Account",
      },
      {
        path: "/app/company/double-entry/ledger-summary", // url
        icon: "", // icon component
        name: "Ledger Summary", // name that appear in Sidebar
      },
      {
        path: "/app/company/double-entry/balance-sheet", // url
        icon: "", // icon component
        name: "Balance Sheet", // name that appear in Sidebar
      },
      {
        path: "/app/company/double-entry/trial-balance", // url
        icon: "", // icon component
        name: "Trial Balance", // name that appear in Sidebar
      },
    ],
  },

  {
    path: "/app/company/budget-planner",
    icon: <TbBusinessplan className={`${iconClasses} inline`} />,
    name: "Budget Planner",
  },
  {
    path: "/app/company/contract",
    icon: <TbBusinessplan className={`${iconClasses} inline`} />,
    name: "Contract",
  },
  {
    path: "/app/company/goal",
    icon: <GoGoal className={`${iconClasses} inline`} />,
    name: "Goal",
  },
  {
    path: "/app/company/assets",
    icon: <MdWebAsset className={`${iconClasses} inline`} />,
    name: "Assets",
  },
  {
    path: "/app/company/plan",
    icon: <IoTrophyOutline className={`${iconClasses} inline`} />,
    name: "Plan",
  },
  {
    path: "/app/company/order",
    icon: <LiaCartPlusSolid className={`${iconClasses} inline`} />,
    name: "Order",
  },
  {
    path: "/app/company/notification-template",
    icon: <IoMdNotificationsOutline className={`${iconClasses} inline`} />,
    name: "Notification Template",
  },

  {
    path: "",
    icon: <TbReportMoney className={`${iconClasses} inline`} />,
    name: "Report",
    submenu: [
      {
        path: "/app/company/report/transaction",
        icon: "",
        name: "Transaction",
      },
      {
        path: "/app/company/report/account-statement",
        icon: "",
        name: "Account Statement",
      },
      {
        path: "/app/company/report/income-summary",
        icon: "",
        name: "Income Summary",
      },
      {
        path: "/app/company/report/expense-summary",
        icon: "",
        name: "Expense Summary",
      },
      {
        path: "/app/company/report/income-vs-expense",
        icon: "",
        name: "Income VS Expense",
      },
      {
        path: "/app/company/report/tax-summary",
        icon: "",
        name: "Tax Summary",
      },
      {
        path: "/app/company/report/cashflow",
        icon: "",
        name: "Cash Flow",
      },
      {
        path: "/app/company/report/invoice-summary",
        icon: "",
        name: "Invoice Summary",
      },
      {
        path: "/app/company/report/bill-summary",
        icon: "",
        name: "Bill Summary",
      },
      {
        path: "/app/company/report/product-stock",
        icon: "",
        name: "Product Stock",
      },
    ],
  },

  {
    path: "",
    icon: <LuLocateFixed className={`${iconClasses} inline`} />,
    name: "Constant",
    submenu: [
      {
        path: "/app/company/constant/taxes",
        icon: "",
        name: "Taxes",
      },
      {
        path: "/app/company/constant/category",
        icon: "",
        name: "Category",
      },
      {
        path: "/app/company/constant/unit",
        icon: "",
        name: "Unit",
      },
      {
        path: "/app/company/constant/custom-field",
        icon: "",
        name: "Custom Field",
      },
      {
        path: "/app/company/constant/contract-type",
        icon: "",
        name: "Contact Type",
      },
    ],
  },

  {
    path: "/app/company/refferal-program",
    icon: <GoCrossReference className={`${iconClasses} inline`} />,
    name: "Refferal Program",
  },

  {
    path: "/app/company/system-setting",
    icon: <IoSettingsOutline className={`${iconClasses} inline`} />,
    name: "System Setting",
  },
];

export { routesCompany, routesSuperAdmin, routesCustomer, routesVendor };
