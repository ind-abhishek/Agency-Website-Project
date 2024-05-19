import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import "../styles/Navbar.css"; // Make sure this path is correct

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar-container">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="logoContain">
            <Link to="/" className="logo-link">
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
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="../screen/Whyus.jsx"
                  className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                  aria-current="page"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  to="../screen/CaseStudy.jsx"
                  className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="../screen/FAQ.jsx"
                  className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Define your Routes here */}
      <Routes>
        <Route path="../screen/Whyus" element={<WhyUs />} />
        <Route path="../screen/CaseStudy.jsx" element={<CaseStudy />} />
        <Route path="#" element={<Testimonials />} />
        <Route path="../screen/FAQ.jsx" element={<FAQ />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
