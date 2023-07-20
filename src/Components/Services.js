import React from "react";
import "./services.css";
import img1 from "./images/edu2.jpg";
import img from "./images/pexels-energepiccom-159888.jpg";
import { Fade } from "react-reveal";

export default function Services() {
  return (
    <div className="main-service">
      <div className="bgpic">
        <img src={img} alt="" />
      </div>
      <div className="first">
        <Fade left>
          <div className="head1">
            <img src={img1} alt="" />
            <h2>Education</h2>
            <p>
              Join our course and get complete knowlege about market from
              scratch and enhance your trading.
            </p>
            <button className="conus">
              <a href="/contact">Contact Us</a>
            </button>
          </div>
        </Fade>
      </div>
      <div className="second">
        <Fade right>
          <div className="head2">
            <img src={img} alt="" />
            <h2>Algo Trading</h2>
            <p>
              Join our Journey if you don't have too much time for trading or
              else if you don't have any experience of trading our bot with
              trade on behalf of and will provide best return according to
              market condition.
            </p>
            <button className="conus">
              <a href="/contact">Contact Us</a>
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}
