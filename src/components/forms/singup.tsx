import React from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { FormInput, Input } from "../inputs";
import { Button } from "../buttons";

interface SignupFormData {
  name: string;
  email: string;
  userName: string;
  password: string;
  [key: string]: unknown;
}

interface SignupProps {
  customClass?: string;
}

const Signup: FC<SignupProps> = ({ customClass }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSubmit = (data: SignupFormData) => {
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
        <h1 className="text-xl text-center font-bold mb-4">Create Account</h1>

        <FormInput<SignupFormData>
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your name." }}
          errors={errors}
        />
        <FormInput<SignupFormData>
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your email." }}
          errors={errors}
        />
        <FormInput<SignupFormData>
          id="userName"
          type="text"
          name="userName"
          placeholder="User Name"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your user name." }}
          errors={errors}
        />
        <FormInput<SignupFormData>
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your password" }}
          errors={errors}
        />

        <Button text="Sign up" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
