import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackgroundLayout } from "$components/Background";
import { Auth } from "$internal/api";
import InputField from "$components/InputFields/InputField";
import BigButton from "$components/Buttons/BigButton";
import CheckBox from "$components/CheckBoxes/CheckBox";

const RegisterPage: React.FC = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ termsAccepted, setTermsAccepted ] = useState(false);
  const [ subscribed, setSubscribed ] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      email,
      password
    };

    const response = await Auth.register(data);

    if(!response) {
      // TODO Fehlernachricht.
      return;
    }

    if(!response.ok) {
      // TODO Fehlernachricht.
      return;
    }

    navigate("/login");
  };

  return (
    <BackgroundLayout>
      <div className="mx-auto p-6 bg-gray text-blue-900 rounded-xl shadow-lg">
        <h1 className="text-center text-lg font-bold mb-6">
          Create your <span className="text-blue-300">Momentum</span> account
        </h1>
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
          <CheckBox
            variant="terms"
            checked={termsAccepted}
            onChange={setTermsAccepted}
          />
          <CheckBox
            variant="subscribe"
            checked={subscribed}
            onChange={setSubscribed}
          />
          <div className="flex justify-center mt-6">
            <BigButton text="Sign Up" onClick={handleSubmit} variant="blue"/>
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

export default RegisterPage;
