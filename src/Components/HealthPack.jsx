import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const HealthPack = () => {
  return (
    <>
      <div className="health-plans">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider ">
              <div className="docTimeCare-1 ">
                <div className="header ">
                  <div className="">
                    <h4 className="mb-0 font-bold">DocTime Care</h4>
                    <p className="text-danger mb-0">For 1 adult</p>
                  </div>
                  <div className="yearly-price">
                    <h3 data-v-1f2e88ae="" className="font-poppins-bold">
                      ৳ 180<span className="font-poppins">/mo</span>
                    </h3>
                    <p>billed yearly</p>
                  </div>
                </div>
                <div className="docTimeCare-1-article mt-3">
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis animi dicta omnis consequatur quasi enim!
                  </p>
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, minus?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero, minus?
                  </p>
                </div>
                <div className="bottom">
                  <Link className="subscribe-now">subscribe-now</Link>
                  <img src="../../public/images/single-man.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="docTimeCare-1 ">
                <div className="header ">
                  <div className="">
                    <h4 className="mb-0 font-bold">DocTime Care</h4>
                    <p className="text-danger mb-0">For 3 people</p>
                  </div>
                  <div className="yearly-price">
                    <h3 data-v-1f2e88ae="" className="font-poppins-bold">
                      ৳ 180<span className="font-poppins">/mo</span>
                    </h3>
                    <p>billed yearly</p>
                  </div>
                </div>
                <div className="docTimeCare-1-article mt-3">
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis animi dicta omnis consequatur quasi enim!
                  </p>
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, minus?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero, minus?
                  </p>
                </div>
                <div className="bottom">
                  <Link className="subscribe-now">subscribe-now</Link>
                  <img src="../../public/images/family.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="docTimeCare-1 ">
                <div className="header ">
                  <div className="">
                    <h4 className="mb-0 font-bold">DocTime Care</h4>
                    <p className="text-danger mb-0">For 4 people</p>
                  </div>
                  <div className="yearly-price">
                    <h3 data-v-1f2e88ae="" className="font-poppins-bold">
                      ৳ 180<span className="font-poppins">/mo</span>
                    </h3>
                    <p>billed yearly</p>
                  </div>
                </div>
                <div className="docTimeCare-1-article mt-3">
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis animi dicta omnis consequatur quasi enim!
                  </p>
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, minus?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero, minus?
                  </p>
                </div>
                <div className="bottom">
                  <Link className="subscribe-now">subscribe-now</Link>
                  <img src="../../public/images/family4.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="docTimeCare-1 ">
                <div className="header ">
                  <div className="">
                    <h4 className="mb-0 font-bold">DocTime Care</h4>
                    <p className="text-danger mb-0">For 1 adult</p>
                  </div>
                  <div className="yearly-price">
                    <h3 data-v-1f2e88ae="" className="font-poppins-bold">
                      ৳ 180<span className="font-poppins">/mo</span>
                    </h3>
                    <p>billed yearly</p>
                  </div>
                </div>
                <div className="docTimeCare-1-article mt-3">
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis animi dicta omnis consequatur quasi enim!
                  </p>
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, minus?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero, minus?
                  </p>
                </div>
                <div className="bottom">
                  <Link className="subscribe-now">subscribe-now</Link>
                  <img src="../../public/images/single-man.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="docTimeCare-1 ">
                <div className="header ">
                  <div className="">
                    <h4 className="mb-0 font-bold">DocTime Care</h4>
                    <p className="text-danger mb-0">For 1 adult</p>
                  </div>
                  <div className="yearly-price">
                    <h3 data-v-1f2e88ae="" className="font-poppins-bold">
                      ৳ 180<span className="font-poppins">/mo</span>
                    </h3>
                    <p>billed yearly</p>
                  </div>
                </div>
                <div className="docTimeCare-1-article mt-3">
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis animi dicta omnis consequatur quasi enim!
                  </p>
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, minus?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero, minus?
                  </p>
                </div>
                <div className="bottom">
                  <Link className="subscribe-now">subscribe-now</Link>
                  <img src="../../public/images/single-man.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="docTimeCare-1 ">
                <div className="header ">
                  <div className="">
                    <h4 className="mb-0 font-bold">DocTime Care</h4>
                    <p className="text-danger mb-0">For 1 adult</p>
                  </div>
                  <div className="yearly-price">
                    <h3 data-v-1f2e88ae="" className="font-poppins-bold">
                      ৳ 180<span className="font-poppins">/mo</span>
                    </h3>
                    <p>billed yearly</p>
                  </div>
                </div>
                <div className="docTimeCare-1-article mt-3">
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis animi dicta omnis consequatur quasi enim!
                  </p>
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, minus?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero, minus?
                  </p>
                </div>
                <div className="bottom">
                  <Link className="subscribe-now">subscribe-now</Link>
                  <img src="../../public/images/single-man.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="docTimeCare-1 ">
                <div className="header ">
                  <div className="">
                    <h4 className="mb-0 font-bold">DocTime Care</h4>
                    <p className="text-danger mb-0">For 1 adult</p>
                  </div>
                  <div className="yearly-price">
                    <h3 data-v-1f2e88ae="" className="font-poppins-bold">
                      ৳ 180<span className="font-poppins">/mo</span>
                    </h3>
                    <p>billed yearly</p>
                  </div>
                </div>
                <div className="docTimeCare-1-article mt-3">
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis animi dicta omnis consequatur quasi enim!
                  </p>
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, minus?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero, minus?
                  </p>
                </div>
                <div className="bottom">
                  <Link className="subscribe-now">subscribe-now</Link>
                  <img src="../../public/images/single-man.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="docTimeCare-1 ">
                <div className="header ">
                  <div className="">
                    <h4 className="mb-0 font-bold">DocTime Care</h4>
                    <p className="text-danger mb-0">For 1 adult</p>
                  </div>
                  <div className="yearly-price">
                    <h3 data-v-1f2e88ae="" className="font-poppins-bold">
                      ৳ 180<span className="font-poppins">/mo</span>
                    </h3>
                    <p>billed yearly</p>
                  </div>
                </div>
                <div className="docTimeCare-1-article mt-3">
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis animi dicta omnis consequatur quasi enim!
                  </p>
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, minus?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero, minus?
                  </p>
                </div>
                <div className="bottom">
                  <Link className="subscribe-now">subscribe-now</Link>
                  <img src="../../public/images/single-man.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider">
              <div className="docTimeCare-1 ">
                <div className="header ">
                  <div className="">
                    <h4 className="mb-0 font-bold">DocTime Care</h4>
                    <p className="text-danger mb-0">For 1 adult</p>
                  </div>
                  <div className="yearly-price">
                    <h3 data-v-1f2e88ae="" className="font-poppins-bold">
                      ৳ 180<span className="font-poppins">/mo</span>
                    </h3>
                    <p>billed yearly</p>
                  </div>
                </div>
                <div className="docTimeCare-1-article mt-3">
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis animi dicta omnis consequatur quasi enim!
                  </p>
                  <p className="inline-flex">
                    <span className="mt-1">
                      <TiTick />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, minus?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Vero, minus?Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Vero, minus?
                  </p>
                </div>
                <div className="bottom">
                  <Link className="subscribe-now">subscribe-now</Link>
                  <img src="../../public/images/single-man.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HealthPack;
