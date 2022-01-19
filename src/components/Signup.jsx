import React, { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });
  return (
    <>
      <div id="sign_up_main_div">
        <div id="sign_up_div">
          <div id="icon_div">
            <i className="fas fa-id-badge fa-3x"></i>
          </div>
          <div id="form_sign_up">
            <form
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                if (user.password === user.password2) {
                  axios.post("http://127.0.0.1:8000/", {
                    email: user.email,
                    username: user.username,
                    password: user.password,
                  });
                  alert("Signup Successful");
                } else {
                  alert("Both password field doesn't match");
                }
              }}
            >
              <div id="email_div" className="star">
                <input
                  type="email"
                  name="emailid_sign"
                  id="email_input"
                  autoComplete="off"
                  required
                  value={user.email}
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, email: e.target.value };
                    });
                  }}
                />
                <span></span>
                <label htmlFor="email_input" id="email_label">
                  Email
                </label>
              </div>
              <div id="username_div" className="star">
                <input
                  type="text"
                  name="username_sign"
                  id="username_input"
                  autoComplete="off"
                  required
                  value={user.username}
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, username: e.target.value };
                    });
                  }}
                />
                <span></span>
                <label htmlFor="username_input" id="username_label">
                  Username
                </label>
              </div>
              <div id="password_div" className="star">
                <input
                  type="password"
                  name="password_sign"
                  id="password_input"
                  autoComplete="off"
                  required
                  value={user.password}
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, password: e.target.value };
                    });
                  }}
                />
                <span></span>
                <label htmlFor="password_input" id="password_label">
                  Password
                </label>
              </div>
              <div id="cpass_div" className="star">
                <input
                  type="password"
                  name="cpassword_sign"
                  id="cpass_input"
                  autoComplete="off"
                  required
                  value={user.password2}
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, password2: e.target.value };
                    });
                  }}
                />
                <span></span>
                <label htmlFor="cpass_input" id="cpass_label">
                  Confirm Password
                </label>
              </div>
              <div id="submit_sign_up">
                <input type="submit" value="Sign Up" id="submit_btn" />
              </div>
            </form>
            <div id="more_help">
              <span id="member">Already a member ?</span>
              <a href="#">Login</a>
            </div>
            <div className="xtra"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
