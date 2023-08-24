import { Link } from "react-router-dom";
import "./../components.scss";
import {
  fbIcon,
  instaIcon,
  twitterIcon,
  worldIcon,
  ytIcon,
} from "../../assets/Callback";

const Footer = () => {
  return (
    <div className="bg-[#e2e0ab] text-black relative block w-[100vw]">
      <div className="pt-[60px] flex gap-[70px] w-[700px] mx-auto">
        <div>
          <h1 className="text-[25px]">Flux Technologies</h1>
          <div className="opacity-80 flex flex-col mt-[35px]">
            <Link className="text-[19px] customFooterLink w-[120px] ">
              Design Yours
            </Link>
            <Link className="text-[19px] mt-[35px] customFooterLink w-[55px] ">
              Store
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-[25px]">Flux Motors</h1>
          <div className="opacity-80 flex flex-col mt-[35px]">
            <Link className="text-[19px] customFooterLink  w-[70px]">
              About
            </Link>
            <Link className="text-[19px] mt-[35px] customFooterLink  w-[110px]">
              Stay Update
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-[25px]">More</h1>
          <div className="opacity-80 flex flex-col mt-[35px]">
            <Link className="text-[19px] customFooterLink  w-[100px]">
              Contact Us
            </Link>
            <Link className="text-[19px] mt-[35px] customFooterLink ">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      {/* footer info */}
      <div className="flex justify-around mt-[70px] pb-[90px]">
        <div className="flex">
          <img src={worldIcon} alt="" />
          <h1>United States – English</h1>
        </div>
        <div className="flex gap-[30px]">
          <img className="w-[20px]" src={instaIcon} alt="" />
          <img className="w-[20px]" src={twitterIcon} alt="" />
          <img className="w-[20px]" src={ytIcon} alt="" />
          <img className="w-[20px]" src={fbIcon} alt="" />
        </div>
        <div>
          <h1>Legal</h1>
        </div>
        <div>
          <h1>©2022 Flux. All rights reserved</h1>
        </div>
      </div>
      <div className="px-[10%] py-[45px] bg-[#d9c8af] opacity-80">
        <h1>
          <sup className="pr-1">1</sup>
          FLUX is Africa's exciting entry into the fully electric automobile
          space. Step up to full electric power with a huge range of over 800km
          on a single 30 min recharge. The next time there’s a gas shortage, and
          all your friends are waiting in line - YOU won't care. Unlike other
          continents that push pricey compacts for the working person, FLUX
          specializes in premium elite design and the very latest cutting-edge
          features. Africa deserves nothing less. Show the world Africa is
          leading the way to the future.
        </h1>
        <h1 className="mt-7">
          <sup className="pr-1">2</sup>
          Optional Armored version - Wealthy industrialists and high placed
          politicians contacted us early to create a special Armored Version of
          our FLUX Fully Electric Sedan and SUV. We are happy to oblige. Now
          ride in complete safety and enhanced security that can stop trouble in
          its tracks. All while enjoying an elite look that exudes continental
          style
        </h1>
        <h1 className="mt-7">
          <sup className="pr-1">3</sup>
          Cutting-edge Self Driving Ability lets you sit back, relax, and let
          the car be your driver.
        </h1>
        <h1 className="mt-7">
          <sup className="pr-1">4</sup>
          Powerful All Wheel Drive handles even the toughest terrain. potholes?
          No problem.
        </h1>
        <h1 className="mt-7">
          <sup className="pr-1">5</sup>
          Impressive Touch Screen Dashboard with Advanced Parking Sensor to keep
          your FLUX ride scratch free and pristine.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
