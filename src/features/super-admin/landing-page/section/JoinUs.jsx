import CustomTable from "@/components/TablePage/CustomTable";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

const JoinUs = () => {
  const dataJoinUsList = [
    {
      no: 1,
      name: "mphstar@gmail.com",
    },
  ];

  const ColumnJoinUsList = [
    {
      value: "No",
      className: "w-12",
    },
    {
      value: "Email",
      className: "w-full",
    },
    {
      value: "Action",
      className: "",
    },
  ];

  const RowJoinUsList = [
    ...dataJoinUsList.map((item, index) => [
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
              onClick={() => {
                ModalForm({
                  title: "Edit Join Us List",
                  data: item,
                  modal: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_JOIN_US_LIST,
                });
              }}
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

  const ModalForm = ({ title, data, modal }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: modal,
        extraObject: data,
      })
    );
  };

  return (
    <section id="joinus">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center ">
          <h1 className="font-semibold">Join Us</h1>
          <input
            type="checkbox"
            name=""
            className="toggle toggle-primary"
            id=""
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-6">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Heading</span>
            <input
              type="text"
              className="input input-bordered"
              value={"From our Clients"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Description</span>
            <input
              type="text"
              className="input input-bordered"
              value={
                "Use these awesome forms to login or create new account in your project for free."
              }
            />
          </label>
        </div>
        <div className="flex w-full justify-end mt-12">
          <button className="btn btn-success text-white">Save Changes</button>
        </div>
      </div>

      <div className="flex flex-col bg-base-100 p-5 rounded-md mt-4 drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <h1 className="font-semibold">JoinUs List</h1>
          <button
            onClick={() => {
              ModalForm({
                title: "Add Join US List",
                data: {},
                modal: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_JOIN_US_LIST,
              });
            }}
            className="btn btn-sm btn-square btn-success text-white"
          >
            <GoPlus />
          </button>
        </div>
        <CustomTable
          column={ColumnJoinUsList}
          rows={RowJoinUsList}
          isComponent={true}
          withoutAction={true}
        />
      </div>
    </section>
  );
};

export default JoinUs;
