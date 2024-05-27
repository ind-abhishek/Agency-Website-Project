import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
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
        <h3>Links</h3>
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
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
          <a href="#">
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
