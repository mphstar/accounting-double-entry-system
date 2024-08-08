import React from "react";

const HeadPage = ({ title, breadcrumb, actions }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-3">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="breadcrumbs text-sm">
          <ul>
            <li className="text-primary">
              <a>Dashboard</a>
            </li>
            <li>
              <a>{breadcrumb}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row">{actions}</div>
    </div>
  );
};

export default HeadPage;
