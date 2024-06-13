import { FC } from "react";
import { Link } from "react-router-dom";

// Define the component with the FC (Function Component) type
const Signup: FC = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
        Sign Up
      </h2>

      <form className="mx-auto max-w-lg rounded-lg  bg-teal-900 x">
        <div className="gap-4 p-4 md:p-8">
          <div className="grid grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name
              </label>
              <input
                name="name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:outline-none focus:ring focus:ring-teal-400"
                type="text" // Adding type attribute for email
                id="name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last Name
              </label>
              <input
                name="lastName"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:outline-none focus:ring focus:ring-teal-400"
                type="lastName" // Adding type attribute for lastName
                id="lastName"
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
                name="email"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:outline-none focus:ring focus:ring-teal-400"
                type="email" // Adding type attribute for email
                id="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <label
                htmlFor="password"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Password
              </label>
              <input
                name="password"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:outline-none focus:ring focus:ring-teal-400"
                type="password" // Adding type attribute for password
                id="password"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Password Confirmation
              </label>
              <input
                name="confirmPassword"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:outline-none focus:ring focus:ring-teal-400"
                type="password" // Adding type attribute for password
                id="confirmPassword"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button className="block rounded-lg bg-teal-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-teal-700 focus-visible:ring active:bg-gray-600 md:text-base">
            Log in
          </button>
        </div>

        <div className="flex items-center justify-center bg-gray-100 p-4">
          <p className="text-center text-sm text-gray-500">
            Do you have already account?{" "}
            <Link
              to={"/login"}
              className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
