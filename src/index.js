import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Setting from "./pages/Setting.jsx";
import Schedule from "./pages/Schedule.jsx";
import People from "./pages/People.jsx";
import App from "./App";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const routing = (
  <Router>
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="">Insight People</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" >
            <Nav.Link href="">
              {" "}
              <Link to="/">Home</Link>{" "}
            </Nav.Link>
            <Nav.Link href="" styled>
              {" "}
              <Link to="/Schedule">Schedule</Link>
            </Nav.Link>
            <Nav.Link href="">
              {" "}
              <Link to="/People">People</Link>
            </Nav.Link>
            <Nav.Link href="">
              {" "}
              <Link to="/Setting">Setting</Link>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/" component={App} />
      <Route path="/Setting" component={Setting} />
      <Route path="/Schedule" component={Schedule} />
      <Route path="/People" component={People} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
