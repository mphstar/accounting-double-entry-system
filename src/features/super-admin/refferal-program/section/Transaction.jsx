import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Transaction = () => {
  const dataTransactionList = [
    {
      no: 1,
      companyName: "Rajodiya Infotech",
      refferalCompanyName: "Vanna Cooke",
      planName: "Platinum",
      planPrice: "$5000.00",
      commision: "10",
      commisionAmount: "$500",
    },
    {
      no: 2,
      companyName: "Rajodiya Infotech",
      refferalCompanyName: "Megan Booth",
      planName: "Gold",
      planPrice: "$4000.00",
      commision: "10",
      commisionAmount: "$400",
    },
    {
      no: 3,
      companyName: "Rajodiya Infotech",
      refferalCompanyName: "Brianna French",
      planName: "Platinum",
      planPrice: "$5000.00",
      commision: "10",
      commisionAmount: "$500",
    },
  ];

  const ColumnTransactionList = [
    {
      value: "No",
      className: "w-12",
    },
    {
      value: "Company Name",
      className: "",
    },
    {
      value: "Refferal Company Name",
      className: "",
    },
    {
      value: "Plan Name",
      className: "",
    },
    {
      value: "Plan Price",
      className: "",
    },
    {
      value: "Commision (%)",
      className: "",
    },
    {
      value: "Commision Amount",
      className: "",
    },
  ];

  const RowTransactionList = [
    ...dataTransactionList.map((item, index) => [
      {
        value: item.no,
        className: "",
      },
      {
        value: item.companyName,
        className: "",
      },
      {
        value: item.refferalCompanyName,
        className: "",
      },
      {
        value: item.planName,
        className: "",
      },
      {
        value: item.planPrice,
        className: "",
      },
      {
        value: item.commision,
        className: "",
      },
      {
        value: item.commisionAmount,
        className: "",
      },
    ]),
  ];

  return (
    <section id="transaction">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <h1 className="font-semibold">Transaction List</h1>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <CustomTable
          column={ColumnTransactionList}
          rows={RowTransactionList}
          isComponent={true}
          withoutAction={true}
        />
      </div>
    </section>
  );
};

export default Transaction;
