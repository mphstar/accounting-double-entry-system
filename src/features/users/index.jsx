import React, { useState } from "react";
import HeadPage from "../../components/HeadPage/HeadPage";
import CustomTable from "../../components/TablePage/CustomTable";
import useFetch from "../../utils/useFetch";
import NoDataTable from "../../components/Template/NoDataTable";
import CustomPagination from "../../components/Template/CustomPagination";

const COLUMN = [
  { value: "ID", className: "" },
  { value: "Avatar", className: "" },
  { value: "Email", className: "" },
  { value: "Fullname", className: "" },
];

const Users = () => {
  const [page, setPage] = useState(1);
  const { data, error, loading } = useFetch(
    `https://reqres.in/api/users?page=${page}`
  );

  return (
    <div className="flex flex-col h-full">
      <HeadPage
        title={"Users"}
        breadcrumb={"Users"}
        actions={
          <button className="btn btn-square btn-primary btn-sm">+</button>
        }
      />

      <NoDataTable
        isLoading={loading}
        isError={error}
        isEmpty={data && data.data.length === 0}
        message="Tidak ada data"
      >
        {data && (
          <>
            <CustomTable
              column={COLUMN}
              rows={data.data.map((item, index) => {
                return [
                  {
                    title: "ID",
                    value: item.id,
                    className: "",
                  },
                  {
                    title: "Avatar",
                    value: (
                      <img
                        className="h-12 w-12 rounded-md object-cover"
                        src={item.avatar}
                        alt={item.first_name}
                      />
                    ),
                    className: "",
                  },
                  {
                    title: "Email",
                    value: item.email,
                    className: "",
                  },
                  {
                    title: "Fullname",
                    value: `${item.first_name} ${item.last_name}`,
                    className: "",
                  },
                ];
              })}
            />

            <CustomPagination
              page={page}
              setPage={setPage}
              showItem={data.data.length}
              total={data.total}
              limit={data.per_page}
            />
          </>
        )}
      </NoDataTable>
    </div>
  );
};

export default Users;
