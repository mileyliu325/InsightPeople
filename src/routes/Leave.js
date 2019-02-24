import React from "react";
import { Route } from "react-router-dom";

import LeaveList from "../pages/LeaveListPage";
import AddLeave from "../pages/AddLeavePage";

const Leave = ({ match }) => (
  <React.Fragment>
    <Route path={`${match.url}/leaveList`} component={LeaveList} />
    <Route path={`${match.url}/addLeave`} component={AddLeave} />
  </React.Fragment>
);

export default Leave;
