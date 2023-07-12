import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Fade } from "react-reveal";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gttc4vn",
        "template_sgza6x7",
        form.current,
        "eQinedQuK3G8-bElL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Your response is submitted.");
  };
  return (
    <div className="main-contact">
      <Fade>
        <h1 className="heading">Get In Touch</h1>
        <div className="pass">For more Query fill this Form.</div>
      </Fade>
      <div className="contact-box">
        <form ref={form} onSubmit={sendEmail}>
          <Fade>
            <p>Name</p>
            <input
              type="text"
              placeholder="Enter your Full Name"
              name="user_name"
              required
            />
            <p>Email Id</p>
            <input
              type="text"
              placeholder="Enter your Email"
              name="user_email"
              required
            />
            <p>Mobile No.</p>
            <input
              type="tel"
              placeholder="000-000-0000"
              name="user_number"
              required
            />
            <p>Message</p>
            <textarea
              className="msg-box"
              name="message"
              id="contact-text-area"
              cols="50"
              rows="3"
              placeholder="Message"
              required
            ></textarea>
            <div>
              <button className="btn2" type="submit">
                Submit
              </button>
            </div>
          </Fade>
        </form>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
}
