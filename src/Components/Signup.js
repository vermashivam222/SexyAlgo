import React from "react";
import "./Signup.css";

export default function Login() {
  return (
    <div>
        <div className="login-body">
      <div className="center">
        <h2>Register</h2>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>First_name</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Last_name</label>
          </div>
          <div className="txt_field">
            <input type="tel" required />
            <span></span>
            <label>Phone</label>
          </div>
          <div className="txt_field">
            <input type="email" required />
            <span></span>
            <label>email</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>password</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>confirm password</label>
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
    </div>
  );
}
