import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReservePage from "./pages/ReservePage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: "/reserve",
        element: <ReservePage/>
    },
    {
      path:"/confirm",
      element: <ConfirmedBooking/>
    }
  ]);
  export default router;