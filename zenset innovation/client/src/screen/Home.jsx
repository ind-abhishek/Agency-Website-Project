import React from "react";
import "../styles/Home.css";
import { MdArrowOutward } from "react-icons/md";
import BrandCards from "../component/BrandCards";
import Service from "./Service";
import Star from "../component/Star";

const Home = () => {
  return (
    <>
      <Star></Star>

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
              view woork <MdArrowOutward className="inline" />
            </a>
          </button>

          <div className="pplCard flex text-white">
            <img src=".\public\pplImg.png" alt="" className="h-24 w-24" />
            <div className="p-4">
              <h4>1000+</h4>
              <p className="col-gray">Satisfied clients</p>
            </div>
          </div>
        </div>
      </div>

      <BrandCards></BrandCards>
    </>
  );
};

export default Home;
