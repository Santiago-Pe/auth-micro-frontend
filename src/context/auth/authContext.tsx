import React, { createContext, ReactNode, useContext } from "react";
import { useMutation } from "@tanstack/react-query"; // Importamos hook de mutación
import { signin, signup, verify } from "../../api/auth/authServices"; // Importamos las funciones de los servicios de autenticación
import { AuthContextType } from "./authContext.types"; // Importamos los tipos del contexto de autenticación
import {
  SinginParams,
  SinginResponse,
  SignupParams,
  SignupResponse,
  VerifyParams,
  VerifyResponse,
} from "../../api/auth/authTypes";

// Creamos el contexto de autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor de autenticación que envuelve la aplicación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Hooks de mutación para cada operación de autenticación
  const signinMutation = useMutation<SinginResponse, Error, SinginParams>({
    mutationFn: signin, // Función de mutación para login
  });
  const signupMutation = useMutation<SignupResponse, Error, SignupParams>({
    mutationFn: signup, // Función de mutación para signup
  });
  const verifyMutation = useMutation<VerifyResponse, Error, VerifyParams>({
    mutationFn: verify, // Función de mutación para verify
  });

  // Proporciona los hooks de mutación como valor del contexto
  return (
    <AuthContext.Provider
      value={{ signinMutation, signupMutation, verifyMutation }}
    >
      {children} {/* Renderiza los componentes hijos */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
