import React, {
  FC,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import { combineClasses } from "../../helpers/helpers";

// Definimos los tipos de tamaño y tipo de input que acepta nuestro componente
export type InputSize = "medium" | "large";
export type InputType = "text" | "email" | "password";

// Definimos las propiedades que aceptará nuestro componente
export type InputProps = {
  id: string; // ID del input
  name: string; // Nombre del input (utilizado para react-hook-form)
  label?: string; // Etiqueta del input (opcional)
  type?: InputType; // Tipo de input (por defecto será 'text')
  size?: InputSize; // Tamaño del input (por defecto será 'medium')
  className?: string; // Clases adicionales para estilizar el input
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

// Mapeo de clases para diferentes tamaños de input
const sizeMap: { [key in InputSize]: string } = {
  medium: "py-2.5 px-4 text-sm", // Clases para tamaño medium
  large: "py-3 px-5 text-base", // Clases para tamaño large
};

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
        {...props} // Resto de props pasadas al input (como event handlers)
      />
    );
  }
);

export default Input; // Exportamos el componente Input por defecto
