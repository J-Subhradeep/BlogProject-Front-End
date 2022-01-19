import React from "react";

const Login = () => {
  return (
    <>
      <div id="login_main">
        <div className="login_section">
          <div id="login__icon">
            <i className="fas fa-sign-in-alt fa-3x"></i>
          </div>
          <form autoComplete="off">
            <div className="login_fields" id="username_login">
              <input
                type="text"
                name="user_name_login"
                id="user_name_login"
                required
              />
              <span></span>
              <label for="Username">Username </label>
              <br />
            </div>
            <div className="login_fields" id="password_login">
              <input
                type="password"
                name="password_login"
                id="password_login"
                autoComplete="current-password"
                required
              />
              <span></span>
              <label for="password">Password </label>
              <br />
            </div>
            <div className="forgot_ps_login">
              <a href="#">Forgot password ?</a>
            </div>

            <div className="login_btn_section">
              <input type="submit" id="submit_login" value="Login" />
            </div>
          </form>
          <div className="signupfromlogin_link">
            <span>Not a member ? </span>
            <a href="#">Sign up</a>
          </div>
        </div>
        <div className="login_pic_main"></div>
      </div>
    </>
  );
};

export default Login;
