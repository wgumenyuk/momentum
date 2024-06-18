import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Intern
import { ErrorCode, RegisterSchema } from "@momentum/shared";
import { Auth } from "$internal/api";
import { MailIcon } from "lucide-react";
import { useJwt } from "$components/JwtContext";
import { BackgroundLayout } from "$components/Background";
import { Button } from "$components/Button";
import { Input } from "$components/Input";
import { PasswordInput } from "$components/PasswordInput";
import { Checkbox } from "$components/Checkbox";

export const RegisterPage: React.FC = () => {
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ termsAccepted, setTermsAccepted ] = useState(false);
  const [ subscribed, setSubscribed ] = useState(false);

  const navigate = useNavigate();
  const { jwt } = useJwt()!;

  useEffect(() => {
    if(jwt) {
      navigate("/home");
    }
  }, []);

  // TODO: Diese Fehlernachrichten werden zu einem späteren Zeitpunkt in einer
  // zentralen internationalisierten Datei gespeichert.
  const errorMessages: Record<string, string> = {
    [ ErrorCode.RegisterEmailTaken ]: "Email address already registered.",
    [ ErrorCode.RegisterInvalidEmail ]: "Invalid email address.",
    [ ErrorCode.RegisterInvalidPassword ]: "Invalid password.",
    [ ErrorCode.RegisterPasswordTooLong ]: "Password too long (max. 32 characters).",
    [ ErrorCode.RegisterPasswordTooShort ]: "Password too short (min. 12 characters)."
  };

  const handleSubmit = async () => {
    const form = {
      email,
      password
    };

    const { success, error, data } = RegisterSchema.safeParse(form);

    if(!success) {
      setErrorMessage(errorMessages[error.issues[0].message]);
      return;
    }

    const response = await Auth.register(data);

    if(!response) {
      setErrorMessage("Server connection failed.");
      return;
    }

    if(!response.ok) {
      setErrorMessage(errorMessages[response.err]);
      return;
    }

    navigate("/login");
  };

  return (
    <BackgroundLayout>
      <div className="w-96 mx-auto p-6 bg-gray text-blue-900 rounded-xl shadow-lg">
        <h1 className="text-center text-lg font-bold mb-6">
          Create your <span className="text-blue-300">Momentum</span> account
        </h1>

        {
          errorMessage &&
          <span className="block text-red-500 font-bold text-center pb-6">
            {errorMessage}
          </span>
        }

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
          <Checkbox
            variant="terms"
            checked={termsAccepted}
            onChange={setTermsAccepted}
          />
          <Checkbox
            variant="subscribe"
            checked={subscribed}
            onChange={setSubscribed}
          />
          <div className="flex justify-center mt-6">
            <Button onClick={handleSubmit} variant="blue">
              Sign Up
            </Button>
          </div>
        </form>
        <div className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-300 hover:text-blue-600 font-bold"
          >
            Sign in.
          </Link>
        </div>
      </div>
    </BackgroundLayout>
  );
};
