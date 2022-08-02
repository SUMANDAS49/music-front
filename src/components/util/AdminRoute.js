import React from "react";
import { Navigate } from "react-router-dom";
import { isAdmin, isAuthenticated } from "../auth/AuthHelper";

const AdminRoute = ({ children, redirectTo }) => {
  return isAuthenticated() && isAdmin() ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default AdminRoute;
