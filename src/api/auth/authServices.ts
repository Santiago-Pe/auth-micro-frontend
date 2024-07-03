import axiosInstance from '../axiosInstance';
import {
  SinginParams,
  SinginResponse,
  SignupParams,
  SignupResponse,
  VerifyParams,
  VerifyResponse
} from './authTypes';

// Función para realizar la solicitud de login
export const signin = async ({ userName, password }: SinginParams): Promise<SinginResponse> => {
  const response = await axiosInstance.post<SinginResponse>('/login', { userName, password });
  return response.data;
};

// Función para realizar la solicitud de signup
export const signup = async ({ name, email, userName, password }: SignupParams): Promise<SignupResponse> => {
  const response = await axiosInstance.post<SignupResponse>('/register', { name, email, userName, password });
  return response.data;
};

// Función para realizar la solicitud de verificación
export const verify = async ({ user, token }: VerifyParams): Promise<VerifyResponse> => {
  const response = await axiosInstance.post<VerifyResponse>('/verify', { user, token });
  return response.data;
};
