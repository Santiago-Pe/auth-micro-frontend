// src/context/AuthContext.tsx
import React, { createContext, useContext, ReactNode } from "react";
import {
  login,
  signup,
  verify,
  LoginParams,
  SignupParams,
  VerifyParams,
  LoginResponse,
  SignupResponse,
  VerifyResponse,
} from "../../api/auth/authServices"; // Importamos las funciones y tipos de los servicios de autenticación
import { UseMutationResult, useMutation } from "@tanstack/react-query"; // Importamos hook de mutación y tipo de resultado de mutación

// Define un tipo extendido que incluya isLoading, isSuccess, etc.
type ExtendedMutationResult<TData, TError, TVariables> = UseMutationResult<
  TData,
  TError,
  TVariables
> & {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

// Define el tipo para el contexto de autenticación
type AuthContextType = {
  loginMutation: ExtendedMutationResult<LoginResponse, Error, LoginParams>; // Resultado de la mutación para login
  signupMutation: ExtendedMutationResult<SignupResponse, Error, SignupParams>; // Resultado de la mutación para signup
  verifyMutation: ExtendedMutationResult<VerifyResponse, Error, VerifyParams>; // Resultado de la mutación para verify
};

// Creamos el contexto de autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor de autenticación que envuelve la aplicación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Hooks de mutación para cada operación de autenticación
  const loginMutation = useMutation<LoginResponse, Error, LoginParams>({
    mutationFn: login, // Función de mutación para login
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
      value={{ loginMutation, signupMutation, verifyMutation }}
    >
      {children} {/* Renderiza los componentes hijos */}
    </AuthContext.Provider>
  );
};

// Hook personalizado para consumir el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
