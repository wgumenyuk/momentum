import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BackgroundLayout } from "$components/Background";
import { BigButtonBlue } from "$components/Buttons";
import { EmailInputField, PasswordInputField } from "$components/InputFields";
import { Auth } from "$internal/api";

const LoginPage: React.FC = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <BackgroundLayout>
      <div className="max-w-sm mx-auto p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-lg font-bold mb-6">
          Sign in to <span className="text-blue-300">Momentum</span>
        </h1>
        <form className="space-y-4" onSubmit={() => Auth.login({ email, password })}>
          <EmailInputField placeholder="you@example.com" value={email} onChange={setEmail} />
          <PasswordInputField placeholder="********" value={password} onChange={setPassword} />
          <div className="mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
          </div>
          <div className="flex justify-center mt-6">
            <BigButtonBlue text="Sign In" onClick={() => alert("Welcome back!")} />
          </div>
          <div className="text-center mt-2">
            <Link to="/forgot-password" className="text-sm text-blue-300 hover:text-blue-600">Forgot password?</Link>
          </div>
        </form>
        <div className="text-center mt-6 text-sm">
          Don’t have an account? <Link to="/register" className="text-blue-300 hover:text-blue-600">Sign up.</Link>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default LoginPage;
