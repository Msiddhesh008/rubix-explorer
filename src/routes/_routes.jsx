
import Home from "../pages/Home";
import MainNet from "../pages/MainNet";
import Subnet from "../pages/Subnet";

export const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mainNet",
    element: <MainNet />,
  },
  {
    path: "/subnet",
    element: <Subnet />,
  },
];
