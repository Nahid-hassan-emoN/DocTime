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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BloodDonation from "./Pages/BloodDonation";
import AllDoctor from "./Pages/AllDoctor";
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
        path: "/blood-donation",
        element: <BloodDonation />,
      },
      {
        path: "/doctors",
        element: <AllDoctor />,
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
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
);
