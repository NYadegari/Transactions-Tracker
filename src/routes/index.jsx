import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/main";
import HomePage from "../pages/Home";
import Wallet from "../pages/Wallet";
import Error from "../pages/Error";
import PrivateLayout from "../Layout/private";
import Diagram from "../pages/Diagram";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "diagram",
        element: <Diagram />,
      }
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
