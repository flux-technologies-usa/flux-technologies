import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../layout/Main";
import Contact from "../Contact/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/contact',
          element : <Contact></Contact>
      }
    ]
  },
]);

export default routes;
