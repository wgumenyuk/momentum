import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BackgroundLayout } from "$components/Background";
import { Auth } from "$internal/api";
import InputField from "$components/InputFields/InputField";
import BigButton from "$components/Buttons/BigButton";
import CheckBox from "$components/CheckBoxes/CheckBox";

const LoginPage: React.FC = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ rememberMe, setRememberMe ] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      email,
      password
    };

    const response = await Auth.login(data);

    if(!response) {
      // TODO Fehlernachricht.
      return;
    }

    if(!response.ok) {
      // TODO Fehlernachricht.
      return;
    }

    const { token } = response.data;

    localStorage.setItem("token", token);
    navigate("/home");
  };

  return (
    <BackgroundLayout>
      <div className="max-w-sm mx-auto p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-lg font-bold mb-6">
          Sign in to <span className="text-blue-300">Momentum</span>
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
            variant="rememberMe"
            checked={rememberMe}
            onChange={setRememberMe}
          />
          <div className="flex justify-center mt-6">
            <BigButton text="Sign In" onClick={handleSubmit} variant="blue"/>
          </div>
          <div className="text-center mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-300 hover:text-blue-600"
            >
              Forgot password?
            </Link>
          </div>
        </form>
        <div className="text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-300 hover:text-blue-600"
          >
            Sign up.
          </Link>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default LoginPage;
