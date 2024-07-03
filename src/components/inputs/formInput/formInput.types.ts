import {
  RegisterOptions,
  FieldErrors,
  UseFormRegister,
  Path,
  FieldValues,
} from "react-hook-form";
import { InputProps } from "../input";

// Definimos las props que acepta el componente FormInput
export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>; // Nombre del campo en el formulario
  rules?: RegisterOptions<TFormValues, Path<TFormValues>>; // Reglas de validación del campo
  register?: UseFormRegister<TFormValues>; // Función de registro del campo en react-hook-form
  errors?: FieldErrors<TFormValues>; // Errores de validación asociados al campo
} & Omit<InputProps, "name">; // Resto de props para el componente Input, excluyendo 'name'
