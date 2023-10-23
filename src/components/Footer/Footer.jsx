import { Link } from "react-router-dom";
import {AiFillFacebook} from 'react-icons/ai'
import "./../components.scss";
import {
  fbIcon,
  instaIcon,
  twitterIcon,
  worldIcon,
  ytIcon,
} from "../../assets/Callback";
import { ScrollToTop } from "../ScrollTop/ScrollTop";

const Footer = () => {
  const handleNavScroll = () => {
    ScrollToTop();
  };
  return (
    <div>
      {/* footer for big device */}
      <div className="bg-[#e2e0ab] text-black relative  w-[100vw] hidden md:block">
        <div className="pt-[60px] flex gap-[70px] w-[700px] mx-auto">
          <div>
            <h1 className="text-[25px]">Flux Technologies</h1>
            <div className="opacity-80 flex flex-col mt-[35px]">
              <Link
                onClick={handleNavScroll}
                to="/village"
                className="text-[19px] customFooterLink w-[120px] ">
                Design Yours
              </Link>
              <Link
                onClick={handleNavScroll}
                to="/store"
                className="text-[19px] mt-[35px] customFooterLink w-[55px] ">
                Store
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-[25px]">Flux Motors</h1>
            <div className="opacity-80 flex flex-col mt-[35px]">
              <Link
                onClick={handleNavScroll}
                to="/about"
                className="text-[19px] customFooterLink  w-[70px]">
                About
              </Link>
              <Link
                onClick={handleNavScroll}
                to="/stayupdate"
                className="text-[19px] mt-[35px] customFooterLink  w-[110px]">
                Stay Update
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-[25px]">More</h1>
            <div className="opacity-80 flex flex-col mt-[35px]">
              <Link
                onClick={handleNavScroll}
                to="/contact"
                className="text-[19px] customFooterLink  w-[100px]">
                Contact Us
              </Link>
              <Link
                onClick={handleNavScroll}
                to="/privacy"
                className="text-[19px] mt-[35px] customFooterLink ">
                Privacy & Legal
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
            <a href="https://www.instagram.com/fluxtechev/?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr">
              <img
                className="w-[30px] cursor-pointer"
                src={`https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg`}
                alt=""
              />
            </a>
            <a href="https://www.tiktok.com/@fluxtechev?_t=8gU3Q18S3q6&_r=1">
              <img
                className="w-[30px] cursor-pointer"
                src={`https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg`}
                alt=""
              />
            </a>
            <a href="https://www.snapchat.com/add/fluxtechev?invite_id=DBORnuU2&locale=en_US&share_id=z0F1MoxxQSOF8dD8rL2W-A&sid=a6c3f93e8fb54cbaa364cc00222daf77">
              <img
                className="w-[34px] cursor-pointer"
                src={`https://static.vecteezy.com/system/resources/previews/023/741/177/original/snapchat-logo-icon-social-media-icon-free-png.png`}
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/fluxtechev"><AiFillFacebook size={33} color="#0000FF"/></a>
          </div>

          <div>
            <h1>©2024 Flux. All rights reserved</h1>
          </div>
        </div>
        <div className="px-[10%] py-[45px] bg-[#d9c8af] opacity-80">
          <h1>
            Introducing FLUX, Flux Technologies thrilling foray into the world
            of fully electric vehicles. Embrace the power of electric with an
            impressive range of over 400 miles on just a quick recharge. Say
            goodbye to worrying about gas shortages and long lines, as FLUX
            ensures that you will always be on the move. While other continents
            may focus on expensive compact cars for a select few, FLUX
            caters to everyone by setting itself apart by specializing in
            premium, top-of-the-line design and incorporating the latest
            cutting-edge features. The world deserves nothing but the best, and
            FLUX is here to showcase how this company is leading the way towards
            an electrifying future. For those seeking even more security and
            exclusivity, we proudly present the optional Armored version of our
            FLUX Fully Electric Sedan and SUV. We have received early interest
            from wealthy, celebrities and high ranking and we are more than
            happy to cater to their needs.
          </h1>
          <h1 className="mt-7">
            Optional Armored version - Wealthy, celebrities, and high ranking
            contacted us early to create a special Armored Version of our FLUX
            Fully Electric Sedan and SUV. We are happy to oblige. Now ride in
            complete safety and enhanced security that can stop trouble in its
            tracks. All while enjoying an elite look that exudes continental
            style.
          </h1>
          <h1 className="mt-7">
            Cutting-edge Self Driving Ability lets you sit back, relax, and let
            the car be your driver.
          </h1>
          <h1 className="mt-7">
            Powerful All Wheel Drive handles even the toughest terrain.
          </h1>
          <h1 className="mt-7">
            Impressive Touch Screen Dashboard with Advanced Parking Sensor to
            keep your FLUX ride scratch free and pristine.
          </h1>
        </div>
      </div>
      {/* footer for small device */}
      <div className="bg-[#e2e0ab] text-black relative block w-[100vw] md:hidden">
        <div className="pt-[60px] grid grid-cols-2 mx-8 gap-10">
          <div>
            <h1 className=" font-semibold">Flux Technologies</h1>
            <div className="w-[125px] h-[1px] bg-[#bebcbc] mt-3"></div>
            <div className="opacity-80 flex flex-col mt-[15px]">
              <Link
                onClick={handleNavScroll}
                to="/village"
                className=" customFooterLink w-[120px] ">
                Design Yours
              </Link>
              <Link
                onClick={handleNavScroll}
                to="/store"
                className=" customFooterLink  mt-[10px] ">
                Store
              </Link>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold">Flux Motors</h1>
            <div className="w-[125px] h-[1px] bg-[#bebcbc] mt-3"></div>
            <div className="opacity-80 flex flex-col mt-[15px]">
              <Link
                onClick={handleNavScroll}
                to="/village"
                className=" customFooterLink w-[120px] ">
                About
              </Link>
              <Link
                onClick={handleNavScroll}
                to="/store"
                className=" customFooterLink  mt-[10px] ">
                Stay Update
              </Link>
            </div>
          </div>
          <div>
            <h1 className=" font-semibold">More</h1>
            <div className="w-[125px] h-[1px] bg-[#bebcbc] mt-3"></div>
            <div className="opacity-80 flex flex-col mt-[15px]">
              <Link
                onClick={handleNavScroll}
                to="/contact"
                className=" customFooterLink w-[120px] ">
                Contact Us
              </Link>
              <Link
                onClick={handleNavScroll}
                to="/privacy"
                className=" customFooterLink  mt-[10px] ">
                Privacy & Legal
              </Link>
            </div>
          </div>
        </div>
        {/* footer info */}
        <div>
          <div className=" mx-7">
            <div className="flex items-center  mt-5">
              <img className="w-5" src={worldIcon} alt="" />
              <h1>United States – English</h1>
            </div>
            <div className="flex gap-[30px] mt-5">
            <a href="https://www.instagram.com/fluxtechev/?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr">
              <img
                className="w-[20px] cursor-pointer"
                src={`https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg`}
                alt=""
              />
            </a>
            <a href="https://www.tiktok.com/@fluxtechev?_t=8gU3Q18S3q6&_r=1">
              <img
                className="w-[20px] cursor-pointer"
                src={`https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg`}
                alt=""
              />
            </a>
            <a href="https://www.snapchat.com/add/fluxtechev?invite_id=DBORnuU2&locale=en_US&share_id=z0F1MoxxQSOF8dD8rL2W-A&sid=a6c3f93e8fb54cbaa364cc00222daf77">
              <img
                className="w-[24px] cursor-pointer"
                src={`https://static.vecteezy.com/system/resources/previews/023/741/177/original/snapchat-logo-icon-social-media-icon-free-png.png`}
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/fluxtechev"><AiFillFacebook size={24} color="#0000FF"/></a>
          </div>
            <div className="flex gap-8 my-5 ">
              <div>
                <h1>©2024 Flux. All rights reserved</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[10%] py-[45px] bg-[#d9c8af] opacity-80">
          <h1>
            Introducing FLUX, Flux Technologies thrilling foray into the world
            of fully electric vehicles. Embrace the power of electric with an
            impressive range of over 400 miles on just a quick recharge. Say
            goodbye to worrying about gas shortages and long lines, as FLUX
            ensures that you will always be on the move. While other continents
            may focus on expensive compact cars for a select few, FLUX
            caters to everyone by setting itself apart by specializing in
            premium, top-of-the-line design and incorporating the latest
            cutting-edge features. The world deserves nothing but the best, and
            FLUX is here to showcase how this company is leading the way towards
            an electrifying future. For those seeking even more security and
            exclusivity, we proudly present the optional Armored version of our
            FLUX Fully Electric Sedan and SUV. We have received early interest
            from wealthy, celebrities and high ranking and we are more than
            happy to cater to their needs.
          </h1>
          <h1 className="mt-7">
            Optional Armored version - Wealthy, celebrities, and high ranking
            contacted us early to create a special Armored Version of our FLUX
            Fully Electric Sedan and SUV. We are happy to oblige. Now ride in
            complete safety and enhanced security that can stop trouble in its
            tracks. All while enjoying an elite look that exudes continental
            style.
          </h1>
          <h1 className="mt-7">
            Cutting-edge Self Driving Ability lets you sit back, relax, and let
            the car be your driver.
          </h1>
          <h1 className="mt-7">
            Powerful All Wheel Drive handles even the toughest terrain.
          </h1>
          <h1 className="mt-7">
            Impressive Touch Screen Dashboard with Advanced Parking Sensor to
            keep your FLUX ride scratch free and pristine.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
