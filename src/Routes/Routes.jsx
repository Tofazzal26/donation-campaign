import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
