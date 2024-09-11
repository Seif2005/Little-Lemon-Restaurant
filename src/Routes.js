import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReservePage from "./pages/ReservePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: "/reserve",
        element: <ReservePage/>
    }
  ]);
  export default router;