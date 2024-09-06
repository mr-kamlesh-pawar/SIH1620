import React from "react";
import { Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";

const Header = () => {
  return (
    <header className=" sticky top-0 w-full left-0 z-50 bg-white flex justify-between items-center py-4 px-8 shadow-md">
      <div className="flex items-center">
        <img
          src="https://romaletodiani.github.io/Hospital-Website/assets/Logo-53d3708b.png"
          width="40px"
          height="40px"
          alt="Your Health Logo"
        />
        <h1 className="ml-3 text-2xl font-extrabold tracking-tight text-blue-900">
          PatientFirst
        </h1>
      </div>
      <div className="flex space-x-6">
        <Link to="/">
          <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 transition duration-300">
            Home
          </button>
        </Link>
        <Link to="/specialists">
          <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 transition duration-300">
            Specialists
          </button>
        </Link>
        <Link to="/services">
          <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 transition duration-300">
            Services
          </button>
        </Link>
        <Link to="/contactus">
          <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 transition duration-300">
            Contact Us
          </button>
        </Link>
        <Link to="/login/signup">
          <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-blue-600 transition duration-300">
            Login/SignUp
          </button>
        </Link>
        <Link to="/emergency">
          <button className="w-[150px] px-4 py-2 rounded-full bg-red-500 text-white font-semibold text-xl hover:bg-red-600 transition duration-300 shadow-lg">
            Emergency
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
