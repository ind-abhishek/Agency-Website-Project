import React from "react";
import "../styles/Footer.css";

import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <img src="\public\zenLogo.png" alt="" />
          </div>

          <div className="footer-col">
            <h4>Lers connect</h4>
            <ul>
              <li>
                <a href="#">4517 Washington Ave. Manchester, Kentucky 39495</a>
              </li>
              <li>
                <a href="#">zenset.ino@gmail.com</a>
              </li>
              <li>
                <a href="#">+91 9891075410</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">pricing</a>
              </li>
              <li>
                <a href="#">Why Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <AiFillInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
