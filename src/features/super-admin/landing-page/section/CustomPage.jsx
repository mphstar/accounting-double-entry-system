import CustomTable from "@/components/TablePage/CustomTable";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

const CustomPage = () => {
  const data = [
    {
      no: 1,
      name: "About Us",
    },
    {
      no: 2,
      name: "Terms and Conditions",
    },
    {
      no: 3,
      name: "Privacy Policy",
    },
  ];

  const COLUMN = [
    {
      value: "No",
      className: "w-12",
    },
    {
      value: "Name",
      className: "w-full",
    },
    {
      value: "Action",
      className: "",
    },
  ];

  const ROW = [
    ...data.map((item, index) => [
      {
        value: item.no,
        className: "",
      },
      {
        value: item.name,
        className: "",
      },
      {
        value: (
          <div className="flex gap-2">
            <button
              onClick={() => ModalForm({ title: "Edit Menu Bar" })}
              className="btn btn-square bg-blue-500 hover:bg-blue-600 btn-sm text-white"
            >
              <FaRegEdit />
            </button>
            <button className="btn btn-square bg-red-500 hover:bg-red-600 btn-sm text-white">
              <MdOutlineDeleteOutline />
            </button>
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
        bodyType: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_MENU_BAR,
        extraObject: data,
      })
    );
  };

  return (
    <section id="custom-page">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center">
          <h1 className="font-semibold">Custom Page</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-6">
          <div className="form-control">
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Site Logo</span>
              <input
                type="file"
                name=""
                className="file-input file-input-bordered"
                id=""
              />
            </label>
            <img
              className="w-40 h-40 rounded-md mt-4 object-cover"
              src="https://picsum.photos/200/300"
              alt=""
            />
          </div>
          <div className="form-control w-full">
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Site Description</span>
              <input
                type="text"
                name=""
                className="input input-bordered"
                value={
                  "We build modern web tools to help you jump-start your daily business work."
                }
                id=""
              />
            </label>
          </div>
        </div>
        <div className="flex w-full justify-end mt-12">
          <button className="btn btn-success text-white">Save Changes</button>
        </div>
      </div>

      <div className="flex flex-col bg-base-100 p-5 rounded-md mt-4 drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <h1 className="font-semibold">Menu Bar</h1>
          <button
            onClick={() => ModalForm({ title: "Create Menu Bar" })}
            className="btn btn-sm btn-square btn-success text-white"
          >
            <GoPlus />
          </button>
        </div>
        <CustomTable
          column={COLUMN}
          rows={ROW}
          isComponent={true}
          withoutAction={true}
        />
      </div>
    </section>
  );
};

export default CustomPage;
