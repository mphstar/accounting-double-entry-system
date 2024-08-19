import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import CustomTable from "../../../components/TablePage/CustomTable";
import permissions from "./DataRole";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Paginate from "../../../components/Paginate/Paginate";
import { useDispatch } from "react-redux";
import { openModal } from "../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";

const StaffRole = () => {
  const dispatch = useDispatch();

  const openFormModal = ({ title }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: MODAL_BODY_TYPES.FORM_STAFF_ROLE,
      })
    );
  };

  const COLUMN = [
    {
      value: "Role",
      className: "",
    },
    {
      value: "Permissions",
      className: "",
    },
    {
      value: "Action",
      className: "",
    },
  ];

  const ROW = [
    [
      {
        title: "Role",
        value: "Accountan",
        className: "",
      },
      {
        title: "Permissions",
        value: (
          <div className="flex gap-2 items-center flex-wrap w-[500px]">
            {permissions.map((data, index) =>
              data.permissions.map((item, index) => (
                <span
                  key={index}
                  className="bg-primary px-2 py-1 text-white text-xs rounded-badge"
                >
                  {item} {data.module}
                </span>
              ))
            )}
          </div>
        ),
        className: "",
      },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => openFormModal({ title: "Edit Role" })}
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

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Roles"}
        breadcrumb={"Role"}
        actions={
          <button
            onClick={() => openFormModal({ title: "Create Role" })}
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

export default StaffRole;
