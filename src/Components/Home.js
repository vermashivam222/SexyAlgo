import bgVideo from "./images/homevdo.mp4";
import React from 'react'
import Typical from 'react-typical'
import "./Home.css"

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
          "First Word",
          1000,
          "Second Word",
          1000,
          "Third Word",
          1000,
          "Fourth Word",
          1000,
          "Fifth Word",
          1000,        
        ]}
          />
      </div>
      </p>
      </div>
    </div>
  );
}
