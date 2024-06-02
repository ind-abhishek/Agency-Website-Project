import React, { useEffect } from "react";
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
import EmailForm from "../component/EmailForm";

const Home = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e) => {
      cursor.setAttribute(
        "style",
        `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`
      );
    };

    const handleClick = () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="RootWrap">
      <div className="cursor">
        <div className="expand"></div>
      </div>

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
                src="/bigmart.jpg"
                alt="Project Image"
              />
              <div className="cardOverlay">
                <div className="overlay-content1 ">
                  <a
                    href="https://smbigmart.com/"
                    target="blank"
                    className="inline"
                  >
                    See Project <FaArrowRight className="inline" />
                  </a>
                </div>
              </div>
            </div>

            <div className="projectCard rounded-lg">
              <img
                className="project-image"
                src="/TrendingCrafts.jpg"
                alt="Project Image"
              />
              <div className="cardOverlay">
                <div className="overlay-content">
                  <a
                    href="https://craftifem.me/"
                    target="blank"
                    className="inline"
                  >
                    See Project <FaArrowRight className="inline" />
                  </a>
                </div>
              </div>
            </div>

            <div className="projectCard rounded-lg">
              <img
                className="project-image"
                src="/HassanSchool.jpg"
                alt="Project Image"
              />
              <div className="cardOverlay">
                <div className="overlay-content">
                  <a
                    href="https://hbiztech.com/"
                    target="blank"
                    className="inline"
                  >
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
                  <a href="#" target="blank" className="inline">
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
                  <a href="#" target="blank" className="inline">
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
              <h3 className="priceHead"> ₹6,999</h3>
              <p className="priceDesc">
                Fully responsive I page website, developed in Webflow, Unlimited
                Sections.
              </p>
              <div className="priceDetail">
                <p>
                  {" "}
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />5
                  pages Website
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />1
                  Year Free Domain Name ( .com .in .org )
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />1
                  Year Free Hosting ( Unlimited Space )
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Admin Access
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Lifetime 24/7 Free Hosting Support
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Unlimited Images & Videos Upload
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />5
                  Free Email Id
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  SEO Friendly Website
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  100% Responsive Website
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Live Chat Integration
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Payment Gateway Integration
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Call Button Integration
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Inquiry Form
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />1
                  Year Free Technical Support For Website
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Annual Renewal For Hosting Rs.3000.
                </p>
              </div>

              <button className="notbtn3 priceBtn">
                Get started <MdArrowOutward className="inline priceIcon2" />
              </button>
            </div>

            <div className="priceCard rounded-lg mt-5 ">
              <h1 className="priceTitel">Standard</h1>
              <h3 className="priceHead"> ₹11,999</h3>
              <p className="priceDesc">
                Fully responsive I page website, developed in Webflow, Unlimited
                Sections.
              </p>
              <div className="priceDetail">
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  12 pages Website
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Woocommece Features
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  10 Free Email Id
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />1
                  Year Free Domain Name ( .com .in .org )
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />1
                  Year Free Hosting ( Unlimited Space )
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Admin Access
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Lifetime 24/7 Free Hosting Support
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Unlimited Images & Videos Upload
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />5
                  Free Email Id
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  SEO Friendly Website
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  100% Responsive Website
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Live Chat Integration
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Payment Gateway Integration
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Call Button Integration
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Inquiry Form
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />1
                  Year Free Technical Support For Website
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Annual Renewal For Hosting Rs.3000.
                </p>
              </div>

              <button className="notbtn3 priceBtn">
                Get started <MdArrowOutward className="inline priceIcon2" />
              </button>
            </div>

            <div className="priceCard rounded-lg mt-5 ">
              <h1 className="priceTitel">Custom Plan</h1>
              <h3 className="priceHead"> ₹???</h3>
              <p className="priceDesc">
                Fully responsive I page website, developed in Webflow, Unlimited
                Sections.
              </p>
              <div className="priceDetail">
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Pages: According to Requirement
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Woocommece Features
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  10 Free Email Id
                </p>

                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />1
                  Year Free Domain Name ( .com .in .org )
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />1
                  Year Free Hosting ( Unlimited Space )
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Admin Access
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Lifetime 24/7 Free Hosting Support
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Unlimited Images & Videos Upload
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />5
                  Free Email Id
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  SEO Friendly Website
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  100% Responsive Website
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Live Chat Integration
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Payment Gateway Integration
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Call Button Integration
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Inquiry Form
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />1
                  Year Free Technical Support For Website
                </p>
                <p>
                  <IoCheckmarkDoneCircleSharp className="inline priceIcon" />
                  Annual Renewal For Hosting Rs.4000.
                </p>
              </div>

              <button className="notbtn3 priceBtn">
                Get started <MdArrowOutward className="inline priceIcon2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="Contact">
        <BgLine className="opacity-10"></BgLine>
        <EmailForm></EmailForm>
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
