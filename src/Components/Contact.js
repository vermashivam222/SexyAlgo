import React from 'react';
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <h1 className="heading">Get In Touch</h1>
      <h1 className="cntct-no">1234567890</h1>
      <div className="pass">For more Query fill this Form.</div>
      <div className="form">
        <form action="">
          <p>Name</p>
          <input type="text" placeholder ="Enter your Full Name"/>
          <p>Email Id</p>
          <input type="text" placeholder ="Enter your Email"/>
          <p>Mobile No.</p>
          <input type="tel" placeholder ="000-000-0000" />
          <p>Message</p>
          <textarea  name="" id="contact-text-area" cols="50" rows="3" >Please put your Query in here</textarea>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}
