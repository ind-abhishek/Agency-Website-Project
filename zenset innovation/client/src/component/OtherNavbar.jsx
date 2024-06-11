import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/Navbar.css";

const OtherNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <nav className={`navbar-container ${menuOpen ? "fullscreen" : ""}`}>
      <div className="NavItemsContainer max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="logoContain">
          <Link
            to="Hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="logo-link"
          >
            <img src="/cyberZet.png" className="cyberzet" alt="Cyberzet-Logo" />
          </Link>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center letTalk"
          >
            Let's Talk <MdArrowOutward className="inline" />
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className=" inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-black-100 focus:outline-none focus:ring-2 dark:text-gray-100 dark:focus:ring-indigo-700"
            aria-controls="navbar-cta"
            aria-expanded={menuOpen}
          >
            <RxHamburgerMenu className="dropDown" />
          </button>
        </div>

        {/* Item */}
        <div
          className={`items-center justify-center ${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="NavItemContainer flex flex-col items-center justify-center font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">Blogs</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default OtherNavbar;
