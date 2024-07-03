import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import useUserStore from "../../../store/user/user.store";
import { FormInput } from "../../inputs";
import { Button } from "../../buttons";
import { SignInFormData, SignInProps } from "./signin.interfaces";
import { useSignIn, useVerify } from "../../../hooks/auth";
import { useNavigate } from "react-router-dom";

const SignIn: FC<SignInProps> = ({ customClass }) => {
  // Hooks Forms
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignInFormData>();

  const navigate = useNavigate();

  // Cusotm Hooks and States
  const { signIn, isLoading } = useSignIn();
  const { verify, isLoading: isVerifyLoading } = useVerify();
  // Store
  const { setUser, user } = useUserStore();

  const signInUser = async (data: SignInFormData) => {
    const { userName, password } = data;
    try {
      const response = await signIn(userName, password);

      if (!response || !response.token) {
        throw new Error("Token not received from signIn response");
      }

      // Almacenar el token en el estado global o en el almacenamiento local
      const { user: currentUser, token } = response;

      // Realizar la verificación
      const verifyResponse = await verify(currentUser, token);

      setUser({
        ...user,
        name: verifyResponse.user.name,
        userName: verifyResponse.user.userName,
        token: verifyResponse.token,
        isVerify: true,
      });

      navigate("/");
    } catch (error) {
      console.error("SignIn failed:", error);
    }
  };
  const onSubmit = async (data: SignInFormData) => {
    signInUser(data);
  };

  useEffect(() => {
    if (user.userName !== "") {
      setValue("userName", user.userName);
    }
  }, [user]);
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
          id="signin-userName"
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
          id="signin-password"
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your password." }}
          errors={errors}
        />
        <Button
          text="Sign in"
          type="submit"
          loading={isLoading || isVerifyLoading}
        />
      </form>
    </div>
  );
};

export default SignIn;
