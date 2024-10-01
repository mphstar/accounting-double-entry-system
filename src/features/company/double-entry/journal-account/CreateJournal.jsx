import React, { useState } from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import Select from "react-select";
import { MdDeleteOutline } from "react-icons/md";

const CreateJournal = () => {
  // get params url

  const params = new URLSearchParams(window.location.search);
  // console.log(params.get("id"));

  const [customer, setCustomer] = useState(
    params.get("id") != null ? "Mphstar" : null
  );

  const [totalItem, setTotalItem] = useState(1);

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Journal Entry Create"}
        breadcrumb={"Journal Entry"}
        actions={<div></div>}
      />

      <div className="bg-base-100  drop-shadow-sm p-4 rounded-md grid grid-cols-12 gap-6">
        <div className="grid grid-cols-3 gap-3 col-span-12">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Journal Number</span>
            <input type="text" className="input input-bordered" />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Transaction Date</span>
            <input type="date" className="input input-bordered" />
          </label>

          <label className="form-control gap-2">
            <span className="label-text font-semibold">Reference</span>
            <input type="text" className="input input-bordered" />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Description</span>
            <textarea
              name=""
              className="textarea textarea-bordered"
              id=""
            ></textarea>
          </label>
        </div>
      </div>

      <div className="flex flex-col bg-base-100 p-4 drop-shadow rounded-md mt-6">
        <div className="flex gap-2 items-center mb-4">
          <h1 className="font-semibold w-full">Product & Service</h1>
          <button
            onClick={() => setTotalItem(totalItem + 1)}
            className="btn btn-success text-white btn-sm"
          >
            + Add Account
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table">
            <thead>
              <tr>
                <th className="">Account</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            {Array.from({ length: totalItem }).map((_, i) => (
              <CardTable
                handleDelete={() => setTotalItem(totalItem - 1)}
                hasDelete={i != 0}
                key={i}
              />
            ))}
            <tbody>
              <tr>
                <td className="text-end font-bold" colSpan={5}>
                  Total Credit ($)
                </td>
                <td className="text-end">0.00</td>
              </tr>
              <tr>
                <td className="text-end font-bold" colSpan={5}>
                  Total Debit ($)
                </td>
                <td className="text-end">0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-end w-full mt-8 gap-2">
        <button className="btn">Cancel</button>
        <button className="btn btn-success text-white">
          {params.get("id") == null ? "Create" : "Edit"}
        </button>
      </div>
    </div>
  );
};

const CardTable = ({ hasDelete = false, handleDelete = () => {} }) => {
  const [item, setItem] = useState({
    qty: "",
    price: "",
    tax: [],
  });

  const items = [
    {
      name: "Bycicle",
      qty: "Inch",
      description: "Giving information on its origins.",
      tax: ["CGST (10%)", "SGST (5.5%)"],
      price: "$200.0",
    },
    {
      name: "Helmet",
      qty: "Unit",
      description: "Protective gear for cycling.",
      tax: ["CGST (10%)"],
      price: "$200.0",
    },
    {
      name: "Lock",
      qty: "Unit",
      description: "Security device for bicycles.",
      tax: ["CGST (10%)"],
      price: "$200.0",
    },
    {
      name: "Gloves",
      qty: "Pair",
      description: "Cycling gloves for comfort and grip.",
      tax: ["CGST (10%)"],
      price: "$200.0",
    },
  ];

  const itemOption = [
    ...items.map((item) => ({
      value: item.name,
      label: item.name,
    })),
  ];

  return (
    <tbody>
      <tr>
        <td className="">
          <div className="w-[200px]">
            <select name="" className="select select-bordered w-full" id="">
              <option value="1060 - Checking Account">
                1060 - Checking Account
              </option>
              <option value="1065 - Preaty Cash">1065 - Preaty Cash</option>
            </select>
          </div>
        </td>
        <td>
          <div className="join items-center w-[130px] input input-bordered">
            <input
              className=" join-item w-full"
              placeholder="Debit"
              type="text"
              name=""
              id=""
            />
            {/* <p className="px-2 font-bold text-xs">{item.qty}</p> */}
          </div>
        </td>
        <td>
          <div className="join items-center w-[130px] input input-bordered">
            <input
              className=" join-item w-full"
              placeholder="Credit"
              type="text"
              name=""
              id=""
            />
            {/* <p className="px-2 font-bold text-xs">{item.qty}</p> */}
          </div>
        </td>
        <td>
          <div className="join items-center w-[130px] input input-bordered">
            <input
              className=" join-item w-full"
              placeholder="Description"
              type="text"
              name=""
              id=""
            />
            {/* <p className="px-2 font-bold text-xs">{item.qty}</p> */}
          </div>
        </td>

        <td className="text-end">0.00 </td>
        <td>
          {hasDelete && (
            <button
              onClick={() => handleDelete()}
              className="btn btn-sm btn-error text-white"
            >
              <MdDeleteOutline />
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default CreateJournal;
