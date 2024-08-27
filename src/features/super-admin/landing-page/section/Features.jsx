import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Features = () => {
  const dataFeaturesList = [
    {
      no: 1,
      name: "Feature",
    },
    {
      no: 2,
      name: "Support",
    },
    {
      no: 3,
      name: "Integration",
    },
  ];

  const ColumnFeaturesList = [
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

  const RowFeaturesList = [
    ...dataFeaturesList.map((item, index) => [
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

  const dataFeaturesBlockList = [
    {
      no: 1,
      name: "AccountGo SaaS Accounting and Billing Tool",
    },
    {
      no: 2,
      name: "AccountGo SaaS Accounting and Billing Tool",
    },
    {
      no: 3,
      name: "AccountGo SaaS Accounting and Billing Tool",
    },
    {
      no: 4,
      name: "AccountGo SaaS Accounting and Billing Tool",
    },
  ];

  const ColumnFeaturesBlockList = [
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

  const RowFeaturesBlockList = [
    ...dataFeaturesBlockList.map((item, index) => [
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
    <section id="features">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center ">
          <h1 className="font-semibold">Feature</h1>
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
            <input
              type="text"
              className="input input-bordered"
              value={"Features"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Heading</span>
            <input
              type="text"
              className="input input-bordered"
              value={"All In One Place CRM System"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Description</span>
            <input
              type="text"
              className="input input-bordered"
              value={
                "Use these awesome forms to login or create new account in your project for free. Use these awesome forms to login or create new account in your project for free."
              }
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Buy Now Link</span>
            <input
              type="text"
              className="input input-bordered"
              value={
                "https://codecanyon.net/item/accountgo-saas-accounting-and-billing-tool/25733019"
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
          <h1 className="font-semibold">Features List</h1>
          <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button>
        </div>
        <CustomTable
          column={ColumnFeaturesList}
          rows={RowFeaturesList}
          isComponent={true}
          withoutAction={true}
        />
      </div>

      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow mt-6">
        <div className="flex gap-2 justify-between items-center ">
          <h1 className="font-semibold">Feature</h1>
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
              value={"AccountGo SaaS Accounting and Billing Tool"}
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
          <div className="form-control col-span-2 md:col-span-1">
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Logo</span>
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
        </div>
        <div className="flex w-full justify-end mt-12">
          <button className="btn btn-success text-white">Save Changes</button>
        </div>
      </div>

      <div className="flex flex-col bg-base-100 p-5 rounded-md mt-4 drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <h1 className="font-semibold">Features Block List</h1>
          <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button>
        </div>
        <CustomTable
          column={ColumnFeaturesBlockList}
          rows={RowFeaturesBlockList}
          isComponent={true}
          withoutAction={true}
        />
      </div>
    </section>
  );
};

export default Features;
