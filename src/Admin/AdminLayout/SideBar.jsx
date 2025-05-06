import React from "react";
import { FiChevronDown, FiHome, FiPackage, FiClipboard } from "react-icons/fi";
import logo from "../../assets/images/logo/logo.png";

const SideBar = () => {
  return (
    <div>
      <div className="w-64 bg-white border-r border-gray-200 hidden md:block h-screen">
        <div className="text-2xl font-bold p-4 mx-auto w-fit">
          <img src={logo} alt="logo" className="w-[4.5rem] sm:w-[6rem]" />
        </div>

        <div className="p-4">
          <div className="bg-primary text-white rounded-md p-3 mb-4 flex items-center">
            <FiHome size={18} className="mr-2" />
            <span className="font-medium">DASHBOARD</span>
          </div>
          <div className="text-gray-700 p-3 mb-2 flex items-center">
            <FiPackage size={20} className="mr-2" />
            <span>ALL PRODUCTS</span>
          </div>
          <div className="text-gray-700 p-3 mb-2 flex items-center">
            <FiClipboard size={20} className="mr-2" />
            <span>ORDER LIST</span>
          </div>
          <div className="text-gray-700 p-3 mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <span>Categories</span>
            </div>
            <FiChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
