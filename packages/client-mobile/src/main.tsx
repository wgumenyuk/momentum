import React from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "pages/login";
import Button from "$components/button/button";
import Header from "$components/header/header";

// CSS
import "./index.css";

const root = document.getElementById("root")!;

const App: React.FC = () => {
  const handleLoginClick = () => {
    createRoot(root).render(
      <React.StrictMode>
        <Header />
        <LoginPage />
      </React.StrictMode>
    );
  };

  return (
    <React.StrictMode>
      <Header />
      <div className="flex justify-center mt-4">
        <Button onClick={handleLoginClick} text="Login" />
      </div>
    </React.StrictMode>
  );
};

createRoot(root).render(<App />);
