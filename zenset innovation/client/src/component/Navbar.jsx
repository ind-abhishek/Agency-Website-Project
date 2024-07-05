import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { MdArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/Navbar.css";
import "../styles/ThemeToggle.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Function to detect system theme preference
  const detectSystemTheme = () => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  };

  // Apply theme based on darkMode state
  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.remove("light-mode");
      rootElement.classList.add("dark-mode");
    } else {
      rootElement.classList.remove("dark-mode");
      rootElement.classList.add("light-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    detectSystemTheme(); // Detect system theme on component mount
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const handleThemeChange = () => {
    setDarkMode((prevMode) => !prevMode);
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

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <button
            type="button"
            className="text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center letTalk"
          >
            Let's Talk <MdArrowOutward className="inline" />
          </button>

          <button
            onClick={toggleMenu}
            type="button"
            className=" inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-black-100 focus:outline-none focus:ring-2 dark:text-gray-100 dark:focus:ring-indigo-700 dropDowmManu"
            aria-controls="navbar-cta"
            aria-expanded={menuOpen}
          >
            <RxHamburgerMenu className="dropDown" />
          </button>
        </div>

        <div
          className={`items-center justify-center ${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="NavItemContainer flex flex-col items-center justify-center font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li className="nav-item">
              <Link
                to="Hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent text-xs"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                onClick={() => setMenuOpen(false)}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Pricing"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="FAQ"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>

            <li>
              {/* Theme Switcher */}
              <label className="theme-switcher">
                <input
                  className="toggle-checkbox"
                  type="checkbox"
                  checked={darkMode}
                  onChange={handleThemeChange}
                />
                <div className="toggle-slot">
                  <div className="sun-icon-wrapper">
                    <div
                      className="iconify sun-icon"
                      data-icon="feather-sun"
                      data-inline="false"
                    ></div>
                  </div>
                  <div className="toggle-button"></div>
                  <div className="moon-icon-wrapper">
                    <div
                      className="iconify moon-icon"
                      data-icon="feather-moon"
                      data-inline="false"
                    ></div>
                  </div>
                </div>
              </label>
              {/* Theme Switcher End*/}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
