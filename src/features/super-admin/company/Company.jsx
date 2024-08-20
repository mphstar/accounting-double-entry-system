import React from "react";
import { FiEdit, FiUsers } from "react-icons/fi";
import {
  MdDeleteOutline,
  MdLockReset,
  MdOutlineModeEdit,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../common/modalSlice";
import HeadPage from "../../../components/HeadPage/HeadPage";
import CustomTable from "../../../components/TablePage/CustomTable";
import Paginate from "../../../components/Paginate/Paginate";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiDeleteBin7Line } from "react-icons/ri";
import { VscKebabVertical } from "react-icons/vsc";
import { deleteCompany, handleForm, setIsEdit } from "./CompanySlice";

const Company = () => {
  // const DATA

  const dispatch = useDispatch();
  const data = useSelector((state) => state.companySuperAdmin.companies);

  const OpenFormModal = ({ title }) => {
    dispatch(setIsEdit(false));
    dispatch(
      openModal({
        bodyType: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_COMPANY,
        title: title,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Companies"}
        breadcrumb={"Companies"}
        actions={
          <button
            onClick={() => OpenFormModal({ title: "Create Company" })}
            className="btn btn-square btn-primary btn-sm"
          >
            +
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.map((item, index) => (
          <CardCompany key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

const CardCompany = ({ data }) => {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.companySuperAdmin);

  const OpenFormModal = ({ title }) => {
    dispatch(
      openModal({
        bodyType: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_COMPANY,
        title: title,
        extraObject: data,
      })
    );
  };

  return (
    <div className="flex flex-col p-3 rounded-md bg-base-100 items-center drop-shadow">
      <div className="flex flex-row items-center gap-2 w-full">
        <div className="flex-1">
          <span className="bg-green-500 text-xs text-white px-2 py-1 rounded-md">
            {data.plan}
          </span>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-square shadow-none bg-transparent"
          >
            <VscKebabVertical />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li
              onClick={() => {
                dispatch(setIsEdit(true));
                dispatch(handleForm(data));

                OpenFormModal({ title: "Edit Company" });
              }}
            >
              <div className="flex items-center gap-2">
                <MdOutlineModeEdit />
                Edit
              </div>
            </li>
            <li
              onClick={() => {
                dispatch(deleteCompany(data.id));
                console.log(data.id);
                
              }}
            >
              <div className="flex items-center gap-2">
                <RiDeleteBin7Line />
                Delete
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <MdLockReset />
                Reset Password
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <IoCloseCircleOutline />
                <span className="text-red-500">Login Disable</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img
        className="w-24 h-24 mt-4 mb-4 rounded-full object-cover"
        src={data.avatar}
        alt="Picture"
      />
      <h1>{data.name}</h1>
      <p className="text-xs text-primary">{data.email}</p>

      <div className="flex items-center gap-2 w-full mt-4 mb-6">
        <button className="btn w-full flex-1 btn-md btn-primary btn-outline">
          Upgrade Plan
        </button>
        <button className="btn w-full flex-1 btn-md btn-primary btn-outline">
          AdminHub
        </button>
      </div>
      <div className="w-full h-[2px] bg-base-300 mb-4"></div>
      <p className="text-gray-600 text-xs dark:text-gray-400">
        Plan Expired: {data.planExpired}
      </p>

      <div className="flex items-center gap-2 mt-3 w-full justify-evenly">
        <div data-tip="Users" className="flex gap-2 items-center tooltip">
          <FiUsers />
          <p>{data.totalUsers}</p>
        </div>
        <div data-tip="Customers" className="flex gap-2 items-center tooltip">
          <FiUsers />
          <p>{data.totalCustomers}</p>
        </div>
        <div data-tip="Vendors" className="flex gap-2 items-center tooltip">
          <FiUsers />
          <p>{data.totalVendors}</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
