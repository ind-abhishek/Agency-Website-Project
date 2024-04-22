import React, { useState, useEffect } from "react";
import "../styles/Glow.css";
import Notice from "./Notice";
import Navbar from "./Navbar";
import Home from "../screen/Home";
import BrandCards from "./BrandCards";
import BgLine from "./BgLine";
import Service from "../screen/Service";

const Glow = () => {
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
    <div className="bgGlow">
      <div id="blob" style={{ left: position.x, top: position.y }}></div>

      <div id="blur">
        <Notice></Notice>
        <Navbar></Navbar>
        <BgLine></BgLine>
        <Home></Home>
        <Service></Service>
      </div>
    </div>
  );
};

export default Glow;
