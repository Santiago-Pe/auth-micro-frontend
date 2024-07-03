import { useAuth } from "../../context/auth/authContext";

// Hook personalizado para realizar la operación de signup
export const useSignUp = () => {
  const { signupMutation } = useAuth();

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
      });
      console.log("Signup successful:", data);
      return data;
    } catch (error) {
      console.error("Error during signup:", error);
      throw error;
    }
  };

  return {
    signup,
    isLoading: signupMutation.isPending,
    isSuccess: signupMutation.isSuccess,
    isError: signupMutation.isError,
  };
};
