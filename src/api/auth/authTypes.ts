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
