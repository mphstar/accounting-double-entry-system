import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import {
  IoAddOutline,
  IoKeyOutline,
  IoMailOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { BiExport, BiShow } from "react-icons/bi";
import {
  MdContentCopy,
  MdDeleteOutline,
  MdOutlineFileDownload,
} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";
import { FaPlus, FaRegCopy } from "react-icons/fa";
import FilterCard from "@/components/Cards/FilterCard";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import QRCode from "react-qr-code";
import { TbFileInvoice } from "react-icons/tb";

const BillDetail = () => {
  const paymentsData = [
    {
      PaymentReceipt: "-",
      Date: "Aug 17, 2022",
      Amount: "$100.00",
      PaymentType: "Manually",
      Account: "ROUNDBANK Benjamin Adams",
      Reference: "self",
      Description: "Payment by Retainer#RET00001",
    },
    {
      PaymentReceipt: "-",
      Date: "Aug 17, 2022",
      Amount: "$100.00",
      PaymentType: "PAYPAL",
      Account: "--",
      Reference: "--",
      Description: "Payment by Retainer#RET00001",
    },
    {
      PaymentReceipt: "-",
      Date: "Aug 17, 2022",
      Amount: "$100.00",
      PaymentType: "Mercado Pago",
      Account: "--",
      Reference: "--",
      Description: "Payment by Retainer#RET00001",
    },
    {
      PaymentReceipt: "-",
      Date: "Aug 17, 2022",
      Amount: "$500.00",
      PaymentType: "Manually",
      Account: "ROUNDBANK Benjamin Adams",
      Reference: "self",
      Description: "Invoice Payment",
    },
  ];

  const ColumnReceipt = [
    { value: "Payment Receipt", className: "" },
    { value: "Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Payment Type", className: "" },
    { value: "Account", className: "" },
    { value: "Reference", className: "" },
    { value: "Description", className: "" },
    { value: "Action", className: "" },
  ];

  const RowReceipt = [
    ...paymentsData.map((item) => [
      { value: item.PaymentReceipt, className: "" },
      { value: item.Date, className: "" },
      { value: item.Amount, className: "" },
      { value: item.PaymentType, className: "" },
      { value: item.Account, className: "" },
      { value: item.Reference, className: "" },
      { value: item.Description, className: "" },

      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
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

  const DebitNoteData = [
    {
      date: "Aug 17, 2022",
      amount: "$50.00",
      description:
        "It is a document that is issued by the seller to indicate a full or partial return of funds.",
    },
  ];

  const ColumnDebitNote = [
    { value: "Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Description", className: "" },
    { value: "Action", className: "" },
  ];

  const RowDebitNote = [
    ...DebitNoteData.map((item) => [
      { value: item.date, className: "" },
      { value: item.amount, className: "" },
      { value: item.description, className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            {/* edit */}

            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {}}
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

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Invoice"}
        breadcrumb={"Invoice"}
        actions={
          <div className="flex gap-2">
            <div className="tooltip tooltip-left" data-tip="Copy Invoice">
              <button className="btn btn-primary btn-sm btn-square">
                <MdContentCopy />
              </button>
            </div>
          </div>
        }
      />

      <Timeline />

      <div className="flex flex-row gap-3 flex-wrap mb-6 justify-end">
        <button className="btn btn-primary text-white btn-sm">
          Resend Bill
        </button>
        <button className="btn btn-primary text-white btn-sm">Download</button>
      </div>

      <InvoiceSummary />

      <CustomTable
        title={"Payment Summary"}
        withoutAction
        column={ColumnReceipt}
        rows={RowReceipt}
      />

      <div className="h-6"></div>

      <CustomTable
        title={"Debit Note Summary"}
        withoutAction
        column={ColumnDebitNote}
        rows={RowDebitNote}
      />
    </div>
  );
};

const InvoiceSummary = () => {
  return (
    <div className="flex flex-col bg-base-100 p-6 rounded-md mb-4 drop-shadow">
      <div className="flex">
        <h1 className="flex-1 font-semibold text-xl">Bill</h1>
        <p>#BILL00001</p>
      </div>
      <div className="flex justify-end flex-col text-sm mt-6">
        <div className="flex justify-end items-end flex-col">
          <h1 className="font-medium">Issue Date</h1>
          <p>Feb 18, 2019</p>
        </div>
        <div className="flex justify-end items-end flex-col">
          <h1 className="font-medium">Due Date</h1>
          <p>Feb 18, 2019</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 text-sm mt-6 flex-wrap">
        <div className="flex flex-col">
          <h1 className="font-medium">Billed To:</h1>
          <p>Scarlet Holman</p>
          <p>Totam magni libero c</p>
          <p>Minus quis quia culp, Quaerat provident h 94007</p>
          <p>Sit iusto voluptas a</p>
          <p>+1 (426) 605-6235</p>
          <p>Tax Number : 565</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium">Shipped To:</h1>
          <p>Scarlet Holman</p>
          <p>Totam magni libero c</p>
          <p>Minus quis quia culp, Quaerat provident h 94007</p>
          <p>Sit iusto voluptas a</p>
          <p>+1 (426) 605-6235</p>
          <p>Tax Number : 565</p>
        </div>
        <div className="flex-1  flex justify-end">
          <QRCode value="hello world" size={100} />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <h1 className="font-medium">Status :</h1>
        <div className="rounded-full bg-orange-500 text-white text-xs px-3 w-fit py-2">
          Partialy Paid
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <h1 className="font-medium">Product Summary</h1>
        <p>All items here cannot be deleted.</p>
      </div>

      <div className="flex mt-6 w-full overflow-x-auto text-base">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Discount</th>
              <th>Tax</th>
              <th>Description</th>
              <th>
                <div className="flex flex-col">
                  <h1>Price</h1>
                  <p className="text-red-500">after tax & discount</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <td>1</td>
              <td>Bicycle Clothing</td>
              <td>1 (Inch)</td>
              <td>$10,000.00</td>
              <td>$0.00</td>
              <td>SGST (5.5%) $550.00</td>
              <td>test demo</td>
              <td>$10,000.00</td>
            </tr>
            <tr className="hover">
              <td></td>
              <td className="font-medium">Total</td>
              <td className="font-medium">1</td>
              <td className="font-medium">$10,000.00</td>
              <td className="font-medium">$0.00</td>
              <td className="font-medium" colSpan={3}>
                $550.00
              </td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">Sub Total</td>
              <td>$10,000.00</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">Discount</td>
              <td>$0.00</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">SGST</td>
              <td>$550.00</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">Total</td>
              <td>$10,550.00</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">Paid</td>
              <td>$800.00</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">Credit Note</td>
              <td>$50.00</td>
            </tr>
            <tr className="hover">
              <td colSpan={6}></td>
              <td className="font-medium">Due</td>
              <td>$9,700.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

function TimelineItem({ icon, label, status, action }) {
  return (
    <li className="flex flex-col items-center h-fit justify-center w-full text-center">
      {icon}
      <div className="flex items-center mt-3">
        <p className="font-medium">{label}</p>
      </div>
      <p className="text-sm text-gray-500 mb-4">{status}</p>
      {action} 
    </li>
  );
}

function Timeline() {
  const data = [
    {
      icon: <FaPlus size={24} />,
      label: "Create Bill",
      status: "Created on Feb 18, 2019",
      action: (
        <button className="btn btn-success btn-sm text-white">
          <FiEdit /> Edit
        </button>
      ),
    },
    {
      icon: <IoMailOutline size={24} />,
      label: "Send Bill",
      status: "Sent on Aug 17, 2022",
    },
    {
      icon: <HiOutlineCurrencyDollar size={24} />,
      label: "Get Paid",
      status: "Status : Awaiting payment",
      action: (
        <button className="btn btn-primary btn-sm text-white">
          <HiOutlineCurrencyDollar /> Add Payment
        </button>
      ),
    },
  ];

  return (
    <ol className="flex flex-col md:flex-row bg-base-100 border-base-300 py-12 px-12 md:px-24 rounded-md mb-4 justify-center items-center border gap-3">
      {data.map((item, index) => (
        <>
          <TimelineItem key={index} {...item} />
          {/* // tambah garis */}
          {index !== data.length - 1 && (
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-[2px] md:w-full h-[50px] md:h-[2px] bg-base-300 rounded-full"></div>
            </div>
          )}
        </>
      ))}
    </ol>
  );
}

export default BillDetail;
