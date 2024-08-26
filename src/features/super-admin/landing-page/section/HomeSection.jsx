import React, { useState } from "react";
import { MdOutlineDeleteOutline, MdOutlineFileDownload } from "react-icons/md";

const HomeSection = () => {
  const [totalInput, setTotalInput] = useState(1);
  return (
    <section id="home">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center">
          <h1 className="font-semibold">Home Section</h1>
        </div>

        <div className="grid grid-cols-2 mt-6 gap-3">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Offer Text</span>
            <input
              type="text"
              className="input input-bordered"
              value={"70% Special Offer"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Title</span>
            <input
              type="text"
              className="input input-bordered"
              value={"Home"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Heading</span>
            <input
              type="text"
              className="input input-bordered"
              value={"AccountGo SaaS Accounting and Billing Tool"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Trusted by</span>
            <input
              type="text"
              className="input input-bordered"
              value={"1000+ Customer"}
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
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Live Demo Link</span>
            <input
              type="text"
              className="input input-bordered"
              value={"https://demo.workdo.io/accountgo-saas/login"}
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
        <div className="flex flex-col xl:flex-row gap-8 mt-4">
          <div className="form-control">
            <label className="form-control gap-2">
              <span className="label-text font-semibold">Banner</span>
              <input
                type="file"
                name=""
                className="file-input file-input-bordered"
                id=""
              />
            </label>
            <img
              className="h-40 aspect-video rounded-md mt-4 object-cover"
              src="https://picsum.photos/200/300"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-end">
              <button
                onClick={() => setTotalInput(totalInput + 1)}
                className="btn btn-primary btn-sm btn-square"
              >
                +
              </button>
            </div>

            <div className="form-control w-full mt-6 gap-3">
              {Array.from({ length: totalInput }).map((_, index) => (
                <div key={index} className="flex gap-2 w-full items-center">
                  <input
                    type="file"
                    name=""
                    className="file-input file-input-bordered w-full"
                    id=""
                  />
                  <img
                    className="aspect-video object-cover rounded-md h-12"
                    src="https://demo.workdo.io/accountgo-saas/storage/uploads/landing_page_image/placeholder.png"
                    alt=""
                  />
                  <button
                    onClick={() => setTotalInput(totalInput - 1)}
                    className="btn btn-error btn-square text-white"
                  >
                    <MdOutlineDeleteOutline />
                  </button>
                </div>
              ))}
            </div>

            <div className="form-control mt-4 gap-3 w-full">
              <div className="flex gap-2 items-center w-full justify-between">
                <img
                  className="h-8"
                  src="https://demo.workdo.io/accountgo-saas/storage/uploads/landing_page_image/home_logo.png"
                  alt=""
                />
                <div className="flex gap-2">
                  <button className="btn btn-outline btn-error btn-square">
                    <MdOutlineFileDownload />
                  </button>
                  <button className="btn btn-outline btn-primary btn-square">
                    <MdOutlineDeleteOutline />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 items-center w-full justify-between">
                <img
                  className="h-8"
                  src="https://demo.workdo.io/accountgo-saas/storage/uploads/landing_page_image/home_logo.png"
                  alt=""
                />
                <div className="flex gap-2">
                  <button className="btn btn-outline btn-error btn-square">
                    <MdOutlineFileDownload />
                  </button>
                  <button className="btn btn-outline btn-primary btn-square">
                    <MdOutlineDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end mt-12">
          <button className="btn btn-success text-white">Save Changes</button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
