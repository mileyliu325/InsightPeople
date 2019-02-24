import React from "react";
import { Route } from "react-router-dom";

import MyApprovals from "../pages/MyApprovalsPage";
import MyRequests from "../pages/MyRequestsPage";

const Leave = ({ match }) => (
  <React.Fragment>
    <Route path={`${match.url}/myApprovals`} component={MyApprovals} />
    <Route path={`${match.url}/myRequests`} component={MyRequests} />
  </React.Fragment>
);

export default Leave;
