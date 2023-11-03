import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const DocCard = () => {
  return (
    <>
      <div className="col-2">
        <div className="doc-online-card position-relative">
          <div className="doc-online-img">
            <img src="../../public/images/doc-1.jpg" alt="" />
          </div>

          <div className="doc-online-card-details ">
            <p className="">Gynecologist &amp; Obstetrician</p>
            <h2 className="dic-name m-2">Miss Khan</h2>
            <small>MBBS</small>
            <small>BCS (Health)</small>
            <small>MCPS (Gynae &amp; Obs)</small>
            <small>MRCOG (Gynae &amp; Obs) (UK)</small>

            <div className="rate-stars">
              <ReactStars
                count={5}
                size={18}
                value="4.5"
                edit={false}
                activeColor="#ffd700"
              />
            </div>
            <h5 className="price">
              ৳ 500.00 &nbsp;
              <strike>৳ 1000</strike>
              &nbsp;
              <span>(incl. VAT)</span>
            </h5>
            <div className="col-10 mx-auto">
              <Link to="" className="btn-light-green flex justify-between mt-3">
                <BsCameraVideoFill className="video-icon" />
                <span>ডাক্তার দেখান</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocCard;
