import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Input } from "../input";
import { customGet } from "../../../helpers/helpers";
import { FormErrorMessage } from "../formErrorMessage";
import { FormInputProps } from "./formInput.types";

// Componente FormInput
const FormInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  className = "",
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  // Obtenemos los mensajes de error específicos para este campo usando customGet
  const errorMessages = customGet(errors, name);
  // Determinamos si hay errores para este campo
  const hasError = !!(errors && errorMessages);

  return (
    <div className={`relative ${className} my-2 w-full`} aria-live="polite">
      {/* Renderizamos el componente Input */}
      <Input
        name={name} // Propiedad 'name' del input
        aria-invalid={hasError} // Indicamos si hay errores de accesibilidad
        className={`transition-colors focus:outline-none focus:ring-2  focus:ring-opacity-50 ${
          hasError
            ? "border-red hover:border-red focus:border-red focus:ring-red"
            : "focus:ring-violet"
        }`}
        {...props} // Pasamos las props adicionales al componente Input
        {...(register && register(name, rules))} // Registramos el campo con react-hook-form
      />
      {/* Renderizamos el mensaje de error si existe */}
      <ErrorMessage
        errors={errors} // Objeto de errores general
        name={name as any} // Nombre del campo asociado al mensaje de error
        render={({ message }) => (
          <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
        )}
      />
    </div>
  );
};

export default FormInput; // Exportamos el componente FormInput por defecto
