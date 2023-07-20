import React from "react";
import bgVideo from "./images/homevdo.mp4";
import Typical from "react-typical";
import "./Home.css";

export default function Home() {
  return (
    <div className="intro">
      <div className="homeshow">
        <video className="videoTag" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <h1 className="welcome">Welcome</h1>
        <p>
          <div className="intro-typ">
            <Typical
              loop={Infinity}
              steps={[
                "Learn.",
                1000,
                "Trade.",
                1000,
                "Be Profitable.",
                1000,
                "Have Trust.",
                1000,
              ]}
            />
          </div>
        </p>
        <p className="txt">
          Learn with us <br />
          And be a profitable trader. <br />
          Or join our Algo trading and automate your trading program.
        </p>
      </div>
      <div className="ncard"></div>
    </div>
  );
}
