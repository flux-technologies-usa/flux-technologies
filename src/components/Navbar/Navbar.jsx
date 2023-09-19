import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, breadCrumb } from "./../../assets/Callback";
import Button from "../Button/Button";
import { FaShoppingCart } from "react-icons/fa";
import CustomLink from "../CustomLink/CustomLink";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import "../components.scss";
import { useContext } from "react";
import { CartContext } from "../../context api/AddToCartContext";
import { routeContext } from "../../context api/NavbarContex";
import { AuthContext } from "../../context api/UserContext";

const Navbar = () => {
  // context api
  const { products } = useContext(CartContext);
  const { routePath, setRoutePath } = useContext(routeContext);
  const { user, logOut } = useContext(AuthContext);

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
  const dropDownControl = () => {
    setDropDown(!dropDown);
  };

  const scroll = () => {
    if (window.scrollY < 50 && routePath !== "cart") {
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
          <CustomLink
            route={"/about"}
            value={"ABOUT FLUX"}
            routeName={"about"}></CustomLink>

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
              <Link
                onClick={() => {
                  setRoutePath("village");
                }}
                to="/village">
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
                  <Link to="/village">FLUX VILLAGE</Link>
                </div>
              </Link>
              {/* flux freedom */}
              <Link
                onClick={() => {
                  setRoutePath("freedom");
                }}
                to="/freedom">
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
                  <Link to="/freedom">FLUX FREEDOM</Link>
                </div>
              </Link>
            </div>
          </div>
          <CustomLink
            route={"/contact"}
            value={"CONTACT"}
            routeName={"contact"}></CustomLink>
        </div>

        {/* logo */}
        <div
          onClick={() => {
            setRoutePath("home");
          }}>
          <Link to="/">
            <img
              className="w-[40%] cursor-pointer md:w-[55%]"
              src={logo}
              alt=""
            />
          </Link>
        </div>

        <div className="flex items-center">
          {/* Shoping cart */}

          <div
            onClick={() => {
              setRoutePath("cart");
            }}
            className={`dropdown dropdown-end ${
              routePath === "store" ? "" : "hidden"
            }`}>
            <Link to="/cart">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <Link to="/cart">
                    <FaShoppingCart className="text-[18px] text-white cursor-pointer " />
                  </Link>
                  <span className="badge badge-sm indicator-item">
                    {products.length}
                  </span>
                </div>
              </label>
            </Link>
          </div>

          {/* Store and Stay update */}
          <div className="hidden md:block">
            <CustomLink
              route={"/store"}
              value={"STORE"}
              routeName={"store"}></CustomLink>
          </div>
          <div
            onClick={() => {
              setRoutePath("stay");
            }}>
            <Button
              to={"/stayUpdate"}
              value={"STAY UPDATE"}
              left={"ml-[40px]"}
            />
          </div>

          {/* user sign up and profile */}
          <div>
            {user?.uid ? (
              <div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt=""/>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                      <Link to='/profile' className="justify-between">Your Profile</Link>
                    </li>
                    <li>
                      <Link to='/orders'>Orders</Link>
                    </li>
                    <li
                      onClick={() => {
                        logOut();
                      }}>
                      <Link>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <CustomLink
                  route={"/signup"}
                  value={"SIGN UP"}
                  routeName={"signup"}></CustomLink>
              </div>
            )}
          </div>

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
                    <div
                      onClick={() => {
                        setRoutePath("home/stay");
                      }}
                      className="mt-[17%] flex">
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
                    <Link
                      onClick={() => {
                        setRoutePath("about");
                      }}
                      to="/about"
                      className="">
                      <div className="text-[16px] mt-[18%] font-semibold text-white hover:opacity-70 select-none">
                        About Flux
                      </div>
                    </Link>
                    <div
                      onClick={() => {
                        dropDownControl();
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
                            onClick={() => {
                              setRoutePath("village");
                            }}
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
                            onClick={() => {
                              setRoutePath("freedom");
                            }}
                            to="/freedom"
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

                    <Link
                      onClick={() => {
                        setRoutePath("store");
                      }}
                      to="/store"
                      className="">
                      <div className="select-none text-[16px] mt-[8%] font-semibold text-white hover:opacity-70">
                        Store
                      </div>
                    </Link>
                    <Link
                      onClick={() => {
                        setRoutePath("more");
                      }}
                      to="/about"
                      className="">
                      <div className="select-none text-[16px] my-[20%] font-semibold text-white hover:opacity-70">
                        More About Flux
                      </div>
                    </Link>
                    <Link
                      onClick={() => {
                        setRoutePath("contact");
                      }}
                      to="/contact"
                      className="">
                      <div className="text-[16px]  font-semibold text-white hover:opacity-70 select-none">
                        Contact Us
                      </div>
                    </Link>
                    <Link
                      onClick={() => {
                        setRoutePath("contact");
                      }}
                      to="/privacy"
                      className="">
                      <div className="text-[16px] mt-[5%]  font-semibold text-white hover:opacity-70 select-none">
                        Privacy policy
                      </div>
                    </Link>
                    <Link
                      onClick={() => {
                        setRoutePath("contact");
                      }}
                      to="/terms"
                      className="">
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
