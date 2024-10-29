import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const TemplatePage = ({ children }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = -100; // Ganti dengan nilai offset yang diinginkan
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="flex flex-col md:sticky h-fit md:top-20 md:left-0 md:w-[450px]">
        <CardPlan />
        <ul className="bg-base-100 p-3 drop-shadow rounded-md flex flex-col gap-2 h-fit  cursor-default w-full ">
          <ItemNav
            onClick={() => scrollToSection("manually")}
            title={"Manually"}
            isActive={false}
          />
          <ItemNav
            onClick={() => scrollToSection("bank-transfer")}
            title={"Bank Transfer"}
            isActive={false}
          />
          <ItemNav
            onClick={() => scrollToSection("stripe")}
            title={"Stripe"}
            isActive={false}
          />
          <ItemNav
            onClick={() => scrollToSection("paypal")}
            title={"Paypal"}
            isActive={false}
          />
        </ul>
      </div>
      {children}
    </div>
  );
};

const CardPlan = ({ data }) => {
  return (
    <div className="relative pt-6 h-fit mb-8">
      <div className="w-full h-fit absolute top-0 z-[5] flex justify-center">
        <div className="bg-primary text-white p-3 rounded-md w-fit text-xs">
          <h1>Platinum</h1>
        </div>
      </div>
      <div
        className={`bg-base-100 h-fit drop-shadow p-5 relative rounded-md flex flex-col items-center`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-end mb-4 mt-4">
            <h1 className="text-4xl font-semibold">$500.00</h1>
            <span className="text-xs">/Per Year</span>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <FiPlusCircle className="text-green-500" />
            <p className="flex-1">5 Users</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FiPlusCircle className="text-green-500" />
            <p className="flex-1">500 Customers</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FiPlusCircle className="text-green-500" />
            <p className="flex-1">500 Vendors</p>
          </div>
          <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
};

const ItemNav = ({ title, isActive, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`p-2 ${
        isActive ? "bg-black text-white" : "hover:bg-base-300"
      } rounded-md`}
    >
      <div className="flex gap-2 justify-between items-center">
        <p>{title}</p>
        <IoIosArrowForward />
      </div>
    </li>
  );
};

export default TemplatePage;
