import React from "react";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
     <Navbar bg="light" expand="lg">
    <Navbar.Brand href="">Insight People</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="">
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link href="" styled>
          <Link to="/Schedule">Schedule</Link>
        </Nav.Link>
        <Nav.Link href="">
          <Link to="/People">People</Link>
        </Nav.Link>
        <Nav.Link href="">
          <Link to="/Setting">Setting</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

);

export default Header;
