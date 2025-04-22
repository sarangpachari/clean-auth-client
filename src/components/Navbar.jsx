import React from "react";
import logo from "../assets/clean-auth-logo.png";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header className="w-full flex justify-center fixed top-0 mt-5">
        <nav className="sm:w-3/4 h-max bg-red-100 p-4 rounded-2xl">
          <div className="w-full h-full flex justify-between md:gap-24 gap-4 items-center">
            {/* LEFT - LOGO */}
            <div className="">
              <img
                src={logo}
                className="w-12 rounded-full shadow-red-300 shadow-sm"
                alt="AUTH LOGO"
              />
            </div>
            {/* CENTER - TABS */}
            <div className="text-red-600 font-semibold">
              <ul className="flex justify-center items-center gap-4">
                <li>Home</li>
                <li>Features</li>
                <li>About</li>
              </ul>
            </div>
            {/* RIGHT - LOGOUT */}
            <button className="border-l-4 border-red-400 p-2 rounded-xl shadow-sm bg-red-50">
              <MdLogout size={28} className="text-red-500" />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
