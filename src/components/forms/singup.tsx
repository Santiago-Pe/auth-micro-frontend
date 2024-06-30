import React from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../inputs";
import { Button } from "../buttons";

interface SignupFormData {
  name: string;
  email: string;
  userName: string;
  password: string;
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

        <Input
          placeholder="Name"
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}

        <Input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <Input
          placeholder="User name"
          type="text"
          {...register("userName", { required: "Username is required" })}
        />
        {errors.userName && (
          <span className="text-red-500">{errors.userName.message}</span>
        )}

        <Input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <Button text="Sign up" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
