import React from "react";
import logo from "../assets/clean-auth-logo.svg";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="w-full h-16 bg-blue-100 shadow-lg shadow-blue-100">
          <div className="w-full h-full flex justify-evenly items-center">
            {/* LEFT - LOGO */}
            <div className="">
              <img
                src={logo}
                className="w-12 rounded-full shadow-blue-300 shadow-sm"
                alt="AUTH LOGO"
              />
            </div>
            {/* CENTER - TABS */}
            <div className="text-blue-600 font-semibold">
              <ul className="flex justify-center items-center gap-4">
                <li>Home</li>
                <li>Features</li>
                <li>About</li>
              </ul>
            </div>
            {/* RIGHT - LOGOUT */}
            <button className="border-l-4 border-blue-400 p-2 rounded-xl shadow-sm bg-blue-50">
              <MdLogout size={28} className="text-blue-500" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
