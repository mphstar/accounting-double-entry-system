import React from "react";
import CustomTable from "../../../components/TablePage/CustomTable";

const COLUMN = [
  { value: "Date", className: "" },
  { value: "Customer", className: "" },
  { value: "Amount Due", className: "" },
];

const DATA = [
  {
    date: "Jan 28, 2023",
    customer: "Ida F. Mullen",
    amount: "$100.00",
  },

  {
    date: "Jan 28, 2023",
    customer: "Ida F. Mullen",
    amount: "$100.00",
  },
  {
    date: "Jan 28, 2023",
    customer: "Ida F. Mullen",
    amount: "$200.00",
  },
  {
    date: "Jan 28, 2023",
    customer: "Ida F. Mullen",
    amount: "$300.00",
  },
];

const ROW = [
  ...DATA.map((item, i) => [
    {
      value: item.date,
      className: "",
    },

    {
      value: item.customer,
      className: "",
    },

    {
      value: item.amount,
      className: "",
    },
  ]),
];

const SectionLatestExpense = () => {
  return (
    <div className="flex h-full w-full overflow-y-auto">
      <CustomTable
        isComponent
        title={"Latest Expense"}
        column={COLUMN}
        rows={ROW}
      />
    </div>
  );
};

export default SectionLatestExpense;
