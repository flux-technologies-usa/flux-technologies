import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, breadCrumb } from "./../../assets/Callback";
import Button from "../Button/Button";
import { FaShoppingCart } from "react-icons/fa";
import CustomLink from "../CustomLink/CustomLink";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import "../components.scss";

const Navbar = () => {
  // all states
  const [top, setTop] = useState(true);
  const [nav, setNav] = useState(0);
  const [hover, setHover] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [buttonHoverVillage, setButtonHoverVillage] = useState(false);
  const [buttonHoverFreedom, setButtonHoverFreedom] = useState(false);
  const [buttonHoverVillageDrop, setButtonHoverVillageDrop] = useState(false);
  const [buttonHoverFreedomDrop, setButtonHoverFreedomDrop] = useState(false);

  // functions
  const scroll = () => {
    if (window.scrollY < 50) {
      setTop(true);
    } else {
      setTop(false);
    }
    setNav(window.scrollY);
  };

  // use Effects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [nav]);
  return (
    <div
      className={`p-5  fixed top-0 w-full z-50 md:p-0 ${
        top
          ? "bg-transparent duration-[.3s] ease-in"
          : "bg-black duration-[.3s] ease-in"
      }`}>
      <div className="flex justify-between  items-center navbar-container bg-transparent text-[17px] md:mx-[3%] relative">
        <div className="hidden md:flex md:items-center">
          <CustomLink route={"/about"} value={"ABOUT FLUX"}></CustomLink>

          <div
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className=" ml-[40px] py-[40px] relative font-semibold">
            {/* DESIGN YOURS hover div */}
            <div
              className={`w-full bg-[#ddc861] h-[1px] absolute top-2  ${
                hover
                  ? "opacity-100 duration-500 ease-in "
                  : "opacity-0 duration-500 ease-in"
              }`}></div>
            <Link
              className={`py-[30px] font-semibold ${
                hover ? "text-[#ddc861]" : ""
              } duration-500 ease-in`}>
              DESIGN YOURS
            </Link>
            {/* hover flux */}
            <div
              className={`${
                hover ? "h-[92px]" : "h-0 opacity-0"
              } absolute top-[70%] w-[110px] overflow-scroll manageScrollBar bg-[#161816] p-1 rounded duration-300`}>
              {/* flux village */}
              <Link to="/village">
                <div
                  onMouseEnter={() => {
                    setButtonHoverVillage(true);
                  }}
                  onMouseLeave={() => {
                    setButtonHoverVillage(false);
                  }}
                  className={` px-4 py-3 text-white ${
                    buttonHoverVillage ? "bg-[#635929]" : "bg-transparent"
                  }`}>
                  <Link to='/village'>FLUX VILLAGE</Link>
                </div>
              </Link>
              {/* flux freedom */}
              <Link>
                <div
                  onMouseEnter={() => {
                    setButtonHoverFreedom(true);
                  }}
                  onMouseLeave={() => {
                    setButtonHoverFreedom(false);
                  }}
                  className={`p-4 mt-5 ${
                    buttonHoverFreedom ? "bg-[#635929]" : "bg-transparent"
                  }`}>
                  <Link to='/freedom'>FLUX FREEDOM</Link>
                </div>
              </Link>
            </div>
          </div>
          <CustomLink route={"/contact"} value={"CONTACT"}></CustomLink>
        </div>

        {/* logo */}
        <Link to="/">
          <img className="w-[40%] cursor-pointer md:w-[55%]" src={logo} alt="" />
        </Link>

        <div className="flex items-center">
          {/* Shoping cart */}
          <FaShoppingCart className="text-[18px] text-white cursor-pointer hidden" />

          {/* Store and Stay update */}
          <div className="hidden md:block">
            <CustomLink route={"/store"} value={"STORE"}></CustomLink>
          </div>
          <Button to={"/stayUpdate"} value={"STAY UPDATE"} left={"ml-[40px]"} />

          {/* drawer */}
          <div className="cursor-pointer">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button cursor-pointer">
                  <img
                    className="w-[40px] ml-[40px] "
                    src={breadCrumb}
                    alt=""
                  />
                </label>
              </div>
              <div className="drawer-side cursor-auto">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[340px] min-h-full bg-black text-base-content">
                  <div className="mt-[10%] mx-[2%] ">
                    {/* colse button */}
                    <label
                      htmlFor="my-drawer-4"
                      className="text-[18px] p-2 absolute right-[10%] hover:opacity-80 cursor-pointer ">
                      X
                    </label>
                    {/* all buttons */}
                    <div className="mt-[17%] flex">
                      <Link>
                        <div className="text-[18px] font-semibold text-[#ddc861] hover:opacity-70 select-none">
                          Home
                        </div>
                      </Link>
                      <Link to="/stayUpdate">
                        <div className="text-[18px] ml-[30px] font-semibold text-[#ddc861] hover:opacity-70 select-none">
                          Stay Update
                        </div>
                      </Link>
                    </div>
                    <Link to="/about" className="">
                      <div className="text-[16px] mt-[18%] font-semibold text-white hover:opacity-70 select-none">
                        About Flux
                      </div>
                    </Link>
                    <div
                      onClick={() => {
                        setDropDown(!dropDown);
                      }}
                      className="text-[16px] mt-[8%] font-semibold text-white cursor-pointer hover:opacity-70">
                      <div className="flex justify-between select-none">
                        <span>Design Yours</span>
                        {dropDown ? <BiChevronDown /> : <BiChevronUp />}
                      </div>
                      <div className={dropDown ? "block" : "hidden"}>
                        <div className={`px-5 py-7`}>
                          {/* Flux village drower*/}
                          <Link
                            to="/village"
                            onMouseEnter={() => {
                              setButtonHoverVillageDrop(true);
                            }}
                            onMouseLeave={() => {
                              setButtonHoverVillageDrop(false);
                            }}>
                            <div
                              className={`p-3 text-white select-none ${
                                buttonHoverVillageDrop ? "bg-[#635929]" : ""
                              }`}>
                              Flux Village
                            </div>
                          </Link>

                          {/* Flux freedom drower*/}
                          <Link
                            onMouseEnter={() => {
                              setButtonHoverFreedomDrop(true);
                            }}
                            onMouseLeave={() => {
                              setButtonHoverFreedomDrop(false);
                            }}>
                            <div
                              className={`p-3 text-white select-none ${
                                buttonHoverFreedomDrop ? "bg-[#635929]" : ""
                              }`}>
                              Flux Freedom
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <Link to="/store" className="">
                      <div className="select-none text-[16px] mt-[8%] font-semibold text-white hover:opacity-70">
                        Store
                      </div>
                    </Link>
                    <Link to="/about" className="">
                      <div className="select-none text-[16px] my-[20%] font-semibold text-white hover:opacity-70">
                        More About Flux
                      </div>
                    </Link>
                    <Link to="/contact" className="">
                      <div className="text-[16px]  font-semibold text-white hover:opacity-70 select-none">
                        Contact Us
                      </div>
                    </Link>
                    <Link to="/privacy" className="">
                      <div className="text-[16px] mt-[5%]  font-semibold text-white hover:opacity-70 select-none">
                        Privacy policy
                      </div>
                    </Link>
                    <Link to="/terms" className="">
                      <div className="text-[16px] mt-[5%] font-semibold text-white hover:opacity-70 select-none">
                        Terms of Use
                      </div>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* drawer end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
