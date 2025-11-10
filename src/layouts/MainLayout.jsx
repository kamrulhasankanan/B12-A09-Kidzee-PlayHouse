import React from "react";


import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import RightAside from "../components/RightAside";

const MainLayout = () => {
  return (
    <div className="space-y-8">
      <Header></Header>
      <Navbar></Navbar>
      <Slider></Slider>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-10">
        <section className="col-span-9">
            <Outlet></Outlet>
        </section>
        <section className="col-span-3">
            <RightAside></RightAside>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
