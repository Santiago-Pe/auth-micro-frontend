import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../components";

// Define las rutas de error como un objeto que cumpla con RouteObject
const homeRoutes: RouteObject = {
  path: "/", // Utiliza el comodín para capturar cualquier ruta no definida
  element: (
    <Loadable component={lazy(() => import("../../pages/home/homePage"))} />
  ),
};

export default homeRoutes;
