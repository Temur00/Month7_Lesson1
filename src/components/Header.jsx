import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <div>
      <nav className="p-[33px] bg-[#c1c1c1]">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/students">Students</NavLink>
        {user ? <span>{user}</span> : <NavLink to="/login">Login</NavLink>}
      </nav>
    </div>
  );
};

export default Header;
