import CustomTable from "@/components/TablePage/CustomTable";
import React, { useRef, useState } from "react";
import { FaCheck, FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

const PaymentSettings = () => {
  return (
    <section id="payment">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Payment Settings</h1>
            <p className="text-xs">
              These details will be used to collect invoice payments. Each
              invoice will have a payment button based on the below
              configuration.
            </p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3">
          <TemplateCard title={"Bank Transfer"}>
            <div className="flex flex-col">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Bank Detail</span>
                </div>
                <textarea
                  defaultValue={`Bank : Bank of America </br>
Bank Holder Name : AccountGo </br>
Account Number : 0123456789 </br> 
IFSC Code : ABC123 </br>
Swift Code : 123456`}
                  className="textarea h-24 textarea-bordered"
                />
                <div className="label">
                  <span className="label-text-alt">
                    Example : Bank : Bank name <br /> Account Number : 0000 0000
                  </span>
                </div>
              </label>
            </div>
          </TemplateCard>

          <TemplateCard title={"Stripe"}>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Stripe Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">
                    Stripe Secret
                  </span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
            </div>
          </TemplateCard>
          <TemplateCard title={"Paypal"}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control col-span-2">
                <div className="label">
                  <span className="label-text font-semibold">Paypal Mode</span>
                </div>
                <div className="flex gap-3 items-center">
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="mode"
                      className="radio radio-primary radio-sm"
                      id="mode"
                    />
                    <span>Sandbox</span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="mode"
                      className="radio radio-primary radio-sm"
                      id="mode"
                    />
                    <span>Live</span>
                  </label>
                </div>
              </div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Client ID</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Secret Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
            </div>
          </TemplateCard>
          <TemplateCard title={"Paystack"}>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Public Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Secret Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
            </div>
          </TemplateCard>
          <TemplateCard title={"Flutterwafe"}>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Public Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Secret Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
            </div>
          </TemplateCard>
          <TemplateCard title={"Razorpay"}>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Public Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Secret Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
            </div>
          </TemplateCard>
          <TemplateCard title={"Paytm"}>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-control col-span-3">
                <div className="label">
                  <span className="label-text font-semibold">
                    Paytm Environment
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="paytmenv"
                      className="radio radio-primary radio-sm"
                      id="paytmenv"
                    />
                    <span>Local</span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="paytmenv"
                      className="radio radio-primary radio-sm"
                      id="paytmenv"
                    />
                    <span>Production</span>
                  </label>
                </div>
              </div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Merchant ID</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Merchant Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Industry Type</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
            </div>
          </TemplateCard>
          <TemplateCard title={"Mercado Pago"}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control col-span-2">
                <div className="label">
                  <span className="label-text font-semibold">Mercado Mode</span>
                </div>
                <div className="flex gap-3 items-center">
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="mercadomode"
                      className="radio radio-primary radio-sm"
                      id="mercadomode"
                    />
                    <span>Sandbox</span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="mercadomode"
                      className="radio radio-primary radio-sm"
                      id="mercadomode"
                    />
                    <span>Live</span>
                  </label>
                </div>
              </div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Access Token</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
            </div>
          </TemplateCard>
          <TemplateCard title={"Razorpay"}>
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Public Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">Secret Key</span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
            </div>
          </TemplateCard>
          <TemplateCard title={"Mollie"}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">
                    Mollie Api Key
                  </span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">
                    Mollie Profile ID
                  </span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-semibold">
                    Mollie Partner ID
                  </span>
                </div>
                <input
                  type="password"
                  defaultValue={"Hello World"}
                  className="input input-bordered"
                />
              </label>
            </div>
          </TemplateCard>
        </div>
        <div className="flex justify-end w-full mt-6">
          <button className="btn btn-success text-white w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

const TemplateCard = ({ title, children }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsCollapse((prev) => !prev);
    setHeight(isCollapse ? 0 : contentRef.current.scrollHeight);
  };

  return (
    <div className="bg-base-200 p-4 rounded-md border-2 dark:border-gray-600 flex w-full duration-300 ease-in-out flex-col">
      <div className="flex items-center">
        <h1 className="w-full">{title}</h1>
        <div className="flex gap-2 items-center">
          <label className="flex gap-2" htmlFor="">
            <h1>Enable:</h1>
            <input
              type="checkbox"
              name=""
              className="toggle toggle-primary"
              id=""
            />
          </label>
          <button
            onClick={() => toggleCollapse()}
            className="btn border-none bg-transparent"
          >
            <IoIosArrowDown
              className={`${
                isCollapse ? "rotate-180" : "rotate-0"
              }  duration-300 ease-in-out`}
            />
          </button>
        </div>
      </div>
      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default PaymentSettings;
