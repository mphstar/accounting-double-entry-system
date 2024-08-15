import React from "react";

const HeadPage = ({ title, breadcrumb, actions, hideTitle = false }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full items-center mb-3">
      <div className="flex flex-col w-full">
        {!hideTitle && <h2 className="text-xl font-semibold">{title}</h2>}
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
      <div className="flex flex-row w-full justify-end">
        {actions}
      </div>
    </div>
  );
};

export default HeadPage;
