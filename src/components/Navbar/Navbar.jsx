import { Link } from "react-router-dom";
import { logo, breadCrumb, } from "./../../assets/Callback";
import Button from "../Button/Button";
import { BsCart3 } from "react-icons/bs";
import '../components.scss'
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="flex justify-between  items-center navbar-container bg-transparent text-[17px] md:mx-[3%]">
      <div className="hidden md:flex md:items-center">
        <CustomLink value={"ABOUT FLUX"}></CustomLink>
        <CustomLink value={"DESIGN YOURS"}></CustomLink>
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
        <img className="w-[40px] ml-[40px] " src={breadCrumb} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
