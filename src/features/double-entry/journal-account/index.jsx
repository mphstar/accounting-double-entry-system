import React from "react";
import HeadPage from "../../../components/HeadPage/HeadPage";
import CustomTable from "../../../components/TablePage/CustomTable";
import { JOURNALCOLUMN, JOURNALROW } from "./dummyData";
import Paginate from "../../../components/Paginate/Paginate";

const JournalAccount = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Journal Entry"}
        breadcrumb={"Journal Entry"}
        actions={
          <button className="btn btn-square btn-primary btn-sm">+</button>
        }
      />

      <CustomTable column={JOURNALCOLUMN} rows={JOURNALROW} />

      <Paginate showData={JOURNALROW.length} totalData={JOURNALROW.length} />
    </div>
  );
};

export default JournalAccount;
