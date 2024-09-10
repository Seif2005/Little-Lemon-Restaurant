import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: "/reserve",
        element: <></>
    },
    {
        path: "/confirmed",
        element: <></>
    }
  ]);
  export default router;