import Link from "next/link";
import React, { useState } from "react";

interface Props {}

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Esse campo é obrigatório");
    } else if (!/\S+@\S+\.\S{2,}/.test(value)) {
      setEmailError("O e-mail deve ser válido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setPasswordError("Esse campo é obrigatório");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      alert("success");
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img src="kiwify.png" className="mx-auto h-12 w-auto" />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Entrar na sua conta
      </h2>
      <p className="mt-2 text-center text-base leading-5 text-gray-600 mb-10">
        Ou <></>
        <Link
          href="/signup"
          className="font-medium text-indigo-500 hover:text-indigo-400 focus:outline-none focus:underline transition ease-in-out duration-150"
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
            className={`${
              emailError ? "border-red-500" : ""
            } form-input block py-2 my-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium leading-5 mb-1 text-gray-500"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            className={`${
              passwordError ? "border-red-500" : ""
            } form-input block py-2 my-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && (
            <p className="text-red-500 text-xs">{passwordError}</p>
          )}
        </div>
        <div className="text-sm text-right mb-4">
          <a
            href=""
            className="font-medium text-indigo-500 hover:text-indigo-400 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Esqueceu a senha?
          </a>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
