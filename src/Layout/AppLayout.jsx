import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-[60px] md:pt-[116px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
