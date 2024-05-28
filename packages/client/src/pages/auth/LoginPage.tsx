import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Intern
import { ErrorCode, LoginSchema } from "@momentum/shared";
import { Auth } from "$internal/api";
import { BackgroundLayout } from "$components/Background";
import { InputField } from "$components/InputField";
import BigButton from "$components/Buttons/BigButton";
import { Checkbox } from "$components/Checkbox";

export const LoginPage: React.FC = () => {
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ rememberMe, setRememberMe ] = useState(false);

  const navigate = useNavigate();

  // TODO: Diese Fehlernachrichten werden zu einem späteren Zeitpunkt in einer
  // zentralen internationalisierten Datei gespeichert.
  const errorMessages: Record<string, string> = {
    [ ErrorCode.LoginInvalidEmail ]: "Invalid email address.",
    [ ErrorCode.LoginInvalidPassword ]: "Invalid password."
  };

  const handleSubmit = async () => {
    const form = {
      email,
      password
    };

    const { success, error, data } = LoginSchema.safeParse(form);

    if(!success) {
      setErrorMessage(errorMessages[error.issues[0].message]);
      return;
    }

    const response = await Auth.login(data);

    if(!response) {
      setErrorMessage("Server connection failed.");
      return;
    }

    if(!response.ok) {
      setErrorMessage(errorMessages[response.err]);
      return;
    }

    const { token } = response.data;

    localStorage.setItem("token", token);
    navigate("/home");
  };

  return (
    <BackgroundLayout>
      <div className="w-96 mx-auto p-6 bg-gray text-blue-900 rounded-xl shadow-lg">
        <h1 className="text-center text-lg font-bold mb-6">
          Sign in to <span className="text-blue-300">Momentum</span>
        </h1>

        {
          errorMessage &&
          <span className="block text-red-500 font-bold text-center pb-6">
            {errorMessage}
          </span>
        }

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <InputField
            placeholder="you@example.com"
            value={email}
            onChange={setEmail}
            variant="email"
            title="E-Mail"
          />
          <InputField
            placeholder="********"
            value={password}
            onChange={setPassword}
            variant="password"
            title="Password"
          />
          <div className="flex justify-between">
            <Checkbox
              variant="rememberMe"
              checked={rememberMe}
              onChange={setRememberMe}
            />
            <Link
              to="/forgot-password"
              className="text-sm text-blue-300 hover:text-blue-600 font-bold"
            >
              Forgot password?
            </Link>
          </div>
          <div className="flex justify-center mt-6">
            <BigButton text="Sign In" onClick={handleSubmit} variant="blue"/>
          </div>
        </form>
        <div className="text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-300 hover:text-blue-600 font-bold"
          >
            Sign up.
          </Link>
        </div>
      </div>
    </BackgroundLayout>
  );
};
