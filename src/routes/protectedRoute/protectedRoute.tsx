import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../../store/user/user.store";
import ProtectedRouteProps from "./protectedRoute.interface";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {
  const user = useUserStore((state) => state.user);
  const isVerify = user.isVerify;

  // Verifica si la ruta es la página de inicio "/"
  const isHomePage = path === "/";

  if (isHomePage && !isVerify) {
    // Si es la página de inicio y el usuario no está verificado, redirige a la página de autenticación
    return <Navigate to={`/auth`} replace />;
  }

  // Si el usuario está verificado o si no es la página de inicio, muestra el contenido normalmente
  return <Outlet />;
};

export default ProtectedRoute;
