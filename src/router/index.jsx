import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Servicios from "../pages/Servicios";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        // element: < />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/servicios",
        element: <Servicios />,
      },
    ],
  },
]);
