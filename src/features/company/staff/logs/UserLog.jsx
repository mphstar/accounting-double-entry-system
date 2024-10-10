import React from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import CustomTable from "@/components/TablePage/CustomTable";
import Paginate from "@/components/Paginate/Paginate";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import { useDispatch } from "react-redux";
import FilterCard from "@/components/Cards/FilterCard";
import { IoSearchOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";

const UserLog = () => {
  const users = [
    {
      avatar: "https://demo.workdo.io/accountgo-saas/storage/user_3.jpg",
      name: "John",
      role: "User",
      ip: "00.00.00.000",
      lastLogin: "2023-04-25 14:13:45",
      country: "India",
      deviceType: "desktop",
      os: "Linux",
    },
    {
      avatar: "https://demo.workdo.io/accountgo-saas/storage/user_3.jpg",
      name: "John",
      role: "User",
      ip: "00.00.00.000",
      lastLogin: "2023-04-25 14:15:35",
      country: "India",
      deviceType: "desktop",
      os: "Linux",
    },
    {
      avatar: "https://demo.workdo.io/accountgo-saas/storage/user_6.jpg",
      name: "Keire",
      role: "Customer",
      ip: "00.00.00.000",
      lastLogin: "2023-04-25 16:06:27",
      country: "India",
      deviceType: "desktop",
      os: "Linux",
    },
    {
      avatar:
        "https://demo.workdo.io/accountgo-saas/storage/uploads/avatar/avatar.png",
      name: "Anthony B Renfroe",
      role: "Vendor",
      ip: "00.00.00.000",
      lastLogin: "2023-04-25 16:06:43",
      country: "India",
      deviceType: "desktop",
      os: "Linux",
    },
  ];

  const Column = [
    { value: "User", className: "" },
    { value: "Role", className: "" },
    { value: "IP", className: "" },
    { value: "Last Login", className: "" },
    { value: "Country", className: "" },
    { value: "Device Type", className: "" },
    { value: "OS", className: "" },
    { value: "Action", className: "" },
  ];

  const Row = [
    ...users.map((item) => [
      {
        value: (
          <div className="flex flex-row gap-2 items-center flex-nowrap whitespace-nowrap">
            <img src={item.avatar} alt="" className="w-8 h-8 rounded-full" />
            <p>{item.name}</p>
          </div>
        ),
        className: "",
      },
      {
        value: (
          <div className="badge badge-success text-white whitespace-nowrap">
            {item.role}
          </div>
        ),
        className: "",
      },
      { value: item.ip, className: "" },
      { value: item.lastLogin, className: "" },
      { value: item.country, className: "" },
      { value: item.deviceType, className: "" },
      { value: item.os, className: "" },
      {
        title: "Action",
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="View User Logs">
              <button
                onClick={() => {
                  ModalForm({ title: "View User Logs", data: item });
                }}
                className="btn btn-square btn-sm bg-orange-400 hover:bg-orange-500 text-white"
              >
                <MdOutlineRemoveRedEye />
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
        bodyType: MODAL_BODY_TYPES.FORM_DETAIL_LOG_USER,
        extraObject: data,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Users logs"}
        breadcrumb={"Users logs"}
        actions={<div className="flex gap-2 items-center"></div>}
      />

      <FilterCard
        title={"Filter Date"}
        actions={
          <div className="flex flex-col w-full md:w-fit md:flex-row gap-3 items-end">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Month</span>
              </div>
              <input
                type="month"
                placeholder="Type here"
                className="input input-bordered w-full input-sm"
                defaultValue={new Date().toISOString().slice(0, 7)}
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Users</span>
              </div>
              <select
                className="select select-bordered select-sm"
                name=""
                id=""
              >
                <option value="">All</option>
                <option value="">John</option>
                <option value="">Kaire</option>
                <option value="">Anthony B Renfroe</option>
              </select>
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

      <CustomTable column={Column} rows={Row} />

      <Paginate showData={Row.length} totalData={Row.length} />
    </div>
  );
};

export default UserLog;
