import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

const PaymentSettings = () => {
  return (
    <section id="payment">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Payment Settings</h1>
            <p className="text-xs">These details will be used to collect invoice payments. Each invoice will have a payment button based on the below configuration.</p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">


        </div>
      </div>
    </section>
  );
};

export default PaymentSettings;
