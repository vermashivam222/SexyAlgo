import React from "react";
import "./pricing.css";
import { Fade } from "react-reveal";

export default function Pricing() {
  return (
    <div>
      <section>
        <Fade>
          <h1>Find a plan that's right for you.</h1>
          <div class="container-fluid">
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card text-center">
                    <div class="title">
                      <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      <h2>Silver</h2>
                    </div>
                    <div class="price">
                      <h4>
                        <sup>₹</sup>12,999
                      </h4>
                    </div>
                    <div class="option">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          Subscription time:- 6 months{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          Segments :- 1{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> R.M.
                          support - Yes{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          Maintance charge :- No{" "}
                        </li>
                      </ul>
                    </div>
                    <a href="/contact">Order Now </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card text-center">
                    <div class="title">
                      <i class="fa fa-plane" aria-hidden="true"></i>
                      <h2>Gold</h2>
                    </div>
                    <div class="price">
                      <h4>
                        <sup>₹</sup>22,999
                      </h4>
                    </div>
                    <div class="option">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>
                          Subscription time:- 12 months{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          Segments :- 2{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>R.M.
                          support :- Yes{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-times" aria-hidden="true"></i> Market
                          time support :- Yes{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>
                          Maintanance charge :- No{" "}
                        </li>
                      </ul>
                    </div>
                    <a href="/contact">Order Now </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card text-center">
                    <div class="title">
                      <i class="fa fa-rocket" aria-hidden="true"></i>
                      <h2>Platinum</h2>
                    </div>
                    <div class="price">
                      <h4>
                        <sup>₹</sup>35,000
                      </h4>
                    </div>
                    <div class="option">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          Subscription time :- 24 months{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>Segments
                          :- 3{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> R.m
                          support :- Yes{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>Market
                          time support :- Yes{" "}
                        </li>
                      </ul>
                    </div>
                    <a href="/contact">Order Now </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section className="section2">
        <Fade>
          <h1>Education</h1>
          <div class="container-fluid">
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card text-center">
                    <div class="title">
                      <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      <h2>Beginner Elite Course</h2>
                    </div>
                    <div class="price">
                      <h4>
                        <sup>₹</sup>15,000
                      </h4>
                    </div>
                    <div class="option">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          BASIC OF STOCK MARKET{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          500 E-BOOKS{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> R.M.
                          DEEP KNOWLEDGE ON CANDLESTICS {" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          RECORDED CLASSES{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-times" aria-hidden="true"></i>{" "}
                          RECORDED LIVE MARKET TRADES{" "}
                        </li>
                      </ul>
                    </div>
                    <a href="/contact">Order Now </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card text-center">
                    <div class="title">
                      <i class="fa fa-plane" aria-hidden="true"></i>
                      <h2>Advance Trading Course</h2>
                    </div>
                    <div class="price">
                      <h4>
                        <sup>₹</sup>25,000
                      </h4>
                    </div>
                    <div class="option">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>
                          BEGINNER ELITE COURSE{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          DEEP KNOWLEDGE ON STRATEGIES{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>R.M.
                          HOW TO USE INDICATORS{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-times" aria-hidden="true"></i> Market
                          LIVE CLASSES{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>
                          KNOWLEDGE ON MARKET SENTIMENT{" "}
                        </li>
                      </ul>
                    </div>
                    <a href="/contact">Order Now </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card text-center">
                    <div class="title">
                      <i class="fa fa-rocket" aria-hidden="true"></i>
                      <h2>Zero to Hero Course</h2>
                    </div>
                    <div class="price">
                      <h4>
                        <sup>₹</sup>90,000
                      </h4>
                    </div>
                    <div class="option">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>{" "}
                          BEGINNER ELITE+ ADVANCE MASTERY {" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>LIVE MARKET SUPPORT{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i> CERTIFICATION AFTER QUALIFICATION{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>2 PROFITABLE STRATEGIES{" "}
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-check" aria-hidden="true"></i>DEEP KNOWLEDGE ON B.T.ST.{" "}
                        </li>
                      </ul>
                    </div>
                    <a href="/contact">Order Now </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
