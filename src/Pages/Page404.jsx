import React from "react";
import Error404 from "../ErrorPage1.json";

import Lottie from "lottie-react";
const Page404 = () => {
  return (
    <>
      <div className="container-xxl">
        <div className="error-page">
          <div className="">
            <Lottie animationData={Error404} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
