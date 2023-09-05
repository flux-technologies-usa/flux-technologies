import React from "react";

const AboutFlux = () => {
  return (
    <div className="AboutFluxBackgroundImg">
      <h1 className="text-center pt-[45px] text-[17px] font-bold text-[#ddc862]">
        ABOUT FLUX
      </h1>
      {/* for big device */}
      <div className="text-center text-[32px] text-white mt-[60px] font-semibold hidden md:block">
        <h1>Africa's First Electric Car Debuts in Nigeria. Revolving </h1>
        <h1 className="mt-[27px]">
          technology moves us to think beyond mobility, and design
        </h1>
        <h1 className="mt-[27px]">
          for a world where life is the most important journey we’ll
        </h1>
        <h1 className="mt-[27px]">
          ever take; to look beyond tomorrow and shape a future
        </h1>
        <h1 className="mt-[27px]">
          where we no longer have to choose between doing great
        </h1>
        <h1 className="mt-[27px]">
          things and doing the right thing; and to explore beyond
        </h1>
        <h1 className="mt-[27px]">like to feel truly alive.</h1>
      </div>
      {/* for small device */}
      <div className="text-start text-2xl  text-white  font-semibold mx-5 block md:hidden">
        <h1 className="mt-5 pb-16">
          Africa's First Electric Car Debuts in Nigeria. Revolving technology
          moves us to think beyond mobility, and design for a world where life
          is the most important journey we’ll ever take; to look beyond tomorrow
          and shape a future where we no longer have to choose between doing
          great things and doing the right thing; and to explore beyond like to
          feel truly alive.
        </h1>
        
      </div>
    </div>
  );
};

export default AboutFlux;