import React from "react";
import { Navigate } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <div className="sidebar"></div>;
};

export default Sidebar;
