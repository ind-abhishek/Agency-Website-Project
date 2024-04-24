import React from "react";
import "../styles/Portfolio.css";

import { FaTrophy } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { SiTestinglibrary } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineEditLocation } from "react-icons/md";

const Portfolio = () => {
  return (
    <div>
      <div className="pageContainer text-white screen mx-auto max-w-screen-xl  ">
        <h3 className="head tracking-[.35em]">PORTFOLIO</h3>
        <h1 className="titel">Our Latest Work</h1>
        <div className="descContain">
          <h3 className="desc">
            Discover our freshest creations that showcase the power of design
            innovation and digital excellence. Explore our latest work and
            witness the impact we bring to every project
          </h3>
        </div>

        <div className="cardContain ">
          {/* card */}

          <div className="projectCard rounded-lg">
            <img
              className="project-image"
              src="https://cdn.dribbble.com/userupload/13217802/file/original-5d79d6d536841524fa97beb19de8ff48.png?crop=0x0-3201x2401&resize=400x300&vertical=center"
              alt="Project Image"
            />
            <div className="cardOverlay">
              <div className="overlay-content ">
                <a href="#" className="inline">
                  See Project <FaArrowRight className="inline" />
                </a>
              </div>
            </div>
          </div>

          <div className="projectCard rounded-lg">
            <img
              className="project-image"
              src="https://cdn.dribbble.com/userupload/14206534/file/original-4f402b9e37ae4086980b884929632313.png?resize=400x300&vertical=center"
              alt="Project Image"
            />
            <div className="cardOverlay">
              <div className="overlay-content">
                <a href="#" className="inline">
                  See Project <FaArrowRight className="inline" />
                </a>
              </div>
            </div>
          </div>

          <div className="projectCard rounded-lg">
            <img
              className="project-image"
              src="https://cdn.dribbble.com/userupload/13124712/file/original-a61847733df53a582d567ade3e80200f.jpeg?crop=0x0-4800x3600&resize=400x300&vertical=center"
              alt="Project Image"
            />
            <div className="cardOverlay">
              <div className="overlay-content">
                <a href="#" className="inline">
                  See Project <FaArrowRight className="inline" />
                </a>
              </div>
            </div>
          </div>

          <div className="projectCard rounded-lg">
            <img
              className="project-image"
              src="https://cdn.dribbble.com/userupload/14000097/file/original-0848113383fcfbef2b8d4d70ca0393e1.png?resize=400x300&vertical=center"
              alt="Project Image"
            />
            <div className="cardOverlay">
              <div className="overlay-content">
                <a href="#" className="inline">
                  See Project <FaArrowRight className="inline" />
                </a>
              </div>
            </div>
          </div>

          <div className="projectCard rounded-lg">
            <img
              className="project-image"
              src="https://cdn.dribbble.com/userupload/5999267/file/still-11c6aa9ded2f76db4b4072d4ae7def8a.png?resize=400x300&vertical=center"
              alt="Project Image"
            />
            <div className="cardOverlay">
              <div className="overlay-content">
                <a href="#" className="inline">
                  See Project <FaArrowRight className="inline" />
                </a>
              </div>
            </div>
          </div>

          <div className="projectCard rounded-lg">
            <img
              className="project-image"
              src="https://cdn.dribbble.com/userupload/2651410/file/still-aaab38f67d486caba4fcacfb6bac8b89.png?resize=400x300&vertical=center"
              alt="Project Image"
            />
            <div className="cardOverlay">
              <div className="overlay-content">
                <a href="#" className="inline">
                  See Project <FaArrowRight className="inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
