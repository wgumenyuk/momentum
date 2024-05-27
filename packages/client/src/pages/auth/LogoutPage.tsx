import React from "react";
import { BackgroundLayout } from "$components/Background";
import "./LogoutPageStyles.css";

const LogoutPage: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    // Redirect to login page after logout
    window.location.href = "/login";
  };

  const handleCancel = () => {
    // Redirect to the home page or any other page you want after canceling
    window.location.href = "/";
  };

  return (
    <BackgroundLayout>
      <div className="container">
        <div className="confirmation-box">
          <div className="question">Are you sure you want to log out?</div>
          <div className="options">
            <div className="option" onClick={handleLogout}>Yes</div>
            <div className="option" onClick={handleCancel}>No</div>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default LogoutPage;
