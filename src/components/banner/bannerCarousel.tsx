"use client";

import * as React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";

import Banner from "./banner";

const BannerCarousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="max-w-screen">
      <SwiperSlide>
        <Banner lg="Prostate.png" md={"flyer_md.png"} sm={"flyer_sm.png"} />
      </SwiperSlide>
      <SwiperSlide>
        <Banner lg="Prostate.png" md={"flyer_md.png"} sm={"flyer_sm.png"} />
      </SwiperSlide>
      <SwiperSlide>
        <Banner lg="Prostate.png" md={"flyer_md.png"} sm={"flyer_sm.png"} />
      </SwiperSlide>
    </Swiper>
  );
};
export default BannerCarousel;
