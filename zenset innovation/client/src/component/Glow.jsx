import React, { useState, useEffect } from "react";
import "./Glow.css";
import Notice from "./Notice";
import Navbar from "./Navbar";
import Home from "../screen/Home";

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
    <div>
      <div>
        <div id="blob" style={{ left: position.x, top: position.y }}></div>
        <div id="blur"></div>
      </div>
      <Notice></Notice>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default Glow;
