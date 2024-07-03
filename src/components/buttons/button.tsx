import React, { FC } from "react";
import ButtonProps from "./button.interface";

const Button: FC<ButtonProps> = ({
  text,
  type = "button", // Default to "button" type if not specified
  secondary = false,
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      className={`text-xs font-semibold tracking-wide uppercase cursor-pointer mt-2.5 py-2.5 px-10 rounded-lg ${
        disabled
          ? "bg-gray-400 cursor-not-allowed text-white"
          : secondary
          ? "bg-transparent border border-white text-white"
          : "bg-violet text-white"
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type} // Use the typed prop here
    >
      {!loading ? (
        text
      ) : (
        <div className="animate-spin rounded-full h-5 w-5 border-4 border-gray border-t-white"></div>
      )}
    </button>
  );
};

export default Button;
