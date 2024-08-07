import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";
import {
  LogOutIcon,
  UserIcon,
  CheckIcon,
  FingerprintIcon,
  WeightIcon
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

type UserIdProps = {
  userId: string;
};

type DisplayNameProps = {
  displayName: string;
};

type WeightProps = {
  initialWeight: number;
};

type PrivacyProps = {
  isPrivate: boolean;
  setIsPrivate: (value: boolean) => void;
};

const UserId: FC<UserIdProps> = ({ userId }) => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="font-bold">User ID</span>
          <span className="text-sm">
            Others can use this ID to add you as a friend. 
          </span>
        </div>
        <Input
          type="text"
          className="bg-blue-700 pointer-events-none"
          icon={FingerprintIcon}
          value={userId}
          onChange={() => { /* noop */ }}
        />
      </div> 
    </Card>
  );
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

const Weight: FC<WeightProps> = ({
  initialWeight
}) => {
  const [ weight, setWeight ] = useState(initialWeight || 0);
  const [ showSuccess, setShowSuccess ] = useState(false);
  const [ error, setError ] = useState(false);

  const updateWeight = async () => {
    const response = await User.updateWeight(weight);

    if(!response || !response.ok) {
      console.log(response);
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
          <span className="font-bold">Weight</span>
          <span className="text-sm">
            Track your weight.
          </span>
        </div>
        <Input
          type="text"
          className="bg-blue-700"
          icon={WeightIcon}
          value={weight.toString()}
          onChange={(value) => setWeight(Number(value))}
        />
        {error && (
          <span className="text-red-400 text-sm">
            Invalid weight. 
          </span>
        )}
        <Button
          variant="blue"
          onClick={updateWeight}
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

const Privacy: FC<PrivacyProps> = ({ isPrivate, setIsPrivate }) => {
  const toggleAndSaveValue = async (value: boolean) => {
    const response = await User.updateProfilePrivacy(!value);

    if(!response || !response.ok) {
      console.error(response);
      return;
    }

    setIsPrivate(!value);
  };

  return (
    <Card>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="font-bold">Private Profile</span>
          <span className="text-sm">
            Other users won't be able to add you as a friend.
          </span>
        </div>
        <Switch
          isActive={isPrivate}
          onChange={debounce(toggleAndSaveValue, 1000)}
        />
      </div>
    </Card>
  );
};

export const ProfilePage: FC = () => {
  // TODO: States kombinieren
  const [ displayName, setDisplayName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ initialWeight, setInitialWeight ] = useState(0);
  const [ isPrivate, setIsPrivate ] = useState(false);
  const [ isSuccessful, setIsSuccessful ] = useState<boolean>();

  const navigate = useNavigate();
  const { jwt, setToken } = useJwt()!;

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

    setToken(null);
    navigate("/login");
  };

  const fetchProfile = async () => {
    const response = await User.get(jwt!.id);

    if(!response || !response.ok) {
      setIsSuccessful(false); 
      return;
    }

    const { user } = response.data;

    setDisplayName(user.displayName || "");
    setEmail(user.email);
    setInitialWeight(user.weight || NaN);
    setIsPrivate(user.isPrivate);
    setIsSuccessful(true);
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
          {!isSuccessful && (
            <Card className="bg-red-400">
              <span>Failed to fetch your profile data.</span>
            </Card>
          )}

          {isSuccessful === true && (
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

              <UserId userId={jwt!.id}/>
              <DisplayName displayName={displayName}/>
              <Weight initialWeight={initialWeight}/>
              <Privacy isPrivate={isPrivate} setIsPrivate={setIsPrivate}/>

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
