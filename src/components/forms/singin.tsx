import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../inputs";
import { Button } from "../buttons";

interface SignInFormData {
  userName: string;
  password: string;
}

interface SignInProps {
  customClass?: string;
}

const SignIn: FC<SignInProps> = ({ customClass }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    console.log(data); // Aquí puedes manejar la lógica de enviar los datos al servidor
  };

  return (
    <div
      className={`absolute h-full top-0 transition-all duration-600 ease-in-out ${customClass}`}
    >
      <form
        className="h-full flex flex-col justify-center items-start bg-white px-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-xl text-center font-bold mb-4">Sign In</h1>

        {/* Campo de Usuario */}
        <Input
          name="userName"
          placeholder="User name"
          type="text"
          register={{
            ...register("userName", {
              required: "Username is required",
            }),
          }}
        />

        {/* Campo de Contraseña */}
        <Input
          name="password"
          placeholder="Password"
          type="password"
          register={{
            ...register("password", {
              required: "Password is required",
            }),
          }}
        />

        {/* Botón de Enviar */}
        <Button text="Sign in" type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
