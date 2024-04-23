import React from "react";
import "../styles/BgLine.css";
const BgLine = () => {
  return (
    <div>
      <section className="bgLineContainer opacity-50">
        <div className="bgLine z-10	bgLine1"> </div>
        <div className="bgLine z-11 bgLine2"> </div>
        <div className="bgLine z-12 bgLine3"> </div>
        {/* <div className="bgLine z-13 bgLine4"> </div> */}
        {/* <div className="bgLine z-13 bgLine5"> </div> */}
      </section>
    </div>
  );
};

export default BgLine;
