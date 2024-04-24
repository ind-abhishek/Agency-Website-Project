import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { MdArrowOutward } from "react-icons/md";
import BrandCards from "../component/BrandCards";
import Navbar from "../component/Navbar";
import Notice from "../component/Notice";
import BgLine from "../component/BgLine";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="bgGlow mx-auto">
      <div id="blob" style={{ left: position.x, top: position.y }}></div>
      <div className="higlighter opacity-20"></div>

      <div id="blur">
        <Notice />
        <Navbar />
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
              Discover our seamless workflow as we transform Figma designs into
              stunning Webflow websites. Explore the synergy between design and
              development for a pixel-perfect online experience.
            </p>
          </div>

          <div className="mt-12 flex justify-start">
            <button className="mr-12 rounded-md p-0 mt-6 h-12  notbtn3 text-white">
              <a href="#">
                view work <MdArrowOutward className="inline" />
              </a>
            </button>

            <div className="pplCard flex text-white ">
              <img src=".\public\pplImg.png" alt="" className="h-24 w-24" />
              <div className="p-4">
                <h4>1000+</h4>
                <p className="col-gray">Satisfied clients</p>
              </div>
            </div>
          </div>
        </div>
        <BrandCards />

        <div className="serviceWrapper">
          <BgLine className="opacity-10"></BgLine>
          <Service />
          <div className="bluri">
            <div className="higlighter opacity-20"></div>
            <div
              className="blobi"
              style={{ left: position.x, top: position.y }}
            ></div>
          </div>
        </div>

        <div className="portfolioWrapper">
          <BgLine className="opacity-10"></BgLine>
          <Portfolio></Portfolio>
          <div className="bluri">
            <div className="higlighter opacity-20"></div>
            <div
              className="blobi"
              style={{ left: position.x, top: position.y }}
            ></div>
          </div>
        </div>

        <div className="pricingWrapper">
          <BgLine className="opacity-10"></BgLine>
          <Pricing></Pricing>
          <div className="bluri">
            <div className="higlighter opacity-20"></div>
            <div
              className="blobi"
              style={{ left: position.x, top: position.y }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
