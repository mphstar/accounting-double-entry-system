import CustomTable from "@/components/TablePage/CustomTable";
import React, { useState } from "react";
import { LuDollarSign } from "react-icons/lu";
import { TbArrowForwardUp } from "react-icons/tb";
const Payout = () => {
  const data = [
    {
      id: 1,
      companyName: "Vanna Cooke",
      requestedDate: 5000.0,
      status: "Rejected",
      requestedAmount: 500,
    },
    {
      id: 2,
      companyName: "Vanna Cooke",
      requestedDate: 5000.0,
      status: "In Progress",
      requestedAmount: 500,
    },
    {
      id: 3,
      companyName: "Megan Booth",
      requestedDate: 5000.0,
      status: "In Progress",
      requestedAmount: 500,
    },
    {
      id: 4,
      companyName: "Megan Booth",
      requestedDate: 4000.0,
      status: "Rejected",
      requestedAmount: 400,
    },
    {
      id: 5,
      companyName: "Brianna French",
      requestedDate: 4000.0,
      status: "Rejected",
      requestedAmount: 400,
    },
  ];

  const column = [
    {
      value: "No",
    },
    {
      value: "Company Name",
    },
    {
      value: "Requested Date",
    },
    {
      value: "Status",
    },
    {
      value: "Requested Amount",
    },
  ];

  const cekStatus = (status) => {
    if (status == "Rejected") {
      return (
        <div className="bg-red-500 px-2 py-1 text-white text-center w-fit rounded-full">
          {status}
        </div>
      );
    }
    if (status == "In Progress") {
      return (
        <div className="bg-orange-500 px-2 py-1 text-white text-center w-fit rounded-full">
          {status}
        </div>
      );
    }

    return (
      <div className="bg-slate-500 px-2 py-1 text-white text-center w-fit rounded-full">
        {status}
      </div>
    );
  };

  const row = [
    ...data.map((item, index) => [
      {
        value: item.id,
      },
      {
        value: item.companyName,
      },
      {
        value: item.requestedDate,
      },
      {
        value: cekStatus(item.status),
      },
      {
        value: item.requestedAmount,
      },
    ]),
  ];

  return (
    <section id="payout">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow mb-4">
        <div className="flex gap-2 justify-between items-center ">
          <h1 className="font-semibold">Payout</h1>
          <div className="tooltip" data-tip="Send Request">
            <button className="btn btn-success text-white btn-square btn-sm">
              <TbArrowForwardUp />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          <div className="flex gap-2 items-center border-2 border-base-300 p-3">
            <div className="p-2 bg-primary text-white rounded-md h-fit">
              <LuDollarSign />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="text-sm text-gray-500">Total</h1>
              <p className="font-medium">Commission Amount</p>
            </div>
            <p className="font-medium">$1400</p>
          </div>
          <div className="flex gap-2 items-center border-2 border-base-300 p-3">
            <div className="p-2 bg-primary text-white rounded-md h-fit">
              <LuDollarSign />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="text-sm text-gray-500">Paid</h1>
              <p className="font-medium">Commission Amount</p>
            </div>
            <p className="font-medium">$0</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center ">
          <h1 className="font-semibold">Payout History</h1>
        </div>
        <CustomTable withoutAction column={column} rows={row} />
      </div>
    </section>
  );
};

export default Payout;
