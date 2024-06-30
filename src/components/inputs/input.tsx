import React, {
  FC,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import { combineClasses } from "../../helpers/helpers";

export type InputSize = "medium" | "large";
export type InputType = "text" | "email" | "password";

export type InputProps = {
  id: string;
  name: string;
  label?: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

const sizeMap: { [key in InputSize]: string } = {
  medium: "py-2.5 px-4 text-sm",
  large: "py-3 px-5 text-base",
};

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
    const inputClasses = combineClasses(
      "bg-gray border-gray",
      sizeMap[size],
      "rounded-lg w-full",
      className
    );

    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        className={inputClasses}
        {...props}
      />
    );
  }
);

export default Input;
