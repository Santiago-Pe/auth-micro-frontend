import { FC } from "react";
import { Input } from "../inputs";
import { Button } from "../buttons";

interface SignInProps {
  customClass?: string;
}

// Define the component with the FC (Function Component) type
const SignIn: FC<SignInProps> = ({ customClass }) => {
  return (
    <div
      className={`absolute h-full top-0 transition-all duration-600 ease-in-out ${customClass}`}
    >
      <form className="h-full flex flex-col justify-center items-start bg-white px-10">
        <h1 className="text-xl text-center font-bold mb-4">Sign In</h1>

        <Input placeholder="User name" type="text" name="userName" />
        <Input placeholder="Password" type="password" name="password" />

        <Button text="Sing in" onClick={() => console.log("sign in")} />
      </form>
    </div>
  );
};

export default SignIn;
