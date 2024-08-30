import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Account = () => {
  const data = [
    {
      chartOfAccount: "-",
      name: "Cash",
      bank: "-",
      accountNumber: "-",
      currentBalance: "$111,201.65",
      contactNumber: "-",
      bankBranch: "-",
    },
    {
      chartOfAccount: "-",
      name: "Benjamin Adams",
      bank: "ROUND BANK",
      accountNumber: "GB97WDXE63527216276670",
      currentBalance: "$113,743.32",
      contactNumber: "8574961256",
      bankBranch: "Studio 90Murray LandLake NathanPE29 2HJ",
    },
    {
      chartOfAccount: "Petty Cash",
      name: "Chisom Latifat",
      bank: "COBIZ BANK",
      accountNumber: "7008275225419",
      currentBalance: "$1,022.00",
      contactNumber: "7878787878",
      bankBranch: "19 Ebubechukwu Street 95 365 OluwunmiVille",
    },
    {
      chartOfAccount: "-",
      name: "Earl Hane MD",
      bank: "US BANK, NA",
      accountNumber: "7763867719404",
      currentBalance: "$100,000.00",
      contactNumber: "7878787878",
      bankBranch: "517 Turner Lights Denver, CO 80221",
    },
    {
      chartOfAccount: "Petty Cash",
      name: "Deborah Hawkins",
      bank: "Charity BANK",
      accountNumber: "5035621420",
      currentBalance: "$1,000.00",
      contactNumber: "8532589645",
      bankBranch: "517 Turner Lights Denver, CO 80221",
    },
    {
      chartOfAccount: "-",
      name: "Pearl Reed",
      bank: "Caldwell BANK",
      accountNumber: "9807418700",
      currentBalance: "$5,000.00",
      contactNumber: "8532589645",
      bankBranch: "517 Turner Studio Murray Lights Denver, CO 80221",
    },
  ];

  const COLUMN = [
    { value: "Chart Of Account", className: "" },
    { value: "Name", className: "" },
    { value: "Bank", className: "" },
    { value: "Account Number", className: "" },
    { value: "Current Balance", className: "" },
    { value: "Contact Number", className: "" },
    { value: "Bank Branch", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    ...data.map((item) => [
      { title: "Chart Of Account", value: item.chartOfAccount, className: "" },
      { title: "Name", value: item.name, className: "" },
      { title: "Bank", value: item.bank, className: "" },
      { title: "Account Number", value: item.accountNumber, className: "" },
      { title: "Current Balance", value: item.currentBalance, className: "" },
      { title: "Contact Number", value: item.contactNumber, className: "" },
      { title: "Bank Branch", value: item.bankBranch, className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Bank Account"}
        breadcrumb={"Bank Account"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Add">
              <button
                onClick={() => {}}
                className="btn btn-square btn-success btn-sm"
              >
                <IoAddOutline />
              </button>
            </div>
          </div>
        }
      />

      <CustomTable column={COLUMN} rows={ROW} />

      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default Account;
