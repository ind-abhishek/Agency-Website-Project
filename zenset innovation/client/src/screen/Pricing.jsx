import React from "react";
import "../styles/Pricing.css";

import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const Pricing = () => {
  return (
    <div className="pageContainer text-white screen mx-auto max-w-screen-xl  ">
      <h3 className="head tracking-[.35em]">PRICING</h3>
      <h1 className="titel">One fixed price to get your project done</h1>
      <div className="descContain">
        <h3 className="desc">
          Your custom on-demand team for only a single payment
        </h3>
      </div>
      <div className="cardContain gap-5">
        {/* card */}

        <div className="priceCard rounded-lg mt-5 ">
          <h1 className="priceTitel">Basic</h1>
          <h3 className="priceHead">$445</h3>
          <p className="priceDesc">
            Fully responsive I page website, developed in Webflow, Unlimited
            Sections.
          </p>
          <div className="priceDetail">
            <p>
              {" "}
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Functional website
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Responsive design
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              content upload
            </p>

            <p>
              {" "}
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Functional website
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Responsive design
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              content upload
            </p>
          </div>

          <button className="notbtn3 priceBtn">
            Get started <MdArrowOutward className="inline priceIcon2" />
          </button>
        </div>

        <div className="priceCard rounded-lg mt-5 ">
          <h1 className="priceTitel">Standard</h1>
          <h3 className="priceHead">$645</h3>
          <p className="priceDesc">
            Fully responsive 3 page website, developed in webflow. unlimited
            sections.
          </p>
          <div className="priceDetail">
            <p>
              {" "}
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Functional website
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Responsive design
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              content upload
            </p>

            <p>
              {" "}
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Functional website
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Responsive design
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              content upload
            </p>
          </div>

          <button className="notbtn3 priceBtn">
            Get started <MdArrowOutward className="inline priceIcon2" />
          </button>
        </div>

        <div className="priceCard rounded-lg mt-5 ">
          <h1 className="priceTitel">premium</h1>
          <h3 className="priceHead">$945</h3>
          <p className="priceDesc">
            Fully responsive 1O page website, developed in Webflow. Unlimited
            Sections.
          </p>
          <div className="priceDetail">
            <p>
              {" "}
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Functional website
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Responsive design
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              content upload
            </p>

            <p>
              {" "}
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Functional website
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              Responsive design
            </p>
            <p>
              <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
              content upload
            </p>
          </div>

          <button className="notbtn3 priceBtn">
            Get started <MdArrowOutward className="inline priceIcon2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
