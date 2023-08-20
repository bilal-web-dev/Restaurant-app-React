import React from "react";
import { Navigate } from "react-router-dom";

const Protect = (props) => {
  const { Component } = props;

  return localStorage.getItem("login") ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
};

export default Protect;
