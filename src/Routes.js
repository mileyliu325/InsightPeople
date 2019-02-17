import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Setting from "./pages/Setting";
import Schedule from "./pages/Schedule.jsx";
import People from "./pages/People.jsx";


const Routes = () =>(
      <React.Fragment>
          
          <Route path="/" component={Header} />
          <Route path="/Setting" component={Setting} />
          <Route path="/Schedule" component={Schedule} />
          <Route path="/People" component={People} />
       
      </React.Fragment>
)
  
export default Routes;