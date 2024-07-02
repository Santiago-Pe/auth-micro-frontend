// src/hooks/useAuthHooks.ts
import { useAuth } from "../../context/auth/authContext"; // Importamos el hook useAuth para acceder al contexto de autenticación

// Hook personalizado para realizar la operación de login
export const useLogin = () => {
  const { loginMutation } = useAuth(); // Obtenemos la mutación de login desde el contexto

  return async (userName: string, password: string) => {
    try {
      const data = await loginMutation.mutateAsync({ userName, password }); // Llamamos a la mutación de login con los datos de usuario y contraseña
      localStorage.setItem("token", data.token); // Almacenamos el token en el localStorage después del login exitoso
    } catch (error) {
      console.error("Error during login:", error); // Manejo de errores durante el login
    }
  };
};

// Hook personalizado para realizar la operación de signup
export const useSignup = () => {
  const { signupMutation } = useAuth(); // Obtenemos la mutación de signup desde el contexto

  const signup = async (
    name: string,
    email: string,
    userName: string,
    password: string
  ) => {
    try {
      const data = await signupMutation.mutateAsync({
        name,
        email,
        userName,
        password,
      }); // Llamamos a la mutación de signup con los datos necesarios
      console.log("Signup successful:", data); // Manejo de éxito después del signup
      return data; // Retornamos los datos de respuesta
    } catch (error) {
      console.error("Error during signup:", error); // Manejo de errores durante el signup
      throw error; // Lanzamos el error para manejarlo en componentes que usen este hook
    }
  };

  return {
    signup,
    isLoading: signupMutation.isPending,
    isSuccess: signupMutation.isSuccess,
    isError: signupMutation.isError,
  };
};

// Hook personalizado para realizar la operación de verificación
export const useVerify = () => {
  const { verifyMutation } = useAuth(); // Obtenemos la mutación de verify desde el contexto

  return async (userName: string, token: string) => {
    try {
      const data = await verifyMutation.mutateAsync({ userName, token }); // Llamamos a la mutación de verify con el nombre de usuario y token
      if (data.message === "Success") {
        console.log("Verification successful:", data); // Manejo de éxito después de la verificación exitosa
      } else {
        console.error("Verification failed."); // Manejo de falla de verificación
      }
    } catch (error) {
      console.error("Error during verification:", error); // Manejo de errores durante la verificación
    }
  };
};
