import React from "react";
import "./Signup.scss";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../context api/UserContext";
import { useState } from "react";
const SignUp = () => {
  const navigate = useNavigate();

  // context api
  const { signUp, googleLogIn } = useContext(AuthContext);

  // all state
  const [error, setError] = useState("");

  // function
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const first = form.firstname.value;
    const last = form.lastname.value;
    const name = first + " " + last;
    const email = form.email.value;
    const postal = form.postal.value;
    const password = form.password.value;

    const user = {
      name,
      email,
      postal,
    };

    fetch("http://localhost:8080/api/v1/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        signUp(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate("/");
            toast.success("User sign up successfully");
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        toast.success("User sign up successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="py-56 bg-black">
      <form onSubmit={handleSignUp} className="flex flex-col items-center justify-center border md:max-w-[500px] mx-auto rounded bg-black py-10 px-12 gap-5 l-wrapper">
        <span className="text-black text-2xl font-semibold">Sign Up Now</span>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">First Name</span>
          <input
            type="text"
            name="firstname"
            placeholder="Jhon"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">Last Name</span>
          <input
            type="text"
            name="lastname"
            placeholder="Wick"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">Email</span>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">Postal Code</span>
          <input
            type="number"
            name="postal"
            placeholder="123-123"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
            required
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <span className="text-black text-sm">Password</span>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="bg-white py-2 px-3 text-black focus:bg-black rounded focus:text-white input-sec"
            required
          />
        </div>
        <h1 className="text-red-600 my-2 text-start">{error}</h1>
        <button
          type="submit"
          className="border py-2 w-full text-black hover:text-white bg-white hover:bg-black rounded custom-btn mt-4 font-semibold">
          Sign Up
        </button>
        <span className="text-black">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login Here
          </Link>
        </span>
        <div className="divider">OR</div>
        <button
          onClick={() => {
            handleGoogleLogIn();
          }}
          className="border py-2 w-full text-black hover:text-white bg-white hover:bg-black rounded custom-btn flex flex-row justify-center gap-3 font-semibold">
          <FcGoogle size={25} />
          <span>Sign Up with google</span>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
