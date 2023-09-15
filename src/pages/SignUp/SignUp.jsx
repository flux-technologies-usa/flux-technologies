import React from "react";
import "./Signup.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="py-56 bg-black">
      <div className="flex flex-col items-center justify-center border md:max-w-[500px] mx-auto rounded bg-black py-10 px-12 gap-5 l-wrapper">
        <span className="text-black text-2xl font-semibold">Sign Up Now</span>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">First Name</span>
          <input
            type="text"
            name="firstname"
            id=""
            placeholder="first name"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">Last Name</span>
          <input
            type="text"
            name="lastname"
            id=""
            placeholder="last name"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">Email</span>
          <input
            type="email"
            name="email"
            id=""
            placeholder="email"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">Password</span>
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
          />
        </div>
        <button className="border py-2 w-full text-black hover:text-white bg-white hover:bg-black rounded custom-btn mt-4 font-semibold">
          Sign Up
        </button>
        <span className="text-black">
          Already have an account?{" "}
          <Link to='/login' className="text-blue-500">Login Here</Link>
        </span>
        <div className="divider">OR</div>
        <button className="border py-2 w-full text-black hover:text-white bg-white hover:bg-black rounded custom-btn flex flex-row justify-center gap-3 font-semibold">
          <FcGoogle size={25} />
          <span>Sign Up with google</span>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
