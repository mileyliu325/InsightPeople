import React from "react";
import ReactDOM from "react-dom";
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

import PrivateRoute from "../components/PrivateRoute";
import NavBar from "../components/NavBar";
import Setting from "../pages/Setting.jsx";
import Schedule from "../pages/Schedule.jsx";
import Leave from "./Leave";
import SignIn from "../pages/SignInPage";
import Approval from "./Approval";

import NoMatch from "../pages/NoMatch";

const SignInContainer = () => (
  <div>
    <Route path="/signIn" component={SignIn} />
  </div>
);
/* 
Need a default home page or not?
currently using schedule */
const StaffOnlyContainer = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={Schedule} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/leave" component={Leave} />
      <Route path="/approval" component={Approval} />
      <Route path="/settings" component={Setting} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

//auth status currently change by hand LOL
const Routes = () => (
  <Router>
    <Switch>
      <Route path="/(signIn)" component={SignInContainer} />
      <PrivateRoute auth={true} component={StaffOnlyContainer} />
    </Switch>
  </Router>
);

export default Routes;
