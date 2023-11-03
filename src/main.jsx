import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Home from "./Pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgetPass from "./Pages/ForgetPass";
import UserProfile from "./Pages/UserProfile";
import TestReport from "./Pages/TestReport";
import Page404 from "./Pages/Page404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <UserProfile />,
      },
      {
        path: "/report",
        element: <TestReport />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forge-password",
        element: <ForgetPass />,
      },

      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
