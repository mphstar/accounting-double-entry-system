import React from "react";
import CustomTable from "../../../components/TablePage/CustomTable";

const COLUMN = [
  { value: "Bank", className: "" },
  { value: "Holder Name", className: "" },
  { value: "Balance", className: "" },
];

const ROW = [
    [
      { title: "Bank", value: "Chase", className: "" },
      { title: "Holder Name", value: "Jane Smith", className: "" },
      { title: "Balance", value: "$500.00", className: "" },
    ],
    [
      { title: "Bank", value: "Wells Fargo", className: "" },
      { title: "Holder Name", value: "Michael Johnson", className: "" },
      { title: "Balance", value: "$1,200.00", className: "" },
    ],
    [
      { title: "Bank", value: "Citibank", className: "" },
      { title: "Holder Name", value: "Emily Davis", className: "" },
      { title: "Balance", value: "$3,750.00", className: "" },
    ],
    [
      { title: "Bank", value: "HSBC", className: "" },
      { title: "Holder Name", value: "William Brown", className: "" },
      { title: "Balance", value: "$250.00", className: "" },
    ],
    [
      { title: "Bank", value: "Barclays", className: "" },
      { title: "Holder Name", value: "Sophia Wilson", className: "" },
      { title: "Balance", value: "$4,600.00", className: "" },
    ],
  ];
  

const SectionAccountBalance = () => {
  return (
    <div className="flex h-full w-full">
      <CustomTable title={"Account Balance"} column={COLUMN} rows={ROW} />
    </div>
  );
};

export default SectionAccountBalance;
