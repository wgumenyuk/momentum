import React from "react";
import { useNavigate } from "react-router-dom";

// Intern
import { User } from "$internal/api";
import { LogOutIcon } from "lucide-react";
import { BackgroundLayout } from "$components/Background";
import { Card } from "$components/Card";
import { Switch } from "$components/Switch";
import { Button } from "$components/Button";

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const response = await User.deleteAccount();

    if(!response) {
      // TODO Fehlernachricht.
      return;
    }

    if(!response.ok) {
      // TODO Fehlernachricht.
      return;
    }

    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">
        <div className="flex justify-between items-center h-8 mb-6">
          <h1 className="text-2xl font-bold text-grey-500">Profile</h1>
          <button className="text-grey-500" onClick={() => navigate("/logout")}>
            <LogOutIcon size="24px"/>
          </button>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <Card>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-0.5">
                <span className="text-xl">Username</span>
                <span className="text-sm">user@example.com</span>
              </div>
              <div className="w-16 h-16 bg-gray rounded-lg"/>
            </div> 
          </Card>

          <Card>
            <div className="flex justify-between items-center gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="font-bold">Private Profile</span>
                <span className="text-sm">
                  Your profile won't show up in any searches.
                </span>
              </div>
              <Switch onChange={() => {}}/>
            </div>
          </Card>

          <span className="block w-full h-px bg-gray rounded"/>

          <Button variant="red" onClick={handleDeleteAccount}>
            Delete Account
          </Button> 
        </div>
      </div>
    </BackgroundLayout>
  );
};
