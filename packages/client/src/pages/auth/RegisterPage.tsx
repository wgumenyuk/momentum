import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackgroundLayout } from "$components/Background";
import { TermsAndConditionsCheckbox, SubscribeToNewsletterCheckbox } from "$components/CheckBoxes";
import { Auth } from "$internal/api";
import { InputField } from "$components/InputFields";
import BigButton from "$components/Buttons/BigButton";

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
          <InputField placeholder="you@example.com" value={email} onChange={setEmail} variant="email" title="E-Mail"/>
          <InputField placeholder="********" value={password} onChange={setPassword} variant="password" title="Password"/>
          <TermsAndConditionsCheckbox/>
          <SubscribeToNewsletterCheckbox/>
          <div className="flex justify-center mt-6">
            <BigButton text="Sign Up" onClick={handleSubmit} variant="blue"/>
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
