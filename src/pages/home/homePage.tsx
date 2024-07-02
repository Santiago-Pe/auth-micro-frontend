import React, { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../store/user.store";

const HomePage: FC = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.logged) {
      navigate("/auth");
      return;
    }
  }, []);

  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only"></span>HOME
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">page</p>

          <Link
            rel="noopener noreferrer"
            to="/auth"
            className="px-8 py-3 font-semibold rounded"
          >
            Auth
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
