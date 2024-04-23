import React from "react";
import "../styles/Service.css";

import { FaTrophy } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="service text-white screen mx-auto max-w-screen-xl  ">
      <h3 className="servHead tracking-[.35em]">SERVICE</h3>
      <h1 className="servTitel">Exceeding Expectations</h1>
      <h3 className="servDesc">
        We're not just another agency; we're your path to exceptional web
        projects.
      </h3>

      <div className="servHero gap-5">
        {/* card */}

        <div className="servCard rounded-lg">
          <div className="servLogo rounded-md">
            <FaTrophy />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">
            Expertise in Figma-to-WebfIow
          </h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div className="servNext rounded-md">
            <a href="#">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg">
          <div className="servLogo rounded-md">
            <FaTrophy />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">
            Expertise in Figma-to-WebfIow
          </h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div className="servNext rounded-md">
            <a href="#">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg">
          <div className="servLogo rounded-md">
            <FaTrophy />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">
            Expertise in Figma-to-WebfIow
          </h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div className="servNext rounded-md">
            <a href="#">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg">
          <div className="servLogo rounded-md">
            <FaTrophy />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">
            Expertise in Figma-to-WebfIow
          </h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div className="servNext rounded-md">
            <a href="#">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg">
          <div className="servLogo rounded-md">
            <FaTrophy />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">
            Expertise in Figma-to-WebfIow
          </h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div className="servNext rounded-md">
            <a href="#">
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="servCard rounded-lg">
          <div className="servLogo rounded-md">
            <FaTrophy />
          </div>
          <h3 className="servCardTitel mt-2 mb-2">
            Expertise in Figma-to-WebfIow
          </h3>
          <p className="servDetail  mt-2 mb-0">
            we have a proven track record and expertise in seamlessly turning
            Figma designs into functional Webflow websites.
          </p>
          <div className="servNext rounded-md">
            <a href="#">
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
