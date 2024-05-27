import "../styles/Footer.css";
import React, { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
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
    <footer className="footer">
      <div className="footer-column">
        <img src="/zenLogo.png" alt="Brand Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h3>Office Address</h3>
        <p>1234 Street Name</p>
        <p>City, State, Zip</p>
        <p>Country</p>
      </div>
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul>
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
            className={`nav-item ${activeLink === "Portfolio" ? "active" : ""}`}
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
          <li className={`nav-item ${activeLink === "FAQ" ? "active" : ""}`}>
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
      <div className="footer-column">
        <h3>Links</h3>
        <ul>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="www.goggle.com">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
