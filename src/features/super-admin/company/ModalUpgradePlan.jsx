import React from "react";
import { IoCartOutline } from "react-icons/io5";

const ModalUpgradePlan = ({ extraObject, closeModal }) => {
  const plan = [
    {
      name: "Free",
      description: "Free Plan ($0.00000) / lifetime",
      users: 5,
      customers: 5,
      vendors: 5,
    },
    {
      name: "Platinum",
      description: "Platinum ($5000.00000) / year",
      users: 5,
      customers: 500,
      vendors: 500,
    },
    {
      name: "Gold",
      description: "Gold ($4000.00000) / year",
      users: 5,
      customers: 400,
      vendors: 400,
    },
    {
      name: "Silver",
      description: "Silver ($200.00000) / year",
      users: 5,
      customers: 200,
      vendors: 200,
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <table>
        {plan.map((item, index) => (
          <tr key={index}>
            <th className="text-start">{item.description}</th>
            <td>Users: {item.users}</td>
            <td>Customers: {item.customers}</td>
            <td>Vendors: {item.vendors}</td>
            <td>
              <button className="btn btn-circle btn-success text-white">
                <IoCartOutline />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ModalUpgradePlan;
