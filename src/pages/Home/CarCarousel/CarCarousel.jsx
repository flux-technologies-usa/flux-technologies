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
        <div className="text-center h-[100vh] coustomBackgroundImg">
          <div>
            <div className="bg-[#656363] w-[18%] mx-auto mt-[60px] brightness-200">
              <h1 className="text-black text-[16px] tracking-[5px] p-1 ">
                NOW DELIVERING
              </h1>
            </div>
            <div>
              <h1 className="mt-3 text-4xl font-semibold z-10">Flux Village</h1>
            </div>
          </div>
          <div className="mt-[5%]">
            <img className="mx-auto w-[40%]" src={jeepCar} alt="" />
          </div>
          <Link to="/village">
            <button className="videoCustomButton mt-[4%] z-10">
              Design yours
            </button>
          </Link>
        </div>
        <div className="text-center h-[100vh] coustomBackgroundImg">
          <div>
            <div className="bg-[#656363] w-[18%] mx-auto mt-[60px] brightness-200">
              <h1 className="text-black text-[16px] tracking-[5px] p-1 ">
                NOW DELIVERING
              </h1>
            </div>
            <div>
              <h1 className="mt-3 text-4xl font-semibold">Flux Freedom</h1>
            </div>
          </div>
          <div className="">
            <img className="mx-auto w-[45%]" src={freedomCarPng} alt="" />
          </div>
          <Link>
            <button className="videoCustomButton mt-[4%] z-10">
              Design yours
            </button>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default CarCarousel;
