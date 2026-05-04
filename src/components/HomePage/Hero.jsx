"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper min-h-[40vh]"
      >
        <SwiperSlide>
          <div className="bannerImg min-h-full">
            <div className=" max-w-[600px] mx-auto py-20 ">
              <div className="text-center bg-[#F3EFEA]/85 rounded-2xl space-y-4 py-20">
                <h1 className="text-4xl font-extrabold text-[#2F3A3D]">Find Your Next Read</h1>
                <Link href={"/allbooks"}>
                  <button className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white">
                    Browse Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bannerImg min-h-full">
            <div className=" max-w-[700px] mx-auto py-20 ">
              <div className="text-center bg-[#F3EFEA]/85 rounded-2xl space-y-4 py-20">
                <h1 className="text-4xl font-extrabold text-[#2F3A3D]">
                  Unlock New Worlds of Stories
                </h1>
                <Link href={"/allbooks"}>
                  <button className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white">
                    Start Lending
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bannerImg min-h-full">
            <div className=" max-w-[600px] mx-auto py-20 ">
              <div className="text-center bg-[#F3EFEA]/85 rounded-2xl space-y-4 py-20">
                <h1 className="text-4xl font-extrabold text-[#2F3A3D]">Connect Through Stories</h1>
                <Link href={"/allbooks"}>
                  <button className="btn bg-[#5F737A] hover:bg-[#4C5E64] text-white">
                    Find Adventures
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
