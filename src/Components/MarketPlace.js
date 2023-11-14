import React from "react";
import "./MarketPlace.css";
import img1 from "./images/asset 2.png";
import img2 from "./images/asset 40.png";
// import { Fade } from "react-reveal";

export default function MarketPlace() {
  return (
    <div className="header">
      <div className="job">
        <div className="content-left">
          <img src={img1} alt="" />
        </div>
        <div className="content-right">
          <h1>-What We Do-</h1>
          <p>
            Don’t just Trade, make it profitable with cutting edge technology.We
            are providing a server based high performance platform for your
            seamless trading experience, with help of our platform you can
            manage your multiple broker position with algo or manual trading.
          </p>
        </div>
      </div>
      <div className="job2">
        <div className="job-left">
          <h1>-Our Vision-</h1>
          <p>
            Workflow that works for your benefit. Our vision is to make the
            trading process hassle-free. we want to develop a technology for a
            seamless trading experience and increase the potential of manual
            traders with no margin of technical error. we are committed to
            provide best in class services. and we are in the progress to
            provide our services globally..
          </p>
        </div>
        <div className="job-right">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}
