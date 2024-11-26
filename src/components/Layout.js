import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import openclose from "../assets/openclose.svg";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoveLeft, selectMoveLeft } from '../store/sidebarSlice';

const Layout = () => {
  const dispatch = useDispatch();
  const moveLeft = useSelector(selectMoveLeft);

  const handleClick = () => {
    dispatch(toggleMoveLeft());
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* The Outlet renders child routes */}
        <div className={`p-4 ${moveLeft ? "ml-10" : "ml-80"}`}>
          <Outlet />
        </div>

        {/* Toggle Button - Visible with animation */}
        <div
          onClick={handleClick}
          className={`absolute cursor-pointer w-[40px] flex items-center justify-center z-10 top-[150px] py-1 bg-slate-800 rounded-[10px] transition-all duration-500 ease-in-out 
            ${moveLeft ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        >
          <img src={openclose} alt="toggle" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
