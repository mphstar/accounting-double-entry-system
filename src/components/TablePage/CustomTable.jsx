import React from "react";

const CustomTable = ({
  column = [],
  rows = [],
  title,
  isComponent = false,
  withoutAction = false,
}) => {
  return (
    <div
      className={`overflow-x-auto ${
        isComponent ? "" : "bg-base-100 p-6 drop-shadow"
      } w-full`}
    >
      {!withoutAction && (
        <div
          className={`flex items-center flex-wrap gap-2 w-full ${
            !title ? "justify-end" : "justify-normal"
          }`}
        >
          <div className="flex flex-col flex-1">
            {title && <h1 className="font-semibold mb-4">{title}</h1>}
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <div className="flex gap-2 items-center flex-1">
                <select className="select select-bordered" name="" id="">
                  <option value="">5</option>
                  <option value="">10</option>
                  <option value="">20</option>
                </select>
                <span>Entries per page</span>
              </div>
              <div className="my-2 w-full md:max-w-[300px]">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    placeholder="Search"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {column.map((item, index) => (
              <th className={item.className} key={index}>
                {item.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr className="hover" key={index}>
              {row.map((item, index) => (
                <td className={item.className} key={index}>
                  {item.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
