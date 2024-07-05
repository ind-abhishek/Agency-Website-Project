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
        <img src="/cyberZet.png" alt="Cyberzet-Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h3>Office Address</h3>
        <p>A12, Hazipur, Sec 104,</p>
        <p>Noida, Uttar Pradash, </p>
        <p>201301, India</p>
      </div>

      <div className="footer-column">
        <h3>Nagivation</h3>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <a target="blank" href="https://blog.cyberzet.com/">
              Blogs
            </a>
          </li>
          <li>
            <a target="blank" href="https://forms.gle/16jMW8rvJhojEZwF6">
              Careers
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Links</h3>
        <ul>
          <li>
            <RouterLink to="/refund">Refund and Cancellation</RouterLink>
          </li>

          <li>
            <RouterLink to="/Support">Support</RouterLink>
          </li>

          <li>
            <RouterLink to="/Policy">Privacy and Policy</RouterLink>
          </li>

          <li>
            <RouterLink to="/Terms">Terms and Conditions</RouterLink>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/cyberzet.solutions" target="blank">
            <FaFacebook className="socialIcon" />
          </a>

          {/* <a href="https://x.com/CyberzetDigital" target="blank">
            <FaTwitter className="socialIcon" />
          </a> */}

          <a href="https://www.instagram.com/cyberzet.solutions" target="blank">
            <FaInstagram className="socialIcon" />
          </a>
          <a
            href="https://www.linkedin.com/company/cyberzet-solutions"
            target="blank"
          >
            <FaLinkedin className="socialIcon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
