import React from "react";
import { GoFileDirectoryFill } from "react-icons/go";
import { TbUsers } from "react-icons/tb";

const ModalAdminHub = ({ extraObject, closeModal }) => {
  const data = extraObject;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-evenly gap-2">
        <div className="flex flex-col items-center">
          <h1 className="text-center">Total Users</h1>
          <div className="flex items-center gap-2">
            <TbUsers className="text-orange-500" />
            <span>{data.totalUsers}</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center">Total Customers</h1>
          <div className="flex items-center gap-2">
            <TbUsers className="text-green-500" />
            <span>{data.totalCustomers}</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center">Total Vendors</h1>
          <div className="flex items-center gap-2">
            <TbUsers className="text-red-500" />
            <span>{data.totalVendors}</span>
          </div>
        </div>
      </div>
      {data.users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {data.users.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-2 p-3 rounded-md"
            >
              <div className="flex items-center flex-1 gap-2">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={item.avatar}
                  alt={item.name}
                />
                <span>{item.name}</span>
              </div>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                name=""
                id=""
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-6">
          <GoFileDirectoryFill className="text-green-500" />
          <h1 className="font-semibold text-xl">Opps..</h1>
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default ModalAdminHub;
