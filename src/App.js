import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes"
class App extends Component {
  render() {
    return (
      // <div >
      <Router>
        <div>
        {/* <Header/> */}
        <Routes/>

        </div>
        {/* {/* <Route exact path="/" component={Header} />
          <Route path="/Setting" component={Setting} />
          <Route path="/Schedule" component={Schedule} />
          <Route path="/People" component={People} /> */}
      </Router> 
  
    
    );
  }
}

export default App;
