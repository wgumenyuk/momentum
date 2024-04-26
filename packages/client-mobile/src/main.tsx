import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "pages/login";
import Button from "$components/button/button";

// CSS
import "./index.css";
import Header from "$components/header/header";


const root = document.getElementById("root")!;

const App: React.FC = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const showLoginPageHandler = () => {
    setShowLoginPage(true);
  };

  return (
    <React.StrictMode>
      <Header />
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
