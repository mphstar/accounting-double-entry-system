import React, { useMemo, useState } from "react";
import HeadPage from "@/components/HeadPage/HeadPage";
import Select from "react-select";
import { MdDeleteOutline } from "react-icons/md";

const CreateInvoice = () => {
  // get params url

  const params = new URLSearchParams(window.location.search);
  // console.log(params.get("id"));

  const [customer, setCustomer] = useState(
    params.get("id") != null ? "Mphstar" : null
  );

  const [totalItem, setTotalItem] = useState(1);

  const [items, setItems] = useState([
    {
      name: "Bycicle",
      quantity: 0,
      qty: "",
      discount: {
        code: "",
        amount: 0,
        type: "",
      },
      description: "",
      tax: [],
      price: 0,
    },
  ]);

  const result = useMemo(() => {
    let subTotal = items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    let discount = 0;

    let tax = 0;
    items.forEach((item) => {
      if (item.discount.type === "percentage") {
        discount += (item.discount.amount / 100) * item.price;
      } else {
        discount += parseInt(item.discount.amount) || 0;
      }
      item.tax.forEach((taxItem) => {
        tax += (taxItem.value / 100) * item.price;
      });
    });

    let total = subTotal - discount + tax;

    // format number
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    subTotal = formatter.format(subTotal);
    discount = formatter.format(discount);
    tax = formatter.format(tax);
    total = formatter.format(total);

    return {
      subTotal,
      discount,
      tax,
      total,
    };
  }, [items]);

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Create Invoice"}
        breadcrumb={"Invoice"}
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
            <span className="label-text font-semibold">Due Date</span>
            <input type="date" className="input input-bordered" />
          </label>

          <label className="form-control gap-2">
            <span className="label-text font-semibold">Invoice Number</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"#INVO00011"}
            />
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
            <span className="label-text font-semibold">Ref Number</span>
            <input type="text" className="input input-bordered" />
          </label>
        </div>
      </div>

      <div className="flex flex-col bg-base-100 p-4 drop-shadow rounded-md mt-6">
        <div className="flex gap-2 items-center mb-4">
          <h1 className="font-semibold w-full">Product & Service</h1>
          <button
            onClick={() => {
              setItems([
                ...items,
                {
                  name: "Bycicle",
                  quantity: 0,
                  qty: "",
                  discount: {
                    code: "",
                    amount: 0,
                    type: "",
                  },
                  description: "",
                  tax: [],
                  price: 0,
                },
              ]);
            }}
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
                <th>Coupon</th>
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
            {items.map((item, i) => (
              <CardTable
                handleDelete={() =>
                  setItems(items.filter((_, index) => i !== index))
                }
                hasDelete={i != 0}
                key={i}
                index={i}
                data={items}
                setItems={setItems}
              />
            ))}
            <tbody>
              <tr>
                <td className="text-end font-bold" colSpan={5}>
                  Sub Total ($)
                </td>
                <td className="text-end">{result.subTotal.toString()}</td>
              </tr>
              <tr>
                <td className="text-end font-bold" colSpan={5}>
                  Discount ($)
                </td>
                <td className="text-end">{result.discount.toString()}</td>
              </tr>
              <tr>
                <td className="text-end font-bold" colSpan={5}>
                  Tax ($)
                </td>
                <td className="text-end">{result.tax.toString()}</td>
              </tr>
              <tr>
                <td className="text-end font-bold" colSpan={5}>
                  Total Amount ($)
                </td>
                <td className="text-end">{result.total.toString()}</td>
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

const CardTable = ({
  hasDelete = false,
  handleDelete = () => {},
  data = [],
  index,
  setItems = () => {},
}) => {
  const item = data[index];

  const items = [
    {
      name: "Bycicle",
      quantity: 1,
      qty: "Inch",
      description: "Giving information on its origins.",

      tax: [
        {
          name: "CGST (10%)",
          value: 10,
        },
        {
          name: "SGST (10%)",
          value: 10,
        },
      ],
      price: 200,
    },
    {
      name: "Helmet",
      quantity: 1,
      qty: "Unit",
      description: "Protective gear for cycling.",

      tax: [
        {
          name: "CGST (10%)",
          value: 10,
        },
      ],
      price: 150,
    },
    {
      name: "Lock",
      quantity: 1,
      qty: "Unit",
      description: "Security device for bicycles.",

      tax: [
        {
          name: "CGST (10%)",
          value: 10,
        },
      ],
      price: 200,
    },
    {
      name: "Gloves",
      quantity: 1,
      qty: "Pair",
      description: "Cycling gloves for comfort and grip.",

      tax: [
        {
          name: "CGST (10%)",
          value: 10,
        },
      ],
      price: 180,
    },
  ];

  const itemOption = [
    ...items.map((item) => ({
      value: item.name,
      label: item.name,
    })),
  ];

  const coupon = [
    {
      code: "A8BJL4SPYG",
      amount: 100,
      type: "nominal",
    },
    {
      code: "A1BJL4SPYG",
      amount: 50,
      type: "percentage",
    },
  ];

  return (
    <tbody>
      <tr>
        <td className="">
          <div className="w-[200px]">
            <Select
              onChange={(e) => {
                const filtered = items.find((item) => item.name === e.value);

                setItems(
                  data.map((item, i) => {
                    if (i === index) {
                      return {
                        ...item,
                        ...filtered,
                      };
                    }

                    return item;
                  })
                );
              }}
              className="my-react-select-container"
              // value={{ value: item.name, label: item.name }}
              placeholder="Select Item"
              classNamePrefix="my-react-select"
              options={itemOption}
            />
          </div>
        </td>
        <td>
          <div className="join items-center w-[130px] input input-bordered">
            <input
              className=" join-item w-full"
              placeholder="quantity"
              type="number"
              onChange={(e) => {
                setItems(
                  data.map((item, i) => {
                    if (i === index) {
                      return {
                        ...item,
                        quantity: e.target.value,
                      };
                    }

                    return item;
                  })
                );
              }}
              value={item.quantity}
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
              type="number"
              value={item.price}
              name=""
              id=""
              onChange={(e) => {
                setItems(
                  data.map((item, i) => {
                    if (i === index) {
                      return {
                        ...item,
                        price: e.target.value,
                      };
                    }

                    return item;
                  })
                );
              }}
            />
            <p className="px-2 font-bold">$</p>
          </div>
        </td>
        <td>
          <div className="flex flex-col">
            <input
              className="input input-bordered w-full"
              placeholder="discount"
              type="text"
              name="discount"
              value={item.discount.code ?? ""}
              onChange={(e) => {
                // cek coupon
                const cc = coupon.find((item) => item.code === e.target.value);

                if (cc) {
                  // cek type coupon
                  setItems(
                    data.map((item, i) => {
                      if (i === index) {
                        return {
                          ...item,
                          discount: {
                            ...item.discount,
                            code: e.target.value,
                            amount: cc.amount,
                            type: cc.type,
                          },
                        };
                      }

                      return item;
                    })
                  );
                } else {
                  setItems(
                    data.map((item, i) => {
                      if (i === index) {
                        return {
                          ...item,
                          discount: {
                            ...item.discount,
                            code: e.target.value,
                            amount: 0,
                            type: "",
                          },
                        };
                      }

                      return item;
                    })
                  );
                }
              }}
              id=""
            />
            {item.discount.type != "" && (
              <span className="font-medium text-green-500">
                Congratulations! Your coupon was applied.
              </span>
            )}
          </div>
        </td>
        <td>
          <div className="flex flex-wrap gap-2">
            {item.tax.map((item, i) => (
              <div
                key={i}
                className="text-xs bg-green-500 p-2 text-white rounded flex-nowrap whitespace-nowrap"
              >
                {item.name}
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

export default CreateInvoice;
