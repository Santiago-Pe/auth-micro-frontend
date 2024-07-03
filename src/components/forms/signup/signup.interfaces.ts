export interface SignupFormData {
  name: string;
  email: string;
  userName: string;
  password: string;
  [key: string]: unknown;
}

 export interface SignupProps {
  customClass?: string;
  callback: () => void;
}