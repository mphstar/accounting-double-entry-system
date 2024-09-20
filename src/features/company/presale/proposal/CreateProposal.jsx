import React, { useState } from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import Select from "react-select";
import { MdDeleteOutline } from "react-icons/md";

const CreateProposal = () => {
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
        title={"Create Proposal"}
        breadcrumb={"Proposal"}
        actions={<div></div>}
      />

      <div className="bg-base-100  drop-shadow-sm p-4 rounded-md grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          {!customer ? (
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Customer</span>
              <select
                onChange={(e) => setCustomer(e.target.value)}
                className="select select-bordered"
                name=""
                id=""
              >
                <option value="">Select Customer</option>
                <option value="Mphstar">Mphstar</option>
                <option value="Kaire">Kaire</option>
              </select>
            </label>
          ) : (
            <div className="flex flex-row gap-3 text-sm">
              <div className="flex flex-col">
                <h1 className="font-medium">Bill To:</h1>
                <p>{customer}</p>
                <p>Totam magni libero c</p>
                <p>Minus quis quia culp, Quaerat provident h 94007</p>
                <p>Sit iusto voluptas a</p>
                <p>+1 (426) 605-6235</p>
                <p>Tax Number : 565</p>
              </div>
              <div className="flex flex-col">
                <h1 className="font-medium">Ship To:</h1>
                <p>{customer}</p>
                <p>Totam magni libero c</p>
                <p>Minus quis quia culp, Quaerat provident h 94007</p>
                <p>Sit iusto voluptas a</p>
                <p>+1 (426) 605-6235</p>
                <p>Tax Number : 565</p>
              </div>
              <button
                onClick={() => {
                  setCustomer(null);
                }}
                className="text-gray-600 h-fit"
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 col-span-12 md:col-span-6">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Issue Date</span>
            <input type="date" className="input input-bordered" />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Category</span>
            <select className="select select-bordered" name="" id="">
              <option value="">Select Category</option>
              <option value="">Business Profit</option>
              <option value="">Dividents</option>
            </select>
          </label>

          <label className="form-control gap-2">
            <span className="label-text font-semibold">Proposal Number</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"#PROP00014"}
            />
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
            + Add Item
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table">
            <thead>
              <tr>
                <th className="">Items</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Tax (%)</th>
                <th>
                  <div className="flex flex-col justify-end">
                    <h1 className=" text-end">Amount</h1>
                    <p className="text-red-500 text-xs text-end">
                      before tax & discount
                    </p>
                  </div>
                </th>
                <th></th>
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
                  Sub Total ($)
                </td>
                <td className="text-end">152.00</td>
              </tr>
              <tr>
                <td className="text-end font-bold" colSpan={5}>
                  Discount ($)
                </td>
                <td className="text-end">0</td>
              </tr>
              <tr>
                <td className="text-end font-bold" colSpan={5}>
                  Tax ($)
                </td>
                <td className="text-end">23.25</td>
              </tr>
              <tr>
                <td className="text-end font-bold" colSpan={5}>
                  Total Amount ($)
                </td>
                <td className="text-end">173.25</td>
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
            <Select
              onChange={(e) => {
                const filterData = items.filter((item) => {
                  return item.name === e.value;
                });

                setItem(...filterData);
              }}
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              options={itemOption}
            />
          </div>
        </td>
        <td>
          <div className="join items-center w-[130px] input input-bordered">
            <input
              className=" join-item w-full"
              placeholder="qty"
              type="text"
              name=""
              id=""
            />
            <p className="px-2 font-bold text-xs">{item.qty}</p>
          </div>
        </td>
        <td>
          <div className="join items-center w-[130px] input input-bordered">
            <input
              className=" join-item w-full"
              placeholder="price"
              type="text"
              value={item.price}
              name=""
              id=""
              onChange={(e) => {}}
            />
            <p className="px-2 font-bold">$</p>
          </div>
        </td>
        <td>
          <div className="join items-center w-[130px] input input-bordered">
            <input
              className=" join-item w-full"
              placeholder="discount"
              type="text"
              name=""
              id=""
            />
            <p className="px-2 font-bold">$</p>
          </div>
        </td>
        <td>
          <div className="flex flex-wrap gap-2">
            {item.tax.map((item) => (
              <div className="text-xs bg-green-500 p-2 text-white rounded flex-nowrap whitespace-nowrap">
                {item}
              </div>
            ))}
          </div>
        </td>
        <td className="text-end">{item.price}</td>
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
      <tr>
        <td colSpan={2}>
          <textarea
            placeholder="description"
            name=""
            className="textarea textarea-bordered h-24 w-full"
            id=""
            onChange={(e) => {}}
            value={item.description}
          ></textarea>
        </td>
      </tr>
    </tbody>
  );
};

export default CreateProposal;
