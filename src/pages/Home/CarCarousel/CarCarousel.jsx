import React from "react";
import { freedomCarPng, jeepCar, darkBg } from "../../../assets/Callback";
import "./../Home.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CarCarousel.scss";
import { Pagination,Autoplay } from "swiper/modules";
const CarCarousel = () => {
  return (
    <div
      className=" h-[60vh] bg-center bg-cover flex flex-col justify-center bg-no-repeat w-full md:h-[95vh]"
      style={{ backgroundImage: `url(${darkBg})` }}>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full">
        <SwiperSlide>
          <span className="bg-[#BDBABA] px-5 text-sm tracking-widest text-black">
            NOW DELIVERING
          </span>
          <span className="text-white sm:text-4xl text-2xl">Flux Village</span>
          <img
            src="https://i.postimg.cc/bwWLjx4W/graycarwt.png"
            alt=""
            className=" md:max-w-[500px] md:max-h-[250px] lg:max-w-[600px] lg:max-h-[300px] sm:max-w-[400px] sm:max-h-[200px] max-w-[350px] max-h-[190px]"
          />
          <Link to="/village" className="btn rounded-none carbtn border-none">
            Design Yours
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <span className="bg-[#BDBABA] px-5 text-sm tracking-widest text-black">
            NOW DELIVERING
          </span>
          <span className="text-white text-4xl">Flux Freedom</span>
          <img
            src="https://i.postimg.cc/28cNhtBW/blackV.png"
            alt=""
            className=" md:max-w-[500px] md:max-h-[250px] lg:max-w-[600px] lg:max-h-[300px] sm:max-w-[400px] sm:max-h-[200px] max-w-[350px] max-h-[190px]"
          />
          <Link to="/freedom" className="btn rounded carbtn border-none">
            Design Yours
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarCarousel;
