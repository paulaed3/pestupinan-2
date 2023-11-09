import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cartwidget from "../common/cartwidget/Cartwidget";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-indigo-400">
      <nav className="py-4 flex justify-between items-center p-3">
        <Link className="text-white font-bold text-2xl" to="/">
          NOVATECH
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <ul
          id="mobile-menu"
          className={`text-white ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row gap-4 md:gap-12 ml-auto`}
        >
          <li>
            <Link to="/category/Computadoras">Computadoras</Link>
          </li>
          <li>
            <Link to="/category/Teléfonos">Teléfonos</Link>
          </li>
          <li>
            <Link to="/">Todas</Link>
          </li>
        </ul>

        {/* Cart */}
        <Cartwidget />
      </nav>
    </div>
  );
}

export default Navbar;
