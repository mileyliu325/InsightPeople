import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
//import Header from "./components/Header";

import Navbar from "../components/NavBar";
import Setting from "../pages/Setting.jsx";
import Schedule from "../pages/Schedule.jsx";
//import People from "../pages/People.jsx";
import Leave from "./Leave";
import SignIn from "../pages/SignInPage";
import LogInPage from "../pages/LoginPage";
import Approval from "./Approval";

import NoMatch from "../pages/NoMatch";

const Routes = () => (
  <React.Fragment>
    <Route path="/" component={Navbar} />
    <Switch>
      <Route exact path="/signIn" component={SignIn} />
      <Route path="/logIn" component={LogInPage} />
      <Route path="/schedule" component={Schedule} />
      {/*       <Route
        path="/leave"
        render={({ match: { url } }) => (
          <div>
            <Route path={`${url}/leaveList`} component={LeaveList} />
            <Route path={`${url}/addLeave`} component={AddLeave} />
          </div>
        )}
      /> */}
      <Route path="/leave" component={Leave} />
      <Route path="/approval" component={Approval} />
      <Route path="/settings" component={Setting} />
      <Route component={NoMatch} />
    </Switch>
  </React.Fragment>
);

export default Routes;
