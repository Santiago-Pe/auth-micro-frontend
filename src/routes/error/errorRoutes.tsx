import React, { lazy } from "react";
import { Loadable } from "../../components";

const ErrorPageComponent = (props: any) =>
  Loadable({
    component: lazy(() => import("../../pages/error/errorPage")),
    ...props,
  });

const errorRoutes = {
  path: "*",
  element: <ErrorPageComponent />,
};

export default errorRoutes;
