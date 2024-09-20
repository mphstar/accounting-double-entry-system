import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { IoAddOutline, IoKeyOutline, IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport, BiShow } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineFileDownload } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";
import { FaRegCopy } from "react-icons/fa";
import FilterCard from "@/components/Cards/FilterCard";
import { TbFileExport } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";

const Payment = () => {
  const dataPayment = [
    {
      date: "Jul 8, 2020",
      amount: "$1,000.00",
      account: "COBIZ BANK Chisom Latifat",
      vendor: "Keire",
      category: "Insurance",
      reference: "self",
      description: "Ea amet voluptas ma",
      paymentReceipt: "-",
    },
    {
      date: "Jul 9, 2020",
      amount: "$2,000.00",
      account: "US BANK, NA Earl Hane MD",
      vendor: "Keire",
      category: "Inventory",
      reference: "Jasper Gardner",
      description: "Ut ipsum fugiat ull",
      paymentReceipt: "-",
    },
    {
      date: "Jul 10, 2020",
      amount: "$3,000.00",
      account: "- Cash",
      vendor: "Protiong",
      category: "Inventory",
      reference: "Teresa R McRae",
      description: "Amet quis dolorem s",
      paymentReceipt: "download", // assuming the download icon represents an available download
    },
    {
      date: "Jul 8, 2020",
      amount: "$560.00",
      account: "ROUNDBANK Benjamin Adams",
      vendor: "Ida F. Mullen",
      category: "Insurance",
      reference: "Keire",
      description: "Quis consequatur inv",
      paymentReceipt: "-",
    },
    {
      date: "Feb 9, 2022",
      amount: "$5,000.00",
      account: "ROUNDBANK Benjamin Adams",
      vendor: "Protiong",
      category: "Insurance",
      reference: "Teresa R McRae",
      description: "Et cillum omnis aliq",
      paymentReceipt: "download", // assuming the download icon represents an available download
    },
  ];

  const ColumnPayment = [
    { value: "Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Account", className: "" },
    { value: "Vendor", className: "" },
    { value: "Category", className: "" },
    { value: "Reference", className: "" },
    { value: "Description", className: "" },
    { value: "Payment Receipt", className: "" },
    { value: "Action", className: "" },
  ];

  const RowPayment = [
    ...dataPayment.map((item) => [
      { value: item.date, className: "" },
      { value: item.amount, className: "" },
      { value: item.account, className: "" },
      { value: item.vendor, className: "" },
      { value: item.category, className: "" },
      { value: item.reference, className: "" },
      { value: item.description, className: "" },
      {
        value:
          item.paymentReceipt === "download" ? (
            <MdOutlineFileDownload />
          ) : (
            item.paymentReceipt
          ),
        className: "",
      },

      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {
                  ModalForm({ title: "Edit Payment", data: item });
                }}
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white"
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  const dispatch = useDispatch();

  const ModalForm = ({ title, data }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_CREATE_PAYMENT,
        extraObject: data,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Payment"}
        breadcrumb={"Payment"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Export">
              <button
                onClick={() => {}}
                className="btn btn-square btn-warning btn-sm"
              >
                <TbFileExport />
              </button>
            </div>
            <div className="tooltip" data-tip="Add Data">
              <button
                onClick={() => {
                  ModalForm({
                    title: "Create Payment",
                  });
                }}
                className="btn btn-square btn-success text-white btn-sm"
              >
                +
              </button>
            </div>
          </div>
        }
      />

      <FilterCard
        noTitle
        actions={
          <div className="flex flex-row w-full gap-3 items-end flex-wrap xl:flex-nowrap">
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Start Date</span>
              <input
                type="date"
                className="input input-bordered"
                name=""
                id=""
              />
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">End Date</span>
              <input
                type="date"
                className="input input-bordered"
                name=""
                id=""
              />
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Account</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Account</option>
                <option value="">Cash</option>
                <option value="">Pearl Reed</option>
              </select>
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Vendor</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Vendor</option>
                <option value="">Kaire</option>
                <option value="">Protiong</option>
              </select>
            </label>
            <label className="form-control w-fit md:w-full">
              <span className="label-text">Category</span>
              <select className="select select-bordered" name="" id="">
                <option value="">Select Category</option>
                <option value="">Bussiness Profit</option>
                <option value="">Dividents</option>
              </select>
            </label>
            <div className="flex gap-1">
              <button className="btn btn-primary btn-square ">
                <IoSearchOutline />
              </button>
              <button className="btn btn-error btn-square ">
                <GrPowerReset />
              </button>
            </div>
          </div>
        }
      />

      <CustomTable column={ColumnPayment} rows={RowPayment} />

      <Paginate showData={RowPayment.length} totalData={RowPayment.length} />
    </div>
  );
};

export default Payment;
