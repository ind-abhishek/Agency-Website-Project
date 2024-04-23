import React from "react";
import "../styles/Service.css";

import { FaTrophy } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { SiTestinglibrary } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineEditLocation } from "react-icons/md";

const Service = () => {
  return (
    <div className="pageContainer text-white screen mx-auto max-w-screen-xl  ">
      <h3 className="head tracking-[.35em]">SERVICE</h3>
      <h1 className="titel">Exceeding Expectations</h1>
      <div className="descContain">
        <h3 className="desc">
          We're not just another agency; we're your path to exceptional web
          projects.
        </h3>
      </div>
      <div className="cardContain gap-5">
        {/* card */}

        <div className="servCard rounded-lg mt-5 ">
          <div className="servLogo rounded-md">
            <FaTrophy className="logo" />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">
            Expertise in Web Development
          </h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div>
            <a href="#" className="servNext rounded-md">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg mt-5 ">
          <div className="servLogo rounded-md">
            <IoTimer />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">Timely Delivery</h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div>
            <a href="#" className="servNext rounded-md">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg mt-5 ">
          <div className="servLogo rounded-md">
            <SiTestinglibrary />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">Comprehensive Testing</h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div>
            <a href="#" className="servNext rounded-md">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg mt-5 ">
          <div className="servLogo rounded-md">
            <AiFillThunderbolt />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">Interactive Magic</h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div>
            <a href="#" className="servNext rounded-md">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg mt-5 ">
          <div className="servLogo rounded-md">
            <FaRankingStar />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">On-Page SEO Excellence</h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div>
            <a href="#" className="servNext rounded-md">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg mt-5 ">
          <div className="servLogo rounded-md">
            <MdOutlineEditLocation />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">Custom Solutions</h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div>
            <a href="#" className="servNext rounded-md">
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
