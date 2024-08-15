import React from "react";
import HeadPage from "../../../../components/HeadPage/HeadPage";
import CustomTable from "../../../../components/TablePage/CustomTable";
import Paginate from "../../../../components/Paginate/Paginate";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openModal } from "../../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../../utils/globalConstantUtil";

const ConstantCategory = () => {
  const COLUMN = [
    { value: "Category", className: "" },
    { value: "Type", className: "" },
    { value: "Account", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    [
      { title: "Category", value: "Medical", className: "" },
      { title: "Type", value: "Product & Service", className: "" },
      { title: "Account", value: "-", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Category",
                  })
                }
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
    ],
    [
      { title: "Category", value: "Clothing", className: "" },
      { title: "Type", value: "Product & Service", className: "" },
      { title: "Account", value: "-", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Category",
                  })
                }
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
    ],
    [
      { title: "Category", value: "Business profits", className: "" },
      { title: "Type", value: "Income", className: "" },
      { title: "Account", value: "Accrued Comp Time", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Category",
                  })
                }
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
    ],
    [
      { title: "Category", value: "Insurance", className: "" },
      { title: "Type", value: "Expense", className: "" },
      { title: "Account", value: "-", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Category",
                  })
                }
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
    ],
    [
      { title: "Category", value: "Inventory", className: "" },
      { title: "Type", value: "Asset", className: "" },
      { title: "Account", value: "-", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Category",
                  })
                }
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
    ],
    [
      { title: "Category", value: "Accounts payable", className: "" },
      { title: "Type", value: "Liability", className: "" },
      { title: "Account", value: "Sales Income", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Category",
                  })
                }
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
    ],
    [
      { title: "Category", value: "Treasury stock", className: "" },
      { title: "Type", value: "Equity", className: "" },
      { title: "Account", value: "-", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Category",
                  })
                }
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
    ],
    [
      { title: "Category", value: "Raw materials", className: "" },
      { title: "Type", value: "Costs of Goods Sold", className: "" },
      { title: "Account", value: "-", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Category",
                  })
                }
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
    ],
    [
      { title: "Category", value: "Dividends", className: "" },
      { title: "Type", value: "Income", className: "" },
      { title: "Account", value: "Salaries and Wages", className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() =>
                  OpenFormModal({
                    title: "Edit Category",
                  })
                }
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
    ],
  ];
  

  const dispatch = useDispatch();

  const OpenFormModal = ({ title }) => {
    dispatch(
      openModal({
        bodyType: MODAL_BODY_TYPES.FORM_CREATE_CONSTANT_CATEGORY,
        title: title,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Category"}
        breadcrumb={"Category"}
        actions={
          <button
            onClick={() => OpenFormModal({ title: "Create Category" })}
            className="btn btn-square btn-primary btn-sm"
          >
            +
          </button>
        }
      />

      <CustomTable column={COLUMN} rows={ROW} />

      <Paginate showData={ROW.length} totalData={ROW.length} />
    </div>
  );
};

export default ConstantCategory;
