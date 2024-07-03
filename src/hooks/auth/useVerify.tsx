import { useAuth } from "../../context/auth/authContext";

// Hook personalizado para realizar la operación de verificación
const useVerify = () => {
  const { verifyMutation } = useAuth();

  const verify = async (
    user: { userName: string; name: string },
    token: string
  ) => {
    try {
      const data = await verifyMutation.mutateAsync({ user, token });
      if (data.message === "Success") {
        console.log("Verification successful:", data);
      } else {
        console.error("Verification failed.");
      }
      return data;
    } catch (error) {
      console.error("Error during verification:", error);
      throw error;
    }
  };

  return {
    verify,
    isLoading: verifyMutation.isPending,
    isSuccess: verifyMutation.isSuccess,
    isError: verifyMutation.isError,
  };
};

export default useVerify;
