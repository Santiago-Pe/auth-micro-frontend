import React, { FC } from "react";
import useUserStore from "../../store/user/user.store";

const HomePage: FC = () => {
  const user = useUserStore((state) => state.user);
  console.log(user);

  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <div>Name:{user.name}</div>
          <div>Username:{user.userName}</div>
          <div>Verify:{user.isVerify ? "Si" : "No"}</div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
