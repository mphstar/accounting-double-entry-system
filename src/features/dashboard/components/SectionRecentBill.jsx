import React from "react";
import CustomTable from "../../../components/TablePage/CustomTable";

const COLUMN = [
  { value: "#", className: "" },
  { value: "Vendor", className: "" },
  { value: "Issue Date", className: "" },
  { value: "Due Date", className: "" },
  { value: "Amount", className: "" },
  { value: "Status", className: "" },
];

const bills = [
  {
    id: "#BILL00011",
    vendor: "Anthony B Renfroe",
    billDate: "May 19, 2023",
    dueDate: "May 21, 2023",
    amount: "$0.00",
    status: "Sent",
  },
  {
    id: "#BILL00010",
    vendor: "Pearl W Poole",
    billDate: "May 21, 2023",
    dueDate: "Jul 22, 2023",
    amount: "$0.00",
    status: "Paid",
  },
  {
    id: "#BILL00007",
    vendor: "Adrienne J Reed",
    billDate: "Mar 14, 2022",
    dueDate: "Mar 14, 2022",
    amount: "$0.00",
    status: "Draft",
  },
  {
    id: "#BILL00006",
    vendor: "Pearl W Poole",
    billDate: "Mar 14, 2022",
    dueDate: "Mar 14, 2022",
    amount: "$0.00",
    status: "Sent",
  },
  {
    id: "#BILL00005",
    vendor: "Basia Mcclain",
    billDate: "Mar 14, 2022",
    dueDate: "Mar 14, 2022",
    amount: "$0.00",
    status: "Draft",
  },
];

const ROW = [
  ...bills.map((item, i) => [
    {
      value: item.id,
      className: "",
    },
    {
      value: item.vendor,
      className: "",
    },
    {
      value: item.billDate,
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
      value: (
        <div
          className={`${
            item.status === "Sent" ? "bg-orange-500" : "bg-gray-600"
          } w-fit px-3 py-2 rounded-md text-sm text-white`}
        >
          {item.status}
        </div>
      ),
      className: "",
    },
  ]),
];

const SectionRecentBill = () => {
  return (
    <div className="flex h-full w-full overflow-y-auto">
      <CustomTable
        withoutAction
        isComponent
        title={"Recent Bills"}
        column={COLUMN}
        rows={ROW}
      />
    </div>
  );
};

export default SectionRecentBill;
