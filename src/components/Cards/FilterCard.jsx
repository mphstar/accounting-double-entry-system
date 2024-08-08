import React from "react";

const FilterCard = ({ title, actions }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 justify-between bg-base-100 mb-4 px-8 py-4 drop-shadow">
      <h1 className="font-semibold w-full text-xl">{title}</h1>
      {actions}
    </div>
  );
};

export default FilterCard;
