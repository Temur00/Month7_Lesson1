import React from "react";
import { Navigate } from "react-router-dom";

const Sidebar = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Sidebar</h1>
    </div>
  );
};

export default Sidebar;
