import React from "react";
import "./Profile.scss";
const Profile = () => {
  return (
    <div className=" bg-black">
      <div className="flex flex-col items-center justify-center bordermx-auto rounded profile-wrapper gap-5 py-24 overflow-hidden">
        {/* profile image */}
        <div className="w-48 rounded-full border bg-white">
          <img
            src="https://i.postimg.cc/cHPgkvyQ/default-profile-img.png"
            alt="default profile"
          />
        </div>
        {/* profile image */}

        <span className="text-lg font-semibold text-black">My Profile</span>

        <form className="flex flex-col w-full items-center gap-5">


          <div className="flex flex-col w-[30%]">
            <span className="text-black">First Name</span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Leon"
              className="bg-white px-5 py-2 rounded"
            />
          </div>

          <div className="flex flex-col w-[30%]">
            <span className="text-black">Last Name</span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Ali"
              className="bg-white px-5 py-2 rounded"
            />
          </div>

          <div className="flex flex-col w-[30%]">
            <span className="text-black">Phone</span>
            <input
              type="number"
              name=""
              id=""
              placeholder="01833952228"
              className="bg-white px-5 py-2 rounded"
            />
          </div>

          <div className="flex w-[30%] justify-end">
            <button className="btn btn-warning">Save</button>
          </div>


        </form>

        {/* eamil */}
        <span className="text-lg font-semibold text-black">Email</span>
        <form className="flex flex-col w-full items-center gap-5">


          <div className="flex flex-col w-[30%]">
            <input
              type="text"
              name=""
              id=""
              placeholder="email"
              className="bg-white px-5 py-2 rounded"
            />
          </div>

          <div className="flex w-[30%] justify-end">
            <button className="btn btn-warning">Save</button>
          </div>


        </form>
        {/* email */}

        {/* password */}
        <span className="text-lg font-semibold text-black">Password</span>
        <form className="flex flex-col w-full items-center gap-5">


          <div className="flex flex-col w-[30%]">
            <input
              type="text"
              name=""
              id=""
              placeholder="current password"
              className="bg-white px-5 py-2 rounded"
            />
          </div>
          <div className="flex flex-col w-[30%]">
            <input
              type="text"
              name=""
              id=""
              placeholder="new password"
              className="bg-white px-5 py-2 rounded"
            />
          </div>

          <div className="flex w-[30%] justify-end">
            <button className="btn btn-warning">Save</button>
          </div>


        </form>
        {/* password */}
      </div>
    </div>
  );
};

export default Profile;
