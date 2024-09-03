import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { TfiReload } from "react-icons/tfi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";

const VendorDetail = () => {
  const cekStatus = (status) => {
    if (status === "Sent") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-green-500 w-fit text-white rounded-md">
          {status}
        </div>
      );
    } else if (status === "Paid") {
      return (
        <div className="px-2 py-1 text-xs font-medium bg-blue-500 w-fit text-white rounded-md">
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

  const bill = [
    {
      bill: "#BILL0001",
      billDate: "May 19, 2023",
      dueDate: "May 21, 2023",
      amountDue: "$0.00",
      status: "Sent",
    },
    {
      bill: "#BILL0004",
      billDate: "Feb 18, 2022",
      dueDate: "Feb 18, 2022",
      amountDue: "$-100,000.00",
      status: "Paid",
    },
  ];

  const ColumnBill = [
    { value: "Bill", className: "" },
    { value: "Bill Date", className: "" },
    { value: "Due Date", className: "" },
    { value: "Amount Due", className: "" },
    { value: "Status", className: "" },
    { value: "Action", className: "" },
  ];

  const RowBill = [
    ...bill.map((item) => [
      {
        value: (
          <button className="btn btn-primary btn-outline">{item.bill}</button>
        ),
        className: "",
      },
      { value: item.billDate, className: "" },
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
        title={"Manage Vendor Detail"}
        breadcrumb={"Vendor Detail"}
        actions={
          <div className="flex flex-row gap-2 flex-wrap">
            <button className="btn btn-success text-white btn-sm">
              Create Bill
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
        withoutAction
        title={"Bill"}
        column={ColumnBill}
        rows={RowBill}
      />

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

export default VendorDetail;
