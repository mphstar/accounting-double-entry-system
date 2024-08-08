import { TbTransactionEuro } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDeleteOutline } from "react-icons/md";

const ASSETSCOLUMN = [
  { value: "Code", className: "" },
  { value: "Name", className: "" },
  { value: "Type", className: "" },
  { value: "Parent Account Name", className: "" },
  { value: "Balance", className: "" },
  { value: "Status", className: "" },
  { value: "Action", className: "" },
];

const ASSETSROW = [
  [
    { title: "Code", value: "1060", className: "" },
    {
      title: "Name",
      value: (
        <a className="text-primary" href="#">
          Checking Account
        </a>
      ),
      className: "",
    },
    { title: "Type", value: "Current Asset", className: "" },
    { title: "Parent Account Name", value: "-", className: "" },
    { title: "Balance", value: "$90.00", className: "" },
    {
      title: "Status",
      value: (
        <span className="bg-green-400 text-white text-xs px-3 rounded-full py-1">
          Enabled
        </span>
      ),
      className: "",
    },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Transaction Summary">
            <button className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white">
              <TbTransactionEuro />
            </button>
          </div>
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { title: "Code", value: "1061", className: "" },
    {
      title: "Name",
      value: (
        <a className="text-primary" href="#">
          Savings Account
        </a>
      ),
      className: "",
    },
    { title: "Type", value: "Current Asset", className: "" },
    { title: "Parent Account Name", value: "-", className: "" },
    { title: "Balance", value: "$500.00", className: "" },
    {
      title: "Status",
      value: (
        <span className="bg-green-400 text-white text-xs px-3 rounded-full py-1">
          Enabled
        </span>
      ),
      className: "",
    },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Transaction Summary">
            <button className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white">
              <TbTransactionEuro />
            </button>
          </div>
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
  [
    { title: "Code", value: "1062", className: "" },
    {
      title: "Name",
      value: (
        <a className="text-primary" href="#">
          Credit Card
        </a>
      ),
      className: "",
    },
    { title: "Type", value: "Liability", className: "" },
    { title: "Parent Account Name", value: "-", className: "" },
    { title: "Balance", value: "-$200.00", className: "" },
    {
      title: "Status",
      value: (
        <span className="bg-yellow-400 text-white text-xs px-3 rounded-full py-1">
          Active
        </span>
      ),
      className: "",
    },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Transaction Summary">
            <button className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white">
              <TbTransactionEuro />
            </button>
          </div>
          <div className="tooltip" data-tip="Edit">
            <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
              <FiEdit />
            </button>
          </div>
          <div className="tooltip" data-tip="Delete">
            <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ),
      className: "",
    },
  ],
];


export { ASSETSCOLUMN, ASSETSROW };
