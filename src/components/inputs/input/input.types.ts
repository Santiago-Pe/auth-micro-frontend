import {
  DetailedHTMLProps,
  InputHTMLAttributes
} from "react";

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
  disabled?: boolean; // Para deshabilitar el componente cuando no se deba usar
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;
