import React from "react";
import bgVideo from "./images/homevdo.mp4";
import internet from "./images/internet.png";
import cloud from "./images/cloud.png";
import laptop from "./images/laptop.png";
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
      <div className="ncard">
        <div className="square">
          <div className="glbimg">
            <img className="png" src={internet} alt="" />
          </div>
          <div className="pnghd">
            <p className="png-info">
              <b>Full API Integration</b>
            </p>
          </div>
          <div className="txt-hvr">
            The Ace Algo covers the full life cycle of algorithmic
            trading.Starting from entry to stoploss and Target Everything can be
            managed directly from API Platform.
          </div>
        </div>
        <div className="square">
          <div className="glbimg">
            <img className="png" src={cloud} alt="" />
          </div>
          <div className="pnghd">
            <p className="png-info">
              <b>Back Tested Strategies</b>
            </p>
          </div>
          <div className="txt-hvr">
            The Ace Algo can be used for Paper Trading when you can make sure
            that your strategy is tradable and profitable in market.
          </div>
        </div>
        <div className="square">
          <div className="glbimg">
            <img className="png" src={laptop} alt="" />
          </div>
          <div className="pnghd">
            <p className="png-info">
              <b>Regular Updates</b>
            </p>
          </div>
          <div className="txt-hvr">
            The Ace Algo provides all the updates on executed and cancelled
            orders through email,you will always know what is going on in your
            account.
          </div>
        </div>
      </div>
    </div>
  );
}
