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

        <div className="cardContain gap-5">
          {/* card */}

          <div className="portCard flex">
            <a href="#">
              <img
                className="portImage rounded-xl"
                src="https://cdn.dribbble.com/userupload/3748038/file/still-2f97314e57181874b88fea72f13f0017.png?resize=400x300&vertical=center"
                alt=""
              />
            </a>
            <div className="cardOverlay ">
              <div>
                <p className="inline">See Project </p>
                <FaArrowRight className="inline" />
              </div>
            </div>
          </div>

          <div>
            <a href="#">
              <img
                src="https://cdn.dribbble.com/userupload/3844267/file/still-127c75a6ee5c1de8e2dcae6073a7f7d1.png?resize=400x300&vertical=center"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="https://cdn.dribbble.com/users/1656786/screenshots/16690195/media/38174e2dd115a20f0a6fbe7f409058c6.png?resize=1000x750&vertical=center"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="https://cdn.dribbble.com/users/1656786/screenshots/16690195/media/38174e2dd115a20f0a6fbe7f409058c6.png?resize=1000x750&vertical=center"
                alt=""
              />
            </a>
          </div>

          <div>
            <a href="#">
              <img
                src="https://cdn.dribbble.com/users/1656786/screenshots/16690195/media/38174e2dd115a20f0a6fbe7f409058c6.png?resize=1000x750&vertical=center"
                alt=""
              />
            </a>
          </div>

          <div>
            <a href="#">
              <img
                src="https://cdn.dribbble.com/users/1656786/screenshots/16690195/media/38174e2dd115a20f0a6fbe7f409058c6.png?resize=1000x750&vertical=center"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
