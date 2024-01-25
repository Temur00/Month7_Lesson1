import React from "react";
import { Navigate } from "react-router-dom";

const Teachers = () => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <h1>Teachers</h1>
    </div>
  );
};

export default Teachers;
