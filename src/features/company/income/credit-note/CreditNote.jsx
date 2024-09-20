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
import { useDispatch } from "react-redux";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";

const CreditNote = () => {
  const dataInvoice = [
    {
      invoice: "#INVO00001",
      customer: "Aurora Oneil",
      date: "Aug 17, 2022",
      amount: "$50.00",
      description:
        "It is a document that is issued by the seller to indicate a full or partial return of funds.",
    },
    {
      invoice: "#INVO00003",
      customer: "Karleigh Mitchell",
      date: "Aug 17, 2022",
      amount: "$50.01",
      description:
        "It is a document that is issued by the seller to indicate a full or partial return of funds.",
    },
  ];

  const ColumnCreditNote = [
    { value: "Invoice", className: "" },
    { value: "Customer", className: "" },
    { value: "Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Description", className: "" },
    { value: "Action", className: "" },
  ];

  const RowCreditNote = [
    ...dataInvoice.map((item) => [
      {
        value: (
          <Link to={`/app/company/income/invoice/${btoa(item.invoice)}`}>
            <button className="btn btn-primary btn-outline">
              {item.invoice}
            </button>
          </Link>
        ),
        className: "",
      },
      { value: item.customer, className: "" },
      { value: item.date, className: "" },
      { value: item.amount, className: "" },
      { value: item.description, className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {
                  ModalForm({ title: "Edit Credit Note", data: item });
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
        bodyType: MODAL_BODY_TYPES.FORM_CREATE_CREDIT_NOTE,
        extraObject: data,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Credit Note"}
        breadcrumb={"Credit Note"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Add Data">
              <button
                onClick={() => {
                  ModalForm({ title: "Create Credit Note" });
                }}
                className="btn btn-square btn-success text-white btn-sm"
              >
                +
              </button>
            </div>
          </div>
        }
      />

      <CustomTable column={ColumnCreditNote} rows={RowCreditNote} />

      <Paginate
        showData={RowCreditNote.length}
        totalData={RowCreditNote.length}
      />
    </div>
  );
};

export default CreditNote;
