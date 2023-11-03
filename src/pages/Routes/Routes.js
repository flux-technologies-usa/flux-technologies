import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../layout/Main";
import Contact from "../Contact/Contact";
import About from "../About/About";
import PrivateRoutes from "./PrivateRoutes";

import Subscribe from "../Subscribe/Subscribe";
// import Privacy from "../Privacy/Privacy";
import StayUpdate from "../StayUpdate/StayUpdate";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "../../components/TermsAndCondition/TermsAndCondition";
import FluxFreedom from "../FluxFreedom/FluxFreedom";
import Store from "../Store/Store";
// import Cart from "../Cart/Cart/Cart";
import CartMain from "../Cart/CartMain";
import CarShop from "../CarDesign/CarShop/CarShop";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Profile from "../Profile/Profile";
import Success from "../../components/Success/Success";
import Cancel from "../../components/Cancel/Cancel";
import Orders from "../Orders/Orders";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/store",
        element: <Store></Store>,
      },
      {
        path: "/subscribe",
        element: <Subscribe></Subscribe>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/stayUpdate",
        element: <StayUpdate></StayUpdate>,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path: "/village",
        element: <CarShop/>
      },
      {
        path: "/freedom",
        element:<FluxFreedom/>,
      },
      {
        path: "/cart",
        element: <CartMain></CartMain>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/cancel",
    element: <Cancel />,
  },
]);

export default routes;
