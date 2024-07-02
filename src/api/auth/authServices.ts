// src/api/authServices.ts
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL; // Obtenemos la URL base desde las variables de entorno
const API_KEY = import.meta.env.VITE_API_KEY;
// Definimos los tipos de parámetros y respuestas para cada función de API

export interface LoginParams {
  userName: string;
  password: string;
}

export interface LoginResponse {
  user: {
    userName: string;
    name: string;
  };
  token: string;
}

export interface SignupParams {
  name: string;
  email: string;
  userName: string;
  password: string;
}

export interface SignupResponse {
  userName: string;
}

export interface VerifyParams {
  userName: string;
  token: string;
}

export interface VerifyResponse {
  message: string;
  user: {
    userName: string;
    name: string;
  };
  token: string;
}
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': `${API_KEY}`
  }
});

// Función para realizar la solicitud de login
export const login = async ({ userName, password }: LoginParams): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(`${BASE_URL}/login`, { userName, password }); // Realizamos una solicitud POST a la ruta /login con los datos de usuario y contraseña
  return response.data; // Retornamos los datos de respuesta
};

// Función para realizar la solicitud de signup
export const signup = async ({ name, email, userName, password }: SignupParams): Promise<SignupResponse> => {
  const response = await axiosInstance.post<SignupResponse>(`${BASE_URL}/register`, { name, email, userName, password }); // Realizamos una solicitud POST a la ruta /register con los datos de nombre, email, nombre de usuario y contraseña
  return response.data; // Retornamos los datos de respuesta
};

// Función para realizar la solicitud de verificación
export const verify = async ({ userName, token }: VerifyParams): Promise<VerifyResponse> => {
  const response = await axiosInstance.post<VerifyResponse>(`${BASE_URL}/verify`, { userName, token }); // Realizamos una solicitud POST a la ruta /verify con el nombre de usuario y el token
  return response.data; // Retornamos los datos de respuesta
};
