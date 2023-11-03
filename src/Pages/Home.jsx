import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home container-xxl">
        <div className="topHeaderBanner">
          <h1 className="text-3xl font-bold homeHeader">
            Complete Health Solution
            <br />
            <span> DocTime </span>
          </h1>
          <p>
            Consulting a healthcare professional, buying medicine, ordering lab
            tests and improving your health and wellbeing, all can be done 24/7
            with DocTime!
          </p>
        </div>

        <div className="headerCard grid grid-cols-5 gap-4 mt-5">
          <div className="topHeaderCards">
            <Link>
              <div className="card-item">
                <div className="content">
                  <img src="../../public/images/Video.svg" alt="" />
                  <h2 className="mt-2 mb-1">Live Video Consultation</h2>
                  <p>
                    Instant video consultation now or schedule a future
                    appointment
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="topHeaderCards">
            <Link to="">
              <div className="card-item">
                <div className="content">
                  <img src="../../public/images/Protection.svg" alt="" />
                  <h2 className="mt-2 mb-1">Healthcare Packages</h2>
                  <p>Consultations, hospital care, insurance & more</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="topHeaderCards">
            <Link to="">
              <div className="card-item">
                <div className="content">
                  <img src="../../public/images/Diagnostic.svg" alt="" />
                  <h2 className="mt-2 mb-1">Diagnostic at Your Door</h2>
                  <p>
                    Get tested in hours at home &amp; get report in the app
                    within 24 hours.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="topHeaderCards">
            <Link to="">
              <div className="card-item">
                <div className="content">
                  <img src="../../public/images/Medicine.svg" alt="" />
                  <h2 className="mt-2 mb-1">Order Medicine Online</h2>
                  <p>Order easily and get the medicine in 1 hou</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="topHeaderCards">
            <Link to="">
              <div className="card-item">
                <div className="content">
                  <img src="../../public/images/it_service.svg" alt="" />
                  <h2 className="mt-2 mb-1">It Services</h2>
                  <p>Beautifully Engineered Products. Built to Perform</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <section className="why-use-doCtime mt-5">
          <div className="useDocTime-1">
            <h1 className="useDocTime-1-h1">Why Use DocTime?</h1>
            <div className="useDocTime-1-content mt-3">
              <div className="useDocTime-1-details d-flex">
                <span>1</span>
                <p>
                  Access any GP or specialist doctor you need
                  <br className="hiddenBr" />
                  at anytime from anywhere
                </p>
              </div>
              <div className="useDocTime-1-details d-flex ">
                <span>2</span>
                <p>
                  Access to online prescriptions, medicine delivery,
                  <br className="hiddenBr" />
                  and tests and diagnostics
                </p>
              </div>
              <div className="useDocTime-1-details d-flex">
                <span>3</span>
                <p>
                  Easy subscriptions to protect you and loved ones
                  <br className="hiddenBr" />
                  health and wellbeing
                </p>
              </div>
            </div>
          </div>
          <div className="useDocTime-2 col-6">
            <img src="../../public/images/handwithPhone.png" alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
