import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./pages/Routes/Routes";
// max-w-sm md:max-w-7xl lg:w-full
function App() {
  document.querySelector("html").setAttribute("data-theme", "dark");

  return (
    <div className="max-w-[400px] md:max-w-full overflow-hidden mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
