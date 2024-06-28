import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Intern
import { ErrorCode, LoginSchema } from "@momentum/shared";
import { Auth } from "$internal/api";
import { MailIcon } from "lucide-react";
import { useJwt } from "$components/JwtContext";
import { BackgroundLayout } from "$components/Background";
import { Input } from "$components/Input";
import { PasswordInput } from "$components/PasswordInput";
import { Button } from "$components/Button";
import { Checkbox } from "$components/Checkbox";

export const LoginPage: React.FC = () => {
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ rememberMe, setRememberMe ] = useState(false);

  const navigate = useNavigate();
  const { setToken, jwt } = useJwt()!;

  useEffect(() => {
    if(jwt) {
      navigate("/home");
    }
  }, [ jwt, navigate ]);

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

    setToken(token);
    navigate("/home");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if(e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
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

        <form className="space-y-4" onKeyDown={handleKeyDown} onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            placeholder="you@example.com"
            value={email}
            onChange={(value) => setEmail(value)}
            icon={MailIcon}
            className="bg-white shadow-sm"
          />
          <PasswordInput
            value={password}
            onChange={(value) => setPassword(value)}
            className="bg-white shadow-sm"
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
            <Button onClick={handleSubmit} variant="blue">
              Sign In
            </Button>
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
