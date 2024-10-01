import React from "react";
import HeadPage from "../../../../components/HeadPage/HeadPage";
import CustomTable from "../../../../components/TablePage/CustomTable";
import { JOURNALCOLUMN, JOURNALROW } from "./dummyData";
import Paginate from "../../../../components/Paginate/Paginate";
import { Link } from "react-router-dom";

const JournalAccount = () => {
  return (
    <div className="flex flex-col">
      <HeadPage
        title={"Manage Journal Entry"}
        breadcrumb={"Journal Entry"}
        actions={
          <Link to={'/app/company/double-entry/journal-account/create'}>
            <button className="btn btn-square btn-primary btn-sm">+</button>
          </Link>
        }
      />

      <CustomTable column={JOURNALCOLUMN} rows={JOURNALROW} />

      <Paginate showData={JOURNALROW.length} totalData={JOURNALROW.length} />
    </div>
  );
};

export default JournalAccount;
