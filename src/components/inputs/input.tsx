import { FC } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
}

const Input: FC<InputProps> = ({ type, placeholder, name }) => {
  return (
    <input
      className="bg-gray border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
