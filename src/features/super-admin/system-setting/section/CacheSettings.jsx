import React from "react";

const CacheSettings = () => {
  return (
    <section id="cache">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Cache Settings</h1>
            <p className="text-xs">
              This is a page meant for more advanced users, simply ignore it if
              you don`t understand what cache is.
            </p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="mt-6 grid grid-cols-1  gap-3">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Current cache size</span>
            <div className="join input input-bordered items-center">
              <input
                type="text"
                className="grow join-item"
                defaultValue={"We use cookies!"}
              />
              <div className="join-item h-full flex px-3 items-center">
                <p>MB</p>
              </div>
            </div>
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

export default CacheSettings;
