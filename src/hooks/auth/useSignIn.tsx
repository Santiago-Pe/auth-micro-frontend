import { useAuth } from "../../context/auth/authContext";
import { storeToken } from "../../helpers/helpers";

// Hook personalizado para realizar la operación de login
const useSignIn = () => {
  const { signinMutation } = useAuth();

  const signIn = async (userName: string, password: string) => {
    try {
      const data = await signinMutation.mutateAsync({ userName, password });
      storeToken(data.token);
      return data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Throw error to be handled in the component
    }
  };

  return {
    signIn,
    isLoading: signinMutation.isPending,
    isSuccess: signinMutation.isSuccess,
    isError: signinMutation.isError,
  };
};

export default useSignIn;
