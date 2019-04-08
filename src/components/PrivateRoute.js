import React, { Component } from "react";
//import AuthService from "./Services/AuthService";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        auth === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/SignIn", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
