import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import { useDispatch } from "react-redux";

const DebitNote = () => {
  const dataBill = [
    {
      bill: "#B1O00001",
      vendor: "Aurora Oneil",
      date: "Aug 17, 2022",
      amount: "$50.00",
      description:
        "It is a document that is issued by the seller to indicate a full or partial return of funds.",
    },
    {
      bill: "#B1O00003",
      vendor: "Karleigh Mitchell",
      date: "Aug 17, 2022",
      amount: "$50.01",
      description:
        "It is a document that is issued by the seller to indicate a full or partial return of funds.",
    },
  ];

  const ColumnDebitNote = [
    { value: "Invoice", className: "" },
    { value: "Vendor", className: "" },
    { value: "Date", className: "" },
    { value: "Amount", className: "" },
    { value: "Description", className: "" },
    { value: "Action", className: "" },
  ];

  const RowDebitNote = [
    ...dataBill.map((item) => [
      {
        value: (
          <Link to={`/app/company/expense/bill/${btoa(item.bill)}`}>
            <button className="btn btn-primary btn-outline">{item.bill}</button>
          </Link>
        ),
        className: "",
      },
      { value: item.vendor, className: "" },
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
                  ModalForm({ title: "Edit Debit Note", data: item });
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
        bodyType: MODAL_BODY_TYPES.FORM_CREATE_DEBIT_NOTE,
        extraObject: data,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Debit Note"}
        breadcrumb={"Debit Note"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip" data-tip="Add Data">
              <button
                onClick={() => {
                  ModalForm({ title: "Create New Debit Note" });
                }}
                className="btn btn-square btn-success text-white btn-sm"
              >
                +
              </button>
            </div>
          </div>
        }
      />

      <CustomTable column={ColumnDebitNote} rows={RowDebitNote} />

      <Paginate
        showData={RowDebitNote.length}
        totalData={RowDebitNote.length}
      />
    </div>
  );
};

export default DebitNote;
