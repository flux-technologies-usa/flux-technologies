import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../layout/Main";
import Contact from "../Contact/Contact";
import About from "../About/About";

import Subscribe from "../Subscribe/Subscribe";
import Privacy from "../Privacy/Privacy";
import StayUpdate from "../StayUpdate/StayUpdate";
import CarDesign from "../CarDesign/CarDesign";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "../../components/TermsAndCondition/TermsAndCondition";
import FluxFreedom from "../FluxFreedom/FluxFreedom";
import CarDesign2 from "../CarDesign/CarDesign2";
import Store from "../Store/Store";
import CarShop from "../CarDesign/CarShop/CarShop";

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
        element: <CarDesign></CarDesign>,
      },
      {
        path:'/freedom',
        element:<FluxFreedom/>
      },      
      {
        path:'/carshop',
        element:<CarShop/>
      }
    ],
  },
]);

export default routes;
