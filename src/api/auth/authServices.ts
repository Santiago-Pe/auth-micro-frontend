import axiosInstance from '../axiosInstance';
import {
  LoginParams,
  LoginResponse,
  SignupParams,
  SignupResponse,
  VerifyParams,
  VerifyResponse
} from './authTypes';

// Función para realizar la solicitud de login
export const login = async ({ userName, password }: LoginParams): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>('/login', { userName, password });
  return response.data;
};

// Función para realizar la solicitud de signup
export const signup = async ({ name, email, userName, password }: SignupParams): Promise<SignupResponse> => {
  const response = await axiosInstance.post<SignupResponse>('/register', { name, email, userName, password });
  return response.data;
};

// Función para realizar la solicitud de verificación
export const verify = async ({ userName, token }: VerifyParams): Promise<VerifyResponse> => {
  const response = await axiosInstance.post<VerifyResponse>('/verify', { userName, token });
  return response.data;
};
