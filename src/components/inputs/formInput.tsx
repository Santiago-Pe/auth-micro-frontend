import React from "react";
import {
  RegisterOptions,
  FieldErrors,
  UseFormRegister,
  Path,
  FieldValues,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Input, { InputProps } from "./input";
import FormErrorMessage from "./formErrorMessage";
import { customGet } from "../../helpers/helpers";

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>;
  register?: UseFormRegister<TFormValues>;
  errors?: FieldErrors<TFormValues>;
} & Omit<InputProps, "name">;

const FormInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  className = "",
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = customGet(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div className={`relative ${className} my-2`} aria-live="polite">
      <Input
        name={name}
        aria-invalid={hasError}
        className={`transition-colors focus:outline-none focus:ring-2  focus:ring-opacity-50 ${
          hasError
            ? "border-red hover:border-red focus:border-red focus:ring-red"
            : "focus:ring-violet"
        }`}
        {...props}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => (
          <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
        )}
      />
    </div>
  );
};

export default FormInput;
