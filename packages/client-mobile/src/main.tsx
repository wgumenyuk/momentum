import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "$components/pages/login";
import { Header } from "$components/header";
import { Button } from "$components/button";
import "./index.css";


const App: React.FC = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPage(true);
  };

  return (
    <React.StrictMode>
      <Header />
      {!showLoginPage && (
        <div className="flex justify-center mt-4">
          <Button onClick={handleLoginClick} text="Login" />
        </div>
      )}
      {showLoginPage && <LoginPage />}
    </React.StrictMode>
  );
};

const root = document.getElementById("root")!;
createRoot(root).render(<App />);
