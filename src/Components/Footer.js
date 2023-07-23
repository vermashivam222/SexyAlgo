import React from "react";
import "./footer.css";
import ace from "./images/WhatsApp_Image_2023-07-09_at_2.21.37_AM-removebg-preview.png"
// import ace2 from "./images/WhatsApp_Image_2023-07-09_at_2.22.26_AM-removebg-preview.png"

export default function Footer() {
  return (
    <div className="ftr">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="/marketplace">about us</a>
                </li>
                <li>
                  <a href="/services">our services</a>
                </li>
                <li>
                  <a href="/Terms">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="/">watch</a>
                </li>
                <li>
                  <a href="/">bag</a>
                </li>
                <li>
                  <a href="/">shoes</a>
                </li>
                <li>
                  <a href="/">dress</a>
                </li>
              </ul>
            </div> */}
            <div className="footer-col">
              <h4>Office Address:</h4>
              <div className="social">
                <h6>
                  Near Chatinya Tower Daldal seoni, vidhan sabha road.
                </h6>
                <p className="city">Raipur,Chhattisgarh</p>
                <h6>6266722920</h6>
              </div>
            </div>
            <div className="footer-col">
              <img src={ace} alt="" />
              {/* <div className="ace2">
              <img src={ace2} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
