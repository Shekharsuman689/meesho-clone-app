import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerImageTwo from "../assets/carousalImages/bannerimgOne.png";
import bannerimgOne from '../assets/carousalImages/bannerimgTwo.png';
import bannerimgthree from '../assets/carousalImages/bannerimgthree.png';
import bannerimgfour from '../assets/carousalImages/bannerimgfour.png';
import bannerimgfive from '../assets/carousalImages/bannerimgfive.png';

function Carousel() {
  return (
    <div className="xl:h-[350px] h-[200px] mt-10">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[100%]"
      >
        <SwiperSlide className="h-full w-full">
          <img src={bannerImageTwo} alt="Carousel POR" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img src={bannerimgfour} alt="Carousel POR" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full bg-white">
          <img src={bannerimgOne} alt="Carousel POR" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img src={bannerimgthree} alt="Carousel POR" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="h-full w-full">
          <img src={bannerimgfive} alt="Carousel POR" className="h-full w-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
