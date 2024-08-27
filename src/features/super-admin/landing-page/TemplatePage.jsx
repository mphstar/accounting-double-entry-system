import React from "react";
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
      <ul className="bg-base-100 p-3 drop-shadow rounded-md flex flex-col gap-2 h-fit md:sticky md:top-20 md:left-0 cursor-default w-full md:w-[250px]">
        <ItemNav
          onClick={() => scrollToSection("top-bar")}
          title={"Top Bar"}
          isActive={false}
        />
        <ItemNav
          onClick={() => scrollToSection("custom-page")}
          title={"Custom Page"}
          isActive={false}
        />
        <ItemNav
          onClick={() => scrollToSection("home")}
          title={"Home"}
          isActive={false}
        />
        <ItemNav
          onClick={() => scrollToSection("features")}
          title={"Features"}
          isActive={false}
        />
        <ItemNav onClick={() => scrollToSection("discover")} title={"Discover"} isActive={false} />
        <ItemNav onClick={() => scrollToSection("screenshot")} title={"Screenshots"} isActive={false} />
        <ItemNav onClick={() => scrollToSection("pricing-plan")} title={"Pricing Plan"} isActive={false} />
        <ItemNav onClick={() => scrollToSection("faq")} title={"FAQ"} isActive={false} />
        <ItemNav onClick={() => scrollToSection("testimoni")} title={"Testimonials"} isActive={false} />
        <ItemNav onClick={() => scrollToSection("joinus")} title={"Join Us"} isActive={false} />
      </ul>
      {children}
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
