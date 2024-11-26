import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* The Outlet renders child routes */}
        <div className="p-4 ml-80">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
