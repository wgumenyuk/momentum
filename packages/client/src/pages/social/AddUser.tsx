import { useState } from "react";
import { XIcon } from "lucide-react";

// Intern
import { Friendships } from "$internal/api";
import { InputField } from "$components/InputField";

// Types
import type { FC } from "react";
import type { NavStack } from "$pages/social";
import { Button } from "$components/Button";

type AddUserProps = {
  setNavStack: (navStack: NavStack) => void;
};

/**
  `AddUser`-Page im Stack.
*/
export const AddUser: FC<AddUserProps> = ({ setNavStack }) => {
  const [ value, setValue ] = useState("");

  const sendRequest = async () => {
    if(!value) {
      return;
    }

    await Friendships.create(value);
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
        <InputField
          variant="text"
          value={value}
          onChange={(input) => setValue(input)}
          placeholder="Recipient ID"
        /> 
        <Button variant="blue" onClick={sendRequest}>
          Add friend
        </Button>
      </div>
    </div>
  );
};

