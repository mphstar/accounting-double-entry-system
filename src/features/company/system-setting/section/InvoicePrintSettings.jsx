import React, { useRef, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { SiPlanetscale } from "react-icons/si";
import QRCode from "react-qr-code";

const InvoicePrintSettings = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState();

  return (
    <section id="invoice">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Invoice Print Settings</h1>
            <p className="text-xs">Edit your company invoice details</p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full mt-6">
          <div className="w-full flex-1 flex flex-col gap-3">
            <label className="form-control gap-2">
              <span className="label-text font-semibold">
                Invoice Print Template
              </span>
              <select className="select select-bordered" name="" id="">
                <option value="">Paris</option>
                <option value="">London</option>
                <option value="">New York</option>
              </select>
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">QRCode Display</span>
              <input
                type="checkbox"
                name=""
                className="toggle toggle-primary"
                id=""
              />
            </label>
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Color Input</span>
              <div className="grid grid-cols-4 w-fit gap-2">
                <div className="w-8 h-8 bg-blue-400"></div>
                <div className="w-8 h-8 bg-red-400"></div>
                <div className="w-8 h-8 bg-green-400"></div>
                <div className="w-8 h-8 bg-yellow-400"></div>
                <div className="w-8 h-8 bg-purple-400"></div>
                <div className="w-8 h-8 bg-pink-400"></div>
                <div className="w-8 h-8 bg-indigo-400"></div>
                <div className="w-8 h-8 bg-teal-400"></div>
                <div className="w-8 h-8 bg-orange-400"></div>
                <div className="w-8 h-8 bg-cyan-400"></div>
                <div className="w-8 h-8 bg-lime-400"></div>
                <div className="w-8 h-8 bg-emerald-400"></div>
                <div className="w-8 h-8 bg-amber-400"></div>
                <div className="w-8 h-8 bg-violet-400"></div>
                <div className="w-8 h-8 bg-fuchsia-400"></div>
                <div className="w-8 h-8 bg-rose-400"></div>
                <div className="w-8 h-8 bg-gray-400"></div>
                <div className="w-8 h-8 bg-sky-400"></div>
                <div className="w-8 h-8 bg-stone-400"></div>
                <div className="w-8 h-8 bg-neutral-400"></div>
                <div className="w-8 h-8 bg-slate-400"></div>
              </div>
            </label>
            <div className="flex flex-col w-full">
              <h1 className="font-medium">Invoice Logo</h1>
              <img
                className="h-32 mt-4 object-contain"
                src={image || "https://placehold.co/600x400"}
                alt="placeholder"
              />
              <div className="w-full flex justify-center">
                <button
                  onClick={() => {
                    inputRef.current.click();
                  }}
                  className="btn btn-primary w-full mt-4"
                >
                  <MdOutlineFileUpload /> Choice file here
                </button>
                <input
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                  ref={inputRef}
                  className="hidden"
                  type="file"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="flex justify-end w-full mt-6">
              <button className="btn btn-success text-white w-fit">
                Save Changes
              </button>
            </div>
          </div>

          <div className="w-full md:w-[60%] md:max-w-[60%] h-fit max-h-[800px] overflow-y-auto flex flex-col">
            <div className="flex gap-2 justify-between">
              <div className="form-control">
                <h1 className="font-medium text-3xl mb-4">Invoice</h1>
                <QRCode className="w-32 h-32" value="hello world" />
              </div>
              <div className="flex gap-2 items-center h-fit">
                <SiPlanetscale className="mask mask-squircle" size={32} />
                <p className="font-semibold text-xl">Accountify</p>
              </div>
            </div>
            <div className="flex gap-2 mt-12">
              <div className="form-control">
                <h1 className="font-semibold">From :</h1>
                <p>Globex Corporation</p>
                <p>test@example.com</p>
                <p>02228896140</p>
                <p>
                  198 , Bombay Talkies Compd, Himanshurai Road, Malad (west)
                  Mumbai, Maharashtra
                </p>
                <p>India - 400064</p>
                <p>Registration Number : CMP12345</p>
                <p>VAT Number : GST456</p>
              </div>
              <div className="form-control items-end">
                <p>#PROP00001</p>
                <h1 className="font-semibold">Issue Date</h1>
                <p>Sep 13, 2024</p>
                <h1 className="font-semibold">Due Date</h1>
                <p>Sep 13, 2024</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-6 w-full">
              <div className="flex flex-col w-full">
                <h1 className="font-medium">Billed To:</h1>
                <p>{"<Customer Name>"}</p>
                <p>{"<Address>"}</p>
                <p>{"<City>, <State> <Zip>"}</p>
                <p>{"<Country>"}</p>
                <p>{"<Customer Phone Number>"}</p>
              </div>
              <div className="flex flex-col items-end text-end w-full">
                <h1 className="font-medium">Shipped To:</h1>
                <p>{"<Customer Name>"}</p>
                <p>{"<Address>"}</p>
                <p>{"<City>, <State> <Zip>"}</p>
                <p>{"<Country>"}</p>
                <p>{"<Customer Phone Number>"}</p>
              </div>
            </div>
            <div className="flex mt-6 text-base w-fit">
              <table className="table-fixed text-sm w-full border-separate space-y-12">
                <thead>
                  <tr>
                    <th className="text-start">Product</th>
                    <th className="text-start">Quantity</th>
                    <th className="text-start">Rate</th>
                    <th className="text-start">Discount</th>
                    <th className="text-start">Tax</th>
                    <th className="text-start">
                      <div className="flex flex-col ">
                        <h1>Price</h1>
                        <p className="text-red-500">before tax & discount</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover">
                    <td>Items 1</td>
                    <td>1</td>
                    <td>$10,000.00</td>
                    <td>$0.00</td>
                    <td>
                      <div className="flex flex-col">
                        <p>Tax 0 (10 %) $10</p>
                        <p>Tax 1 (10 %) $10</p>
                      </div>
                    </td>
                    <td>$50.00</td>
                  </tr>
                  <tr className="hover">
                    <td>Items 2</td>
                    <td>1</td>
                    <td>$10,000.00</td>
                    <td>$0.00</td>
                    <td>
                      <div className="flex flex-col">
                        <p>Tax 0 (10 %) $10</p>
                        <p>Tax 1 (10 %) $10</p>
                      </div>
                    </td>
                    <td>$50.00</td>
                  </tr>
                  <tr className="hover">
                    <td>Items 3</td>
                    <td>1</td>
                    <td>$10,000.00</td>
                    <td>$0.00</td>
                    <td>
                      <div className="flex flex-col">
                        <p>Tax 0 (10 %) $10</p>
                        <p>Tax 1 (10 %) $10</p>
                      </div>
                    </td>
                    <td>$50.00</td>
                  </tr>

                  <tr className="hover">
                    <td className="font-semibold">Total</td>
                    <td>3</td>
                    <td>$300.00</td>
                    <td>$10.00</td>
                    <td>$60.00</td>
                    <td>$0.00</td>
                  </tr>

                  <tr className="hover">
                    <td colSpan={4}></td>
                    <td className="font-medium">Sub Total</td>
                    <td>$10,000.00</td>
                  </tr>
                  <tr className="hover">
                    <td colSpan={4}></td>
                    <td className="font-medium">Tax 0</td>
                    <td>$0.00</td>
                  </tr>
                  <tr className="hover">
                    <td colSpan={4}></td>
                    <td className="font-medium">Tax 1</td>
                    <td>$550.00</td>
                  </tr>
                  <tr className="hover">
                    <td colSpan={4}></td>
                    <td className="font-medium">Total</td>
                    <td>$10,550.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoicePrintSettings;
