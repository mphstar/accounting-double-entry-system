import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

const PayoutRequest = () => {
  const dataPayoutRequestList = [
    {
      no: 1,
      companyName: "Rajodiya Infotech",
      requestedDate: "2024-05-20",
      requestedAmount: "$400.00",
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
      value: "Requested Date",
      className: "",
    },
    {
      value: "Requested Amount",
      className: "",
    },
    {
      value: "Action",
      className: "",
    },
  ];

  const RowPayoutRequestList = [
    ...dataPayoutRequestList.map((item, index) => [
      {
        value: item.no,
        className: "",
      },
      {
        value: item.companyName,
        className: "",
      },
      {
        value: item.requestedDate,
        className: "",
      },
      {
        value: item.requestedAmount,
        className: "",
      },
      {
        value: (
          <div className="flex gap-1">
            <button className="btn btn-square bg-green-500 hover:bg-green-600 btn-sm text-white">
              <FaCheck />
            </button>
            <button className="btn btn-square bg-red-500 hover:bg-red-600 btn-sm text-white">
              <IoClose />
            </button>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  return (
    <section id="payout-request">
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

export default PayoutRequest;
