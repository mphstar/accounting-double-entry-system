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
import { TbFileExport, TbFileImport } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";

const Customer = () => {
  const data = [
    {
      id: "#CUST00001",
      name: "Keire",
      contact: 8974568214,
      email: "IsidroTJohnson@armyspy.com",
      balance: 4220.52,
      lastLogin: "2024-08-15 03:30:47",
      loginIsEnable: false,
    },
    {
      id: "#CUST00002",
      name: "Protiong",
      contact: 9947851264,
      email: "protiong@teleworm.us",
      balance: -407960.85,
      lastLogin: "-",
      loginIsEnable: true,
    },
    {
      id: "#CUST00003",
      name: "Ida F. Mullen",
      contact: 8874965125,
      email: "Idafmullen@armyspy.com",
      balance: -16560.64,
      lastLogin: "-",
      loginIsEnable: false,
    },
    {
      id: "#CUST00004",
      name: "Teresa R McRae",
      contact: 8874965124,
      email: "mcrae@teresa.cot",
      balance: -16103.95,
      lastLogin: "-",
      loginIsEnable: false,
    },
    {
      id: "#CUST00005",
      name: "Joel O Dolan",
      contact: 8874965122,
      email: "joel@dolan.com",
      balance: 0.0,
      lastLogin: "-",
      loginIsEnable: false,
    },
  ];

  const COLUMN = [
    { value: "ID", className: "" },
    { value: "Name", className: "" },
    { value: "Contact", className: "" },
    { value: "Email", className: "" },
    { value: "Balance", className: "" },
    { value: "Last Login", className: "" },
    { value: "Action", className: "" },
  ];

  const ROW = [
    ...data.map((item) => [
      {
        value: (
          <Link
            to={`/app/company/customer/${btoa(item.id)}`}
            className="btn btn-primary btn-outline"
          >
            {item.id}
          </Link>
        ),
        className: "",
      },
      { value: item.name, className: "" },
      { value: item.contact, className: "" },
      { value: item.email, className: "" },
      { value: item.balance, className: "" },
      { value: item.lastLogin, className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            {item.loginIsEnable && (
              <div className="tooltip" data-tip="Forget Password">
                <button
                  onClick={() => {
                    ModalForgetPassword({ title: "Forget Password" })
                  }}
                  className="btn btn-square btn-sm bg-green-400 hover:bg-green-500 text-white"
                >
                  <IoKeyOutline />
                </button>
              </div>
            )}
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {
                  ModalForm({ title: "Edit Customer" })
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

  const ModalImport = ({ title }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_IMPORT_CUSTOMER,
      })
    );
  };

  const ModalForm = ({ title }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_CREATE_CUSTOMER,
      })
    );
  };
  const ModalForgetPassword = ({ title }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.SUPERADMIN_FORM_RESET_PASSWORD_COMPANY,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Customer"}
        breadcrumb={"Customer"}
        actions={
          <div className="flex gap-2">
            <div className="tooltip tooltip-bottom" data-tip="Import">
              <button
                onClick={() => ModalImport({ title: "Import Customer CSV" })}
                className="btn btn-square btn-primary btn-sm"
              >
                <TbFileImport />
              </button>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Export">
              <button
                onClick={() => {}}
                className="btn btn-square btn-warning btn-sm"
              >
                <TbFileExport />
              </button>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Add Data">
              <button
                onClick={() =>
                  ModalForm({ title: "Create Customer" })
                }
                className="btn btn-square btn-success text-white btn-sm"
              >
                +
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

export default Customer;
