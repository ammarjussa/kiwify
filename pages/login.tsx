import Link from "next/link";
import React, { useState } from "react";

interface Props {}

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!email.includes("@") && email.length > 2) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailError(true);
      return;
    }
    if (password.length < 6) {
      setPasswordError(true);
      return;
    }
    // handle form submission here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="kiwify.png" className="mx-auto h-12 w-auto" />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Login
      </h2>
      <p className="mt-2 text-center text-base leading-5 text-gray-600 mb-10">
        Ou <span>&nbsp;</span>
        <Link
          href="/signup"
          className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          fazer cadastro
        </Link>
      </p>
      <form
        className="w-full max-w-md px-10 py-8 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-sm font-medium leading-5 mb-1 text-gray-500"
            htmlFor="email"
          >
            Email
          </label>
          <input
            autoComplete="off"
            name="null"
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
          ></input>
          {emailError && (
            <p className="text-red-500 text-xs italic">
              Please enter a valid email address.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium leading-5 mb-1 text-gray-500"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`${
              passwordError ? "border-red-500" : ""
            } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue transition-colors duration-300`}
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && (
            <p className="text-red-500 text-xs italic">
              Please enter a password with at least 6 characters.
            </p>
          )}
        </div>
        <div className="text-sm text-right mb-4">
          <a
            href=""
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Esqueceu a senha?
          </a>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue transition-colors duration-300"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
