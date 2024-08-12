import React from "react";
import { FaUser } from "react-icons/fa";

const DATA = [
  {
    icon: <FaUser className="w-3 h-3" />,
    title: "Income Today",
    value: "$80.50",
    bgColor: "bg-green-400",
    textColor: "text-green-400",
  },
  {
    icon: <FaUser className="w-3 h-3" />,
    title: "Expense Today",
    value: "$56.00",
    bgColor: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    icon: <FaUser className="w-3 h-3" />,
    title: "Income This Month",
    value: "$5145.00",
    bgColor: "bg-orange-400",
    textColor: "text-orange-400",
  },
  {
    icon: <FaUser className="w-3 h-3" />,
    title: "Expense This Month",
    value: "$3680.00",
    bgColor: "bg-pink-400",
    textColor: "text-pink-400",
  },
];

const SectionIncomeVsExpense = () => {
  return (
    <div className="flex flex-col bg-base-100 rounded-md h-full drop-shadow p-4">
      <h1 className="font-medium">Income VS Expense</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-7">
        {DATA.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ icon, title, value, bgColor, textColor }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div
        className={`${bgColor} p-2 text-white w-fit h-fit overflow-hidden aspect-square flex flex-col justify-center items-center rounded-2xl`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-400 line-clamp-1">{title}</span>
        <span className={`${textColor} font-semibold text-xl`}>{value}</span>
      </div>
    </div>
  );
};

export default SectionIncomeVsExpense;
