import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../Utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogin() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;
