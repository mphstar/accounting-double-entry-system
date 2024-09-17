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

const Vendor = () => {
  const data = [
    {
      id: "#VEND0001",
      name: "Anthony B Renfroe",
      contact: "8974562145",
      email: "anthony@dayrep.com",
      balance: -113353.0,
      lastLoginAt: "-",
      loginIsEnable: false,
    },
    {
      id: "#VEND0002",
      name: "Kim Gibson",
      contact: "9685741234",
      email: "5a6oxm34en8@powerencry.com",
      balance: 32258.85,
      lastLoginAt: "-",
      loginIsEnable: false,
    },
    {
      id: "#VEND0003",
      name: "Adrienne J Reed",
      contact: "5896741253",
      email: "qf3783cllbh@groupbuff.com",
      balance: 4213.87,
      lastLoginAt: "-",
      loginIsEnable: true,
    },
    {
      id: "#VEND0004",
      name: "Eugene A Hughes",
      contact: "9856745896",
      email: "hemki07gr4u@fakemailgenerator.net",
      balance: -2060.0,
      lastLoginAt: "-",
      loginIsEnable: true,
    },
    {
      id: "#VEND0005",
      name: "Pearl W Poole",
      contact: "8574961234",
      email: "z1sh8i301e9@classesmail.com",
      balance: 0.0,
      lastLoginAt: "-",
      loginIsEnable: false,
    },
    {
      id: "#VEND0007",
      name: "Basia Mcclain",
      contact: "8562365894",
      email: "basiamcclain@gmail.com",
      balance: -303.95,
      lastLoginAt: "-",
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
            to={`/app/company/vendor/${btoa(item.id)}`}
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
                    ModalForgetPassword({ title: "Forget Password" });
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
                  ModalForm({ title: "Edit Vendor" });
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
        bodyType: MODAL_BODY_TYPES.FORM_IMPORT_VENDOR,
      })
    );
  };

  const ModalForm = ({ title }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_CREATE_VENDOR,
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
        title={"Manage Vendor"}
        breadcrumb={"Vendor"}
        actions={
          <div className="flex gap-2 items-center">
            <div className="tooltip tooltip-bottom" data-tip="Import">
              <button
                onClick={() => {
                  ModalImport({ title: "Import Vendor" });
                }}
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
                onClick={() => {
                  ModalForm({ title: "Add Vendor" });
                }}
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

export default Vendor;
