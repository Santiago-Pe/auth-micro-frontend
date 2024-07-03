import React, { FC, forwardRef } from "react";
import { InputProps } from "./input.types";
import { sizeMap } from "./input.constants";
import { combineClasses } from "../../../helpers/helpers";

// Componente funcional Input
const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      type = "text",
      size = "medium",
      className = "",
      placeholder,
      disabled,
      ...props
    },
    ref
  ) => {
    // Combinamos las clases para aplicar al input
    const inputClasses = combineClasses(
      "bg-gray border-gray", // Clase base para fondo y borde
      sizeMap[size], // Clases para el tamaño específico
      "rounded-lg w-full", // Clases para redondeo de bordes y ancho completo
      className // Clases adicionales proporcionadas por el usuario
    );

    return (
      <input
        id={id} // ID del input
        ref={ref} // Ref para acceder al input
        name={name} // Nombre del input
        type={type} // Tipo de input (text, email, password)
        aria-label={label} // Etiqueta accesible para el input
        placeholder={placeholder} // Placeholder del input
        className={inputClasses} // Clases combinadas para estilizar el input
        disabled={disabled}
        {...props} // Resto de props pasadas al input (como event handlers)
      />
    );
  }
);

export default Input; // Exportamos el componente Input por defecto
