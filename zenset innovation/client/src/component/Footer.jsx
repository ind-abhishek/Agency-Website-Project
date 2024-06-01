import "../styles/Footer.css";
import React, { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom

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
          {/* Modify the links to use RouterLink */}
          <li
            className={`nav-item ${activeLink === "Service" ? "active" : ""}`}
          >
            <RouterLink
              to="/service"
              className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
            >
              Service
            </RouterLink>
          </li>
          <li
            className={`nav-item ${activeLink === "Portfolio" ? "active" : ""}`}
          >
            <RouterLink
              to="/portfolio"
              className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
            >
              Portfolio
            </RouterLink>
          </li>
          <li
            className={`nav-item ${activeLink === "Pricing" ? "active" : ""}`}
          >
            <RouterLink
              to="/pricing"
              className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
            >
              Pricing
            </RouterLink>
          </li>
          <li className={`nav-item ${activeLink === "FAQ" ? "active" : ""}`}>
            <RouterLink
              to="/faq"
              className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
            >
              FAQ
            </RouterLink>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Links</h3>
        <ul>
          <li>
            <RouterLink to="/blog">Blog</RouterLink>
          </li>
          <li>
            <RouterLink to="/careers">Careers</RouterLink>
          </li>
          <li>
            <RouterLink to="/refund">Refund & Cancellation</RouterLink>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/cyberzet.solutions" target="blank">
            <FaFacebook />
          </a>
          <a href="https://x.com/CyberzetDigital" target="blank">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/cyberzet.solutions" target="blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/cyberzet-solutions"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
