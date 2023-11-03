import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import { BsCloudUploadFill } from "react-icons/bs";
const fileTypes = ["JPG", "PNG", "GIF"];
const TestReport = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <div className="container-xxl mt-5 user_profile">
        <div className="user-header mt-5">
          <h1 className="text-center font-bold text-4xl ">
            Welcome To <span>DocTime</span>
          </h1>
          <div className="user-topHeader mt-5">
            <div className="user-topHeader-text justify-between ">
              <div className="">
                <h1>Experienced Pathologist</h1>
                <div className="topHeader-detail">
                  <span className="bangla"> &nbsp;মাত্র </span>
                  <span className="tk"> &nbsp;৫০০ টাকায় </span>
                  <span className="bangla"> &nbsp;(ভ্যাট সহ)</span>
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
        <div className="upload mt-5">
          <div className="input">
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </div>
          <div className="col-4 ml-20 ">
            <Link className="btn-green flex justify-between mt-5">
              <BsCloudUploadFill className="video-icon" />
              <span>জমা দিন</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestReport;
