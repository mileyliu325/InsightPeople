import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/NavRoutes";
class App extends Component {
  render() {
    return (
      // <div >
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
