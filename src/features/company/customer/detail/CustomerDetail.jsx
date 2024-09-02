import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { TfiReload } from "react-icons/tfi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";

const CustomerDetail = () => {
  const proposals = [
    {
      proposalId: "#PRO00001",
      issueDate: "May 19, 2023",
      amount: 0.0,
      status: "Open",
      alreadyConverted: false,
      convertedTo: "-",
    },
    {
      proposalId: "#PRO00002",
      issueDate: "Jan 8, 2023",
      amount: 173.25,
      status: "Accepted",
      alreadyConverted: true,
      convertedTo: "Invoice",
    },
    {
      proposalId: "#PRO00003",
      issueDate: "Nov 9, 2022",
      amount: 0.0,
      status: "Draft",
      alreadyConverted: true,
      convertedTo: "Retainer",
    },
    {
      proposalId: "#PRO00004",
      issueDate: "Jun 15, 2012",
      amount: 0.0,
      status: "Declined",
      alreadyConverted: false,
      convertedTo: "-",
    },
    {
      proposalId: "#PRO00005",
      issueDate: "Nov 10, 2008",
      amount: 0.0,
      status: "Close",
      alreadyConverted: false,
      convertedTo: "-",
    },
  ];

  const ColumnProposal = [
    { value: "Proposal", className: "" },
    { value: "Issue Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Status", className: "" },
    { value: "Converted To", className: "" },
    { value: "Action", className: "" },
  ];

  const cekStatus = (status) => {
    if (status === "Open") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-green-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Accepted") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-blue-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Draft") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-yellow-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Declined") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-red-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Close") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-gray-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Paid") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-green-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-gray-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    }
  };

  const RowProposal = [
    ...proposals.map((item) => [
      {
        value: (
          <button className="btn btn-primary btn-outline">
            {item.proposalId}
          </button>
        ),
        className: "",
      },
      { value: item.issueDate, className: "" },
      { value: item.amount, className: "" },
      { value: cekStatus(item.status), className: "" },
      { value: item.convertedTo, className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            {item.alreadyConverted && (
              <>
                <div className="tooltip" data-tip="Convert Into Retainer">
                  <button
                    onClick={() => {}}
                    className="btn btn-square btn-sm bg-green-400 hover:bg-green-500 text-white"
                  >
                    <TfiReload />
                  </button>
                </div>
                <div className="tooltip" data-tip="Convert Into Invoice">
                  <button
                    onClick={() => {}}
                    className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white"
                  >
                    <TfiReload />
                  </button>
                </div>
              </>
            )}
            <div className="tooltip" data-tip="Duplicate">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-slate-600 hover:bg-slate-700 text-white"
              >
                <FaRegCopy />
              </button>
            </div>
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white"
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  const invoices = [
    {
      invoiceId: "#INVO00016",
      issueDate: "Sep 2, 2024",
      dueDate: "Sep 2, 2024",
      amountDue: "$0.00",
      status: "Draft",
    },
    {
      invoiceId: "#INVO00002",
      issueDate: "Apr 22, 2022",
      dueDate: "Nov 21, 2009",
      amountDue: "$0.00",
      status: "Paid",
    },
  ];

  const ColumnInvoice = [
    { value: "Invoice", className: "" },
    { value: "Issue Date", className: "" },
    { value: "Due Date", className: "" },
    { value: "Amount Due", className: "" },
    { value: "Status", className: "" },
    { value: "Action", className: "" },
  ];

  const RowInvoice = [
    ...invoices.map((item) => [
      {
        value: (
          <button className="btn btn-primary btn-outline">
            {item.invoiceId}
          </button>
        ),
        className: "",
      },
      { value: item.issueDate, className: "" },
      { value: item.dueDate, className: "" },
      { value: item.amountDue, className: "" },
      { value: cekStatus(item.status), className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Duplicate">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-slate-600 hover:bg-slate-700 text-white"
              >
                <FaRegCopy />
              </button>
            </div>
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white"
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Customer Detail"}
        breadcrumb={"Customer Detail"}
        actions={
          <div className="flex flex-row gap-2 flex-wrap">
            <button className="btn btn-success text-white btn-sm">
              Create Invoice
            </button>
            <button className="btn btn-success text-white btn-sm">
              Create Proposal
            </button>
            <button className="btn btn-success text-white btn-sm">
              Statement
            </button>
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white"
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <CardDetailCustomer
          title={"Customer Info"}
          name="Kaire"
          email="IsidroTJohnson@armyspy.com"
          no="8974568214"
          n="540"
        />
        <CardDetailCustomer
          title={"Billing Info"}
          name="Kaire"
          address="198 , Bombay Talkies Compd, Himanshurai Road, Malad (west)"
          city="Mumbai, Maharashtra, 400064"
          country="India"
          phone="02228896140"
        />
        <CardDetailCustomer
          title={"Shipping Info"}
          name="Kaire"
          address="198 , Bombay Talkies Compd, Himanshurai Road, Malad (west)"
          city="Mumbai, Maharashtra, 400064"
          country="India"
          phone="02228896140"
        />
      </div>

      <div className="h-6"></div>

      <div className="flex flex-col border rounded-md p-4 bg-white">
        <h1>Company Info</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 mt-4">
          <CompanyInfoItem title={"Customer ID"} value={"#CUST00001"} />
          <CompanyInfoItem title={"Date of Creation"} value={"Jul 8, 2020"} />
          <CompanyInfoItem title={"Balance"} value={"$4,220.52"} />
          <CompanyInfoItem title={"Overdue"} value={"$0.00"} />
          <CompanyInfoItem title={"Total Sum of Invoices"} value={"$231.00"} />
          <CompanyInfoItem title={"Quantity of Invoice"} value={"2"} />
          <CompanyInfoItem title={"Average Sales"} value={"$115.50"} />
        </div>
      </div>

      <div className="h-6"></div>

      <CustomTable
        title={"Proposal"}
        column={ColumnProposal}
        rows={RowProposal}
        withoutAction
      />
      <div className="h-6"></div>
      <CustomTable withoutAction title={"Invoice"} column={ColumnInvoice} rows={RowInvoice} />

      {/* <Paginate showData={RowProposal.length} totalData={RowProposal.length} /> */}
    </div>
  );
};

const CompanyInfoItem = ({ title, value }) => {
  return (
    <div className="flex flex-col text-sm">
      <h1>{title}</h1>
      <p className="font-medium">{value}</p>
    </div>
  );
};

const CardDetailCustomer = ({ title, ...value }) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-md border">
      <h1 className="font-semibold mb-2">{title}</h1>
      <div className="grid grid-cols-1">
        {Object.keys(value).map((key) => (
          <div className="flex flex-col">
            <p>{value[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetail;
