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

// Definimos las props que acepta el componente FormInput
export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>; // Nombre del campo en el formulario
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>; // Reglas de validación del campo
  register?: UseFormRegister<TFormValues>; // Función de registro del campo en react-hook-form
  errors?: FieldErrors<TFormValues>; // Errores de validación asociados al campo
} & Omit<InputProps, "name">; // Resto de props para el componente Input, excluyendo 'name'

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
    <div className={`relative ${className} my-2`} aria-live="polite">
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
