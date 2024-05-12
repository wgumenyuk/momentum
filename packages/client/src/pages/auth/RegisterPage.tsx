import React, { useState } from "react";
import { BackgroundLayout } from "$components/Background";
import { BigButtonBlue } from "$components/Buttons";
import { EmailInputField, PasswordInputField } from "$components/InputFields";
import { TermsAndConditionsCheckbox, SubscribeToNewsletterCheckbox } from "$components/CheckBoxes";

const RegisterPage: React.FC = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <BackgroundLayout>
      <div className="max-w-sm mx-auto p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-lg font-bold mb-6">Create your <span className="text-blue-300">Momentum</span> account</h1>
        <form className="space-y-4">
          <EmailInputField placeholder="you@example.com" value={email} onChange={setEmail} />
          <PasswordInputField placeholder="********" value={password} onChange={setPassword} />
          <TermsAndConditionsCheckbox />
          <SubscribeToNewsletterCheckbox />
          <div className="flex justify-center mt-6">
            <BigButtonBlue text="Sign Up" onClick={() => alert("Thank you for registering!")} />
          </div>
        </form>
        <div className="text-center mt-6 text-sm">
          Already have an account? <a href="/login" className="text-blue-300 hover:text-blue-600">Sign in.</a>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default RegisterPage;
