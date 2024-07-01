import React, { FC } from "react";

// Definimos las props que acepta el componente FormErrorMessage
export type FormErrorMessageProps = {
  className?: string; // Clases de estilo opcionales para el mensaje de error
  children?: React.ReactNode; // Contenido del mensaje de error como nodo React
};

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
