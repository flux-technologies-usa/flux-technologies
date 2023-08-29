import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { freedomCarPng, jeepCar } from "../../../assets/Callback";
import "./../Home.scss";
import { Link } from "react-router-dom";

const CarCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className=" ">
      <Slider {...settings}>
        <div className="text-center  coustomBackgroundImg ">
          <div>
            <div className="bg-[#656363]  mx-auto  brightness-200 w-[65%]  md:w-[18%] md:mt-[60px]">
              <h1 className="text-black text-[16px] p-1 tracking-[5px]">
                NOW DELIVERING
              </h1>
            </div>
            <div>
              <h1 className="text-3xl font-semibold z-10 mt-3">Flux Village</h1>
            </div>
          </div>
          <div className="mt-[22%] md:mt-[5%]">
            <img className="mx-auto w-[100%]" src={jeepCar} alt="" />
          </div>
          <Link to="/village">
            <button className="videoCustomButton  mt-[20%] z-10 md:mt-[4%]">
              Design yours
            </button>
          </Link>
        </div>
        <div className="text-center  coustomBackgroundImg ">
          <div>
            <div className="bg-[#656363]  mx-auto  brightness-200 w-[65%]  md:w-[18%] md:mt-[60px]">
              <h1 className="text-black text-[16px] p-1 tracking-[5px]">
                NOW DELIVERING
              </h1>
            </div>
            <div>
              <h1 className="text-3xl font-semibold z-10 mt-3">Flux Freedom</h1>
            </div>
          </div>
          <div className="mt-[22%] md:mt-[5%]">
            <img className="mx-auto w-[100%]" src={freedomCarPng} alt="" />
          </div>
          <Link to="/village">
            <button className="videoCustomButton  mt-[20%] z-10 md:mt-[4%]">
              Design yours
            </button>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default CarCarousel;
