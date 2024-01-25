import React from "react";
import { Navigate } from "react-router-dom";

const Sidebar = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <div>Sidebar</div>;
};

export default Sidebar;
