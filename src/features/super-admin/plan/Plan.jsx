import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { openModal } from "../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";

const Plan = () => {
  const data = [
    {
      name: "Free Plan",
      price: "$0",
      duration: "Lifetime",
      freeTrialDays: 0,
      fiturs: [
        "5 Users",
        "5 Customers",
        "5 Vendors",
        "0 Storage Limits",
        "Enable Chat GPT",
      ],
    },
    {
      name: "Platinum",
      price: "$5000",
      duration: "Year",
      freeTrialDays: 5,
      fiturs: [
        "5 Users",
        "500 Customers",
        "500 Vendors",
        "2000 Storage Limits",
        "Enable Chat GPT",
      ],
    },
    {
      name: "Gold",
      price: "$4000",
      duration: "Year",
      freeTrialDays: 0,
      fiturs: [
        "5 Users",
        "400 Customers",
        "400 Vendors",
        "500 Storage Limits",
        "Disable Chat GPT",
      ],
    },
    {
      name: "Silver",
      price: "$200",
      duration: "Year",
      freeTrialDays: 10,
      fiturs: [
        "5 Users",
        "200 Customers",
        "200 Vendors",
        "1000 Storage Limits",
        "Enable Chat GPT",
      ],
    },
  ];

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Plan"}
        breadcrumb={"Plan"}
        actions={
          <button
            onClick={() => {
              dispatch(
                openModal({
                  bodyType: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_PLAN,
                  title: "Create Plan",
                })
              );
            }}
            className="btn btn-square btn-primary btn-sm"
          >
            +
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {data.map((item, index) => (
          <CardPlan key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

const CardPlan = ({ data }) => {
  const dispatch = useDispatch();
  const ColorCard = () => {
    if (data.name === "Free Plan") {
      return "bg-blue-300";
    }
    if (data.name === "Silver") {
      return "bg-gray-400";
    }
    if (data.name === "Gold") {
      return "bg-yellow-500";
    }
    if (data.name === "Platinum") {
      return "bg-[#B1C5C7]";
    }

    return "bg-base-100";
  };

  return (
    <div className="p-3 relative pt-6">
      <div className="w-full absolute top-0 z-[5] flex justify-center">
        <div className="bg-primary text-white p-3 rounded-md w-fit text-xs">
          <h1>{data.name}</h1>
        </div>
      </div>
      <div
        className={`${ColorCard()} h-full drop-shadow p-5 relative rounded-md flex flex-col items-center`}
      >
        <div className="bg-base-100 w-full h-[75%] absolute bottom-0 rounded-t-full -z-[2]"></div>

        {data.name != "Free Plan" && (
          <label className="flex gap-2 items-center w-fit top-4 right-4 absolute">
            <p className="font-semibold">Is Active</p>
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
            />
          </label>
        )}
        <div className="flex items-end mb-6 pb-8 mt-4">
          <h1 className="text-4xl font-semibold">{data.price}</h1>
          <span className="text-xs">/{data.duration}</span>
        </div>

        <p className="text-sm">Duration: {data.duration}</p>
        <p className="text-sm mb-4">Free Trial Days: {data.freeTrialDays}</p>
        <div className="flex flex-col gap-3">
          {data.fiturs.map((item, index) => (
            <div key={index} className="flex flex-row gap-2 items-center">
              <FiPlusCircle className="text-green-500" />
              <p className="flex-1">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-2 mt-6">
          <button
            onClick={() => {
              dispatch(
                openModal({
                  bodyType: MODAL_BODY_TYPES.SUPERADMIN_FORM_CREATE_PLAN,
                  title: "Edit Plan",
                })
              );
            }}
            className="btn bg-primary hover:bg-primary/90 text-white"
          >
            <FiEdit />
          </button>
          {data.name !== "Free Plan" && (
            <button
              onClick={() => {}}
              className="btn bg-red-500 hover:bg-red-600 text-white"
            >
              <RiDeleteBin2Line />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plan;
