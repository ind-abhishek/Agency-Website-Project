import React, { useState } from "react";
import "../styles/NewsLatter.css";
import { MdEmail } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";

const NewsLatter = () => {
  return (
    <div>
      <form action="" className="newslatterContain">
        <MdEmail className="emailLogo" />
        <input
          type="email"
          name=""
          id=""
          placeholder="Subscribe Our Newsletter"
        />
        <button type="submit">
          <HiArrowSmRight className="arrowLogo" />
        </button>
      </form>
    </div>
  );
};

export default NewsLatter;
