import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = ({ user }) => {
  return (
    <div className="header">
      <nav>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/teachers">Teachers</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/students">Students</NavLink>
        </div>
        {user ? <span>{user}</span> : <NavLink to="/login">Login</NavLink>}
      </nav>
    </div>
  );
};

export default Header;
