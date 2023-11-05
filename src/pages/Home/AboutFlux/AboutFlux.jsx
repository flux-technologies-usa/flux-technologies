import React from "react";

const AboutFlux = () => {
  return (
    <div className="AboutFluxBackgroundImg">
      <h1 className="text-center pt-[45px] text-[17px] font-bold text-[#ddc862]">
        ABOUT FLUX
      </h1>
      {/* for big device */}
      <div className="text-center text-[32px] text-white mt-[60px] font-semibold hidden md:block md:pb-20">
      Introducing the groundbreaking First African owned Electric Car, a testament to the ever-evolving technology that urges us to transcend the mere concept of mobility. It compels us to envision a world where the journey of life takes precedence over everything else; where we cease to be limited by the constraints of tomorrow and instead shape a future where greatness and righteousness are no longer mutually exclusive. With the arrival of Flux Freedom, we have ushered in a new era. As Flux Technologies, LLC pioneers this remarkable innovation, our dedication to humanitarian efforts remains unwavering. For every vehicle sold, we pledge to donate a percentage of the proceeds to various esteemed charities across Africa. Our commitment extends beyond serving our valued consumers; we strive to safeguard the environment, paving the way for a brighter and sustainable future.
      </div>
      {/* for small device */}
      <div className="text-start text-2xl  text-white  font-semibold mx-5 block md:hidden">
        <h1 className="mt-5 pb-16">
        Introducing the groundbreaking First African owned Electric Car, a testament to the ever-evolving technology that urges us to transcend the mere concept of mobility. It compels us to envision a world where the journey of life takes precedence over everything else; where we cease to be limited by the constraints of tomorrow and instead shape a future where greatness and righteousness are no longer mutually exclusive. With the arrival of Flux Freedom, we have ushered in a new era. As Flux Technologies, LLC pioneers this remarkable innovation, our dedication to humanitarian efforts remains unwavering. For every vehicle sold, we pledge to donate a percentage of the proceeds to various esteemed charities across Africa. Our commitment extends beyond serving our valued consumers; we strive to safeguard the environment, paving the way for a brighter and sustainable future.
        </h1>
      </div>
    </div>
  );
};

export default AboutFlux;
