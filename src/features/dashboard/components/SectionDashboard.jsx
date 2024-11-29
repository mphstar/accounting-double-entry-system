import React from "react";
import { FaUser } from "react-icons/fa";

const DATA = [
  {
    icon: <FaUser className="w-3 h-3" />,
    title: "Customers",
    value: 11,
    bgColor: "bg-green-400",
    textColor: "text-green-400",
  },
  {
    icon: <FaUser className="w-3 h-3" />,
    title: "Vendors",
    value: 11,
    bgColor: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    icon: <FaUser className="w-3 h-3" />,
    title: "Invoice",
    value: 16,
    bgColor: "bg-orange-400",
    textColor: "text-orange-400",
  },
  {
    icon: <FaUser className="w-3 h-3" />,
    title: "Bills",
    value: 9,
    bgColor: "bg-pink-400",
    textColor: "text-pink-400",
  },
];

const SectionDashboard = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
      {DATA.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

const Card = ({ icon, title, value, bgColor, textColor }) => {
  return (
    <div className="w-full bg-base-100 p-6 drop-shadow flex rounded-md flex-col h-fit">
      <div className="flex flex-row gap-3 items-center">
        <div
          className={`${bgColor} p-2 text-white w-fit h-fit overflow-hidden aspect-square flex flex-col justify-center items-center rounded-lg`}
        >
          {icon}
        </div>
        <p className={`${textColor} font-medium`}>{title}</p>
      </div>
      {/* <span className="mt-2">Total</span> */}
      <span className={`font-semibold text-2xl mt-4 ${textColor}`}>{value}</span>
    </div>
  );
};

export default SectionDashboard;
