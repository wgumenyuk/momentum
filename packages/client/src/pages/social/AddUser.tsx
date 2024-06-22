import { useState } from "react";
import { XIcon } from "lucide-react";

// Intern
import { Friendships } from "$internal/api";
import { FingerprintIcon } from "lucide-react";
import { Card } from "$components/Card";
import { Input } from "$components/Input";
import { Button } from "$components/Button";

// Types
import type { FC } from "react";
import type { NavStack } from "$pages/social";

type AddUserProps = {
  setNavStack: (navStack: NavStack) => void;
};

/**
  `AddUser`-Page im Stack.
*/
export const AddUser: FC<AddUserProps> = ({ setNavStack }) => {
  const [ value, setValue ] = useState("");
  const [ error, setError ] = useState("");
  const [ isSent, setIsSent ] = useState(false);

  const sendRequest = async () => {
    if(!value) {
      return;
    }

    const response = await Friendships.create(value);

    if(!response || !response.ok) {
      // TODO Genauere Fehlernachrichten hinzufügen.
      setError("Failed to send friend request.");
      return;
    }

    setIsSent(true);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 p-6">
      <div className="flex justify-between items-center h-8 mb-6">
        <h1 className="text-2xl font-bold text-grey-500">Add Friend</h1>
        <button className="text-grey-500" onClick={() => setNavStack("feed")}>
          <XIcon size="24px"/>
        </button>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <span>
          Add a friend with their ID.
        </span>

        {error && <Card className="bg-red-400">{error}</Card>}
        {isSent && <Card className="bg-green-400">Friend request sent.</Card>}

        <Input
          type="text"
          value={value}
          onChange={(input) => setValue(input)}
          icon={FingerprintIcon}
          placeholder="Recipient ID"
          className="bg-blue-800"
        /> 
        <Button variant="blue" onClick={sendRequest}>
          Add friend
        </Button>
      </div>
    </div>
  );
};

