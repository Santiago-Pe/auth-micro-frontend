// src/routes/routes.tsx
import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import authRoutes from "./auth/authRoutes";
import errorRoutes from "./error/errorRoutes";
import { Layout } from "../components";
import ProtectedRoute from "./protectedRoute/protectedRoute";
import homeRoutes from "./home/homeRoutes";

// Función para crear rutas protegidas
const createProtectedRoute = (
  path: string | undefined,
  element: React.ReactNode
) => {
  return {
    path,
    element: <ProtectedRoute path={path} />,
    children: [{ path: path, element: element }],
  };
};

// Define tus rutas

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      createProtectedRoute(homeRoutes.path, homeRoutes.element),
      authRoutes,
      errorRoutes,
    ],
  },
];

// Crea tu enrutador principal usando `createBrowserRouter`
const router = createBrowserRouter(routes);

export default router;
