import React, { useState, useEffect } from "react";
import "../styles/Soon.css";
import BgLine from "../component/BgLine";

import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Soon() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 20);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        const days = String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0");
        const hours = String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pageContainer">
      <BgLine className="opacity-10"></BgLine>
      <h1 className="title">Coming Soon</h1>
      <h2 className="subtitle">
        In the meantime, subscribe to our monthly newsletter to stay updated.
      </h2>
      <ul className="countdown">
        <li>
          <span className="days">{timeLeft.days}</span>
          <p className="days_ref ref">days</p>
        </li>
        <li>
          <span className="hours">{timeLeft.hours}</span>
          <p className="hours_ref ref">hours</p>
        </li>
        <li>
          <span className="minutes">{timeLeft.minutes}</span>
          <p className="minutes_ref ref">minutes</p>
        </li>
        <li>
          <span className="seconds">{timeLeft.seconds}</span>
          <p className="seconds_ref ref">seconds</p>
        </li>
      </ul>
      <form>
        <input
          type="email"
          className="SoonEmail"
          placeholder="Enter your email"
        />
        <input type="submit" className="SoonSubmit" value="Get Notified" />
      </form>

      <div className="social-links">
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default Soon;
