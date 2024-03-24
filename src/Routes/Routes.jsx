import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../Pages/Home/Home";

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
        path: "/donation",
        element: <div>Hello donation</div>,
      },
      {
        path: "/statistics",
        element: <div>Hello statistics</div>,
      },
    ],
  },
]);

export default router;
