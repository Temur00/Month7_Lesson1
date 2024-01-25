import React from "react";
import { Navigate } from "react-router-dom";

const Home = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
