import HeadPage from "@/components/HeadPage/HeadPage";
import React, { useState } from "react";
import TemplatePage from "./TemplatePage";
import { FaCheck } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";

const OrderPlan = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Order Plan"}
        breadcrumb={"Manage Order Plan"}
        actions={<div className="flex gap-2"></div>}
      />

      <TemplatePage>
        <div className="flex flex-col w-full gap-3">
          <section id="manually">
            <div className="flex flex-col bg-base-100 rounded-md drop-shadow">
              <div className="flex gap-2 justify-between items-center mb-4 border-b-[2px] dark:border-gray-600 p-5">
                <h1 className="font-semibold">Manually</h1>
              </div>
              <div className="px-5">
                <p>
                  Requesting manual payment for the planned amount for the
                  subscriptions plan.
                </p>
              </div>
              <div className="flex justify-end w-full mt-6 p-5 border-t-2 dark:border-gray-600">
                <button className="btn btn-success text-white w-fit">
                  Send Request
                </button>
              </div>
            </div>
          </section>
          <section id="bank-transfer">
            <div className="flex flex-col bg-base-100 rounded-md drop-shadow">
              <div className="flex gap-2 justify-between items-center mb-4 border-b-[2px] dark:border-gray-600 p-5">
                <h1 className="font-semibold">Bank Transfer</h1>
              </div>
              <div className="px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <h1 className="font-semibold">Bank Details:</h1>
                    <p>Bank : Bank of America</p>
                    <p>Bank Holder Name : AccountGo</p>
                    <p>Account Number : 0123456789</p>
                    <p>IFSC Code : ABC123</p>
                    <p>Swift Code : 123456</p>
                  </div>
                  <label className="form-control w-full col-span-2">
                    <div className="label">
                      <span className="label-text font-semibold">
                        Payment Receipt
                      </span>
                    </div>
                    <input
                      type="file"
                      className="file-input file-input-bordered w-full"
                    />
                  </label>
                </div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">Coupon</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Enter Coupon Code"
                    />
                    <div className="tooltip" data-tip="Apply">
                      <button className="btn btn-square">
                        <FaCheck />
                      </button>
                    </div>
                  </div>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                  <div className="flex gap-2">
                    <h1 className="font-semibold">Plan Price:</h1>
                    <p>$500.00</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <h1 className="font-semibold">Net Amount:</h1>
                      <p>$500.00</p>
                    </div>
                    <p className="text-xs">(After coupon apply)</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-full mt-6 p-5 border-t-2 dark:border-gray-600">
                <button className="btn btn-success text-white w-fit">
                  Pay Now
                </button>
              </div>
            </div>
          </section>
          <section id="stripe">
            <div className="flex flex-col bg-base-100 rounded-md drop-shadow">
              <div className="flex gap-2 justify-between items-center mb-4 border-b-[2px] dark:border-gray-600 p-5">
                <h1 className="font-semibold">Stripe</h1>
              </div>
              <div className="px-5">
                <h1>Credit / Debit Card</h1>
                <p className="text-sm mb-4">
                  Safe money transfer using your bank account. We support
                  Mastercard, Visa, Discover and American express.
                </p>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">
                      Name on card
                    </span>
                  </div>
                  <input type="text" className="input input-bordered w-full" />
                </label>

                {/* <label className="form-control flex-row items-center gap-3 w-full input input-bordered mt-4">
                  <AiOutlineCreditCard />
                  <input
                    type="tel"
                    name="credit-number"
                    className="w-full h-full"
                  />
                </label> */}

                <CreditCardInput />

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">Coupon</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Enter Coupon Code"
                    />
                    <div className="tooltip" data-tip="Apply">
                      <button className="btn btn-square">
                        <FaCheck />
                      </button>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex justify-end w-full mt-6 p-5 border-t-2 dark:border-gray-600">
                <button className="btn btn-success text-white w-fit">
                  Pay Now
                </button>
              </div>
            </div>
          </section>
          <section id="paypal">
            <div className="flex flex-col bg-base-100 rounded-md drop-shadow">
              <div className="flex gap-2 justify-between items-center mb-4 border-b-[2px] dark:border-gray-600 p-5">
                <h1 className="font-semibold">Paypal</h1>
              </div>
              <div className="px-5">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text font-semibold">Coupon</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Enter Coupon Code"
                    />
                    <div className="tooltip" data-tip="Apply">
                      <button className="btn btn-square">
                        <FaCheck />
                      </button>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex justify-end w-full mt-6 p-5 border-t-2 dark:border-gray-600">
                <button className="btn btn-success text-white w-fit">
                  Pay Now
                </button>
              </div>
            </div>
          </section>
        </div>
      </TemplatePage>
    </div>
  );
};

function CreditCardInput() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // Fungsi untuk format input kartu kredit
  const formatCardNumber = (value) => {
    return value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
  };

  return (
    <div className="">
      <label className="block text-gray-700 mt-2 label-text font-semibold mb-2">
        Card Number
      </label>
      <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
        {/* Icon Kartu */}
        <span className="mr-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M3 6h18M3 14h18M3 18h18"
            />
          </svg>
        </span>

        {/* Input Nomor Kartu */}
        <input
          type="text"
          maxLength="19"
          value={formatCardNumber(cardNumber)}
          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
          placeholder="Nomor kartu"
          className="flex-grow w-full p-2 outline-none text-gray-700"
        />

        {/* Placeholder untuk Tanggal Kadaluarsa */}

        {/* Input Tanggal Kadaluarsa */}
        <input
          type="text"
          maxLength="5"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value.replace(/[^0-9/]/g, ""))}
          placeholder="MM/YY"
          className="w-16 p-2 outline-none text-gray-700"
        />

        {/* Placeholder untuk CVC */}

        {/* Input CVC */}
        <input
          type="text"
          maxLength="3"
          value={cvv}
          onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
          placeholder="123"
          className="w-12 p-2 outline-none text-gray-700"
        />
      </div>
    </div>
  );
}

export default OrderPlan;
