import React, { useContext } from "react";
import "../Login.scss";
import { AuthContext } from "../../../context api/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  // context api
  const { forgotPassword } = useContext(AuthContext);

  const navigate = useNavigate();

  //   fuctions
  const handleForgotPassword = (event) => {
    event.preventDefault();

    // email
    const email = event.target.email.value;

    // forget email
    forgotPassword(email)
      .then(() => {
        toast.success("Password reset email send successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="py-56 bg-black h-screen">
      <form
        onSubmit={handleForgotPassword}
        className="flex flex-col items-center justify-center border md:max-w-[500px] mx-auto rounded bg-black py-10 px-12 gap-5 l-wrapper"
      >
        <span className="text-black text-lg">Enter your email to send</span>
        <div className="flex flex-col w-full gap-1">
          <input
            type="email"
            name="email"
            placeholder="email"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
          />
        </div>
        <button
          type="submit"
          className="border py-2 w-full text-black hover:text-white bg-white hover:bg-black rounded custom-btn mt-4 font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
