import React, { FC } from "react";
import { FormErrorMessageProps } from "./formErrorMessage.types";

// Componente FormErrorMessage
const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children, // Contenido del mensaje de error pasado como prop
  className, // Clases de estilo adicionales para el mensaje de error
}) => (
  <p className={`text-sm text-left block text-red ${className}`}>
    {children} {/* Renderizamos el contenido del mensaje de error */}
  </p>
);

export default FormErrorMessage; // Exportamos el componente FormErrorMessage por defecto
