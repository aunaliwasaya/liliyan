import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import openclose from "../assets/openclose.svg";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoveLeft, selectMoveLeft } from '../store/sidebarSlice';
import lightlogo from "../assets/lightlogo.svg";

const Layout = () => {
  const dispatch = useDispatch();
  const moveLeft = useSelector(selectMoveLeft);

  const handleClick = () => {
    dispatch(toggleMoveLeft());
  };

  return (
    <div className="flex screensize relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* The Outlet renders child routes */}
        <div className={`p-4 transition-all duration-1000 ease-in-out ${moveLeft ? "ml-4" : "xl:ml-60 2xl:ml-80"}`}>
          <Outlet />
        </div>

        {/* Toggle Button - Visible with animation */}
        <div
          onClick={handleClick}
          className={`absolute cursor-pointer w-[40px] flex rotate-180 items-center justify-center z-10 top-[13px] py-1 bg-slate-800 rounded-[10px] transition-all duration-500 ease-in-out ml-1 hover:scale-110
            ${moveLeft ? "opacity-100 scale-100 rotate-180" : "opacity-0 scale-0 rotate-0 "}`}
        >
          <img src={openclose} alt="toggle" />
        </div>

        {/* Overlay for small screens */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 flex flex-col gap-16 items-center justify-center text-white p-4 transition-all duration-500 ease-in-out 
            ${window.innerWidth < 1280 ? "block" : "hidden"}`}
        >
           <img src={lightlogo} alt="logo" />
          <p className="text-center text-lg">For a better user experience, please use a screen size greater than 1280px (laptops or larger).</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
