export interface SignInFormData {
  userName: string;
  password: string;
  [key: string]: unknown; // Firma de índice que permite cualquier otra clave
}
export interface SignInProps {
  customClass?: string;
}
