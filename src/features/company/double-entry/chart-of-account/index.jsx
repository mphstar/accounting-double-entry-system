import React from "react";
import HeadPage from "../../../../components/HeadPage/HeadPage";
import CustomTable from "../../../../components/TablePage/CustomTable";
import Paginate from "../../../../components/Paginate/Paginate";
import { ASSETSCOLUMN, ASSETSROW } from "./dummyData";
import FilterCard from "../../../../components/Cards/FilterCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import { TbTransactionEuro } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const ChartOfAccount = () => {
  const ASSETSCOLUMN = [
    { value: "Code", className: "" },
    { value: "Name", className: "" },
    { value: "Type", className: "" },
    { value: "Parent Account Name", className: "" },
    { value: "Balance", className: "" },
    { value: "Status", className: "" },
    { value: "Action", className: "" },
  ];

  const ASSETSROW = [
    [
      { title: "Code", value: "1060", className: "" },
      {
        title: "Name",
        value: (
          <a className="text-primary" href="#">
            Checking Account
          </a>
        ),
        className: "",
      },
      { title: "Type", value: "Current Asset", className: "" },
      { title: "Parent Account Name", value: "-", className: "" },
      { title: "Balance", value: "$90.00", className: "" },
      {
        title: "Status",
        value: (
          <span className="bg-green-400 text-white text-xs px-3 rounded-full py-1">
            Enabled
          </span>
        ),
        className: "",
      },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Transaction Summary">
              <Link to={"/app/company/double-entry/ledger-summary"}>
                <button className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white">
                  <TbTransactionEuro />
                </button>
              </Link>
            </div>
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => ModalForm({ title: "Edit Data" })}
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
      { title: "Code", value: "1061", className: "" },
      {
        title: "Name",
        value: (
          <a className="text-primary" href="#">
            Savings Account
          </a>
        ),
        className: "",
      },
      { title: "Type", value: "Current Asset", className: "" },
      { title: "Parent Account Name", value: "-", className: "" },
      { title: "Balance", value: "$500.00", className: "" },
      {
        title: "Status",
        value: (
          <span className="bg-green-400 text-white text-xs px-3 rounded-full py-1">
            Enabled
          </span>
        ),
        className: "",
      },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Transaction Summary">
              <Link to={"/app/company/double-entry/ledger-summary"}>
                <button className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white">
                  <TbTransactionEuro />
                </button>
              </Link>
            </div>
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => ModalForm({ title: "Edit Data" })}
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
      { title: "Code", value: "1062", className: "" },
      {
        title: "Name",
        value: (
          <a className="text-primary" href="#">
            Credit Card
          </a>
        ),
        className: "",
      },
      { title: "Type", value: "Liability", className: "" },
      { title: "Parent Account Name", value: "-", className: "" },
      { title: "Balance", value: "-$200.00", className: "" },
      {
        title: "Status",
        value: (
          <span className="bg-yellow-400 text-white text-xs px-3 rounded-full py-1">
            Active
          </span>
        ),
        className: "",
      },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Transaction Summary">
              <Link to={"/app/company/double-entry/ledger-summary"}>
                <button className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white">
                  <TbTransactionEuro />
                </button>
              </Link>
            </div>
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => ModalForm({ title: "Edit Data" })}
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

  const ModalForm = ({ title, data }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_CREATE_CHART_OF_ACCOUNT,
        extraObject: data,
      })
    );
  };

  return (
    <div className="flex flex-col">
      {/* head pages */}
      <HeadPage
        title={"Manage Chart of Account"}
        breadcrumb={"Chart of Account"}
        actions={
          <button
            onClick={() => ModalForm({ title: "Create Data" })}
            className="btn btn-square btn-primary btn-sm"
          >
            +
          </button>
        }
      />

      <FilterCard
        title={"Filter Date"}
        actions={
          <div className="flex flex-col w-full md:w-fit md:flex-row gap-3 items-end">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Start Date</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full input-sm"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">End Date</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full input-sm"
              />
            </label>
            <div className="flex gap-1">
              <button className="btn btn-primary btn-square btn-sm">
                <IoSearchOutline />
              </button>
              <button className="btn btn-error btn-square btn-sm">
                <GrPowerReset />
              </button>
            </div>
          </div>
        }
      />

      {/* table */}
      <div className="flex flex-col gap-6">
        <div>
          <CustomTable
            title={"Assets"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>

        <div>
          <CustomTable
            title={"Liabilities"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>

        <div>
          <CustomTable
            title={"Equity"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>

        <div>
          <CustomTable
            title={"Income"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>
        <div>
          <CustomTable
            title={"Costs of Goods Sold"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>
        <div>
          <CustomTable
            title={"Expenses"}
            column={ASSETSCOLUMN}
            rows={ASSETSROW}
          />
          <Paginate showData={ASSETSROW.length} totalData={ASSETSROW.length} />
        </div>
      </div>
    </div>
  );
};

export default ChartOfAccount;
