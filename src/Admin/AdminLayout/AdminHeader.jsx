import React from "react";
import { Bell, ChevronDown, Search } from "react-feather";
import logo from "../../assets/images/logo/logo.png";

const AdminHeader = () => {
  return (
    <div>
      {" "}
      <header className="bg-white border-b border-gray-200 flex items-center justify-between p-4">
        <div className="md:hidden">
          <div className="text-2xl font-bold p-4 mx-auto w-fit">
            <img src={logo} alt="logo" className="w-[4.5rem] sm:w-[6rem]" />
          </div>
        </div>
        <div className="flex items-center ml-auto">
          <button className="p-2 text-gray-500 focus:outline-none">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-500 focus:outline-none">
            <Bell size={20} />
          </button>
          <button className="ml-2 flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm">
            <span>ADMIN</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default AdminHeader;
