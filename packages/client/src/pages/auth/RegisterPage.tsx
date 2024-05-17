import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackgroundLayout } from "$components/Background";
import { BigButtonBlue } from "$components/Buttons";
import { EmailInputField, PasswordInputField } from "$components/InputFields";
import { TermsAndConditionsCheckbox, SubscribeToNewsletterCheckbox } from "$components/CheckBoxes";
import { Auth } from "$internal/api";

const RegisterPage: React.FC = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

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
      <div className="max-w-sm mx-auto p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-lg font-bold mb-6">
          Create your <span className="text-blue-300">Momentum</span> account
        </h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <EmailInputField placeholder="you@example.com" value={email} onChange={setEmail}/>
          <PasswordInputField placeholder="********" value={password} onChange={setPassword}/>
          <TermsAndConditionsCheckbox/>
          <SubscribeToNewsletterCheckbox/>
          <div className="flex justify-center mt-6">
            <BigButtonBlue text="Sign Up" onClick={handleSubmit}/>
          </div>
        </form>
        <div className="text-center mt-6 text-sm">
          Already have an account? <Link to="/login" className="text-blue-300 hover:text-blue-600">Sign in.</Link>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default RegisterPage;
