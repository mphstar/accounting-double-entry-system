import React from "react";

const ChatGptSettings = () => {
  return (
    <section id="chatgpt">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <div>
            <h1 className="font-semibold">Chat GPT Key Settings</h1>
            <p className="text-xs">Edit your key details</p>
          </div>
          {/* <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button> */}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Chat GPT Key</span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">
              Chat GPT Model name
            </span>
            <input
              type="password"
              className="input input-bordered"
              defaultValue={"hello world"}
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

export default ChatGptSettings;
