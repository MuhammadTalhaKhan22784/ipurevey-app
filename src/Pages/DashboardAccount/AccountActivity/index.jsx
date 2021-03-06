import React, { useEffect, useState } from "react";
import MiniDrawer from "../Sidebar";
import ShowDetail from "./ShowDetail";
import Table from "./Table";
import { accountActivityTable } from "../data";
import "./style.css";
import MobViewActivityCard from "./MobViewActivityCard";
import BackHeader from "../BackHeader";

const AccountActivity = () => {
  const [showDetail, setShowDetail] = useState([]);
  const selectRow = (id) => {
    const filterRowData = accountActivityTable.body.filter(
      (val) => val.id === id
    );
    setShowDetail(filterRowData[0]);
  };
  useEffect(() => {
    if (!showDetail.length) {
      setShowDetail(accountActivityTable.body[0]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="acc_activity_container">
      <div className="acc_activity_md">
        <div className="acc_activity_sd">
          <div className="db_left_content">
            <MiniDrawer />
          </div>
          <div className="acc_activity_right_md">
            <BackHeader head="account activity" link="/dashboard" />
            <h5 className="acc_activity_head">ACCOUNT ACTIVITY</h5>
            <div className="acc_activity_right_content">
              <div className="acc_active_table_md">
                <Table
                  data={accountActivityTable}
                  tbclassName="tb_page_table acc_tble"
                  onClick={selectRow}
                />
              </div>
              <div className="sDetail_container">
                <ShowDetail detailData={showDetail} reportBtn />
              </div>
            </div>
            <div className="mob_view_activity_card">
              <MobViewActivityCard data={accountActivityTable.body} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActivity;
