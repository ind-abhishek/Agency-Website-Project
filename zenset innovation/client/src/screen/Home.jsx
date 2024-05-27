import React from "react";
import "../styles/Home.css";
import { MdArrowOutward } from "react-icons/md";

import BrandCards from "../component/BrandCards";
import Navbar from "../component/Navbar";
import Notice from "../component/Notice";
import BgLine from "../component/BgLine";

import "../styles/Service.css";
import { FaTrophy } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { SiTestinglibrary } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineEditLocation } from "react-icons/md";

import "../styles/Portfolio.css";

import "../styles/Pricing.css";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import Footer from "../component/Footer";
import Testimonials from "../component/Testimonials";
import FAQ from "../component/FAQ";

const Home = () => {
  return (
    <div className="RootWrap">
      {/* <Notice />
      <Navbar /> */}

      <div className="homeWrapper" id="Hero">
        <div className="mainContainer">
          <BgLine className="opacity-10"></BgLine>
          <div className="home screen mx-auto max-w-screen-xl items-center px-50">
            <div className="hero">
              <h1>
                We develop
                <h1>
                  <span className="amazing">amazing</span> websites for your
                  business
                  <span>
                    <div className="dot inline">.</div>
                  </span>
                </h1>
              </h1>
            </div>
            <div className="heroDetail">
              <p className=" text-lg">
                Discover our seamless workflow as we transform Figma designs
                into stunning Webflow websites. Explore the synergy between
                design and development for a pixel-perfect online experience.
              </p>
            </div>

            <div className="mt-12 flex justify-start ">
              <button className="mr-12 rounded-md p-0 mt-6 h-12  notbtn3 text-white">
                <a href="#">
                  view work <MdArrowOutward className="inline" />
                </a>
              </button>

              <div className="pplCard flex text-white ">
                <img src="\pplImg.png" alt="" className="h-24 w-24" />
                <div className="p-4">
                  <h4>1000+</h4>
                  <p className="col-gray">Satisfied clients</p>
                </div>
              </div>
            </div>
          </div>
          <BrandCards />
        </div>
      </div>

      <div className="serviceWrapper" id="Service">
        <div className="pageContainer text-white screen mx-auto max-w-screen-xl  ">
          <BgLine className="opacity-10"></BgLine>
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
                we have a proven track record and expertise in seamlessly
                turning Figma designs into functional Webflow websites.
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
                we have a proven track record and expertise in seamlessly
                turning Figma designs into functional Webflow websites.
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
                we have a proven track record and expertise in seamlessly
                turning Figma designs into functional Webflow websites.
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
                we have a proven track record and expertise in seamlessly
                turning Figma designs into functional Webflow websites.
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
              <h3 className="servCardTitel mt-2 mb-2">
                On-Page SEO Excellence
              </h3>
              <p className="servDetail  mt-2 mb-0">
                we have a proven track record and expertise in seamlessly
                turning Figma designs into functional Webflow websites.
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
                we have a proven track record and expertise in seamlessly
                turning Figma designs into functional Webflow websites.
              </p>
              <div>
                <a href="#" className="servNext rounded-md">
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolioWrapper" id="Portfolio">
        <div className="pageContainer text-white screen mx-auto max-w-screen-xl  ">
          <BgLine className="opacity-10"></BgLine>
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

      <div className="pricingWrapper" id="Pricing">
        <div className="pageContainer text-white screen mx-auto max-w-screen-xl  ">
          <BgLine className="opacity-10"></BgLine>
          <BgLine className="opacity-10"></BgLine>
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
                Fully responsive 1O page website, developed in Webflow.
                Unlimited Sections.
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
      </div>

      <div className="Faq-ReviewWrapper" id="FAQ">
        {/* <Testimonials></Testimonials> */}
        <FAQ></FAQ>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
