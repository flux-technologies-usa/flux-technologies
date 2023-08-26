import React from "react";
import CarsCard from "./CarsCard";
import data from "../../../utils/slider.json";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "../../../utils/common";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import './OurStories.css'

const OurStories = () => {
  return (
    <div className="px-16">
      <div className="flex flex-row items-center justify-between my-10">
        <span className="text-5xl text-white">Our stories</span>
        <button className="border-white border px-16 py-5 block text-white button hover:text-black">
        View All
        </button>
      </div>

      <Swiper {...sliderSettings}>
        <SlideNextButton />
        {/* slider */}
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <CarsCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurStories;

// slide button function
const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="mt-10 flex flex-row items-center gap-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-xl font-bold p-3 text-blue-600 border-none rounded-md bg-white cursor-pointer"
      >
        <BiSolidChevronLeft size={25} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-xl font-bold p-3 text-blue-600 border-none rounded-md bg-white cursor-pointer"
      >
        <BiSolidChevronRight size={25} />
      </button>
    </div>
  );
};
