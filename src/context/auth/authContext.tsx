// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  verify: (token: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    // Aquí deberías realizar la lógica de llamada a la API para iniciar sesión
    // y almacenar el token en el estado o en localStorage
  };

  const signup = async (username: string, password: string) => {
    // Aquí deberías realizar la lógica de llamada a la API para crear cuenta
  };

  const verify = async (token: string) => {
    // Aquí deberías realizar la lógica de llamada a la API para verificar la cuenta
    // Devuelve true si la verificación es exitosa, de lo contrario false
  };

  return (
    <AuthContext.Provider value={{ login, signup, verify }}>
      {children}
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
