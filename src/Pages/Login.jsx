import React from "react";
import {
  BiLogoGmail,
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiArrowToRight,
  BiSolidUser,
  BiSolidKey,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container-xxl log_in">
        <div className="containeR ">
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <div className="login__field">
                  <i className="login__icon">
                    <BiSolidUser />
                  </i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="User name / Email"
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon">
                    <BiSolidKey />
                  </i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <button className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon">
                    <BiArrowToRight />
                  </i>
                </button>
              </form>
              <div className="sign_up">
                <Link to="/sign-up">sign up</Link>

                <Link to="/forge-password">Forget Password</Link>
              </div>
              <div className="social-login">
                <h3>log in via</h3>
                <div className="social-icons">
                  <a href="#" className="social-login__icon ">
                    <BiLogoGmail />
                  </a>
                  <a href="#" className="social-login__icon">
                    <BiLogoFacebookCircle />
                  </a>
                  <a href="#" className="social-login__icon">
                    <BiLogoTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
