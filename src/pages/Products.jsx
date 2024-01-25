import React from "react";
import { Navigate } from "react-router-dom";

const Products = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
