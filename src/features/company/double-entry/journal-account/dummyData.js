import { TbTransactionEuro } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const JOURNALCOLUMN = [
  { value: "Journal ID", className: "" },
  { value: "Date", className: "" },
  { value: "Amount", className: "" },
  { value: "Description", className: "" },
  { value: "Action", className: "" },
];

const JOURNALROW = [
  [
    { title: "Code", value: "#JUR0001", className: "" },
    { title: "Date", value: "Jan 21, 2021", className: "" },
    { title: "Amount", value: "$200.00", className: "" },
    {
      title: "Description",
      value:
        "What this means is that for every recorded transaction, two accounts are affected - and as a result, there is always a debit entry and a credit entry.",
      className: "",
    },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <Link to={"/app/company/double-entry/journal-account/create"}>
              <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </Link>
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
    { title: "Code", value: "#JUR0002", className: "" },
    { title: "Date", value: "Feb 15, 2021", className: "" },
    { title: "Amount", value: "-$150.00", className: "" },
    {
      title: "Description",
      value: "Payment for utilities",
      className: "",
    },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <Link to={"/app/company/double-entry/journal-account/create"}>
              <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </Link>
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
    { title: "Code", value: "#JUR0003", className: "" },
    { title: "Date", value: "Mar 10, 2021", className: "" },
    { title: "Amount", value: "$300.00", className: "" },
    {
      title: "Description",
      value: "Salary",
      className: "",
    },
    {
      title: "Action",
      value: (
        <div className="flex items-center gap-1">
          <div className="tooltip" data-tip="Edit">
            <Link to={"/app/company/double-entry/journal-account/create"}>
              <button className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white">
                <FiEdit />
              </button>
            </Link>
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

export { JOURNALCOLUMN, JOURNALROW };
