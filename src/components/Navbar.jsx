import React from "react";
import { NavLink } from "react-router";
import userIcon from "../assets/userIcon.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-around items-center w-11/12 mx-auto gap-5">
      <div></div>
      <div className="text-purple-950 font-semibold">
        <NavLink className={"mr-8"}>Kidzee PH</NavLink>
        <NavLink to="/" className={"mr-8"}>
          Home
        </NavLink>
        <NavLink to="/profile" className={"mr-8"}>
          My Profile
        </NavLink>
      </div>
      <div className="flex items-center gap-1">
        <img className="w-10" src={userIcon} alt="" />
        <button className="btn btn-warning w-full hover:btn-success">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
