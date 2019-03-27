import React from "react";
import ReactDOM from "react-dom";
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
//import Header from "./components/Header";

import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Setting from "../pages/Setting.jsx";
import Schedule from "../pages/Schedule.jsx";
//import People from "../pages/People.jsx";
import Leave from "./Leave";
import SignIn from "../pages/SignInPage";
import LogInPage from "../pages/LoginPage";
import Approval from "./Approval";

import NoMatch from "../pages/NoMatch";

const SignInContainer = () => (
  <div>
    <Route exact path="/" render={() => <Redirect to="/signIn" />} />
    <Route path="/signIn" component={SignIn} />
  </div>
);

const DefaultContainer = () => (
  <div>
    <NavBar />
    <Route exact path="/signIn" component={SignIn} />
    <Route path="/" component={Home} />
    <Switch>
      <Route exact path="/logIn" component={LogInPage} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/leave" component={Leave} />
      <Route path="/approval" component={Approval} />
      <Route path="/settings" component={Setting} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/(signIn)" component={SignInContainer} />
      <Route component={DefaultContainer} />
    </Switch>
  </Router>
);

const RoutesOld = () => (
  <Router>
    <React.Fragment>
      <NavBar />
      <Route exact path="/signIn" component={SignIn} />
      <Route path="/" component={Home} />
      {/* <Redirect to="/schedule" /> */}
      <Switch>
        <Route exact path="/logIn" component={LogInPage} />
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
  </Router>
);

export default Routes;
