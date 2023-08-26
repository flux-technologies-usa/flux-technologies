import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./pages/Routes/Routes";
// max-w-sm md:max-w-7xl lg:w-full
function App() {
  return (
    <div className="max-w-sm md:max-w-full overflow-hidden">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
