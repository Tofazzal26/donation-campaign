import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../Pages/Home/Home";
import CardDetails from "../Components/CardDetails/CardDetails";
import Statistics from "../Components/Statistics/Statistics";
import Donation from "../Components/Donation/Donation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/cardDetails/:id",
        element: <CardDetails />,
      },
      {
        path: "/statistics",
        element: <div>Hello statistics</div>,
      },
    ],
  },
]);

export default router;
