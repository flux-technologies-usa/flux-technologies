import React from "react";
import "./Profile.scss";
import {FaArrowLeft} from 'react-icons/fa6'
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="py-56 bg-black">
      <div className="flex flex-col items-center justify-center border md:max-w-[1000px] mx-auto rounded profile-wrapper gap-10 py-24 overflow-hidden relative">


        {/* back arrow */}
        <Link to='/' className="absolute top-4 left-4 z-10 text-white text-xl"><FaArrowLeft/></Link>
        {/* back arrow */}


        {/* background image */}
        <img src="https://i.postimg.cc/L41kjpLc/profile-Background-min.jpg" alt="" className="absolute w-full h-[30%] object-cover top-0"/>
        {/* background image */}


        {/* profile image */}
        <div className="w-48 rounded-full border bg-white z-10">
          <img
            src="https://i.postimg.cc/cHPgkvyQ/default-profile-img.png"
            alt="default profile"
          />
        </div>
        {/* profile image */}

        <span className="text-black text-2xl font-semibold">Leon Ali</span>

        <div className="flex flex-row items-center justify-center gap-5 w-full text-center px-5">
          <span className="text-black font-semibold text-lg w-1/5">Email</span>
          <input
            type="text"
            name=""
            placeholder="leonali274784@gmail.com"
            id=""
            className="py-2 bg-white rounded px-2 w-4/5"
            disabled
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-5 w-full text-center px-5">
          <span className="text-black font-semibold text-lg w-1/5">Email</span>
          <input
            type="text"
            name=""
            placeholder="leonali274784@gmail.com"
            id=""
            className="py-2 bg-white rounded px-2 w-4/5"
            disabled
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-5 w-full text-center px-5">
          <span className="text-black font-semibold text-lg w-1/5">Email</span>
          <input
            type="text"
            name=""
            placeholder="leonali274784@gmail.com"
            id=""
            className="py-2 bg-white rounded px-2 w-4/5"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
