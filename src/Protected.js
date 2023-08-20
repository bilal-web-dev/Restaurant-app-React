import React from "react";
import { Route, Navigate } from "react-router-dom";

const Protected = ({ Component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("login") ? (
        <Cmp {...props} />
      ) : (
        <Navigate to="/login" />
      )
    }
  />
);

export default Protected;
