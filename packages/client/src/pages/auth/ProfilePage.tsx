import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "$internal/api";
import { Button } from "$components/Button";

const ProfilePage: React.FC = () => {

  const navigate = useNavigate();


  const handleDeleteAccount = async () => {
    const response = await User.deleteAccount(); // Hier wird die Löschanfrage gesendet

    if(!response) {
      // TODO Fehlernachricht.
      return;
    }

    if(!response.ok) {
      // TODO Fehlernachricht.
      return;
    }

    // Nach erfolgreichem Löschen kann man den Benutzer abmelden und zur Startseite navigieren
    localStorage.removeItem("token");
    navigate("/goodbye");
  };

  return (
    <div className="bg-black text-white text-justify">
      <div className="space-x-4">
        <div className="flex justify-center mt-6">
          <Button onClick={handleDeleteAccount} variant="red">Delete Account</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
