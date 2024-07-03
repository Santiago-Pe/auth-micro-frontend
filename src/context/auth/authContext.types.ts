import { UseMutationResult } from "@tanstack/react-query";
import {
  LoginParams,
  LoginResponse,
  SignupParams,
  SignupResponse,
  VerifyParams,
  VerifyResponse,
} from "../../api/auth/authTypes";

// Define un tipo extendido que incluya isLoading, isSuccess, etc.
export type ExtendedMutationResult<TData, TError, TVariables> = UseMutationResult<
  TData,
  TError,
  TVariables
> & {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

// Define el tipo para el contexto de autenticación
export type AuthContextType = {
  loginMutation: ExtendedMutationResult<LoginResponse, Error, LoginParams>; // Resultado de la mutación para login
  signupMutation: ExtendedMutationResult<SignupResponse, Error, SignupParams>; // Resultado de la mutación para signup
  verifyMutation: ExtendedMutationResult<VerifyResponse, Error, VerifyParams>; // Resultado de la mutación para verify
};
