import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompany, handleForm, resetForm, updateCompany } from "./CompanySlice";

const ModalCompany = ({ extraObject, closeModal }) => {
  const dispatch = useDispatch();

  const { form, isEdit } = useSelector(
    (state) => state.companySuperAdmin
  );

  const handleSubmit = () => {
    if (isEdit) {
      // Update
      dispatch(
        updateCompany({
          id: extraObject.id,
          name: form.name,
          email: form.email,
          loginIsEnable: form.loginIsEnable,
        })
      );

      closeModal();
    } else {
      // Create

      const id = Math.floor(Math.random() * 100);
      dispatch(
        addCompany({
          id: id,
          name: form.name,
          email: form.email,
          loginIsEnable: form.loginIsEnable,
          password: form.password,
          plan: "Free",
          planExpired: "Aug 20, 2025",
          avatar: `https://picsum.photos/id/${id}/200/300`,
          totalUsers: 0,
          totalCustomers: 0,
          totalVendors: 0,
          users: [],
        })
      );

      // console.log(companies);

      closeModal();
    }

    dispatch(resetForm());
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Name</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter Company Name"
            value={form.name}
            onChange={(e) => dispatch(handleForm({ name: e.target.value }))}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter Company Email"
            value={form.email}
            onChange={(e) => dispatch(handleForm({ email: e.target.value }))}
          />
        </label>
        {!isEdit && (
          <>
            <label className="form-control flex-row gap-3 h-full items-center justify-between w-full">
              <div className="label">
                <span className="label-text font-semibold">
                  Login is enable
                </span>
              </div>
              <input
                type="checkbox"
                className="toggle"
                checked={form.loginIsEnable}
                value={form.loginIsEnable}
                onChange={(e) =>
                  dispatch(handleForm({ loginIsEnable: e.target.checked }))
                }
              />
            </label>
            {form.loginIsEnable && (
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Password</span>
                </div>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter Company Password"
                  value={form.password}
                  onChange={(e) =>
                    dispatch(handleForm({ password: e.target.value }))
                  }
                />
              </label>
            )}
          </>
        )}
      </div>
      <div className="flex items-center justify-end w-full mt-8 gap-2">
        <button onClick={() => closeModal()} className="btn">
          Cancel
        </button>
        <button
          onClick={() => handleSubmit()}
          className="btn btn-success text-white"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ModalCompany;
