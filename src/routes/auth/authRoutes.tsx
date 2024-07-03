// src/routes/auth/authRoutes.tsx
import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../components";

// Define `authRoutes` como un objeto `RouteObject`
const authRoutes: RouteObject = {
  path: "auth", // Ruta relativa a la ruta padre definida en `createProtectedRoute`
  element: (
    <Loadable component={lazy(() => import("../../pages/auth/authPage"))} />
  ),
};

export default authRoutes;
