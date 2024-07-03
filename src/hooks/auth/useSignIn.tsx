import { useAuth } from "../../context/auth/authContext";
import { storeToken } from "../../helpers/helpers";

// Hook personalizado para realizar la operación de login
const useSignIn = () => {
  const { loginMutation } = useAuth();

  const login = async (userName: string, password: string) => {
    try {
      const data = await loginMutation.mutateAsync({ userName, password });
      storeToken(data.token);
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Throw error to be handled in the component
    }
  };

  return {
    login,
    isLoading: loginMutation.isPending,
    isSuccess: loginMutation.isSuccess,
    isError: loginMutation.isError,
  };
};

export default useSignIn;
