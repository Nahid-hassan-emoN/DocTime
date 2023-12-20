import React from "react";
import { Link } from "react-router-dom";
import { BsCameraVideoFill } from "react-icons/bs";
import DocCard from "../Components/DocCard";
import HealthPack from "../Components/HealthPack";

const UserProfile = () => {
  return (
    <>
      <div className="container-xxl user_profile">
        <div className="user-header mt-5">
          <h1 className="text-center font-bold text-4xl ">
            Welcome To <span>DocTime</span>
          </h1>
          <div className="user-topHeader mt-5">
            <div className="user-topHeader-text justify-between ">
              <div className="">
                <h1>Experienced MBBS Doctor</h1>
                <div className="topHeader-detail">
                  <span className="bangla"> &nbsp;মাত্র </span>
                  <span className="tk"> &nbsp;২৫ টাকায় </span>
                  <span className="bangla"> &nbsp;(ভ্যাট সহ)</span>
                  <Link className="btn-green flex justify-between">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
              <div className="user-topHeader-img obj-fit-cover">
                <img
                  src="../../public/images/special_speciality_title_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="doctor-view">
          {/* 1st--row */}
          <div className=" doctor-view-row gap-15 ">
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/child.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Child Disease Specialist</h1>
                  <p>
                    মাত্র <span>৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="doc-view-detail  justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/child2.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1> Experienced Child Disease Specialist</h1>
                  <p>
                    মাত্র <span> ৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd--row */}
          <div className=" doctor-view-row gap-15 ">
            <div className="doc-view-detail  justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/female2.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Child Disease Specialist</h1>
                  <p>
                    মাত্র <span>৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/female2.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Child Disease Specialist</h1>
                  <p>
                    মাত্র <span> ৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd--row */}
          <div className=" doctor-view-row gap-15 ">
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/mosquito2.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Child Disease Specialist</h1>
                  <p>
                    মাত্র <span>৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/mental-health3.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Child Disease Specialist</h1>
                  <p>
                    মাত্র <span> ৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* 4th--row */}
          <div className=" doctor-view-row gap-15 ">
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/depression.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Child Disease Specialist</h1>
                  <p>
                    মাত্র <span>৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/rash.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Skin Disease Specialist</h1>
                  <p>
                    মাত্র <span> ৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* 5th--row */}
          <div className=" doctor-view-row gap-15 ">
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/diarrhea.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Diarrhea Disease Specialist</h1>
                  <p>
                    মাত্র <span>৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/gender.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Sex Disease Specialist</h1>
                  <p>
                    মাত্র <span> ৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* 6th--row */}
          <div className=" doctor-view-row gap-15 ">
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/nutrition.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Nutrition Specialist</h1>
                  <p>
                    মাত্র <span>৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="doc-view-detail justify-between gap-10">
              <div className="doc-view-content gap-10">
                <img src="../../public/images/glucometer.png" alt="" />
                <div className="doc-view-text mt-2">
                  <h1>Diabetic Specialist</h1>
                  <p>
                    মাত্র <span> ৫০০ টাকায়</span>&nbsp;(ভ্যাট সহ)
                  </p>
                </div>
              </div>
              <div>
                <div className="doc-view-content-link">
                  <Link className="btn-light-green">
                    <BsCameraVideoFill className="video-icon" />
                    <span>ডাক্তার দেখান</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doc available online */}
        <div className="doc-available-online mt-4">
          <div className="flex justify-between">
            <h4 className="content-title font-bold" data-v-2732e509="">
              Available for consultation
            </h4>
            <Link to="/doctors"> See all</Link>
          </div>
          <div className="">
            <div className="doc-available-card ">
              <DocCard />
            </div>
          </div>
        </div>

        {/* doc available online */}
        <div className="health-plan mt-4">
          <h4 data-v-65bb1f5e="" className="content-title font-poppins-bold ">
            Health Care &amp; Protect Plans
          </h4>

          <div className="health-care-plan mt-3">
            <HealthPack />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
