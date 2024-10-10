import React from "react";

const CookieSettings = () => {
  return (
    <section id="cookie">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Cookie Settings</h1>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-semibold">Enable Cookie</p>
            <input
              type="checkbox"
              name=""
              className="toggle toggle-primary"
              id=""
            />
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="form-control gap-2 flex-row">
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
              name=""
              id=""
            />
            <span className="label-text font-semibold">Enable Logging</span>
          </label>
          <label className="form-control gap-2 flex-row">
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
              name=""
              id=""
            />
            <span className="label-text font-semibold">
              Strictly necessary cookies
            </span>
          </label>

          <label className="form-control gap-2">
            <span className="label-text font-semibold">Cookie Title</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"We use cookies!"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Strictly Cookie Title
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"Strictly necessary cookies"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Cookie Description</span>
            <textarea
              className="textarea textarea-bordered"
              defaultValue={
                "Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it"
              }
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Strictly Cookie Description
            </span>
            <textarea
              className="textarea textarea-bordered"
              defaultValue={
                "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly"
              }
            />
          </label>

          <span className="md:col-span-2 text-xl font-semibold mt-4">
            More Information
          </span>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Contact Us Description
            </span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"For any queries in relation to our policy on cookies and your choices, please contact us"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Contact Us URL</span>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={"Contact Us Description"}
            />
          </label>
        </div>

        <div className="flex justify-end w-full mt-6 gap-3">
          <button className="btn btn-success text-white w-fit">
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookieSettings;
