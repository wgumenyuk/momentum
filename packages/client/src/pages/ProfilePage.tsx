import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOutIcon,
  UserIcon,
  CheckIcon
} from "lucide-react";

// Intern
import { User } from "$internal/api";
import { useJwt } from "$components/JwtContext";
import { BackgroundLayout } from "$components/Background";
import { Card } from "$components/Card";
import { Input } from "$components/Input";
import { Switch } from "$components/Switch";
import { Button } from "$components/Button";

// Types
import type { FC } from "react";

type DisplayNameProps = {
  displayName: string;
};

const DisplayName: FC<DisplayNameProps> = ({
  displayName: _displayName
}) => {
  const [ displayName, setDisplayName ] = useState(_displayName);
  const [ showSuccess, setShowSuccess ] = useState(false);
  const [ error, setError ] = useState(false);

  const updateDisplayName = async () => {
    const response = await User.updateDisplayName(displayName);

    if(!response || !response.ok) {
      setError(true);
      return;
    }

    setShowSuccess(true);
    setError(false);

    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });

    setShowSuccess(false);
  };

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="font-bold">Display name</span>
          <span className="text-sm">
            This name will be seen publicly.
          </span>
        </div>
        <Input
          type="text"
          className="bg-blue-700"
          icon={UserIcon}
          value={displayName}
          onChange={(value) => setDisplayName(value)}
        />
        {error && (
          <span className="text-red-400 text-sm">
            Invalid display name. 
          </span>
        )}
        <Button
          variant="blue"
          onClick={updateDisplayName}
        >
          <span className="flex justify-center items-center gap-2">
            Save
            {showSuccess && (
              <CheckIcon size="24px" className="text-green-300"/>
            )}
          </span>
        </Button>
      </div>
    </Card>
  );
};

export const ProfilePage: FC = () => {
  const [ displayName, setDisplayName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ hasFailed, setHasFailed ] = useState(false);

  const navigate = useNavigate();
  const { jwt } = useJwt()!;

  const handleLogout = () => {
    navigate("/logout?return_to=/profile");
  };

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

  const fetchProfile = async () => {
    const response = await User.get(jwt!.id);

    if(!response || !response.ok) {
      setHasFailed(true); 
      return;
    }

    const { user } = response.data;

    setDisplayName(user.displayName || "");
    setEmail(user.email);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <BackgroundLayout>
      <div className="min-h-screen w-full bg-gray-900 p-6">
        <div className="flex justify-between items-center h-8 mb-6">
          <h1 className="text-2xl font-bold text-grey-500">Profile</h1>
          <button className="text-grey-500" onClick={handleLogout}>
            <LogOutIcon size="24px"/>
          </button>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {hasFailed && (
            <Card className="bg-red-400">
              <span>Failed to fetch your profile data.</span>
            </Card>
          )}

          {!hasFailed && (
            <>
              <Card>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xl font-bold">{displayName}</span>
                    <span className="text-sm">{email}</span>
                  </div>
                  <div className="w-16 h-16 bg-gray rounded-lg"/>
                </div> 
              </Card>

              <DisplayName displayName={displayName}/>

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
            </>
          )}
        </div>
      </div>
    </BackgroundLayout>
  );
};
