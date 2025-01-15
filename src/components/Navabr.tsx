import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-200">
            MyApp
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-gray-200" : "text-white"
              } hover:text-gray-200`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`${
                location.pathname === "/login" ? "text-gray-200" : "text-white"
              } hover:text-gray-200`}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
