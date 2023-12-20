import React from "react";
import {
  BiLogoGmail,
  BiArrowToRight,
  BiSolidUser,
  BiSolidKey,
  BiSolidDonateBlood,
  BiSolidMobile,
} from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="container-xl sign_up">
        <div className="containeR ">
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <div className="sign_up__field">
                  <i className="login__icon">
                    <BiSolidUser />
                  </i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="User name"
                  />
                  <div className=" row2nd">
                    <i className="login__icon">
                      <BiLogoGmail />
                    </i>
                    <input
                      type="text"
                      className="login__input"
                      placeholder=" Email"
                    />
                  </div>
                </div>
                <div className="sign_up__field">
                  <i className="login__icon">
                    <BiSolidKey />
                  </i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                  <div className=" row2nd">
                    <i className="login__icon">
                      <BiSolidKey />
                    </i>
                    <input
                      type="password"
                      className="login__input"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className=" row2nd">
                    <i className="login_icon5">
                      <ImLocation2 />
                    </i>
                    <input
                      type="password"
                      className="login__input"
                      placeholder="Address"
                    />
                  </div>
                  <div className=" row2nd">
                    <i className="login_icon6">
                      <BiSolidDonateBlood />
                    </i>
                    <input
                      type="password"
                      className="login__input"
                      placeholder="Blood Group"
                    />
                  </div>
                  <div className=" row2nd">
                    <i className="login_icon7">
                      <BiSolidMobile />
                    </i>
                    <input
                      type="password"
                      className="login__input"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <button className="button login__submit">
                  <span className="button__text">Sign Up Now</span>
                  <i className="button__icon">
                    <BiArrowToRight />
                  </i>
                </button>
              </form>
              <div className="sign_up">
                <p>
                  &nbsp; Go Back &nbsp;<Link to="/login">Log in</Link>
                </p>
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

export default SignUp;
