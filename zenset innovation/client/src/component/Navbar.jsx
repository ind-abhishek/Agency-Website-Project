import React, { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { MdArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import "../styles/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Hero");

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 0) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    Events.scrollEvent.register("begin", (to) => {
      setActiveLink(to);
    });

    Events.scrollEvent.register("end", (to) => {
      setActiveLink(to);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav className="navbar-container">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="logoContain">
          <Link
            to="Hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="logo-link"
          >
            <img src="/zenLogo.png" className="zenlogo" alt="Zenset Logo" />
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
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <RxHamburgerMenu className="dropDown" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li className={`nav-item ${activeLink === "Hero" ? "active" : ""}`}>
              <Link
                to="Hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
              >
                Home
              </Link>
            </li>

            <li
              className={`nav-item ${activeLink === "Service" ? "active" : ""}`}
            >
              <Link
                to="Service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
              >
                Service
              </Link>
            </li>

            <li
              className={`nav-item ${
                activeLink === "Portfolio" ? "active" : ""
              }`}
            >
              <Link
                to="Portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
              >
                Portfolio
              </Link>
            </li>

            <li
              className={`nav-item ${activeLink === "Pricing" ? "active" : ""}`}
            >
              <Link
                to="Pricing"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
              >
                Pricing
              </Link>
            </li>

            <li className={`nav-item ${activeLink === "faq" ? "active" : ""}`}>
              <Link
                to="FAQ"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
