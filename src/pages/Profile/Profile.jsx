import React, { useContext, useState } from "react";
import "./Profile.scss";
import { AuthContext } from "../../context api/UserContext";
import { FaRegEdit } from "react-icons/fa";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const [hover, setHover] = useState(false);
  console.log(hover);



  return (
    <div className=" bg-black pt-10">
      <div className="flex flex-col items-center justify-center bordermx-auto rounded profile-wrapper gap-5 md:px-0 px-5 py-24 overflow-hidden md:max-w-[500px] mx-auto">
        {/* profile image */}
        <div className="flex relative">
          <div
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className="w-48 rounded-full bg-white overflow-hidden">
            <img
              src={`${
                user?.photoURL
                  ? user?.photoURL
                  : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              }`}
              alt="default profile"
              className="w-full"
            />
          </div>
          <div
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className={`w-48 h-48 rounded-full bg-white opacity-50 border absolute flex justify-center items-center ${
              hover ? "" : "ml-[1000px]"
            }`}>
            <FaRegEdit
              size={30}
              className="text-slate-800 cursor-pointer"></FaRegEdit>
          </div>
        </div>
        {/* profile image */}

        <span className="text-lg font-semibold">My Profile</span>

        <form className="flex flex-col w-full items-center gap-5">
          <div className="flex flex-col w-full">
            <span className="text-black">Name</span>
            <input
              type="text"
              name=""
              id=""
              defaultValue={user.displayName}
              className={`bg-white px-5 py-2 rounded`}
            />
          </div>

          {/* eamil */}

          <div className="flex flex-col w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder={user?.email}
              disabled
              className="bg-white px-5 py-2 rounded cursor-not-allowed"
            />
          </div>

          {/* email */}

          {/* password */}

          {/* <div className="flex flex-col w-full">
            <input
              type="password"
              name=""
              id=""
              placeholder="current password"
              className="bg-white px-5 py-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="new password"
              className="bg-white px-5 py-2 rounded"
            />
          </div> */}
          <div className="flex justify-end w-full">
            <button className="btn" type="submit">update profile</button>
          </div>
        </form>
        {/* password */}
      </div>
    </div>
  );
};

export default Profile;
