import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "$components/login/login";
import Button from "$components/button/button";

// CSS
import "./index.css";


const root = document.getElementById("root")!;

const App: React.FC = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const showLoginPageHandler = () => {
    setShowLoginPage(true);
  };

  return (
    <React.StrictMode>
      {showLoginPage && <LoginPage />}
      {!showLoginPage && (
        <div className="flex justify-center mt-4">
          <Button onClick={showLoginPageHandler} text="Login" />
        </div>
      )}
    </React.StrictMode>
  );
};

createRoot(root).render(<App />);
