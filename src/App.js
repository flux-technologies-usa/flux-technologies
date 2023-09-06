import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./pages/Routes/Routes";
import { Toaster } from "react-hot-toast";
// max-w-sm md:max-w-7xl lg:w-full
function App() {
  document.querySelector("html").setAttribute("data-theme", "dark");

  return (
    <div className="max-w-[400px] md:max-w-full overflow-hidden mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
