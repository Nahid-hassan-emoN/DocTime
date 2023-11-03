import React from "react";

import { BiLogoGmail, BiArrowToRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  return (
    <>
      <div className="container-xxl log_in">
        <div className="containeR ">
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <div className="sign_up__field">
                  <i className="login__icon">
                    <BiLogoGmail />
                  </i>

                  <input
                    type="text"
                    className="login__input"
                    placeholder="Enter Your Email"
                  />
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

export default ForgetPass;
