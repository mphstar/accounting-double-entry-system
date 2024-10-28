import CustomTable from "@/components/TablePage/CustomTable";
import { openModal } from "@/features/common/modalSlice";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

const Testimoni = () => {
  const dataTestimoniList = [
    {
      no: 1,
      name: "Tbistone",
    },
    {
      no: 2,
      name: "Tbistone",
    },
    {
      no: 3,
      name: "Tbistone",
    },
  ];

  const ColumnTestimoniList = [
    {
      value: "No",
      className: "w-12",
    },
    {
      value: "Name",
      className: "w-full",
    },
    {
      value: "Action",
      className: "",
    },
  ];

  const RowTestimoniList = [
    ...dataTestimoniList.map((item, index) => [
      {
        value: item.no,
        className: "",
      },
      {
        value: item.name,
        className: "",
      },
      {
        value: (
          <div className="flex gap-2">
            <button
              onClick={() => {
                ModalForm({
                  title: "Edit Testimoni List",
                  data: item,
                  modal: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_TESTIMONI_LIST,
                });
              }}
              className="btn btn-square bg-blue-500 hover:bg-blue-600 btn-sm text-white"
            >
              <FaRegEdit />
            </button>
            <button className="btn btn-square bg-red-500 hover:bg-red-600 btn-sm text-white">
              <MdOutlineDeleteOutline />
            </button>
          </div>
        ),
        className: "",
      },
    ]),
  ];

  const dispatch = useDispatch();

  const ModalForm = ({ title, data, modal }) => {
    dispatch(
      openModal({
        title: title,
        bodyType: modal,
        extraObject: data,
      })
    );
  };

  return (
    <section id="testimoni">
      <div className="flex flex-col bg-base-100 p-5 rounded-md drop-shadow">
        <div className="flex gap-2 justify-between items-center ">
          <h1 className="font-semibold">Testimoni</h1>
          <input
            type="checkbox"
            name=""
            className="toggle toggle-primary"
            id=""
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-6">
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Heading</span>
            <input
              type="text"
              className="input input-bordered"
              value={"From our Clients"}
            />
          </label>
          <label className="form-control gap-2">
            <span className="label-text font-semibold">Description</span>
            <input
              type="text"
              className="input input-bordered"
              value={
                "Use these awesome forms to login or create new account in your project for free."
              }
            />
          </label>
          <label className="form-control gap-2 col-span-2">
            <span className="label-text font-semibold">Long Description</span>
            <textarea
              className="textarea textarea-bordered h-36"
              value={
                "WorkDo seCommerce package offers you a “sales-ready.”secure online store. The package puts all the key pieces together, from design to payment processing. This gives you a headstart in your eCommerce venture. Every store is built using a reliable PHP framework -laravel. Thisspeeds up the development process while increasing the store’s security and performance.Additionally, thanks to the accompanying mobile app, you and your team can manage the store on the go. What’s more, because the app works both for you and your customers, you can use it to reach a wider audience.And, unlike popular eCommerce platforms, it doesn’t bind you to any terms and conditions or recurring fees. You get to choose where you host it or which payment gateway you use. Lastly, you getcomplete control over the looks of the store. And if it lacks any functionalities that you need, just reach out, and let’s discuss customization possibilities"
              }
            />
          </label>
        </div>
        <div className="flex w-full justify-end mt-12">
          <button className="btn btn-success text-white">Save Changes</button>
        </div>
      </div>

      <div className="flex flex-col bg-base-100 p-5 rounded-md mt-4 drop-shadow">
        <div className="flex gap-2 justify-between items-center mb-4">
          <h1 className="font-semibold">Testimoni List</h1>
          <button
            onClick={() => {
              ModalForm({
                title: "Create Testimoni",
                modal: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_TESTIMONI_LIST,
              });
            }}
            className="btn btn-sm btn-square btn-success text-white"
          >
            <GoPlus />
          </button>
        </div>
        <CustomTable
          column={ColumnTestimoniList}
          rows={RowTestimoniList}
          isComponent={true}
          withoutAction={true}
        />
      </div>
    </section>
  );
};

export default Testimoni;
