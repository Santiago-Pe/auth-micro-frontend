export default interface ButtonProps {
  text: string;
  type?: "submit" | "reset" | "button"; // Update type to accept specific values
  secondary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}