import React from "react";
import CustomTable from "../../../components/TablePage/CustomTable";

const COLUMN = [
  { value: "#", className: "" },
  { value: "Customer", className: "" },
  { value: "Issue Date", className: "" },
  { value: "Due Date", className: "" },
  { value: "Amount", className: "" },
  { value: "Status", className: "" },
];

const invoices = [
  {
    id: "#INVO00015",
    customer: "Customer",
    issueDate: "Mar 9, 2004",
    dueDate: "Jan 20, 1986",
    amount: "$404.25",
    status: "Sent",
  },
  {
    id: "#INVO00014",
    customer: "Joel O Dolan",
    issueDate: "Jan 20, 2020",
    dueDate: "Apr 13, 1975",
    amount: "$880.00",
    status: "Draft",
  },
  {
    id: "#INVO00013",
    customer: "Karleigh Mitchell",
    issueDate: "Nov 3, 1998",
    dueDate: "Feb 22, 2018",
    amount: "$693.94",
    status: "Draft",
  },
  {
    id: "#INVO00012",
    customer: "Ida F. Mullen",
    issueDate: "Mar 24, 1971",
    dueDate: "Apr 21, 2015",
    amount: "$211.00",
    status: "Sent",
  },
  {
    id: "#INVO00011",
    customer: "Joel O Dolan",
    issueDate: "Jun 10, 1977",
    dueDate: "Nov 18, 1977",
    amount: "$173.25",
    status: "Sent",
  },
];

const ROW = [
  ...invoices.map((item, i) => [
    {
      value: item.id,
      className: "",
    },
    {
      value: item.customer,
      className: "",
    },
    {
      value: item.issueDate,
      className: "",
    },
    {
      value: item.dueDate,
      className: "",
    },
    {
      value: item.amount,
      className: "",
    },
    {
      value: <div className={`${item.status === 'Sent' ? 'bg-orange-500' : 'bg-gray-600'} w-fit px-3 py-2 rounded-md text-sm text-white`}>{item.status}</div>,
      className: "",
    },
  ]),
];

const SectionRecentInvoice = () => {
  return (
    <div className="flex h-full w-full overflow-y-auto">
      <CustomTable
        withoutAction
        isComponent
        title={"Recent Invoices"}
        column={COLUMN}
        rows={ROW}
      />
    </div>
  );
};

export default SectionRecentInvoice;
