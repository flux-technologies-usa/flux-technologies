import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./pages/Routes/Routes";

function App() {
  document.querySelector("html").setAttribute("data-theme", "dark");

  return (
    <div className="max-w-sm md:max-w-full overflow-hidden">
      
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
