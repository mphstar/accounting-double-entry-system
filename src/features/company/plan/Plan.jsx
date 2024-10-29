import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { openModal } from "../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";
import { AiOutlineRetweet } from "react-icons/ai";
import { Link } from "react-router-dom";

const Plan = () => {
  const data = [
    {
      name: "Free Plan",
      price: "$0",
      duration: "Lifetime",
      freeTrialDays: 0,
      isActive: false,
      fiturs: [
        "5 Users",
        "5 Customers",
        "5 Vendors",
        "0 Storage Limits",
        "Enable Chat GPT",
      ],
    },

    {
      name: "Silver",
      price: "$200",
      duration: "Year",
      freeTrialDays: 10,
      isActive: false,
      fiturs: [
        "5 Users",
        "200 Customers",
        "200 Vendors",
        "1000 Storage Limits",
        "Enable Chat GPT",
      ],
    },
    {
      name: "Gold",
      price: "$4000",
      duration: "Year",
      freeTrialDays: 0,
      isActive: true,
      fiturs: [
        "5 Users",
        "400 Customers",
        "400 Vendors",
        "500 Storage Limits",
        "Disable Chat GPT",
      ],
    },
    {
      name: "Platinum",
      price: "$5000",
      duration: "Year",
      freeTrialDays: 5,
      isActive: false,
      fiturs: [
        "5 Users",
        "500 Customers",
        "500 Vendors",
        "2000 Storage Limits",
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
        actions={<div></div>}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 h-full">
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
    <div className="p-3 relative pt-6 h-full">
      <div className="w-full absolute top-0 z-[5] flex justify-center">
        <div className="bg-primary text-white p-3 rounded-md w-fit text-xs">
          <h1>{data.name}</h1>
        </div>
      </div>
      <div
        className={`${ColorCard()} h-full drop-shadow p-5 relative rounded-md flex flex-col items-center`}
      >
        <div className="bg-base-100 w-full h-[75%] absolute bottom-0 rounded-t-full -z-[2]"></div>

        {data.isActive && (
          <div className="flex items-center gap-2 top-4 right-4 absolute">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <p className="text-sm">active</p>
          </div>
        )}
        <div className="flex items-end mb-12 py-6 mt-4">
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

        {data.name !== "Free Plan" && (
          <div className="flex flex-row items-center gap-2 mt-6">
            {data.isActive ? (
              <p>Plan Expired : Sep 4, 2025</p>
            ) : (
              <>
                <Link to={"/app/company/plan/order"}>
                  <button className="btn bg-green-500 hover:bg-green-600 text-white">
                    Buy Plan
                  </button>
                </Link>
                {data.name !== "Free Plan" && (
                  <div className="tooltip" data-tip="Send Request">
                    <button
                      onClick={() => {}}
                      className="btn bg-primary hover:bg-primary text-white"
                    >
                      <AiOutlineRetweet />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plan;
