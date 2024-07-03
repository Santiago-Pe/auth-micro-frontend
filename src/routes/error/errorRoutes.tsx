// src/routes/error/errorRoutes.tsx
import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../components";

// Define las rutas de error como un objeto que cumpla con RouteObject
const errorRoutes: RouteObject = {
  path: "*", // Utiliza el comodín para capturar cualquier ruta no definida
  element: (
    <Loadable component={lazy(() => import("../../pages/error/errorPage"))} />
  ),
};

export default errorRoutes;
