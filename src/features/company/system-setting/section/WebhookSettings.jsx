import CustomTable from "@/components/TablePage/CustomTable";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

const WebhookSettings = () => {
  const data = [
    {
      module: "New Customer",
      url: "https://demo.workdo.io/accountgo-saas/login",
      method: "Get",
    },
    {
      module: "New Invoice",
      url: "https://demo.workdo.io/accountgo-saas/login",
      method: "Post",
    },
    {
      module: "New Bill",
      url: "https://demo.workdo.io/accountgo-saas/login",
      method: "Post",
    },
  ];

  const column = [
    {
      value: "Modules",
    },
    {
      value: "URL",
    },
    {
      value: "Method",
    },
    {
      value: "Action",
    },
  ];

  const row = [
    ...data.map((item, index) => [
      {
        value: item.module,
      },
      {
        value: item.url,
      },
      {
        value: item.method,
      },
      {
        value: (
          <div className="flex items-center gap-1">
            <div className="tooltip" data-tip="Edit">
              <button
                onClick={() => {}}
                className="btn btn-square btn-sm bg-blue-400 hover:bg-blue-500 text-white"
              >
                <FiEdit />
              </button>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-square btn-sm bg-red-400 hover:bg-red-500 text-white">
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ),
      },
    ]),
  ];

  return (
    <section id="webhook">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-6">
          <div>
            <h1 className="font-semibold">Web Hook Settings</h1>
            <p className="text-xs"></p>
          </div>
          <button className="btn btn-sm btn-square btn-success text-white">
            <GoPlus />
          </button>
        </div>
        <CustomTable isComponent column={column} rows={row} withoutAction />
      </div>
    </section>
  );
};

export default WebhookSettings;
