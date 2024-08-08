import React from "react";

const Paginate = ({ showData = 5, totalData = 10 }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center mt-4">
      <p className="flex-1">
        Showing {showData} from {totalData} data
      </p>
      <div className="join gap-2">
        <button className="join-item btn btn-square btn-sm bg-base-100">
          1
        </button>
        <button className="join-item btn btn-square btn-sm btn-active btn-primary">
          2
        </button>
        <button className="join-item btn btn-square btn-sm bg-base-100">
          3
        </button>
        <button className="join-item btn btn-square btn-sm bg-base-100">
          4
        </button>
      </div>
    </div>
  );
};

export default Paginate;
