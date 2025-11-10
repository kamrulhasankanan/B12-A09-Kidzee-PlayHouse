import React from "react";
import title from "../assets/title.png";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center mt-5">
      <img className="w-96" src={title} alt="title" />
      <p className="text-sm text-gray-400">A Happy Place for Little Ones</p>
    </header>
  );
};

export default Header;
