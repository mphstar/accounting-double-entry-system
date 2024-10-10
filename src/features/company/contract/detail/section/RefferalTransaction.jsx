import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

const RefferalTransaction = () => {
  const data = [
    {
      id: 1,
      companyName: "Vanna Cooke",
      planName: "Platinum",
      planPrice: 5000.0,
      comissionPercent: 10,
      comissionAmount: 500,
    },
    {
      id: 2,
      companyName: "Vanna Cooke",
      planName: "Platinum",
      planPrice: 5000.0,
      comissionPercent: 10,
      comissionAmount: 500,
    },
    {
      id: 3,
      companyName: "Megan Booth",
      planName: "Platinum",
      planPrice: 5000.0,
      comissionPercent: 10,
      comissionAmount: 500,
    },
    {
      id: 4,
      companyName: "Megan Booth",
      planName: "Gold",
      planPrice: 4000.0,
      comissionPercent: 10,
      comissionAmount: 400,
    },
    {
      id: 5,
      companyName: "Brianna French",
      planName: "Gold",
      planPrice: 4000.0,
      comissionPercent: 10,
      comissionAmount: 400,
    },
  ];

  const ColumnPayoutRequestList = [
    {
      value: "No",
      className: "w-12",
    },
    {
      value: "Company Name",
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

  const RowPayoutRequestList = [
    ...data.map((item, index) => [
      {
        value: item.id,
        className: "",
      },
      {
        value: item.companyName,
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
        value: item.comissionPercent + "%",
        className: "",
      },

      {
        value: item.comissionAmount,
        className: "",
      },
    ]),
  ];

  return (
    <section id="refferal-transaction">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <h1 className="font-semibold">Payout Request</h1>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <CustomTable
          column={ColumnPayoutRequestList}
          rows={RowPayoutRequestList}
          isComponent={true}
          withoutAction={true}
        />
      </div>
    </section>
  );
};

export default RefferalTransaction;
