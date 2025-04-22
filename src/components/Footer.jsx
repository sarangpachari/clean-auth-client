import React from "react";
import logo from "../assets/clean-auth-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="h-96 bg-red-50 p-6">
        <section className="w-full h-full">
          <div className="w-full h-full">
            <div className="flex md:flex-row flex-col justify-center items-center md:gap-0 gap-12 md:justify-evenly w-full h-full">
              <div>
                <img src={logo} className="w-24" alt="CLEAN AUTH LOGO" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-6xl text-red-800 font-bold"><span className="text-gray-800">CLEAN</span> AUTH</h1>
              </div>
              <div>
                <ul className="text-red-800/70 flex md:flex-col flex-row gap-4">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
