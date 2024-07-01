// src/hooks/useAuthHooks.ts
import { useAuth } from "../../context/auth/authContext";

export const useLogin = () => {
  const { login } = useAuth();

  return async (username: string, password: string) => {
    try {
      await login(username, password);
      // Manejo de éxito (navegación, redirección, etc.)
    } catch (error) {
      // Manejo de errores
      console.error("Error during login:", error);
    }
  };
};

export const useSignup = () => {
  const { signup } = useAuth();

  return async (username: string, password: string) => {
    try {
      await signup(username, password);
      // Manejo de éxito
    } catch (error) {
      // Manejo de errores
      console.error("Error during signup:", error);
    }
  };
};

export const useVerify = () => {
  const { verify } = useAuth();

  return async (token: string) => {
    try {
      const verified = await verify(token);
      if (verified) {
        // Manejo de éxito (navegación, redirección, etc.)
      } else {
        // Manejo de falla de verificación
        console.error("Verification failed.");
      }
    } catch (error) {
      // Manejo de errores
      console.error("Error during verification:", error);
    }
  };
};
