import React from "react";
import {
  FaHome,
  FaCog,
  FaBell,
  FaHeart,
  FaClock,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar() {
  return (
    <aside className="  rounded-xl   bg-white shadow-md lg:rounded-xl fixed bottom-0 left-0 right-0 lg:static flex justify-between lg:flex-col items-center px-6 py-3 lg:p-4 z-50">
      {/* Top Icons */}
      <div className="flex lg:flex-col items-center space-x-6 lg:space-x-0 lg:space-y-6">
        <FaHome className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
        <FaBell className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
         <FaHeart className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
        <FaClock className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
      </div>

      {/* Divider */}
      <hr className="hidden lg:block my-6 w-10 border-t border-gray-300" />

      {/* Bottom Icons */}
      <div className="flex lg:flex-col items-center space-x-6 lg:space-x-0 lg:space-y-6">
       
        <FaCog className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
        <FaSignOutAlt className="text-2xl text-red-500 hover:text-red-700 cursor-pointer" />
      </div>
    </aside>
  );
}

export default Navbar;
