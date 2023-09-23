import React, { useContext, useState } from "react";
import "./Profile.scss";
import { AuthContext } from "../../context api/UserContext";
const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);



  return (
    <div className=" bg-black">
      <div className="flex flex-col items-center justify-center bordermx-auto rounded profile-wrapper gap-5 h-[100vh] overflow-hidden md:max-w-[500px] mx-auto">
        {/* profile image */}
        <div className="w-48 rounded-full bg-white overflow-hidden">
          <img src={user.photoURL} alt="default profile" className="w-full" />
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
              placeholder="email"
              className="bg-white px-5 py-2 rounded"
            />
          </div>

          {/* email */}

          {/* password */}

          <div className="flex flex-col w-full">
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
          </div>
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
