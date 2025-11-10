import React from "react";
import title from "../assets/title.png";
import userIcon from "../assets/userIcon.png";
import { NavLink } from "react-router";

const MainLayout = () => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col justify-center items-center mt-5">
        <img className="w-96" src={title} alt="title" />
        <p className="text-sm text-gray-400">A Happy Place for Little Ones</p>
      </header>
      <nav className="flex flex-col md:flex-row justify-around items-center w-11/12 mx-auto gap-5">
        <div></div>
        <div className="text-purple-950 font-semibold">
          <NavLink className={"mr-8"}>Kidzee PH</NavLink>
          <NavLink to="/" className={"mr-8"}>Home</NavLink>
          <NavLink to="/profile" className={"mr-8"}>My Profile</NavLink>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-10" src={userIcon} alt="" />
          <button className="btn btn-warning w-full hover:btn-success">Login</button>
        </div>
      </nav>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
