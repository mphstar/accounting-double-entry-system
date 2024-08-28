import React from "react";
import { BsCart3, BsTrophy } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const DATA = [
  {
    icon: <FaUser className="w-8 h-8 p-2" />,
    title: "Total Users",
    value: 11,
    bgColor: "bg-green-400",
    textColor: "text-green-400",
    desc: "Paid Users",
    descValue: 7,
  },
  {
    icon: <BsCart3 className="w-8 h-8 p-2" />,
    title: "Total Orders",
    value: 31,
    bgColor: "bg-blue-400",
    textColor: "text-blue-400",
    desc: "Total Order Amount",
    descValue: "$598,303.00",
  },
  {
    icon: <BsTrophy className="w-8 h-8 p-2" />,
    title: "Total Plans",
    value: 16,
    bgColor: "bg-orange-400",
    textColor: "text-orange-400",
    desc: "Most Purchase Plan",
    descValue: 3,
  },
];

const SectionDashboard = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
      {DATA.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

const Card = ({ icon, title, value, bgColor, textColor, desc, descValue }) => {
  return (
    <div className="w-full bg-base-100 p-6 drop-shadow flex rounded-md flex-col h-fit">
      <div
        className={`${bgColor} p-2 text-white w-fit h-fit overflow-hidden aspect-square flex flex-col justify-center items-center rounded-lg`}
      >
        {icon}
      </div>
      <div className="mt-6 text-xs">
        <span>{desc}</span>
        <span> : </span>
        <span className={`font-semibold ${textColor}`}>{descValue}</span>
      </div>
      <p className={`${textColor} font-medium mt-2`}>{title}</p>
      <span className={`font-semibold text-2xl ${textColor}`}>{value}</span>
    </div>
  );
};

export default SectionDashboard;
