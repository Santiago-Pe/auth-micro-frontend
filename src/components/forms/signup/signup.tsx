import React, { FC } from "react";
import { useForm } from "react-hook-form";

import useUserStore from "../../../store/user/user.store";
import { FormInput } from "../../inputs";
import { Button } from "../../buttons";
import { useSignUp } from "../../../hooks/auth";
import { SignupFormData, SignupProps } from "./signup.interfaces";

const Signup: FC<SignupProps> = ({ customClass, callback }) => {
  // Hook Forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  // Custom Hooks and States
  const { signup, isLoading } = useSignUp();
  const { setUser, user } = useUserStore();

  // Functions
  const onSubmit = async (data: SignupFormData) => {
    try {
      const response = await signup(
        data.name,
        data.email,
        data.userName,
        data.password
      );

      setUser({ ...user, userName: response.userName });

      if (callback) callback();
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  // En este componente voy a usar los estados de mi mutation
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

        <Button text="Sign up" type="submit" loading={isLoading} />
      </form>
    </div>
  );
};

export default Signup;
