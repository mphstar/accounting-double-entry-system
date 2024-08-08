import React from "react";

const CustomTable = ({ column = [], rows = [], title }) => {
  return (
    <div className="overflow-x-auto bg-base-100 p-6 drop-shadow">
      {title && <h1 className="font-semibold">{title}</h1>}
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
