import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <div className="home m-8 ml-12 p-6 pl-12">
      <div className="hero">
        <h1>
          We develop
          <h1>
            <span>amazing</span> websites for your business{" "}
            <span>
              <div className=""></div>
            </span>
          </h1>
        </h1>
      </div>
      <div className="heroDetail">
        <p className="text-white text-lg">
          Discover our seamless workflow as we transform Figma designs into
          stunning Webflow websites. Explore the synergy between design and
          development for a pixel-perfect online experience.
        </p>
      </div>

      <div className="mt-12">
        <button className="mr-12 rounded-md p-3 notbtn2 text-white">
          <a href="#">
            view woork <MdArrowOutward className="inline" />
          </a>
        </button>
        <div className="pplCard flex text-white">
          <img src=".\public\pplImg.png" alt="" className="h-10 w-10" />
          <h4>1000+</h4>
          <p>Satisfied clients</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
