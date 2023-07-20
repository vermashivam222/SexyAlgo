import React from "react";
import "./footer.css";


export default function Footer() {
  return (
    <div className="body1">
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
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
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
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
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
