import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth/authRoutes";
import errorRoutes from "./error/errorRoutes";
import { Loadable, Layout } from "../components"; // Ensure correct import

const HomePageComponent = (props: any) =>
  Loadable({
    component: lazy(() => import("../pages/home/homePage")),
    ...props,
  });
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePageComponent />,
      },
      authRoutes,
      errorRoutes,
    ],
  },
]);

export default router;
