import React, { lazy } from "react";
import { Loadable } from "../../components";

// Componente AuthPage cargado dinámicamente con Loadable
const AuthPageComponent = (props: any) =>
  Loadable({
    component: lazy(() => import("../../pages/auth/authPage")),
    ...props,
  });
// Definición de las rutas de login usando Loadable para AuthPageComponent
const authRoutes = {
  path: "/",
  children: [
    {
      path: "auth",
      element: <AuthPageComponent />,
    },
  ],
};

export default authRoutes;
