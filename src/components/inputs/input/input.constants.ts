import { InputSize } from "./input.types";

// Mapeo de clases para diferentes tamaños de input
export const sizeMap: { [key in InputSize]: string } = {
  medium: "py-2.5 px-4 text-sm", // Clases para tamaño medium
  large: "py-3 px-5 text-base", // Clases para tamaño large
};