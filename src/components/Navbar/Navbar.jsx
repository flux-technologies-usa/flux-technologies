import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, breadCrumb } from "./../../assets/Callback";
import Button from "../Button/Button";
import { BsCart3 } from "react-icons/bs";
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
      className={`fixed top-0 w-full z-50 ${
        top
          ? "bg-transparent duration-[.3s] ease-in"
          : "bg-black duration-[.3s] ease-in"
      }`}>
      <div className="flex justify-between  items-center navbar-container bg-transparent text-[17px] md:mx-[3%] relative">
        <div className="hidden md:flex md:items-center">
          <CustomLink value={"ABOUT FLUX"}></CustomLink>
          {/* DESIGN YOURS hover div */}
          <div
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className=" ml-[40px] py-[40px] relative font-semibold">
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
            <div
              className={`${
                hover ? "h-[92px]" : "h-0 opacity-0"
              } absolute top-[70%] w-[110px] overflow-scroll manageScrollBar bg-[#161816] p-1 rounded duration-300`}>
              <Link>
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
                  <h1>FLUX VILLAGE</h1>
                </div>
              </Link>
              <Link>
                <div
                  onMouseEnter={() => {
                    setButtonHoverFreedom(true);
                  }}
                  onMouseLeave={() => {
                    setButtonHoverFreedom(false);
                  }}
                  className={`bg-transparent p-4 mt-5 ${
                    buttonHoverFreedom ? "bg-[#635929]" : "bg-transparent"
                  }`}>
                  <h1>FLUX FREEDOM</h1>
                </div>
              </Link>
            </div>
          </div>
          <CustomLink value={"CONTACT"}></CustomLink>
        </div>
        <Link to="/">
          <img className="w-[55%] cursor-pointer" src={logo} alt="" />
        </Link>
        <div className="flex items-center">
          <BsCart3 className="text-[24px] cursor-pointer hidden" />
          <div className="hidden md:block">
            <CustomLink value={"STORE"}></CustomLink>
          </div>
          <Button value={"STAY UPDATE"} left={"ml-[40px]"} />

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
                    <label
                      htmlFor="my-drawer-4"
                      className="text-[18px] p-2 absolute right-[10%] hover:opacity-80 cursor-pointer ">
                      X
                    </label>
                    <div className="mt-[17%] flex">
                      <Link>
                        <div className="text-[18px] font-semibold text-[#ddc861] hover:opacity-70 select-none">
                          Home
                        </div>
                      </Link>
                      <Link>
                        <div className="text-[18px] ml-[30px] font-semibold text-[#ddc861] hover:opacity-70 select-none">
                          Stay Update
                        </div>
                      </Link>
                    </div>
                    <Link className="">
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
                          <Link
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

                    <Link className="">
                      <div className="select-none text-[16px] mt-[8%] font-semibold text-white hover:opacity-70">
                        Store
                      </div>
                    </Link>
                    <Link className="">
                      <div className="select-none text-[16px] my-[20%] font-semibold text-white hover:opacity-70">
                        More About Flux
                      </div>
                    </Link>
                    <Link className="">
                      <div className="text-[16px]  font-semibold text-white hover:opacity-70 select-none">
                        Contact Us
                      </div>
                    </Link>
                    <Link className="">
                      <div className="text-[16px] mt-[5%]  font-semibold text-white hover:opacity-70 select-none">
                        Privacy policy
                      </div>
                    </Link>
                    <Link className="">
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
