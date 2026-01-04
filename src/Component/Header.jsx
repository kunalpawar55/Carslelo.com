import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./ImagesFolder/Carslelo.jpeg"; 

export default function Header() {
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition 
     ${isActive ? "text-red-500" : "text-gray-300 hover:text-red-400"}`;

  return (
    <header className="bg-[#0B0B0B] sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img src={logo} alt="CarsLelo" className="h-9" />
          <span className="text-white text-xl font-bold tracking-wide">
            CarsLelo
          </span>
        </div>

        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-6">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/login" className={navLinkClass}>Login</NavLink></li>
            <li><NavLink to="/Admin" className={navLinkClass}>Admin</NavLink></li>
            <li><NavLink to="/AddCars" className={navLinkClass}>Add Cars</NavLink></li>

            <li>
              <NavLink
                to="/registration"
                className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-500 hover:text-white transition"
              >
                Register
              </NavLink>
            </li>
            <li    className="bg-white text-black px-4 py-2 rounded-md text-sm cursor-pointer font-semibold hover:bg-red-500 hover:text-white transition"
            
            onClick={()=>localStorage.removeItem("user")}
            
            >
              Logout
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
