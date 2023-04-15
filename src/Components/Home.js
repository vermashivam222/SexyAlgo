import React from 'react'
import Typical from 'react-typical'
import "./Home.css"

export default function Home() {
  return (
    <div className="intro">
      <span className="intro-typ">
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

      </span>
      
    </div>
  )
}

