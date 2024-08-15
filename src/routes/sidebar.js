/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import { BsPeople } from "react-icons/bs";
import { TbBusinessplan, TbReportMoney } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuLocateFixed, LuShoppingCart } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";
import { RiBankLine } from "react-icons/ri";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdWebAsset } from "react-icons/md";
import {
  IoSettingsOutline,
  IoShareOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { GoCrossReference, GoGoal } from "react-icons/go";
import { LiaCartPlusSolid } from "react-icons/lia";

const iconClasses = `h-5 w-5 overflow-hidden`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
    name: "Dashboard",
  },
  {
    path: "",
    icon: <BsPeople className={`${iconClasses} inline`} />,
    name: "Staff",
    submenu: [
      {
        path: "/app/staff/user",
        icon: "",
        name: "User",
      },
      {
        path: "/app/staff/role",
        icon: "",
        name: "Role",
      },
    ],
  },
  {
    path: "/app/product-services",
    icon: <LuShoppingCart className={`${iconClasses} inline`} />,
    name: "Product & Services",
  },
  {
    path: "/app/customer",
    icon: <FiUserPlus className={`${iconClasses} inline`} />,
    name: "Customer",
  },
  {
    path: "/app/vendor",
    icon: <HiOutlineDocumentChartBar className={`${iconClasses} inline`} />,
    name: "Vendor",
  },
  {
    path: "",
    icon: <RiBankLine className={`${iconClasses} inline`} />,
    name: "Presale",
    submenu: [
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Proposal",
      },
      {
        path: "/app/staff/retainers",
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
        path: "/app/staff/proposal",
        icon: "",
        name: "Account",
      },
      {
        path: "/app/staff/retainers",
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
        path: "/app/staff/proposal",
        icon: "",
        name: "Invoice",
      },
      {
        path: "/app/staff/retainers",
        icon: "",
        name: "Revenue",
      },
      {
        path: "/app/staff/retainers",
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
        path: "/app/staff/proposal",
        icon: "",
        name: "Bill",
      },
      {
        path: "/app/staff/retainers",
        icon: "",
        name: "Payment",
      },
      {
        path: "/app/staff/retainers",
        icon: "",
        name: "Debit Note",
      },
    ],
  },

  // {
  //   path: '/app/user',
  //   icon: <HiOutlineUser className={iconClasses}/>,
  //   name: 'User',
  // },
  {
    path: "", //no url needed as this has submenu
    icon: <InboxArrowDownIcon className={`${iconClasses} inline`} />, // icon component
    name: "Double Entry", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/double-entry/chart", //url
        icon: "", // icon component
        name: "Chart of Accounts", // name that appear in Sidebar
      },
      {
        path: "/app/double-entry/journal-account",
        icon: "",
        name: "Journal Account",
      },
      {
        path: "/app/double-entry/ledger-summary", // url
        icon: "", // icon component
        name: "Ledger Summary", // name that appear in Sidebar
      },
      {
        path: "/app/double-entry/balance-sheet", // url
        icon: "", // icon component
        name: "Balance Sheet", // name that appear in Sidebar
      },
      {
        path: "/app/double-entry/trial-balance", // url
        icon: "", // icon component
        name: "Trial Balance", // name that appear in Sidebar
      },
    ],
  },

  {
    path: "/app/vendor",
    icon: <TbBusinessplan className={`${iconClasses} inline`} />,
    name: "Budget Planner",
  },
  {
    path: "/app/vendor",
    icon: <TbBusinessplan className={`${iconClasses} inline`} />,
    name: "Contract",
  },
  {
    path: "/app/vendor",
    icon: <GoGoal className={`${iconClasses} inline`} />,
    name: "Goal",
  },
  {
    path: "/app/vendor",
    icon: <MdWebAsset className={`${iconClasses} inline`} />,
    name: "Assets",
  },
  {
    path: "/app/vendor",
    icon: <IoTrophyOutline className={`${iconClasses} inline`} />,
    name: "Plan",
  },
  {
    path: "/app/vendor",
    icon: <LiaCartPlusSolid className={`${iconClasses} inline`} />,
    name: "Order",
  },
  {
    path: "/app/vendor",
    icon: <IoMdNotificationsOutline className={`${iconClasses} inline`} />,
    name: "Notification Template",
  },

  {
    path: "",
    icon: <TbReportMoney className={`${iconClasses} inline`} />,
    name: "Report",
    submenu: [
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Transaction",
      },
      {
        path: "/app/staff/retainers",
        icon: "",
        name: "Account Statement",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Income Summary",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Expense Summary",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Income VS Expense",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Tax Summary",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Cash Flow",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Invoice Summary",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Bill Summary",
      },
      {
        path: "/app/staff/proposal",
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
        path: "/app/constant/taxes",
        icon: "",
        name: "Taxes",
      },
      {
        path: "/app/constant/category",
        icon: "",
        name: "Category",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Unit",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Custom Field",
      },
      {
        path: "/app/staff/proposal",
        icon: "",
        name: "Contact Type",
      },
    ],
  },

  {
    path: "/app/vendor",
    icon: <GoCrossReference className={`${iconClasses} inline`} />,
    name: "Refferal Program",
  },

  {
    path: "/app/vendor",
    icon: <IoSettingsOutline className={`${iconClasses} inline`} />,
    name: "System Setting",
  },
];

export default routes;
