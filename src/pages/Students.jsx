import React from "react";
import { Navigate } from "react-router-dom";

const Students = () => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Students</h1>
    </div>
  );
};

export default Students;
