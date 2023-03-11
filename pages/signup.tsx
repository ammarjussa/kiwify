import Link from "next/link";
import React, { useState } from "react";

interface Props {}

const SignUp: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [repeatEmail, setRepeatEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [emailRepeatError, setEmailRepeatError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [termsError, setTermsError] = useState<string>("");

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

  const handleRepeatEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRepeatEmail(e.target.value);

    if (!value) {
      setEmailRepeatError("Esse campo é obrigatório");
    } else if (!/\S+@\S+\.\S{2,}/.test(value)) {
      setEmailRepeatError("O e-mail deve ser válido");
    } else {
      setEmailRepeatError("");
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

  const handleTermsAcceptedChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTermsAccepted(e.target.checked);
    if (!e.target.checked) {
      setTermsError("(Esse campo é obrigatório)");
    } else {
      setTermsError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== repeatEmail) {
      setEmailRepeatError("Os dois e-mails devem ser iguais");
      return;
    }

    if (!emailError && !emailRepeatError && !passwordError && !termsError) {
      alert("success");
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="kiwify.png" className="mx-auto h-12 w-auto" />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Criar nova conta
      </h2>
      <p className="mt-2 text-center text-base leading-5 text-gray-600 mb-10">
        Ou <></>
        <Link
          href="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          entrar na sua conta existente
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
            } form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-1">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium leading-5 mb-1 text-gray-500"
            htmlFor="repeat-email"
          >
            Repetir e-mail
          </label>
          <input
            className={` ${
              emailRepeatError ? "border-red-500" : ""
            } form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
            id="repeat-email"
            type="email"
            value={repeatEmail}
            onChange={handleRepeatEmailChange}
            required
          />
          {emailRepeatError && (
            <p className="text-red-500 text-xs mt-1">{emailRepeatError}</p>
          )}
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
            } form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && (
            <p className="text-red-500 text-xs mt-1">{passwordError}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              checked={termsAccepted}
              onChange={handleTermsAcceptedChange}
              required
            />
            <div className="ml-2 text-sm leading-5">
              <span className="font-medium text-gray-500">
                Eu li e aceito os{" "}
                <a
                  href="https://kiwify.com.br/termos-de-uso"
                  target="_blank"
                  className="underline"
                >
                  {" "}
                  termos de uso
                </a>
                ,{" "}
                <a
                  href="https://kiwify.com.br/licenca-de-uso-software"
                  target="_blank"
                  className="underline"
                >
                  {" "}
                  termos de licença de uso de software
                </a>
                ,{" "}
                <a
                  href="https://kiwify.com.br/politica-de-conteudo"
                  target="_blank"
                  className="underline"
                >
                  {" "}
                  política de conteúdo
                </a>{" "}
                da Kiwify{" "}
              </span>{" "}
            </div>
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Cirar conta
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
