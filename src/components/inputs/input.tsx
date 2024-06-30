import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends Partial<UseFormRegisterReturn> {
  name: string;
  label?: string;
  errors?: any;
  placeholder?: string;
  required?: boolean;
  register: any;
  type: string;
  validationSchema?: any; // Puedes ajustar el tipo según tu esquema de validación
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  register,
  errors,
  required = false,
  type,
  placeholder,
  validationSchema,
}) => {
  return (
    <div className="form-control-input">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && "*"}
        </label>
      )}
      <input
        className="bg-gray border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        {...register(name, validationSchema)}
      />
      {errors && errors[name]?.type === "required" && (
        <span className="error">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === "minLength" && (
        <span className="error">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default Input;
