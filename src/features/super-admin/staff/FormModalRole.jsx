import React from "react";
import permissions from "./DataRole";

const FormModalRole = ({ extraObject, closeModal }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input
            type="text"
            placeholder="Enter User Name"
            className="input input-bordered w-full"
          />
        </label>
        <h1 className="font-semibold py-2">Assign Permission to Roles</h1>

        <table className="table">
          <thead>
            <tr>
              <th className="w-[30px]">
                <input
                  onChange={(e) => {
                    const checkboxes = document.querySelectorAll(".checkbox");
                    checkboxes.forEach((checkbox) => {
                      checkbox.checked = e.target.checked;
                    });
                  }}
                  type="checkbox"
                  className="checkbox"
                />
              </th>
              <th>Module</th>
              <th>Permission</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((data, index) => (
              <tr key={index}>
                <td>
                  <input
                    onChange={(e) => {
                      // centang juga permission sesuai dengan module
                      const checkboxes = document.querySelectorAll(
                        `#index${index}`
                      );
                      checkboxes.forEach((checkbox) => {
                        checkbox.checked = e.target.checked;
                      });

                      //   console.log(checkboxes);
                    }}
                    type="checkbox"
                    className="checkbox"
                  />
                </td>
                <td>{data.module}</td>
                <td>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {data.permissions.map((per, i) => (
                      <div className="flex flex-row gap-2 items-center" key={i}>
                        <input
                          id={`index${index}`}
                          type="checkbox"
                          className="checkbox"
                        />
                        <span className="ml-2">{per}</span>
                      </div>
                    ))}
                  </div>
                </td>
                {/* <td>
                  {data.permission.map((per, i) => (
                    <div key={i}>
                      <input type="checkbox" className="checkbox" />
                      <span className="ml-2">{per}</span>
                    </div>
                  ))}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end w-full mt-8 gap-2">
        <button onClick={() => closeModal()} className="btn">
          Cancel
        </button>
        <button
          onClick={() => closeModal()}
          className="btn btn-success text-white"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default FormModalRole;
