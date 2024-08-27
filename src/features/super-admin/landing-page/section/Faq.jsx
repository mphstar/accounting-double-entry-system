import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Faq = () => {
  const dataFaqList = [
    {
      no: 1,
      name: `#What does "Theme/Package Installation" mean?`,
    },
    {
      no: 2,
      name: `#What does "Theme/Package Installation" mean?`,
    },
    {
      no: 3,
      name: `#What does "Lifetime updates" mean?`,
    },
    {
      no: 4,
      name: `#What does "Lifetime updates" mean?`,
    },
    {
      no: 5,
      name: `#What does "6 months of support" mean?`,
    },
    {
      no: 6,
      name: `#What does "6 months of support" mean?`,
    },
  ];

  const ColumnFaqList = [
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

  const RowFaqList = [
    ...dataFaqList.map((item, index) => [
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
            <button className="btn btn-square bg-blue-500 hover:bg-blue-600 btn-sm text-white">
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

  return (
    <section id="faq">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center ">
          <h1 className="font-semibold">Faq</h1>
          <input
            type="checkbox"
            name=""
            className="toggle toggle-primary"
            id=""
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-6">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Title</span>
            <input type="text" className="input input-bordered" value={"Faq"} />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Heading</span>
            <input
              type="text"
              className="input input-bordered"
              value={"AccountGo SaaS Accounting and Billing Tool"}
            />
          </label>
          <label className="form-control gap-2 col-span-2">
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
          <h1 className="font-semibold">Faq List</h1>
          <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button>
        </div>
        <CustomTable
          column={ColumnFaqList}
          rows={RowFaqList}
          isComponent={true}
          withoutAction={true}
        />
      </div>
    </section>
  );
};

export default Faq;
