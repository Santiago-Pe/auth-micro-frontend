import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "../inputs";
import { Button } from "../buttons";

interface SignInFormData {
  userName: string;
  password: string;
  [key: string]: unknown; // Firma de índice que permite cualquier otra clave
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

        <FormInput<SignInFormData>
          id="userName"
          type="text"
          name="userName"
          label="User Name"
          placeholder="User Name"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your user name." }}
          errors={errors}
        />
        <FormInput<SignInFormData>
          id="password"
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your password." }}
          errors={errors}
        />
        <Button text="Sign in" type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
